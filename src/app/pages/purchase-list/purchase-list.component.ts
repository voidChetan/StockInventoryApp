import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent  implements OnInit{

  purchaseList: any [] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadPurchase();
  }

  loadPurchase() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllPurchase").subscribe((res:any) => {
      this.purchaseList = res.data;
    })
  }


}
