import Portfolio_img1 from "../../assets/projects_images/Portfolio/original/1.png"
import Portfolio_img2 from "../../assets/projects_images/Portfolio/original/2.png"
import Portfolio_img3 from "../../assets/projects_images/Portfolio/original/3.png"
import Portfolio_img4 from "../../assets/projects_images/Portfolio/original/4.png"

import Portfolio_img1_thumb from "../../assets/projects_images/Portfolio/thumb/1.png"
import Portfolio_img2_thumb from "../../assets/projects_images/Portfolio/thumb/2.png"
import Portfolio_img3_thumb from "../../assets/projects_images/Portfolio/thumb/3.png"
import Portfolio_img4_thumb from "../../assets/projects_images/Portfolio/thumb/4.png"

import IMS_img1 from "../../assets/projects_images/IMS/original/1.png"
import IMS_img2 from "../../assets/projects_images/IMS/original/2.png"
import IMS_img3 from "../../assets/projects_images/IMS/original/3.png"
import IMS_img4 from "../../assets/projects_images/IMS/original/4.png"
import IMS_img5 from "../../assets/projects_images/IMS/original/5.png"
import IMS_img6 from "../../assets/projects_images/IMS/original/6.png"
import IMS_img7 from "../../assets/projects_images/IMS/original/7.png"

import IMS_img1_thumb from "../../assets/projects_images/IMS/thumb/1.png"
import IMS_img2_thumb from "../../assets/projects_images/IMS/thumb/2.png"
import IMS_img3_thumb from "../../assets/projects_images/IMS/thumb/3.png"
import IMS_img4_thumb from "../../assets/projects_images/IMS/thumb/4.png"
import IMS_img5_thumb from "../../assets/projects_images/IMS/thumb/5.png"
import IMS_img6_thumb from "../../assets/projects_images/IMS/thumb/6.png"
import IMS_img7_thumb from "../../assets/projects_images/IMS/thumb/7.png"

import ShopCart_img1 from "../../assets/projects_images/ShopCart/original/1.png"
import ShopCart_img2 from "../../assets/projects_images/ShopCart/original/2.png"
import ShopCart_img3 from "../../assets/projects_images/ShopCart/original/3.png"
import ShopCart_img4 from "../../assets/projects_images/ShopCart/original/4.png"
import ShopCart_img5 from "../../assets/projects_images/ShopCart/original/5.png"
import ShopCart_img6 from "../../assets/projects_images/ShopCart/original/6.png"
import ShopCart_img7 from "../../assets/projects_images/ShopCart/original/7.png"
import ShopCart_img8 from "../../assets/projects_images/ShopCart/original/8.png"

