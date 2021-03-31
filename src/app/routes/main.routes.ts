import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from '../main/list-employee/list-employee.component'


const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},


    {path: 'home', component: ListEmployeeComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutes{ }