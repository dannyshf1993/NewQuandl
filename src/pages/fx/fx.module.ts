import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FxPage } from './fx';

@NgModule({
  declarations: [
    FxPage,
  ],
  imports: [
    IonicPageModule.forChild(FxPage),
  ],
})
export class FxPageModule {}
