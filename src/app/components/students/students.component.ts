import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  FName: String;
  LName: String;
  Age: String;
  Dept: String;

  students =[
    {id:"1",firstName:"Shayan",LastName:"Khurshid",Age:"25",Dept:"Portals"},
    {id:"2",firstName:"Haris",LastName:"Rajput",Age:"28",Dept:"Mobility"},
    {id:"3",firstName:"Hamid",LastName:"Mahmood",Age:"24",Dept:"QA"},
    {id:"4",firstName:"Arif",LastName:"Khan",Age:"28",Dept:"Sharepoint"},
  ]

  ngOnInit(): void {
  }
  
  setValue(student){
    this.FName = student.firstName;
    this.LName = student.LastName;
    this.Age = student.Age;
    this.Dept = student.Dept;
  }

}
