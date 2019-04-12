import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionycomentarioListComponent } from './calificacionycomentario-list/calificacionycomentario-list.component';
import { CalificacionycomentarioService } from './calificacionycomentario.service';
import { FormsModule } from '@angular/forms';
import { CalificacionycomentarioCreateComponent } from './calificacionycomentario-list/calificacionycomentario-create/calificacionycomentario-create.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CalificacionycomentarioListComponent, CalificacionycomentarioCreateComponent],
  exports: [CalificacionycomentarioListComponent],
  providers: [CalificacionycomentarioService]
})
export class CalificacionycomentarioModule { }