import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
import { UniqueUser } from '../validator/unique-user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data=[]as any
  Roles: any = ['Admin', 'Lead', 'User'];
  timeFrom=new FormGroup({
  //users form
    username: new FormControl('',[Validators.required],[this.unique.validate]),
    personnelType: new FormControl('',[Validators.required,  ]),
    phonenumber: new FormControl(Number(''),[Validators.required,],[this.unique.validatePhone]),
    email: new FormControl('',[Validators.required, ],[this.unique.validateEmail]),
    gender: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    image: new FormControl(''),
    id: new FormControl(''),


})



onSubmit(){
  if(!this.timeFrom.value){
    return
  }this.http.register(this.timeFrom.value,'users').subscribe(res=>{
    console.log(res)

    this.timeFrom.reset()
    this.router.navigate(['/login'])
  })


}

rest(){
  this.timeFrom.reset()
}

find(){
  //console.log(this.http.findOne(this.timeFrom.value.id) )
  const a= this.http.findAll('users').subscribe(res =>{
    console.log(res)
    this.data=res
  })

}


findOne(){
  if(!this.timeFrom.value.username){
    console.log(this.timeFrom.value.username)
    console.log("not found")
    return
  } //console.log((this.timeFrom.value.id) )
  const a= this.http.findOne(this.timeFrom.value.username,'users').subscribe((res: any) =>{
    console.log(res)
  this.timeFrom.setValue({
    address:res[0].address,
    email: res[0].email,
    gender: res[0].gender,
    image:res[0].image,
    password: res[0].password,
    personnelType: res[0].personnelType,
    phonenumber: res[0].phonenumber,
    username: res[0].username,
    id:res[0]._id
  })

  })

}
update(){
  if(!this.timeFrom.value.id){
    console.log("not found")
    return
  } //console.log(this.http.findOne(this.timeFrom.value.id) )
  const a= this.http.update(this.timeFrom.value.id,([this.timeFrom.value]),'users').subscribe(res =>{
    console.log(res)
  })

}
delete(){
  if(!this.timeFrom.value.id){
    console.log("not found")
    return
  } //console.log(this.http.findOne(this.timeFrom.value.id) )
  const a= this.http.delete(this.timeFrom.value.id ,'users').subscribe(res =>{
    console.log(res)
  })

}
  constructor(private http:SmartSocietyServiceService,private unique: UniqueUser,private router: Router,) { }

  ngOnInit(): void {

 

  }
}
