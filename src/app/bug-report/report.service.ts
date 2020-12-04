import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getBugs():Observable<any>{
    return this.http.get('https://bug-report-system-server.herokuapp.com/bugs');
  }

  getSortedBugs(params:string):Observable<any>{
    return this.http.get(`https://bug-report-system-server.herokuapp.com/bugs?sort=${params},desc`);
  }
}
