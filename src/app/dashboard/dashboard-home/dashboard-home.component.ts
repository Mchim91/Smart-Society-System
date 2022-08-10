import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;

  // constructor(private observer: BreakpointObserver) { }

  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //      this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.close();
  //      }
  //   });
  // }

}
