import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoldElement]'
})
export class BoldElementDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.fontWeight = "bold"
  }
  
}
