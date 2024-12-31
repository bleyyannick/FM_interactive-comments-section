// Utility type to require at least one of the properties in Image property if provided
type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<T>;
  }[keyof T];
 
 interface Image {
    png?: string;
    webp?: string;
  }
 
export type User = {
    username: string;
    image?: RequireAtLeastOne<Image>;
  }

export type Comments = {
    id: number;
    content: string; 
    user: User;
    createdAt: string; // it will change to Date type
    replies: Comments[];
    replyingTo?: User['username'];
}