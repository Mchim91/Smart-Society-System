import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-correctioncenters',
  templateUrl: './correctioncenters.component.html',
  styleUrls: ['./correctioncenters.component.css']
})
export class CorrectioncentersComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('correctioncenters').subscribe((res:any) => {
      console.log(res)

    });
  }

}
