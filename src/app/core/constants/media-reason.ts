export interface IMediaReason {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export const MEDIA_REASON_LIST: IMediaReason[] = [
  {
    id: '0',
    icon: '/assets/icons/megaphone.svg',
    title: 'homePage.sections.reason.title1',
    text: 'homePage.sections.reason.text1'
  },
  {
    id: '1',
    icon: '/assets/icons/target.svg',
    title: 'homePage.sections.reason.title2',
    text: 'homePage.sections.reason.text2'
  },
  {
    id: '2',
    icon: '/assets/icons/star.svg',
    title: 'homePage.sections.reason.title3',
    text: 'homePage.sections.reason.text3'
  },
]
