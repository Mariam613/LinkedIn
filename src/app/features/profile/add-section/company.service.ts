import { company } from "./../../../_model/Company";
export class CompanyService {
  private companies: company[] = [
    {
      id: 1,
      name: "vodafone UK",
      compLogo: "../../assets/images/vodafone.jpg"
    },
    {
      id: 2,
      name: "Orange Egypt",
      compLogo: "../../assets/images/orange.png"
    },
    {
      id: 3,
      name: "Etisalat Egypt",
      compLogo: "../../assets/images/etisalat.png"
    },
    {
      id: 4,
      name: "Information technology institiute (ITI)",
      compLogo: "../../assets/images/iti.png"
    },
    {
      id: 5,
      name: "Suez Canal University",
      compLogo: "../../assets/images/suez-canal.png"
    }
  ];
  getAll() {
    return this.companies.slice();
  }
  getLogo(nameComp) {
    var obj = this.companies.find(a => a.name == nameComp);

    return obj.compLogo;
  }
}
