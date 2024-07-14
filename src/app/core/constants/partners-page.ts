export interface IPartnerPage {
  number: string;
  text: string;
  button?: IButton;
}

export interface IButton {
  buttonImage?: string;
  buttonBgColor?: string;
  buttonBorder?: string;
  buttonText?: string;
  padding?: string;
}

export const PARTNERS_PAGE_LIST: IPartnerPage[] = [
  {
    number: "1",
    text: 'Выберите точку размещения рекламы',
    button: {
      buttonImage: '/assets/icons/map.2 1.svg',
      buttonBgColor: '#FF0008',
      buttonBorder: 'none',
      buttonText: "Выбрать на карте",
      padding: '16px 32px 16px 16px'
    }
  },
  {
    number: "2",
    text: 'Либо заполните форму обратной связи',
    button: {
      buttonImage: '',
      buttonBgColor: 'transparent',
      buttonBorder: '2px solid #FFFFFF66',
      buttonText: 'Обратная связь',
      padding: '16px 32px'
    }
  },
  {
    number: "3",
    text: 'Наш менеджер свяжется с вами и обсудит сотрудничество',
  }
]
