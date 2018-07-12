import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermodifyComponent } from './usermodify.component';

describe('UsermodifyComponent', () => {
  let component: UsermodifyComponent;
  let fixture: ComponentFixture<UsermodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
