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
const db = admin.firestore()
const postsCol = db.collection('posts').orderBy('timestamp', 'desc').limit(10);
const app = express()

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    postsCol.get().then(snap => {
        const posts = snap.docs.map(doc => {
            let post = doc.data();
            post.id = doc.id;
            return post;
        })
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
        res.send(snap.docs.map(doc => {
            let post = doc.data()
            post.id = doc.id
            return post
        }))
        return
    }).catch(err => {
        res.sendStatus(404).send({error: err})
    })
})

exports.defForum = functions.https.onRequest(app);