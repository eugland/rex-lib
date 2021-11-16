import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { GROUPING_DATA, ITEMTEMPLATE_DATA, SIMPLE_TYPEAHEAD_DATA } from './typeaheads.data';
import { isBs3 } from 'ngx-bootstrap/utils';


@Component({
  selector: 'rex-lib-typeaheads',
  templateUrl: './typeaheads.component.html',
  styleUrls: ['./typeaheads.component.scss']
})
export class TypeaheadsComponent implements OnInit {
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
  remote_typeahead_selected = '';

  errorMessage?: string;
  suggestions$?: Observable<any>;

  remote_short_typeahead_selected = ''
  suggestions_short$?: Observable<any>
  isBs3 = isBs3();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.suggestions$ = this.getSuggestions();
    this.suggestions_short$ = this.get_suggestions_short();
  }

  convertToGroups = (list: string[]) => list
    .map((item) => ({ name: item, group: `Start with '${item.charAt(0).toUpperCase()}':` }));


  getSuggestions = () => {
    return new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.remote_typeahead_selected);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.http.get<any>(
            'https://api.geoapify.com/v1/geocode/search', {
              params: {
                apiKey: '8bbc9ec6b258472c994277633c3643de',
                text: query
              }
            }).pipe(
            map((data: any) => data && data.features || []),
            tap((data) => noop, err => {
              // in case of http error
              this.errorMessage = err && err.message || 'Something goes wrong';
            })
          );
        }
        return of([]);
      })
    );
  };

  get_suggestions_short = () => {
    return new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.remote_typeahead_selected);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.http.get<any>(
            'https://en.wikipedia.org/w/api.php', {
              params: {
                apiKey: '8bbc9ec6b258472c994277633c3643de',
                text: query
              }
            }).pipe(
            map((data: any) => data && data.features || []),
            tap((data) => noop, err => {
              // in case of http error
              this.errorMessage = err && err.message || 'Something goes wrong';
            })
          );
        }
        return of([]);
      })
    );
  };
}
