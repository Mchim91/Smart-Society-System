import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.css']
})
export class CrimesComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration =0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'crimeIdentificationNo', label: 'Crime Identification Number'},
    { key: 'crimeCategoryId', label: 'Crime Category'},
    { key: 'crimeSubCategoryId', label: 'Crime Sub Category'},
    { key: 'crimeType', label: 'Crime Type'},
    { key: 'crimeSubType', label: 'Crime Sub Type'},
    { key: 'crimeName', label: 'Crime Name'},
  ];

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('crimes').subscribe((res:any) => {
      this.data = res;
    });
  }

  crimesForm = new FormGroup({
    crimeIdentificationNo: new FormControl('',[ Validators.required]),
    crimeCategoryId: new FormControl('',[ Validators.required]),
    crimeSubCategoryId: new FormControl('',[ Validators.required]),
    crimeType: new FormControl('',[ Validators.required]),
    crimeSubType: new FormControl('',[ Validators.required]),
    crimeName: new FormControl('',[ Validators.required]),
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
  }



  onSubmit(){
    this.http.create(this.crimesForm.value, 'crimes').subscribe((res) => {
      console.log(res);
      this.crimesForm.reset();
      this. ngOnInit()
      this.openModal='none'
    });

  }

  onUpdate(){
    console.log(this.crimesForm.value)
    if(this.crimesForm.invalid){
      return
    }this.http.update(this.main._id,this.crimesForm.value,'crimes').subscribe((res) => {
      console.log(res);
      this. ngOnInit()
      this.openModal2='none'
    });
  }

  onEdit(value: any){
    this.onClickOpenModal2Add()
    this.crimesForm.setValue({
      crimeIdentificationNo: value?.crimeIdentificationNo,
      crimeCategoryId: value?.crimeCategoryId,
      crimeSubCategoryId: value?.crimeSubCategoryId,
      crimeType: value?.crimeType,
      crimeSubType: value?.crimeSubType,
      crimeName: value?.crimeName,
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'prisonward').subscribe((res) =>{});
    window.location.reload();
  }


}
