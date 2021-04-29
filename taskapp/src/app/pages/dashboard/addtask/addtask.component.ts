import { Router } from '@angular/router';
import { TaskService } from './../../../service/task.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private fb: FormBuilder, private tser: TaskService, private router: Router) { }

  addtaskform = new FormGroup({
    sno: new FormControl(''),
    taskname: new FormControl(''),
    tasklabels: new FormControl(''),
    taskdescription: new FormControl(''),
    dateadded: new FormControl(''),
    datecompletion: new FormControl(''),
    status: new FormControl('')
  });
  resData;
  errmsg;
  ngOnInit(){
    this.validate();
  }

  addtask(){
    let formData = this.addtaskform.getRawValue();
    this.tser.addtaskpanel(formData)
   .subscribe(res => {
    this.resData = res;
    if(this.resData.err == 0)
    {
        console.log(res);
        this.router.navigate(['/dashboard/task']);
    }
    if(this.resData.err == 1)
    {
      this.errmsg = this.resData.msg;
    }
   });
  }

  validate(){
    this.addtaskform = this.fb.group({
      'sno' : ['', Validators.required],
      'taskname' : ['', Validators.required],
      'tasklabels' :['', Validators.required],
      'taskdescription' : ['',Validators.required],
      'dateadded' : ['', Validators.required],
      'datecompletion' : ['', Validators.required],
      'status' : ['', Validators.required]
    });
  }
}
