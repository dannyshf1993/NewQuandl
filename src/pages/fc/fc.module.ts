import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FcPage } from './fc';

@NgModule({
  declarations: [
    FcPage,
  ],
  imports: [
    IonicPageModule.forChild(FcPage),
  ],
})
export class FcPageModule {}
