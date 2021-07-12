export interface IBlurb {
  text: string;
  title: string;
}

export interface IAboutMe {
  img: string;
  alt: string;
  link: string;
  blurbs: IBlurb[];
}

export interface IProject {
  title: string;
  img: string;
  area: string[];
  description: string;
  languages: string[];
  technologies: string[];
  tools: string[];
  demo: string;
  code: string;
  [propName: string]: number | string | string[];
}

export interface IPictureBlurbList {
  img: string;
  alt: string;
  link: string;
  title: string;
  text: string;
}

export interface ITestimonial {
  name: string;
  company: string;
  role: string;
  img: string;
  link: string;
  text: string;
}

export interface ICommunity {
  title: string;
  img: string;
  alt: string;
  link: string;
}

export interface IContact {
  img: string;
  alt: string;
  title: string;
  link: string;
}

export interface IData {
  aboutMe: IAboutMe;
  projects: IProject[];
  experience: IPictureBlurbList[];
  education: IPictureBlurbList[];
  testimonials: ITestimonial[];
  community: ICommunity[];
  contact: IContact[];
}
