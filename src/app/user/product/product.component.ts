import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  test = [
    {id:1, img:"https://www.prnewsonline.com/wp-content/uploads/2019/08/shutterstock_163052525-730x342.jpg",text:"es tmp a"},
    {id:2, img:"https://i.ytimg.com/vi/dYtvUtXWdM8/maxresdefault.jpg",text:"es tmp a"},
    {id:3, img:"https://i2.wp.com/blog.hoterip.com/wp-content/uploads/2018/12/Tips-Memilih-Agent-Tour-and-Travel-Hoterip-platform-online-booking-hotel-terbaik-Layanan-pesan-hotel-terbaik.jpg?fit=1200%2C680&ssl=1",text:"es tmp a"},
    {id:4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCRz4SBcFvysLJwPUBetcEDYO6RLMW5dTVKRa0aD4GgGkwvTm_9gmsilRvstuq1SQtXw&usqp=CAU",text:"es tmp a"},
    {id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B3ra-7XRM3EFMH2WbR0WtihYTQlKcqDyHxLVaJtu9SBb8bL5DUE8dbt7-PmEfBL7yzM&usqp=CAU",text:"es tmp a"},
    {id:6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmfnvArhIjq_JmhgjM-5Cb3plG9nS8tk0VEfOHd4OZzpZrAp2-DMPazEcViDZCSyzBC4&usqp=CAU",text:"es tmp a"},
    {id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B3ra-7XRM3EFMH2WbR0WtihYTQlKcqDyHxLVaJtu9SBb8bL5DUE8dbt7-PmEfBL7yzM&usqp=CAU",text:"es tmp a"},
    {id:6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmfnvArhIjq_JmhgjM-5Cb3plG9nS8tk0VEfOHd4OZzpZrAp2-DMPazEcViDZCSyzBC4&usqp=CAU",text:"es tmp a"}
  ];
  constructor(protected router:Router, protected route:ActivatedRoute) {}

  ngOnInit(): void {
  }

}
