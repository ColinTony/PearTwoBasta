import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from './pages/login-users/login-users.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginUsersComponent,
    RegisterUserComponent
  ],
  exports:[
    LoginUsersComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class LoginModule { }
