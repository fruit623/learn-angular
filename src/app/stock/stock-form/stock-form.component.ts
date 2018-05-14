import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor(public routerInfo: ActivatedRoute, public stockService: StockService, public router: Router) { }

  ngOnInit() {
    let stockid = this.routerInfo.snapshot.params["id"];
    this.stock = this.stockService.getStock(stockid);
  }

  cancel(){
    this.router.navigateByUrl("stock");
  }

  save(){
    this.router.navigateByUrl("stock");
  }

}
