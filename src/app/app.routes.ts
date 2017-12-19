import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { Page404Component } from './page404/page404.component'

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home/michao',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'michao', component: ItemsComponent },
            { path: 'mijian', component: ArticleComponent }
        ]
    },
    {
        path: 'detail',
        children: [
            { path: 'articleDetail/:id', component: ArticleDetailComponent },
            { path: '**', component: Page404Component }
        ]
    },
    {
        path: '**', //404 
        component: Page404Component
    }
];