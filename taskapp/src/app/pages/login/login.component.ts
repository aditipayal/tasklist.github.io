import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  resData;
  errmsg;
  constructor(private fb: FormBuilder, private lser: LoginService, private router: Router) { }

  ngOnInit(){
    this.validate();
  }
  Login(){
    let formData = this.myform.getRawValue();
    this.lser.loginpanel(formData)
    .subscribe(res => {
      this.resData = res;
      if(this.resData.err == 0)
      {
          localStorage.setItem('sid', this.resData.ulogin);
          this.router.navigate(['/dashboard']);
      }
      if(this.resData.err == 1)
      {
        this.errmsg = this.resData.msg;
      }
  })
  }
validate(){
  this.myform = this.fb.group({
    'email':['', Validators.required],
    'password':['', Validators.required]
  });
}
}
