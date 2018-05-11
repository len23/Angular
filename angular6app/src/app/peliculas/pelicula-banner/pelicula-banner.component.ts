import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {
urlImagen = 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg';
descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  nombrePelicula = 'Tomb Raider';
descripcionPelicula = 'Alicia vikander,Walton Googins';
esEstreno= false;
textoEstreno:string;
claseEstreno:string;
constructor() { 

}

  ngOnInit() {
    if(this.esEstreno){
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-rosado'
    }else{
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

}
