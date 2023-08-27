import { Component } from '@angular/core';
import { IFriend } from '../../types/models/friendModel';
import { IGroup } from '../../types/models/groupModel';
import { IPost, IUser } from '@customTypes/models';
import * as moment from 'moment';
import { LoginService } from 'src/app/api/services/login.service';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent {
  userId!: string;
  public userData!: IUser;
  // isDataLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isDataLoading: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private http: HttpClient
  ) {
    // this.userId = localStorage.getItem('userId') || '';
    // console.log('userId: ', this.userId);
    // if (this.userId) {
    //   this.userDataService.getUserData(this.userId).subscribe((userData) => {
    //     this.userData = userData;
    //     console.log('userData: ', this.userData);
    //     // this.isDataLoading.next(false)
    //     this.isDataLoading = false
    //   });
    // } else {
    //   this.router.navigate(['login']);
    // }
  }

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || '';
    console.log('userId: ', this.userId);
    if (this.userId) {
      this.http.get<IUser>(`http://localhost:3000/users/${this.userId}`).subscribe((userData) => {
        this.userData = userData;
        console.log('userData: ', this.userData);
        // this.isDataLoading.next(false)
        this.userDataService.set(userData)
        this.isDataLoading = false;
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
