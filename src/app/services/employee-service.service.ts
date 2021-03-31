import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './../employeemodel';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = 'http://localhost:2021';

  constructor(private http: HttpClient) { }

  //add up
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  getEmployeesList(): Observable<any> {
    return this.http.get<EmployeeModel[]>(this.baseUrl);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get<EmployeeModel[]>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post<EmployeeModel[]>(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put<EmployeeModel[]>(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<EmployeeModel[]>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

 
}
