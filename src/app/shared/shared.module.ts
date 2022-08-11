import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    InputComponent,
    ModalComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    TableComponent,
    InputComponent,
    ModalComponent
  ]
})
export class SharedModule { }
