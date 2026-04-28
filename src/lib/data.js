// src/lib/data.js

export const services = [
  {
    id: "ear-disorders",
    title: "Ear Disorders",
    shortDesc:
      "Expert treatment for ear infections, hearing loss, tinnitus, microsurgery and eardrum repair.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a65417c8edc9dd937948e4c9bd93021851bc5266.jpg",
    imageAlt: "ENT doctor performing ear examination with otoscope",
    conditions: [
      "Ear Infections (Otitis Media & Externa)",
      "Ear Wax Removal & Ear Cleaning",
      "Hearing Loss & Deafness",
      "Tinnitus (Ringing in Ears)",
      "Eardrum Perforation",
      "Ear Discharge (Otorrhoea)",
      "Otosclerosis",
      "Mastoiditis",
    ],
    procedures: [
      "Ear Microsurgery",
      "Myringoplasty",
      "Mastoidectomy",
      "Grommet Insertion",
    ],
  },
  {
    id: "nose-sinus",
    title: "Nose & Sinus",
    shortDesc:
      "Care for sinusitis, nasal polyps, deviated septum, allergic rhinitis and nasal endoscopy.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f81cfbe01342684169d15dddd09588ffe21ca5b3.jpg",
    imageAlt: "Doctor performing nasal endoscopy on patient",
    conditions: [
      "Sinusitis (Acute & Chronic)",
      "Nasal Polyps",
      "Deviated Nasal Septum",
      "Allergic Rhinitis",
      "Nasal Blockage",
      "Nose Bleeds (Epistaxis)",
      "Smell Disorders",
      "Nasal Fractures",
    ],
    procedures: [
      "FESS (Endoscopic Sinus Surgery)",
      "Septoplasty",
      "Turbinoplasty",
      "Nasal Polyp Removal",
    ],
  },
  {
    id: "throat-voice",
    title: "Throat & Voice",
    shortDesc:
      "Treatment for tonsillitis, voice disorders, laryngeal conditions, acid reflux and swallowing issues.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a8f92530611abdc61a355d404c4d5122e57fa6f5.jpg",
    imageAlt: "Doctor examining patient's throat",
    conditions: [
      "Tonsillitis & Adenoiditis",
      "Sore Throat & Pharyngitis",
      "Voice Disorders & Hoarseness",
      "Laryngitis",
      "Throat Infections",
      "Acid Reflux (LPR/GERD)",
      "Snoring",
      "Swallowing Difficulties",
    ],
    procedures: [
      "Tonsillectomy",
      "Adenoidectomy",
      "Microlaryngoscopy",
      "UPPP for Snoring",
    ],
  },
  {
    id: "vertigo-balance",
    title: "Vertigo & Balance",
    shortDesc:
      "Diagnosis and management of BPPV, Menière's disease, vestibular neuritis and dizziness.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/91d2b22840f451415a6bd9070862a0b176ddcb85.jpg",
    imageAlt: "Vertigo symptoms diagnosis and treatment overview",
    conditions: [
      "BPPV (Benign Positional Vertigo)",
      "Labyrinthitis",
      "Menière's Disease",
      "Vestibular Neuritis",
      "Dizziness & Imbalance",
      "Motion Sickness",
    ],
    procedures: [
      "Epley Maneuver",
      "Vestibular Rehabilitation",
      "Balance Testing",
    ],
  },
  {
    id: "snoring-sleep-apnea",
    title: "Snoring & Sleep Apnea",
    shortDesc:
      "Surgical and non-surgical evaluation and management of OSA, chronic snoring and upper airway obstruction.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f7dd87c48b4dd0687e52dcdc0f29b62ba92e587a.jpg",
    imageAlt: "Sleep apnea CPAP treatment",
    conditions: [
      "Obstructive Sleep Apnea (OSA)",
      "Chronic Snoring",
      "Upper Airway Obstruction",
      "Pediatric Sleep Problems",
    ],
    procedures: [
      "Sleep Study Referral",
      "UPPP Surgery",
      "Adenotonsillectomy",
      "Lifestyle Counselling",
    ],
  },
  {
    id: "hearing-audiometry",
    title: "Hearing & Audiometry",
    shortDesc:
      "Complete hearing assessment — audiometry, tympanometry, hearing aid prescription and pediatric tests.",
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7a3f0a13505caab72ae95aa5e4334a77b00a11c4.jpg",
    imageAlt: "Audiometry hearing test at clinic",
    conditions: [
      "Conductive Hearing Loss",
      "Sensorineural Hearing Loss",
      "Sudden Hearing Loss",
      "Pediatric Hearing Problems",
      "Age-Related Hearing Loss",
    ],
    procedures: [
      "Pure Tone Audiometry",
      "Tympanometry",
      "Hearing Aid Prescription",
      "Pediatric Hearing Screening",
    ],
  },
];

