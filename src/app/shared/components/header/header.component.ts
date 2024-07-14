import {Component, inject, input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe, TranslocoService} from "@jsverse/transloco";
import {LocalStorageService} from "../../../core/services/utils/localStorage.service";
import {Router, RouterLink} from "@angular/router";
import {HOME_NAVBAR_MENUS, IHomeNavbar} from "../../../core/constants/home-navbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public burgerMenuOpened = input<boolean>(false);

  private readonly localStorage = inject(LocalStorageService);
  private readonly translocoService = inject(TranslocoService);
  private readonly router = inject(Router);

  public get navMenus(): IHomeNavbar[] {
    return HOME_NAVBAR_MENUS
  }

  public get locales(): string[] {
    return this.translocoService
      .getAvailableLangs()
      .map(lang => typeof lang === 'string' ? lang : lang.label)
  }

  public get currentLocale(): string {
    return this.translocoService.getActiveLang();
  }

  public localeSelect(locale: string): void {
    this.translocoService.setActiveLang(locale);
    this.localStorage.setItem('locale', locale);
  }

}
