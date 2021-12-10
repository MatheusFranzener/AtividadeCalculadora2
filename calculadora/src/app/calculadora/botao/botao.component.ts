import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  constructor() { }

  @Input() valor;
  @Output() clickBotao = new EventEmitter<string>();

  ngOnInit() {
  }

  clicouNaDiv(evento){
    this.clickBotao.emit(evento);
  }

}
