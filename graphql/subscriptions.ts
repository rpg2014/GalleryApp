/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed {
    onCreateFeed {
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
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed {
    onUpdateFeed {
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
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed {
    onDeleteFeed {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
