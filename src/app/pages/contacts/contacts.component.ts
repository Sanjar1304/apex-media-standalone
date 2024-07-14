import { Component } from '@angular/core';
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CompanyInNumsComponent,
    NgOptimizedImage
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
