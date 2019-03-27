export class Suspension {
 

id: number;
vigente: boolean;
comentarios: string;
numeroDias: number;

constructor(id:number, vig:boolean, coment:string, numDias:number){
this.id=id;
this.vigente=vig;
this.comentarios=coment;
this.numeroDias=numDias;
}
}
