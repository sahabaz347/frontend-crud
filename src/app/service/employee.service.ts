import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this._http.post('http://localhost/crud_angular/employee.php?action=postData',data);
  }
}
