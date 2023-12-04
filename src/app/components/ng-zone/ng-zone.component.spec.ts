import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZoneComponent } from './ng-zone.component';

describe('NgZoneComponent', () => {
  let component: NgZoneComponent;
  let fixture: ComponentFixture<NgZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgZoneComponent]
    });
    fixture = TestBed.createComponent(NgZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
