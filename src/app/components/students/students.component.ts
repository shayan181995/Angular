import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  student:Student;
  // FName: String;
  // LName: String;
  // Age: String;
  // Dept: String;

  // students =[
  //   {id:"1",FirstName:"Shayan",LastName:"Khurshid",Age:"25",Dept:"Portals"},
  //   {id:"2",FirstName:"Haris",LastName:"Rajput",Age:"28",Dept:"Mobility"},
  //   {id:"3",FirstName:"Hamid",LastName:"Mahmood",Age:"24",Dept:"QA"},
  //   {id:"4",FirstName:"Arif",LastName:"Khan",Age:"28",Dept:"Sharepoint"},
  // ]

  ngOnInit(): void {
  }
  
  // setValue(student){
  //   this.FName = student.FirstName;
  //   this.LName = student.LastName;
  //   this.Age = student.Age;
  //   this.Dept = student.Dept;
  // }

  

  onuserData(user: any){
    console.log(user);
    this.student =user;
  }

}
