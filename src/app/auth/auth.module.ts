import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { InputComponent } from '../components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyDinamicComponent } from './key-dinamic/key-dinamic.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    InputComponent,
    KeyDinamicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
