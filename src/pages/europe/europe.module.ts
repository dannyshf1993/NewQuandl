import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EuropePage } from './europe';

@NgModule({
  declarations: [
    EuropePage,
  ],
  imports: [
    IonicPageModule.forChild(EuropePage),
  ],
})
export class EuropePageModule {}
