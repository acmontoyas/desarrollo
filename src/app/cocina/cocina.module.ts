import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaListComponent } from './cocina-list/cocina-list.component';
import { CocinaService } from './cocina.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CocinaListComponent],
  exports: [CocinaListComponent],
  providers: [CocinaService]
})
export class CocinaModule { }
