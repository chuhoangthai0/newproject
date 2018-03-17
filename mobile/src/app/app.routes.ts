import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from './component/home.component';
import { AppComponent } from './app.component';
import { ClientComponent} from './component/client.component';
import { ShowComponent} from './component/show.component';
const routing : Routes = [
  {path:'',component:HomeComponent},
  {path:'client',component:ClientComponent},
  {path:'show',component:ShowComponent},
  {path:'**',component:HomeComponent}



]
export const appRoutes = RouterModule.forRoot(routing);
