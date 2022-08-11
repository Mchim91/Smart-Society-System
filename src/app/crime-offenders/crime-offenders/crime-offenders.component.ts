import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-crime-offenders',
  templateUrl: './crime-offenders.component.html',
  styleUrls: ['./crime-offenders.component.css']
})
export class CrimeOffendersComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('crimeOffenders').subscribe((res:any) => {
      console.log(res)

    });
  }

}
