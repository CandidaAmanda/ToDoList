import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[taskStyle]'
})


export class TaskStyleDirective implements OnInit{

    @HostBinding('style.color')  fontColor:string='green';

    constructor(private elementreference: ElementRef, private renderer: Renderer2)
    {

    }
    ngOnInit(){
        this.renderer.setStyle(this.elementreference.nativeElement,'color','blue');
        //this.elementreference.nativeElement.style.color ="pink"; 

    }

    @HostListener ('mouseenter')  onMouseOver(eventData: Event){
        // this.renderer.setStyle(this.elementreference.nativeElement,'color','red');
        this.fontColor='red';
    }

    @HostListener ('mouseleave')  onMouseExit(eventData: Event){
        this.renderer.setStyle(this.elementreference.nativeElement,'color','black');
    }

}