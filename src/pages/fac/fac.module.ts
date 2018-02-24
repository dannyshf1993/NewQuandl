import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacPage } from './fac';

@NgModule({
  declarations: [
    FacPage,
  ],
  imports: [
    IonicPageModule.forChild(FacPage),
  ],
})
export class FacPageModule {}
