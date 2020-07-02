import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  LabelName = "Name";
  ValueName ="Shayan Khurshid";
  LabelCompany = "Company";
  ValueCompany ="Systems Ltd";
  LabelDate= "Join Date";
  ValueDate =new Date();
  

}
