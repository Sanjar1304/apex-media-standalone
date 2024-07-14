import {Component, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {INewsCard, NEWS_CARD_LIST} from "../../../../core/constants/news-cards-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {

  private route = inject(Router);
  private readonly cardsPerPage: number = 6;
  public currentPage: number = 1;


  public get newsCardList(): INewsCard[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage
    return NEWS_CARD_LIST.slice(startIndex, endIndex)
  }

  public get totalPages(): number{
    return Math.ceil(NEWS_CARD_LIST.length / this.cardsPerPage)
  }

  public setPage(page: number): void{
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page
    }
  }

  public isPageActive (pageNumber: number): boolean {
    return this.currentPage === pageNumber;
  }

  public openCardContent(cardId: string): void{
    this.route.navigate(['/news', cardId])
  }
}
