import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';
<<<<<<< HEAD

interface bail{
    crimeOffendersId: number;
    bailDate: Date;
    bailerName: string;
    bailerPhoneNumber: Number;
    bailerAdress: string;
    bailerEmail: string;
    bailBond: string;
}
=======
>>>>>>> 7b3819fc52f52a7b13f1aecb460a167d7c64f27a

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.css']
})
export class BailComponent implements OnInit {

<<<<<<< HEAD
  Bail =[] as any[]
  constructor(private http:SmartSocietyServiceService) { }

  ngOnInit(): void {
    this.http.findAll('bail').subscribe(res=>{
      this.Bail=res
    })
=======
  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('bail').subscribe((res:any) => {
      console.log(res)

    });
>>>>>>> 7b3819fc52f52a7b13f1aecb460a167d7c64f27a
  }

}
