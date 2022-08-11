import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-causeofcrime',
  templateUrl: './causeofcrime.component.html',
  styleUrls: ['./causeofcrime.component.css']
})
export class CauseofcrimeComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('causeofcrime').subscribe((res:any) => {
      console.log(res)

    });
  }

}
