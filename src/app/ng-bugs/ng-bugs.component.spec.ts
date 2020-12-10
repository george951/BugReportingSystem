import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBugsComponent } from './ng-bugs.component';

describe('NgBugsComponent', () => {
  let component: NgBugsComponent;
  let fixture: ComponentFixture<NgBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
