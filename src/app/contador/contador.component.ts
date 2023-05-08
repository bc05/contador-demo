import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  valor = 0;

  constructor(private contadorService: ContadorService) {}

  ngOnInit() {}

  lidarComAdicionar() {
    this.contadorService.adicionar();
  }
}
