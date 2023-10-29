import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent {
  
  saleList: any [] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllSale").subscribe((res:any) => {
      this.saleList = res.data;
    })
  }

}
