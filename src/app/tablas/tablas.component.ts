import { Component, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from '../altas/altas.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent{
  @Input() personas: Persona[] = [];
  arreglo_5_usuarios: Persona[] = [];
  parentSelector: boolean = false;

  constructor(private comunicacion3: AppComponent) { }

  ngOnInit(): void {
    this.comunicacion3.enviar_arreglo_observable.subscribe(personas =>{
      this.parentSelector = false;
    })
  }

  private enviar_arreglo_ = new Subject<any>();

  enviar_arreglo_observable_ = this.enviar_arreglo_.asObservable();

  palomita = false;
  borrar(persona: any)
  {
    console.log(persona.id + " j");
    var cont = 0;
    this.personas.map((d) =>
    {
      if(persona.id == d.id)
      {
        console.log(d);
        this.personas.splice(cont, 1);
        this.enviar_arreglo_.next(this.personas);
      }
      cont++;
      return d;
    });
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
      this.personas.forEach((d) =>
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
      });
    }
    else if(id == -1)
    {
      this.personas.forEach( (valor, indice) => {
        valor.permitir = this.parentSelector;
      })
    }
  }
}