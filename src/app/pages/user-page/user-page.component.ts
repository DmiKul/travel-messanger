import { Component } from '@angular/core';
import { IFriend } from '../../types/models/friendModel';
import { IGroup } from '../../types/models/groupModel';
import { IPost, IUser } from '@customTypes/models';
import * as moment from 'moment';
import { LoginService } from 'src/app/api/services/login.service';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent {
  userId!: number;
  userData!: IUser;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.userId = Number(localStorage.getItem('userId'));
    console.log('userId: ', this.userId);
    if (this.userId) {
      this.userDataService.getUserData(this.userId).subscribe((userData) => {
        this.userData = userData;
        console.log('userData: ', this.userData);
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
