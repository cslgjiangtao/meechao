import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ItemsService {
    public itemListURL = "http://app.meechao.com:8080/Michao/v18/GetIndexArticleList.html";

    constructor(public http: Http) {
    }

    public getItemList(pageSize: number = 10, pageAt: number = 0) {
        let url = this.itemListURL;
        var data = { 'pageAt': pageAt, 'pageSize': pageSize, 'type': 1, 'baseBlockId': 0 };

        return this.http
            .get(url, { search: data })
            .map((res: Response) => {
                let result = res.json();
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}