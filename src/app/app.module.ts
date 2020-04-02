import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { UserInfoComponent } from "./features/profile/user-info/user-info.component";
import { from } from "rxjs";
import { SectionComponent } from "./shared/section/section.component";
import { AddSectionComponent } from "./features/profile/add-section/add-section.component";
import { CreatePostComponent } from "./features/post/create-post/create-post.component";
import { AddPostComponent } from "./features/post/add-post/add-post.component";
import { AddCommentComponent } from "./features/post/add-comment/add-comment.component";
import { ErrorPageComponent } from "./layout/error-page/error-page.component";
import { UserService } from "./features/profile/Users.service";
import { FormsModule } from "@angular/forms";
import { CommunityService } from "./features/post/community.service";
import { CompanyService } from "./features/profile/add-section/company.service";
import { ExperienceService } from "./features/profile/add-section/experince.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserInfoComponent,
    SectionComponent,
    AddSectionComponent,
    CreatePostComponent,
    AddPostComponent,
    AddCommentComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/home/1", pathMatch: "full" },
      { path: "home", redirectTo: "/home/1", pathMatch: "full" },

      // { path: "home", component: CreatePostComponent },
      { path: "home/:id", component: CreatePostComponent },
      { path: "profile/edit/:id/:idS", component: AddSectionComponent },
      { path: "profile", redirectTo: "/profile/1", pathMatch: "full" },

      { path: "profile/:id", component: UserInfoComponent },
      // { path: "profile", component: UserInfoComponent },
      { path: "add-post", component: AddPostComponent },
      { path: "add-post/:id", component: AddPostComponent },
      { path: "form", component: AddSectionComponent },
      // { path: "form", component: AddSectionComponent },
      { path: "profile/add/:id", component: AddSectionComponent },

      { path: "**", component: ErrorPageComponent }
    ])
  ],
  // providers: [],
  //   SectionComponent
  // ],
  // imports: [BrowserModule],
  providers: [UserService, CommunityService, CompanyService, ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
