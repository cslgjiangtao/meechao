import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router'
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public articleList;
  public col1 = [];
  public col2 = [];
  public col1H = 0;
  public col2H = 0;
  public textheight = 65;
  public pageAt = 0;
  public sc;
  constructor(
    public articleService: ArticleService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getArticle();
    this.sc = this.scroll(this);
    window.addEventListener('scroll', this.sc, false);
  }
  getArticle() {
    this.articleService.getArticleList(20, this.pageAt).subscribe(
      data => {
        if (data.result) {
          this.articleList = data.list;
          this.onImageLoad();
        }
      }
    )
  }
  onImageLoad() {
    let imgWidth = window.innerWidth / 2 - 15;
    var txtheight = this.textheight;
    for (let image of this.articleList) {
      let oImgW = 0;
      let oImgH = 0;
      if (!image.wxArticlePicSize) {
        oImgW = 1;
        oImgH = 1;
      } else {
        var size = image.wxArticlePicSize.split('x');
        if (size.length == 2 && size[0] && size[1]) {
          oImgW = size[0];
          oImgH = size[1];
        } else {
          oImgW = 1;
          oImgH = 1;
        }
      }
      let scale = imgWidth / oImgW;        //比例计算
      let imgHeight = oImgH * scale;      //自适应高度
      let col1 = this.col1;
      let col2 = this.col2;
      let col1H = this.col1H;
      let col2H = this.col2H;
      image.height = imgHeight;
      if (col1H <= col2H) {
        col1H += imgHeight;
        col1H += txtheight
        col1.push(image);
      } else {
        col2H += imgHeight;
        col2H += txtheight
        col2.push(image);
      }
      this.col1 = col1;
      this.col2 = col2;
      this.col1H = col1H;
      this.col2H = col2H;
    }
  }
  scroll(obj) {
    return () => {
      if (document.body.scrollHeight - document.body.scrollTop - document.body.clientHeight <= 0) {
        obj.pageAt += 20;
        obj.getArticle();
      }
    }
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.sc, false);
  }
}
