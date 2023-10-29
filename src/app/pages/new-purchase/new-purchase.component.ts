import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit {


  purchaseObj: any = {
    "purchaseId": 0,
    "purchaseDate": "2023-09-23T11:00:36.277Z",
    "productId": 0,
    "quantity": 0,
    "supplierName": "",
    "invoiceAmount": 0,
    "invoiceNo": ""
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
  onSave() {
    this.http.post("https://freeapi.miniprojectideas.com/api/Jira/CreateNewPurchase",this.purchaseObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Purchase Done Success")
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert("API Error")
    })
  }

}
