import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';

import {TranslocoPipe} from "@jsverse/transloco";

import {ISlider, SERVICES_SLIDER_LIST} from "../../../../core/constants/services-slider";
import Swiper from "swiper";


@Component({
  selector: 'app-led-adds',
  standalone: true,
  imports: [
    TranslocoPipe,
  ],
  templateUrl: './led-adds.component.html',
  styleUrl: './led-adds.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class LedAddsComponent implements AfterViewInit{
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  public swiper?: Swiper;
  public paginationDots: any[] = [];
  public currentSlideIndex: number = 0


  public get swiperSlides(): ISlider[] {
    return SERVICES_SLIDER_LIST
  }

  public ngAfterViewInit(): void {
    this.swiperParamsOverRide();
  }

  public goToSlide(index: number): void{
    if(this.swiper){
      this.swiper.slideTo(index)
    }
  }

  private swiperParamsOverRide(){
    if(this.swiperRef){
      this.swiper = this.swiperRef.nativeElement.swiper;

      if(this.swiper && this.swiper.params){
        this.swiper.params.pagination
      }

      setTimeout(() => {
        this.updatePagination();
      })

      this.swiper?.on('slideChange', () => {
        this.updatePagination();
      })
    }
  }

  private updatePagination(): void{
    if(this.swiper && this.swiper.slides){
      const totalSlide = this.swiper.slides.length;

      this.currentSlideIndex = this.swiper.activeIndex;
      this.paginationDots = [];

      for(let i = 0; i < totalSlide; i++){
        this.paginationDots.push({ active: i === this.currentSlideIndex});
      }

      this.paginationDots = [...this.paginationDots];
    }
  }
}
