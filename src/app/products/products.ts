import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgForOf,NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products :any;
  constructor() {
  }
  ngOnInit():void {

  }

  handleDelete(product: any) {
    let v= confirm("vous etes sure de vouloir supprimer ce produit ?");
    if(v==true){
      this.products=this.products.filter((p:any)=>p.id != product.id);
      alert('produit supprimé avec succès');
    }


  }
}

