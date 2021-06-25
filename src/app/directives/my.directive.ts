import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBgColor('yellow');
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBgColor('white');
  }
  private setBgColor(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }


}
