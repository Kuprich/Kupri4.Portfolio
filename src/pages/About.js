import React from "react"
import { motion } from "framer-motion"
import skills from "../components/data/about_data"
import Skillcard from "../components/Skillcard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBrain,
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
              <div className="left-side__title">Высшее образование</div>
              <div className="left-side__descr">
                Бакалавриат, Заочная форма обучения
              </div>
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

          <div className="unit unit_light-bkg">
            <div className="unit__logo">
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <div className="unit__name">Знания и навыки</div>
            <div className="unit__line"></div>
          </div>

          <div className="row">
            <div className="col-5 d-flex align-items-stretch flex-column">
              <div className="skill-card">
                <h6 className="skill-card__title">C#</h6>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar_fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <h6 className="skill-card__title">ASP.NET Core</h6>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar_fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-card">
                <h6 className="skill-card__title">Blazor</h6>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar_fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-card">
                <h6 className="skill-card__title">HTML/CSS(SCSS)</h6>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar_fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-card">
                <h6 className="skill-card__title">JS(React)</h6>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar_fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-7 d-flex align-items-stretch">
              <div className="webSkills">Web разарботка</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
