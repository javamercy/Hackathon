// src/app/services/forum.service.ts
import { Injectable } from '@angular/core';
import { Post } from '../components/models/post.model';
import { Thread } from '../components/models/thread.model';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  private threads: Thread[] = [
    {
      id: 1,
      title: 'Yazılım Gelişiminde Doğru Kariyer Yolu Seçimi',
      author: 'Selin Kaya',
      dateCreated: '13 Aralık 2024',
      numberOfPosts: 3,
      lastPostDate: '15 Aralık 2024',
    },
    {
      id: 2,
      title: 'Kariyer Büyümesi İçin Etkili Stratejiler',
      author: 'Ata Yılmaz',
      dateCreated: '20 Aralık 2024',
      numberOfPosts: 5,
      lastPostDate: '22 Aralık 2024',
    },
  ];

  private posts: Post[] = [
    {
      id: 1,
      threadId: 1,
      author: 'Selin Kaya',
      content:
        'Frontend ve Backend geliştirme arasında seçim yapmakta zorlanıyorum. Herhangi bir tavsiyeniz var mı?',
      datePosted: '25 Aralık 2024',
      isTrusted: false,
    },
    {
      id: 2,
      threadId: 1,
      author: 'Ahmet Can',
      content:
        'Her iki alanın da avantajları var. Tutkunun nereye gittiğini düşün.',
      datePosted: '25 Aralık 2024',
      isTrusted: true,
    },
    {
      id: 3,
      threadId: 1,
      author: 'Ata Yılmaz',
      content:
        'İki alanda da projeler üzerinde çalışmayı denedin mi? Neyi daha çok sevdiğini görmek için iyi olabilir.',
      datePosted: '26 Aralık 2024',
      isTrusted: false,
    },
  ];

  private trustedUsers: string[] = ['Selin Kaya', 'Ata Yılmaz'];

  constructor() {}

  getThreads(): Thread[] {
    return this.threads;
  }

  getThreadById(id: number): Thread | undefined {
    return this.threads.find((thread) => thread.id === id);
  }

  addThread(thread: Thread): void {
    this.threads.push(thread);
  }

  getPostsByThreadId(threadId: number): Post[] {
    return this.posts.filter((post) => post.threadId === threadId);
  }

  addPost(post: Post): void {
    this.posts.push(post);
    const thread = this.getThreadById(post.threadId);
    if (thread) {
      thread.numberOfPosts += 1;
      thread.lastPostDate = post.datePosted;
    }
  }

  isUserTrusted(author: string): boolean {
    return this.trustedUsers.includes(author);
  }
}
