import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  bugs:any;
  ngOnInit(): void {
    this.http.get('https://bug-report-system-server.herokuapp.com/bugs').subscribe(data => {
      this.bugs = data
    })
  }

  bugsSorted() {
    this.http.get('bugs?sort=title,desc&page=0&size=10&title=bug&priority=1&reporter=QA&status=Done')
  }

}
