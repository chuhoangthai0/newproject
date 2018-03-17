import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class callApiservice{
  private apiUrl = "http://localhost:3000/api/route/login";
  //private options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/json' })});

  constructor(private _http:Http){

  }



  GetLish(): Observable<any[]> {
   return  this._http.get(this.apiUrl).map((res,err) =>res.json())
  }
  Login(data:any) {
    //console.log(this.options);
   var headers = new Headers();
   headers.append('Content-Type','application/json');
   return  this._http.post("http://localhost:3000/api/route/login",JSON.stringify(data),{headers:headers}).map(res =>res.json())
  }
  GetData(token:any){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return  this._http.post("http://localhost:3000/api/route/datauser",JSON.stringify(token),{headers:headers}).map(res =>res.json())
  }
}
