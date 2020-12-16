import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bugform } from '../bug-form';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private service:BugService, private router:Router) {
  }

  bugs:Array<Bugform>
  params:string[] = ["title","priority", "reporter", "createdAt", "status"]
  sorting:string[] = ["desc"]
  sortChecker:boolean = true;

  totalRecords:number
  totalPages:number
  page:number=0
  perPage:number
  

  ngOnInit(): void {

    this.service.getHeadBugs().subscribe(head => {
      this.totalPages = head.headers.get('totalPages');
      this.totalRecords = head.headers.get('totalRecords');
      this.perPage = head.headers.get('perPage')
      this.service.getSizeBugs(this.perPage,this.page).subscribe(data => {
        this.bugs = data
      })
    })
  }

  sortedBugs(params:string, sorting:string) {
    this.service.getSortingBugs(params,sorting).subscribe(data => {
      this.bugs = data

      if (this.sortChecker) {
        this.sorting.splice(0)
        this.sorting.push("asc")
        this.sortChecker = false
      } else {
        this.sorting.splice(0);
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
      this.service.getSizeBugs(this.perPage,this.page).subscribe(data => {
        this.bugs = data
      })
    }
  }

  Next() {
    if (this.page != (this.totalPages - 1)) {
      this.page +=1
      this.service.getSizeBugs(this.perPage,this.page).subscribe(data => {
        this.bugs = data
      })
    }
  }
}

