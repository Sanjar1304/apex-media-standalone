import { Component } from '@angular/core';
import {AddsComponent} from "./components/adds/adds.component";
import {CompanyInNumsComponent} from "./components/company-in-nums/company-in-nums.component";
import {FeaturesComponent} from "./components/features/features.component";
import {AboutComponent} from "./components/about/about.component";
import {OurServicesComponent} from "../our-services/our-services.component";
import {FaqComponent} from "./components/faq/faq.component";
import {ServicesComponent} from "./components/services/services.component";
import {HomePartnersComponent} from "./components/home-partners/home-partners.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddsComponent,
    CompanyInNumsComponent,
    FeaturesComponent,
    AboutComponent,
    OurServicesComponent,
    FaqComponent,
    ServicesComponent,
    HomePartnersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
