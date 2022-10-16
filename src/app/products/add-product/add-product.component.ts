import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductForm =this.formBuilder.group({

      id: [''],
      productName: [''],
      categoryId: [''],
      description: [''],
      price: [''],
      is_available: [''],
      productImg: [''],
      rating: [''],
      review: [''],
      vendor_name: [''],
      warranty: ['']

  })

  constructor(private formBuilder:FormBuilder,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
   var newProduct={
    id: this.addproductForm.value.id,
      productName: this.addproductForm.value.productName,
      description: this.addproductForm.value.description,
      categoryId: this.addproductForm.value.categoryId,

      price: this.addproductForm.value.price,
      is_available: this.addproductForm.value.is_available,
      productImg: this.addproductForm.value.productImg,
      rating: this.addproductForm.value.rating,
      review: this.addproductForm.value.review,
      vendor_name: this.addproductForm.value.vendor_name,
      warranty: this.addproductForm.value.warranty
   }
    this.productService.addProduct(newProduct)
    .subscribe((data)=>{
      alert('New product added successfully')
      this.router.navigateByUrl('products')
    })
  }

}
