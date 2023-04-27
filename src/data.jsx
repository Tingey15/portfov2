import React from "react";
import Commu from "./assets/Commu.json";
import innov from "./assets/innov.json";
import motiv from "./assets/motiv.json";
import teamWrk from "./assets/teamWrk.json";
import GroBud from "./assets/GroBud.jpg";
import COGEN from "./assets/COGEN.jpg";
import BRs from "./assets/BRs.jpg";
import Coc from "./assets/Coc.jpg";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const links = [
  { text: "Home", url: "/", id: 1 },
  { text: "Work", url: "/work", id: 2 },
  { text: "About", url: "/about", id: 3 },
  { text: "Contact", url: "/contact", id: 4 },
];
export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/andrew-tingey-90b703271/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/Tingey15",
    icon: <FaGithubSquare />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/tingey15/",
    icon: <FaInstagram />,
  },
];
export const whyHireData = [
  {
    blurb: "I balance talking and listening; Ensuring I meet customer intent.",
    title: "Communicative",
    icon: Commu,
  },
  {
    blurb: "Teamwork makes the dream work. Collaboration first, then work.",
    title: "Collaborative",
    icon: teamWrk,
  },
  {
    blurb:
      "Constantly seeking out new ways to do things. There is always a better way.",
    title: "Innovative",
    icon: innov,
  },
  {
    blurb: "I put myself into action to achieve my goals.",
    title: "Motivated",
    icon: motiv,
  },
];
export const cardData = [
  {
    image: GroBud,
    title: "Grocery Bud",
    desc: "A simple list application to keep track of all your grocery needs.",
    linkTo: "https://tingeyproject3.netlify.app/",
  },
  {
    image: COGEN,
    title: "Color Shade Generator",
    desc: "A quick and easy way to find the perfect color shade. Click on the color to copy the hex value.",
    linkTo: "https://tingeyproject1.netlify.app/",
  },

  {
    image: Coc,
    title: "Cocktail Master",
    desc: "Search your favorite cocktails with this app.",
    linkTo: "https://tingeyproject4.netlify.app/",
  },
];
