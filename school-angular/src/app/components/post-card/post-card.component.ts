import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-post-card',
  templateUrl: './post-card.component.html'
})
export class PostCardComponent {
  @Input() post: any;
}
