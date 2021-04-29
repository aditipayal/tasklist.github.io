import { RegisterService } from './../../service/register.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private rser: RegisterService, private router: Router) { }

  regform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl('')
  });
  resData;
  errmsg;

  ngOnInit(): void {
    this.validate();
  }

  Register(){
    let formData = this.regform.getRawValue();
    this.rser.registerpanel(formData)
    .subscribe(res => {
      this.resData = res;
      if(this.resData.err == 0)
      {
          console.log(res);
          localStorage.setItem('sid', this.resData.ulogin);
          this.router.navigate(['']);
      }
      if(this.resData.err == 1)
      {
        this.errmsg = this.resData.msg;
      }
  })
  }
  validate(){
    this.regform = this.fb.group({
      'username':['', Validators.required],
      'email':['', Validators.required],
      'mobile':['', Validators.required],
      'password':['', Validators.required]
    });
  }
}
