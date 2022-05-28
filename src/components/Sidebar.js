import { motion } from "framer-motion"
import myghtycoder from "../assets/icons/mighty-coder.jpg"

import tie from "../assets/icons/tie.svg"
import facebook from "../assets/icons/facebook.svg"
import instagramm from "../assets/icons/instagram.svg"
import github from "../assets/icons/github.svg"
import pin from "../assets/icons/pin.svg"
import resume from "../assets/resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:ilya-kyp@yandex.ru")
  }

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
  }

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="sidebar__avatar"></div>
      <div className="sidebar__name">
        Илья <span>Куприянов</span>
      </div>
      <div className="sidebar__item sidebar__title">
        C<span>#</span> Разработчик
      </div>

      <div className="sidebar__profile">
        <div className="profile__logo">
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <div className="profile__name">Профиль</div>
        <div className="profile__line"></div>
      </div>
      <div className="profile__content">
        Перейдя по ссылке ниже Вы можете скачать и ознакомиться c моим резюме.
      </div>

      <a href={resume} download="resume.pdf" className="btn btn-light">
        <div className="sidebar__item">
          <span className="btn__icon">
            <FontAwesomeIcon icon={faFileArrowDown} />
          </span>
          Скачать резюме
        </div>
      </a>
      <figure className="sidebar__social-icons sidebar__item">
        <a href="https://facebook.com">
          <img src={facebook} alt="facebook" className="sidebar__icon" />
        </a>
        <a href="https://facebook.com">
          <img src={instagramm} alt="instagramm" className="sidebar__icon" />
        </a>
        <a href="https://facebook.com">
          <img src={github} alt="github" className="sidebar__icon" />
        </a>
      </figure>
      <div className="contacts">
        <div className="sidebar__location sidebar__item">
          <img src={pin} alt="location" className="sidebar__icon" />
          Зубова Поляна, Мордовия
        </div>

        <div className="sidebar__item">ilya-kyp@yandex.ru</div>
        <div className="sidebar__item">+7 (999) 888 77-66</div>
      </div>
      <div
        className="sidebar__item sidebar__email bkg-gradient"
        onClick={handleEmailMe}
      >
        Написать мне
      </div>
    </motion.div>
  )
}

export default Sidebar
