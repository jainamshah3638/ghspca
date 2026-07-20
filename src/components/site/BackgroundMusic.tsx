import { useEffect, useRef, useState } from "react";

const CONSENT_KEY = "ghspca_music_consent";

type State = "idle" | "playing" | "paused" | "muted";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // "unknown"  → haven't asked yet (show banner)
  // "accepted" → user allowed (play music)
  // "declined" → user declined (hide everything)
  const [consent, setConsent] = useState<"unknown" | "accepted" | "declined">("unknown");

  // Read localStorage after mount — also marks the component as ready to render.
  // Keeping both in one effect guarantees the consent value is correct before
  // anything is painted, eliminating the banner flash.
  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted" || saved === "declined") {
      setConsent(saved);
    }
    setMounted(true);
  }, []);

  const [musicState, setMusicState] = useState<State>("idle");
  const [showTooltip, setShowTooltip] = useState(false);

  /* ── Create audio on mount ── */
  useEffect(() => {
    const audio = new Audio("/namami-nemi.mp3");
    audio.loop = true;
    audio.volume = 1;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  /* ── If already accepted (returning visitor), try autoplay ── */
  useEffect(() => {
    if (consent !== "accepted") return;
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setMusicState("playing"))
      .catch(() => setMusicState("idle")); // still show button; user can click it
  }, [consent]);

  /* ── Accept handler: save consent + start music ── */
  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setMusicState("playing"))
      .catch(() => setMusicState("idle"));
  };

  /* ── Decline handler ── */
  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
  };

  /* ── Play / Pause handler ── */
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicState === "idle" || musicState === "paused") {
      audio
        .play()
        .then(() => setMusicState("playing"))
        .catch(() => { });
    } else if (musicState === "playing" || musicState === "muted") {
      audio.pause();
      audio.muted = false; // clear mute so resume works cleanly
      setMusicState("paused");
    }
  };

  /* ── Mute / Unmute handler ── */
  const handleMuteToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicState === "playing") {
      audio.muted = true;
      setMusicState("muted");
    } else if (musicState === "muted") {
      audio.muted = false;
      setMusicState("playing");
    }
  };

  const isPlaying = musicState === "playing";
  const isPaused = musicState === "paused";
  const isMuted = musicState === "muted";
  const isIdle = musicState === "idle";

  // Don't render anything until localStorage has been read.
  // This prevents the banner from flashing on returning visitors.
  if (!mounted) return null;
  if (consent === "declined") return null;

  return (
    <>
      <style>{`
        @keyframes music-pulse {
          0%,100% { box-shadow: 0 0 0 0 oklch(0.48 0.13 152 / 0.45); }
          60%      { box-shadow: 0 0 0 10px oklch(0.48 0.13 152 / 0); }
        }
        @keyframes note-float {
          0%   { opacity:0; transform:translateY(0) scale(.8); }
          25%  { opacity:1; }
          100% { opacity:0; transform:translateY(-38px) scale(1.1); }
        }
        @keyframes banner-slide-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .music-pulse { animation: music-pulse 2s ease-in-out infinite; }
        .note-a { animation: note-float 2.2s ease-out infinite 0s; }
        .note-b { animation: note-float 2.2s ease-out infinite .75s; }
        .note-c { animation: note-float 2.2s ease-out infinite 1.5s; }
        .cookie-banner { animation: banner-slide-up 0.4s ease; }

        /* Pill widget */
        #bg-music-wrap { position:fixed; bottom:24px; left:24px; z-index:9999; }

        .music-pill {
          display: flex; align-items: center; gap: 2px;
          background: oklch(0.22 0.03 145);
          border-radius: 999px;
          padding: 5px;
          box-shadow: 0 4px 20px oklch(0 0 0 / 0.22);
        }
        .music-pill-btn {
          width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, transform .15s;
          color: white;
          background: transparent;
        }
        .music-pill-btn:hover  { background: oklch(1 0 0 / 0.10); }
        .music-pill-btn:active { transform: scale(.88); }
        .music-pill-btn.active { background: oklch(0.46 0.13 152); }
        .music-pill-btn.active.music-pulse { animation: music-pulse 2s ease-in-out infinite; }
        .pill-divider {
          width: 1px; height: 20px;
          background: oklch(1 0 0 / 0.15);
          flex-shrink: 0;
        }

        .music-tooltip {
          position:absolute; bottom:58px; left:0;
          background:oklch(0.14 0.03 145); color:#fff;
          font-size:11px; font-family:'Inter',sans-serif; font-weight:500;
          padding:5px 11px; border-radius:8px; white-space:nowrap;
          pointer-events:none; box-shadow:0 4px 16px oklch(0 0 0/.22);
          opacity:0; transform:translateY(4px);
          transition:opacity .2s, transform .2s;
        }
        #bg-music-wrap:hover .music-tooltip { opacity:1; transform:translateY(0); }
      `}</style>

      {/* ── Cookie / Music Consent Banner ── */}
      {consent === "unknown" && (
        <div
          className="cookie-banner"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10000,
            background: "oklch(0.99 0.008 95)",
            border: "1px solid oklch(0.88 0.018 100)",
            borderRadius: "16px",
            boxShadow: "0 8px 40px oklch(0.3 0.05 145 / 0.18)",
            padding: "18px 22px",
            maxWidth: "480px",
            width: "calc(100vw - 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontSize: "20px", marginTop: "1px" }}>🍪</span>
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "oklch(0.22 0.03 145)",
                  lineHeight: 1.3,
                }}
              >
                We use cookies
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "oklch(0.48 0.02 145)",
                  lineHeight: 1.5,
                }}
              >
                We use cookies to enhance your browsing experience, analyse site
                traffic, and personalise content. By clicking "Accept", you
                consent to our use of cookies.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <button
              onClick={handleDecline}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid oklch(0.85 0.015 100)",
                background: "transparent",
                color: "oklch(0.45 0.02 145)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "oklch(0.95 0.01 100)")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "transparent")
              }
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "none",
                background: "oklch(0.46 0.13 152)",
                color: "white",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 2px 10px oklch(0.46 0.13 152 / 0.35)",
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "oklch(0.40 0.13 152)")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "oklch(0.46 0.13 152)")
              }
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* ── Floating Player Pill (shown after consent) ── */}
      {consent === "accepted" && (
        <div id="bg-music-wrap">

          {/* Floating notes — only while actively playing */}
          {isPlaying && (
            <div style={{ position: "absolute", bottom: "58px", left: "14px", pointerEvents: "none" }}>
              <span className="note-a" style={{ position: "absolute", fontSize: "13px", color: "oklch(0.66 0.16 150)" }}>♪</span>
              <span className="note-b" style={{ position: "absolute", fontSize: "11px", left: "12px", color: "oklch(0.55 0.13 152)" }}>♫</span>
              <span className="note-c" style={{ position: "absolute", fontSize: "10px", left: "-4px", color: "oklch(0.72 0.14 145)" }}>♩</span>
            </div>
          )}

          {/* Tooltip */}
          <div className="music-tooltip">
            <span style={{ opacity: 0.8, fontSize: "10px" }}>
              {isIdle ? "Click ▶ to start" :
                isPaused ? "Paused" :
                  isMuted ? "Muted" :
                    "Playing"}
            </span>
          </div>

          {/* Pill */}
          <div className={`music-pill${isPlaying ? " music-pulse" : ""}`}>

            {/* ▶ / ⏸ Play-Pause */}
            <button
              className={`music-pill-btn${(isPlaying || isMuted) ? " active" : ""}`}
              onClick={handlePlayPause}
              aria-label={isPlaying || isMuted ? "Pause" : "Play"}
              title={isPlaying || isMuted ? "Pause" : "Play"}
            >
              {isPlaying || isMuted ? (
                /* Pause icon */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                /* Play icon */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Divider — only when audio is active */}
            {!isIdle && !isPaused && <div className="pill-divider" />}

            {/* 🔊 / 🔇 Mute-Unmute — only when playing or muted */}
            {(isPlaying || isMuted) && (
              <button
                className="music-pill-btn"
                onClick={handleMuteToggle}
                aria-label={isMuted ? "Unmute" : "Mute"}
                title={isMuted ? "Unmute" : "Mute"}
                style={{ color: isMuted ? "oklch(0.65 0.02 145)" : "white" }}
              >
                {isMuted ? (
                  /* Muted / crossed speaker */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  /* Sound waves */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
            )}

          </div>
        </div>
      )}
    </>
  );
}
