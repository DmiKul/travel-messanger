import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.less']
})
export class PhotosSectionComponent {
  @Input() public photos: string[] = []
  firstPhotos: string[] = []

  constructor() {
    this.firstPhotos = this.photos.slice(0, 3)
  }

}
