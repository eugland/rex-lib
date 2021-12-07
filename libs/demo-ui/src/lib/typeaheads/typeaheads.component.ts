import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { noop, Observable, Observer, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { GROUPING_DATA, ITEMTEMPLATE_DATA, SIMPLE_TYPEAHEAD_DATA } from './typeaheads.data';
import { isBs3 } from 'ngx-bootstrap/utils';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { FormControl } from '@angular/forms';


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

  multi_select = ''
  multi_list = ['pre-added content']

  multi_typeahead_list = this.simple_typeahead_list.slice();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.suggestions$ = this.getSuggestions();
    this.suggestions_short$ = this.get_suggestions_short();
  }

  convertToGroups = (list: string[]) => list
    .map((item) => ({ name: item, group: `Start with '${item.charAt(0).toUpperCase()}':` }));


  getSuggestions() {
    return new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.remote_typeahead_selected);
    }).pipe(
      switchMap((query: string) => {
        if (!query) return of([]);
        return this.http.get<{features:[]}>(
          'https://api.geoapify.com/v1/geocode/search', {
            params: {
              apiKey: '8bbc9ec6b258472c994277633c3643de',
              text: query
            }
          }
        ).pipe(
          map((data: {features: []}) => data && data.features || []),
          tap((data) => noop, err => {
            this.errorMessage = err && err.message || 'Something goes wrong';
          }),
        );
      })
    );
  };


  cache = new Map<string, string[]>();

  get_suggestions_short() {

    return new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.remote_short_typeahead_selected);
    }).pipe(
      switchMap((query: string) => {
        if (!query) return of([]);
        return this.http.get<[string, []]>(
          'https://en.wikipedia.org/w/api.php', {
            params: {
              action: "opensearch",
              limit: "8",
              format: "json",
              origin: "*",
              search: query
            }
          }).pipe(
          map((data: [string, []]) => {
            this.cache.set(query, data[1])
            return data[1]
          }),
          catchError(err => {
            if (this.cache.has(query)) {
              return of(this.cache.get(query));
            }
            return of();
          })
        );
      })
    );
  };

  multi_add(event: TypeaheadMatch) {
    console.log(`multi_add ${event}`)
    this.multi_list.push(event.item);
    this.multi_typeahead_list = this.multi_typeahead_list
      .filter((s)=> s != event.item)
    // multi_select  and event item could be different for example, one could
    // have selected a candidate word and quickly typed in something else
    // we want to reset the component, and not the passed in checked value.
    this.multi_select = ''
  }

  multi_del(item: string) {
    console.log(`multi_del ${item}`)
    this.multi_list = this.multi_list.filter((s) => s!= item);
    this.multi_typeahead_list.push(item)
  }

}


