import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bugs } from './bugs';


@Injectable({
  providedIn: 'root'
})
export class ContentService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getBugs(): Observable<Bugs>{
    return this.http.get<Bugs>('https://bug-report-system-server.herokuapp.com/bugs')
  }

  sortedBugs(params:string, sort:string): Observable<Bugs> {
    return this.http.get<Bugs>(`https://bug-report-system-server.herokuapp.com/bugs?sort=${params},${sort}`)
  }

}
