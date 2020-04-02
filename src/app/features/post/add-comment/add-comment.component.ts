import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { CommunityService } from "../community.service";
import { UserService } from "../../profile/Users.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/_model/user";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"]
})
export class AddCommentComponent implements OnInit, OnChanges {
  // community = [];
  newComment: Comment;
  // @Input() comments;
  myDate: any;
  userId;
  @Input() post;
  user: User;
  constructor(
    public communityService: CommunityService,
    public userService: UserService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    //   this.community = this.communityService.getAll();
    // console.log(this.comments[0].userId);
    this.myDate = Date.now();
    console.log(this.myDate);
    this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onAdd(Newcomment) {
    console.log(Newcomment);
    let comment = Newcomment.value;
    let id = this.post.comments.length;
    let newComment = { id: id, comment: comment, userId: this.userId };
    // this.post.comments.push(newComment);
    // console.log(this.post.id);
    this.communityService.update(this.post.id, newComment);
    Newcomment.value = "";
    return this.post.comments;
  }
  getUserName(i: number) {
    // console.log(i);
    this.user = this.userService.getById(i);
    // console.log(this.user);
    return this.user.name;
  }
}
