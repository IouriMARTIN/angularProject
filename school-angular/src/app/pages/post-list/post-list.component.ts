import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../api/api-post.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  posts: any[] = [];

  constructor(postService: PostService) {
    postService.getPosts().subscribe((p: any) => this.posts = p.posts);
  }
}
