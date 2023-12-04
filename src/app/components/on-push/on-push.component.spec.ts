import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushComponent } from './on-push.component';

describe('OnPushComponent', () => {
  let component: OnPushComponent;
  let fixture: ComponentFixture<OnPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushComponent]
    });
    fixture = TestBed.createComponent(OnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
