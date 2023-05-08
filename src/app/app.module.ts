import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ContadorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
