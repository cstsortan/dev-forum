const functions = require('firebase-functions')
const admin = require('firebase-admin')
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dev-forum-45f8b.firebaseio.com"
})
const fs = require('fs')
const path = require('path')
const express = require('express')
const indexHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'))
const db = admin.firestore();
const postsCol = db.collection('posts').orderBy('timestamp', 'desc').limit(10);
const app = express();
const tagsCol = db.collection('tags');

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    postsCol.get().then(snap => {
        const posts = snap.docs.map(mapDocToPost)
        res.send(indexHTML.toString().replace("/*SSR*/", "window.__posts = "+JSON.stringify(posts)))
        return;
    }).catch(err => {
        console.log('We had an error', err)
        res.send(indexHTML.toString())
        return;
    })
})

app.get('/api/posts', (req, res) => {
    res.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    postsCol.get().then(snap => {
        res.send(snap.docs.map(mapDocToPost))
        return
    }).catch(err => {
        res.sendStatus(404).send({error: err})
    })
});

app.get('/api/tags', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    db.collection('tags').orderBy('name').get().then(snap => {
        res.send(snap.docs.map(mapDocToPost));
        return
    }).catch(err => {
        res.sendStatus(404).send({error: err});
    });
})

exports.defForum = functions.https.onRequest(app);

exports.onPostCreated = functions.firestore
.document('posts/{postId}')
.onCreate((snapshot, context) => {
    const post = mapDocToPost(snapshot);
    return tagsCol.doc(post.tag.id).set({latestPost: post.title}, {merge: true});
});

exports.onReplySubmitted = functions.firestore
.document('post-responses/{responseId}')
.onCreate((snapshot, context) => {
    // return db.collection('posts').doc(snapshot.data().rootPost.id).set({
        
    // }, {merge: true});
    return admin.firestore().runTransaction(transaction => {
        return transaction.get(db.collection('posts').doc(snapshot.data().rootPost.id))
            .then(doc => transaction.set(doc.ref, {responses: doc.data().responses + 1 || 1}, {merge: true}));
    });
});

const mapDocToPost = (doc) => {
    let post = doc.data()
    post.id = doc.id
    return post;
}