import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleDetailService {
    public itemListURL = "https://app.meechao.cn/GetArticleInfoV2.html";

    constructor(public http: Http) {
    }

    public getArticleInfo(id: number) {
        let url = this.itemListURL;
        var data = { 'wxArticleId': id };

        return this.http
            .get(url, { search: data })
            .map((res: Response) => {
                let result = res.json();
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}