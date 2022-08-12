import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


header = [
    { key: 'offenderIdentificationNO', label: 'Id'},
    { key: 'offenderName', label: 'Name'},
    { key: 'offenderGender', label: 'Gender'},
    { key: 'offenderDescription:', label: 'Description '}
  ];
  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('offenders').subscribe((res:any) => {
      console.log(res)
      this.data=res
    });
  }

  OffendersForm = new FormGroup({


    offenderIdentificationNO: new FormControl('', [Validators.required]),
    offenderName: new FormControl('', [Validators.required]),
    offenderGender: new FormControl('', [Validators.required]),
    offenderDescription: new FormControl('', [Validators.required]),
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
    this.http.create(this.OffendersForm.value, 'offenders').subscribe((res) => {


      console.log( this.data);
      this.OffendersForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    console.log("d")
    this.onClickOpenModal2Add()
    this.OffendersForm.setValue({
      offenderIdentificationNO: value?.offenderIdentificationNO,
      offenderName: value?.offenderName,
      offenderGender: value?.offenderGender,
      offenderDescription: value?.offenderDescription
    });
    this.main = value;
  }

  onDetail(value:any){
    console.log(value)
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
this.http.findIdNo(id,'offenders').subscribe(res=>{
  console.log(res)
  this.data=res
})
  }

}
