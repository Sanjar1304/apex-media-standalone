export interface IHomeNavbar {
  label: string;
  image?: string;
  path: string;
  id: string;
}

export const HOME_NAVBAR_MENUS: IHomeNavbar[] = [
  {
    label: 'homePage.navMenus.aboutUs',
    image: '',
    path: '/about-us',
    id: '0'
  },
  {
    label: 'homePage.navMenus.ourServices',
    image: '',
    path: '/our-services',
    id: '1'
  },
  {
    label: 'homePage.navMenus.partners',
    image: '',
    path: '/partners',
    id: '2'
  },
  {
    label: 'homePage.navMenus.news',
    image: '',
    path: '/news',
    id: '3'
  },
  {
    label: 'homePage.navMenus.contacts',
    image: '',
    path: '/contacts',
    id: '4'
  }
]
