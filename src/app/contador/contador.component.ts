import { Component, OnInit } from '@angular/core';
import { formControl } from '@angular/core/schematics/migrations/typed-forms/util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  valor = new FormControl<number>(null, [
    Validators.required,
    Validators.min(5),
  ]);

  form = new FormGroup({
    valor: this.valor,
  });

  constructor(private contadorService: ContadorService) {}

  ngOnInit() {
    this.valor.valueChanges.subscribe((novoValor) =>
      this.lidarComMudouValor(novoValor)
    );
  }

  lidarComMudouValor(novoValor) {
    if (this.form.valid) {
      this.contadorService.mudarValor(novoValor);
    }
  }
}
