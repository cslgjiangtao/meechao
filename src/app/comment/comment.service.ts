import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CommentService {
    public itemListURL = "https://app.meechao.cn/Comment/FindComments.html";

    constructor(public http: Http) {
    }

    public getCommentList(id: number, targetType: number, pageAt: number, pageSize: number) {
        let url = this.itemListURL;
        var data = {
            targetId: id,
            targetType: targetType,
            pageAt: pageAt,
            pageSize: pageSize
        };

        return this.http
            .get(url, { search: data })
            .map((res: Response) => {
                let result = res.json();
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}