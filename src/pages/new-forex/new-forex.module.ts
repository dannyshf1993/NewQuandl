import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewForexPage } from './new-forex';

@NgModule({
  declarations: [
    NewForexPage,
  ],
  imports: [
    IonicPageModule.forChild(NewForexPage),
  ],
})
export class NewForexPageModule {}
