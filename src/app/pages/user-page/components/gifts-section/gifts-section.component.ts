import { Component, Input } from '@angular/core';
import { UserPageComponent } from '../../user-page.component';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-gifts-section',
  templateUrl: './gifts-section.component.html',
  styleUrls: ['./gifts-section.component.less']
})
export class GiftsSectionComponent {
  gifts: string[] = []
  giftsCount: number = 0
  firstGifts: string[] = []

  constructor(private userDataService: UserDataService) {
    this.userDataService.get().subscribe( data => {
      this.gifts = data.gifts
    })
    this.giftsCount = this.gifts.length
    this.firstGifts = this.gifts.slice(0, 4)
  }
}
