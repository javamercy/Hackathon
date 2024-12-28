import { Injectable } from '@angular/core';
import { BlogPost } from '../components/models/blog-post.model';
import { blogs } from '../data/blog-data';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = blogs;

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost {
    return this.blogPosts.find((post) => post.id === id);
  }
}
