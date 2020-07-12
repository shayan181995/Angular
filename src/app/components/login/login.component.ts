import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myname: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  CheckLogin(){
    if(this.myname =="shayan" && this.password == "qwerty" ){
      this.router.navigate(['/Home'])
    }
    else{
      console.log('incorrect password')
    }
  }

}
