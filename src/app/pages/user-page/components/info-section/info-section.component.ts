import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.less']
})
export class InfoSectionComponent {
  avatar!: string
  fname!: string
  lname!: string
  isOnline!: boolean
  city!: string
  
  constructor(private userDataService: UserDataService) {
    this.userDataService.get().subscribe( data => {
      this.avatar = data.avatar
      this.fname = data.fname
      this.lname = data.lname
      this.isOnline = true
      this.city = data.city
    })
  }
}
