import { Component,OnInit } from '@angular/core';
import { Aadhar } from '../Aadhar list/Aadhar';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formAadhar!:FormGroup;

  constructor(private fb:FormBuilder,private aadhar:AadharService){}

  tabilAadhar:Aadhar[]=[];

  ngOnInit(){
   this.formAadhar = this.fb.group({
    id: [0,Validators.required],
    firstName: ["",Validators.required,],
    lastName: ["",Validators.required],
    email:  ["",Validators.required],
    age:  ["",Validators.required],
    gender: ["",Validators.required],
    married: ["",Validators.required],
    phone:  ["",Validators.required],
    dob: ["",Validators.required],
    states:  ["",Validators.required],
    pin: ["",Validators.required],
   });
   this.getall();
  }


  getall(){
    this.aadhar.getall().subscribe((res)=>{
      this.tabilAadhar = res
    })
  }

  editEnabled:boolean=false;
  onSubmit(){
    if(this.formAadhar.invalid){
      alert("Place Fill The Form");
      return;
    }
    if(this.editEnabled){
      this.aadhar.updateAadhar(this.formAadhar.value).subscribe({
        next : (res)=>{
          alert("Update");
        this.formAadhar.reset();
        this.getall();
        this.editEnabled=false ;  
        },
        error:(err)=>{
          console.error(err)
        }
      })
    }else
    this.aadhar.createAadhar(this.formAadhar.value).subscribe({
      next : (res)=>{
        alert("added")
      this.formAadhar.reset();
      this.getall()
        
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }

  editForm(data:Aadhar){
    this.editEnabled=true;
     this.formAadhar.patchValue({
       id:data.id,
       firstName:data.firstName,
       lastName:data.lastName,
       email:  data.email,
       age:  data.age,
       gender: data.gender,
       married: data.married,
       phone:  data.phone,
       dob: data.dob,
       states: data.states,
       pin:data.pin,
     })
  }

  delete(id:number){
    if(confirm("Are you Deleted..?")){
      this.aadhar.deleteAadhar(id).subscribe();
    alert('Delete successfully');
    this.getall();
    }
  }

  reset(){
    this.formAadhar.reset();
  }
}
