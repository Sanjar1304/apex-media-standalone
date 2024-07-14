import { Component } from '@angular/core';
import { MatExpansionModule} from "@angular/material/expansion";
import {TranslocoPipe} from "@jsverse/transloco";
import {FAQ_LIST, IFaq} from "../../../../core/constants/faq";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    TranslocoPipe
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  panelOpenState = false;

  public get faqList(): IFaq[] {
    return FAQ_LIST
  }
}
