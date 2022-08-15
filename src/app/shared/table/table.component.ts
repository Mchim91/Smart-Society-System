import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table=false
  @Input() data=[]as any
  @Input() header=[] as any
  @Input() classNames=''

  @Output() emitEdit = new EventEmitter<any>();

  @Output() emitDelete = new EventEmitter<any>();
  @Output() onDetail = new EventEmitter<any>();



    constructor() { }

    ngOnInit(): void {
      if(this.data.length > -1){
        return
      }
      console.log("ds")
      this.table=true
      console.log(this.table)

    }
d='d'
    c(d:string){




    }


}
