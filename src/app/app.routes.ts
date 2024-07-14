import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'our-services',
    loadComponent: () => import('./pages/our-services/our-services.component').then(m => m.OurServicesComponent)
  },
  {
    path: 'partners',
    loadComponent: () => import('./pages/partners/partners.component').then(m => m.PartnersComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
  },
  {
    path: 'news/:id',
    loadComponent: () => import('./pages/news/components/card-content/card-content.component').then(m => m.CardContentComponent)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent)
  },
  {
    path: 'text-page',
    loadComponent: () => import('./pages/text-page/text-page.component').then(m => m.TextPageComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  }
]
