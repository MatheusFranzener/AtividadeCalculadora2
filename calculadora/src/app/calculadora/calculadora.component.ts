import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resultado = "";

  pegarValor(evento) {   /* vai realizar as operações quando clicar na div '=' */
    if (evento == "=") {
      this.resultado = eval(this.resultado);
    } else {
      this.resultado += evento;
    }
  }



}
