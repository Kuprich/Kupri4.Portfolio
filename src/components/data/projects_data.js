import chatapp from "../../assets/projects_images/chatapp.JPG"
import covid from "../../assets/projects_images/COVID.jpg"
import blinking from "../../assets/projects_images/blinking.JPG"
import dev_talks from "../../assets/projects_images/Dev_talks.jpg"

import project1_img1_original from "../../assets/projects_images/Project1/test_img1_original.jpg"
import project1_img1_thumbnail from "../../assets/projects_images/Project1/test_img1_thumbnail.jpg"

import project1_img2_original from "../../assets/projects_images/Project1/test_img2_original.jpg"
import project1_img2_thumbnail from "../../assets/projects_images/Project1/test_img2_thumbnail.jpg"

const data_projects = [
  {
    id: 1,
    name: "COVID 19 tracker",
    thumbnail: covid,
    images: [
      {
        original: project1_img1_original,
        thumbnail: project1_img1_thumbnail,
      },
      {
        original: project1_img2_original,
        thumbnail: project1_img2_thumbnail,
      },
    ],
    descr: "Это проект Covid 19 tracker",
    detailed_descr: "Это подробное описание проекта Covid 19 tracker",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "ASP.NET Core"],
  },
  {
    id: 2,
    name: "Realtime Chat App",
    thumbnail: chatapp,
    descr: "Realtime Chat App, не знаю, что это такое",
    detailed_descr: "Это подробное описание Realtime Chat App",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "ASP.NET Core"],
  },
  {
    id: 3,
    name: "Blinking app",
    thumbnail: blinking,
    descr: "Нано-технелогия, неизвестная людям",
    detailed_descr: "Это подробное описание Нано-технелогия, неизвестная людям",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "HTML/CSS"],
  },
  {
    id: 4,
    name: "Dev talks",
    thumbnail: dev_talks,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, quia?",
    detailed_descr: "Это подробное описание Dev talks",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["React", "HTML/CSS"],
  },
]

export default data_projects
