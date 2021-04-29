import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8890/api/";
  loginpanel(data){
    return this.http.post(this.url +'loginpanel',data);
  }
}
