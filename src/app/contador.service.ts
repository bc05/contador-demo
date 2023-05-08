import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private contadorSubject = new Subject<number>();

  constructor() {}

  adicionar(): void {
    this.contadorSubject.next(1);
  }

  obterObservable(): Observable<number> {
    return this.contadorSubject.asObservable();
  }
}
