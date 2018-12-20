import { Injectable } from '@angular/core';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {
private  loggedIn:User=null;

  constructor() { }
   checkUser(username:string,password:string): Observable<User>{
    this.loggedIn=USERS.filter(x=>x.username===username&&x.password===password)[0];
    return of(this.loggedIn);
  };
  getLoggedInUser():Observable<User>{
    return of(this.loggedIn);
 }
}

export enum UserType{
  admin=0,
  user=1
}
export class User{
  id:number;
  username:string;
  password:string;
  userType: UserType;
}


const USERS:User[]=[
  {
    id:0,
    username:"admin",
    password:"admin",
    userType: UserType.admin
  }
]
