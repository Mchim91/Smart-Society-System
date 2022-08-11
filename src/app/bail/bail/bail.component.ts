import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.css']
})
export class BailComponent implements OnInit {

  constructor(private http: SmartSocietyServiceService) { }

  ngOnInit(): void {
    const a = this.http.findAll('bail').subscribe((res:any) => {
      console.log(res)

    });
  }

}
