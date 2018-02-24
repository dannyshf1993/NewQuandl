import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailPage } from './retail';

@NgModule({
  declarations: [
    RetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailPage),
  ],
})
export class RetailPageModule {}
