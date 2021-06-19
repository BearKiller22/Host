import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pricedetail',
  templateUrl: './pricedetail.component.html',
  styleUrls: ['./pricedetail.component.scss']
})
export class PricedetailComponent implements OnInit {  
  
  packet = [
    {
      id:1, 
      include:["ვიდეოს გადაღება","დამონტაჟება","სცენარის დაწერა"],      
      description:"What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here",
      price:120,
    },
    {
      id:2, 
      include:["ვიდეოს გადაღება","ფოტოს გადაღება","დამონტაჟება","სცენარის დაწერა"],      
      description:"What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here",
      price:150,
    },
    {
      id:3, 
      description:"What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here,What is used in this product What we did and other information Goes here",
      include:["ვიდეოს გადაღება","ფოტოს გადაღება","დამონტაჟება","სცენარის დაწერა","დრონი"],
      price:180,
    }
  ];

  SlideShowArray = [
    {id:1,img:"https://photographyconcentrate.com/wp-content/uploads/best-camera-for-landscape-photography-scaled.jpg", link:"empty"},
    {id:2,img:"https://www.brumpost.com/wp-content/uploads/2020/02/Best-DSLR-Gimbal-2020.jpg", link:"empty"},

  ];
  counter = 0;
  slideImage = this.SlideShowArray[0]["img"];

  constructor(
    private route: ActivatedRoute,
    protected router:Router
  ) {}

  id:any;
  output:any;

  ngOnInit(){
    this.route.paramMap.subscribe( params =>
        this.id = params.get('id'),
    )
    for (let i = 0; i < this.packet.length; i++) {
      if(this.id == this.packet[i]["id"]){
        this.output = this.packet[i];
      }
    }
  }

  changeSlide(button:any){
    if(button == 1){
      if(this.counter == this.SlideShowArray.length - 1){
        this.counter = 0;
      }
      else{
        this.counter += 1;
      }
      this.slideImage = this.SlideShowArray[this.counter]["img"];
    }
    else{
      if(this.counter == 0){
        this.counter = this.SlideShowArray.length -1;
      }
      else{
        this.counter = this.counter - 1;
      }
      this.slideImage = this.SlideShowArray[this.counter]["img"];
    }
  }

  changeImage(id:any){
    for (let i = 0; i < this.SlideShowArray.length; i++) {
      if(id == this.SlideShowArray[i]["id"]){
        this.slideImage = this.SlideShowArray[i]["img"];
      }
    }
  }
}
