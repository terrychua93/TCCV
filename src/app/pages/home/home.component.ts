import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { ExpertiseAreaComponent } from '@pages/home/components/expertise-area/expertise-area.component';
import { EmploymentHistoryComponent } from '@pages/home/components/employment-history/employment-history.component';
import { IntroComponent } from '@pages/home/components/intro/intro.component';
import { Loader } from '@shared/components/loader/loader';
import { MyFavoriteTechComponent } from '@pages/home/components/my-favorite-tech/my-favorite-tech.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseAreaComponent, IntroComponent, EmploymentHistoryComponent, MyFavoriteTechComponent, Loader],
})
export class HomeComponent {
  constructor() {

  }
}
