import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges
  // ViewChild,
  // ElementRef
  // AfterViewInit
} from "@angular/core";
import { CommunityService } from "../community.service";
import { Community } from "src/app/_model/community";
import { User } from "src/app/_model/user";
import { UserService } from "../../profile/Users.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"]
})
export class CreatePostComponent implements OnInit, OnChanges {
  // community = [];
  community: Community[];
  user: User;
  users: User[];
  userId;
  isOpen = false;
  // Liked: boolean;
  myDate: any;
  constructor(
    public communityService: CommunityService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @ViewChild("mydate", { static: false }) mydate: ElementRef;
  ngOnInit() {
    this.users = this.userService.getAll();
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.userId = id;
    this.myDate = Date.now();
    // console.log(typeof Date.now());
    // var date = (this.mydate.nativeElement as HTMLSpanElement).textContent;
    // console.log(date);
    // this.isLiked = false;
    this.community = this.communityService.getCommunityById(this.userId);
    // console.log(this.userId);
    // console.log(id);
    this.userService.navMe.subscribe(id => {
      // debugger;
      id = parseInt(this.route.snapshot.params["id"]);
      // console.log(id);
      this.userService.currentUser = id;
      // console.log(this.userService.currentUser);
      this.router.navigate(["/profile", id]);
      console.log(this.community);
    });
    this.userService.searchItem.subscribe(id => {
      // debugger;
      // this.userData = userF.user;
      // this.experData = userF.userExp;
      // console.log(this.userData);
      this.router.navigate(["profile", id]);
      // this.router.navigate(["profile", id]);
      // this.ngOnInit();
    });
    this.userService.getProfile.subscribe(() => {
      debugger;
      var id = parseInt(this.route.snapshot.params["id"]);
      console.log(id);
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      this.router.navigate(["profile", id]);
      // this.router.navigate(["profile", id]);
      // this.ngOnInit();
    });
    this.userService.getProfileFromPost.subscribe(followerId => {
      this.userService.currentUser = followerId;
      console.log(followerId);
      this.router.navigate(["/profile", this.userService.currentUser]);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  getProfile() {
    this.userService.getProfile.next();
  }

  // ngAfterViewInit() {
  //   console.log(this.post.nativeElement);
  // }
  getUserName(i: number) {
    // console.log(i);
    this.user = this.userService.getById(i);
    // console.log(this.user);
    return this.user.name;
  }
  getProfileFromPost(user) {
    let followerName = user.toElement.innerText;
    let followerData = this.userService.getIdByName(followerName);
    console.log(followerData);
    this.userService.getProfileFromPost.next(followerData);
  }

  incrementLikes(com) {
    // console.log(com);
    if (com.isLiked === false) {
      com.isLiked = true;
      let num = com.post.like + 1;
      com.post.like = num;
      console.log(com);
      // this.Liked = com.isLiked;
      console.log(this.community);
    } else {
      com.isLiked = false;
      let num = com.post.like - 1;
      com.post.like = num;
      console.log(com);
      // this.Liked = com.isLiked;
    }
  }
  onCreatePost(user) {
    this.router.navigate(["/add-post", this.userId]);
    // console.log(user);
  }
  showComments(com) {
    if (com.showComments === false) {
      com.showComments = true;
    } else {
      com.showComments = false;
    }
  }
}
