import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-baseentity',
  templateUrl: './baseentity.component.html',
  styleUrls: ['./baseentity.component.css']
})
export class BaseentityComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration=0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'createdAt', label: 'Created at'},
    { key: 'modifyById', label: 'modify by'},
    { key: 'modifiedAt', label: 'modified at '}
  ];
  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('baseentity').subscribe((res:any) => {
      this.data = res;
      console.log(res)

    });
  }

  baseentityForm = new FormGroup({

  
    createdAt: new FormControl('', [Validators.required]),
    modifyById: new FormControl('', [Validators.required]),
    modifiedAt: new FormControl('', [Validators.required]),
  });

  onClickOpenModalAdd(){

    this.openModal='block'
  
  }

  onClickOpenModalAdd2(){
     this.openModal2='block'
  }

  onClickCloseModalAdd(){
    this.openModal='none'
  }

  onUpdate() {
    const a = this.http
      .update(this.main?._id, [this.baseentityForm.value], 'baseentity')
      .subscribe((res) => {});
    this.openModal2 = 'none';
    window.location.reload();
  }
  onSubmit(){
    this.http.create(this.baseentityForm.value, 'baseentity').subscribe((res) => {
      console.log(res);
      this.baseentityForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.openModal2='none';
    this.baseentityForm.setValue({
      createdAt: value?.createdAt,
      modifyById: value?.modifyById,
      modifiedAt: value?.modifiedAt
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'baseentity').subscribe((res) =>{});
    window.location.reload();
  }

}
