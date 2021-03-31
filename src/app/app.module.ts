import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainRoutes } from './routes/main.routes';
import { ListEmployeeComponent } from './main/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './main/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './main/details-employee/details-employee.component';
import { UpdateEmployeeComponent } from './main/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MainRoutes ,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
