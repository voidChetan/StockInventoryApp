import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent {
  saleObj: any = {
    "saleId": 0,
    "invoiceNo": "",
    "customerName": "",
    "mobileNo": "",
    "saleDate": "2023-09-23T11:19:38.047Z",
    "productId": 0,
    "quantity": 0,
    "totalAmount": 0
  };
  productList: any[] = [];

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllProducts").subscribe((res: any) => {
      this.productList = res.data;
    })
  }
  checkStock() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Jira/checkStockByProductId?productId="+ this.saleObj.productId).subscribe((res: any) => {
      if(!res.result) {
        alert("Stock Not Available");
        this.saleObj.productId = 0;
      }
    })
  }
  onSave() {
    this.http.post("https://freeapi.miniprojectideas.com/api/Jira/CreateNewSale",this.saleObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Sale Done Success")
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert("API Error")
    })
  }
}
