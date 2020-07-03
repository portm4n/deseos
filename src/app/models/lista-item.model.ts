import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class ListaItem {
  desc: string;
  completado: boolean;
  constructor(desc: string) {
    this.desc = desc;
    this.completado = false;
  }
}
