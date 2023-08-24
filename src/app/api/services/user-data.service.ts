import { HttpClient } from '@angular/common/http';
import { IUser } from './../../types/models/userModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData!: IUser
  constructor(private http: HttpClient) {}

  public saveUserData(user: IUser) {
    this.userData = {
      id: user.id,
      email: user.email,
      password: user.password,
      isVerified: user.isVerified,
      fname: user.fname,
      lname: user.lname,
      age: user.age,
      city: user.city,
      avatar: user.avatar,
      chats: user.chats,
      posts: user.posts,
      photos: user.photos,
      followers: user.followers,
      gifts: user.gifts,
      groups: user.groups
    }
  }

  public getUserData(id: number): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/users/${id}`)
  }
}
