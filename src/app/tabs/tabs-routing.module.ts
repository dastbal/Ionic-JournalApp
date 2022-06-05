import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'new',
        loadChildren: () =>
          import('../journal/new/new.module').then((m) => m.NewPageModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('../journal/edit/edit.module').then((m) => m.EditPageModule),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('../journal/feed/feed.module').then((m) => m.FeedPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
