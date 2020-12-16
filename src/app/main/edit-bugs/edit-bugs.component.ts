import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bugform } from '../bug-form';
import { BugService } from '../bug.service';


@Component({
  selector: 'app-edit-bugs',
  templateUrl: './edit-bugs.component.html',
  styleUrls: ['./edit-bugs.component.scss'],
})

export class EditBugsComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:BugService, private router:Router, private route:ActivatedRoute) { }
  
  bugId:string
  bugs:Bugform
  putForm:FormGroup
  putBody:Bugform

  ngOnInit(): void {
    this.service.getBugs().subscribe(data=>{this.bugs = data;})
    this.putForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
      reporter: [null, Validators.required],
      status: [null, Validators.required],
      id:[null],
      _description:[null, Validators.required],
      _reporter:[null, Validators.required]
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

  get title() {
    return this.putForm.get('title')
  }
  get description() {
    return this.putForm.get('description')
  }
  get priority() {
    return this.putForm.get('priority')
  }
  get reporter() {
    return this.putForm.get('reporter')
  }
  get status() {
    return this.putForm.get('status')
  }
  get _description() {
    return this.putForm.get('description')
  }
  get _reporter() {
    return this.putForm.get('_reporter')
  }


  onSubmit():void {
    this.bugId = this.route.snapshot.paramMap.get("id")
    this.router.navigate(['/content'])
    this.service.putBugs(this.bugId, {
      title:this.title.value,
      description:this.description.value,
      priority:this.priority.value,
      reporter:this.reporter.value,
      status:this.status.value
    }).subscribe(data=>{})
  }
}
