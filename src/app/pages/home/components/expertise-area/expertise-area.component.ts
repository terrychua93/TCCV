import { AfterViewInit, Component, Signal, ViewEncapsulation, signal } from '@angular/core';
import { Icon } from '@shared/components/icon/icon';
import expertiseAreaData from '@data/expertise-area.data'
import { ExpertiseAreaSchema } from '@data/schema/expertise-area.schema';
import { CardModule } from 'primeng/card';
import AOS from 'aos';

@Component({
  selector: 'app-expertise-area',
  templateUrl: './expertise-area.component.html',
  styleUrls: ['./expertise-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [ Icon, CardModule ],
  standalone: true,
})
export class ExpertiseAreaComponent implements AfterViewInit {
  public services: Signal<ExpertiseAreaSchema[]> = signal(expertiseAreaData)

      ngAfterViewInit() {
        AOS.init({
          once: true, // animation only once
          offset: 1000, // trigger animation earlier/later
        });
    }
}
