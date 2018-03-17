import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HomeComponent} from './component/home.component';
import { ClientComponent} from './component/client.component';
import { ShowComponent} from './component/show.component';

import { FormsModule }   from '@angular/forms';
import { callApiservice } from './service/callAPI.service';
import { NodeService } from './service/share.service';
import { HttpModule } from '@angular/http';

import {PopupModule} from 'ng2-opd-popup';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    HttpClientModule,
    FormsModule,
    HttpModule,
    PopupModule.forRoot()
  ],
  providers: [callApiservice,NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
