import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'poc4';

  ngOnInit(): void {};

  constructor() {};

  empName: String;
  empNum: Number;

  public listOfEmployees = [{id: 1,Name: "DHRUV", Code: 123},{id: 2,Name: "", Code: ""}]


  register(empName, empNum)
  {
    var something = 1;
    this.listOfEmployees.push({id: something++, Name:empName, Code:parseInt(empNum)});
    //console.log(this.listOfEmployees);
  }

  remove(index)
  {
    this.listOfEmployees.splice(index, 1);
  }

}