import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products= [
    { id: 1, name: 'computer', price: 1000, selected: true },
    { id: 2, name: 'Printer', price: 5000, selected: false },
    { id: 3, name: 'Smartphone', price: 1300, selected: true },
  ];

  getAllProducts() {
    return this.products;
  }

  deleteProduct(product: any) {
    let v = confirm('vous etes sure de vouloir supprimer ce produit ?');
    if (v == true) {
      this.products = this.products.filter((p: any) => p.id != product.id);
      alert('produit supprimé avec succès');
    }
  }
}
