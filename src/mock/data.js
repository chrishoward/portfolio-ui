const data = {
  aboutMe: {
    img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
    alt: "Profile photo of Chris Howard",
    url: "https://www.linkedin.com/in/christopher-howard-au",
    blurbs: [
      {
        title: "Background",
        text: "I previously studied and worked as a Mechanical Engineer and in 2017 decided to transition to a career in Software Development, a decision I'm very happy I made. I've since enjoyed developing my skills in the Web Development space, gaining professional experience within the startup arena and making friends with other like-minded developers.",
      },
      {
        title: "Hobbies",
        text: "Developing, mountain biking, surfing, soccer, online gaming, fishing.",
      },
      {
        title: "Goals",
        text: "Work hard and expand on my software knowledge and skills as quickly as possible.",
      },
    ],
  },
  community: [
    {
      meetup: "ReactBris",
      src: "https://secure.meetupstatic.com/photos/event/1/e/5/2/600_478867762.jpeg",
      url: "https://www.meetup.com/reactbris/",
      title: "React Brisbane",
    },
    {
      meetup: "BrisJS",
      src: "https://secure.meetupstatic.com/photos/event/b/8/0/1/600_15527105.jpeg",
      url: "https://www.meetup.com/BrisJS/",
      title: "Brisbane JavaScript",
    },
  ],
  projects: [
    {
      name: "Orbmaps Website",
      img: "orbmaps-website.jpg",
      area: ["Client-side"],
      description:
        "Website created as part of Orbmaps' marketing campaign to communicate the features of their product and attract new customers.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["React", "Material UI", "Netlify"],
      devTools: ["VSCode", "Git", "Bash", "Chrome DevTools"],
      url: "http://www.orbmaps.com",
      code: "private",
    },
    {
      name: "(Review) Orbmaps CRM",
      img: "orbmaps-crm.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "CRM as part of the Orbmaps product suite which allows users to save properties from the Orbmaps Scanner mapping interface and add various information and files relating to their properties.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["React", "RMWC", "AWS", "Netlify", "CouchDB"],
      devTools: ["VSCode", "Git", "Bash", "Chrome DevTools"],
      url: "private",
      code: "private",
    },
    {
      name: "(Review) Portfolio Website",
      img: "orbmaps-website.jpg",
      area: ["Client-side"],
      description:
        "Created as a means of presenting projects I have worked on and providing links to live demos.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["React", "RMWC"],
      devTools: ["VSCode", "Git", "Bash", "Chrome DevTools"],
      url: "http://www.orbmaps.com",
      code: "http://www.github.com",
    },
    {
      name: "(Review) Know Your Fees",
      img: "know-your-fees.jpg",
      area: ["Client-side"],
      description:
        "Website which lists all the potential upfront costs of buying your first home, to help buyers make an informed decision when choosing to buy a house.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: [],
      devTools: ["VSCode", "Chrome DevTools"],
      url: "http://knowyourfees.com.au/",
      code: "private",
    },
    {
      name: "(Review) Joint Seal QLD",
      img: "joint-seal-qld.jpg",
      area: ["Client-side"],
      description:
        "Client website built for a small joint sealing business in the construction industry.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: [],
      devTools: ["VSCode", "Chrome DevTools"],
      url: "http://www.google.com.au/",
      code: "http://www.github.com",
    },
    {
      name: "(Review) Easec",
      img: "easec-website.jpg",
      area: ["Client-side"],
      description:
        "Client website built for a Queensland occupational rehabilitation company.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["WordPress"],
      devTools: ["Chrome DevTools"],
      url: "http://www.easec.com.au/",
      code: "private",
    },
    {
      name: "(Review) Gumtree Notifier",
      img: "orbmaps-website.jpg",
      area: ["Server-side"],
      description:
        "A Gumtree ad notifier built as an alternative to the built in notifier on Gumtree which has been slow or at times not functioning at all.",
      languages: ["JavaScript"],
      technologies: ["AWS", "CouchDB", "Puppeteer"],
      devTools: ["VSCode", "Bash", "Putty", "WinSCP"],
      url: "http://www.google.com.au/",
      code: "http://www.github.com",
    },
    {
      name: "(Review) To-Do List",
      img: "orbmaps-website.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "A to-do list built as a means of practicing the development of a full stack SPA with the following listed tech stack in preparation for a contracting position.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: ["React", "Redux", "RMWC", "Express", "Node", "Postgres"],
      devTools: ["VSCode", "Bash", "pgAdmin", "Chrome DevTools"],
      url: "http://www.google.com.au/",
      code: "http://www.github.com",
    },
  ],
  testimonials: Array(4).fill({
    name: "Chris Howard",
    company: "Orbmaps",
    role: "Tech Lead",
    img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
    url: "https://www.linkedin.com/in/moses-hamon/",
    msg: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  }),
  education: [
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
  ],
  experience: [
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
    {
      src: "https://udrew-public.s3.amazonaws.com/web/img/udrew_logo.svg",
      alt: "uDrew Logo",
      url: "http://www.google.com",
      title: "uDrew",
      text: "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaChris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
  ],
  contact: [
    {
      src: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
      alt: "Email",
      title: "Email",
      url: "http://www.google.com",
    },
    {
      src: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
      alt: "Email",
      title: "Email",
      url: "http://www.google.com",
    },
  ],
};

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

export default data;
