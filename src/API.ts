/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  feedIDs?: Array< string > | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  feedIDs?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  feedIDs?: Array< string > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateFeedInput = {
  id?: string | null,
  name: string,
  userID: string,
};

export type ModelFeedConditionInput = {
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFeedConditionInput | null > | null,
  or?: Array< ModelFeedConditionInput | null > | null,
  not?: ModelFeedConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum PostType {
  IMAGE = "IMAGE",
  WEBSITE = "WEBSITE",
}


export type UpdateFeedInput = {
  id: string,
  name?: string | null,
  userID?: string | null,
};

export type DeleteFeedInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  title?: string | null,
  content: string,
  postType?: PostType | null,
  userID: string,
  feedID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  postType?: ModelPostTypeInput | null,
  userID?: ModelIDInput | null,
  feedID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelPostTypeInput = {
  eq?: PostType | null,
  ne?: PostType | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  postType?: PostType | null,
  userID?: string | null,
  feedID?: string | null,
  expectedVersion: number,
};

export type DeletePostInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  userId: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  userId?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  feedIDs?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFeedFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFeedFilterInput | null > | null,
  or?: Array< ModelFeedFilterInput | null > | null,
  not?: ModelFeedFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  postType?: ModelPostTypeInput | null,
  userID?: ModelIDInput | null,
  feedID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeedMutationVariables = {
  input: CreateFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type CreateFeedMutation = {
  createFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedMutationVariables = {
  input: UpdateFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type UpdateFeedMutation = {
  updateFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedMutationVariables = {
  input: DeleteFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type DeleteFeedMutation = {
  deleteFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFeedQueryVariables = {
  id: string,
};

export type GetFeedQuery = {
  getFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedsQueryVariables = {
  filter?: ModelFeedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedsQuery = {
  listFeeds:  {
    __typename: "ModelFeedConnection",
    items:  Array< {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type FeedsByUserQueryVariables = {
  userID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeedsByUserQuery = {
  feedsByUser:  {
    __typename: "ModelFeedConnection",
    items:  Array< {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type PostsByFeedQueryVariables = {
  feedID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByFeedQuery = {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type PostsByUserQueryVariables = {
  userID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserQuery = {
  postsByUser:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
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
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    feedIDs: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeedSubscription = {
  onCreateFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedSubscription = {
  onUpdateFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedSubscription = {
  onDeleteFeed:  {
    __typename: "Feed",
    id: string,
    name: string,
    userID: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts:  {
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
        } | null,
        feedID: string,
        feed:  {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments:  {
          __typename: "ModelCommentConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
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
      feeds:  {
        __typename: "ModelFeedConnection",
        items:  Array< {
          __typename: "Feed",
          id: string,
          name: string,
          userID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedID: string,
    feed:  {
      __typename: "Feed",
      id: string,
      name: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userId: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        post:  {
          __typename: "Post",
          id: string,
          title: string | null,
          content: string,
          postType: PostType | null,
          userID: string,
          feedID: string,
          createdAt: string,
          updatedAt: string,
          version: number,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    version: number,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    postID: string,
    userId: string,
    user:  {
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
        } | null > | null,
        nextToken: string | null,
      } | null,
      feedIDs: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post:  {
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
        feeds:  {
          __typename: "ModelFeedConnection",
          nextToken: string | null,
        } | null,
        feedIDs: Array< string > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      feedID: string,
      feed:  {
        __typename: "Feed",
        id: string,
        name: string,
        userID: string,
        user:  {
          __typename: "User",
          id: string,
          name: string | null,
          feedIDs: Array< string > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        posts:  {
          __typename: "ModelPostConnection",
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          userId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      version: number,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
