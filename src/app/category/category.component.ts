import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent {

  constructor(private categoryService:CategoryService) { }
  title = "Kategori Listesi"

  categories: Category[] = [];

  ngOnInit() { 

    this.categoryService.getProducts().subscribe(data=>{
      this.categories=data
    });
  }
}
