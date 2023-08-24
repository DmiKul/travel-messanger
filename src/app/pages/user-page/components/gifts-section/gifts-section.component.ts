import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gifts-section',
  templateUrl: './gifts-section.component.html',
  styleUrls: ['./gifts-section.component.less']
})
export class GiftsSectionComponent {
  @Input() public gifts: string[] = []
  giftsCount: number = 0
  firstGifts: string[] = []

  constructor() {
    this.giftsCount = this.gifts.length
    this.firstGifts = this.gifts.slice(0, 4)
  }
}
