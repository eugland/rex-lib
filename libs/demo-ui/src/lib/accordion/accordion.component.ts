import { Component } from '@angular/core';
import { IGroup } from '@rex-lib/one-ui';

@Component({
  selector: 'demo-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  groups: IGroup[] =[
    {
      id: '1',
      heading: 'group 1',
      isOpen: true,
      content: 'group 1 content'
    },
    {
      id: '2',
      heading: 'group 2',
      isOpen: false,
      content: 'group 2 content'
    },
    {
      id: '3',
      heading: 'group 3',
      isOpen: false,
      content: 'group 3 content'
    }
  ];

  groups2: IGroup[] =[
    {
      id: '11',
      heading: '<i class="fas fa-heart"></i><span>group 1</span>',      
      useHeadingTemplate: true,
      isOpen: true,
      content: 'group 1 content'
    },
    {
      id: '12',
      heading: '<i class="fas fa-heart"></i><span>group 2</span>',
      useHeadingTemplate: true,
      isOpen: false,
      content: 'group 2 content'
    },
    {
      id: '13',
      heading: '<i class="fas fa-heart"></i><span>group 3</span>',
      useHeadingTemplate: true,
      isOpen: false,
      content: 'group 3 content'
    },
    {
      id: '14',
      heading: '<i class="fas fa-heart"></i><span>group 4</span>',
      useHeadingTemplate: true,
      isOpen: false,
      content: 'group 4 content'
    }
  ];

  groups3: IGroup[] =[
    {
      id: '101',
      heading: '<span>group 1</span>',      
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: true,
      content: 'group 1 content'
    },
    {
      id: '102',
      heading: '<span>group 2</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 2 content'
    },
    {
      id: '103',
      heading: '<span>group 3</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 3 content'
    },
    {
      id: '104',
      heading: '<span>group 4</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 4 content'
    }
  ];

  groups4: IGroup[] =[
    {
      id: '1001',
      heading: '<i class="fas fa-heart"></i><span>group 1</span>',      
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: true,
      content: 'group 1 content'
    },
    {
      id: '1002',
      heading: '<i class="fas fa-heart"></i><span>group 2</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 2 content'
    },
    {
      id: '1003',
      heading: '<i class="fas fa-heart"></i><span>group 3</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 3 content'
    },
    {
      id: '1004',
      heading: '<i class="fas fa-heart"></i><span>group 4</span>',
      useHeadingTemplate: true,
      showChevron: true,
      isOpen: false,
      content: 'group 4 content'
    }
  ];

  closeOthers: boolean = true;
  isAnimated: boolean = false;

  info: string = '';

  public onOpenChange(c: any) {
    this.info = `Accordion has been ${c.event ? 'expanded': 'collapsed' } for the group with id that is equal to ${c.group.id}`;
  }

}
