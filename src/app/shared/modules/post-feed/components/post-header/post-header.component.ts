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
  @Input() public date!: IDate;

  constructor() {}

  ngOnInit() {
    console.log('avatar in post ', this.authorImg);
  }

  getPostTimeInfo() {
    const creationTime = moment({
      year: this.date.year,
      month: this.date.month,
      day: this.date.day,
      hour: this.date.hour,
      minute: this.date.minute,
      second: this.date.second,
      millisecond: this.date.millisecond
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
