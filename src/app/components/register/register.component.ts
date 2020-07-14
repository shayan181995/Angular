import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  MyArray: Student[] =[];
  constructor(private fb: FormBuilder,private httpClient: HttpClient,public router:Router) { 
    this.form = this.fb.group({
      FirstName:[null,Validators.required],
      Password:[null,Validators.required],
      Age:[null,Validators.compose([Validators.required,Validators.max(30),Validators.min(10)])],
      Dept:[null,Validators.required],
      IsActive:[],

    });
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.form.valid){
        this.httpClient.post('https://reqres.in/api/register',{
        "email": this.form.value.FirstName,
        "password": this.form.value.Password
    }).subscribe(
        (res)=>{
          alert('Registration Successfull');
          console.log(res);
          this.router.navigate(['/login'])
        }
      ,(error)=>{
        alert('Could not register, something went wrong');
        console.log(error);
      })
    }
  }

}
