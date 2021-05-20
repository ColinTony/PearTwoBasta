import { NgModule } from '@angular/core';

// PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card'
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule
  ],
})
export class PrimeNgModule { }
