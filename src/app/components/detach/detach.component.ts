import {
  Component,
  ChangeDetectorRef,
  Injectable,
  OnInit,
} from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root',
})
export class DataListProvider {
  // Metodo que devuelve una lista de nombre aleatorios
  //  @return { [] } Lista de nombres aleatorios

  get data() {
    const RandomName = Mock.Random;
    return [
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
    ];
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
})
export class DetachComponent implements OnInit {
  constructor(
    private _ref: ChangeDetectorRef,
    public dataListProvider: DataListProvider
  ) {}

  ngOnInit(): void {
    // Desacoplar el componente del HTML con el metodo Detach

    this._ref.detach();

    //  Cuando un componente esta desacoplado (TS y HTML) solo hay dos formas de decirle que replique los cambios en el HTML.
    // 1. detectChanges(); //  Detecta los cambios y los aplica en el HTML

    // 2. reattach(); //  Vuelve a acoplar el componente (TS y HTML)

    // Cada 3 segundos, le decimos a Angular que revise los nombres generados, es decir, que detecte los cambios que surgieron en el componente y los replique en el HTML.

    setInterval(() => {
      // Detectamos los cambios y reacomplamos puntualmente al componente.
      this._ref.detectChanges();
    }, 3000);
  }
}
