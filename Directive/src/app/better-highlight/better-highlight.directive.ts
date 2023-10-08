import { Directive, OnInit, Input, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string ='transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
ngOnInit() {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
}
@HostListener('mouseeneter') mouseover(eventData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  this.backgroundColor = this.highlightColor;
}
@HostListener('mouseleave') mouseleave(eventData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false,);
  this.backgroundColor = this.defaultColor;
}
}
