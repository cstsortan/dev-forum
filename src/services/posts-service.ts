import { Post } from "../interfaces/post";
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Tag } from "../interfaces/tag";
import { lazyLoad } from "./firebase-service";
import { AppUser } from "../interfaces/app-user";
import { PostResponse } from "../interfaces/post-response";

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

export async function getTags(): Promise<Tag[]> {
    const response = await fetch('https://dev-forum-45f8b.firebaseapp.com/api/tags');
    const fetchedTags = await response.json();
    return fetchedTags as Tag[];
}

export function getPostDoc(postId: string): Observable<Post> {
    return lazyLoad().pipe(switchMap(({app, rxfire}) => {
        return rxfire.docData(app.firestore().doc(`posts/${postId}`), 'id');
    }));
}


export function getPostsCol(query: string[]|null, limit: number = 10): Observable<Post[]> {
    return lazyLoad().pipe(
        switchMap(({app, rxfire}) => {
            const postsCol = app.firestore().collection('posts');
            if(query) {
                return rxfire.collectionData<Post>(
                        postsCol
                        .where(query[0], query[1] as any, query[2])
                        .orderBy('timestamp', 'desc')
                        .limit(limit), 'id'
                );
            }
            return rxfire.collectionData<Post>(postsCol.orderBy('timestamp', 'desc').limit(limit), 'id')
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
        app.firestore().collection('posts').add({
            ...post, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
}

export function addPostResponse(post: Post, response: string, user: AppUser) {
    return Promise.all([lazyLoad().toPromise(), import('firebase/app')])
    .then(([{app, rxfire}, firebase]) => {
        return app.firestore().collection('post-responses').add({
            text: response,
            author: user,
            rootPost: post,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        } as PostResponse).then(() => {
            return {app, rxfire, firebase, postId: post.id};
        });
    }).then(({app, rxfire, firebase, postId}) => {
        return app.firestore().collection('posts').doc(post.id).update({
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
}
export function getPostResponses(postId: string): Observable<PostResponse[]> {
    return lazyLoad().pipe(switchMap(({app, rxfire}) => {
        const responsesCol = app.firestore().collection('post-responses');
        return rxfire.collectionData<PostResponse>(
            responsesCol.where('rootPost.id', '==', postId).orderBy('timestamp'),
            'id'
        );
    }));
}