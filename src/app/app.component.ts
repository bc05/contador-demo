import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private contadorService: ContadorService) {}

  ngOnInit() {
    this.contadorService.adicionar();

    this.contadorService.obterObservable().subscribe((valor) => {
      console.log('valor adicionado', valor);
    });
  }
}
