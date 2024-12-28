import { Component } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogs: BlogPost[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogPosts();
  }

  viewBlogDetail(id: number) {
    this.router.navigate(['/blog', id]);
  }
}
