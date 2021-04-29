import { Router } from '@angular/router';
import { RegisterService } from './../../../service/register.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private rser: RegisterService, private router: Router) { }

  changepasswordform = new FormGroup({
    oldpass : new FormControl(''),
    newpass : new FormControl(''),
    conpass : new FormControl('')
  })

  errmsg;
  uid;
  ngOnInit(): void {
    this.validate();
  }
  changepass(){
    let fData = this.changepasswordform.getRawValue();
    if(fData.newpass == fData.conpass) {
        this.rser.changepass({'oldpass': fData.oldpass, 'newpass': fData.newpass, 'uid': localStorage.getItem('sid')})
        .subscribe(res => {
          console.log(res);
        })
    }
    else {
      this.errmsg = "New pass and Confirm password does not Match";
    }
  }
  validate(){
    this.changepasswordform = this.fb.group({
      "oldpass" : ['', Validators.required],
      "newpass" : ['', Validators.required],
      'conpass': ['', Validators.required]  
   })
  }

}
