import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { ModulesRoutingModule } from '@modules';

import { LandingComponent } from './landing/';


@NgModule({
  declarations: [
    LandingComponent
  ],
  exports: [],
  imports: [CommonModule, SharedModule, ModulesRoutingModule]
})
export class ModulesModule { }
