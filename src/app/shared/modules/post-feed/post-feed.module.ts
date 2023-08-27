import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFeedComponent } from './post-feed.component';
import { PostComponent } from './components/post/post.component';
import { PostControlBarComponent } from './components/post-control-bar/post-control-bar.component';
import { PostImagesComponent } from './components/post-images/post-images.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostTextComponent } from './components/post-text/post-text.component';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { SectionModule } from '../section/section.module';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';


@NgModule({
  declarations: [
    PostFeedComponent,
    PostComponent,
    PostControlBarComponent,
    PostImagesComponent,
    PostHeaderComponent,
    PostTextComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiLoaderModule,
    UserAvatarModule,
    TuiCarouselModule,
    TuiSvgModule,
    TuiPaginationModule,
    TuiHostedDropdownModule,
    TuiButtonModule

  ],
  exports: [PostFeedComponent]
})
export class PostFeedModule {}
