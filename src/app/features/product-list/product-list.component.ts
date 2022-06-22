import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productData: any;
  addNewProduct: FormGroup;
  isStockUnitsAvailable : boolean = false;

  /*Regular Expression for validations on fields*/
  alphNumPattern = '^[a-zA-Z0-9]*';
  floatNumPattern = '[-+]?[0-9]*.?[0-9]*';
  numPattern = '^[0-9]*$';
  maxDate: any = '2022-04-20';

  constructor(
    private productService: ProductDataService,
    private fb: FormBuilder
  ) {
    // this.productService.fetchProductData().subscribe((response) => {
    //   this.productData = response;
    // });
  }

  /*When Component load add validators*/
  ngOnInit(): void {

      this.productService.fetchProductData().subscribe((response) => {
      this.productData = response;
    });
    
      this.addNewProduct = this.fb.group({
      productId: new FormControl('', [Validators.pattern(this.alphNumPattern), Validators.required]),
      name: new FormControl('', Validators.maxLength(30)),
      category: new FormControl(''),
      price: new FormControl('', Validators.pattern(this.floatNumPattern)),
      serialNumber: new FormControl(
        '',
        Validators.pattern(this.alphNumPattern)
      ),
      releaseDate: new FormControl(''),
      stockUnits: new FormControl('', Validators.pattern(this.numPattern)),
      description: new FormControl('', Validators.maxLength(150)),
    });
  }

  /*Method to Post data to API*/
  submit(data: any) {
    this.productService.postData(data).subscribe((result) => {
      alert('New Product Added Successfully!');
      this.addNewProduct.reset();
      let ref = document.getElementById('cancel');
      ref.click();
      this.ngOnInit();

    });
  }

  /*Method To Add Validation on Date*/
  disableFutureDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + '-' + month + '-' + todayDate;
  }

  /*Method to delete product*/
  deleteProduct(productId: Number) {
    var result = confirm(' Do you really want to delete?');
    if (result) {
      //Logic to delete the item
      this.productService
        .deleteProductRequest(productId)
        .subscribe((result) => {
          this.ngOnInit();
        });
    } else {
      alert('Delete Operation Canceled !!!');
    }
  }

}

