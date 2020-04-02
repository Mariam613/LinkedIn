import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  ControlContainer
} from "@angular/forms";
import { company } from "./../../../_model/Company";
import { CompanyService } from "./company.service";
import { Experience } from "./../../../_model/experience";
import { UserService } from "./../Users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ExperienceService } from "./experince.service";

@Component({
  selector: "app-add-section",
  templateUrl: "./add-section.component.html",
  styleUrls: ["./add-section.component.scss"]
})
export class AddSectionComponent implements OnInit {
  user: UserService;
  exp: Experience;
  companies: company[];
  myForm: FormGroup;
  title: FormControl;
  location: FormControl;
  company: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  description: FormControl;
  userId: number;
  expId: number;

  constructor(
    public companyService: CompanyService,
    public userervice: UserService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private experienceService: ExperienceService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.navMe.subscribe(() => {
      debugger;
      var id = parseInt(this.activatedRoute.snapshot.params["id"]);
      console.log(id);
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      this.router.navigate(["/profile", id]);
    });
    this.userService.searchItem.subscribe(id => {
      this.userService.currentUser = id;
      console.log(this.userService.currentUser);
      console.log(id);
      this.router.navigate(["/profile", this.userService.currentUser]);
      this.ngOnInit();
    });
    this.userId = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.expId = this.activatedRoute.snapshot.params["idS"];
    console.log(this.userId);
    console.log(this.expId);
    console.log(this.userId);
    if (this.expId) {
      // var user=this.experienceService.getExperienceByUserId()
      var experience = this.experienceService.getSpecExperience(
        this.userId,
        this.expId
      );
      console.log(experience);
    }
    console.log(experience);
    this.companies = this.companyService.getAll();
    console.log(this.companies);
    this.title = new FormControl();

    this.location = new FormControl();
    this.company = new FormControl({});
    this.startDate = new FormControl();
    this.endDate = new FormControl();
    this.description = new FormControl();
    this.myForm = new FormGroup({
      titleName: this.title,
      locationName: this.location,
      companyName: this.company,
      startDT: this.startDate,
      endDt: this.endDate,
      descriptionText: this.description
    });
    if (experience != null) {
      //    const logo=this.companyService.getLogo(experience.company.name)
      this.myForm.patchValue({
        titleName: experience.title,
        locationName: experience.location,
        companyName: experience.company.name,
        startDT: experience.startDate,
        endDt: experience.endDate,
        descriptionText: experience.description
      });
    }
  }
  onSubmit() {
    console.log(this.myForm);
    //const exp: Experience = this.myForm.getRawValue();
    var experince: Experience = {
      userId: this.userId,
      title: this.myForm.value.titleName,
      location: this.myForm.value.locationName,
      company: {
        id: 1,
        name: this.myForm.value.companyName,
        compLogo: this.companyService.getLogo(this.myForm.value.companyName)
      },

      startDate: this.myForm.value.startDT,
      endDate: this.myForm.value.endDt,
      description: this.myForm.value.descriptionText
    };
    console.log(experince);
    if (this.expId) {
      this.experienceService.updateExperience(experince, this.expId);
    } else {
      this.experienceService.AddExperience(experince);
    }
    this.router.navigate(["/profile", this.userId]);
  }
}
