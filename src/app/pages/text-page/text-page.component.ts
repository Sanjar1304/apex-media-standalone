import { Component } from '@angular/core';
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";

@Component({
  selector: 'app-text-page',
  standalone: true,
  imports: [
    CompanyInNumsComponent
  ],
  templateUrl: './text-page.component.html',
  styleUrl: './text-page.component.scss'
})
export class TextPageComponent {

}
