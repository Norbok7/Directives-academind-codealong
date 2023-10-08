import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDierective implements OnInit{
constructor(private anythingYouWant: ElementRef) {

}
ngOnInit() {
  this.anythingYouWant.nativeElement.style.backgroundColor= 'blue';
}
}
