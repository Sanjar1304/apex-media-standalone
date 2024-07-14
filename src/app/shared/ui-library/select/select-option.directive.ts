import {AfterViewInit, Directive, effect, ElementRef, input, model, output} from "@angular/core";

@Directive({
  selector: '[appSelectOption]',
  standalone: true
})
export class SelectOptionDirective implements AfterViewInit {
  public activeClasses = input<string | string[]>('');
  public selected = model<boolean>(false);

  public selectEvent = output<unknown>();
  public selectValue = input<unknown>();

  public constructor(public readonly templateRef: ElementRef<HTMLElement>) {
    this.templateRef.nativeElement.addEventListener('click', () => {
      this.selectEvent.emit(this.selectValue())
    })

    effect(() => {
      const activeClasses = this.activeClasses();
      const classes = typeof activeClasses === 'string' ? [activeClasses] : activeClasses;

      if(this.selected()){
        classes.forEach(val => val ? this.templateRef.nativeElement.classList.add(val) : undefined);
      } else {
        classes.forEach(val => val ? this.templateRef.nativeElement.classList.remove(val) : undefined);
      }
    });
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      if(this.selected()){
        this.selectEvent.emit(this.selectValue())
      }
    })
  }
}
