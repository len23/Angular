import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  colorActual = 'Celeste';
  colorClase='alert alert-primary';


  constructor() { }

  ngOnInit() {
  }

  cambiarColor(){
    if(this.colorActual==='Celeste'){
      this.colorActual="Rojo";
      this.colorClase="alert alert-danger";
  }else if(this.colorActual==='Rojo'){
    this.colorActual="Amarillo";
    this.colorClase="alert alert-warning";
  }else if(this.colorActual="Amarillo"){
    this.colorActual="Celeste";
    this.colorClase="alert alert-primary";

  }

}
}
