import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        if(event.url == '/dashboard'){
          this.pageTitle = '这里是首页';
          this.pageDesc = '';
        }else if(event.url.startsWith('/stock')){
          this.pageTitle = '这里是股票导航';
          this.pageDesc = '进行股票的增删改查功能';
        }
      });
  }

  ngOnInit() {

  }

}