export const reviews = [
  {
    name: "Raizu Keditsu",
    stars: 5,
    text: "Had a wonderful experience with Dr. Prince. He figured out my ear infection within 2 minutes and cleaned it right away. Very caring and the best doctor I've met. Highly recommended!",
    time: "4 years ago",
  },
  {
    name: "Mehvish Khan",
    stars: 5,
    text: "Best ENT services in Delhi — must visit for ear, nose, throat, and vertigo. He treated me very well for ear discharge. Thank you, Doctor!",
    time: "2 years ago",
  },
  {
    name: "Leena Sharma",
    stars: 5,
    text: "I visited for chronic ear problem and I'm really satisfied with the treatment and counselling. I got rid of my problem! Strongly recommend Dr. Prince for any ENT issue.",
    time: "5 years ago",
  },
  {
    name: "Joy Ezeuka",
    stars: 5,
    text: "Thank you for the treatment and the discount. Very satisfactory service. Much recommended.",
    time: "7 months ago",
  },
];


export const clinicInfo = {
  name: "FORNIX CLINIC",
  doctor: "Dr. Prince Hirdesh Sharma",
  qualifications: "MBBS, MS (ENT)",
  specialty: "Ear, Nose & Throat Specialist",
  phone: "+91 97114 30836",
  phoneHref: "tel:+919711430836",
  address: "1st Floor, D1, Devli Road, Krishna Park Colony, Khanpur, New Delhi – 110080",
  addressShort: "D1, Devli Rd, Khanpur, New Delhi – 110080",
  rating: "4.2",
  reviewCount: "125+",
  experience: "15+",
  patients: "5000+",
  // ✅ Real Google Maps link — place ID se
  googleMapsLink:
    "https://www.google.com/maps/place/Dr.+Prince+Hirdesh+Sharma,+MBBS,+MS+(Ear+Nose+Throat+Doctor)+FORNIX+CLINIC/@28.5085319,77.2323599,17z/data=!3m1!5s0x390ce1a27bd468c7:0x959eb427bc7904b5!4m8!3m7!1s0x390ce1a2b9ec9157:0x68b81210212d2f26!8m2!3d28.5085319!4d77.2323599!9m1!1b1!16s%2Fg%2F1pp2tjgxg?hl=en-US",
  reviewsLink:
    "https://www.google.com/maps/place/Dr.+Prince+Hirdesh+Sharma,+MBBS,+MS+(Ear+Nose+Throat+Doctor)+FORNIX+CLINIC/@28.5085319,77.2323599,17z/data=!3m1!5s0x390ce1a27bd468c7:0x959eb427bc7904b5!4m8!3m7!1s0x390ce1a2b9ec9157:0x68b81210212d2f26!8m2!3d28.5085319!4d77.2323599!9m1!1b1!16s%2Fg%2F1pp2tjgxg?hl=en-US",
};

export const faqs = [
  {
    q: "Do I need a referral to see Dr. Prince Hirdesh Sharma?",
    a: "No referral needed. You can directly visit Fornix Clinic or call to book a consultation anytime — walk-ins are always welcome.",
  },
  {
    q: "What conditions does an ENT doctor treat?",
    a: "ENT specialists treat disorders of the ear (infections, hearing loss), nose (sinusitis, polyps), throat (tonsillitis, voice problems), vertigo, and related head and neck structures.",
  },
  {
    q: "Is the clinic open on Sundays and public holidays?",
    a: "Yes, Fornix Clinic is open 24 hours a day, 7 days a week — including all Sundays and public holidays.",
  },
  {
    q: "Are consultation charges affordable?",
    a: "Dr. Sharma is well-known for providing high-quality ENT care at transparent, reasonable and affordable rates.",
  },
  {
    q: "Does the clinic treat children as well?",
    a: "Absolutely. Dr. Sharma treats patients of all ages — infants, children, adults and elderly patients — for all ENT conditions.",
  },
  {
    q: "Does Fornix Clinic also have a skin doctor?",
    a: "Yes. The clinic also houses Dr. Pinki Skin Care, a full dermatology department offering skin treatments alongside ENT care, making it a one-stop family medical facility.",
  },
];
