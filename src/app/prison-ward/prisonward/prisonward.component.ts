import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';


@Component({
  selector: 'app-prisonward',
  templateUrl: './prisonward.component.html',
  styleUrls: ['./prisonward.component.css']
})
export class PrisonwardComponent implements OnInit {
  openModal='none'
  duration=0
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'name', label: 'Name'},
  ];
  constructor(private http: SmartSocietyServiceService) { }
  ngOnInit(): void {
  }

  prisonwardForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
  });

  onClickOpenModalAdd(){this.openModal='block'}

  onClickCloseModalAdd(){
    this.openModal='none'
  }
  onSubmit(){
    this.http.create(this.prisonwardForm.value, 'prisoward').subscribe((res) => {
      console.log(res);
      this.prisonwardForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    this.openModal='none';
    this.prisonwardForm.setValue({
      name: value?.name
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
