import { Component, EventEmitter, HostBinding, Input, AfterViewInit, Output, ViewEncapsulation, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { IGroup } from '../models/accordion.models';

@Component({
  selector: 'rex-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RexAccordionComponent implements AfterViewInit {

  @Input() isAnimated: boolean = false;       // turn on/off animation
  @Input() closeOthers: boolean = false;      // if true expanding one item will close all others

  @Input() groups: IGroup[] =[];

  @Output() isOpenChange: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.rex-accordion') get setRexAccordionClass() { return true; }

  @ViewChildren("heading") headings!: QueryList<ElementRef>;

  public onOpenChange(event: boolean, group: IGroup) {
    var heading = this.headings.find((heading: ElementRef) => 'heading-' + group.id === heading.nativeElement.id);
    if (group && !!group.showChevron) {
      if (event) {
        (heading?.nativeElement as HTMLElement).lastElementChild?.classList.replace('down', 'up');
      }
      else {
        (heading?.nativeElement as HTMLElement).lastElementChild?.classList.replace('up', 'down');
      }
    }
    this.isOpenChange.emit({event, group});
  }

  setChevron() {
    this.headings.forEach(heading => {
      var group: IGroup | undefined = this.groups.find((group: IGroup) => 'heading-' + group.id === heading.nativeElement.id);
      if (group && !!group.showChevron) {
        let span = document.createElement('span');
        span.classList.add('chevron', !!group.isOpen ? 'up': 'down');
        (heading.nativeElement as HTMLElement).appendChild(span);
      }
    });
  }

  ngAfterViewInit(): void {
    this.setChevron();
  };

}
