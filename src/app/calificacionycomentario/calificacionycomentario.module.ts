import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionycomentarioListComponent } from './calificacionycomentario-list/calificacionycomentario-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionycomentarioListComponent],
  exports: [CalificacionycomentarioListComponent]
})
export class CalificacionycomentarioModule { }