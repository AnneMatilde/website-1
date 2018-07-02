import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { PageBlogComponent } from './page-blog/page-blog.component';

export const routes: Routes = [
  {path: '', component: PageHomeComponent, children:
    [
      {path: '', component: PageHomeComponent}
    ]
  },
  {
    path: 'team',
    component: PageTeamComponent
  },
  {
    path: 'blog/:id',
    component: PageBlogComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
