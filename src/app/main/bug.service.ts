import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Bugform {
  title:string,
  description:string,
  priority:string,
  reporter:string,
  status:string
}

@Injectable({
  providedIn: 'root'
})
export class BugService implements OnInit{


  constructor(private http:HttpClient) { }

  ngOnInit(){
  }

  getBugs():Observable<any> {
    return this.http.get('https://bug-report-system-server.herokuapp.com/bugs')
  }


  getSortingBugs(params:string, sorting:string):Observable<any>{
    return this.http.get(`https://bug-report-system-server.herokuapp.com/bugs?sort=${params},${sorting}`)
  }

  putBugs(id:string,body:Bugform):Observable<any> {
    return this.http.put(`https://bug-report-system-server.herokuapp.com/bugs/${id}`,body)
  }
  
}
