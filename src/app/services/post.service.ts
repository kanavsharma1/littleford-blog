import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[];
  constructor(private http: HttpClient, private router: Router) { }

  getPosts() {
    console.log("inside service get posts")
    return [{
      img: "",
      title: "this is first post",
      content: "lorem ipsum "
    },
    {
      img: "",
      title: "this is first post",
      content: "lorem ipsum "
    },
    {
      img: "",
      title: "this is first post",
      content: "lorem ipsum "
    }
    ]
  }

  createPost(title: string, content: string, image: File) {

  }


}
