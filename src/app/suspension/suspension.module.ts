import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionListComponent } from './suspension-list/suspension-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuspensionListComponent],
  exports: [SuspensionListComponent]
})
export class SuspensionModule { }