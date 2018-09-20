import { from, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: Make sure you have some Firebase Configuration in place
import { CONFIG } from '../config';

export function lazyLoad(enablePersistence = true, config: any = CONFIG) {
    const app$ = from(import('firebase/app'));
    
    // NOTE: The lazy load for Firestore does not work with TypeScipt
    // w/out hacking the node_modules/firebase/firestore/package.json file
    // to use "typings": "../index.d.ts".

    const firestore$ = from(import(
      /* webpackChunkName: "firebase" */
      /* webpackMode: "lazy" */
      // @ts-ignore
      'firebase/firestore'
      ));
    const rxfire$ = from(import(
      /* webpackChunkName: "firebase" */
      /* webpackMode: "lazy" */
      'rxfire/firestore'
      ));
    const rxauth$ = from(import(
      /* webpackChunkName: "firebase" */
      /* webpackMode: "lazy" */
    'rxfire/auth'));
    const auth$ = from(import(
      /* webpackChunkName: "firebase" */
      /* webpackMode: "lazy" */
      // @ts-ignore
      'firebase/auth'
      ));
    return combineLatest(app$, firestore$, rxfire$, rxauth$, auth$)
      .pipe(
        map(([firebase, firestore, rxfire, rxauth, auth]) => {
          const app = firebase.apps[0] || firebase.initializeApp(config);
          const settings = { timestampsInSnapshots: true};
          app.firestore().settings(settings);
          if(enablePersistence && !firebase.apps[0]) { app.firestore().enablePersistence(); }
          return { app, rxfire, rxauth };
        })
      );
  }

