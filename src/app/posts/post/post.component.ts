import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts;
  constructor(private postService: PostService) {
    console.log(this.postService.getPosts())
    this.posts = this.postService.getPosts();
  }









}
