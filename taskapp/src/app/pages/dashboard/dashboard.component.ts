import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uid;
  constructor(private router: Router) { }

  ngOnInit() {
   this.uid = localStorage.getItem('sid');
  }
  logout() {
    localStorage.removeItem('sid');
    this.router.navigate(['/']);
  }


}
