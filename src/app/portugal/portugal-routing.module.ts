import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortugalPage } from './portugal.page';

const routes: Routes = [
  {
    path: '',
    component: PortugalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortugalPageRoutingModule {}
