import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../api/api-post.service';
import { CommentService } from '../../api/api-comment.service';
import { CommentCardComponent } from '../../components/comment-card/comment-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, CommentCardComponent],
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent {
  post: any;
  comments: any[] = [];

  constructor(
    route: ActivatedRoute,
    postService: PostService,
    commentService: CommentService
  ) {
    const id = Number(route.snapshot.paramMap.get('id'));
    postService.getPost(id).subscribe((p: any) => this.post = p);
    commentService.getCommentsByPost(id)
      .subscribe((c: any) => this.comments = c.comments);
  }
}
