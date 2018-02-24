import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsPage } from './us';

@NgModule({
  declarations: [
    UsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsPage),
  ],
})
export class UsPageModule {}
