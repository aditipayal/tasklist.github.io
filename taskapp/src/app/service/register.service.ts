import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8890/api/";
  registerpanel(data){
    return this.http.post(this.url + 'registerpanel',data);
  }
  changepass(data){
    return this.http.post(this.url + 'changeadminpass', data);
  }
}
