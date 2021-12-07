import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { ITab } from '../models/tabs.models';

@Component({
  selector: 'rex-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RexTabsComponent {

  @Input() justified: boolean = false;        // if true tabs fill the container and have a consistent width
  @Input() type: 'tabs' | 'pills' = 'tabs';   // navigation context class: 'tabs' or 'pills'
  @Input() vertical: boolean = false;         // if true tabs will be placed vertically

  @Input() tabs: ITab[] =[];

  @Output() selected: EventEmitter<TabDirective> = new EventEmitter();

  @HostBinding('class.rex-tabs') get setRexTabsClass() { return true; }

  public onSelect(tab: TabDirective) {
    this.tabs.forEach((tab, index) => {
      tab.active = +tab.id === index;
    });
    this.selected.emit(tab);
  }

}
