import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../../services/forum.service';
import { Post } from '../models/post.model';
import { Thread } from '../models/thread.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum-thread',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum-thread.component.html',
  styleUrl: './forum-thread.component.css',
})
export class ForumThreadComponent {
  thread: Thread | undefined;
  posts: Post[] = [];
  newPostContent: string = '';
  authorName: string = '';

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.thread = this.forumService.getThreadById(id);
    if (this.thread) {
      this.posts = this.forumService.getPostsByThreadId(id);
    }
  }

  addPost(): void {
    if (this.newPostContent.trim() && this.authorName.trim() && this.thread) {
      const newPost: Post = {
        id: this.posts.length + 1,
        threadId: this.thread.id,
        author: this.authorName,
        content: this.newPostContent,
        datePosted: new Date().toLocaleDateString(),
        isTrusted: this.forumService.isUserTrusted(this.authorName),
      };
      this.forumService.addPost(newPost);
      this.posts.push(newPost);
      this.newPostContent = '';
      this.authorName = '';
    }
  }
}
