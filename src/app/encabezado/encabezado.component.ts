import { Component } from '@angular/core';
import { ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit, AfterViewInit {
  @ViewChild('listaMenu') menuLista!:ElementRef
  ngOnInit(): void {

  }

  constructor(){
  }
  ngAfterViewInit():void{
    this.menuLista.nativeElement.classList.add('hidden');
  }

  mostrarOcultar(): void {
    this.menuLista.nativeElement.classList.toggle('hidden');
  }

}
