import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloseDetails]',
  standalone: true
})
export class CloseDetailsDirectiveDirective {

  constructor(private elRef: ElementRef<HTMLElement>) { }

  @HostListener('document:pointerdown', ['$event']) onClick(event: PointerEvent) {
    if(!this.elRef.nativeElement.contains(event.target as Node)) {
      this.elRef.nativeElement.removeAttribute('open');
    }
  }
  
}
