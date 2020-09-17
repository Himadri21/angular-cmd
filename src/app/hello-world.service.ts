import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageModel } from './message';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http:HttpClient) { }
  executeHelloWorldService()
  {
    const headers=new HttpHeaders({Authorization:'Basic'+btoa('himadri'+':'+'password')})
    return this.http.get<MessageModel>('http://localhost:8080/api/v1/greeting',{headers});
  }
}
