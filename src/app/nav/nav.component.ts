import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('listaMenu') menuLista!:ElementRef
  ngOnInit(): void {

  }
  constructor(){}
  ngAfterViewInit():void{
    this.menuLista.nativeElement.classList.add('hidden');
  }

  mostrarOcultar(): void {
    this.menuLista.nativeElement.classList.toggle('hidden');
  }

}
