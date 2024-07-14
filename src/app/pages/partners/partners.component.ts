import { Component } from '@angular/core';
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";
import {IPartnerPage, PARTNERS_PAGE_LIST} from "../../core/constants/partners-page";
import {TranslocoPipe} from "@jsverse/transloco";
import {FaqComponent} from "../home/components/faq/faq.component";
import {HomePartnersComponent} from "../home/components/home-partners/home-partners.component";

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    CompanyInNumsComponent,
    TranslocoPipe,
    FaqComponent,
    HomePartnersComponent
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {

  public get partnersList(): IPartnerPage[]{
    return PARTNERS_PAGE_LIST;
  }
}
