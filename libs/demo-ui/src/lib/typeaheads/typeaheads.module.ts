import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeaheadsRoutingModule } from './typeaheads-routing.module';
import { TypeaheadsComponent } from './typeaheads.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TypeaheadsRoutingModule,
    TypeaheadModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [TypeaheadsComponent],
})
export class TypeaheadsModule {}
