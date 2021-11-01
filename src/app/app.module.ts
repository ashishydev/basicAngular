import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersModule} from './users/users.module'
import { Form, FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { User123Component } from './user123/user123.component';
import { DirComponent } from './dir/dir.component';
import { HighlightDirective } from './highlight.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    User123Component,
    DirComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule
     ],
  providers: [],
  bootstrap: [AppComponent,DirComponent,DatabindingComponent]
})
export class AppModule { }
