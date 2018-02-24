import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIndexPage } from './new-index';

@NgModule({
  declarations: [
    NewIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(NewIndexPage),
  ],
})
export class NewIndexPageModule {}
