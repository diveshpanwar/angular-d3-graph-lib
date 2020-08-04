import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularD3GraphLibComponent } from './angular-d3-graph-lib.component';

describe('AngularD3GraphLibComponent', () => {
  let component: AngularD3GraphLibComponent;
  let fixture: ComponentFixture<AngularD3GraphLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularD3GraphLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularD3GraphLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
