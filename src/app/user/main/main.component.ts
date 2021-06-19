import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  test = [
    {id:1, img:"https://www.prnewsonline.com/wp-content/uploads/2019/08/shutterstock_163052525-730x342.jpg",text:"es tmp a"},
    {id:2, img:"https://i.ytimg.com/vi/dYtvUtXWdM8/maxresdefault.jpg",text:"es tmp a"},
    {id:3, img:"https://i2.wp.com/blog.hoterip.com/wp-content/uploads/2018/12/Tips-Memilih-Agent-Tour-and-Travel-Hoterip-platform-online-booking-hotel-terbaik-Layanan-pesan-hotel-terbaik.jpg?fit=1200%2C680&ssl=1",text:"es tmp a"},
    {id:4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCRz4SBcFvysLJwPUBetcEDYO6RLMW5dTVKRa0aD4GgGkwvTm_9gmsilRvstuq1SQtXw&usqp=CAU",text:"es tmp a"},
    {id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B3ra-7XRM3EFMH2WbR0WtihYTQlKcqDyHxLVaJtu9SBb8bL5DUE8dbt7-PmEfBL7yzM&usqp=CAU",text:"es tmp a"},
    {id:6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmfnvArhIjq_JmhgjM-5Cb3plG9nS8tk0VEfOHd4OZzpZrAp2-DMPazEcViDZCSyzBC4&usqp=CAU",text:"es tmp a"}
  ];
  
  id = 1;

  SlideShowArray = [
    {img:"https://i.ytimg.com/vi/e3pWPzd85_A/maxresdefault.jpg", link:"empty"},
    {img:"https://digitalmarketing720411798.files.wordpress.com/2018/11/digitalmarketing_startupicons_websitedesign.jpg?w=900&h=900", link:"empty"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITSw-OnOCIOHFDSE6OjL647oVFuMMTQ74-C1SdV0wIlo2y8tQBGuBt_3k7CwzP7Y_GEM&usqp=CAU", link:"empty"}
  ];
  counter = 0;
  slideImage = this.SlideShowArray[0]["img"];

  ClientsArray = [
    {img:"https://www.onlineshops.ge/uploads/photos/2021-03/0.jpg", link:"empty"},
    {img:"https://www.onlineshops.ge/uploads/photos/2021-03/0.jpg", link:"empty"},
    {img:"https://www.onlineshops.ge/uploads/photos/2021-03/0.jpg", link:"empty"},
    {img:"https://external.ftbs5-2.fna.fbcdn.net/safe_image.php?d=AQHVWpm-aes6iCXj&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYs1QfsbfwBY%2Fmaxresdefault.jpg&cfs=1&ext=jpg&tp=1&ccb=3-5&_nc_hash=AQHJSNZRTn3AHPpJ", link:"empty"},
    {img:"https://external.ftbs5-2.fna.fbcdn.net/safe_image.php?d=AQHVWpm-aes6iCXj&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYs1QfsbfwBY%2Fmaxresdefault.jpg&cfs=1&ext=jpg&tp=1&ccb=3-5&_nc_hash=AQHJSNZRTn3AHPpJ", link:"empty"},
    {img:"https://external.ftbs5-2.fna.fbcdn.net/safe_image.php?d=AQHVWpm-aes6iCXj&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYs1QfsbfwBY%2Fmaxresdefault.jpg&cfs=1&ext=jpg&tp=1&ccb=3-5&_nc_hash=AQHJSNZRTn3AHPpJ", link:"empty"}
  ]
  imgArray = Array();
  ClientCounterStart = 0;
  ClientCounterEnd = 3;
  ClientSlideImage:any;

  constructor(protected router:Router, protected route:ActivatedRoute) { 
    for (let i = this.ClientCounterStart; i < this.ClientCounterEnd; i++) {
      this.ClientSlideImage = this.ClientsArray[i]["img"];
      this.imgArray.push(this.ClientSlideImage);
    }
  }

  ngOnInit() :void{
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

  changeClientSlide(button:any){
    if(button == 1){
      if(this.ClientCounterEnd == this.ClientsArray.length || this.ClientCounterEnd > this.ClientsArray.length){
        this.ClientCounterStart = 0;
        this.ClientCounterEnd = 3;
      }
      else{
        this.ClientCounterStart += 3;
        this.ClientCounterEnd += 3;
      }
    }
    else{
      if(this.ClientCounterStart == 0 || this.ClientCounterStart < 0){
        this.ClientCounterEnd = this.ClientsArray.length;
        this.ClientCounterStart = this.ClientCounterEnd - 3;
      }
      else{
        this.ClientCounterStart -= 3;
        this.ClientCounterEnd -= 3;
      }
    }
    this.imgArray = Array();
    for (let i = this.ClientCounterStart; i < this.ClientCounterEnd; i++) {
      this.ClientSlideImage = this.ClientsArray[i]["img"];
      this.imgArray.push(this.ClientSlideImage);
    }


    // if(button == 1){
    //   if(this.ClientCounter == this.ClientsArray.length - 1){
    //     this.ClientCounter = 0;
    //   }
    //   else{
    //     this.ClientCounter += 1;
    //   }
    //   this.ClientSlideImage = this.ClientsArray[this.ClientCounter]["img"];
    // }
    // else{
    //   if(this.ClientCounter == 0){
    //     this.ClientCounter = this.ClientsArray.length -1;
    //   }
    //   else{
    //     this.ClientCounter = this.ClientCounter - 1;
    //   }
    //   this.ClientSlideImage = this.ClientsArray[this.ClientCounter]["img"];
    // }

  }

}
