import react from "react";
import { motion } from "framer-motion";
import myghtycoder from "../assets/mighty-coder.svg";
import tie from "../assets/icons/tie.svg";
import facebook from "../assets/icons/facebook.svg";
import instagramm from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:ilya-kyp@yandex.ru");
  };

  const sidebar_variant = {
    hidden: {
      x: "-30vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={myghtycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Ilya <span>Kupriyanov</span>
      </div>
      <div className="sidebar__item sidebar__title">C# Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item">
          <img src={tie} alt="resulme" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons sidebar__item">
        <a href="">
          <img src={facebook} alt="facebook" className="sidebar__icon" />
        </a>
        <a href="">
          <img src={instagramm} alt="instagramm" className="sidebar__icon" />
        </a>
        <a href="">
          <img src={github} alt="github" className="sidebar__icon" />
        </a>
      </figure>
      <div className="contacts">
        <div className="sidebar__location sidebar__item">
          <img src={pin} alt="location" className="sidebar__icon" />
          Zubova-Polyana, Mordovia
        </div>

        <div className="sidebar__item">ilya-kyp@yandex.ru</div>
        <div className="sidebar__item">+7 (999) 888 77-66</div>
      </div>
      <div
        className="sidebar__item sidebar__email bkg-gradient"
        onClick={handleEmailMe}
      >
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
