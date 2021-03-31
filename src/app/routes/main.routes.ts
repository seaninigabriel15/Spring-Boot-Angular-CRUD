import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from '../main/list-employee/list-employee.component'
import { UpdateEmployeeComponent } from '../main/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './../main/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './../main/details-employee/details-employee.component';


const routes: Routes = [

    {path: '', redirectTo: 'employee', pathMatch: 'full'},


    {path: 'employees', component: ListEmployeeComponent},
    {path: 'add', component: CreateEmployeeComponent},
    {path: 'update/:id', component: UpdateEmployeeComponent},
    {path: 'details/:id', component: DetailsEmployeeComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class MainRoutes{ }