export interface IOurService {
  id: string;
  icon: string;
  title: string;
  text: string;
  url: string;
}

export const OUR_SERVICES_LIST: IOurService[] = [
  {
    id: "0",
    icon: "/assets/icons/video.svg",
    title: "homePage.sections.ourServices.cards.left.title",
    text: "homePage.sections.ourServices.cards.left.text",
    url: "",
  },
  {
    id: "1",
    icon: "/assets/icons/tv.svg",
    title: "homePage.sections.ourServices.cards.right.title",
    text: "homePage.sections.ourServices.cards.right.text",
    url: "",
  },
]
