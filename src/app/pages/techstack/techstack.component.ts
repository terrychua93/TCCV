import { Component } from '@angular/core';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
  standalone: true,
  imports: [Devicon, Logo],
})
export class TechstackComponent {
  constructor(){

  }
  public github = github;
}
