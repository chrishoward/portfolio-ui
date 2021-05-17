export const aboutMe = {
  img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
  url: "https://www.linkedin.com/in/christopher-howard-au",
  blurb: {
    Background:
      "I previously studied and worked as a Mechanical Engineer and in 2017 decided to transition to a career in Software Development, a decision I'm very happy I made. I've since enjoyed developing my skills in the Web Development space, gaining professional experience within the startup arena and making friends with other like-minded developers.",
    Hobbies:
      "Developing, mountain biking, surfing, soccer, online gaming, fishing.",
    Goals:
      "Work hard and expand on my software knowledge and skills as quickly as possible.",
  },
};

export const community = [
  {
    meetup: "ReactBris",
    img: "https://secure.meetupstatic.com/photos/event/1/e/5/2/600_478867762.jpeg",
    url: "https://www.meetup.com/reactbris/",
    title: "React Brisbane",
  },
  {
    meetup: "BrisJS",
    img: "https://secure.meetupstatic.com/photos/event/b/8/0/1/600_15527105.jpeg",
    url: "https://www.meetup.com/BrisJS/",
    title: "Brisbane JavaScript",
  },
  {
    meetup: "Node Brisbane",
    img: "https://secure.meetupstatic.com/photos/event/b/4/b/7/600_479626263.jpeg",
    url: "https://www.meetup.com/Node-Brisbane/",
    title: "Node Brisbane",
  },
];

// export const education = [
//   {
//     title: "Self Taught",
//     avatarIcon: "selfstudy",
//     blurbComponent: <BlurbSelfTaught />,
//     blurb:
//       "I am self taught bla bla bla I am self taught bla bla bla I am self taught bla bla bla",
//   },
//   {
//     title: "Bach. of Mechanical Engineering",
//     avatarIcon: "qut",
//     blurb: <BlurbSelfTaught />,
//   },
// ];

// export const experience = [
//   {
//     title: "Self Taught1",
//     avatarIcon: "react",
//     blurb: <BlurbSelfTaught />,
//   },
//   {
//     title: "Self Taught2",
//     avatarIcon: "react",
//     blurb: <BlurbSelfTaught />,
//   },
//   {
//     title: "Self Taught3",
//     avatarIcon: "react",
//     blurb: <BlurbSelfTaught />,
//   },
// ];

// export const projectAreas = [
//   { title: "Area", type: "text", content: area },
//   { title: "Languages", type: "icons", content: languages },
//   { title: "Technologies", type: "icons", content: technologies },
//   { title: "Dev Tools", type: "icons", content: devTools },
// ];

export const projects = [
  {
    name: "Orbmaps Website",
    img: "orbmaps-website.jpg",
    area: ["Client-side"],
    description:
      "Website created as part of Orbmaps' marketing campaign to communicate the features of their product and attract new customers.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "materialui", "netlify"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com",
  },
  {
    name: "(Review) Orbmaps CRM",
    img: "orbmaps-crm.jpg",
    area: ["Full Stack"],
    description:
      "CRM as part of the Orbmaps product suite which allows users to save properties from the Orbmaps Scanner mapping interface and add various information and files relating to their properties.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "rmwc", "aws", "netlify", "couchdb"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com",
  },
  {
    name: "(Review) Portfolio Website",
    img: "",
    area: ["Client-side"],
    description:
      "Created as a means of presenting projects I have worked on and providing links to live demos.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "rmwc"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com",
  },
  {
    name: "(Review) Know Your Fees",
    img: "know-your-fees.jpg",
    area: ["Client-side"],
    description:
      "Website which lists all the potential upfront costs of buying your first home, to help buyers make an informed decision when choosing to buy a house.",
    languages: ["html", "css", "javascript"],
    technologies: [],
    devTools: ["vscode", "chromedevtools"],
    demoUrl: "http://knowyourfees.com.au/",
  },
  {
    name: "(Review) Joint Seal QLD",
    img: "joint-seal-qld.jpg",
    area: ["Client-side"],
    description:
      "Client website built for a small joint sealing business in the construction industry.",
    languages: ["html", "css", "javascript"],
    technologies: [],
    devTools: ["vscode", "chromedevtools"],
    demoUrl: "http://www.google.com.au/",
  },
  {
    name: "(Review) Easec",
    img: "easec-website.jpg",
    area: ["Client-side"],
    description:
      "Client website built for a Queensland occupational rehabilitation company.",
    languages: ["html", "css", "javascript"],
    technologies: ["wordpress"],
    devTools: ["chromedevtools"],
    demoUrl: "http://www.easec.com.au/",
  },
  {
    name: "(Review) Gumtree Notifier",
    img: "",
    area: ["Server-side"],
    description:
      "A Gumtree ad notifier built as an alternative to the built in notifier on Gumtree which has been slow or at times not functioning at all.",
    languages: ["javascript"],
    technologies: ["aws", "couchdb", "puppeteer"],
    devTools: ["vscode", "bash", "putty", "winscp"],
    demoUrl: "http://www.google.com.au/",
  },
  {
    name: "(Review) To-Do List",
    img: "",
    area: ["Full Stack"],
    description:
      "A to-do list built as a means of practicing the development of a full stack SPA with the following listed tech stack in preparation for a contracting position.",
    languages: ["html", "css", "javascript", "sql"],
    technologies: ["react", "redux", "rmwc", "express", "node", "postgres"],
    devTools: ["vscode", "bash", "pgadmin", "chromedevtools"],
    demoUrl: "http://www.google.com.au/",
  },
];

export const testimonials = Array(4).fill({
  name: "Chris Howard",
  company: "Orbmaps",
  role: "Tech Lead",
  img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
  url: "https://www.linkedin.com/in/moses-hamon/",
  msg: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
});

export const nav = [
  { id: "about-me", name: "About Me" },
  { id: "projects", name: "Projects" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "testimonials", name: "Testimonials" },
  { id: "community", name: "Community" },
  { id: "contact", name: "Contact" },
];
