import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../api/api-user.service';
import { PostService } from '../../api/api-post.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PostCardComponent],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  user: any;
  posts: any[] = [];

  constructor(
    route: ActivatedRoute,
    userService: UserService,
    postService: PostService
  ) {
    const id = Number(route.snapshot.paramMap.get('id'));
    userService.getUser(id).subscribe((u: any) => this.user = u);
    postService.getPostsByUser(id).subscribe((p: any) => this.posts = p.posts);
  }
}
