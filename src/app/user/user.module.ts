import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserHomeComponent} from './user-home/user-home.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {UserHeadComponent} from './user-head/user-head.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {FormsModule} from "@angular/forms";
import {UserBlogListComponent} from './user-blog-list/user-blog-list.component';
import {UserComponent} from './user/user.component';
import {UserBlogContentComponent} from './user-blog-content/user-blog-content.component';
import {AppRoutingModule} from "../app-routing.module";
import {UserBlogCommentComponent} from './user-blog-comment/user-blog-comment.component';


@NgModule({
  declarations: [UserHomeComponent, UserHeadComponent, UserLoginComponent, UserBlogListComponent, UserComponent, UserBlogContentComponent, UserBlogCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule {
}
