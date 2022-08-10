import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close= new EventEmitter();
  @Input() openModal=''
  // @Input() opens=''


  constructor(private el:ElementRef) {
   // console.log(el.nativeElement)
   }
   displayStyle = "block";

   openPopup() {
     this.displayStyle = "block";
   }
   closePopup() {
     this.close.emit()
   }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
   this.el.nativeElement.remove()
  }


}
