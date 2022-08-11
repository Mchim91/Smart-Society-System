import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

interface bail{
    crimeOffendersId: number;
    bailDate: Date;
    bailerName: string;
    bailerPhoneNumber: Number;
    bailerAdress: string;
    bailerEmail: string;
    bailBond: string;
}

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.css']
})
export class BailComponent implements OnInit {

  Bail =[] as any[]
  constructor(private http:SmartSocietyServiceService) { }

  ngOnInit(): void {
    this.http.findAll('bail').subscribe(res=>{
      this.Bail=res
    })
  }

}
