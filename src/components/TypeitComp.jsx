import { motion } from "framer-motion";
import TypeIt from "typeit-react";

export function TypeHero() {
  return (
    <div className="typiCont">
      <TypeIt
        className="typi"
        options={{ loop: true }}
        getBeforeInit={(instance) => {
          instance
            .type("React")
            .pause(1000)
            .delete(6)
            .pause(1000)
            .type("Javascript")
            .pause(1000)
            .delete(10)
            .pause(1000)
            .type("Bootstrap")
            .pause(1000)
            .delete(9)
            .pause(1000)
            .type("Mongoose")
            .pause(1000)
            .delete(8)
            .pause(1000)
            .type("HTML5")
            .pause(1000)
            .delete(6)
            .pause(1000)
            .type("GIT")
            .pause(1000)
            .delete(3)
            .pause(1000)
            .type("CSS")
            .pause(1000)
            .delete(3)
            .pause(1000)
            .type("MongoDB")
            .pause(1000)
            .delete(8)
            .pause(1000)
            .type("WordPress")
            .pause(1000)
            .delete(9)
            .pause(1000);

          return instance;
        }}
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="borderBlinker"
      ></motion.div>
    </div>
  );
}
