import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../auth-registro/registro/registro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule { }
