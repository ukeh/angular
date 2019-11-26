import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http:HttpClient) {

   }

   getUserService(){
     return (this.http.get('https://jsonplaceholder.typicode.com/users'));
   }
}
