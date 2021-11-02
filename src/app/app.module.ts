import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersModule} from './users/users.module'
import { Form, FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { User123Component } from './user123/user123.component';
import { DirComponent } from './dir/dir.component';
import { HighlightDirective } from './highlight.directive';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReversePipe } from './reverse.pipe';
import { PipeComponent } from './pipe/pipe.component';
 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    User123Component,
    DirComponent,
    HighlightDirective,
    NotfoundComponent,
    ReversePipe,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,RouterModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  