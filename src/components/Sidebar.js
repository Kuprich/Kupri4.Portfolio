import { AnimateSharedLayout, motion } from "framer-motion"
import resume from "../assets/resume.pdf"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faAddressCard,
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
  faMobileRetro,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faVk } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons"
import Modal from "./Modal"
import EmailForm from "./EmailForm"
import CategoryDelimeter from "./CategoryDelimeter"
import { socialIcons } from "./data/sidebar_data"
import { ToastContainer } from "react-toastify"

const Sidebar = () => {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

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
      transitionEnd: {
        x: 0,
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

      <CategoryDelimeter icon={faAddressCard} name="Профиль" />

      <div className="sidebar__descr">
        Перейдя по ссылке ниже Вы можете скачать и ознакомиться c моим резюме
      </div>

      <div className="sidebar__btns-container">
        <a href={resume} download="resume.pdf" className="button">
          <div className="">
            <span className="button__icon">
              <FontAwesomeIcon icon={faFileArrowDown} />
            </span>
            Скачать резюме
          </div>
        </a>

        <a href="https://github.com/Kuprich" className="button">
          <div className="">
            <span className="button__icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Профиль GitHub
          </div>
        </a>
      </div>

      <CategoryDelimeter icon={faShareNodes} name="Контакты" />

      <div className="sidebar__descr">
        Вы можете найти меня в{" "}
        <a href="https://vk.com/id_223377" target="_blank">
          <FontAwesomeIcon icon={faVk} className="link-icon" />
          Вконтакте
        </a>
        , написать на почту, или же связяться co мной по <span>телефону</span>
      </div>

      <figure className="sidebar__social-icons">
        {socialIcons &&
          socialIcons.map((social) => (
            <a href={social.link} target="_blank">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
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

      <Modal
        showModal={showEmailForm}
        setShowModal={setShowEmailForm}
        modalTitle="Напишите мне личное сообщение"
        modalTitleIcon={faEnvelope}
      >
        <EmailForm
          formData={formData}
          setformData={setFormData}
          setShowEmailForm={setShowEmailForm}
        />
      </Modal>
      <ToastContainer autoClose={5000} />
      <div className="sidebar__btns-container mt-4">
        <a className="button" onClick={() => setShowEmailForm(true)}>
          <div>
            <span className="button__icon">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                setShowEmailForm={setShowEmailForm}
              />
            </span>
            Написать мне
          </div>
        </a>
      </div>
    </motion.div>
  )
}

export default Sidebar
