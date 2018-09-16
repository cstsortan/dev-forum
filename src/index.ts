import './components';
import { store } from './store';
import './components/auth/fb-ui-auth';
import {getAuthState} from './services/auth-service';
import { updateAuthState } from './actions/auth-actions';
import { updatePosts } from './actions/posts-list-actions';
import { getPosts, getPostsCol } from './services/posts-service';
import { getState$ } from './utils/get-state';
import { switchMap, distinctUntilChanged, map } from 'rxjs/operators';
import { PostsState } from './reducers/posts-list-reducer';

import * as equal from 'fast-deep-equal';

class App {
    constructor() {

        if((window as any).__posts) {
            store.dispatch(updatePosts((window as any).__posts));
        }

        //Hit the database to retrieve posts
        getPosts().then(posts => store.dispatch(updatePosts(posts)));

        getAuthState().subscribe(user => {
            store.dispatch(updateAuthState(user));
        });

        getState$(store)
        .pipe(
            map(state => {
              const postsState = (state as any).postsList as PostsState;
              return {
                  query: postsState.query,
                  limit: postsState.limit,
                  posts: postsState.posts,
              };
            }),
            distinctUntilChanged(equal),
            switchMap((state) => {
                return getPostsCol(state.query, state.limit);
            })
        )
        .subscribe(posts => {
            if(posts === store.getState().postsList.posts){
                return;
            }
            store.dispatch(updatePosts(posts))
        });;
    }
}

new App();