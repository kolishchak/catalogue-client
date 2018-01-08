import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category.component';
import { ItemDetailsComponent } from './components/item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/books/1', pathMatch: 'full' },
  { path: ':slug', redirectTo: ':slug/1'},
  { path: ':slug/:page', component: CategoryComponent },
  { path: 'items/:slug', component: ItemDetailsComponent }
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
