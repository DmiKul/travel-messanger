import { Component, Input } from '@angular/core';
import { IGroup } from '@customTypes/models';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-groups-section',
  templateUrl: './groups-section.component.html',
  styleUrls: ['./groups-section.component.less']
})
export class GroupsSectionComponent {
  groups: IGroup[] = []
  groupsCount: number = 0
  firstGroups: IGroup[] = []

  constructor(private userDataService: UserDataService) {
    this.userDataService.get().subscribe( data => {
      this.groups = data.groups
    })
    this.groupsCount = this.groups.length
    this.firstGroups = this.groups.slice(0, 4)
  }
}
