import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';


@Component({
  selector: 'app-courtcharge',
  templateUrl: './courtcharge.component.html',
  styleUrls: ['./courtcharge.component.css']
})
export class CourtchargeComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('courtcharge').subscribe((res:any) => {
      console.log(res)

    });
  }

}
