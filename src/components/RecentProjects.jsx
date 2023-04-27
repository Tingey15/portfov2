import WorkCard from "./WorkCard";
import { cardData } from "../data";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

export default function RecentProjects() {
  function changeBackGround(classP) {
    animate(
      classP,
      {
        background: [
          "radial-gradient(circle, rgba(45,253,60,1) 0%, rgba(255,74,141,0) 0%)",
          "radial-gradient(circle, rgba(45,253,60,1) 0%, rgba(255,74,141,0) 100%)",
          "radial-gradient(circle, rgba(45,253,60,1) 100%, rgba(255,74,141,0) 100%)",
        ],
      },

      { duration: 0.5 }
    );
  }
  function resetBackGround(classP) {
    animate(
      classP,
      {
        background: [
          "radial-gradient(circle, rgba(45,253,60,1) 100%, rgba(255,74,141,0) 100%)",
          "radial-gradient(circle, rgba(45,253,60,1) 0%, rgba(255,74,141,0) 100%)",
          "radial-gradient(circle, rgba(45,253,60,1) 0%, rgba(255,74,141,0) 0%)",
        ],
      },

      { duration: 0.5 }
    );
  }
  return (
    <div className="recentPro">
      <h1 className="titleBar">recent projects</h1>
      <div className="contentRecPro">
        {cardData.map((card) => (
          <WorkCard {...card} />
        ))}
      </div>
      <div className="titleBar">
        <Link
          onMouseEnter={() => {
            animate(".seeMore", { scale: 1.1 });
            changeBackGround(".seeMore");
            animate(".seeMore", { color: "black" });
          }}
          onMouseLeave={() => {
            animate(".seeMore", { scale: 1 });
            resetBackGround(".seeMore");
            animate(".seeMore", { color: "white" });
          }}
          onTouchStart={() => {
            animate(".seeMore", { scale: 1.1 });
            changeBackGround(".seeMore");
            animate(".seeMore", { color: "black" });
          }}
          onTouchEnd={() => {
            animate(".seeMore", { scale: 1 });
            resetBackGround(".seeMore");
            animate(".seeMore", { color: "white" });
          }}
          to="/work"
          className="seeMore"
        >
          See more Projects
        </Link>
      </div>
    </div>
  );
}
