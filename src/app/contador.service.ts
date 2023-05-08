import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private contadorSubject = new Subject<number>();

  constructor() {}

  mudarValor(valor: number): void {
    this.contadorSubject.next(valor);
  }

  obterObservable(): Observable<number> {
    return this.contadorSubject.asObservable();
  }
}
