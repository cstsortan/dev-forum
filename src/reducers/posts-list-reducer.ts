import * as postsListActions from '../actions/posts-list-actions';
import { getType, ActionType } from 'typesafe-actions';
import { Post } from '../interfaces/Post';

export type PostsListAction = ActionType<typeof postsListActions>;

export class PostsState {
    posts: Post[];
    limit: number;
    query: string[]|null;
    selectedPost: Post|null;

    constructor() {
        this.posts = [];
        this.limit = 10;
        this.query = null;
        this.selectedPost = null;
    }
}

const initialState = new PostsState();

export function postsListReducer(state = initialState, action: PostsListAction): PostsState  {
    switch(action.type) {
        case getType(postsListActions.updatePosts):
            return {
                ...state,
                posts: action.payload,
            } as PostsState;
        case getType(postsListActions.queryAllDiscussions):
            return {
                ...state,
                query: null,
                limit: 10,
                posts: [],
            } as PostsState;
        case getType(postsListActions.showMorePosts):
            return {
                ...state,
                limit: state.limit += 10,
            } as PostsState;
        case getType(postsListActions.queryTag):
            return {
                ...state as PostsState,
                query: ['tag.id', '==', action.payload],
                posts: [],
            } as PostsState;
        case getType(postsListActions.selectPost):
            return {
                ...state,
                selectedPost: action.payload,
            } as PostsState;
        default: return state;
    }
}
