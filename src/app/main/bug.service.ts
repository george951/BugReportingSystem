import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bugform } from './bug-form';

@Injectable({
  providedIn: 'root'
})
export class BugService implements OnInit{
  constructor(private http:HttpClient) { }

  bugUrl:string = 'https://bug-report-system-server.herokuapp.com/bugs'
  
  ngOnInit(){
  }

  getBugs():Observable<any> {
    return this.http.get(this.bugUrl)
  }

  getSortingBugs(params:string, sorting:string):Observable<any>{
    return this.http.get(`${this.bugUrl}?sort=${params},${sorting}`)
  }

  putBugs(id:string,body:Bugform):Observable<any> {
    return this.http.put(`${this.bugUrl}/${id}`,body)
  }
  
  getBugById(id:string) {
    return this.http.get(`${this.bugUrl}/${id}`)
  }

  deleteBugs(id:string):Observable<any> {
    return this.http.delete(`${this.bugUrl}/${id}`)
  }

  getSizeBugs(number:number, page:number):Observable<any> {
    return this.http.get(`${this.bugUrl}?page=${page}&size=${number}`)
  }

  getHeadBugs():Observable<any> {
    return this.http.get(this.bugUrl, {observe:"response"})
  }

}