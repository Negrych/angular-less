import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) {

  }

  getUsers():Observable<Array<IUser>> {
   return  this.http.get<Array<IUser>>(this.url)
  }

  getUser(id:string):Observable<IUser> {
    return  this.http.get<IUser>(this.url + '/' + id)
  }

}
