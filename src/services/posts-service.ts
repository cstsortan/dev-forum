import { Post } from "../interfaces/post";
import { Observable, from, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Tag } from "../interfaces/tag";
import { lazyLoad } from "./firebase-service";

export async function getDummyPosts() : Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const fetchedPosts: any[] = await response.json();
    return fetchedPosts.map(fetchedPost => ({
        id: fetchedPost.id,
        authorUid: fetchedPost.userId,
        text: fetchedPost.title,
        title: fetchedPost.userId
    } as Post))
}


export async function getPosts() : Promise<Post[]> {
    const response = await fetch('https://dev-forum-45f8b.firebaseapp.com/api/posts');
    const fetchedPosts: any[] = await response.json();
    return fetchedPosts as Post[];
}



export function getPostsCol(tagId: string = '', limit: number = 10): Observable<Post[]> {
    return lazyLoad().pipe(
        switchMap(({app, rxfire}) => {
            if(tagId !== '') {
                return rxfire.collectionData<Post>(
                    app.firestore().collection('posts')
                        .where('tag.id', '==', tagId)
                        .orderBy('timestamp', 'desc')
                        .limit(limit)
                );
            }
            return rxfire.collectionData<Post>(app.firestore()
            .collection('posts').orderBy('timestamp', 'desc').limit(limit), 'id')
        })
    );
}

export function getTagsCol(): Observable<Tag[]> {
    return lazyLoad().pipe(
        switchMap(({app, rxfire}) => {
            return rxfire.collectionData<Tag>(app.firestore()
                .collection('tags').orderBy('name'), 'id')
        })
    );
}

export function addPost(post: Post) {
    return Promise.all([lazyLoad().toPromise(), import('firebase/app')])
    .then(([{app, rxfire}, firebase]) => {
        app.firestore().collection('posts').add({...post, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()});
    });
}
