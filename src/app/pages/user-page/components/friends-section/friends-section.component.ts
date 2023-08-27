import { Component, Input } from '@angular/core';
import { IFriend } from '@customTypes/models';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-friends-section',
  templateUrl: './friends-section.component.html',
  styleUrls: ['./friends-section.component.less']
})
export class FriendsSectionComponent {
  friends: IFriend[] = []
  friendsCount: number = 0;
  firstFriends: IFriend[] = [];
  onlineFriends: IFriend[] = [];
  onlineFriendsCount: number = 0;
  firstOnlineFriends: IFriend[] = [];
  constructor(private userDataService: UserDataService) {
    this.userDataService.get().subscribe( data => {
      this.friends = data.followers
    })
    this.friendsCount = this.friends.length;
    this.firstFriends = this.friends.slice(0, 8);
    if (this.onlineFriendsCount) {
      this.firstFriends = this.friends.slice(0, 4);
    }
    this.friends.forEach((friend) => {
      if (friend.isOnline) {
        this.onlineFriends.push(friend);
      }
    });
    this.onlineFriendsCount = this.onlineFriends.length;
    this.firstOnlineFriends = this.onlineFriends.slice(0, 4)
  }
  ngOnInit() {}
}
