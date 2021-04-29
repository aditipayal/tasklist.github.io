import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  edittaskform = new  FormGroup({
    sno: new FormControl(''),
    taskname: new FormControl(''),
    tasklabels: new FormControl(''),
    taskdescription: new FormControl(''),
    dateadded: new FormControl(''),
    datecompletion: new FormControl(''),
    status: new FormControl('')
  });
  cid;
  resdata;
  formData;

  constructor(private fb: FormBuilder, private ar: ActivatedRoute, private tser: TaskService) { }
 
  ngOnInit() {
    this.validate();
    this.ar.params.subscribe(par => {
      this.cid = par.id;
      this.tser.addgettaskbyid(this.cid)
      .subscribe(res => {
        this.resdata = res;
        if (this.resdata.err == 0) {
            this.edittaskform.controls.sno.patchValue(this.resdata.cdata[0].sno);
            this.edittaskform.controls.taskname.patchValue(this.resdata.cdata[0].taskname);
            this.edittaskform.controls.tasklabels.patchValue(this.resdata.cdata[0].tasklabels);
            this.edittaskform.controls.taskdescription.patchValue(this.resdata.cdata[0].taskdescription);
            this.edittaskform.controls.dateadded.patchValue(this.resdata.cdata[0].dateadded);
            this.edittaskform.controls.datecompletion.patchValue(this.resdata.cdata[0].datecompletion);
            this.edittaskform.controls.status.patchValue(this.resdata.cdata[0].status);
        }
      });
    });
  }
  edittask(id) {
    let formData = this.edittaskform.getRawValue();
    let uid = this.cid;
    this.tser.addposttaskbyid(formData, uid)
   .subscribe(res => {
     console.log(res);
   });
  }
  validate() {
      this.edittaskform = this.fb.group({
        'sno' : ['', Validators.required],
        'taskname' : ['', Validators.required],
        'tasklabels' :['', Validators.required],
        'taskdescription' : ['',Validators.required],
        'dateadded' : ['', Validators.required],
        'datecompletion' : ['', Validators.required],
        'status' : ['', Validators.required]
      })
  }
}

