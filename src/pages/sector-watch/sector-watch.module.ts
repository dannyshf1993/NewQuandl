import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectorWatchPage } from './sector-watch';

@NgModule({
  declarations: [
    SectorWatchPage,
  ],
  imports: [
    IonicPageModule.forChild(SectorWatchPage),
  ],
})
export class SectorWatchPageModule {}
