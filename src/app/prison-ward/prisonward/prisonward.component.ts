import { Component, OnInit } from '@angular/core';
import { SmartSocietyServiceService } from 'src/app/shared/service/smart-society-service.service';


interface prisonwards {
  name: string;

}



@Component({
  selector: 'app-prisonward',
  templateUrl: './prisonward.component.html',
  styleUrls: ['./prisonward.component.css']
})
export class PrisonwardComponent implements OnInit {

  PRISONWARD =[] as any[]
  constructor(private http:SmartSocietyServiceService) { 
    
  }

  ngOnInit(): void {

    const a = this.http.findAll('prisonward').subscribe((res:any) => {
      console.log(res)

    });
    this.http.findAll('prisonward').subscribe(res=>{
      this.PRISONWARD=res
    })
  }

}
