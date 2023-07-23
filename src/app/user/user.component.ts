import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // image:any;
  form: FormGroup;

  constructor(public fb: FormBuilder,public postsService: PostService) { 
    this.form = this.fb.group({
      name: [''],
      price:[''],
product_id:[''],
      image: [null],
    });
  
  }

  ngOnInit(): void {
  }

  // selectImage(image:any) {
  //     const file = image.files[0];
  //     this.image = file;
  //     console.log(this.image)
  // }
  uploadFile(images:any) {
    const file = images.files[0];
    this.form.patchValue({
      image: file,
    });
    // this.form.get('image').updateValueAndValidity();
  }
  addproduct(){
    // console.log("before",item)
    const formData = new FormData();
    // formData.append('file', this.image);
   console.log('after',formData)
   return
    this.postsService.addproduct(formData).subscribe((res)=>{
        console.log(res);
    
      })
    }
}
