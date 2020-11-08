import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly feeds: Feed[];
  readonly feedIDs: string[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Feed {
  readonly id: string;
  readonly name: string;
  readonly user?: User;
  readonly posts: Post[];
  constructor(init: ModelInit<Feed>);
  static copyOf(source: Feed, mutator: (draft: MutableModel<Feed>) => MutableModel<Feed> | void): Feed;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly user?: User;
  readonly feed?: Feed;
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly user?: User;
  readonly post?: Post;
  readonly content: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}