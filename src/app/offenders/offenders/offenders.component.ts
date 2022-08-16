import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css']
})
export class OffendersComponent implements OnInit {

   
  openModal='none';
  openModal2 = 'none';
  duration=0;
  main = [] as any;
  data = [] as any;
  isCrime=false;
  isChecked = true;

header = [
    { key: 'offenderIdentificationNo', label: 'Id'},
    { key: 'offenderName', label: 'Name'},
    { key: 'offenderGender', label: 'Gender'},
    { key: 'offenderDescription', label: 'Description'},
    { key: 'offenderEmail', label: 'Email'},
    { key: 'offenderNextOfKin', label: 'Next Of Kin'},
    { key: 'offenderAddress', label: 'Address'},
    { key: 'offenderStateOfOrigin', label: 'State Of Origin'},
    { key: 'offenderCountry', label: 'Country'},
    { key: 'offenderBiometrics', label: 'Biometrics'},
    { key: 'offenderPicture', label:'Picture'},
    { key: 'offenderLga', label: 'Lga'},
    { key: 'offenderDateOfBirth', label: 'Date Of Birth'},
    { key: 'offenderType', label: 'Type'},

  ];
  constructor(private http: SmartSocietyServiceService,private rout:Router) { }

  ngOnInit(): void {
    const a = this.http.findAll('offenders').subscribe((res:any) => {
      console.log(res)
      this.data=res
    });
  }
  onChange($event: MatSlideToggleChange) {
    this.isCrime=$event.checked
    console.log($event);
}
  OffendersForm = new FormGroup({


    offenderIdentificationNo: new FormControl('', [Validators.required]),
    offenderName: new FormControl('', [Validators.required]),
    offenderGender: new FormControl('', [Validators.required]),
    offenderDescription: new FormControl('', [Validators.required]),
    offenderEmail: new FormControl('', [Validators.required]),
    offenderNextOfKin: new FormControl('', [Validators.required]),
    offenderAddress: new FormControl('', [Validators.required]),
    offenderStateOfOrigin: new FormControl('', [Validators.required]),
    offenderCountry: new FormControl('', [Validators.required]),
    offenderBiometrics: new FormControl('', [Validators.required]),
    offenderPicture: new FormControl('', [Validators.required]),
    offenderLga: new FormControl('', [Validators.required]),
    offenderDateOfBirth: new FormControl('', [Validators.required]),
    offenderType: new FormControl('', [Validators.required]),
  });

  onClickOpenModalAdd(){
    this.openModal='block'
  }
  onClickCloseModalAdd(){
    this.openModal='none'
  }

  onClickOpenModal2Add(){
    this.openModal2='block'
  }
  onClickCloseModal2Add(){
    this.openModal2='none'
    this.OffendersForm.reset();
  }

  onUpdate() {
    if(this.OffendersForm.invalid){
      return
    }this.http.update(this.main._id,this.OffendersForm.value,'offenders').subscribe((res) => {
      console.log(res);
      this. ngOnInit()
      this.openModal2='none'
    });
  }
  onSubmit(){
    console.log( this.OffendersForm.value);
    this.http.create(this.OffendersForm.value, 'offenders').subscribe((res) => {


      console.log( res);
      this.OffendersForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    console.log("d")
    this.onClickOpenModal2Add()
    this.OffendersForm.setValue({
      offenderIdentificationNo: value?.offenderIdentificationNo,
      offenderName: value?.offenderName,
      offenderGender: value?.offenderGender,
      offenderDescription: value?.offenderDescription,
      offenderEmail: value?.offenderEmail,
      offenderNextOfKin: value?.  offenderNextOfKin,
      offenderAddress: value?.offenderAddress,
      offenderStateOfOrigin: value?. offenderStateOfOrigin,
      offenderCountry: value?.offenderCountry,
      offenderBiometrics: value?.offenderBiometrics,
      offenderPicture: value?.offenderPicture,
      offenderLga: value?.offenderLga,
      offenderDateOfBirth: value?.offenderDateOfBirth,
      offenderType: value?.offenderType,


    });
    this.main = value;
  }

  onDetail(value:any){
    console.log(value.offenderIdentificationNo)
    this.rout.navigateByUrl('offenders/'+value?.offenderIdentificationNo)
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'offenders').subscribe((res) =>{});
    window.location.reload();
  }

  onSearch(id:string){
    console.log(id)
this.http.searchByIdentificationNo(id,'offenders').subscribe(res=>{
  console.log(res)
  this.data=res
})
  }

}
