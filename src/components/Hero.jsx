import meIrl from "../assets/meIrl.svg";
import { HiDownload } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { motion, animate } from "framer-motion";
import { TypeHero } from "./TypeitComp";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import Test from "../assets/test2.json";
import { useEffect, useRef } from "react";

function Hero() {
  const { isOpen } = useSelector((store) => store.navbar);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const fireworkRef1 = useRef(null);
  const fireworkRef2 = useRef(null);
  const testRef = useRef(null);
  const testRef2 = useRef(null);
  function setButtonRefs() {
    let boty = button1Ref.current.getBoundingClientRect().top;
    let botx = button1Ref.current.getBoundingClientRect().left;
    fireworkRef1.current.style.top = `${boty - 25}px`;
    fireworkRef1.current.style.left = `${botx}px`;
    let boty2 = button2Ref.current.getBoundingClientRect().top;
    let botx2 = button2Ref.current.getBoundingClientRect().left;
    fireworkRef2.current.style.top = `${boty2 - 25}px`;
    fireworkRef2.current.style.left = `${botx2}px`;
  }
  useEffect(() => {
    setButtonRefs();
  }, [window.innerWidth]);
  function changeBackGround(classP) {
    animate(
      classP,
      {
        background: [
          "linear-gradient(0deg, rgba(45,253,60,1) 0%, rgba(255,74,141,1) 0%, rgba(255,0,0,1) 100%)",
          "linear-gradient(0deg, rgba(45,253,60,1) 0%, rgba(255,74,141,1) 100%, rgba(255,0,0,1) 100%)",
          "linear-gradient(0deg, rgba(45,253,60,1) 100%, rgba(255,74,141,1) 100%, rgba(255,0,0,1) 100%)",
        ],
      },

      { duration: 1 }
    );
  }
  function resetBackGround(classP) {
    animate(
      classP,
      {
        background: [
          "radial-gradient(circle, rgba(255,74,141,1) 0%, rgba(45,253,60,1) 0%)",
          "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(45,253,60,1) 100%)",
          "radial-gradient(circle, rgba(255,0,0,1) 100%, rgba(45,253,60,1) 100%)",
        ],
      },

      { duration: 0.5 }
    );
  }
  function playFireworkAnimation(ref, classP) {
    animate(classP, { scale: 3 });
    ref.current.play();
  }
  return (
    <div className="page-100 page-hero">
      <div className="hero-banner">
        <h1 className="title">
          <span>Welcome</span> to My Portfolio
        </h1>
        {!isOpen && <TypeHero />}
        <motion.a
          ref={button1Ref}
          onHoverStart={() => {
            changeBackGround(".heroBtn1");
            playFireworkAnimation(testRef, ".fire");
          }}
          onHoverEnd={() => {
            resetBackGround(".heroBtn1");
          }}
          whileTap={() => {
            changeBackGround(".heroBtn1");
            playFireworkAnimation(testRef, ".fire");
          }}
          // href="mailto:andrewtingeyresume@gmail.com"
          href="mailto:Maxhasatinypeen@gmail.com"
          rel="noopener noreferrer"
          className="heroBtn heroBtn1"
        >
          <AiOutlineMail
            style={{ position: "relative", right: "5px", top: "2px" }}
          />
          Email Me
        </motion.a>

        <motion.a
          onHoverStart={() => {
            changeBackGround(".heroBtn2");
            playFireworkAnimation(testRef2, ".fire2");
          }}
          onHoverEnd={() => {
            resetBackGround(".heroBtn2");
          }}
          whileTap={() => {
            changeBackGround(".heroBtn2");
            playFireworkAnimation(testRef2, ".fire2");
          }}
          ref={button2Ref}
          href="../../public/resume.pdf"
          download="Andrew Tingey Resume.pdf"
          className="heroBtn heroBtn2"
        >
          <HiDownload
            style={{ position: "relative", right: "5px", top: "2px" }}
          />
          Resume
        </motion.a>
        <motion.div className="fire" ref={fireworkRef1}>
          <Player
            ref={testRef}
            src={Test}
            speed={0.5}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          ></Player>
        </motion.div>
        <motion.div className="fire2" ref={fireworkRef2}>
          <Player
            ref={testRef2}
            src={Test}
            speed={0.5}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          ></Player>
        </motion.div>
      </div>

      <img src={meIrl} alt="meIRL" className="meIrl" />
    </div>
  );
}

export default Hero;
