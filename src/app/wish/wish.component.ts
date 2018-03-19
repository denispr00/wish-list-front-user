import { Component, OnInit } from '@angular/core';
import { PagerService } from '../utils/pager.service';
import { Headers, Http } from "@angular/http";
import * as Stomp from "stompjs";
//import {SockJS} from 'sockjs-client';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  // template : `
  //   <app-navbar></app-navbar>
    
  //   <p>
  //     wish works! a
  //   </p>
  //   <button class="btn btn-primary" (click)="removeWish(wish)">TEST 2</button> 
  // `,
  styleUrls: ['./wish.component.css'],
  providers: [PagerService]
})
export class WishComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/owish-rest/socket';
  private stompClient;

  wishList: any[]=[];

  // pager object
  pager: any = {};
  
  // paged items
  pagedItems: any[];
  
  constructor(private pagerService:PagerService,private http: Http ){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      console.log('Connected: ' + frame);
      that.http.get(that.serverUrl+'/init').toPromise();
      that.stompClient.subscribe('/wish', (message) => {
        that.wishList.push(message.body);
        that.setPage(1);
      }); 
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/message", {}, message);
  }
  
  ngOnInit() {
    
    
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.wishList.length, page);

    console.log('startIndex'+this.pager.startIndex+',this.pager.endIndex'+this.pager.endIndex);
    // get current page of items
    this.pagedItems = this.wishList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

