
import { Component, OnInit, Input } from '@angular/core';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeModel } from './../../employeemodel';
import { EmployeeServiceService } from './../../services/employee-service.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  id: number;
  employee: EmployeeModel;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.employee = new EmployeeModel();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}