import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    TableComponent,
    InputComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TableComponent,
    InputComponent,
    ModalComponent
  ]
})
export class SharedModule { }
