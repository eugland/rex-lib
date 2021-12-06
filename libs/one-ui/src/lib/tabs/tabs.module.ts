import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { RexTabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule, 
    TabsModule.forRoot()
  ],
  declarations: [
    RexTabsComponent
  ],
  exports: [
    RexTabsComponent
  ]
})
export class RexTabsModule {}
