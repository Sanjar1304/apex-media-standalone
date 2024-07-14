import { Component } from '@angular/core';
import {TranslocoPipe} from "@jsverse/transloco";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslocoPipe,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
