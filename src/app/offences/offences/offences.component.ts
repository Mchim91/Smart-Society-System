import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-offences',
  templateUrl: './offences.component.html',
  styleUrls: ['./offences.component.css']
})
export class OffencesComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('offences').subscribe((res:any) => {
      console.log(res)

    });
  }

}
