import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { EditPerfilComponent } from './pages/edit-perfil/edit-perfil.component';



@NgModule({
  declarations: [
    HomeComponent,
    EditPerfilComponent
  ],
  exports:[
    HomeComponent,
    EditPerfilComponent
  ],
  imports: [

    CommonModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class DashboardModule { }
