import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';


@Component({
  selector: 'app-prisonward',
  templateUrl: './prisonward.component.html',
  styleUrls: ['./prisonward.component.css']
})
export class PrisonwardComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration=0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'name', label: 'Name'},
  ];
  constructor(private http: SmartSocietyServiceService) { }
  ngOnInit(): void {
    const a = this.http.findAll('prisonward').subscribe((res) => {
      this.data = res;
    });
  }

  prisonwardForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
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
    this.prisonwardForm.reset();
  }

  onUpdate(){
    console.log(this.prisonwardForm.value)
    if(this.prisonwardForm.invalid){
      return
    }this.http.update(this.main._id,this.prisonwardForm.value,'prisonward').subscribe((res) => {
      console.log(res);
      this. ngOnInit()
      this.openModal2='none'
    });
  }
  onSubmit(){
    this.http.create(this.prisonwardForm.value, 'prisonward').subscribe((res) => {
      console.log(res);
      this.prisonwardForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.onClickOpenModal2Add()
    this.prisonwardForm.setValue({
      name: value?.name,
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
