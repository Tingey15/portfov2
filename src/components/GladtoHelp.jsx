import { Player } from "@lottiefiles/react-lottie-player";
import Work from "../assets/work.json";
import {
  motion,
  useMotionValue,
  animate,
  useTransform,
  useAnimate,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function GladtoHelp() {
  const [count, setCount] = useState(280);
  const svgRef = useRef(null);
  const g2hRef = useRef(null);
  const g2hRefIsInView = useInView(g2hRef);

  useEffect(() => {
    svgRef.current.play();

    const countTimer = setInterval(() => {
      setCount(count + 1);
    }, 50);
    if (count === 300) {
      clearInterval(countTimer);
      console.log("timer cleared");
    }
    if (g2hRefIsInView === false) {
      setCount(270);
      clearInterval(countTimer);
    }
    return () => {
      clearInterval(countTimer);
      console.log("timer cleared");
    };
  }, [g2hRefIsInView, count]);

  return (
    <div className="page-100 g2hSection">
      <div ref={g2hRef} className="containerG2H">
        <div className="svgWorkCont">
          <Player loop ref={svgRef} className="workerPic" src={Work} />
        </div>
        <div className="textContentCont">
          <div className="contentCont">
            <h1 className="counter">
              {count.current}
              {count}
              <span style={{ color: "#91cea3" }}>+</span>
            </h1>
            <h4 className="counterText">Hours of coding courses completed</h4>
            <h1 className="g2hTitle">Glad to help you!</h1>
            <h5 className="g2hParagraph">
              As a web developer and a passionate learner, I'm always on the
              lookout for new challenges and opportunities to further improve my
              knowledge and skills.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
