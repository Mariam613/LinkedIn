// import { User } from "../../_model/user";
import { Community } from "src/app/_model/community";
import { UserService } from "./../profile/Users.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Comments } from "src/app/_model/comment";
@Injectable({
  providedIn: "root"
})
export class CommunityService {
  private community: Community[] = [
    {
      id: 1,
      userId: 1,
      post: {
        id: 1,
        post: "HI I'M Using LinkedIn :d",
        userId: 2,
        img:
          "https://media-exp1.licdn.com/dms/image/sync/C4E18AQH9BZAHZOw1Hg/companyUpdate-article-image-shrink_627_1200/0?e=1586995200&v=beta&t=eN67_JhHsEnqLE00PZzKmYP8qxO4nGtaRrSXbOTbS7M",
        comments: [
          {
            id: 1,
            comment: "You are the best dear,,,,, so proud of You 👏👏 (edited)",
            userId: 3
          }
        ],
        like: 2
      },
      isLiked: false,
      showComments: false
    },
    {
      id: 2,
      userId: 1,
      post: {
        id: 2,
        post: "HI I'M Using LinkedIn :d",
        userId: 3,
        img:
          "https://media-exp1.licdn.com/dms/image/C4D22AQHqrHZscnlebA/feedshare-shrink_800/0?e=1588809600&v=beta&t=bOO7po4mthom96vOd7HR4TdyT0l15KQQUGTotJhtj8E",
        comments: [
          {
            id: 1,
            comment: "You are the best dear,,,,, so proud of You 👏👏 (edited)",
            userId: 3
          }
        ],
        like: 2
      },
      isLiked: false,
      showComments: false
    },
    {
      id: 3,
      userId: 2,
      post: {
        id: 3,
        post:
          "By connecting with people you know on LinkedIn, you can keep in touch with them over the years and get the support you need when the time is right. One example is asking for an introduction.",

        userId: 1,
        img:
          "https://media-exp1.licdn.com/dms/image/sync/C4E18AQH9BZAHZOw1Hg/companyUpdate-article-image-shrink_627_1200/0?e=1586995200&v=beta&t=eN67_JhHsEnqLE00PZzKmYP8qxO4nGtaRrSXbOTbS7M",
        comments: [
          {
            id: 1,
            comment: "You are the best dear,,,,, so proud of You 👏👏 (edited)",
            userId: 3
          }
        ],
        like: 2
      },
      isLiked: false,
      showComments: false
    },
    {
      id: 4,
      userId: 2,
      post: {
        id: 4,
        post: "HI I'M Using LinkedIn :d",
        userId: 2,
        img: "https://code95.com/wp-content/uploads/BLOGPOST.png",
        comments: [{ id: 2, comment: "Welcome broo", userId: 2 }],
        like: 5
      },
      isLiked: false,
      showComments: false
    },
    {
      id: 5,
      userId: 3,
      post: {
        id: 5,
        post:
          "By connecting with people you know on LinkedIn, you can keep in touch with them over the years and get the support you need when the time is right. One example is asking for an introduction.",

        userId: 1,
        img:
          "https://media-exp1.licdn.com/dms/image/C5622AQG2CSmbGjaf4g/feedshare-shrink_2048_1536/0?e=1588809600&v=beta&t=riV4mOQjCVFflLfO-Vawjz984RN16DtormqpZTrkSyE",
        comments: [
          {
            id: 1,
            comment: "You are the best dear,,,,, so proud of You 👏👏 (edited)",
            userId: 3
          }
        ],
        like: 2
      },
      isLiked: false,
      showComments: false
    },
    {
      id: 6,
      userId: 3,
      post: {
        id: 6,
        post: "HI I'M Using LinkedIn :d",
        userId: 2,
        img:
          "https://www.socialchamp.io/blog/wp-content/uploads/2019/09/schedule-posts-on-linkedin-1.jpg",
        comments: [
          {
            id: 1,
            comment:
              "Looking for people to book travel from home 🛩️🚗🏢🛳️🏡 being a travel agent has some great perks!💯 Free cruises and hotel stays. We will train you! Inbox me 📨or message me here👇",
            userId: 1
          },
          {
            id: 2,
            comment:
              "Looking for people to book travel from home 🛩️🚗🏢🛳️🏡 being a travel agent has some great perks!💯 Free cruises and hotel stays. We will train you! Inbox me 📨or message me here👇",
            userId: 2
          }
        ],
        like: 10
      },
      isLiked: false,
      showComments: false
    }
  ];

  constructor(private userService: UserService) {}
  postAdded = new EventEmitter<any>();

  getAll(): Community[] {
    return this.community.slice();
  }

  getById(id: number): Community {
    return this.community.find(a => a.id === id);
  }
  getUserById(id: number) {
    return this.userService.getById(id);
  }
  getUserName(i: number) {
    console.log(i);
    return i;
  }
  update(postid: number, newComment: Comments) {
    // console.log(newComment);
    for (var i = 0; i < this.community.length; i++) {
      if (this.community[i].id === postid) {
        this.community[i].post.comments.push(newComment);
      }
    }
  }
  Add(newCommmunity: Community) {
    this.community.push(newCommmunity);
  }
  getCommunityById(userId: number) {
    return this.community.filter(co => co.userId == userId);
  }
  addPost(post, userId) {
    let user = this.userService.getById(userId);
    let comId = this.community.length + 1;
    var userPosts = this.community.filter(a => a.userId == userId);
    let postId = userPosts.length + 1;
    var obj = {
      id: comId,
      userId: userId,
      post: {
        id: postId,
        post: post,

        userId: userId,
        img: "",
        comments: [],
        like: 0
      }
    };
    console.log(obj);
    this.community.unshift(obj);
  }
}
