import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SuspensionListComponent} from '../suspension/suspension-list/suspension-list.component';
import {CocinaListComponent} from '../cocina/cocina-list/cocina-list.component';
import {CalificacionycomentarioListComponent} from '../calificacionycomentario/calificacionycomentario-list/calificacionycomentario-list.component';
import {SuspensionDetailComponent } from '../suspension/suspension-detail/suspension-detail.component';


const routes: Routes = [

    {
        path: 'suspensiones',
        children: [
            {
                path: 'list',
                component: SuspensionListComponent
                
            },
            {
                path: ':id',
                component: SuspensionDetailComponent,
                outlet: 'detail'
            }
        ]
    }
    
];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'} )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }