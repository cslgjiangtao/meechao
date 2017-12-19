import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticleDetailService } from "./article-detail.service"
import { ArticleInfo } from './article-detail-model'
import { CommentComponent } from './../comment/comment.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  public id: number;
  public articleInfo: ArticleInfo = new ArticleInfo();
  constructor(
    public route: ActivatedRoute,
    public articleDetailService: ArticleDetailService,
  ) {
    this.route.params.subscribe(data => this.id = data.id)
  }

  ngOnInit() {
    this.articleDetailService.getArticleInfo(this.id).subscribe(
      data => {
        if (data.result) {
          this.articleInfo = data.articleInfo;
        }
      }
    )
  }

}
