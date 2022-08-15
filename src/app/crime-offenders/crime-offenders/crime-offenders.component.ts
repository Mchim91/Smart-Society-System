import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-crime-offenders',
  templateUrl: './crime-offenders.component.html',
  styleUrls: ['./crime-offenders.component.css']
})
export class CrimeOffendersComponent implements OnInit {
  CrimeOffenders=[]as any[]
  constructor(private http: SmartSocietyServiceService,private rout:ActivatedRoute) {
    this.CrimeOffenders=rout.snapshot.data['crimeoffenders']
     this.getId()
   }

  ngOnInit(): void {
    this.getId()


  }

  getId(){

      this.rout.data.subscribe(({crimeoffenders})=>{
        this.CrimeOffenders=crimeoffenders
        console.log(crimeoffenders)
      })
    }



  }
// const a = this.http.findAll('crimeOffenders').subscribe((res:any) => {
//       console.log(res)

//     });
