import { Component,OnInit, OnDestroy, ViewChild} from '@angular/core';
import { callApiservice} from './service/callAPI.service';
import { NodeService} from './service/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NodeService],
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'app';
  baner= 'thai';

  constructor(private CallApiService:callApiservice, private nodeservice: NodeService){
    nodeservice.sharedData$.subscribe((res) =>{
      //console.log(res);
    })
  };

  ngOnInit(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = {'token':currentUser.token};

  };
  ngOnDestroy(){};
}
