import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category',
  templateUrl: '../templates/category.component.html',
  styleUrls: ['../styles/category.component.scss']
})

export class CategoryComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { 
    this.categories = this.categoryService.getCategories();
  }
  
  getCategories() {
    this.categoryService.getCategories()
  }

  ngOnInit() {
    this.getCategories()
  }

}
