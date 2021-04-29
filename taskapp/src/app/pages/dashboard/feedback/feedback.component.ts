import { Router } from '@angular/router';
import { TaskService } from './../../../service/task.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder, private tser: TaskService, private router: Router) { }
  feedform = new FormGroup({
    feedname: new FormControl(''),
    feedemail: new FormControl(''),
    feedmobile : new FormControl(''),
    feedmessage: new FormControl('')
  })
  resData;
  errmsg;
  ngOnInit(): void {
    this.validate();
  }
  givefeed(){
    let formData = this.feedform.getRawValue();
    this.tser.addfeed(formData)
    .subscribe(res => {
      this.resData = res;
      if(this.resData.err == 0)
      {
         console.log(res);
      }
      if(this.resData.err == 1)
      {
        this.errmsg = this.resData.msg;
      }
    });
  }
  validate(){
    this.feedform = this.fb.group ({
      'feedname': ['', Validators.required],
      'feedemail':['',Validators.required],
      'feedmobile':['', Validators.required],
      'feedmessage':['', Validators.required]
    });
  }

}
