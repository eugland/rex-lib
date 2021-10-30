import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TypeaheadsComponent } from './typeaheads.component';

describe('TypeaheadsComponent', () => {
  let component: TypeaheadsComponent;
  let fixture: ComponentFixture<TypeaheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeaheadModule, FormsModule, HttpClientModule],
      declarations: [TypeaheadsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
