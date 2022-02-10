import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
    BlogViewComponent,
    BlogPostViewComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot()
  ]
})
export class BlogModule { }
