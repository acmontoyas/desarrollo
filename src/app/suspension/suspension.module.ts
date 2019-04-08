import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionListComponent } from './suspension-list/suspension-list.component';
import { SuspensionService } from './suspension.service';
import { SuspensionDetailComponent } from './suspension-detail/suspension-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [SuspensionListComponent, SuspensionDetailComponent],
  exports: [SuspensionListComponent],
  providers: [SuspensionService]
})
export class SuspensionModule { }