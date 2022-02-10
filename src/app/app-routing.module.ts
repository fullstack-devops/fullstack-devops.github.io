import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostViewComponent } from './content/blog/blog-post-view/blog-post-view.component';
import { BlogViewComponent } from './content/blog/blog-view/blog-view.component';
import { BlogModule } from './content/blog/blog.module';

const routes: Routes = [
  { path: 'blog', pathMatch: 'full', component: BlogViewComponent },
  { path: 'blog/post', component: BlogPostViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
