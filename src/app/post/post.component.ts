import { Component } from '@angular/core';
import { IPost } from '../IPost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts$!: IPost[];
  constructor(public postservice: PostService) {}

  ngOnInit() {
    this.postservice.getPosts().subscribe(res => {
      this.posts$ = res;
    });
  }
}


