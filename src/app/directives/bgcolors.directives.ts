import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[bgcolor]'
})
export class backgroundColor {
    private color = 'red';

    constructor(private el: ElementRef) { }

    @Input('bgcolor') bgcolor: string = "#" + this.color;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight();
    }
  

    private highlight() {      
            this.el.nativeElement.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.el.nativeElement.style.borderColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      
    }
}