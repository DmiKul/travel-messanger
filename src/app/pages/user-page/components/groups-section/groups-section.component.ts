import { Component, Input } from '@angular/core';
import { IGroup } from '@customTypes/models';

@Component({
  selector: 'app-groups-section',
  templateUrl: './groups-section.component.html',
  styleUrls: ['./groups-section.component.less']
})
export class GroupsSectionComponent {
  @Input() public groups: IGroup[] = []
  groupsCount: number = 0
  firstGroups: IGroup[] = []

  constructor() {
    this.groupsCount = this.groups.length
    this.firstGroups = this.groups.slice(0, 4)
  }
}
