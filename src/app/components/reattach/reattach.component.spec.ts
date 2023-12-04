import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReattachComponent } from './reattach.component';

describe('ReattachComponent', () => {
  let component: ReattachComponent;
  let fixture: ComponentFixture<ReattachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReattachComponent]
    });
    fixture = TestBed.createComponent(ReattachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
