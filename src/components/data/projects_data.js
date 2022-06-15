import Portfolio_img1 from "../../assets/projects_images/Portfolio/original/1.png"
import Portfolio_img2 from "../../assets/projects_images/Portfolio/original/2.png"
import Portfolio_img3 from "../../assets/projects_images/Portfolio/original/3.png"
import Portfolio_img4 from "../../assets/projects_images/Portfolio/original/4.png"

import Portfolio_img1_thumb from "../../assets/projects_images/Portfolio/thumb/1.png"
import Portfolio_img2_thumb from "../../assets/projects_images/Portfolio/thumb/2.png"
import Portfolio_img3_thumb from "../../assets/projects_images/Portfolio/thumb/3.png"
import Portfolio_img4_thumb from "../../assets/projects_images/Portfolio/thumb/4.png"

const data_projects = [
  {
    id: 1,
    name: "Web - портфолио",
    thumbnail: Portfolio_img1_thumb,
    images: [
      {
        original: Portfolio_img1,
        thumbnail: Portfolio_img1_thumb,
      },
      {
        original: Portfolio_img2,
        thumbnail: Portfolio_img2_thumb,
      },
      {
        original: Portfolio_img3,
        thumbnail: Portfolio_img3_thumb,
      },
      {
        original: Portfolio_img4,
        thumbnail: Portfolio_img4_thumb,
      },
    ],
    descr:
      "web-портфолио, содержащее информацию о навыках, опыте работы, образовании, выполненых проектах ",
    detailed_descr: (
      <div>
        <p>
          Персональное портфолио - это один из самых больших активов, который вы
          можете получить. Оно не только дает вам полный контроль над вашим
          именем, но и повышает вашу наглядность и облегчает для работодателей
          или даже для клиентов найти вас, когда они ищут определенный талант
          или навык.
        </p>
        <ul>
          Что имеется в данном портфолио:
          <li>
            Хорошо спроектированные разделы резюме - образуют хорошую основу,
            поэтому используется раздел для навыков, образования и демонстрации
            вашего опыта.
          </li>
          <li>
            Форма для обратной связи – В проекте использован пакет Email.js,
            который помогает отправлять электронные письма, используя только
            клиентские технологии. Легок в настройке.
          </li>
          <li>
            Скачиваемая версия резюме - важная возможность скачивания печатной
            версии вашего резюме. Менеджеры по найму, возможно, должны иметь
            традиционную версию под рукой, поэтому им удобно скачивать их.
          </li>
        </ul>
        <p>
          Дизайн довольно минимален, и вся информация включена на одну страницу,
          без искажений. Использован 2-х колоночный макет, что позволяет
          качественнее использовать свободное пространство. Шаблон адаптивный
          (мобильные устройства повсюду)
        </p>
        <p>
          Основным минусом является отсуствие поиска по проектам, а так же
          пагинации (неактуально при малом кол-ве работ)
        </p>
      </div>
    ),
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["HTML/CSS", "React"],
  },
]

export default data_projects
