import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: 'a[appLinkMail]'
})

export class LinkMailDirective implements AfterViewInit, OnChanges {
  @Input('appLinkMail')
  mail! : string;

  constructor(private e1: ElementRef<HTMLAnchorElement>) {

  }

  ngAfterViewInit(): void {
    this.e1.nativeElement.href = "mailto:"+this.mail
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mail) {
      this.e1.nativeElement.href = `mailto:${changes.mail}`
    }
  }


}
