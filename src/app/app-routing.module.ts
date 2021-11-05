import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { ContactComponent } from './contact/contact.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DetailsComponent } from './details/details.component';
import { DirComponent } from './dir/dir.component';
import { MasterComponent } from './master/master.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PasswordComponent } from './password/password.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:DatabindingComponent},
  {path:'dir',component:DirComponent},
  {path:'pipe',component:PipeComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'about/:id',component:AboutComponent},
  {path:'about',component:AboutComponent},
  {path:'inheritence',component:ChildComponent},
  {path:'detail',component:MasterComponent},
  {path:'contact',component:ContactComponent ,children:[
    {path:'password',component:PasswordComponent},
    {path:'profile',component:ProfileComponent},
    
  ]},
  {path:'**',redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
