import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-baseentity',
  templateUrl: './baseentity.component.html',
  styleUrls: ['./baseentity.component.css']
})
export class BaseentityComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('baseentity').subscribe((res:any) => {
      console.log(res)

    });
  }

}
