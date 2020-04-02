import {
  Component,
  OnInit
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
export class CreatePostComponent implements OnInit {
  // community = [];
  community: Community[];
  user: User;
  users: User[];
  userId;
  isOpen = false;
  isLiked: boolean;
  myDate: any;
  constructor(
    public communityService: CommunityService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.users = this.userService.getAll();
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.userId = id;
    this.myDate = Date.now();
    this.isLiked = false;
    this.community = this.communityService.getCommunityById(this.userId);
    console.log(this.userId);
    // console.log(id);
    this.userService.navMe.subscribe(id => {
      // debugger;
      id = parseInt(this.route.snapshot.params["id"]);
      console.log(id);
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      this.router.navigate(["/profile", id]);
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

  incrementLikes(post) {
    for (let i = 0; i < this.community.length; i++) {
      if (this.community[i].post.id === post.id && this.isLiked == false) {
        this.community[i].post.like++;
        this.isLiked = true;
        console.log(this.isLiked);
      } else if (
        this.community[i].post.id === post.id &&
        this.isLiked == true
      ) {
        this.community[i].post.like--;
        this.isLiked = false;
        console.log(this.isLiked);
      }
    }
  }
  onCreatePost(user) {
    this.router.navigate(["/add-post", this.userId]);
    console.log(user);
  }
  showComments() {
    this.isOpen = true;
  }
}
