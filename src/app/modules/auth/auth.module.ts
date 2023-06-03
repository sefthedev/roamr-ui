import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {
  AuthenticationComponent,
  SigninComponent,
  SignupComponent,
} from '@modules/auth';
import { UiModule } from '@app/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, UiModule, ReactiveFormsModule],
})
export class AuthModule {}
