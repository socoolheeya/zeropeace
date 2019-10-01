import {Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[textRed]'
})

export class MainDirective {
  constructor(el: ElementRef, rederer: Renderer2) {
    rederer.setStyle(el.nativeElement, 'color', 'red');
  }
}
