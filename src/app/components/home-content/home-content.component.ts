import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  @Input() students :Array<Student>=[];
  @Output() userData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getUser(user:any){
    this.userData.emit(user)
  }

  

}
