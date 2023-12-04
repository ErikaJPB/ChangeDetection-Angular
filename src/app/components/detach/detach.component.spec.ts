import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachComponent } from './detach.component';

describe('DetachComponent', () => {
  let component: DetachComponent;
  let fixture: ComponentFixture<DetachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetachComponent]
    });
    fixture = TestBed.createComponent(DetachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
