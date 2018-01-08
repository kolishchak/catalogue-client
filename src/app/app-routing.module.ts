import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category.component';
import { ItemDetailsComponent } from './components/item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/books/1', pathMatch: 'full' },
  { path: 'items/:slug', component: ItemDetailsComponent },
  { path: ':slug/:page', component: CategoryComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
