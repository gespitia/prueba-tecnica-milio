import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderOptionsComponent } from './header-options/header-options.component';
import { CardPerfilComponent } from './card-perfil/card-perfil.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaymentNotificationsComponent } from './payment-notifications/payment-notifications.component';



@NgModule({
  declarations: [
    InputComponent,
    MenuComponent,
    HeaderOptionsComponent,
    CardPerfilComponent,
    TableComponent,
    PaginatorComponent,
    PaymentNotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaymentNotificationsComponent,
    PaginatorComponent,
    MenuComponent,
    TableComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
