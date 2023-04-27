import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Call2action() {
  return (
    <div className="C2A">
      <div className="C2AContainer">
        <h1>
          Interested in <br></br> working together?
        </h1>
        <motion.div className="btnCont">
          <a
            // href="mailto:andrewtingeyresume@gmail.com"
            href="mailto:Maxhasatinypeen@gmail.com"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              animate(".C2ABtn1", { scale: 1.1 }, { type: "spring" });
            }}
            onMouseLeave={() => {
              animate(".C2ABtn1", { scale: 1 }, { type: "spring" });
            }}
            className="C2Abtn C2ABtn1"
          >
            Get Started
          </a>
          <Link
            onMouseEnter={() => {
              animate(".C2ABtn2", { scale: 1.1 }, { type: "spring" });
            }}
            to="/work"
            className="C2Abtn C2ABtn2"
            onMouseLeave={() => {
              animate(".C2ABtn2", { scale: 1 }, { type: "spring" });
            }}
          >
            See More Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
