import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@modules/home/home.component';
import { UiModule } from '@shared/ui';
import { ModulesRoutingModule } from '@modules/index';


@NgModule({
  declarations: [ HomeComponent],
  exports: [],
  imports: [CommonModule, UiModule, ModulesRoutingModule]
})
export class ModulesModule { }
