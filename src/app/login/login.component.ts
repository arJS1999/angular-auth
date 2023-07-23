import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public postsService: PostService) { }
  
  ngOnInit(): void {
  }
  onsubmit(item:any){
   
    this.postsService.logdata(item).subscribe((res)=>{
        console.log(res);
    
      })
    }
}
