import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8890/api/";
  addtaskpanel(data){
    return this.http.post(this.url + 'addtaskpanel', data);
  }
  addgettask(){
    return this.http.get(this.url + 'addgettask');
  }
 deletegettask(id){
  return this.http.get(this.url + 'deletetask/' + id);
  }
  addfeed(data){
    return this.http.post(this.url + 'addfeed', data);
  }
  addgettaskbyid(id) {
    return this.http.get(this.url + 'fetchtaskbyid/' + id);
  }
  addposttaskbyid(data, id) {
    return this.http.post(this.url + 'updatetask/' + id, data);
  }
}
