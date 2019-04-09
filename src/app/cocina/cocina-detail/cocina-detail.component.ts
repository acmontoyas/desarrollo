import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router,  Params} from '@angular/router';
import { CocinaService } from '../cocina.service';
import {CocinaDetail} from '../cocina-detail';
import { Cocina } from '../cocina';

@Component({
  selector: 'app-cocina-detail',
  templateUrl: './cocina-detail.component.html',
  styleUrls: ['./cocina-detail.component.css']
})
export class CocinaDetailComponent implements OnInit {

 /**
  * The component's constructor
  * @param cocinaService The Cocina's service
  * @param route The route element which helps to obtain the Cocina's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(private cocinaService:CocinaService, private route:ActivatedRoute) { }


 /**
  * The Cocina whose details we want to show
  */
cocinaDetail: CocinaDetail;

 /**
  * The Cocina's id retrieved from the address
  */
@Input() cocina_id:number;
loader:any;


  getCocinaDetail(): void {
        this.cocinaService.getCocinaDetail(this.cocina_id)
            .subscribe(cocina => {
                this.cocinaDetail = cocina;
            });
    }


onLoad(params){
    this.cocina_id=parseInt(params['ìd']);
    this.cocinaDetail =new CocinaDetail();
    this.getCocinaDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params))
  }

    ngOnDestroy() {
            this.loader.unsubscribe();
        }

}