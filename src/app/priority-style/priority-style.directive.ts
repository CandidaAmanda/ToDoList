import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector:'[priorityStyle]'
})

export class PriorityStyle implements OnInit{

    constructor( private elementRef: ElementRef){}

    ngOnInit()
    {
        this.elementRef.nativeElement.style.color='red';
    }
}