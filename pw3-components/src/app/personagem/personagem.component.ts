import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
ocultar = true;
  constructor() {}
    @Input() nome: string = "";
    @Input() palisman: string = "";
    @Input() ehPalisman: boolean = true;
    @Input() nivel : number = 0;



}
