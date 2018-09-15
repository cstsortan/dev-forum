// import '@webcomponents/webcomponentsjs/webcomponents-loader';
import './components';
import { store } from './store';
import './components/auth/fb-ui-auth';
import {getAuthState} from './services/auth-service';
import { updateAuthState } from './actions/auth-actions';

class App {
    constructor() {
        getAuthState().subscribe(user => {
            store.dispatch(updateAuthState(user))
        });
    }
}

new App();
