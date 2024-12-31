// Utility type to require at least one of the properties in Image property if provided
type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<T>;
  }[keyof T];
 
 interface Image {
    png?: string;
    webp?: string;
  }

  export interface DataType {
    comments: CommentType[];
    currentUser: User;
  }
 
export type User = {
    username: string;
    image?: RequireAtLeastOne<Image>;
  }

export type CommentType = {
    id: number;
    content: string; 
    user: User;
    createdAt: string; // it will change to Date type
    replies?: CommentType[];
    replyingTo?: User['username'];
}