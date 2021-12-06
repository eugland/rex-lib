import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { RexTabsModule } from '@rex-lib/one-ui';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    RexTabsModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
