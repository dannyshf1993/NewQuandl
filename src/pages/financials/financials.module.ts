import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancialsPage } from './financials';

@NgModule({
  declarations: [
    FinancialsPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancialsPage),
  ],
})
export class FinancialsPageModule {}
