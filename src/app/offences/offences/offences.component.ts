import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-offences',
  templateUrl: './offences.component.html',
  styleUrls: ['./offences.component.css']
})
export class OffencesComponent implements OnInit {
 
  openModal='none';
  openModal2 = 'none';
  duration =0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'offenceCode', label: ' Offence Code'},
    { key: 'offenceCategory', label: 'Offence Category'},
    { key: 'offenceSubCategory', label: 'Offence Sub Category'},
    { key: 'offenceName', label: 'Offence Name'},
    ];


  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('offences').subscribe((res:any) => {
      this.data=res;
      console.log(res)

    });
  }
  OffenceForm = new FormGroup({
    offenceCode: new FormControl('',[ Validators.required]),
    offenceCategory: new FormControl('',[ Validators.required]),
    offenceSubCategory: new FormControl('',[ Validators.required]),
    offenceName: new FormControl('',[ Validators.required]),
  
  });
  
  onClickOpenModalAdd(){

    this.openModal='block'
  
  }

  onClickCloseModalAdd(){
    this.openModal='none'
  }

  onSubmit(){
    this.http.create(this.OffenceForm.value, 'offences').subscribe((res) => {
      console.log(res);
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.openModal2='none';
    this. OffenceForm.setValue({
      offenceCode: value?. offenceCode,
      offenceCategory: value?. offenceCategory,
      offenceSubCategory: value?.  offenceSubCategory,
      offenceName: value?.offenceName,
     
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'offences').subscribe((res) =>{});
    window.location.reload();
  }

} 
