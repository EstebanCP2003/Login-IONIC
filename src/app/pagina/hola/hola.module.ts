import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolaPageRoutingModule } from './hola-routing.module';

import { HolaPage } from './hola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolaPageRoutingModule
  ],
  declarations: [HolaPage]
})
export class HolaPageModule {}
