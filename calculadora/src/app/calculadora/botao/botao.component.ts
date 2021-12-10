import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  constructor() { }

  @Input() valor;
  @Output() clickBotao = new EventEmitter<any>();

  ngOnInit() {
  }

  clicouNaDiv(){
    this.clickBotao.emit({nome:'Matheus'});
  }

}
