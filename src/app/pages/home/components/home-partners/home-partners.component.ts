import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {IPartner, PARTNERS_LIST} from "../../../../core/constants/partners.list";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-home-partners',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './home-partners.component.html',
  styleUrl: './home-partners.component.scss'
})
export class HomePartnersComponent {

  public get partnersList(): IPartner[] {
    return PARTNERS_LIST;
  }

}
