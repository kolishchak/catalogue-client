import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category.component';
import { ItemComponent } from './components/item.component';
//import { ItemDetailsComponent } from './components/item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: ':slug', component: CategoryComponent },
  { path: 'items/:slug', component: ItemComponent }
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
