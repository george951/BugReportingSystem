import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bugs:any[];

  table:string[] = ["title", "priority", "reporter", "createdAt", "status"];

  constructor(private reportService:ReportService){}

  ngOnInit():void {
    this.reportService.getBugs().subscribe((data) => {
      // console.log(data);
      this.bugs = data;
      console.log(this.bugs)
    })
  }

  SortedBugs(params:string):void{
    this.bugs = [];
    this.reportService.getSortedBugs(params).subscribe((data) =>{
    this.bugs = data;
    })
  }

}
