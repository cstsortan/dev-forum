import { Observable, of, from, combineLatest } from "rxjs";
import { AppUser } from "../interfaces/app-user";
import { lazyLoad } from "./firebase-service";
import { switchMap, first, map } from "rxjs/operators";

export function getUser(userUid: string): Observable<AppUser> {
    return lazyLoad().pipe(
      switchMap(({app, rxfire, rxauth}) => {
        return rxfire.docData<AppUser>(app.firestore().doc(`users/${userUid}`), 'userUid');
      })
    )

  }

  export function getAuthState() {
    return lazyLoad().pipe(
        switchMap(({app, rxfire, rxauth}) => {
            return rxauth.authState(app.auth());
        }),
        map(user => {
            if(!user) return null;
            return {
                name: user.displayName,
                profilePhotoUrl: user.photoURL,
                userUid: user.uid,
            } as AppUser;
        })
    );
}

export async function startAuth(navigationFunc: () => void) {
    const [{app, rxfire, rxauth}, ui] = await Promise.all([lazyLoad().toPromise(), import('firebaseui')]);
    navigationFunc();
    return {app, ui};
}