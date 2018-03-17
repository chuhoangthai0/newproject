import { Component, OnInit } from '@angular/core';
import { callApiservice } from '../service/callAPI.service';
import {Router} from '@angular/router';
import { NodeService} from '../service/share.service';
@Component({
  selector: '<selector>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NodeService]
})
export class HomeComponent implements OnInit {
  private data;
  constructor(private CallApiService : callApiservice,private router: Router, private nodeservice:NodeService) {
  
  }
  onSubmit(value:any){
    this.CallApiService.Login(value).subscribe((res) =>{
      this.data =res;
      if(this.data.status == 200){

          this.nodeservice.updateSharedData(this.data.token);

          localStorage.setItem('currentUser', JSON.stringify({ token: this.data.token, name: 'thai' }));
          this.router.navigate(['/show']);

      }
      else{
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    }
};
