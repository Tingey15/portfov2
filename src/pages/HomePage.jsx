import GladtoHelp from "../components/GladtoHelp";
import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import { useInView, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import WhyHire from "../components/WhyHire";
import Call2action from "../components/Call2action";
import ScrollToTop from "../components/ScrollToTop";
export default function HomePage() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <GladtoHelp />
      <RecentProjects />
      <WhyHire />
      <Call2action />
    </>
  );
}
