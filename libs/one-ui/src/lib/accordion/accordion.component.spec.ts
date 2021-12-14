import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexAccordionComponent } from './accordion.component';

describe('RexAccordionComponent', () => {
  let component: RexAccordionComponent;
  let fixture: ComponentFixture<RexAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
