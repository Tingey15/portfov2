import { animate, motion, useInView } from "framer-motion";
import { useRef } from "react";

import boom from "../assets/boom.json";

import { Player } from "@lottiefiles/react-lottie-player";
export default function Footer() {
  const footerRef = useRef(null);

  const dragBoxRef = useRef();

  const boomRef = useRef();
  const boomRefCont = useRef();

  function handleDragEnd(event, info) {
    animate(".dragBox", { rotate: 0 }, { delay: 0.2 });
    setTimeout(() => {
      let CurPosx = dragBoxRef.current.getBoundingClientRect().x;
      boomRefCont.current.style.left = `${CurPosx}px`;

      animate(
        ".boom",
        { scale: [5, 0], display: "inline-block" },
        { duration: 0.5 }
      );
      boomRef.current.play();
    }, 500);
  }
  function handleDrag(event, info) {
    animate(".fireballText", { display: "none" });
    animate(".dragBox", { position: "absolute" });
    let vel = info.velocity.x;
    let del = info.delta.x;

    let rotateAmmt = 0;
    if (vel < 0) {
      rotateAmmt = 90;
      animate(".dragBox", { rotate: rotateAmmt });
    } else if (vel === 0 && del === 0) {
      rotateAmmt = 0;
      animate(".dragBox", { rotate: rotateAmmt });
    } else if (vel > 0.1) {
      rotateAmmt = -90;
      animate(".dragBox", { rotate: rotateAmmt });
    }
  }

  return (
    <motion.div ref={footerRef} className="footer">
      <motion.div
        dragElastic={0.2}
        ref={dragBoxRef}
        className="dragBox"
        drag
        dragConstraints={footerRef}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 100 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      ></motion.div>

      <motion.div className="boom" ref={boomRefCont}>
        <Player ref={boomRef} src={boom}></Player>
      </motion.div>
      <div className="fireballText">
        <h3>Drag the flame!</h3>
      </div>
      <h3 className="footerText">
        © Andrew Tingey WebDev {new Date().getFullYear()} all rights reserved{" "}
      </h3>
    </motion.div>
  );
}
