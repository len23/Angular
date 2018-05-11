import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({//ste es un modulo
  declarations: [ //
    AppComponent //Al menos debe de haber un componente.
  ],// Se definen todos los componentes a usarse
  imports: [
    BrowserModule
  ],//Se definen todos los módulos
  providers: [], // Se definen los servicios. 
  bootstrap: [AppComponent] // Componente Principal
})
export class AppModule { }
