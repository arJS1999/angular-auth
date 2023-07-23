import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productlist: any=[];
  categoryname: any;
  categoryname1: any;
  productlist1: any=[];

  constructor(public postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.productdata()
    .subscribe(data=>{
      console.log(data.result[0])
      // console.log(data.response[0].name)
      return this.productlist=data.result[0].categoryid,
      this.productlist1=data.result[1].categoryid,
      this.categoryname=data.result[0].category_name,
      this.categoryname1=data.result[1].category_name;
    })
  }

}
