import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCrearComponent } from './pages/game-crear/game-crear.component';
import { GameUnirseComponent } from './pages/game-unirse/game-unirse.component';
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GameCrearComponent,
    GameUnirseComponent,
    GameHomeComponent
  ],
  exports:[
    GameCrearComponent,
    GameUnirseComponent,
    GameHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class GameModule { }
