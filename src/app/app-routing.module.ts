import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category.component';
import { ItemComponent } from './components/item.component';
//import { ItemDetailsComponent } from './components/item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'items', component: ItemComponent }
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
