import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { title } from 'process';
import { Observable, of } from 'rxjs';


export interface Bugform {
  title:string,
  description:string,
  priority:string,
  reporter:string,
  status:string
}

@Component({
  selector: 'app-bugform',
  templateUrl: './bugform.component.html',
  styleUrls: ['./bugform.component.scss']
})

export class BugformComponent implements OnInit {

  form: FormGroup
  bugUrl = "https://bug-report-system-server.herokuapp.com/bugs"

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
      reporter: [null, Validators.required],
      status: [null, Validators.required],
    })

    this.form.get('reporter').valueChanges.subscribe(value => {
      const statusControl = this.form.get('status')

      if (value === 'QA') {
        statusControl.setValidators(Validators.required)
      } else {
        statusControl.clearValidators();
      }
      statusControl.updateValueAndValidity();
    })
  }

  get title():any {
    return this.form.get('title')
  }
  get description():any {
    return this.form.get('description')
  }
  get priority():any {
    return this.form.get('priority')
  }
  get reporter():any {
    return this.form.get('reporter')
  }
  get status():any {
    return this.form.get('status')
  }

  onSubmit() {
    this.router.navigate(['/content'])
    return this.http.post("https://bug-report-system-server.herokuapp.com/bugs",{
      title: this.title.value,
      description: this.description.value,
      priority: this.priority.value,
      reporter: this.reporter.value,
      status: this.status.value
    }).subscribe()
  }
}
