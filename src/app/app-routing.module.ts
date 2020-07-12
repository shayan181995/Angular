import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '',pathMatch:"full", redirectTo: "login" },

  {path: 'Home',component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
