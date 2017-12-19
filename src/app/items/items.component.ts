import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public itemList;
  constructor(
    public itemsService: ItemsService
  ) {

  }

  ngOnInit() {
    this.itemsService.getItemList(10, 0).subscribe(
      data => {
        if (data.result) {
          this.itemList = data.userArticleList;
        }
      }
    );
  }

}