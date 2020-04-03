import { User } from "../../_model/user";

import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { ExperienceService } from "./add-section/experince.service";
import { ActivatedRoute } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: number;
  private users: User[] = [
    {
      id: 1,
      name: "Malak Ibrahim",
      jopTitle: "Web Developer",
      location: "Egypt",
      connections: 500,
      imgUrl: "../../assets/images/malak.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    },
    {
      id: 2,
      name: "Mariam Magdy",
      jopTitle: "Front-End Developer",
      location: "New York",

      connections: 700,

      imgUrl: "../../assets/images/mariam.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    },

    {
      id: 3,
      name: "Salma Wagdy",
      jopTitle: "Back-End Developer",
      location: "New York",

      connections: 600,
      imgUrl: "../../assets/images/salma.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    },
    {
      id: 4,
      name: "Eslam Taha",
      jopTitle: "IOS Developer",
      location: "Paris",

      connections: 1400,

      imgUrl: "../../assets/images/eslam.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    }
  ];

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log(this.currentUser);
  }

  searchItem = new EventEmitter<any>();
  navMe = new EventEmitter<any>();
  navHome = new EventEmitter<any>();
  getProfile = new EventEmitter<any>();
  getProfileFromPost = new EventEmitter<any>();

  getAll(): User[] {
    return this.users.slice();
  }

  getById(id: number): User {
    return this.users.find(a => a.id === id);
  }
  getIndex(name: string): number {
    const index = this.users.findIndex(a => a.name == name);
    return index;
  }
  getIdByName(nameUser: string) {
    console.log(nameUser);

    const user = this.users.find(
      a => a.name.toLowerCase() == nameUser.toLowerCase()
    );
    if (user) {
      console.log(this.users.find(a => a.name == nameUser.toLowerCase()));
      console.log(user);
      return user.id;
    } else {
      console.log("No Result");
    }
  }

  getUserFullDataById(id) {
    this.getById(id);
    this.experienceService.getExperienceByUserId(id);
    var fullData = {
      user: this.getById(id),
      userExp: this.experienceService.getExperienceByUserId(id)
    };
    console.log(fullData);
    return fullData;
  }
  // filterSearch(input) {
  //   let res = this.users.filter(a => {
  //     a.name.includes(input);
  //   });
  //   console.log(res);
  // }
}
