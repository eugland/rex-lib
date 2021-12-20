import { Component, OnInit } from '@angular/core';
import { ITab } from '@rex-lib/one-ui';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'demo-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

 tabs: ITab[] =[
    {
      heading: 'tab 1',
      id: '1',
      active: true,
      content: 'tab 1 content'
    },
    {
      heading: 'tab 2',
      id: '2',
      active: false,
      content: 'tab 2 content'
    },
    {
      heading: 'tab 3',
      id: '3',
      active: false,
      content: 'tab 3 content',
      disabled: true
    }
  ];

  tabs2: ITab[] =[
    {
      heading: 'tab 1',      
      useHeadingTemplate: false,
      id: '1',
      active: true,
      content: 'tab 1 content'
    },
    {
      heading: '<span class="badge badge-secondary bg-secondary">tab 2</span>',
      useHeadingTemplate: true,
      id: '2',
      active: false,
      content: 'tab 2 content'
    },
    {
      heading: '<i><b>tab 3</b></i>',
      useHeadingTemplate: true,
      id: '3',
      active: false,
      content: 'tab 3 content'
    },
    {
      heading: '<i class="fas fa-heart"></i>',
      useHeadingTemplate: true,
      id: '4',
      active: false,
      content: 'tab 4 content'
    }
  ];

  tabs3: ITab[] =[
    {
      heading: '<i class="fas fa-heart"></i><div>tab 1</div>',
      useHeadingTemplate: true,
      id: '1',
      active: true,
      content: 'tab 1 content',
      customClass: 'customClass'
    },
    {
      heading: '<i class="fas fa-heart"></i><div>tab 2</div>',
      useHeadingTemplate: true,
      id: '2',
      active: false,
      content: 'tab 2 content',
      customClass: 'customClass'
    },
    {
      heading: '<i class="fas fa-heart"></i><div>tab 3</div>',
      useHeadingTemplate: true,
      id: '3',
      active: false,
      content: 'tab 3 content',
      customClass: 'customClass'
    },
    {
      heading: '<i class="fas fa-heart"></i><div>tab 4</div>',
      useHeadingTemplate: true,
      id: '4',
      active: false,
      content: 'tab 4 content',
      customClass: 'customClass'
    }
  ];

  justified: boolean = true;
  vertical: boolean = true;

  info: string = '';

  public onSelect(tab: TabDirective) {
    this.info = `The selected tab has id that is equal to ${tab.id }`;
  }

  ngOnInit(){
    this.onSelect(this.tabs3[0] as TabDirective);
  }

}
