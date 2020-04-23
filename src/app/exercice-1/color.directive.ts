import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }


  @HostListener('window:keydown', ['$event']) windowClick($event) {
 
    if ($event.keyCode == '38') {
        // up arrow
        this.colorer('red');
    }
    else if ($event.keyCode == '40') {
        // down arrow
        this.colorer('blue');
    }
    else if ($event.keyCode == '37') {
       // left arrow
       this.colorer('green');
    }
    else if ($event.keyCode == '39') {
       // right arrow
       this.colorer('yellow');
    }
    
  }


  private colorer(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
