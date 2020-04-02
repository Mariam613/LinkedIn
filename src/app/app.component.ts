import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "linkedin-proj";
  // UserIdUrl: number;
  // constructor(private activatedRoute: ActivatedRoute) {}
  // ngOnInit() {
  //   this.UserIdUrl = this.activatedRoute.snapshot.params.id;
  //   console.log(this.UserIdUrl);
  // }
}
