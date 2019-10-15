import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectItemComponent } from './select-item/select-item.component';
import { DispenseItemComponent } from './dispense-item/dispense-item.component';
import { InsertCoinComponent } from './insert-coin/insert-coin.component';
import { ItemsComponent } from './items/items.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectItemComponent,
    DispenseItemComponent,
    InsertCoinComponent,
    ItemsComponent
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
