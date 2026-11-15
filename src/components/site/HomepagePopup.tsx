
"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  X,
  HeartHandshake,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const HomepagePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .ghspca-overlay {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0,0,0,.65);
          backdrop-filter: blur(5px);
          font-family: Arial, sans-serif;
        }

        .ghspca-popup {
          position: relative;
          width: 100%;
          max-width: 590px;
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          padding: 35px;
          border-radius: 20px;
          background: #fff;
          color: #263b2d;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,.25);
          animation: ghspca-appear .3s ease;
        }

        @keyframes ghspca-appear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ghspca-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          background: #edf4ee;
          color: #286d40;
        }

        .ghspca-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
          color: #258044;
        }

        .ghspca-label {
          color: #398052;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .ghspca-title {
          margin: 15px 0;
          color: #203b29;
          font-family: Georgia, serif;
          font-size: 31px;
          line-height: 1.2;
        }

        .ghspca-title span {
          color: #398052;
        }

        .ghspca-text {
          color: #53645a;
          font-size: 14px;
          line-height: 1.7;
        }

        .ghspca-description {
          margin-bottom: 22px;
        }

        .ghspca-details {
          padding: 18px;
          margin: 20px 0;
          border: 1px solid #e4ede5;
          border-radius: 13px;
          background: #fafcf9;
          text-align: left;
        }

        .ghspca-detail {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .ghspca-detail:last-child {
          margin-bottom: 0;
        }

        .ghspca-detail svg {
          flex-shrink: 0;
          color: #32804d;
          width: 21px;
        }

        .ghspca-detail small {
          display: block;
          margin-bottom: 5px;
          color: #829087;
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .ghspca-detail strong {
          display: block;
          color: #34483a;
          font-size: 13px;
          line-height: 1.5;
        }

        .ghspca-commitment {
          padding: 15px;
          border-radius: 12px;
          background: #eff8f0;
          border: 1px solid #d9eadc;
        }

        .ghspca-commitment small {
          color: #398052;
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .ghspca-commitment h3 {
          margin: 8px 0;
          color: #237342;
          font-size: 23px;
        }

        .ghspca-commitment span {
          color: #536d5a;
          font-size: 13px;
        }

        .ghspca-closing {
          margin: 20px 0;
          color: #344c3a;
          font-family: Georgia, serif;
          font-size: 16px;
        }

        .ghspca-button {
          display: inline-block;
          padding: 14px 35px;
          border-radius: 8px;
          background: #258044;
          color: white !important;
          text-decoration: none !important;
          font-size: 15px;
          font-weight: bold;
          transition: .2s;
        }

        .ghspca-button:hover {
          background: #1b6335;
          transform: translateY(-2px);
        }

        .ghspca-footer {
          margin-top: 17px;
          color: #87928a;
          font-size: 11px;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .ghspca-overlay {
            padding: 12px;
          }

          .ghspca-popup {
            padding: 28px 18px;
            max-height: calc(100dvh - 24px);
          }

          .ghspca-title {
            font-size: 25px;
          }

          .ghspca-detail strong {
            font-size: 12px;
          }
        }
      `}</style>

      <div
        className="ghspca-overlay"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <div
          className="ghspca-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ghspca-title"
        >
          <button
            className="ghspca-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            type="button"
          >
            <X size={22} />
          </button>

          <div className="ghspca-icon">
            <HeartHandshake size={38} />
          </div>

          <span className="ghspca-label">
            GHSPCA ANNOUNCEMENT
          </span>

          <h2 className="ghspca-title" id="ghspca-title">
            A New Home for Hope.
            <br />
            <span>A New Beginning for Stray Lives.</span>
          </h2>

          <p className="ghspca-text">
            We are delighted to announce the opening of our new
            <strong> Multi-Speciality Animal Hospital &amp; Shelter </strong>
            in Hyderabad.
          </p>

          <p className="ghspca-text ghspca-description">
            Dedicated exclusively to stray animals and birds,
            our hospital aims to provide them with essential
            veterinary care, treatment and support.
          </p>

          <div className="ghspca-details">
            <div className="ghspca-detail">
              <CalendarDays />
              <div>
                <small>DATE</small>
                <strong>Monday, 30th November 2026</strong>
              </div>
            </div>

            <div className="ghspca-detail">
              <Clock3 />
              <div>
                <small>TIME</small>
                <strong>11:00 AM onwards</strong>
              </div>
            </div>

            <div className="ghspca-detail">
              <MapPin />
              <div>
                <small>VENUE</small>
                <strong>
                  Muslim Jung Brg, Shakar Bazaar,
                  Afzal Gunj, Hyderabad, Telangana - 500012
                </strong>
              </div>
            </div>
          </div>

          <div className="ghspca-commitment">
            <small>OUR SPECIAL COMMITMENT</small>
            <h3>FREE TREATMENT</h3>
            <span>For Stray Animals &amp; Birds</span>
          </div>

          <h4 className="ghspca-closing">
            Every Life Deserves Care. Every Life Matters.
          </h4>

          <Link
            to="/about"
            className="ghspca-button"
            onClick={() => setIsOpen(false)}
          >
            Know More →
           </Link>

        </div>
      </div>
    </>
  );
};

export default HomepagePopup;
