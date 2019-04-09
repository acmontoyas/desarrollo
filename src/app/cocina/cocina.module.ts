import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaListComponent } from './cocina-list/cocina-list.component';
import { CocinaService } from './cocina.service';
import { CocinaDetailComponent } from './cocina-detail/cocina-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,  AppRoutingModule
  ],
  declarations: [CocinaListComponent, CocinaDetailComponent],
  exports: [CocinaListComponent],
  providers: [CocinaService]
})
export class CocinaModule { }
