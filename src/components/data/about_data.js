import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import api from "../../assets/icons/api.svg";
import algo from "../../assets/icons/algo.svg";
import puzzle from "../../assets/icons/puzzle.svg";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    content: [
      "I can build a beautiful and scalable",
      <b>SPA</b>,
      "  using HTML, CSS and Ract.js",
    ],
  },
  {
    icon: repair,
    title: "Backend Development",
    content: "Handle database, server, api using and SQLite",
  },
  {
    icon: api,
    title: "API Development",
    content: "I can develop robust REST API using django-rest-api",
  },
  {
    icon: algo,
    title: "Competitive Coder",
    content: "A daily problem solver in HackerRank and Leetcode",
  },
  {
    icon: puzzle,
    title: "UI/UX designer",
    content: "Minimalistic user interface using figma and framer",
  },
];

export default skills;
