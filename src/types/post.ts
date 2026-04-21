export type PostType = "photo" | "note" | "status";

interface PostBase {
  id: string;
  authorId: string;
  createdAt: string;
  type: PostType;
}

export interface PhotoPost extends PostBase {
  type: "photo";
  text: string;
  imageUrl: string;
  alt: string;
}

export interface NotePost extends PostBase {
  type: "note";
  text: string;
}

export interface StatusPost extends PostBase {
  type: "status";
  mood: string;
  text: string;
}

export type Post = PhotoPost | NotePost | StatusPost;
