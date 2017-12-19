import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  id: number;
  @Input()
  targetType: number;
  @Input()
  pageAt: number;

  public pageSize: number = 20;
  public commentList = [];

  constructor(
    public commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.getCommentList(this.id, this.targetType, this.pageAt, this.pageSize).subscribe(
      data => {
        if (data.result) {
          this.commentList = data.list;
        }
      }
    );
  }

}
