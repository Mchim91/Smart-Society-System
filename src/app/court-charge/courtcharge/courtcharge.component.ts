import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';


@Component({
  selector: 'app-courtcharge',
  templateUrl: './courtcharge.component.html',
  styleUrls: ['./courtcharge.component.css']
})
export class CourtchargeComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration =0;
  main = [] as any;
  data = [] as any;
  header = [
    { key: 'chargeTime', label: ' Charge Time'},
    { key: 'crimeOffendersId', label: 'Crime Offenders'},
    { key: 'courtRulling', label: 'Court Rulling'},
    { key: 'penalty', label: 'Penalty'},
    { key: 'courtName', label: 'Court Name'},
    { key: 'courtJudge', label: 'Court Judge'},
    { key: 'offendersLawyers', Label:"Offenders Lawyer"},
  ];
  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('courtcharge').subscribe((res:any) => {
      this.data = res;
      console.log(res)

    });
  }

  CourtChargeForm = new FormGroup({
    chargeTime: new FormControl('',[ Validators.required]),
    crimeOffendersId: new FormControl('',[ Validators.required]),
    courtRulling: new FormControl('',[ Validators.required]),
    penalty: new FormControl('',[ Validators.required]),
    courtName: new FormControl('',[ Validators.required]),
    courtJudge: new FormControl('',[ Validators.required]),
    offendersLawyers: new FormControl('',[ Validators.required]),
  });

  onClickOpenModalAdd(){

    this.openModal='block'
  
  }

  onClickCloseModalAdd(){
    this.openModal='none'
  }

  onSubmit(){
    this.http.create(this.CourtChargeForm.value, 'courtcharge').subscribe((res) => {
      console.log(res);
      this. CourtChargeForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.openModal2='none';
    this. CourtChargeForm.setValue({
      chargeTime: value?.chargeTime,
      crimeOffendersId: value?.crimeOffendersId,
      courtRulling: value?. courtRulling,
      penalty: value?.penalty,
      courtName: value?.courtName,
      courtJudge: value?. courtJudge,
      offendersLawyers:value?.offendersLawyers,
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'courtcharge').subscribe((res) =>{});
    window.location.reload();
  }


}

