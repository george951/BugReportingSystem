import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-put-bugs',
  templateUrl: './put-bugs.component.html',
  styleUrls: ['./put-bugs.component.scss']
})
export class PutBugsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  putForm:FormGroup
  ngOnInit(): void {
    this.putForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
      reporter: [null, Validators.required],
      status: [null, Validators.required],
    })

    this.putForm.get('reporter').valueChanges.subscribe(value => {
      const statusControl = this.putForm.get('status')

      if (value === 'QA') {
        statusControl.setValidators(Validators.required)
      } else {
        statusControl.clearValidators();
      }
      statusControl.updateValueAndValidity();
    })
  }

}
