import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {NodeService} from '../service/share.service'
@Component({
  selector: '<client>',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [NodeService]

})
export class ClientComponent implements OnInit {
  constructor(private popup:Popup,private nodeservice: NodeService) {
    nodeservice.sharedData$.subscribe((res)=>{
      console.log(res);
    })
  }
  onSubmit(value:any){
    this.popup.options = {
      header: "Your custom header",
      color: "#5cb85c", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'

  };

    this.popup.show(this.popup.options);
  }
  ngOnInit() {}
}
