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

  getHead():Observable<any> {
    return this.http.get(this.bugUrl)
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

  getPSBugs(param:string,component:string,sort:string,page:number,title:string,priority:string,reporter:string,createdAt:string,status:string):Observable<any> {
    return this.http.get(`${this.bugUrl}?sort=${param}${component}${sort}&page=${page}&title=${title}&priority=${priority}&reporter=${reporter}&createdAt=${createdAt}&status=${status}`)
  }

  getHeadPSBugs(page:number,title:string,priority:string,reporter:string,createdAt:string,status:string):Observable<any> {
    return this.http.get(`${this.bugUrl}?title=${title}&priority=${priority}&reporter=${reporter}&status=${status}&createdAt=${createdAt}`, {observe:"response"})
  }

}