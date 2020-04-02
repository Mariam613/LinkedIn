import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../_model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { Experience } from "src/app/_model/experience";
import { ExperienceService } from "./../../features/profile/add-section/experince.service";
import { UserService } from "src/app/features/profile/Users.service";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  @Input()
  user: User;
  exper: Experience[];
  userId: any = 0;
  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.searchItem.subscribe(id => {
      //  debugger;
      // this.userData = userF.user;
      // this.experData = userF.userExp;
      // console.log(this.userData);
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      console.log(id);
      this.router.navigate(["/profile", this.userService.currentUser]);
      this.ngOnInit();
    });

    this.userId = this.activatedRoute.snapshot.params.id;
    console.log(this.userId);
    this.exper = this.experienceService.getExperienceByUserId(this.userId);
    console.log(this.exper);
  }
  ngOnChange() {
    this.userId = this.activatedRoute.snapshot.params.id;
    console.log(this.userId);
    this.exper = this.experienceService.getExperienceByUserId(this.userId);
    console.log(this.exper);
  }
  onEdit(expId) {
    // console.log();
    this.router.navigate(["profile", "edit", this.userId, expId]);
  }
  onAdd() {
    this.router.navigate(["profile", "add", this.userId]);
  }
}
