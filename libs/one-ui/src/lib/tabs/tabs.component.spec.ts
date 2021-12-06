import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexTabsComponent } from './tabs.component';

describe('RexTabsComponent', () => {
  let component: RexTabsComponent;
  let fixture: ComponentFixture<RexTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
