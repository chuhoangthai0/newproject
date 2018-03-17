import {Injectable} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class NodeService {

    private _sharedDataSource = new BehaviorSubject<any>(<any>{});
    sharedData$ = this._sharedDataSource.asObservable();
    
    updateSharedData(data: any) {
       this._sharedDataSource.next(data);
     }

}
