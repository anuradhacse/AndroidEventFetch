import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessEventsComponent } from './access-events.component';

describe('AccessEventsComponent', () => {
  let component: AccessEventsComponent;
  let fixture: ComponentFixture<AccessEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
