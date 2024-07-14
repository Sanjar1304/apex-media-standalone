import {Component, HostBinding, HostListener, input, output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

export type AppBtnType = 'primary' | 'secondary';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  public type = input<AppBtnType>('primary');
  public handleClick = output<MouseEvent>();

  @HostBinding('class') public get class(): string {
    return `app-btn-${this.type()}`;
  }

  @HostListener('click', ['event'])
  public onClick(event: MouseEvent): void{
    this.handleClick.emit(event);
  }
}
