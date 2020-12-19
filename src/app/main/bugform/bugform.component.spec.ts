import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { report } from 'process';

import { BugformComponent } from './bugform.component';

describe('BugformComponent', () => {
  let component: BugformComponent;
  let fixture: ComponentFixture<BugformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugformComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be invalid', () => {
    expect(component.postForm.invalid).toBeTruthy()
  });

  it('should be valid requirements', () => {
    const title = component.postForm.controls.title
    const description = component.postForm.controls.description
    const priority = component.postForm.controls.priority
    const reporter = component.postForm.controls.reporter

    expect(title.invalid).toBeTruthy()
    expect(description.invalid).toBeTruthy()
    expect(priority.invalid).toBeTruthy()
    expect(reporter.invalid).toBeTruthy()
  })

  it('reporter should be required', () => {
    const reporter = component.postForm.get('reporter')
    reporter.setValue('QA')
    expect(component.postForm.invalid).toBeTruthy()
  })

  it("reporter condition",() => {
    const reporter = component.postForm.get('reporter')
    const status = component.postForm.get('status')
    const title = component.postForm.get("title")
    const desc = component.postForm.get('description')
    const priority = component.postForm.get("priority")

    title.setValue("hell yeah")
    desc.setValue("this is ok")
    priority.setValue("2")
    reporter.setValue("PO")
    if (reporter.value == "QA") {
      status.setValue("Done!")
      expect(component.postForm.valid).toBeTruthy()
    } else {
      expect(component.postForm.valid).toBeTruthy()
    }

  })
});
