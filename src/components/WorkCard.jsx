import { motion } from "framer-motion";

export default function WorkCard({ title, desc, linkTo, image }) {
  return (
    <motion.div
      whileHover={{ y: -15, boxShadow: "10px 5px 5px" }}
      whileTap={{ y: -15, boxShadow: "10px 5px 5px" }}
      className="workCardCont"
    >
      <img src={image} alt={title} className="workCardPic" />

      <div className="workCardTextCont">
        <h3>{title}</h3>

        <p>{desc}</p>

        <a href={linkTo} target="_blank" rel="noopener">
          Check It Out
        </a>
      </div>
    </motion.div>
  );
}
