import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SIMPLE_TYPEAHEAD_DATA, ITEMTEMPLATE_DATA, GROUPING_DATA } from './typeaheads.data';
import { isBs3 } from 'ngx-bootstrap/utils';


@Component({
  selector: 'rex-lib-typeaheads',
  templateUrl: './typeaheads.component.html',
  styleUrls: ['./typeaheads.component.scss'],
})
export class TypeaheadsComponent {
  model = '';
  simple_typeahead_list = SIMPLE_TYPEAHEAD_DATA;
  itemTemplate_list = ITEMTEMPLATE_DATA;
  grouping_list = GROUPING_DATA;

  simple_typeahead_selected = '';
  animated_typeahead_select = '';
  adaptive_typeahead_select = '';
  itemTemplate_typeahead_selected = '';
  list_typeahead_selected = '';
  grouping_typeahead_selected = '';
  onthefly_grouping_typeahead_selected = '';

  isBs3 = isBs3();

  convertToGroups = (list: string[]) => list
    .map((item) => ({name: item, group: `Start with '${item.charAt(0).toUpperCase()}':` }));

  filterState = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((searchTerm) =>
        searchTerm.length < 2
          ? []
          : this.simple_typeahead_list
              .filter(
                (fromList) =>
                  fromList.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );
}
