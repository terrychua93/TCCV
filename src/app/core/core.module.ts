import { NgModule } from '@angular/core';
import { CapitalizePipe } from './pipe/capitalize.pipe';

@NgModule({
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe]
})
export class CoreModule { }
