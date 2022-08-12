import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.css']
})
export class BailComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration =0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'crimeOffendersId', label: ' Crime Offenders'},
    { key: 'bailDate', label: 'Bail Date'},
    { key: 'bailerName', label: 'Bailer Name'},
    { key: 'bailerPhoneNumber', label: 'Bailer Phone Number'},
    { key: 'bailerAddress', label: 'Bailer Address'},
    { key: 'bailerEmail', label: 'Bailer Email'},
    { key: 'bailBond', Label:"Bail Bond"},
  ];

  constructor(private http:SmartSocietyServiceService) { }

  ngOnInit(): void {
    this.http.findAll('bail').subscribe(res=>{
      this.data=res
      console.log(res)
    })
  }

  BailForm = new FormGroup({
    crimeOffendersId: new FormControl('',[ Validators.required]),
    bailDate: new FormControl('',[ Validators.required]),
    bailerName: new FormControl('',[ Validators.required]),
    bailerPhoneNumber: new FormControl('',[ Validators.required]),
    bailerAddress: new FormControl('',[ Validators.required]),
    bailerEmail: new FormControl('',[ Validators.required]),
    bailBond: new FormControl('',[ Validators.required]),
  });
  
  onClickOpenModalAdd(){

    this.openModal='block'
  
  }

  onClickCloseModalAdd(){
    this.openModal='none'
  }

  onSubmit(){
    this.http.create(this.BailForm.value, 'bail').subscribe((res) => {
      console.log(res);
      this. BailForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.openModal2='none';
    this. BailForm.setValue({
      crimeOffendersId: value?.crimeOffendersId,
      bailDate: value?.bailDate,
      bailerName: value?. bailerName,
      bailerPhoneNumber: value?.bailerPhoneNumber,
      bailerAddress: value?.bailerAddress,
      bailerEmail: value?.  bailerEmail,
      bailBond:value?. bailBond,
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'bail').subscribe((res) =>{});
    window.location.reload();
  }


}
