import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseover') f1() {
    this.el.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseleave') f2(){
    this.el.nativeElement.style.backgroundColor='';
  }
  
}
