import { company } from "./../../../_model/Company";
import { Experience } from "./../../../_model/experience";
import { Injectable } from "@angular/core";
import { UserService } from "src/app/features/profile/Users.service";

@Injectable({
  providedIn: "root"
})
export class ExperienceService {
  private expiriences: Experience[] = [
    {
      id: 1,
      userId: 1,
      title: "Trainee",
      location: "Al Asmaili'yah ,Egypt",
      company: {
        id: 1,
        name: "ITI Information Techonology (ITI)",
        compLogo: "../../assets/images/iti.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "9-months trainee"
    },
    {
      id: 2,
      userId: 1,

      title: "Manager",
      location: "Al Asmaili'yah ,Egypt",
      company: {
        id: 1,
        name: " Vodafone",
        compLogo: "../../assets/images/suez-canal.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    },

    {
      id: 1,
      userId: 2,
      title: "Student",
      location: "Al Asmaili'yah ,Egypt",
      company: {
        id: 1,
        name: "ITI Information Techonology (ITI)",
        compLogo: "../../../assets/images/suez-canal.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    },
    {
      id: 2,
      userId: 2,
      title: "Manager",
      location: "Giza ,Egypt",
      company: {
        id: 1,
        name: "Orange Egypt",
        compLogo: "../../../assets/images/orange.png"
      },

      startDate: "sept 2014",
      endDate: "sept 2020",
      description: "pala pla pla"
    },
    {
      id: 1,
      userId: 3,
      title: "Student",
      location: "Al Asmaili'yah ,Egypt",
      company: {
        id: 1,
        name: "ITI Information Techonology (ITI)",
        compLogo: "../../assets/images/suez-canal.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    },
    {
      id: 2,
      userId: 3,
      title: "Student",
      location: "Cairo ,Egypt",
      company: {
        id: 1,
        name: "Etisalat Egypt",
        compLogo: "../../assets/images/etisalat.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    },
    {
      id: 1,
      userId: 4,
      title: "Manager",
      location: "Cairo ,Egypt",
      company: {
        id: 1,
        name: "Vodafone UK",
        compLogo: "../../assets/images/vodafone.jpg"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    },
    {
      id: 2,
      userId: 4,
      title: "HR",
      location: "Cairo ,Egypt",
      company: {
        id: 1,
        name: "Information technology institiute (ITI)",
        compLogo: "../../assets/images/iti.png"
      },

      startDate: "Oct 2019",
      endDate: "sept 2020",
      description: "pala pla pla"
    }
  ];

  AddExperience(obj) {
    const ide = this.getExperienceByUserId(obj.userId).length + 1;
    obj = {
      id: ide,
      userId: obj.userId,
      title: obj.title,
      location: obj.location,
      company: {
        id: 1,
        name: obj.company.name,
        compLogo: obj.company.compLogo
      }
    };
    console.log(this.expiriences);
    this.expiriences.push(obj);
  }
  getExperinceById(id) {
    const exp = this.expiriences.find(e => e.id == id);
    return exp;
  }
  getExperienceByUserId(userid) {
    var ARR = this.expiriences.filter(e => e.userId == userid);
    return ARR;
  }
  getSpecExperience(userId, id) {
    var userExp = this.getExperienceByUserId(userId);
    var exp = userExp.find(ex => ex.id == id);
    return exp;
  }
  updateExperience(exp: Experience, id) {
    //  const ide = this.getExperienceByUserId(exp.userId).length + 1;

    const obj = this.getSpecExperience(exp.userId, id);

    obj.title = exp.title;
    obj.company.name = exp.company.name;
    obj.company.compLogo = exp.company.compLogo;
    obj.location = exp.location;
    obj.startDate = exp.startDate;
    obj.endDate = exp.endDate;
    obj.description = exp.description;
  }
  //   getUserById(id) {
  //     return this.userService.getById(id);
  //   }
}
