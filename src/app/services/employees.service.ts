import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) {

   }

   public addEmployee(employee:Employee){
    return this.http.post('https://inventorizacija-2024-default-rtdb.europe-west1.firebasedatabase.app/employees.json', employee);
   }
}
