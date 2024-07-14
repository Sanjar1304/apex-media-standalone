import { Component } from '@angular/core';
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";

import {NewsCardComponent} from "./components/news-card/news-card.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CompanyInNumsComponent,
    NewsCardComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {



}
