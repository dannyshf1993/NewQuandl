import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuturesPage } from './futures';

@NgModule({
  declarations: [
    FuturesPage,
  ],
  imports: [
    IonicPageModule.forChild(FuturesPage),
  ],
})
export class FuturesPageModule {}
