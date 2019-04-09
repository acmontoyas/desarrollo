import{Suspension} from './suspension'

export class SuspensionDetail extends Suspension
{
   /**
    * la vigencia de la suspension
    */
  vigente: boolean;

   /**
    * comentarios de la suspension
    */
  comentarios: string;

   /**
    * numero de dias de la suspension
    */
  numeroDias: number;
}