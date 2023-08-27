import { HttpClient } from '@angular/common/http';
import { IUser } from './../../types/models/userModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // userData!: IUser
  userData: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    id: '',
    email: '',
    password: '',
    isVerified: true,
    fname: '',
    lname: '',
    age: 0,
    city: '',
    avatar: '',
    chats: [],
    posts: [],
    photos: [],
    followers: [],
    gifts: [],
    groups: []
  })

  constructor(private http: HttpClient) {}

  public set(data: IUser) {
    this.userData.next(data)
  }

  public get(): Observable<IUser>{
    return this.userData
  }
}
