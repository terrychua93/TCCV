import { Component, ViewEncapsulation, signal } from '@angular/core';
import AboutMeData from '@data/about-me.data';
import AOS from 'aos';
import { CardModule } from 'primeng/card';
import { AboutMeSchema } from '@data/schema/about-me.schema';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CardModule, CommonModule, RatingModule, FormsModule],
  standalone: true
})
export class AboutComponent {
  aboutme = signal<AboutMeSchema>(AboutMeData);
  gradients = [
    'from-indigo-600/60 via-purple-500/50 to-pink-400/50',
    'from-teal-500/50 via-cyan-400/40 to-blue-500/40',
    'from-yellow-400/50 via-orange-500/40 to-red-500/40',
    'from-emerald-500/50 via-green-400/40 to-lime-300/40',
    'from-sky-500/50 via-blue-400/40 to-indigo-400/40'
  ];

  getGradient(index: number): string {
    return `bg-gradient-to-r ${this.gradients[index % this.gradients.length]}`;
  }

  constructor() {
    AOS.init({
      once: true, // animation only once
      offset: 0, // trigger animation earlier/later

    });
  }

}
