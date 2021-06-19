import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  packet = [
    {
      id:1, 
      include:["ვიდეოს გადაღება","დამონტაჟება","სცენარის დაწერა"],
      price:120,
    },
    {
      id:2, 
      include:["ვიდეოს გადაღება","ფოტოს გადაღება","დამონტაჟება","სცენარის დაწერა"],
      price:150,
    },
    {
      id:3, 
      include:["ვიდეოს გადაღება","ფოტოს გადაღება","დამონტაჟება","სცენარის დაწერა","დრონი"],
      price:180,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
