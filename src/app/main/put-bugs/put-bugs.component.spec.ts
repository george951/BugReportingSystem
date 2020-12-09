import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutBugsComponent } from './put-bugs.component';

describe('PutBugsComponent', () => {
  let component: PutBugsComponent;
  let fixture: ComponentFixture<PutBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
