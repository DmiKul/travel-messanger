import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { PostControlBarComponent } from './components/post-control-bar/post-control-bar.component';
import { PostImagesComponent } from './components/post-images/post-images.component';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostTextComponent } from './components/post-text/post-text.component';
import { SectionModule } from '../section/section.module';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';
import {TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiDataListModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    PostComponent,
    PostControlBarComponent,
    PostImagesComponent,
    PostHeaderComponent,
    PostTextComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiCarouselModule,
    TuiPaginationModule,
    SectionModule,
    UserAvatarModule,
    TuiHostedDropdownModule,
    TuiDataListModule
  ],
  exports: [PostComponent]
})
export class PostModule {}
