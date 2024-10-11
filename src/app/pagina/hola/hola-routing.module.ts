import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolaPage } from './hola.page';

const routes: Routes = [
  {
    path: '',
    component: HolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolaPageRoutingModule {}
