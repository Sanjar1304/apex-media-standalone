import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {IOurService, OUR_SERVICES_LIST} from "../../../../core/constants/our-services";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {


  public get servicesCards(): IOurService[] {
    return OUR_SERVICES_LIST;
  }
}
