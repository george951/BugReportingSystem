import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBugsComponent } from './edit-bugs.component';

describe('PutBugsComponent', () => {
  let component: EditBugsComponent;
  let fixture: ComponentFixture<EditBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
