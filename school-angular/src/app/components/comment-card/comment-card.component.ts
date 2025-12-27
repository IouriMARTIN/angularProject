import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html'
})
export class CommentCardComponent {
  @Input() comment: any;
}
