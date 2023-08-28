import { Component, Input } from '@angular/core';
import { MinValidator } from '@angular/forms';
import { IDate } from '@customTypes/models/dateModel';
import * as moment from 'moment';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.less']
})
export class PostHeaderComponent {
  @Input() public authorImg!: string;
  @Input() public authorFName!: string;
  @Input() public authorLName!: string;
  // @Input() public date!: IDate;
  @Input() public date!: string;

  constructor() {}

  ngOnInit() {
    console.log('avatar in post ', this.authorImg);
  }

  getPostTimeInfo() {
    console.log(this.date)
    const dateParts = this.date.split(' ')
    const creationTime = moment({
      year: +dateParts[0],
      month: +dateParts[1],
      day: +dateParts[2],
      hour: +dateParts[3],
      minute: +dateParts[4],
      second: +dateParts[5],
      millisecond: +dateParts[6]
    }).locale('ru');

    const presentTime = moment().locale('ru');
    const diffHours = presentTime.diff(creationTime, 'hours');
    if (diffHours <= 2) {
      return creationTime.from(presentTime);
    }
    const diffYears = presentTime.diff(creationTime, 'years');
    if (diffYears) {
      return creationTime.format('ll');
    }
    const minutes = creationTime.minutes();
    const hours = creationTime.hours();
    return `${creationTime.format('DD MMM')} в ${hours}:${minutes}`;
  }

  delete() {}

  edit() {}

  pin() {}
}
