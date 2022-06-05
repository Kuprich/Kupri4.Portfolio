import { motion } from "framer-motion"
import resume from "../assets/resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faAddressCard,
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
  faMobileRetro,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"
import {
  faDiscord,
  faGithub,
  faSkype,
  faTelegram,
  faVk,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons"

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
      <div className="sidebar__birthdate">25 лет (24.07.1996)</div>
      <div className="sidebar__title">
        C<span>#</span> Разработчик
      </div>

      <div className="location">
        <span className="location__icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span>Зубова Поляна, Мордовия</span>
      </div>

      <div className="unit unit_dark-bkg">
        <div className="unit__logo">
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <div className="unit__name">Профиль</div>
        <div className="unit__line"></div>
      </div>
      <div className="sidebar__descr">
        Перейдя по ссылке ниже Вы можете скачать и ознакомиться c моим{" "}
        <span>резюме</span>.
      </div>

      <div className="sidebar__btns-container">
        <a href={resume} download="resume.pdf" className="button button-light">
          <div className="">
            <span className="button__icon">
              <FontAwesomeIcon icon={faFileArrowDown} />
            </span>
            Скачать резюме
          </div>
        </a>

        <a href="https://github.com/Kuprich" className="button button-light">
          <div className="">
            <span className="button__icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Профиль GitHub
          </div>
        </a>
      </div>

      <div className="unit">
        <div className="unit__logo">
          <FontAwesomeIcon icon={faShareNodes} />
        </div>
        <div className="unit__name">Контакты</div>
        <div className="unit__line"></div>
      </div>

      <div className="sidebar__descr">
        Вы можете найти меня в{" "}
        <a href="https://vk.com/id_223377" target="_blank">
          <FontAwesomeIcon icon={faVk} className="link-icon" />
          Вконтакте
        </a>
        , написать на почту, или же связяться co мной по <span>телефону</span>
      </div>

      <figure className="sidebar__social-icons">
        <a href="https://join.skype.com/invite/iyrg4pvmO58v" target="_blank">
          <FontAwesomeIcon icon={faSkype} />
        </a>
        <a href="https://t.me/Kupri4" target="_blank">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://wa.me/79176983633" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </figure>

      <div className="contacts">
        <div className="contacts__phone contacts__item">
          <span className="contacts__icon">
            <FontAwesomeIcon icon={faMobileRetro} />
          </span>
          <span>+7 (999) 888 77-66</span>
        </div>

        <div className=" contacts__mail contacts__item">
          <span className="contacts__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>ilya-kyp@yandex.ru</span>
        </div>
      </div>

      <div className="sidebar__btns-container mt-4">
        <a className="button button-light " onClick={handleEmailMe}>
          <div>
            <span className="button__icon">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </span>
            Написать мне
          </div>
        </a>
      </div>
    </motion.div>
  )
}

export default Sidebar
