import { UserAvatarModule } from './../../shared/modules/user-avatar/user-avatar.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiTextAreaComponent } from '@taiga-ui/kit';
import { ActionsSectionComponent } from './components/actions-section/actions-section.component';
import { FriendsSectionComponent } from './components/friends-section/friends-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { PhotosSectionComponent } from './components/photos-section/photos-section.component';
import { UserPageComponent } from './user-page.component';
import { OnlineBadgeComponent } from './components/online-badge/online-badge.component';
import { FriendItemComponent } from './components/friend-item/friend-item.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PostFeedModule } from '@shared/modules/post-feed/post-feed.module';
import { GiftsSectionComponent } from './components/gifts-section/gifts-section.component';
import { GroupsSectionComponent } from './components/groups-section/groups-section.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { SectionModule } from '@shared/modules/section/section.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {TuiTextAreaModule} from '@taiga-ui/kit';
import {TuiInputFilesModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    UserPageComponent,
    InfoSectionComponent,
    ActionsSectionComponent,
    PhotosSectionComponent,
    FriendsSectionComponent,
    OnlineBadgeComponent,
    FriendItemComponent,
    PhotoItemComponent,
    GiftsSectionComponent,
    GroupsSectionComponent,
    GroupItemComponent,
    CreatePostComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
    UserAvatarModule,
    PostFeedModule,
    SectionModule,
    TuiTextAreaModule,
    TuiInputFilesModule,
    TuiButtonModule,
    TuiBadgedContentModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule {}
