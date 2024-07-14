import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-adds',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.scss'
})
export class AddsComponent {

}
