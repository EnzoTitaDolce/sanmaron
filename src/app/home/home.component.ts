import { Component, ElementRef,ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  listaImagenes = ['axe.jpg','doveaerosol.jpg','dovepasta.jpg','oldspiceaerosol.jpg','oldspicebarra.jpg',
  'rexomamujer.jpg','rexona.jpg'];
  //listaPerfumes = ['cher.jpg','descarga.jpg','natura.jpg','prune.jpg']
  listaPerfumes = ['cher.png','channel.png','natura.png','prune.jpg']
  posicionActual:number = 0;
  nombreimagen:string ='';

  @ViewChild('imagenes') desodorante!:ElementRef
  @ViewChild('perfumes') perfumeses!:ElementRef
  constructor (){}
 ngAfterViewInit(): void {
  this.desodorante.nativeElement.innerHTML = `<img src="../../assets/img/desodorantes/${this.listaImagenes[this.posicionActual]}" alt="Imagen 1" class="carousel-images-img">'`
  this.perfumeses.nativeElement.innerHTML = `<img src="../../assets/img/perfumes/${this.listaPerfumes[this.posicionActual]}" alt="Imagen 1" class="carousel-images-img">'`
 }
ngOnInit():void{
    setInterval(()=>{
      if(this.posicionActual >= this.listaImagenes.length-1){
        this.posicionActual=0
      }else{
        this.posicionActual++
      }
      this.ngAfterViewInit()
    },2000)

  }

}


/*

*/
