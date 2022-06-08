import chatapp from "../../assets/projects_images/chatapp.JPG"
import covid from "../../assets/projects_images/COVID.jpg"
import blinking from "../../assets/projects_images/blinking.JPG"
import dev_talks from "../../assets/projects_images/Dev_talks.jpg"

const data_projects = [
  {
    name: "COVID 19 tracker",
    image: covid,
    descr: "Это проект Covid 19 tracker",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "ASP.NET Core"],
  },
  {
    name: "Realtime Chat App",
    image: chatapp,
    descr: "Realtime Chat App, не знаю, что это такое",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "ASP.NET Core"],
  },
  {
    name: "Blinking app",
    image: blinking,
    descr: "Нано-технелогия, неизвестная людям",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["C#", "HTML/CSS"],
  },
  {
    name: "Dev talks",
    image: dev_talks,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, quia?",
    github_url: "https://github.com/ilyaik?tab=projects",
    tags: ["React", "HTML/CSS"],
  },
]

export default data_projects
