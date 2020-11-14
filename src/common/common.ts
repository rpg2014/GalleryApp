import { Feed, Post, User } from "../../models";
import { CreateUserMutation, GetUserQuery, PostType, UpdateUserMutation } from "../API";



export const convertUserQueryToUser = (input: {
    __typename: "User",
    id: string,
    name: string | null,
    feeds:  {
      __typename: "ModelFeedConnection",
      items:  Array< {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      }> | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  }) => {

    let feeds;
    if(input.feeds && input.feeds.items){
      feeds = input.feeds.items.map((item) => feedQueryToObject(item))
    }

    const user: User = {
        id: input.id,
        name: input.name ? input.name : undefined,
        feedIDs: input.feedIDs ? input.feedIDs : [],
        feeds: feeds,
    }
    return user
}
const feedQueryToObject = (input: {
  __typename: "Feed",
  id: string,
  name: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
}): Feed => {
  const feed: Feed ={
    id: input.id,
    name: input.name,
    user: {
      id: input.userID
    },
  }
  return feed;
}

export const convertPostByFeed= (input: {
  postsByFeed:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string | null,
      content: string,
      postType: PostType | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      },
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    }> | null,
    nextToken: string | null,
  } | null,
}): Post[] => {
  if(input.postsByFeed && input.postsByFeed.items) {
    const posts: Post[] = input.postsByFeed.items.map(item => postQueryToObject(item))
    return posts
  }else {
    return []
  }
  
}

const postQueryToObject = (input:  {
  __typename: "Post",
  id: string,
  title: string | null,
  content: string,
  postType: PostType | null,
  userID: string,
  user:  {
    __typename: "User",
    id: string,
    name: string | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  },
  feedID: string,
  feed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  },
  comments:  {
    __typename: "ModelCommentConnection",
    nextToken: string | null,
  } | null,
  createdAt: string,
  updatedAt: string,
  version: number,
}): Post => {
  const post: Post = {
    id: input.id,
    title: input.title ? input.title : undefined,
    content: input.content,
    postType: input.postType? input.postType as PostType : undefined,
    user: userQueryToObject(input.user),
    feed: {
      id: input.feed.id,
      name: input.feed.name,
      user: {
        id: input.feed.userID
      }
    },

  }
  return post
}

export const userQueryToObject = (input: {
  __typename: "User",
  id: string,
  name: string | null,
  feedIDs: Array< string > | null,
  createdAt: string,
  updatedAt: string,
}): User => {
  const user: User = {
    id: input.id,
    name: input.name? input.name: undefined,
  }
  return user;
}