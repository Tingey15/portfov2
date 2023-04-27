import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  WorkPage,
  HomePage,
} from "./pages/pageImports";
import Navbar from "./components/Navbar";
import SidebarBackG from "./components/SidebarBackG";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { AnimatePresence, delay, motion } from "framer-motion";
import { nanoid } from "nanoid";
import Footer from "./components/Footer";

function App() {
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <BrowserRouter>
      <AnimatePresence>{isOpen && <SidebarBackG />} </AnimatePresence>
      <AnimatePresence>{isOpen && <Sidebar />}</AnimatePresence>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
