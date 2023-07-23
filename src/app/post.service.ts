import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL = 'http://localhost:3000/user'

  constructor(private http:HttpClient) { }
  postdata(data:any): Observable<any>{
    return this.http.post(this.baseURL+"/signup",data)
      }
  logdata(data:any): Observable<any>{
        return this.http.post(this.baseURL+"/login",data)
          }
  productdata(): Observable<any>{
        return this.http.get(this.baseURL+"/relation")
            }
  addproduct(data:any): Observable<any>{
            return this.http.post(this.baseURL+"/product",data)
                  }

}
