
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { BirthYearValidatorDirective } from '../../../directives/birth-year-validator.directive';
import { EmployeesService } from '../../../services/employees.service';


@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, BirthYearValidatorDirective],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
public employeeForm:FormGroup;

constructor(private employeeService:EmployeesService){
  this.employeeForm=new FormGroup({
    'name':new FormControl,
    'surname':new FormControl,
    'position':new FormControl,
    'email':new FormControl,
    'birthYear':new FormControl,
    'id':new FormControl,

  })
}

  public newEmployeeSubmit(f:NgForm){
    console.log(f.form);
  }

}

// export class Employee{
//     public name:string|null=null;
//     public surname:string|null=null;
//     public position:string|null=null;
//     public email:string|null=null;
//     public birthYear:number|null=null;
//     public id:string|null=null;
