import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';
import { EmployeeServiceService } from "../../services/employee-service.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeModel } from './../../employeemodel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Observable<EmployeeModel[]>;

  constructor( private employeeService: EmployeeServiceService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData()
{
  this.employees = this.employeeService.getEmployeesList();
}

deleteEmployee(id: number){
this.employeeService.deleteEmployee(id).subscribe(data => {
  console.log(data);
  this.reloadData();
});
error => console.log(error);
}

employeeDetails(id:number){
  this.router.navigate(['details',id])
}

updateEmployee(id:number){
  this.router.navigate(['update',id])
}
}
