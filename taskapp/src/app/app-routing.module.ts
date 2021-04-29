import { AuthGuard } from './guard/auth.guard';
import { ChangepasswordComponent } from './pages/dashboard/changepassword/changepassword.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskComponent } from './pages/dashboard/task/task.component';
import { AddtaskComponent } from './pages/dashboard/addtask/addtask.component';
import { WelcomeComponent } from './pages/dashboard/welcome/welcome.component';
import { FeedbackComponent } from './pages/dashboard/feedback/feedback.component';
import { EdittaskComponent } from './pages/edittask/edittask.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard],
  children: [{path: 'task', component: TaskComponent},
     {path: '', component: WelcomeComponent},
     {path: 'changepassword', component: ChangepasswordComponent},
     {path: 'addtask', component: AddtaskComponent},
     {path: 'edittask/:id', component: EdittaskComponent},
     {path: 'Feedback', component: FeedbackComponent}]},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
