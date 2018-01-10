import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category.component';
import { ItemsListComponent } from './components/items-list.component';
import { ItemDetailsComponent } from './components/item-details.component';

import { CategoryService } from './services/category.service';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemsListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    CategoryService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
