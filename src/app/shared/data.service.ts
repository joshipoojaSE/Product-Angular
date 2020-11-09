import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseurl = `http://localhost:3000/api/`;

  constructor(private http: HttpClient) { }

  Postdata(url: string, data) {
    return this.http.post(`${this.baseurl}${url}`, data);
  }

  Getdata(url : string){
    return this.http.get(`${this.baseurl}${url}`);
  }

  Putdata(url: string, data) {
    return this.http.put(`${this.baseurl}${url}`, data);
  }

  Deletedata(url : string){
    return this.http.delete(`${this.baseurl}${url}`);
  }

}

