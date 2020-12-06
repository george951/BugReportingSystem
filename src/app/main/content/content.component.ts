import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bugs } from '../bugs';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private service:ContentService) { }

  sort:string[] = ["desc"]
  sort_counter:number = 0
  headers:string[] = ["title","priority","reporter","data created","status"]
  bugs:Bugs

  ngOnInit(){
    this.service.getBugs().subscribe(data => {
      this.bugs = data
    })
  }

  getSorted(params:string, sort:string) {
    this.service.sortedBugs(params,sort).subscribe(data => {
      this.bugs = data;
      if (this.sort_counter == 0) {
        this.sort.splice(0);
        this.sort.push("asc")
        console.log(this.sort)
        this.sort_counter = 1;
      } else {
        this.sort.splice(0);
        this.sort.push("desc");
        console.log(this.sort)
        this.sort_counter = 0;
      }
    })
  }
}
