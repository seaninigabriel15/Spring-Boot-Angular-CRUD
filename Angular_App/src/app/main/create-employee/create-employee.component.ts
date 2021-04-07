import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';
import { EmployeeServiceService } from "../../services/employee-service.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeModel } from './../../employeemodel';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee:EmployeeModel = new EmployeeModel();
  submitted = false;

  constructor( private employeeService: EmployeeServiceService,
                private router: Router) {}

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new EmployeeModel();
  }
   save(){
     this.employeeService.createEmployee(this.employee)
     .subscribe(
       data => {
         console.log(data)
       this.employee = new EmployeeModel();
       this.gotoList()
       },
     error => console.log(error));
   }

   onSubmit(){
     this.submitted = true;
     this.save();
   }

gotoList(){
 this.router.navigate(['/employees']);
}

}
