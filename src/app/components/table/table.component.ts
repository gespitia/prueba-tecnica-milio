import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  sortOrder: string ='desc'
  colums = ['Pago', 'Proveedor', 'Categoría', 'Vence', 'Valor', 'Responsable', 'Estado']
  pagos =[
    {
      id:'FE1658568',
      cuotas:'12',
      proveedor:{
        nombre:'Clínica Uno',
        nit:'NIT 901300200',
        categoria:'Servicios de salud'
      },
      vence:'20/02/2022',
      valor:'$200.000',
      responsable:{
        nombre:'Jesús Caldas',
        cargo:'Administrador'
      },
      estado:'Por pagar'
    },
    {
      id:'1658568',
      cuotas:'2',
      proveedor:{
        nombre:'Consulting',
        nit:'NIT 901300200',
        categoria:'Legal'
      },
      vence:'20/02/2022',
      valor:'$200.000',
      responsable:{
        nombre:'Jesús Caldas',
        cargo:'Administrador'
      },
      estado:'Por pagar'
    },
    {
      id:'FE1658568',
      cuotas:'12',
      proveedor:{
        nombre:'Clínica Uno',
        nit:'NIT 901300200',
        categoria:'Servicios de salud'
      },
      vence:'20/02/2022',
      valor:'$200.000',
      responsable:{
        nombre:'Jesús Caldas',
        cargo:'Administrador'
      },
      estado:'Por pagar'
    },
  ]

  filtro: string = '';
  paginaActual: number = 1;
  elementosPorPagina: number = 5;

  constructor() { }

  buscar(): void {
    // Lógica de búsqueda
  }

  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
  }

  onPageChange(page: number) {
    // Aquí puedes manejar el cambio de página, por ejemplo, actualizar los datos en tu tabla
    console.log('Página actual:', page);
    // Realiza las acciones necesarias según tu lógica de negocio
  }

  toggleSortOrder(){

  }
}
