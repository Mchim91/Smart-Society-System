import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.css']
})
export class CrimesComponent implements OnInit {
  modal = false;
  modal2 = false;
  data = [] as any;
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'crimeIdentificationNo', label: 'CrimeIdentificationNo' },
    { key: 'crimeCategoryId', label: 'CrimeCategoryId' },
    { key: 'crimeSubCategoryId', label: 'CrimeSubCategoryId' },
    { key: 'crimeType', label: 'CrimeType' },
    { key: 'crimeSubType', label: 'CrimeSubType' },
    { key: 'crimeName', label: 'CrimeName' },
  ];

  crimeForm = new FormGroup({
    crimeIdentificationNo: new FormControl('', [Validators.required]),
    crimeCategoryId: new FormControl('', [Validators.required]),
    crimeSubCategoryId: new FormControl('', [Validators.required]),
    crimeType: new FormControl('', [Validators.required]),
    crimeSubType: new FormControl('', [Validators.required]),
    crimeName: new FormControl('', [Validators.required]),
  });

  onEdit(value: any) {
    this.crimeForm.setValue({
      crimeIdentificationNo: value?.crimeIdentificationNo,
      crimeCategoryId: value?.crimeCategoryId,
      crimeSubCategoryId: value?.crimeSubCategoryId,
      crimeType: value?.crimeType,
      crimeSubType: value?.crimeSubType,
      crimeName: value?.crimeName,
    });
    this.main = value;
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } 
    this.http.delete(value, 'crimes').subscribe((res) => {});
    window.location.reload();
  }

  onClick() {
    this.modal = !this.modal;
  }
  onClick2() {
    this.modal2 = !this.modal2;
  }

  onUpdate() {
    const a = this.http
      .update(this.main?._id, [this.crimeForm.value], 'crimes')
      .subscribe((res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }

  onSubmit() {
    this.http.create(this.crimeForm.value, 'crimes').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.crimeForm.reset();
      window.location.reload();
    });
  }

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('crimes').subscribe((res:any) => {
      console.log(res)

    });
  }
}
