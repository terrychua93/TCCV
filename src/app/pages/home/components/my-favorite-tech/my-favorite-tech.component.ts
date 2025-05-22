import { Component, inject, signal, Signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Devicon } from '@shared/components/devicon/devicon';
import { MyFavoriteTechSchema } from "@data/schema/my-favorite-tech.schema";
import  myFavoriteTechData from "@data/my-favorite-tech.data";

import AOS from 'aos';

@Component({
  selector: 'app-my-favorite-tech',
  standalone: true,
  imports: [AvatarModule, Devicon],
  templateUrl: './my-favorite-tech.component.html',
  styleUrl: './my-favorite-tech.component.scss'
})
export class MyFavoriteTechComponent {
  public myFavoriteTechData: Signal<MyFavoriteTechSchema[]> = signal(myFavoriteTechData)

    //   ngAfterViewInit() {
    //     AOS.init({
    //       once: true, // animation only once
    //       offset: 1000, // trigger animation earlier/later
    //     });
    // }
}
