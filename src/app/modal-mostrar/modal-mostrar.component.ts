import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../altas/altas.component';

@Component({
  selector: 'app-modal-mostrar',
  templateUrl: './modal-mostrar.component.html',
  styleUrls: ['./modal-mostrar.component.css']
})
export class ModalMostrarComponent implements OnInit {
  @Input() mostrar_personas: Persona[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
