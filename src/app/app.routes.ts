import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { ProjectComponent } from '@pages/project/project.component';
import { TechstackComponent } from '@pages/techstack/techstack.component';
import { ErrorComponent } from '@pages/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'techstack', component: TechstackComponent },
  { path: '**', component: ErrorComponent }
];
