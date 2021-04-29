import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { TaskComponent } from './pages/dashboard/task/task.component';
import { AddtaskComponent } from './pages/dashboard/addtask/addtask.component';
import { WelcomeComponent } from './pages/dashboard/welcome/welcome.component';
import { FeedbackComponent } from './pages/dashboard/feedback/feedback.component';
import { ChangepasswordComponent } from './pages/dashboard/changepassword/changepassword.component';
import { LabelfilterPipe } from './pipes/labelfilter.pipe';
import { EdittaskComponent } from './pages/edittask/edittask.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TaskComponent,
    AddtaskComponent,
    WelcomeComponent,
    FeedbackComponent,
    ChangepasswordComponent,
    LabelfilterPipe,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
