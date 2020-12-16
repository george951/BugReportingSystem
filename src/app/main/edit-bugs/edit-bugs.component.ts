import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  comments:FormArray
  

  ngOnInit(): void {
    this.putForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
      reporter: [null, Validators.required],
      status: [null, Validators.required],
      id:[null],
      comments: this.fb.array([this.addCommentGroup()])
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

  get _title() {
    return this.putForm.get('title')
  }
  get _description() {
    return this.putForm.get('description')
  }
  get _priority() {
    return this.putForm.get('priority')
  }
  get _reporter() {
    return this.putForm.get('reporter')
  }
  get _status() {
    return this.putForm.get('status')
  }
  get _comments() {
    return <FormArray>this.putForm.get('comments')
  }

  onSubmit():void {
    this.bugId = this.route.snapshot.paramMap.get("id")
    this.router.navigate(['/content'])
    this.service.putBugs(this.bugId, {
      title:this._title.value,
      description:this._description.value,
      priority:this._priority.value,
      reporter:this._reporter.value,
      status:this._status.value,
      comments:this._comments.value
    }).subscribe(data=>{})
  }

  addCommentGroup() {
    return this.fb.group({
      reporter:[],
      description:[]
    })
  }

  addComments() {
    return this._comments.push(this.addCommentGroup())
  }

  getData():Observable<any> {
    this.bugId = this.route.snapshot.paramMap.get("id")
    return this.service.getBugById(this.bugId)
  }
}
