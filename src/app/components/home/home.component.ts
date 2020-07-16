import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  student:Array<Student>=[];
  students =[
    {FirstName:"Shayan",LastName:"Khurshid",Age:"25",Dept:"Portals"},
    {FirstName:"Haris",LastName:"Rajput",Age:"28",Dept:"Mobility"},
    {FirstName:"Hamid",LastName:"Mahmood",Age:"24",Dept:"QA"},
    {FirstName:"Arif",LastName:"Khan",Age:"28",Dept:"Sharepoint"},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  onUserData(event){
    
    this.student.push(event);
    
    console.log(this.student);
  }

}
