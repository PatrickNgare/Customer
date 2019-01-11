import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';
const routes:Routes=[
  {path:"customers",component:CustomersComponent},
  {path:"about",component:AboutComponent},
  {path:"orders",component:OrdersComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OrdersComponent,
    CustomersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
