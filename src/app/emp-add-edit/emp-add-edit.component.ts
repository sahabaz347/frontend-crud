import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  formJsonData:any;
  selectedValue!: string;
  educationList:string[]=[
  'Matric',
  'Deploma',
  'Intermediate',
  'Graduate',
  'Post Graduate'
];
empForm:FormGroup;
constructor(private _fb:FormBuilder,private _empService:EmployeeService,private _dialogRef:DialogRef<EmpAddEditComponent>){
  this.empForm=this._fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required],
    education:['',Validators.required],
    companyName:['',Validators.required],
    experiance:['',Validators.required],
    salary:['',Validators.required]
  })
}
onSubmit(){
  let formData=this.empForm.value;
  // this.formJsonData={
  //   "firstName":formData.firstName,
  //   "lastName":formData.lastName,
  //   "email":formData.email,
  //   "dob":formData.dob,
  //   "companyName":formData.companyName,
  //   "education":formData.education,
  //   "experiance":formData.experiance,
  //   "salary":formData.salary
  // }
  this._empService.addEmployee(this.empForm.value).subscribe({
    next:(val:any)=>{
      alert('Employee added successfully');
      this._dialogRef.close();
    },error:(err:any)=>{
      console.error(err); 
    }

  })
}
get registerFormControl() {
  console.log(this.empForm.controls)
  return this.empForm.controls;
}
}
