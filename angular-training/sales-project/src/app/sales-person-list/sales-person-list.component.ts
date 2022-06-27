import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Yangxin", "Ma", "yangxinm@sfu.ca", 10000),
    new SalesPerson("Chongyu", "Yuan", "chongyuy@sfu.ca", 20000),
    new SalesPerson("Zhuohang", "Yu", "zhuohangy@sfu.ca", 30000),
    new SalesPerson("Yuhang", "Yao", "yuhangy@sfu.ca", 40000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
