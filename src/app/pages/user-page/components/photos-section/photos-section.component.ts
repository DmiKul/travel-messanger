import { Component, Input } from '@angular/core';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.less']
})
export class PhotosSectionComponent {
  photos: string[] = []
  firstPhotos: string[] = []

  constructor(private userDataService: UserDataService) {
    this.userDataService.get().subscribe( data => {
      this.photos = data.photos
    })
    this.firstPhotos = this.photos.slice(0, 3)
  }

}
