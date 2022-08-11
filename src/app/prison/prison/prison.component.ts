import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-prison',
  templateUrl: './prison.component.html',
  styleUrls: ['./prison.component.css']
})
export class PrisonComponent implements OnInit {
  openModal='none'
  duration=0
 
  prisonForm = new FormGroup({

    prisonName: new FormControl('', [Validators.required]),
    prisonLocation: new FormControl('', [Validators.required]),
    prisonWardId: new FormControl('', [Validators.required]),
    prisonAdmissionDate: new FormControl('', [Validators.required]),
    prisonReleaseDate: new FormControl('',[Validators.required]),
    bailBond:new FormControl(),
  });

  onClickOpenModalAdd(){this.openModal='block'}

  onClickCloseModalAdd(){
    this.openModal='none'
  }
  onSubmit(){
console.log(this.prisonForm.value)
    const s = this.prisonForm.value.prisonAdmissionDate;
    const e = this.prisonForm.value.prisonReleaseDate;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    if (this.prisonForm.invalid) {
      return;
    }
    this.duration = Number(start.getDate()) - Number(end.getDate());


    this.http.create(this.prisonForm.value, 'prison').subscribe((res) => {

      console.log(res);
      this.prisonForm.reset();
      this.openModal='none'
    });

  }

  constructor(private http: SmartSocietyServiceService) { }
  ngOnInit(): void {
    const a = this.http.findAll('prison').subscribe((res:any) => {
      console.log(res)

    });
  }

}
