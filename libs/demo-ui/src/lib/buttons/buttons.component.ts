import { Component } from '@angular/core';

@Component({
  selector: 'rex-lib-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  button_class = 'btn btn-primary bg-primary';

  clicked(event: Event): void {
    const target = event.target as Element;
    console.log(target.className);
    //alert(
    //  `You just clicked button{id="${target.id}" class="${target.className}"}`
    //);
  }
}
