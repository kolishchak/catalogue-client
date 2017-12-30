import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category.component';
import { ItemComponent } from './components/item.component';
import { ItemDetailsComponent } from './components/item-details.component';

import { CategoryService } from './services/category.service';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    BrowserModule
  ],
  providers: [
    CategoryService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
