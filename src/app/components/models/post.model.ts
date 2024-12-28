export interface Post {
  id: number;
  threadId: number;
  author: string;
  content: string;
  datePosted: string;
  isTrusted: boolean;
}
