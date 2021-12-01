import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private myAlertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi"
  filterText = ""

  products: Product[] = [
    /*{id:1,name:"Kondansatör",price:2500,categoryID:1,description:"Toshiba",imageUrl:'https://images.unsplash.com/photo-1583199873815-b58ce30591ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'},
    {id:2,name:"Entegre",price:25,categoryID:2,description:"Toshiba",imageUrl:'https://images.unsplash.com/photo-1568209865332-a15790aed756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {id:3,name:"Ampul",price:2500,categoryID:3,description:"Toshiba",imageUrl:'https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'},
    {id:4,name:"Direnç",price:25,categoryID:4,description:"Toshiba",imageUrl:'https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {id:5,name:"Direnç",price:25,categoryID:5,description:"Toshiba",imageUrl:'https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
    */
    
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["CatID"]).subscribe(data => {
        this.products = data
      })
    })
  }

  addToChart(p: Product) {
    this.myAlertifyService.success("Sepete Eklendi" + " " + p.name)

  }

}
  