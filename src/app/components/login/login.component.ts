import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myname: string;
  password: string;
  constructor(private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  CheckLogin(){
    this.httpClient.post('https://reqres.in/api/login',{
      "email": this.myname,
      "password": this.password 
  }).subscribe(
      (res)=>{
        alert('Login Successfull');
        console.log(res);
        this.router.navigate(['/Home'])
      }
    ,(error)=>{
      alert('Incorrect Login Credentials');
      console.log(error);
    })
  }

}
