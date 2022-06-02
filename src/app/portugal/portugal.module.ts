import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortugalPageRoutingModule } from './portugal-routing.module';

import { PortugalPage } from './portugal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortugalPageRoutingModule
  ],
  declarations: [PortugalPage]
})
export class PortugalPageModule {}
