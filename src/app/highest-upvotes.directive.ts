import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {  

  constructor(private elem:ElementRef) {    
    this.elem.nativeElement.style.backgroundColor = 'rgb(180, 211, 221, 0.8)';   
    this.elem.nativeElement.style.color = 'black';
  }
  
}
