import { Component, OnInit } from '@angular/core';
import { ProductDataService  } from '../../services/product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData: any = [];
 
  

  constructor(private productService: ProductDataService, private router : ActivatedRoute){}

  ngOnInit(): void {
    //console.log(this.router.snapshot.params['id']);  
    this.productService.getProductById(this.router.snapshot.params['id'])
    .subscribe((res)=>{
      this.productData = res;
    })
  
    
  }

}
