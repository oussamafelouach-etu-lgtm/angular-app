import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [NgForOf, NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }
  handleDelete(product: any) {
    this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }


