import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../_model/user";
import { UserService } from "../Users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Experience } from "./../../../_model/experience";
import { ExperienceService } from "./../add-section/experince.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  @Input()
  user: User[];
  userData: User;
  experData: Experience[];
  //index: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params["id"]);

    this.userData = this.userService.getById(id);
    this.experData = this.experienceService.getExperienceByUserId(id);
    console.log(this.userData);
    console.log(this.experData);

    this.userService.navHome.subscribe(() => {
      // debugger;
      var id = parseInt(this.activatedRoute.snapshot.params["id"]);
      console.log(id);
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      this.router.navigate(["/home", id]);
    });
    this.userService.searchItem.subscribe(id => {
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      console.log(id);
      this.router.navigate(["/profile", this.userService.currentUser]);
      this.ngOnInit();
    });
  }
}
