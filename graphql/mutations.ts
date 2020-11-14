/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      feeds {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      feedIDs
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      feeds {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      feedIDs
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      feeds {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      feedIDs
      createdAt
      updatedAt
    }
  }
`;
export const createFeed = /* GraphQL */ `
  mutation CreateFeed(
    $input: CreateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    createFeed(input: $input, condition: $condition) {
      id
      name
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          title
          content
          postType
          userID
          feedID
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFeed = /* GraphQL */ `
  mutation UpdateFeed(
    $input: UpdateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    updateFeed(input: $input, condition: $condition) {
      id
      name
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          title
          content
          postType
          userID
          feedID
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeed = /* GraphQL */ `
  mutation DeleteFeed(
    $input: DeleteFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    deleteFeed(input: $input, condition: $condition) {
      id
      name
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          title
          content
          postType
          userID
          feedID
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      postType
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      feedID
      feed {
        id
        name
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          userId
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      postType
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      feedID
      feed {
        id
        name
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          userId
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      postType
      userID
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      feedID
      feed {
        id
        name
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          userId
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      userId
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        postType
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        feedID
        feed {
          id
          name
          userID
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      userId
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        postType
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        feedID
        feed {
          id
          name
          userID
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      userId
      user {
        id
        name
        feeds {
          nextToken
        }
        feedIDs
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        postType
        userID
        user {
          id
          name
          feedIDs
          createdAt
          updatedAt
        }
        feedID
        feed {
          id
          name
          userID
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      content
      createdAt
      updatedAt
    }
  }
`;
