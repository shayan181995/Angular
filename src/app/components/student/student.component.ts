import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  FName: String;
  LName: String;
  Age: String;
  Dept: String;

  students =[
    {id:"1",FirstName:"Shayan",LastName:"Khurshid",Age:"25",Dept:"Portals"},
    {id:"2",FirstName:"Haris",LastName:"Rajput",Age:"28",Dept:"Mobility"},
    {id:"3",FirstName:"Hamid",LastName:"Mahmood",Age:"24",Dept:"QA"},
    {id:"4",FirstName:"Arif",LastName:"Khan",Age:"28",Dept:"Sharepoint"},
  ]
 //student: Student;
 @Input() student: Student
//  @Input() set getUser(value:any){
//    console.log(value)
//    this.student =value;
//  }
 
 @Output() userData = new EventEmitter();
  
 // student: Student;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(
    //   (res:any) => {
    //     console.log(res.params);
    //    this.student = res.params;
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // );
  }
  onuserData(value){
    this.student = value;
  }

  getUser(user:any){
    this.userData.emit(user)
  }

}
