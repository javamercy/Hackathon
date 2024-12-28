import { Component } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { Post } from '../models/post.model';
import { Thread } from '../models/thread.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-thread',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-thread.component.html',
  styleUrl: './create-thread.component.css',
})
export class CreateThreadComponent {
  title: string = '';
  author: string = '';
  content: string = '';

  constructor(private forumService: ForumService, private router: Router) {}

  createThread(): void {
    if (this.title.trim() && this.author.trim() && this.content.trim()) {
      const newThread: Thread = {
        id: this.forumService.getThreads().length + 1,
        title: this.title,
        author: this.author,
        dateCreated: new Date().toISOString().split('T')[0],
        numberOfPosts: 1,
        lastPostDate: new Date().toISOString().split('T')[0],
      };
      this.forumService.addThread(newThread);
      const initialPost: Post = {
        id: 1,
        threadId: newThread.id,
        author: this.author,
        content: this.content,
        datePosted: newThread.dateCreated,
        isTrusted: this.forumService.isUserTrusted(this.author),
      };
      this.forumService.addPost(initialPost);
      this.router.navigate(['/forum', newThread.id]);
    }
  }
}
