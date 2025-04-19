import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { PerfumeriaService } from '../servicios/perfumeria.service';
import { CartService } from '../servicios/cart.service';


declare var $: any;

@Component({
  selector: 'app-perfumeria',
  templateUrl: './perfumeria.component.html',
  styleUrls: ['./perfumeria.component.css']
})
export class PerfumeriaComponent implements OnInit, AfterViewInit{
  data:any[] = []
  cart: any[] = [];
  marcas: any[] = [];
  filtroAnimal: string[] = [];
  filtroMarca: string[] = [];
  dataFiltrada: any[] = [];
  item: any;
  total:any;
  totalGeneral:number = 0;
  searchQuery:string ='';
  isLoading:boolean = true;


  constructor(private perfumeriaService:PerfumeriaService, private cartService: CartService){}

  ngAfterViewInit():void{

  }

  mostrarOcultar(): void {
  }

  ngOnInit(): void {

    this.perfumeriaService.getData().subscribe((data: any[])=>{//solicita la data
      this.data = data;//la carga en el array data
      for (let item of data){
        console.log(item.Producto)
      }
      this.dataFiltrada = this.data//originalmente la data filtrada es igual a la data
      this.cart = this.cartService.getCart();
      this.isLoading = false
    })

    this.cart = this.cartService.getCart().map(item =>({
      ...item,quantity:1,
      total: item.PRECIO
    }))
    this.totalGeneral = this.cartService.getTotal();
  }

  filteredData(){
    if (this.searchQuery.trim() === '') {
      this.dataFiltrada = this.data;  // Si no hay búsqueda, mostrar todos los productos
    } else {
      const searchRegex = new RegExp(this.searchQuery.trim().replace(/\s+/g, '.*'), 'i'); // 'i' para no distinguir entre mayúsculas y minúsculas
    this.dataFiltrada = this.data.filter(item =>
      searchRegex.test(item.Producto)
      );
  }}




  actualizarCantidad(item: any): void {
    this.totalGeneral = this.cartService.getTotal();
      }

  calcularTotalGeneral(): void {
    this.totalGeneral = this.cartService.getTotal();
  }
  filtrarDatos(): void {
    if (this.filtroAnimal.length === 0 && this.filtroMarca.length === 0) {
      this.dataFiltrada = this.data;
      return;
    }

    this.dataFiltrada = this.data.filter(item => {
    });
  }
  toggleItemSelection(item: any): void {
    if (this.isChecked(item)) {
      this.cartService.removeFromCart(item);
    } else {
      this.cartService.addToCart(item);
    }
    this.cart = this.cartService.getCart();
  }
  updateQuantity(item:any){}
  closeCart(): void{
    $('#cartModal').modal('hide')
  }
  openCart(): void{

    for (let item of this.cart){

      if(item.quantity == undefined){
        item.quantity = 1
      }
      this.total+=item.PRECIO
    }
    $('#cartModal').modal('show')
    this.totalGeneral = this.cartService.getTotal()

  }
  isChecked(item: any): boolean {
    return this.cartService.isInCart(item);
  }
  removeItemFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();  // Update local cart variable
    this.total-=item.Costo
    this.totalGeneral = this.cartService.getTotal();
  }

  sendWhatsApp(): void {
    let message = 'Hola, quisiera comprar:\n';
    for (let item of this.cart) {
      if (item.quantity == undefined){
        item.quantity = 1
      }
      message += `\n- ${item.DESCRIPCION} x ${item.quantity} unidades\n`;
    }
    message += `por un total de $ ${(this.totalGeneral*0.985).toFixed(2)}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+543816151809&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }

}
