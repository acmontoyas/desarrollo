import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaListComponent } from './cocina-list/cocina-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CocinaListComponent],
  exports: [CocinaListComponent]
})
export class CocinaModule { }