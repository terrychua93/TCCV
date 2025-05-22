import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation, effect, inject, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Button } from '@shared/components/button/button';
import { SocialLink } from '@shared/components/social-link/social-link';
import ProfileData from '@data/profile.data'
import { ProfileSchema } from '@data/schema/profile.schema';
import { Icon } from '@shared/components/icon/icon';
import { file } from '@icon/solid.icon';
import AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [SocialLink, Button, Icon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})

export class IntroComponent implements AfterViewInit {
  profile = signal<ProfileSchema>(ProfileData);
  fileIcon = file;
  platformCheck = Inject(PlatformCheckService)
  cd = inject(ChangeDetectorRef);

  currentGreetingIndex = signal<number>(0);
  displayedText = signal<string>(''); // Typing output
  greetingSub!: Subscription;

  constructor() {
    effect((onCleanup) => {
      this.startTyping(this.profile().greetings[this.currentGreetingIndex()]);
      onCleanup(() => {
        this.greetingSub?.unsubscribe();
      });
    }, { allowSignalWrites: true });
  }

  ngAfterViewInit() {
    AOS.init({
      once: true, // animation only once
      offset: 1000, // trigger animation earlier/later
    });
  }

  private startTyping(text: string) {
    this.greetingSub?.unsubscribe(); // Clear any previous interval
    this.displayedText.set('');
    let charIndex = 0;

    this.greetingSub = interval(100).subscribe(() => {
      if (charIndex < text.length) {
        this.displayedText.set(this.displayedText() + text[charIndex]);
        charIndex++;
      } else {
        this.greetingSub?.unsubscribe();
        setTimeout(() => this.showNextGreeting(), 2000);
      }
    });
  }

  private showNextGreeting(): void {
    const nextIndex = (this.currentGreetingIndex() + 1) % this.profile().greetings.length;
    this.currentGreetingIndex.set(nextIndex);
    const nextText = this.profile().greetings[nextIndex];
    this.startTyping(nextText);
  }
}
