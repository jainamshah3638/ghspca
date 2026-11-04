import heroDog from "@/assets/hero-dog.jpg";
import rescueCow from "@/assets/rescue-cow.jpg";
import rescueKitten from "@/assets/rescue-kitten.jpg";
import multiSpeciality from "@/assets/ghscpc_hospital.webp";
import ambulance from "@/assets/ambulance.jpg";
import causeBirds from "@/assets/cause-birds.jpg";
import causeSnake from "@/assets/cause-snake.jpg";
import kiteBird from "@/assets/cause/Kite.png";
import ambulanceLaunch from "@/assets/blog/ambulance-launch.jpg";
import birdRescue from "@/assets/blog/bird-rescue.jpg";

export interface BlogPostSection {
  type: "paragraph" | "heading" | "list" | "quote";
  content: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  img: string;
  content: BlogPostSection[];
  cta: {
    text: string;
    link: string;
    secondaryText?: string;
    secondaryLink?: string;
  };
}

export const blogs: BlogPost[] = [
  {
    slug: "5-simple-ways-you-can-help-stray-animals",
    title: "5 Simple Ways You Can Help Stray Animals in Your Neighborhood",
    excerpt: "Learn actionable, low-cost steps you can take today to support street dogs, cats, and birds facing daily struggles in our communities.",
    category: "Community Engagement",
    readTime: "4 min read",
    date: "May 24, 2026",
    author: "GHSPCA Volunteers",
    img: rescueKitten,
    content: [
      {
        type: "paragraph",
        content: "Street animals like stray dogs, cats, and community cattle lead extremely challenging lives in our urban neighborhoods. Every day, they face harsh weather conditions, chaotic traffic, a lack of safe shelter, and the constant struggle to find clean food and water. While solving systemic stray animal issues requires large-scale collective effort, simple acts of daily kindness from local residents can make a massive, immediate difference."
      },
      {
        type: "heading",
        content: "1. The Power of Clean Water"
      },
      {
        type: "paragraph",
        content: "In the scorching Indian heat, dehydration is one of the leading causes of illness and death among birds and stray animals. By placing a simple earthen water bowl outside your house, in your balcony, or near your apartment gate, you can save countless lives. Remember to rinse the bowl and change the water daily to keep it fresh and prevent mosquito breeding."
      },
      {
        type: "heading",
        content: "2. Drive Responsibly"
      },
      {
        type: "paragraph",
        content: "Street animals often seek warmth or shelter under parked vehicles, especially during monsoon rains or cold winter nights. Before you start your car, always make it a habit to check underneath the wheels and tap the hood to alert any sleeping kittens or dogs. Additionally, driving carefully and keeping speed limits under check in residential areas at night can prevent tragic accidents."
      },
      {
        type: "heading",
        content: "3. Mindful Feeding"
      },
      {
        type: "paragraph",
        content: "Many well-meaning animal lovers feed stray dogs Parle-G biscuits, sugary items, or cooked bones, unaware that these are highly toxic or hazardous. Dogs lack the enzymes to digest excessive sugar and wheat flour, which leads to painful skin issues and eventual digestive failure. Instead, offer them boiled rice with turmeric, boiled pumpkins, boiled eggs, or dedicated dog kibble. Avoid cooked bones as they can splinter and puncture their internal organs."
      },
      {
        type: "heading",
        content: "4. Coordinate, Don’t Just Report"
      },
      {
        type: "paragraph",
        content: "When you spot an injured animal, reporting it is only the first step. To ensure a successful rescue, share the exact live location with the NGO helpline, describe the injury clearly with a photo, and if possible, stay with the animal until the ambulance arrives. Scared and injured animals often run away when they hear vehicles, making it extremely hard for rescue teams to locate them if no one is guiding them."
      },
      {
        type: "heading",
        content: "Small Actions Lead to Big Impacts"
      },
      {
        type: "paragraph",
        content: "Helping animals doesn't require a large budget or endless free time. It starts with small, daily choices to accommodate the voiceless lives around us. By incorporating these simple habits into your neighborhood routine, you can be the reason an animal sleeps safe, hydrated, and fed tonight."
      },
      {
        type: "quote",
        content: "The greatness of a nation and its moral progress can be judged by the way its animals are treated. — Mahatma Gandhi"
      }
    ],
    cta: {
      text: "Support Our Rescue Mission",
      link: "/donate",
      secondaryText: "Volunteer With Us",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "protecting-our-avian-friends-from-kite-strings",
    title: "Beyond the Festivities: Protecting Our Avian Friends from Kite Strings and Manja",
    excerpt: "Address a major surge period for SPCA rescues (Sankranti/Uttarayan) and discover how you can keep birds safe from lethal glass-coated threads.",
    category: "Seasonal Awareness",
    readTime: "5 min read",
    date: "May 18, 2026",
    author: "Avian Rescue Division",
    img: causeBirds,
    content: [
      {
        type: "paragraph",
        content: "Festive seasons like Sankranti and Uttarayan fill our skies with vibrant colors and joyful kite-flying celebrations. However, beneath the joy lies a silent, painful tragedy for thousands of birds. Pigeons, owls, eagles, and migratory birds are severely injured, maimed, or killed every year as they get entangled in sharp, coated kite-flying threads."
      },
      {
        type: "heading",
        content: "The Hidden Threat of Chinese/Nylon Manja"
      },
      {
        type: "paragraph",
        content: "In recent years, the use of Chinese or nylon manja (glass-coated synthetic string) has surged. Unlike traditional cotton thread, nylon manja is incredibly strong, stretchable, and virtually non-biodegradable. It acts like a razor-sharp wire in the sky, cutting through birds' wings, muscles, and bones. Even months after the festival, discarded strings hanging on tree branches and power lines continue to entrap and kill birds."
      },
      {
        type: "heading",
        content: "Safe Festive Practices"
      },
      {
        type: "paragraph",
        content: "You can enjoy the traditions of kite flying while keeping the skies safe for our avian friends. Follow these simple guidelines during festive times:"
      },
      {
        type: "list",
        content: [
          "Avoid flying kites during early mornings (6 AM - 9 AM) and late evenings (5 PM - 7 PM), which are peak flight and feeding hours for birds.",
          "Switch to traditional cotton threads (Sada Manja) which are biodegradable and far less lethal.",
          "Never leave discarded string lying around on terraces, trees, or electricity poles; gather and dispose of it responsibly."
        ]
      },
      {
        type: "heading",
        content: "First-Aid & Emergency Response"
      },
      {
        type: "paragraph",
        content: "If you find an entangled or injured bird, act immediately but gently. Do not aggressively pull the string, as it can deepen wounds or amputate limbs. Keep the bird in a dark, warm, well-ventilated cardboard box to reduce shock. Avoid giving water forcefully to an unconscious bird. Call the GHSPCA emergency helpline immediately to get professional veterinary care."
      }
    ],
    cta: {
      text: "Donate to Avian Rescue Camps",
      link: "/donate",
      secondaryText: "Report an Injured Bird",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "behind-the-scenes-a-day-in-the-life-of-spca-rescue",
    title: "Behind the Scenes: A Day in the Life of an SPCA Rescue Team",
    excerpt: "Join our on-ground crew to see what a full day of emergency ambulance dispatches, highway rescues, and veterinary care looks like.",
    category: "Impact & Transparency",
    readTime: "6 min read",
    date: "May 10, 2026",
    author: "Ambulance Team Lead",
    img: ambulance,
    content: [
      {
        type: "paragraph",
        content: "For the GHSPCA rescue team, a typical day doesn't start at a desk. It begins at 7:00 AM in our control center, where the emergency phone lines are already ringing. From reports of injured street dogs to trapped cows and abandoned pets, our rescue coordinators work quickly to dispatch ambulances across the city."
      },
      {
        type: "heading",
        content: "The Emergency Dispatch"
      },
      {
        type: "paragraph",
        content: "No two calls are the same. One morning, we receive a call about a puppy trapped deep inside a flooded drainage pipe, followed immediately by another alert of a cattle accident on a high-speed highway. Our teams must maintain their focus, coordinate medical supplies, and head straight into the field."
      },
      {
        type: "heading",
        content: "The On-Field Hustle"
      },
      {
        type: "paragraph",
        content: "Operating an animal rescue ambulance requires extreme patience and resourcefulness. Rescue workers must navigate heavy city traffic, locate scared or aggressive injured animals who view human helpers as threats, and perform delicate captures. On-site first-aid, such as cleaning maggots, applying splints, and administering pain relief, is often completed right inside the ambulance."
      },
      {
        type: "heading",
        content: "The Road to Recovery"
      },
      {
        type: "paragraph",
        content: "Once the animal is safely brought to the GHSPCA shelter hospital, the recovery process begins. Our skilled veterinarians perform immediate diagnostic checks, including X-rays and blood tests, followed by surgeries or wound dressings. In the recovery wards, animals receive daily nutritious meals, clean shelter, and the care they need to heal completely before they are vaccinated, sterilized, and eventually released back to their safe habitats."
      }
    ],
    cta: {
      text: "Sponsor an Ambulance Run",
      link: "/donate",
      secondaryText: "Learn About Our Impact",
      secondaryLink: "/impact"
    }
  },
  {
    slug: "why-adopting-an-indie-animal-will-change-your-life",
    title: "Why Adopting an Indie Animal Will Change Your Life (And Theirs)",
    excerpt: "Explore the health, loyalty, and environmental benefits of adopting native Indian dogs and cats over purchasing pedigree breeds.",
    category: "Adoption & Foster",
    readTime: "5 min read",
    date: "May 02, 2026",
    author: "Shelter Coordinator",
    img: heroDog,
    content: [
      {
        type: "paragraph",
        content: "When families decide to bring a pet home, their first instinct is often to search for pedigree breeds like Labradors, Pugs, or Persians. However, native Indian (Indie) dogs and cats—often called Desi breeds—are some of the most intelligent, affectionate, and healthy animals you could ever invite into your life. Choosing adoption over buying is a powerful decision that saves a life."
      },
      {
        type: "heading",
        content: "1. Naturally Fit and Perfectly Adapted"
      },
      {
        type: "paragraph",
        content: "Indie dogs and cats have evolved over thousands of years to thrive in the Indian climate. Unlike imported breeds who struggle with Indian heat and monsoons, native breeds are incredibly robust. They possess highly resilient immune systems, are less prone to genetic diseases (like hip dysplasia in Labradors or breathing problems in Pugs), and require minimal grooming and maintenance."
      },
      {
        type: "heading",
        content: "2. Incredibly Intelligent and Loyal"
      },
      {
        type: "paragraph",
        content: "Rescued street dogs and cats are exceptionally street-smart, highly observant, and quick learners. When brought into a loving home, their gratitude is unmatched. They form deep, lifelong bonds of loyalty and protective affection with their adoptive families, adapting seamlessly to apartment life and household schedules."
      },
      {
        type: "heading",
        content: "3. Combating Cruel Breeding Houses"
      },
      {
        type: "paragraph",
        content: "The commercial pedigree pet trade in India is filled with illegal puppy mills and backyard breeders. Mother dogs are kept in tiny, filthy cages and bred repeatedly without proper medical care, resulting in sick puppies with severe genetic flaws. When you adopt a street dog or cat from a shelter, you refuse to fund this cycle of exploitation and instead free up shelter space for another animal in distress."
      },
      {
        type: "heading",
        content: "How the SPCA Adoption Process Works"
      },
      {
        type: "paragraph",
        content: "Adopting from GHSPCA is a smooth, transparent, and supportive journey. We guide families through counseling to help match them with the right puppy or adult dog, perform a simple home check to ensure a safe environment, and provide post-adoption support (including advice on diet, training, and healthcare) to make the transition as easy as possible."
      }
    ],
    cta: {
      text: "Visit Our Adoption Gallery",
      link: "/causes",
      secondaryText: "Contact Adoption Team",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "the-truth-about-street-dog-populations-abc-vaccinations",
    title: "The Truth About Street Dog Populations: Why ABC and Vaccinations Are the Real Solution",
    excerpt: "Demystify stray dog management, understand the 'vacuum effect', and learn why sterilization and rabies vaccinations keep neighborhoods safe.",
    category: "Education & ABC",
    readTime: "6 min read",
    date: "Apr 25, 2026",
    author: "Veterinary Director",
    img: rescueCow,
    content: [
      {
        type: "paragraph",
        content: "As Indian cities grow rapidly, human-animal conflicts and concerns regarding street dog populations have become prominent topics in local communities. While some residents react with hostility or call for the relocation of stray dogs, scientific research and law prove that humane population management is the only lasting and effective solution."
      },
      {
        type: "heading",
        content: "Why Relocation Doesn’t Work"
      },
      {
        type: "paragraph",
        content: "Relocating street dogs is not only illegal under Indian law but also biologically counterproductive. In ecology, this is known as the 'vacuum effect.' When dogs are removed from a specific neighborhood, a void is created. Unvaccinated, unsterilized dogs from neighboring areas will quickly move in to occupy the available food sources (garbage piles, feeding spots) and breed rapidly. This leads to a rise in dog populations and increased aggression due to territorial battles."
      },
      {
        type: "heading",
        content: "The Scientific Solution: Animal Birth Control (ABC)"
      },
      {
        type: "paragraph",
        content: "The only scientific and humane method to control stray dog populations is the Animal Birth Control (ABC) program, combined with Anti-Rabies Vaccinations (ARV). Under this program, street dogs are systematically captured, sterilized by qualified veterinarians, vaccinated against Rabies, and released back to the exact location they were picked from. Over time, the population stabilizes and naturally declines."
      },
      {
        type: "heading",
        content: "The Benefits to the Community"
      },
      {
        type: "paragraph",
        content: "Implementing a systematic ABC program directly benefits local human neighborhoods. Sterilized dogs are significantly calmer, quieter, and show little to no territorial aggression as the mating hormone cycle is stopped. Vaccinated dogs create a protective barrier against Rabies, ensuring that the community remains fully safe from the transmission of the virus."
      },
      {
        type: "heading",
        content: "How Citizens Can Help"
      },
      {
        type: "paragraph",
        content: "Residents and housing societies can play an active role in creating peaceful co-existence. Instead of chasing away street dogs, collaborate with GHSPCA to organize structured sterilization and vaccination drives in your area. Set up designated feeding spots away from high-traffic zones to prevent dogs from begging and establish a friendly relationship with community animals."
      }
    ],
    cta: {
      text: "Sponsor a Sterilization & Vaccine",
      link: "/donate",
      secondaryText: "Request an RWA Drive",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "maneka-gandhi-launches-new-ghspca-animal-ambulance",
    title: "Maneka Gandhi Launches a New GHSPCA Animal Ambulance in Hyderabad",
    excerpt: "Our chief patron flagged off a new animal ambulance, launched a donation scheme and inspected progress on our multi-speciality animal hospital at Begum Bazaar.",
    category: "In the Press",
    readTime: "3 min read",
    date: "Mar 29, 2026",
    author: "GHSPCA Team",
    img: ambulanceLaunch,
    content: [
      {
        type: "paragraph",
        content: "GHSPCA's work was featured in Telangana Today on 29 March 2026. Our chief patron, animal activist and former MP Maneka Gandhi, visited Hyderabad to launch a new GHSPCA animal ambulance and to commence a new donation scheme in support of our rescue work."
      },
      {
        type: "heading",
        content: "One More Ambulance on Hyderabad's Roads"
      },
      {
        type: "paragraph",
        content: "Every minute counts when an animal is injured on the road. The new ambulance adds to our ability to reach animals in distress quickly and bring them in for treatment. Anyone who sees an animal in need can call our helpline at 9394578568 — your call can save a life."
      },
      {
        type: "heading",
        content: "Progress on the Multi-Speciality Animal Hospital"
      },
      {
        type: "paragraph",
        content: "During the visit, Maneka Gandhi inspected the ongoing construction of GHSPCA's multi-speciality animal hospital and shelter at Begum Bazaar. She said that the long-pending construction work would be completed soon — a milestone that will let us treat and house far more animals under one roof."
      },
      {
        type: "heading",
        content: "Awareness Drives for Mahaveer Jayanti"
      },
      {
        type: "paragraph",
        content: "On the occasion of Mahaveer Jayanti, GHSPCA set up awareness stalls at Exhibition Ground, Nampally and Imperial Garden, Secunderabad, inviting citizens to learn about our work and join the donation drive."
      },
      {
        type: "quote",
        content: "GHSPCA chief patron Maneka Gandhi launching the ambulance. — Telangana Today, 29 March 2026"
      },
      {
        type: "paragraph",
        content: "None of this happens without our volunteers and supporters. Thank you to everyone in the GHSPCA team who turned out to make the day a success."
      }
    ],
    cta: {
      text: "Support Our Ambulance Service",
      link: "/donate",
      secondaryText: "Become a Volunteer",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "chinese-manja-threatens-birds-kite-safety-tips",
    title: "Chinese Manja Threatens Birds: Why We Are Campaigning Against Glass-Coated Thread",
    excerpt: "Last year over 150 birds were rescued from kite-string injuries, yet nearly half did not survive. Here is why glass-coated manja is so deadly, and how to fly kites safely.",
    category: "In the Press",
    readTime: "3 min read",
    date: "Jan 10, 2026",
    author: "GHSPCA Team",
    img: kiteBird,
    content: [
      {
        type: "paragraph",
        content: "Ahead of the kite-flying season, Deccan Chronicle reported on 10 January 2026 that GHSPCA had shared a list of tips to make kite flying safer for birds, and launched awareness drives across Hyderabad against the use of Chinese manja and glass-coated thread."
      },
      {
        type: "heading",
        content: "The Hidden Cost of a Kite Festival"
      },
      {
        type: "paragraph",
        content: "Glass-coated thread is designed to cut other kites — and it cuts birds just as easily. Birds caught in it suffer deep wounds to their wings and bodies, often while the thread is still tangled around them."
      },
      {
        type: "quote",
        content: "Last year, over 150 birds were rescued, but nearly 50 per cent of them died during treatment due to the severity of injuries. — A veterinary doctor associated with GHSPCA"
      },
      {
        type: "paragraph",
        content: "According to our veterinary team, birds injured by glass-coated thread often take weeks to recover, as the wounds severely affect their wings and ability to fly. For many, the injuries are simply too severe to survive."
      },
      {
        type: "heading",
        content: "How You Can Fly Kites Responsibly"
      },
      {
        type: "list",
        content: [
          "Use plain cotton thread instead of Chinese manja or glass-coated thread.",
          "Avoid flying kites in the early morning and evening, when birds are most active.",
          "Collect and safely dispose of broken or loose thread so it doesn't tangle on trees and wires.",
          "If you find an injured bird, keep it in a ventilated box in a quiet place and call GHSPCA right away."
        ]
      },
      {
        type: "paragraph",
        content: "A festival of joy shouldn't come at the cost of the birds we share our skies with. A small change in the thread you buy can save lives."
      }
    ],
    cta: {
      text: "Support Bird Rescue",
      link: "/donate",
      secondaryText: "Report an Injured Bird",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "indian-rollers-rescued-on-dasara",
    title: "Indian Rollers Rescued on Dasara: Why Wild Birds Belong in the Wild",
    excerpt: "During Dasara, GHSPCA rescued six Indian rollers (Palapitta) kept captive for the festival. Five were released into the Narsapur forest.",
    category: "In the Press",
    readTime: "3 min read",
    date: "Oct 8, 2025",
    author: "GHSPCA Team",
    img: birdRescue,
    content: [
      {
        type: "paragraph",
        content: "The Indian roller, known locally as Palapitta, is the state bird of Telangana and is traditionally sighted during Dasara. Sadly, this tradition leads some people to trap and cage these birds so others can \"see\" them during the festival. Deccan Chronicle reported on 8 October 2025 that 14 Indian rollers were rescued in Hyderabad during the festival."
      },
      {
        type: "heading",
        content: "The Rescues"
      },
      {
        type: "paragraph",
        content: "GHSPCA rescued six Indian rollers, of which one died. The remaining five were released into the Narsapur forest. Separately, wildlife rescuers from Nehru Zoological Park and the police rescued eight more rollers; four of those birds died despite treatment, while four were released in the zoo's garden."
      },
      {
        type: "heading",
        content: "Captivity Weakens Wild Birds"
      },
      {
        type: "paragraph",
        content: "Many of the rescued birds were extremely weak when they were brought in. GHSPCA coordinator Soudharm Bhandari stressed that wild birds must be released into their natural habitat."
      },
      {
        type: "quote",
        content: "Prolonged confinement in cages severely weakens wild birds. — Dr Vishva Chaitany, Veterinarian"
      },
      {
        type: "paragraph",
        content: "As our veterinary team explained, the survival of a rescued bird depends on its health, the timing of the rescue and how it was handled. The sooner a captive bird is reported, the better its chances."
      },
      {
        type: "heading",
        content: "Celebrate Without Cages"
      },
      {
        type: "list",
        content: [
          "Never buy or pay to see a caged Indian roller or any other wild bird.",
          "If you see wild birds being sold or displayed, report it to GHSPCA or the Forest Department.",
          "Share this message with family and friends before the festive season."
        ]
      }
    ],
    cta: {
      text: "Support Wildlife Rescue",
      link: "/donate",
      secondaryText: "Report a Captive Bird",
      secondaryLink: "/contact"
    }
  },
  {
    slug: "increased-awareness-leads-to-reduced-snake-cruelty",
    title: "Increased Awareness Leads to Reduced Snake Cruelty During Naga Panchami",
    excerpt: "Snake cruelty cases in Hyderabad have dropped sharply — from over 200 snakes rescued each Naga Panchami to just 11 in 2024. Here is how awareness made the difference.",
    category: "In the Press",
    readTime: "4 min read",
    date: "Jul 25, 2025",
    author: "GHSPCA Team",
    img: causeSnake,
    content: [
      {
        type: "paragraph",
        content: "Metro India reported on 25 July 2025 that snake cruelty cases in Hyderabad have dropped considerably, thanks to growing awareness. According to GHSPCA coordinator Soudharm Bhandari, when we started this initiative 19 years ago, we were rescuing over 200 snakes each Naga Panchami. Thanks to persistent awareness campaigns and public cooperation, that number dropped dramatically to just 11 rescues in 2024."
      },
      {
        type: "paragraph",
        content: "Since 2005, GHSPCA has rescued a staggering 5,276 snakes from illegal captivity, public abuse, and near-certain death, especially during the Naga Panchami season."
      },
      {
        type: "heading",
        content: "The Most Misunderstood Species in the World"
      },
      {
        type: "paragraph",
        content: "Due to deep-rooted superstition during Naga Panchami, people feed milk to snakes whose bodies can't digest it, and decorate them with kumkum (vermilion) for money and spectacle. Snake charmers capture cobras and other species weeks ahead of the festival, often defanging them, crushing their venom glands and stitching their mouths shut, before keeping them in dark, airless boxes without food or water."
      },
      {
        type: "paragraph",
        content: "Contrary to popular opinion, not all snakes are dangerous — yet people often kill snakes on sight."
      },
      {
        type: "quote",
        content: "The Wildlife Protection Act, 1972 clearly prohibits the capture, possession, and public display of snakes. These actions are treated as serious criminal offences under non-bailable sections."
      },
      {
        type: "heading",
        content: "Volunteers on the Ground"
      },
      {
        type: "paragraph",
        content: "Each year, GHSPCA volunteers work alongside the Forest Department and animal welfare organisations such as People for Animals (PFA) to prevent snake abuse during the festival. Localities such as Shalibanda, Hussaini Alam, Gowlipura, Begum Bazar, Doodhbowli, Lal Darwaza, Ramkoti, Mogalpura and Kamatipura have been hotspots for snake-related cruelty in recent years. GHSPCA and PFA teams, equipped with rescue gear and veterinary support, actively patrol these areas during the festival."
      },
      {
        type: "quote",
        content: "We are not against the festival. We are against the pain inflicted on innocent creatures under the guise of tradition. — Soudharm Bhandari, GHSPCA"
      },
      {
        type: "heading",
        content: "Report Snake Cruelty"
      },
      {
        type: "paragraph",
        content: "We request all citizens to report any snake charmers they spot. To report snake cruelty or sightings during Naga Panchami, contact:"
      },
      {
        type: "list",
        content: [
          "Telangana Forest Department: 1800 4255 364",
          "GHSPCA: 88867 43881, 93945 78568",
          "PFA: 90491 49601"
        ]
      }
    ],
    cta: {
      text: "Support Snake Rescue",
      link: "/donate",
      secondaryText: "Report Snake Cruelty",
      secondaryLink: "/contact"
    }
  }
];
