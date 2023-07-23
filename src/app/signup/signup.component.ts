import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public postsService: PostService) { }
 
  ngOnInit(): void {
  }
  onsubmit(item:any){
   
      this.postsService.postdata(item).subscribe((res)=>{
          console.log(res);
      
        })
      }
}
