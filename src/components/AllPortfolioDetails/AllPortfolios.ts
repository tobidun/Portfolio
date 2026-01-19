import anli from "../../assets/anli.png";
import dstrct from "../../assets/dstrct.png";
import ECC from "../../assets/ECC.png";
import mbc from "../../assets/mbc.png";
import peakreach from "../../assets/peakreach.png";
import peernetics from "../../assets/peernetics.png";
import platterAdmin from "../../assets/platter-admin.png";
import platterCustomer from "../../assets/platter-customer.png";
import regis from "../../assets/regis.png";
import sauri from "../../assets/sauri.png";
import schoolsql from "../../assets/schoolsql.png";
import uniti from "../../assets/uniti.png";

import farmeasy from "../../assets/portfolio/farmeasy.png";
import geek from "../../assets/portfolio/geek.png";
import houseacq from "../../assets/portfolio/houseacq.png";
import omdb from "../../assets/portfolio/omdb.png";
import politicthread from "../../assets/portfolio/politicsthread.png";
import { PortfolioType } from "../../types/PortfolioType";

export const allPortfolios: PortfolioType[] = [
  // Dstrct
  {
    id: 1,
    src: dstrct,
    link: "https://excellentcareclinics.nl/",
    name: "Hospital Management System",
    disc: "A comprehensive health information system designed for Dstrct, managing patient records, appointment scheduling, and clinical workflows.",
    company: "Dstrct",
  },
  // Masterpiece
  {
    id: 2,
    src: platterCustomer,
    link: "https://investwithplatter.com/",
    name: "Platter (Customer App)",
    disc: "Consumer-facing real estate platform for Masterpiece, allowing users to browse and manage property bookings.",
    company: "Masterpiece",
  },
  {
    id: 17,
    src: platterAdmin,
    link: "https://investwithplatter.com/",
    name: "Platter (Admin Console)",
    disc: "Centralized administrative dashboard for Masterpiece to manage real estate listings, users, and transactions.",
    company: "Masterpiece",
  },
  // Starnet technologies
  {
    id: 3,
    src: regis,
    link: "#",
    name: "Starnet Academy",
    disc: "E-learning management system built for Starnet technologies, facilitating course distribution and student progress tracking.",
    company: "Starnet technologies",
  },
  {
    id: 4,
    src: regis,
    link: "https://regis-event-crew.vercel.app/",
    name: "Regis Hospitality Management",
    disc: "A sophisticated hospitality solution for managing bookings, guest services, and operational logistics.",
    company: "Starnet technologies",
  },
  {
    id: 5,
    src: mbc,
    link: "https://www.mbclogix.com/",
    name: "MBC Logistics",
    disc: "Supply chain and fleet management application optimized for real-time tracking and delivery coordination.",
    company: "Starnet technologies",
  },
  {
    id: 6,
    src: omdb,
    link: "#",
    name: "Whalevault (Telegram Bot)",
    disc: "Automated Telegram bot for crypto asset monitoring and vault management notifications.",
    company: "Starnet technologies",
  },
  {
    id: 7,
    src: geek,
    link: "#",
    name: "Custom Enterprise CRMs",
    disc: "A suite of three tailored Customer Relationship Management systems focused on sales automation and lead tracking.",
    company: "Starnet technologies",
  },
  // Qiit technologies
  {
    id: 8,
    src: sauri,
    link: "https://www.hellosauri.com/",
    name: "Sauri (Travel Mobile App)",
    disc: "A mobile-first travel companion application for Qiit technologies, simplifying trip planning and local discovery.",
    company: "Qiit technologies",
  },
  {
    id: 9,
    src: anli,
    link: "https://www.weareanli.com",
    name: "Anli (Property Management)",
    disc: "Full-scale property management system for Qiit technologies, handling tenant leases and maintenance requests.",
    company: "Qiit technologies",
  },
  // Mis technologies
  {
    id: 10,
    src: peernetics,
    link: "https://www.peernetics.io/",
    name: "Peernetics (Web3 Crypto)",
    disc: "A decentralized finance (DeFi) application for Mis technologies, focusing on secure peer-to-peer crypto transactions.",
    company: "Mis technologies",
  },
  {
    id: 11,
    src: ECC,
    link: "https://excellentcareclinics.nl/",
    name: "Lnaid (Educational App)",
    disc: "An interactive educational platform for Mis technologies, providing structured learning paths and assessment tools.",
    company: "Mis technologies",
  },
  // Peakreach
  {
    id: 12,
    src: peakreach,
    link: "https://peakreachdelivery.com/",
    name: "Peakreach Food Delivery",
    disc: "End-to-end food delivery ecosystem for Peakreach, connecting customers with local restaurants and delivery partners.",
    company: "Peakreach",
  },
  // Spragon technology
  {
    id: 13,
    src: politicthread,
    link: "https://politicsthread.com/",
    name: "Politics Thread",
    disc: "Apolitical discourse platform for Spragon technology, designed for high-engagement discussions and content moderation.",
    company: "Spragon technology",
  },
  {
    id: 14,
    src: farmeasy,
    link: "#",
    name: "Auto Zard (AI Website)",
    disc: "AI-driven platform for Spragon technology, leveraging advanced machine learning models for automated content and insights.",
    company: "Spragon technology",
  },
  {
    id: 15,
    src: houseacq,
    link: "https://houseacq.com/",
    name: "House Acq",
    disc: "Modern real estate marketplace for Spragon technology, streamlining the process of purchasing and managing residential properties.",
    company: "Spragon technology",
  },
  {
    id: 16,
    src: schoolsql,
    link: "https://schoolsql.com/",
    name: "SchoolSQL",
    disc: "Database-centric educational application for schools, managing academic records and administrative data efficiently.",
    company: "Spragon technology",
  },
  // Uniti
  {
    id: 18,
    src: uniti,
    link: "https://www.unitinetworks.com",
    name: "Uniti Project",
    disc: "Innovative technical solution developed for Uniti, emphasizing scalability and user engagement.",
    company: "Uniti",
  },
];
