import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BugService } from '../bug.service';
import { Bugform } from '../bugform/bugform.component';

@Component({
  selector: 'app-edit-bugs',
  templateUrl: './edit-bugs.component.html',
  styleUrls: ['./edit-bugs.component.scss'],
})
export class EditBugsComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:BugService, private router:Router, private route:ActivatedRoute) { }
  
  bugId:string
  bugs:any[]
  putForm:FormGroup
  putBody:Bugform

  ngOnInit(): void {
    this.putForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
      reporter: [null, Validators.required],
      status: [null, Validators.required],
      id:[null]
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

    this.service.getBugs().subscribe(data=>{this.bugs = data})
  }

  get title():any {
    return this.putForm.get('title')
  }
  get description():any {
    return this.putForm.get('description')
  }
  get priority():any {
    return this.putForm.get('priority')
  }
  get reporter():any {
    return this.putForm.get('reporter')
  }
  get status():any {
    return this.putForm.get('status')
  }


  onSubmit():void {
    this.bugId = this.route.snapshot.paramMap.get("id")
    this.router.navigate(['/content'])
    this.service.putBugs(this.bugId, {
      title: this.title.value,
      description: this.description.value,
      priority: this.priority.value,
      reporter: this.reporter.value,
      status: this.status.value
    }).subscribe(data=>{})
  }
}
