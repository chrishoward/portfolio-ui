const data = {
  aboutMe: {
    img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
    alt: "Profile photo of Chris Howard",
    url: "https://www.linkedin.com/in/christopher-howard-au",
    blurbs: [
      {
        title: "Background",
        text: "I'm a self-taught, mid level, full stack Web Developer with 3 years of experience. I previously studied and worked as a Mechanical Engineer and in 2017 I made the decision to transition to a career in Software Development. I love using technology to break down and solve challenging business problems, especially with a team of good people.",
      },
      {
        title: "Hobbies",
        text: "Software developing, mountain biking, surfing, soccer, online gaming, exercise, fishing and road trips in my van.",
      },
      {
        title: "Goals",
        text: "To further strengthen my skill set and knowledge as a full stack developer, through continued study, hard work and learning from others in the field. I want to continue to grow my understanding of current and future web technologies and design patterns, their pros and cons, and which solution is best suited to which problem.",
      },
    ],
  },
  projects: [
    {
      name: "Portfolio Website",
      img: "portfolio.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "I created this website primarily as a means of presenting projects I've worked on and provide links to my source code and live demos where possible.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "React",
        "TypeScript",
        "Docker",
        "Node",
        "Express",
        "PostgreSQL",
        "AWS",
        "HTTPS",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "React DevTools",
        "WSL2",
        "Putty SSH",
      ],
      url: "",
      code: "",
    },
    {
      name: "uDrew Council Rules Evaluation",
      img: "udrew-rules.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "A system I developed that allows councils to input their planning rules and store them in a database. They are then later fetched and broken down into logical constructs, so they can be interpreted and validated through software for the user. It also provides the ability to accept SVG shapes drawn by the user and return buffered shapes that incorporate council offset rules, for real-time validation in the browser.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "React",
        "Express",
        "Node",
        "PostgreSQL",
        "SVG",
        "Netlify",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "pgAdmin",
        "Postman",
        "React DevTools",
        "Jira (Scrum)",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "uDrew Application",
      img: "udrew-app.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "The flagship product of uDrew, which allows users to get instant council assessment for their property development project. Worked on by all team members, I contributed to the UI design and implementation, user flow logic, SVG drawing capabilities, engineering calculation API and PDF report generation to name some key areas.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "TypeScript",
        "Redux",
        "React",
        "RMWC",
        "Express",
        "Node",
        "PostgreSQL",
        "SVG",
        "Puppeteer",
        "Leaflet",
        "Netlify",
        "Storybook",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "pgAdmin",
        "Postman",
        "React DevTools",
        "Jira (Scrum)",
      ],
      url: "https://app.udrew.com.au/intro/1",
      code: "private",
    },
    {
      name: "uDrew Login Authentication",
      img: "udrew-login.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "All pages required for various login related user flows, such as forgot password, create account, confirmation email redirect etc. I created the front end UI and worked with a colleague to implement the authentication functionality.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "Passport",
        "MDC React",
        "React",
        "Express",
        "Node",
        "TypeScript",
        "PostgreSQL",
        "Netlify",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "pgAdmin",
        "Postman",
        "React DevTools",
        "Trello (Scrum)",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "uDrew Resource Manager",
      img: "udrew-resource-manager.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "An application I developed which was used as an internal tool to allow architects in the team to create entities and upload contents to the database so they could be used/displayed in the main uDrew application. It performs all CRUD related operations.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "MDC React",
        "React",
        "Express",
        "Node",
        "PostgreSQL",
        "Netlify",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "pgAdmin",
        "Postman",
        "React DevTools",
        "Trello (Scrum)",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "uDrew Admin Application",
      img: "udrew-admin.jpg",
      area: ["Client-side"],
      description:
        "The user interface I developed for the admin application that allowed councils to view user submitted development projects, manage council rules and various other administrative tasks. The server-side part of the application was put on hold while I was at the company.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["React", "RMWC", "TypeScript"],
      devTools: ["VSCode", "Git", "Bash", "Chrome DevTools", "Trello (Scrum)"],
      url: "private",
      code: "private",
    },
    {
      name: "uDrew uForm",
      img: "udrew-uform.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "uForm was an early version of the uDrew application which demonstrated the product idea and generated interest from various parties.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "Leaflet",
        "React",
        "RMWC",
        "Redux",
        "Express",
        "Node",
        "PostgreSQL",
        "Netlify",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "React DevTools",
        "pgAdmin",
        "Postman",
        "Trello (Scrum)",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "Orbmaps CRM",
      img: "orbmaps-crm.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "I built the Orbmaps CRM as part of the Orbmaps product suite which allows users to save properties to a database from the Orbmaps Scanner mapping interface and add various information and files relating to their properties.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: [
        "React",
        "Redux",
        "RMWC",
        "AWS EC2",
        "Netlify",
        "CouchDB",
        "Node",
        "Express",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "Putty SSH",
        "Postman",
        "React DevTools",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "Orbmaps Scanner",
      img: "orbmaps-scanner.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "This application allows users to locate and view properties through a mapping interface and overlay various planning related plots. I contributed to various features, bug fixes and improvements requested by users.",
      languages: ["HTML5", "CSS3", "JavaScript", "SQL"],
      technologies: [
        "React",
        "Redux",
        "RMWC",
        "AWS Cognito",
        "AWS EC2",
        "Netlify",
        "CouchDB",
        "Node",
        "Express",
        "Leaflet",
      ],
      devTools: [
        "VSCode",
        "Git",
        "Bash",
        "Chrome DevTools",
        "Putty SSH",
        "pgAdmin",
        "Postman",
        "React DevTools",
      ],
      url: "private",
      code: "private",
    },
    {
      name: "Orbmaps Landing Page",
      img: "orbmaps-website.jpg",
      area: ["Client-side"],
      description:
        "I built this website as part of Orbmaps' marketing campaign to communicate the features of their product and attract new customers.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["React", "Material UI", "Netlify"],
      devTools: ["VSCode", "Git", "Bash", "Chrome DevTools", "React DevTools"],
      url: "http://www.orbmaps.com",
      code: "private",
    },
    {
      name: "Easec Occupational Health",
      img: "easec-website.jpg",
      area: ["Client-side", "Server-side"],
      description:
        "Client website I built using WordPress for a Queensland occupational rehabilitation company.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["WordPress", "phpMyAdmin"],
      devTools: ["VSCode", "Chrome DevTools", "FileZilla FTP"],
      url: "http://www.easec.com.au/",
      code: "private",
    },
    {
      name: "Gumtree Notifier",
      img: "gumtree-notifier.jpg",
      area: ["Server-side"],
      description:
        "A Gumtree ad notifier I built as an alternative to the notifier on Gumtree which has been slow or at times not functioning at all. It checks ads at intervals for a given search query and sends an email when a new ad has been posted.",
      languages: ["JavaScript"],
      technologies: ["AWS EC2", "AWS SES", "CouchDB", "Node", "Puppeteer"],
      devTools: ["VSCode", "Git", "Bash", "WinSCP", "Putty SSH"],
      url: "private",
      code: "",
    },
    {
      name: "Joint Seal QLD",
      img: "joint-seal-qld.jpg",
      area: ["Client-side"],
      description:
        "Client website I built for a small joint sealing business in the construction industry.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: [],
      devTools: ["VSCode", "Chrome DevTools"],
      url: "",
      code: "",
    },
    {
      name: "Know Your Fees",
      img: "know-your-fees.jpg",
      area: ["Client-side"],
      description:
        "One of the first websites I made, using basic HTML5, CSS3 and JavaScript only. It lists all the potential upfront costs of buying your first home, to help buyers make an informed decision when choosing to buy a house.",
      languages: ["HTML5", "CSS3", "JavaScript"],
      technologies: ["AWS Route 53", "AWS S3"],
      devTools: ["VSCode", "Chrome DevTools"],
      url: "http://knowyourfees.com.au/",
      code: "private",
    },
  ],
  experience: [
    {
      src: "udrew-logo.svg",
      alt: "uDrew Logo",
      url: "http://www.udrew.com.au",
      title: "uDrew",
      text: "uDrew is the world's first building technology platform that allows users to submit and get instant automated approval on property development projects. I worked on their platform as a remote Web Developer and gained a great deal of experience working in a fast moving company that was working to scale quickly to meet the rigorous requirements of councils around Australia and New Zealand.",
    },
    {
      src: "orbmaps-logo.svg",
      alt: "Orbmaps Logo",
      url: "http://www.orbmaps.com",
      title: "Orbmaps",
      text: "Orbmaps provided products for property developers that allow them to view government and town planning restrictions on an intuitive mapping interface. This allowed them to find properties that are viable for development. As my first role in a professional software team Orbmaps allowed me to greatly expand my knowledge of web technologies and learn how to work efficiently with other developers to meet challenging deadlines.",
    },
    {
      src: "synchrotech.svg",
      alt: "Synchrotech Controls Logo",
      url: "https://www.synchrotechcontrols.com.au/",
      title: "Synchrotech Controls",
      text: "Synchrotech Controls is a small-medium company specialising in the design, manufacture, installation and commissioning of power generator systems, where I worked as a Project Engineer in the Mechanical team. I designed mechanical systems, prepared user documentation and manufacturing drawings, oversaw manufacturing of my designs, liaised with clients and contributed to installation, testing, commissioning and maintenance of mechanical systems.",
    },
  ],
  education: [
    {
      src: "self-taught.svg",
      alt: "Laptop Icon",
      url: "",
      title: "Web Development, Self Taught",
      text: "My strong grasp of web technologies and design patterns are a result of hard work and disciplined self study outside of my employment obligations. I draw on various sources of information, primarily official documentation, online courses, Mozilla Developer Network (MDN) documentation, learning from more experienced colleagues and most importantly practice.",
    },
    {
      src: "qut.svg",
      alt: "QUT Logo",
      url: "https://www.qut.edu.au/",
      title: "Bachelor of Mechanical Engineering",
      text: "I completed a Bachelor of Mechanical Engineering course over a period of four and a half years and graduated with Second Class Honours. This course further strengthened my ability to understand how to approach and dissect complex problems of all forms, not just technical, and then leverage technology and clever design to solve these problems. Although the solution implementation is different between Mechanical and Software engineering, the underlying logical problem solving process is the same and I feel my problem solving skills and experience that I gained as a mechanical engineer have made me a great software developer from the start.",
    },
  ],
  testimonials: [
    {
      name: "Craig Giles",
      company: "Synchrotech Controls",
      role: "Senior Mech. Engineer",
      img: "https://media-exp1.licdn.com/dms/image/C5103AQEGx7Tc0CjlOw/profile-displayphoto-shrink_400_400/0/1517010827904?e=1627516800&v=beta&t=zqhzf-lCCoqe-KyEvgcVIR7mmaldR2U6H4s8GOWS8SY",
      url: "https://www.linkedin.com/in/craig-giles-a1005b122/",
      msg: "Chris's professional manner has been exemplary. He has demonstrated the ability to work independently while understanding the point where seeking advice and direction is necessary. He has integrated well into a multi-disciplinary team showing effective communication and interpersonal skills. I would not hesitate in recommending Chris to any future employer.",
    },
  ],
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
  contact: [
    {
      src: "mail.svg",
      alt: "Email Icon",
      title: "Email",
      url: "mailto:hi@chrishoward.com.au",
    },
    {
      src: "github.svg",
      alt: "Github Logo",
      title: "Github",
      url: "https://github.com/christopher-howard",
    },
    {
      src: "linkedin.svg",
      alt: "Linkedin Logo",
      title: "Linkedin",
      url: "https://www.linkedin.com/in/christopher-howard-au",
    },
  ],
};

export default data;
