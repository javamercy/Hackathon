import { Component } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { Thread } from '../models/thread.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css',
})
export class ForumComponent {
  threads: Thread[] = [];

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit(): void {
    this.threads = this.forumService.getThreads();
  }

  viewThread(id: number): void {
    this.router.navigate(['/forum', id]);
  }
}
