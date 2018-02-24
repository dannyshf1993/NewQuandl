import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImPage } from './im';

@NgModule({
  declarations: [
    ImPage,
  ],
  imports: [
    IonicPageModule.forChild(ImPage),
  ],
})
export class ImPageModule {}
