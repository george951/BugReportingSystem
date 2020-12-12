import { Component, Injectable, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.service.getBugs().subscribe(data => {
      this.bugs = data
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

  onClick(id:string) {
    this.router.navigate(['/edit-bugs', id])
  }
}

