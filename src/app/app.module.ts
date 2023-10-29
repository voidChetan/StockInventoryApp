import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { StockComponent } from './pages/stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewSaleComponent,
    SaleListComponent,
    NewPurchaseComponent,
    PurchaseListComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
