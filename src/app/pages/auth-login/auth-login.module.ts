import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { angularMaterialModule } from 'src/app/modules/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
  LoginComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule, ReactiveFormsModule,
    angularMaterialModule,
    FlexLayoutModule
  ]
})
export class AuthLoginModule { }
