import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  form: FormGroup;
  MyArray: Student[] =[];
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      FirstName:[null,Validators.required],
      LastName:[null,Validators.required],
      Age:[null,Validators.compose([Validators.required,Validators.max(30),Validators.min(10)])],
      Dept:[null,Validators.required],
      IsActive:[],

    });
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.form.valid){
      this.MyArray.push(this.form.value);
      console.log(this.MyArray);
    }
  }

}
