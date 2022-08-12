import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-correctioncenters',
  templateUrl: './correctioncenters.component.html',
  styleUrls: ['./correctioncenters.component.css']
})
export class CorrectioncentersComponent implements OnInit {
  openModal='none';
  openModal2 = 'none';
  duration=0;
  main = [] as any;
  data = [] as any;

  header = [
    { key: 'name', label: 'Name'},
    { key: 'prisonType', label: 'Prison Type'}
  ];

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('correctioncenters').subscribe((res:any) => {
      this.data =
      console.log(res)

    });
  }

  correctioncenterForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
    prisonType: new FormControl('', [Validators.required]),
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
    this.correctioncenterForm.reset();
  }

  onUpdate() {
    if(this.correctioncenterForm.invalid){
      return
    }this.http.update(this.main._id,this.correctioncenterForm.value,'correctioncenters').subscribe((res) => {
      console.log(res);
      this. ngOnInit()
      this.openModal2='none'
    });  
  }
  onSubmit(){
    this.http.create(this.correctioncenterForm.value, 'correctioncenters').subscribe((res) => {
      console.log(res);
      this.correctioncenterForm.reset();
      this.openModal='none'
    });

  }

  onEdit(value: any){
    console.log("d")
    this.onClickOpenModal2Add()
    this.correctioncenterForm.setValue({
      name: value?.name,
      prisonType: value?.prisonType
    });
    this.main = value;
  }

  onDelete(value: any){
    if(!value) {
      console.log('not found');
      return;
    }
    this.http.delete(value, 'correctioncenters').subscribe((res) =>{});
    window.location.reload();
  }
}
