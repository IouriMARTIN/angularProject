import { TestBed } from '@angular/core/testing';

import { CommentService } from './api-comment.service';

describe('ApiCommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
