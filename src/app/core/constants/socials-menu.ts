export interface ISocials {
  id: string;
  icon: string;
  name: string;
  url: string;
}

export const SOCIALS_LIST: ISocials[] = [
  {
    id: "0",
    icon: "/assets/icons/telegram.svg",
    name: "telegram",
    url: "https://web.telegram.org/"
  },
  {
    id: "1",
    icon: "/assets/icons/facebook.svg",
    name: "facebook",
    url: "https://www.facebook.com/"
  },
  {
    id: "2",
    icon: "/assets/icons/instagram.svg",
    name: "instagram",
    url: "https://www.instagram.com/"
  },
  {
    id: "3",
    icon: "/assets/icons/youtube.svg",
    name: "youtube",
    url: "https://www.youtube.com/"
  },
]
