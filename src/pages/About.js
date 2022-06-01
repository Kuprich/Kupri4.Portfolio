import React from "react"
import { motion } from "framer-motion"
import skills from "../components/data/about_data"
import Skillcard from "../components/Skillcard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faGraduationCap,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  const about_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <motion.div
      className="about"
      variants={about_variant}
      initial="hidden"
      animate="visible"
    >
      <h6 className="about__intro">
        Приветствую Вас на моей странице, Меня зовут Илья и я почти профешинал
        C# программист.
      </h6>

      <div className="container">
        <div className="about__container">
          <div className="unit unit_light-bkg">
            <div className="unit__logo">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="unit__name">Образование</div>
            <div className="unit__line"></div>
          </div>

          <div className="about__article">
            <div className="article__left-side">
              <div className="left-side__months">
                <span className="left-side__months__from">Сентябрь</span>
                <span className="left-side__months__to">Июнь</span>
              </div>
              <div className="left-side__years">2016 - 2021</div>
              <div className="left-side__title">Бакалавриат</div>
              <div className="left-side__desc"></div>
            </div>
            <div className="article__right-side">
              <h6 className="right-side__title">
                09.03.01. Информатика и высислительная техника
              </h6>
              <p className="right-side__descr">
                Прошел обучение в ФГБОУ ВО «Рязанский государственный
                радиотехнический университет им. В.Ф. Уткина». Получил знания и
                диплом бакалавра.
              </p>
            </div>
          </div>

          <div className="unit unit_light-bkg">
            <div className="unit__logo">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="unit__name">Трудовая деятельность</div>
            <div className="unit__line"></div>
          </div>

          <div className="about__article">
            <div className="article__left-side">
              <div className="left-side__months">
                <span className="left-side__months__from">Август</span>
                <span className="left-side__months__to">Ноябрь</span>
              </div>
              <div className="left-side__years">2017 - 2019</div>
              <div className="left-side__title">
                Специалист настройки локальных сетей
              </div>
              <div className="left-side__desc"></div>
            </div>
            <div className="article__right-side">
              <h6 className="right-side__title">
                ГАУ Республики Мордовия "МФЦ" по Зубово-Полянскому
                муниципальному району
              </h6>
              <p className="right-side__descr">
                Выполнял обязанности системного администратора. Осуществлял
                работы по настройке ЛВС учреждения. Оперативно(по мере
                возможности) устранял появляющиеся несправности в процессе
                работы со специальным программным обеспечением и техникой.
              </p>
            </div>
          </div>

          <div className="about__article">
            <div className="article__left-side">
              <div className="left-side__months">
                <span className="left-side__months__from">Ноябрь</span>
                {/* <span className="left-side__months__to"></span> */}
              </div>
              <div className="left-side__years">2019</div>
              <div className="left-side__title">Инженер II категории</div>
              <div className="left-side__desc"></div>
            </div>
            <div className="article__right-side">
              <h6 className="right-side__title">
                Филиал ФГБУ Информационно Аналитический Центр Судебного
                департамента в Республике Мордовия
              </h6>
              <p className="right-side__descr">
                Выполнял техническую поддержку пользователей автоматизированной
                системы ГАС "«Правосудие»", Осуществял контроль за
                функционированием системы "Видеоконференцсвязь", которая
                упрощает проведение судебных заседаний. Поддерживал комплекс
                специального программного обеспечения на своих объектах
                автоматизации
              </p>
            </div>
          </div>

          <div className="about__article">
            <div>
              <div className="article__dot"></div>
            </div>
            <div className="article__content">
              <p className="article__date">2017-2019 г.</p>
              <h6 className="article__title">
                Государственное автономное учреждение Республики Мордовия
                «Многофункциональный центр предоставления государственных и
                муниципальных услуг» Филиал по Зубово-Полянскому муниципальному
                району
              </h6>
              <p className="article__descr">
                Должность - специалист настройки локальных сетей
              </p>
            </div>
          </div>

          <div className="about__article">
            <div>
              <div className="article__dot"></div>
            </div>
            <div className="article__content">
              <p className="article__date">2019г. по настоящее время</p>
              <h6 className="article__title">
                Филиал Федеральное Государственное Бюджетное Учреждение
                Информационно Аналитический Центр Судебного департамента в
                Республике Мордовия
              </h6>
              <p className="article__descr">
                Должность - Инженер II Категории. <br />
                Цели и задачи: обеспечение эксплуатации программно-технических
                средств государственной автоматизированной системы Российской
                Федерации «Правосудие». Техническая поддержка пользователей
                данной системы, Хранение и обработка судебной информации.
              </p>
            </div>
          </div>

          <div className="skill-cards__container">
            <h6 className="about__heading">What I offer</h6>

            <div className="row">
              {skills.map((skill, i) => (
                <Skillcard skill={skill} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
