import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { PagesComponent } from './pages/pages.component'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    // canActivate: [LoginGuard],
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }) , TranslateModule
  ],
  exports: [RouterModule  , TranslateModule  ]
})
export class AppRoutingModule { }
