import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SimpleToolsComponent } from './simple-tools/simple-tools.component';
import { ComplexToolsComponent } from './complex-tools/complex-tools.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SimpleToolsComponent,
    ComplexToolsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
