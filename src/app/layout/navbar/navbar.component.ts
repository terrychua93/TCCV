import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  ViewEncapsulation,
  effect,
  computed,
  inject
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '@core/services/dark-mode.service';
import { Logo } from '@shared/components/logo/logo';
import { DOCUMENT, NgClass } from '@angular/common';
import navlinkData from '@data/nav-link.data'
import { Icon } from '@shared/components/icon/icon';
import { moon, sun } from '@icon/regular.icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, Logo, NgClass, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  open: boolean = false;
  links = computed(() => navlinkData)
  icon = computed(() => this.darkModeService.isDark() ? sun : moon)
  darkModeService = inject(DarkModeService);
  renderer = inject(Renderer2);
  document: Document = inject(DOCUMENT);
  constructor() {
    effect(() => {
      this.applyDarkModeStyles();
    });
  }
  private applyDarkModeStyles() {
    const darkMode = this.darkModeService.isDark();
    const root = this.document.documentElement;
    const favicon = this.document.querySelector("link[rel*='icon']");
    const newFaviconHref = `assets/icons/favicon-${darkMode ? 'dark' : 'light'
      }.png`;
    this.renderer.setAttribute(favicon, 'href', newFaviconHref);
    root.classList[darkMode ? 'add' : 'remove']('dark');
  }
}
