import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { PostControlBarComponent } from './components/post-control-bar/post-control-bar.component';
import { PostImagesComponent } from './components/post-images/post-images.component';
import { TuiSvgModule} from '@taiga-ui/core';
import {TuiCarouselModule, TuiPaginationModule} from '@taiga-ui/kit';
import { PostHeaderComponent } from './components/post-header/post-header.component';



@NgModule({
  declarations: [PostComponent, PostControlBarComponent, PostImagesComponent, PostHeaderComponent],
  imports: [CommonModule, TuiButtonModule, TuiSvgModule, TuiCarouselModule, TuiPaginationModule],
  exports: [PostComponent]
})
export class PostModule {}
