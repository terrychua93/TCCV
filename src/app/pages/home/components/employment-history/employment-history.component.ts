import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import employmentHistoryData from '@data/employment-history.data'
import { EmploymentHistorySchema } from '@data/schema/employment-history.schema';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';


@Component({
  selector: 'app-employment-history',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ CardModule, TimelineModule, CommonModule, ChipModule ],
  templateUrl: './employment-history.component.html',
  styleUrl: './employment-history.component.scss'
})
export class EmploymentHistoryComponent {
  isMobile = false;
  employmentHistory: EmploymentHistorySchema[] = employmentHistoryData;

  ngOnInit() {
    this.isMobile = window.innerWidth < 768; // Tailwind md breakpoint
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
  }
}
