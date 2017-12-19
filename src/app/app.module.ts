import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { PreloadingStrategy, RouterModule } from '@angular/router';
import { infiniteScroll } from 'ng-infinite-scroll';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component'
import { Page404Component } from './page404/page404.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ItemsService } from './items/items.service'
import { ArticleService } from './article/article.service';
import { ArticleDetailService } from './article-detail/article-detail.service'
import { CommentService } from './comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    ArticleComponent,
    Page404Component,
    ArticleDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ItemsService,
    ArticleService,
    ArticleDetailService,
    CommentService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
