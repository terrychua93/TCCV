import { Component, ViewEncapsulation, signal } from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectSchema } from '@data/schema/projects.schema';
import  ProjectData  from '@data/project.data';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  imports: [Devicon, CardModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class ProjectComponent {
  projectData = signal<ProjectSchema[]>(ProjectData);

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
