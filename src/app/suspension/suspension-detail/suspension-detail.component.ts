import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router,  Params} from '@angular/router';
import { SuspensionService } from '../suspension.service';
import {SuspensionDetail} from '../suspension-detail';
import { Suspension } from '../suspension';

@Component({
  selector: 'app-suspension-detail',
  templateUrl: './suspension-detail.component.html',
  styleUrls: ['./suspension-detail.component.css']
})
export class SuspensionDetailComponent implements OnInit {


 /**
  * The component's constructor
  * @param suspensionService The suspension's service
  * @param route The route element which helps to obtain the suspension's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(private suspensionService:SuspensionService, private route:ActivatedRoute) { }


 /**
  * The suspension whose details we want to show
  */
suspensionDetail: SuspensionDetail;

 /**
  * The suspension's id retrieved from the address
  */
@Input() suspension_id:number;
loader:any;


    getSuspensionDetail(): void {
        this.suspensionService.getSuspensionDetail(this.suspension_id)
            .subscribe(suspensionDetail => {
                this.suspensionDetail = suspensionDetail;
            });
    }

 onLoad(params){
    this.suspension_id=parseInt(params['ìd']);
    this.suspensionDetail =new SuspensionDetail();
    this.getSuspensionDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params))
  }

    ngOnDestroy() {
            this.loader.unsubscribe();
        }

}