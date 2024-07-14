import {Component, inject, OnInit} from '@angular/core';
import {INewsCard, NEWS_CARD_LIST} from "../../../../core/constants/news-cards-list";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyInNumsComponent} from "../../../home/components/company-in-nums/company-in-nums.component";
import {NewsCardComponent} from "../news-card/news-card.component";

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [
    CompanyInNumsComponent,
    NewsCardComponent
  ],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent implements OnInit{
  public card: INewsCard | undefined;

  private router = inject(Router)
  private route = inject(ActivatedRoute);

  public ngOnInit(): void{
    this.route.params.subscribe(params => {
      const cardId = params['id'];
      this.card = NEWS_CARD_LIST.find(card => card.id === cardId);
    })
  }

  public goBack(): void {
    this.router.navigate(['/news']);
  }
}
