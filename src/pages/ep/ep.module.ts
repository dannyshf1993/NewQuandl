import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpPage } from './ep';

@NgModule({
  declarations: [
    EpPage,
  ],
  imports: [
    IonicPageModule.forChild(EpPage),
  ],
})
export class EpPageModule {}
