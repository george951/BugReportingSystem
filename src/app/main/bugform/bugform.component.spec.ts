import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugformComponent } from './bugform.component';

describe('BugformComponent', () => {
  let component: BugformComponent;
  let fixture: ComponentFixture<BugformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
