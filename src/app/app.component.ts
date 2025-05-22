import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation, effect, inject } from '@angular/core';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [FooterComponent, RouterOutlet, NavbarComponent, ScrollToTop],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class App implements OnInit {
  elementRef = inject(ElementRef)
  renderer = inject(Renderer2)
  document: Document = inject(DOCUMENT);

  constructor(){}
  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");
  }

}
