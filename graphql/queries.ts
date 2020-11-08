/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      feeds {
        items {
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
        nextToken
      }
      feedIDs
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFeed = /* GraphQL */ `
  query GetFeed($id: ID!) {
    getFeed(id: $id) {
      id
      name
      userID
      user {
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
      posts {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFeeds = /* GraphQL */ `
  query ListFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      postType
      userID
      user {
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
      feedID
      feed {
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
      comments {
        items {
          id
          postID
          userId
          user {
            id
            name
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
            feedID
            createdAt
            updatedAt
            version
          }
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      userId
      user {
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
      post {
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
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const feedsByUser = /* GraphQL */ `
  query FeedsByUser(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    feedsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const postsByFeed = /* GraphQL */ `
  query PostsByFeed(
    $feedID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByFeed(
      feedID: $feedID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const postsByUser = /* GraphQL */ `
  query PostsByUser(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
