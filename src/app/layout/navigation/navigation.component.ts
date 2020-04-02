import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { UserService } from "src/app/features/profile/Users.service";
import { User } from "src/app/_model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { ExperienceService } from "./../../features/profile/add-section/experince.service";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  @ViewChild("search", { static: false })
  searchBox: ElementRef;
  @Output()
  searchItem = new EventEmitter<any>();
  user: User[];
  userData: any;
  id: number = 1;
  constructor(
    private userExperience: ExperienceService,
    private router: Router,
    public userService: UserService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.userService.getAll();
    this.id = parseInt(this.activateRoute.snapshot.params["id"]);
  }

  getValue() {
    var data = (this.searchBox.nativeElement as HTMLInputElement).value;
    console.log(data);
    var id = this.userService.getIdByName(data);
    console.log(id);
    if (id) {
      this.userService.searchItem.next(id);
    } else {
      console.log("No Result");
    }
  }
  onHome(user) {
    this.userService.navHome.next();
  }
  onProfile() {
    this.userService.navMe.next();
  }
  // onChangeSearch(value) {
  //   // debugger;
  //   this.userService.filterSearch(value);
  //   // console.log(value);
  // }
}
