import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function sidebarBackG() {
  const { isOpen } = useSelector((store) => store.navbar);
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 200, position: "fixed" }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`${isOpen ? " modalBackground" : " hidden"}`}
    ></motion.div>
  );
}
