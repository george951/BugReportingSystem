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

  bugs:Bugs
  ngOnInit(){
    this.service.getBugs().subscribe(data => {
      this.bugs = data
    })
  }
}
