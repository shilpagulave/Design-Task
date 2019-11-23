import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectmanagementComponent } from './objectmanagement.component';

describe('ObjectmanagementComponent', () => {
  let component: ObjectmanagementComponent;
  let fixture: ComponentFixture<ObjectmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
