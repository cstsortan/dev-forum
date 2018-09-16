import { createStandardAction } from "typesafe-actions";
import { Post } from "../interfaces/Post";

export const updatePosts 
    = createStandardAction('posts-list/UPDATE_POSTS')<Post[]>();

export const queryAllDiscussions
    =createStandardAction('posts-list/QUERY_ALL')();

export const showMorePosts
    =createStandardAction('posts-list/RAISE_LIMIT')();

export const queryTag
    =createStandardAction('posts-list/QUERY_TAG')<string>();

export const selectPost
    =createStandardAction('posts-list/SELECT_POST')<Post>();