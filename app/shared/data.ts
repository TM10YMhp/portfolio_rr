import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Libros de Diemon",
    desc: "En esta pagina puedes ver la informacion de cada libro y canjear los libros por monedas, ademas de filtrar y ordenar.",
    img: "/projects/diemon.webp",
    link: "https://librosdiemon.netlify.app/",
    github: "https://github.com/TM10YMhp/libros_diemon",
    tags: ["React", "NextJS", "SSR", "API"],
  },
  {
    title: "WA - Chat en Tiempo Real",
    desc: "Mensajes en tiempo real, hecho con typescript y turborepo.",
    img: "/projects/wa.webp",
    link: "https://wa-client.onrender.com/",
    github: "https://github.com/TM10YMhp/wa_monorepo",
    tags: ["TypeScript", "Workspaces", "Turborepo", "TailwindCSS", "SocketIO"],
  },
  {
    title: "Markdown Editor",
    desc: "Un editor de markdown para crear documentos de forma rápida y sencilla.",
    img: "/projects/md_editor.webp",
    link: "https://markdown-editor-311416.netlify.app/",
    github: "https://github.com/TM10YMhp/markdown-editor",
    tags: ["React", "CodeMirror"],
  },
  {
    title: "Station98",
    desc: "Un clon de spotify. Lo creé para practicar con React, TailwindCSS y CSS.",
    img: "/projects/station.webp",
    link: "https://station98.netlify.app/",
    github: "https://github.com/TM10YMhp/station_react",
    tags: ["React", "TailwindCSS", "CSS", "Zustand"],
  },
  {
    title: "Frontder",
    desc: 'Un clon de tinder pero con proyectos de "Frontend Mentor" que obtuve por medio de scraping.',
    img: "/projects/frontder.webp",
    link: "https://frontder.netlify.app/",
    github: "https://github.com/TM10YMhp/frontder",
    tags: ["Scraping", "NextJS", "TailwindCSS"],
  },
  {
    title: "TM10YMhp - Links",
    desc: "Obtiene los enlaces desde una hoja de cálculo de google y se actualiza a demanda usando NextJS",
    img: "/projects/next2.webp",
    link: "https://tm10ymhp-links.vercel.app/",
    github: "https://github.com/TM10YMhp/tm10ymhp-links",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "ISR"],
  },
  {
    title: "ff_components",
    desc: "Libreria de componentes para React, usada en un proyecto para Fisiom Fulness.",
    img: "/projects/fisio.webp",
    // link: "",
    // github: "",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
  {
    title: "Pagina Web Responsiva",
    desc: "Pagina adaptada para todos los dispositivos, tambien agregue optimizacion de imagenes.",
    img: "/projects/responsive2.webp",
    // link: "",
    // github: "",
    tags: ["HTML", "CSS", "Javascript", "Wordpress", "Vue", "Alpine"],
  },
  {
    title: "CompressWebp",
    desc: "El script mas simple y estable que tengo hasta ahora. sirve para optimizar imagenes, es muy facil de integrar y muy conveniente por cierto.",
    img: "/projects/compress.webp",
    // link: "",
    // github: "",
    tags: ["Node", "CLI", "Sharp"],
  },
  {
    title: "SereneNvim",
    desc: "Soluciona problemas de compatibilidad con Windows. Mi herramienta preferida para trabajar con Lua, TypeScript, Python, y... Java?. Sigo mejorando el soporte para Java, C++, C# y PHP.",
    img: "/projects/serene.webp",
    // link: "",
    github: "https://github.com/TM10YMhp/init.lua/tree/test",
    tags: ["Lua", "Neovim", "Windows", "Linux"],
  },
  {
    title: "RPG",
    desc: "Un juego que realize en Java y luego pase a Python... el rendimiento disminuyo sorprendentemente.",
    img: "/projects/rpg.gif",
    // link: "",
    // github: "",
    tags: ["Java", "Python"],
  },
  {
    title: "Donut.rs",
    desc: "Una dona que gira sobre su propio eje... hecho con Rust... y trigonometria...",
    img: "/projects/donut.webp",
    // link: "",
    // github: "",
    tags: ["Rust"],
  },
];
