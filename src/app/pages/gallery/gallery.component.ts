import { Component } from '@angular/core';
import {CompanyInNumsComponent} from "../home/components/company-in-nums/company-in-nums.component";
import {GALLERY_LIST, IGallery} from "../../core/constants/gallery";
import {TranslocoPipe} from "@jsverse/transloco";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CompanyInNumsComponent,
    TranslocoPipe,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private readonly galleriesPerPage = 12;
  public currentPage: number = 1;
  public get galleryList(): IGallery[] {
    const startIndex = (this.currentPage - 1) * this.galleriesPerPage;
    const endIndex = startIndex + this.galleriesPerPage;
    return GALLERY_LIST.slice(startIndex, endIndex)
  }

  public get totalPages(): number {
    return Math.ceil(GALLERY_LIST.length / this.galleriesPerPage)
  }

  public setPage(page: number): void {
    if(page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  public isPageActive(pageNumber: number): boolean {
    return this.currentPage === pageNumber;
  }

}
