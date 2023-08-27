import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.less']
})
export class UserAvatarComponent {
  @Input() public src!: string;
  @Input() public size!: string;

  ngOnInit() {
    if (!this.src) {
      console.log('change src')
      this.src = '../../../../assets/images/default-avatar.png'
      console.log(this.src)
    }
  }
}