import ShopCart_img1_thumb from "../../assets/projects_images/ShopCart/thumb/1.png"
import ShopCart_img2_thumb from "../../assets/projects_images/ShopCart/thumb/2.png"
import ShopCart_img3_thumb from "../../assets/projects_images/ShopCart/thumb/3.png"
import ShopCart_img4_thumb from "../../assets/projects_images/ShopCart/thumb/4.png"
import ShopCart_img5_thumb from "../../assets/projects_images/ShopCart/thumb/5.png"
import ShopCart_img6_thumb from "../../assets/projects_images/ShopCart/thumb/6.png"
import ShopCart_img7_thumb from "../../assets/projects_images/ShopCart/thumb/7.png"
import ShopCart_img8_thumb from "../../assets/projects_images/ShopCart/thumb/8.png"

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
    github_url: "https://github.com/Kuprich/Kupri4.Portfolio",
    tags: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    name: "Inventory Management System",
    thumbnail: IMS_img6_thumb,
    images: [
      {
        original: IMS_img1,
        thumbnail: IMS_img1_thumb,
      },
      {
        original: IMS_img2,
        thumbnail: IMS_img2_thumb,
      },
      {
        original: IMS_img3,
        thumbnail: IMS_img3_thumb,
      },
      {
        original: IMS_img4,
        thumbnail: IMS_img4_thumb,
      },
      {
        original: IMS_img5,
        thumbnail: IMS_img5_thumb,
      },
      {
        original: IMS_img6,
        thumbnail: IMS_img6_thumb,
      },
      {
        original: IMS_img7,
        thumbnail: IMS_img7_thumb,
      },
    ],
    descr:
      "Cистема управления запасами с ASP.NET Core Blazor в .NET 6 с использованием Entity Framework Core, SqLite, Clean Architecture и ASP.NET Core Identity для аутентификации и авторизации.",
    detailed_descr: (
      <div>
        <p>
          <b>Inventory Management System</b> - это система управления запасами,
          которая позволяет осуществлять контроль за созданием и пополением
          запасов.
        </p>
        <ul>
          В данной системе реализованы следующие возможности:
          <li>Добавление, редактирование, удаление запаса (запчасти)</li>
          <li>Закупка запасных частей</li>
          <li>
            Добавление, редактирование, удаление продукта (продукт составляется
            из запасных частей)
          </li>
          <li>
            Производство продукта - при нехватке каких-либо запасных частей
            продукт не будет произведен
          </li>
          <li>
            Продажа продукта - при выполнении продажи продукта, комплектующие
            попадают обратно на склад запасных частей
          </li>
          <li>Отчет по закупкам запасных частей</li>
          <li>Отчет по производству и продаже продуктов</li>
        </ul>
      </div>
    ),
    github_url: "https://github.com/Kuprich/Kupri4.IMS",
    tags: ["HTML/CSS", "C#", "ASP.NET Core", "Blazor"],
  },
  {
    id: 3,
    name: "Shop Cart",
    thumbnail: ShopCart_img2,
    images: [
      {
        original: ShopCart_img1,
        thumbnail: ShopCart_img1_thumb,
      },
      {
        original: ShopCart_img2,
        thumbnail: ShopCart_img2_thumb,
      },
      {
        original: ShopCart_img3,
        thumbnail: ShopCart_img3_thumb,
      },
      {
        original: ShopCart_img4,
        thumbnail: ShopCart_img4_thumb,
      },
      {
        original: ShopCart_img5,
        thumbnail: ShopCart_img5_thumb,
      },
      {
        original: ShopCart_img6,
        thumbnail: ShopCart_img6_thumb,
      },
      {
        original: ShopCart_img7,
        thumbnail: ShopCart_img7_thumb,
      },
      {
        original: ShopCart_img8,
        thumbnail: ShopCart_img8_thumb,
      },
    ],
    descr:
      "Проект-пародия на магазин электроники, с выбором категорий, добавлением товаров в корзину",
    detailed_descr: (
      <div>
        <p>Проект ShopCart - пример магазина электроники.</p>
        <p>
          Имеются несколько страниц, основной из которых явялется страница
          продукты (Products). Страница доступна только авторизованным
          пользователям.
        </p>
        <ul>
          В проекте реализованы следующие функции:
          <li>Страница регистрации / авторизации</li>
          <li>Разделение и фильтр товаров по категориям</li>
          <li>Добавление товаро в корзину / удаление из корзины</li>
          <li>Вычисление итоговой стоимости товаров в корзине</li>
          <li>
            Имеется панель администрирования, в которой реализовано:
            <ul>
              <li>Добавление / редактирование / удаление страниц</li>
              <li>Добавление / редактирование / удаление категорий</li>
              <li>Добавление / удаление ролей пользователей </li>
            </ul>
          </li>
        </ul>
        <p>Минусы данной системы:</p>
        <ul>
          <li>Упрощенная система регистрации в системе</li>
          <li>Отсутствие какой-либо возможности </li>
        </ul>
      </div>
    ),
    github_url: "https://github.com/Kuprich/Kupri4.ShopCart",
    tags: ["HTML/CSS", "C#", "ASP.NET Core"],
  },
]

export default data_projects
