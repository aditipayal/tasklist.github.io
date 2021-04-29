import { TaskService } from './../../../service/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private tser: TaskService) { }

  resData;
  taskData;
  deltask(id) {
    this.tser.deletegettask(id)
   .subscribe(res => {
    this.tser.addgettask()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.taskData = this.resData.cdata;
        }
    })
   })
   }
   ngOnInit() {
     this.tser.addgettask()
     .subscribe(res => {
         this.resData = res;
         if(this.resData.err == 0) {
           this.taskData = this.resData.cdata;
         }
     })
   }

}
