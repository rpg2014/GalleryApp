// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Feed, Post, Comment } = initSchema(schema);

export {
  User,
  Feed,
  Post,
  Comment
};