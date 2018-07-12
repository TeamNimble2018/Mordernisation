import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsAccordianComponent } from './bts-accordian.component';

describe('BtsAccordianComponent', () => {
  let component: BtsAccordianComponent;
  let fixture: ComponentFixture<BtsAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
