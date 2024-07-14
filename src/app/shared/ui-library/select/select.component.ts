import {
  Component,
  contentChildren,
  ElementRef,
  input,
  output,
  OutputRefSubscription,
  TemplateRef,
  viewChild
} from '@angular/core';
import {SelectOptionDirective} from "./select-option.directive";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [SelectOptionDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  public label = input<string>('');
  public placeHolder = input<string | TemplateRef<HTMLElement>>('');
  public disabled = input<boolean>(false);
  public dropdownStyles = input<Partial<CSSStyleDeclaration>>({});
  public buttonStyles = input<Partial<CSSStyleDeclaration>>({});
  public buttonFocusedStyles = input<Partial<CSSStyleDeclaration>>({});
  public dropdownIconContainerStyles = input<Partial<CSSStyleDeclaration>>({});
  public btnID = input<string>(Math.random().toFixed(36).toString());
  public opened = false;

  public handleSelect = output<any>();
  public valueButton = viewChild.required<ElementRef<HTMLButtonElement>>('valueButton');
  public templateOutletOptions = contentChildren('',{descendants: true});

  private _value: unknown = null;
  private selectSub$: OutputRefSubscription[] = [];
  private _focusTriggered = false;
  private selectedOptionIndex = -1;

}
