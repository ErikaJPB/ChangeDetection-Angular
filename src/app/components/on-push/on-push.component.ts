import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],

  // Cambio en la vista cuando se detecta un cambio en el componente.

  // changeDetection: ChangeDetectionStrategy.Default,

  // La vista no se va a actualizar cuando se detecte un cambio en las propiedades del componente que no sean de entrada o cuando se detecte un cambio en el componente que no sea un evento. La vista solo va a renderizar una sola vez y no va a estar cambiando.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  // Variable que tiene un valor que se va a incrementar cada segundo en el archivo TS y que dependiendo de la estrategia de detección de cambios que se use, se va a actualizar o no en el HTML.
  segundos: number = 0;

  ngOnInit() {
    // Se va a incrementar la variable segundos cada segundo.
    setInterval(() => {
      this.segundos++;
      console.log(`Segundos transcurridos: ${this.segundos}`);
    }, 1000);
  }
}
