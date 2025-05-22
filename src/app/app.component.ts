import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation, effect, inject } from '@angular/core';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { DOCUMENT } from '@angular/common';
import { environment } from '@env/environment';

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

    if(environment.production){
      const script = this.renderer.createElement('script');
      script.defer = true;
      script.src = 'https://cloud.umami.is/script.js';
      script.setAttribute('data-website-id', environment.umamiWebsiteId);
      this.renderer.appendChild(this.document.head, script);
    }
  }

}
