import { Component } from '@angular/core';
import {AddsComponent} from "../home/components/adds/adds.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {HomePartnersComponent} from "../home/components/home-partners/home-partners.component";
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";
import {LedAddsComponent} from "./components/led-adds/led-adds.component";
import {TextFormComponent} from "./components/text-form/text-form.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    AddsComponent,
    HeaderComponent,
    HomePartnersComponent,
    CompanyInNumsComponent,
    LedAddsComponent,
    TextFormComponent
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

}
