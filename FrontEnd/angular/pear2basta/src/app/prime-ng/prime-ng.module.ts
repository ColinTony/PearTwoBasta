import { NgModule } from '@angular/core';

// PrimeNG
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card'
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [],
  exports:[
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    ChartModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule
    
  ],
})
export class PrimeNgModule { }
