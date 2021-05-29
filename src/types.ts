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
  id: number;
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
  id: number;
  img: string;
  alt: string;
  link: string;
  title: string;
  text: string;
}

export interface ITestimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  img: string;
  link: string;
  text: string;
}

export interface ICommunity {
  id: number;
  title: string;
  img: string;
  alt: string;
  link: string;
}

export interface IContact {
  id: number;
  img: string;
  alt: string;
  title: string;
  link: string;
}

export interface Data {
  aboutMe: IAboutMe;
  projects: IProject[];
  experience: IPictureBlurbList[];
  education: IPictureBlurbList[];
  testimonials: ITestimonial[];
  community: ICommunity[];
  contact: IContact[];
}
