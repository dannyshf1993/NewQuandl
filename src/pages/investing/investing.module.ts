import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestingPage } from './investing';

@NgModule({
  declarations: [
    InvestingPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestingPage),
  ],
})
export class InvestingPageModule {}
