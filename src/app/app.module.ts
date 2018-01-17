import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ApiService, ErrorService, CategoryService, ItemService } from './shared/services';

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
    ApiService,
    ErrorService,
    CategoryService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
