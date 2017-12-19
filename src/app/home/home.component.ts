import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public active: number = 1;
  private listenRoute: Subscription;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.listenRoute = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        let url: string = event['url'];
        if (url.indexOf("/mijian") != -1) {
          this.active = 2;
        } else if (url.indexOf("/michao") != -1) {
          this.active = 1;
        } else {
          this.active = 1;
        }
      });
  }
  ngOnDestroy() {
    this.listenRoute.unsubscribe();
  }

}
