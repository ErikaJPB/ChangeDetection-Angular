import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ChangeDetection';

  // Variable para el ejemplo del Reattach
  live: boolean = true;

  // Valores para el ejemplo de AsyncPipe
  items = [
    {
      numero: 0,
    },
  ];
  // observable, le pasamos un valor por defecto
  items$ = new BehaviorSubject(this.items);

  addItem() {
    const nuevoItem = Math.floor(Math.random() * 100) + 1;

    this.items.push({ numero: nuevoItem });

    // Emitimos un nuevo valor de la lista de items al componente suscrito.
    this.items$.next(this.items);
  }
}
