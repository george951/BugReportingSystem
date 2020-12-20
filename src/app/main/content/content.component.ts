import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Bugform } from '../bug-form';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private service:BugService, private router:Router, private fb:FormBuilder) {
  }

  bugs:Array<Bugform>
  params:string[] = ["title","priority", "reporter", "createdAt", "status"]
  sorting:string[] = ["desc"]
  component:string = ","
  sortChecker:boolean = true;

  totalRecords:number
  totalPages:number
  page:number = 0
  perPage:number
  
  searchForm:FormGroup
  

  ngOnInit(): void {

    this.service.getBugs().subscribe(data => this.bugs = data)
    this.searchForm = this.fb.group({
      title:'',
      priority:'',
      reporter:'',
      createdAt:'',
      status:''
    })
  }

  sortedBugs(params:string, sorting:string,component:string) {
    this.service.getPSBugs(params,component,sorting,this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(data => {
      this.bugs = data

      if (this.sortChecker) {
        this.sorting.splice(0)
        this.sorting.push("asc")
        this.sortChecker = false
      } else {
        this.sorting.splice(0)
        this.sorting.push("desc")
        this.sortChecker = true
      }
    })
  }

  onEdit(id:string) {
    this.router.navigate(['/edit-bugs', id])
  }

  onDelete(id:string) {
    this.service.deleteBugs(id).subscribe(data => {})
  }

  Prev() {
    if (this.page > 0) {
      this.page -= 1
      this.service.getHeadPSBugs(this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(head => {
        this.totalPages = head.headers.get("totalPages")
        this.totalRecords = head.headers.get("totalRecords")
        this.perPage = head.headers.get("perPage")
        var params = ""
        var sort = ""
        var component = ""
        this.service.getPSBugs(params,component,sort,this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(data => {
          this.bugs = data
        })
      })
    }
  }

  Next() {
    if (this.page != (this.totalPages - 1)) {
      this.page +=1
      var params = ""
      var sort = ""
      var component = ""
      this.service.getHeadPSBugs(this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(head => {
        this.totalPages = head.headers.get("totalPages")
        this.totalRecords = head.headers.get("totalRecords")
        this.perPage = head.headers.get("perPage")
        this.service.getPSBugs(params,component,sort,this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(data => {
          this.bugs = data
        })
      })
    }
  }

  get _title() {
    return this.searchForm.get('title')
  }
  get _priority() {
    return this.searchForm.get('priority')
  }
  get _reporter () {
    return this.searchForm.get('reporter')
  }
  get _createdAt() {
    return this.searchForm.get('createdAt')
  }
  get _status() {
    return this.searchForm.get('status')
  }

  onSearch() {
    this.service.getHeadPSBugs(this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(head => {
      this.totalPages = head.headers.get("totalPages")
      this.totalRecords = head.headers.get("totalRecords")
      this.perPage = head.headers.get("perPage")
      var params = ""
      var sort = ""
      var component = ""
      this.service.getPSBugs(params,component,sort,this.page,this._title.value,this._priority.value,this._reporter.value,this._createdAt.value,this._status.value).subscribe(data => {
        this.bugs = data
      })
    })
  }
}

