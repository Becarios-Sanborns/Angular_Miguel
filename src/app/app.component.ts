import { Component} from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from './altas/altas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular_primer_proyecto';
  personas: Persona[] = [];
  private enviar_arreglo = new Subject<any>();

  enviar_arreglo_observable = this.enviar_arreglo.asObservable();

  padre(e: Persona[])
  {
    this.personas = e;
    this.enviar_arreglo.next(this.personas);
  }
}
