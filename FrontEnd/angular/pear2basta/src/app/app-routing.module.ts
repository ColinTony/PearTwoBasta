import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsersComponent } from './login/pages/login-users/login-users.component';
import { RegisterUserComponent } from './login/pages/register-user/register-user.component';
import { HomeComponent } from './dashboard/pages/home/home.component';

const routes: Routes = [

  // basic register and login
  {
    path:'login',
    component:LoginUsersComponent
  },
  {
    path:'registro',
    component:RegisterUserComponent
  },
  {
    path:'dashboard',
    component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
