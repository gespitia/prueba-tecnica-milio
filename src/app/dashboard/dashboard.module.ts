import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TableComponent } from '../components/table/table.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { PaymentNotificationsComponent } from '../components/payment-notifications/payment-notifications.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    HomeComponent,
    MenuComponent,
    TableComponent,
    PaginatorComponent,
    PaymentNotificationsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent,
    PaymentsComponent,
    HomeComponent
  ]
})
export class DashboardModule { }
