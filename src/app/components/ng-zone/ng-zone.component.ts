import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss'],
})
export class NgZoneComponent implements OnInit {
  // valor que va a ir de 0% a 100%.
  progreso: number = 0;
  // Dentro o afuera de angular zone.
  texto: string = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  /**
   * Metodo para incrementar de 0 a 100 el valor del progreso
   * @param terminar callback que se ejecuta al terminar el incremento
   */
  incrementarProgreso(terminar: () => void) {
    if (this.progreso < 100) {
      this.progreso++;
      console.log(`Progreso Actual: ${this.progreso}%`);
      window.setTimeout(() => {
        //recursividad para seguir incrementando
        this.incrementarProgreso(terminar);
      }, 10);
    } else {
      // ya habria terminado de incrementarse, ejecutamos el callback
      terminar();
    }
  }

  /**
   *  Metodo que aumenta el progreso dentro de Ng Zone, esto implica que los cambios se ven en el HTML.
   */
  aumentarDentroNgZone() {
    this.texto = 'DENTRO';
    this.progreso = 0; // lo reiniciamos para la ejecucion
    this.incrementarProgreso(() =>
      console.log(`${this.texto} de Angular Zone : Incremento terminado!`)
    );
  }

  /** Metodo que aumenta el progreso afuera de Ng Zone, esto implica que los cambios no se van a ver en el HTMl hasta que volvamos a introducir el componente en el angular zone  */

  aumentarFueraNgZone() {
    this.texto = 'FUERA';
    this.progreso = 0; // lo reiniciamos para la ejecucion

    // ejecutamos fuera de angular zone
    this.ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        // Cuando termine de incrementar, es cuando pasamos a ejecutar en Angular zone de nuevo y volvemos a reacoplar el componente TS y HTML.
        this.ngZone.run(() =>
          console.log(`${this.texto} de Angular Zone : Incremento terminado!`)
        );
      });
    });
  }
}
