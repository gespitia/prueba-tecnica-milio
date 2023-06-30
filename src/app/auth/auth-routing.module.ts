import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { KeyDinamicComponent } from './key-dinamic/key-dinamic.component';

const routes: Routes = [
  {path:'login', component:AuthComponent},
  {path:'register', component:RegisterComponent},
  {path:'key-dinamyc', component: KeyDinamicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
