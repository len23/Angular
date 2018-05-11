import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // Selector o etiqueta donde se va a cargar el componente
  templateUrl: './app.component.html', // Estructura 
  styleUrls: ['./app.component.css'] // Estilos
})
export class AppComponent {
  nombre = 'Lenin';
  apellido = 'Montalvo';
  edad=90;
  sueldo=10000034645;
  fechaNacimiento = new Date('2005-4-4');

  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';


  cambiarClaseDeTitulo(){

    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if(nombreClaseEsTitulo){
      this.nombreClase = 'sa-subtitulo';
    }else {
      this.nombreClase = 'sa-titulo';
    }

  }

  aplicarClase(valorInput:string){

    this.nombreClase = valorInput;

  }


}
