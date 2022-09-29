import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../altas/altas.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnChanges{
  @Input() personas: Persona[] = [];
  arreglo_5_usuarios: Persona[] = [];
  parentSelector: boolean = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("si_tablas")
  }

  palomita = false;
  palomitas(valor: number)
  {
    this.palomita = this.personas[valor].permitir;
    this.personas[valor].permitir = !this.palomita;
    console.log("palomitas:")
    console.log(this.personas);
    console.log("---------")
  }
  usuarios(e: Persona[])
  {
    this.arreglo_5_usuarios = e;
  }
  checks_total = 0;
  cambio_check($event: any)
  {
    const id = $event.target.value;
    const isChecked  = $event.target.checked;
    this.checks_total = 0;
    if(id != -1)
    {
      this.personas = this.personas.map((d) =>
      {
        if(d.id == id)
        {
          d.permitir = isChecked;
        }
        if(d.permitir == true)
        {
          this.checks_total++;
      
          if(this.checks_total == this.personas.length)
          {
            this.parentSelector = true;
          }
          if(this.checks_total <= this.personas.length - 1)
          {
            this.parentSelector = false;
          }
        }
        console.log("checks_palo: " + this.checks_total + "cant: " + this.personas.length)
        return d;
      });
    }
    else if(id == -1)
    {
      this.personas = this.personas.map((d) =>
      {
        d.permitir = this.parentSelector;
        return d;
      });
    }
  }
}