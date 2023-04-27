import { Player } from "@lottiefiles/react-lottie-player";
import { animate, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SimpleCard({ blurb, title, icon }) {
  const cardsRef = useRef();
  const cardSVGRef = useRef();
  return (
    <motion.div
      whileTap={() => {
        animate(cardsRef.current, { scale: 1.1 }, { type: "spring" });
        cardSVGRef.current.play();
      }}
      onHoverStart={() => {
        animate(cardsRef.current, { scale: 1.1 }, { type: "spring" });
        cardSVGRef.current.play();
      }}
      onHoverEnd={() => {
        animate(cardsRef.current, { scale: 1 }, { type: "spring" });
        cardSVGRef.current.pause();
      }}
      className="simpleCard"
      ref={cardsRef}
    >
      <div className="cardSvgCont">
        <Player ref={cardSVGRef} src={icon} className="cardSvg" />
      </div>

      <div className="textContent">
        <h3>{title}</h3>
        <p>{blurb}</p>
      </div>
    </motion.div>
  );
}
