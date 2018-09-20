!function(t){function e(e){for(var n,o,i=e[0],s=e[1],a=0,u=[];a<i.length;a++)o=i[a],r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(c&&c(e);u.length;)u.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=i);var s,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+t+".bundle.js"}(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,n[1](s)}r[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,a.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var c=s;o(o.s=39)}([function(t,e,n){!function(t){"use strict";function e(t,e,n){return{type:t,payload:e,meta:n}}function n(t,e){if(void 0===e&&(e=1),null==t)throw new Error("Argument (#"+e+") is missing");if("string"!=typeof t&&"symbol"!=typeof t)throw new Error("Argument (#"+e+") should be of type: string | symbol")}function r(t,e){var n=null!=e?e(t):function(){return{type:t}};return Object.assign(n,{getType:function(){return t}})}t.action=e,t.createAction=function(t,r){n(t);var o=null==r?function(){return e(t)}:r(e.bind(null,t));return Object.assign(o,{getType:function(){return t}})},t.createStandardAction=function(t){return n(t),Object.assign(function(){return r(t,function(t){return function(e,n){return{type:t,payload:e,meta:n}}})},{map:function(e){return r(t,function(t){return function(n,r){return Object.assign(e(n,r),{type:t})}})}})},t.createAsyncAction=function(t,e,o){return[t,e,o].forEach(function(t,e){n(t,e+1)}),Object.assign(function(){return{request:r(t,function(e){return function(e){return{type:t,payload:e}}}),success:r(e,function(t){return function(t){return{type:e,payload:t}}}),failure:r(o,function(t){return function(t){return{type:o,payload:t}}})}},{})},t.getType=function(t){if(null==t)throw new Error("first argument is missing");if(null==t.getType)throw new Error('first argument is not an instance of "typesafe-actions"');return t.getType()},t.isOfType=function(t,e){n(t);var r=function(e){return e.type===t};return null==e?r:r(e)},t.isActionOf=function(t,e){if(null==t)throw new Error("first argument is missing");if(Array.isArray(t))t.forEach(function(t,e){if(null==t.getType)throw new Error('first argument contains element\n        that is not created with "typesafe-actions" at index ['+e+"]")});else if(null==t.getType)throw new Error('first argument is not created with "typesafe-actions"');var n=function(e){return(Array.isArray(t)?t:[t]).some(function(t,n){return t.getType()===e.type})};return null==e?n:n(e)},t.createActionDeprecated=function(t,e){var n;if(null!=e){if("function"!=typeof e)throw new Error("second argument is not a function");n=e}else n=function(){return{type:t}};if(null==t)throw new Error("first argument is missing");if("string"!=typeof t&&"symbol"!=typeof t)throw new Error("first argument should be type of: string | symbol");return n.getType=function(){return t},n},Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(1),o=n(12),i=n(14),s=n(8),a=n(13),c=n(5),u=n(9),l=function(t){function e(e,n,r){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,o._parentSubscription=null,arguments.length){case 0:o.destination=i.a;break;case 1:if(!e){o.destination=i.a;break}if("object"==typeof e){if(d(e)){var s=e[a.a]();o.syncErrorThrowable=s.syncErrorThrowable,o.destination=s,s._addParentTeardownLogic(o)}else o.syncErrorThrowable=!0,o.destination=new p(o,e);break}default:o.syncErrorThrowable=!0,o.destination=new p(o,e,n,r)}return o}return r.a(e,t),e.prototype[a.a]=function(){return this},e.create=function(t,n,r){var o=new e(t,n,r);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t),this._unsubscribeParentSubscription())},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete(),this._unsubscribeParentSubscription())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._addParentTeardownLogic=function(t){t!==this&&(this._parentSubscription=this.add(t))},e.prototype._unsubscribeParentSubscription=function(){null!==this._parentSubscription&&this._parentSubscription.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},e}(s.a),p=function(t){function e(e,n,r,s){var a,c=t.call(this)||this;c._parentSubscriber=e;var u=c;return Object(o.a)(n)?a=n:n&&(a=n.next,r=n.error,s=n.complete,n!==i.a&&(u=Object.create(n),Object(o.a)(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=r,c._complete=s,c}return r.a(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;c.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=c.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):Object(u.a)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;Object(u.a)(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),c.a.useDeprecatedSynchronousErrorHandling)throw t;Object(u.a)(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!c.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return c.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Object(u.a)(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l);function d(t){return t instanceof l||"_addParentTeardownLogic"in t&&t[a.a]}},function(t,e,n){"use strict";var r=n(2),o=n(13),i=n(14);var s=n(7),a=n(6);function c(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:a.a}var u=n(5);n.d(e,"a",function(){return l});var l=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var s=this.operator,a=function(t,e,n){if(t){if(t instanceof r.a)return t;if(t[o.a])return t[o.a]()}return t||e||n?new r.a(t,e,n):new r.a(i.a)}(t,e,n);if(s?s.call(a,this.source):a._addParentTeardownLogic(this.source||u.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),u.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=p(e))(function(e,r){var o;o=n.subscribe(function(e){try{t(e)}catch(t){r(t),o&&o.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[s.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:c(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=p(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function p(t){if(t||(t=u.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={e:{}}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},function(t,e,n){"use strict";function r(){}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol&&Symbol.observable||"@@observable"},function(t,e,n){"use strict";var r=n(18),o=n(19),i=n(12),s=n(15),a=n(4);function c(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}c.prototype=Object.create(Error.prototype);var u=c;n.d(e,"a",function(){return l});var l=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this._parent,c=this._parents,l=this._unsubscribe,d=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var f=-1,h=c?c.length:0;n;)n.remove(this),n=++f<h&&c[f]||null;if(Object(i.a)(l))Object(s.a)(l).call(this)===a.a&&(e=!0,t=t||(a.a.e instanceof u?p(a.a.e.errors):[a.a.e]));if(Object(r.a)(d))for(f=-1,h=d.length;++f<h;){var y=d[f];if(Object(o.a)(y))if(Object(s.a)(y.unsubscribe).call(y)===a.a){e=!0,t=t||[];var b=a.a.e;b instanceof u?t=t.concat(p(b.errors)):t.push(b)}}if(e)throw new u(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.prototype._addParent=function(t){var e=this._parent,n=this._parents;e&&e!==t?n?-1===n.indexOf(t)&&n.push(t):this._parents=[t]:this._parent=t},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function p(t){return t.reduce(function(t,e){return t.concat(e instanceof u?e.errors:e)},[])}},function(t,e,n){"use strict";function r(t){setTimeout(function(){throw t})}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty;t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var s,a,c,u=r(e),l=r(n);if(u&&l){if((a=e.length)!=n.length)return!1;for(s=a;0!=s--;)if(!t(e[s],n[s]))return!1;return!0}if(u!=l)return!1;var p=e instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==n.getTime();var f=e instanceof RegExp,h=n instanceof RegExp;if(f!=h)return!1;if(f&&h)return e.toString()==n.toString();var y=o(e);if((a=y.length)!==o(n).length)return!1;for(s=a;0!=s--;)if(!i.call(n,y[s]))return!1;for(s=a;0!=s--;)if(!t(e[c=y[s]],n[c]))return!1;return!0}return e!=e&&n!=n}},function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("rxSubscriber"):"@@rxSubscriber"},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(5),o=n(9),i={closed:!0,next:function(t){},error:function(t){if(r.a.useDeprecatedSynchronousErrorHandling)throw t;Object(o.a)(t)},complete:function(){}}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r,o=n(4);function i(){try{return r.apply(this,arguments)}catch(t){return o.a.e=t,o.a}}function s(t){return r=t,i}},,function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(3),o=n(8),i=n(23);function s(t,e){return e?new r.a(function(n){var r=new o.a,i=0;return r.add(e.schedule(function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()})),r}):new r.a(Object(i.a)(t))}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(3),o=n(23),i=n(25),s=n(26),a=n(21),c=n(22),u=n(24),l=n(19),p=n(10),d=n(7),f=function(t){if(t instanceof r.a)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[d.a])return Object(a.a)(t);if(Object(c.a)(t))return Object(o.a)(t);if(Object(u.a)(t))return Object(i.a)(t);if(t&&"function"==typeof t[p.a])return Object(s.a)(t);var e=Object(l.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(7),o=function(t){return function(e){var n=t[r.a]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.closed||e.complete()}}},function(t,e,n){"use strict";function r(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(9),o=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,r.a),e}}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(10),o=function(t){return function(e){for(var n=t[r.a]();;){var o=n.next();if(o.done){e.complete();break}if(e.next(o.value),e.closed)break}return"function"==typeof n.return&&e.add(function(){n.return&&n.return()}),e}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(28),o=n(20);function i(t,e,n,i,s){if(void 0===s&&(s=new r.a(t,n,i)),!s.closed)return Object(o.a)(e)(s)}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),o=function(t){function e(e,n,r){var o=t.call(this)||this;return o.parent=e,o.outerValue=n,o.outerIndex=r,o.index=0,o}return r.a(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(n(2).a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.a(e,t),e.prototype.notifyNext=function(t,e,n,r,o){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(n(2).a)},function(t,e,n){"use strict";(function(t,r){var o,i=n(33);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var s=Object(i.a)(o);e.a=s}).call(this,n(35),n(36)(t))},function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(3),o=new r.a(function(t){return t.complete()});function i(t){return t?function(t){return new r.a(function(e){return t.schedule(function(){return e.complete()})})}(t):o}},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=n(2);function i(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.project,this.thisArg))},t}(),a=function(t){function e(e,n,r){var o=t.call(this,e)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return r.a(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=n(2);function i(t,e){return function(n){return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.predicate,this.thisArg))},t}(),a=function(t){function e(e,n,r){var o=t.call(this,e)||this;return o.predicate=n,o.thisArg=r,o.count=0,o}return r.a(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(o.a)},function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${o}`),s=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,o=0;const a=[],c=e=>{const p=e.content,d=document.createTreeWalker(p,133,null,!1);let f,h;for(;d.nextNode();){n++,f=h;const e=h=d.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=t.strings[o],a=l.exec(r)[2],c=s&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),u=e.getAttribute(c).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:u}),e.removeAttribute(c),o+=u.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(r)<0)continue;const s=e.parentNode,c=t.split(i),l=c.length-1;o+=l;for(let t=0;t<l;t++)s.insertBefore(""===c[t]?u():document.createTextNode(c[t]),e),this.parts.push({type:"node",index:n++});s.insertBefore(""===c[l]?u():document.createTextNode(c[l]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===r){const t=e.parentNode,r=e.previousSibling;null===r||r!==f||r.nodeType!==Node.TEXT_NODE?t.insertBefore(u(),e):n--,this.parts.push({type:"node",index:n++}),a.push(e),null===e.nextSibling?t.insertBefore(u(),e):n--,h=f,o++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,u=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,p=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const d=t=>{let e=1;const n=document.createTreeWalker(t,p,null,!1);for(;n.nextNode();)e++;return e},f=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,y=(t,e,n=null,r=null)=>{let o=e;for(;o!==n;){const e=o.nextSibling;t.insertBefore(o,r),o=e}},b=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}},g=new WeakMap,m=t=>(g.set(t,!0),t),v=t=>"function"==typeof t&&g.has(t),x={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this._getTemplate=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=h?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,r=0;const o=t=>{const i=document.createTreeWalker(t,133,null,!1);let s=i.nextNode();for(;n<e.length&&null!==s;){const t=e[n];if(c(t))if(r===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(s),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(t),h&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const a=t.lastIndexOf(">");!(n=(a>-1||n)&&-1===t.indexOf("<",a+1))&&s&&(e=e.replace(l,(t,e,n,r)=>"style"===n?`${e}style$${r}`:t)),e+=n?o:r}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const E=t=>null===t||!("object"==typeof t||"function"==typeof t);class O{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===x||E(t)&&t===this.value||(this.value=t,v(t)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const t=this.value;this.value=x,t(this)}this.value!==x&&this.committer.commit()}}class j{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=u()),t._insert(this.endNode=u())}insertAfterPart(t){t._insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;v(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}const t=this._pendingValue;t!==x&&(E(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new w(e,t.processor,this.templateFactory),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const o of t)void 0===(n=e[r])&&(n=new j(this.templateFactory),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(o),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){b(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;v(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}if(this._pendingValue===x)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=x}}class T extends O{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends S{}class A{constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;v(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}this._pendingValue!==x&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=x)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new Map,N=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(t,e,n=function(t){let e=R.get(t.type);void 0===e&&(e=new Map,R.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new a(t,t.getTemplateElement()),e.set(t.strings,n)),n}){let r=N.get(e);void 0===r&&(b(e,e.firstChild),N.set(e,r=new j(n)),r.appendInto(e)),r.setValue(t),r.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new class{handleAttributeExpressions(t,e,n){const r=e[0];return"."===r?new T(t,e.slice(1),n).parts:"@"===r?[new A(t,e.slice(1))]:"?"===r?[new P(t,e.slice(1),n)]:new O(t,e,n).parts}handleTextExpression(t){return new j(t)}},I=(t,...e)=>new _(t,e,"html",C),D=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),V=!1);const U=t=>e=>{const n=D(e.type,t);let r=R.get(n);void 0===r&&(r=new Map,R.set(n,r));let o=r.get(e.strings);if(void 0===o){const n=e.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,t),o=new a(e,n),r.set(e.strings,o)}return o},L=["html","svg"];function M(t){L.forEach(e=>{const n=R.get(D(e,t));void 0!==n&&n.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),function(t,e){const{element:{content:n},parts:r}=t,o=document.createTreeWalker(n,p,null,!1);let i=0,s=r[0],a=-1,c=0;const u=[];let l=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(u.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==s&&s.index===a;)s.index=null!==l?-1:s.index-c,s=r[++i]}u.forEach(t=>t.parentNode.removeChild(t))}(t,n)})})}const B=new Set,F=(t,e,n)=>{B.add(n);const r=t.querySelectorAll("style"),o=document.createDocumentFragment();for(let t=0;t<r.length;t++)o.appendChild(r[t]);if(M(n),function(t,e,n=null){const{element:{content:r},parts:o}=t;if(null===n||void 0===n)return void r.appendChild(e);const i=document.createTreeWalker(r,p,null,!1);let s=f(o),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(n.parentNode.insertBefore(e,n),a=d(e));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=f(o,s);return}s=f(o,s)}}(e,o,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");null!==n&&t.insertBefore(n.cloneNode(!0),t.firstChild)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=t=>null!==t,H=t=>t?"":null,q=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,reflect:!1,hasChanged:q},Y=new Promise(t=>t(!0)),G=1,K=4,J=8;class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const r=this._attributeNameForProperty(e,n);void 0!==r&&(this._attributeToPropertyMap.set(r,e),t.push(r))}return t}static createProperty(t,e=W){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(r){const o=this[t];this[n]=r,this._requestPropertyUpdate(t,o,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=q){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const r=n===Boolean?z:"function"==typeof n?n:n.fromAttribute;return r?r(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?H:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&G?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=W){const r=this.constructor,o=r._propertyValueToAttribute(e,n);if(void 0!==o){const e=r._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|J,null===o?this.removeAttribute(e):this.setAttribute(e,o),this._updateState=this._updateState&~J)}}_attributeToProperty(t,e){if(!(this._updateState&J)){const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||W;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|K;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&K}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}X._attributeToPropertyMap=new Map,X._finalized=!0,X._classProperties=new Map,X.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Q=t=>(e,n)=>{e.constructor.createProperty(n,t)},Z=tt((t,e)=>t.querySelector(e));tt((t,e)=>t.querySelectorAll(e));function tt(t){return e=>(n,r)=>{Object.defineProperty(n,r,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class et extends X{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}et.render=function(t,e,n){const r=e instanceof ShadowRoot&&V,o=B.has(n);if(r&&o&&window.ShadyCSS.styleElement(e.host),$(t,e,U(n)),r&&!o&&t instanceof _){const t=N.get(e).value;F(e,t.template,n)}};var nt=n(30),rt={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function st(t){if("object"!==(void 0===t?"undefined":ot(t))||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function at(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}var ct=n(0);const ut=Object(ct.createStandardAction)("router/NAVIGATE")(),lt=Object(ct.createStandardAction)("router/OPEN_POST")(),pt=[{colour:"transparent",name:"All Discussions",id:"disc"},{colour:"transparent",name:"Tags",id:"tags"}],dt={tag:pt[0]};const ft=Object(ct.createStandardAction)("layout/TOGGLE_BS")(),ht={sheetOpen:!1};const yt=Object(ct.createStandardAction)("AUTH/state-update")();const bt=Object(ct.createStandardAction)("posts-list/UPDATE_POSTS")(),gt=Object(ct.createStandardAction)("posts-list/QUERY_ALL")(),mt=Object(ct.createStandardAction)("posts-list/RAISE_LIMIT")(),vt=Object(ct.createStandardAction)("posts-list/QUERY_TAG")(),xt=Object(ct.createStandardAction)("posts-list/SELECT_POST")(),wt=Object(ct.createStandardAction)("posts-list/UPDATE_TAGS")();const _t=new class{constructor(){this.posts=[],this.limit=10,this.query=null,this.selectedPost=null,this.tags=[]}};const Et=function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var o=e[r];"function"==typeof t[o]&&(n[o]=t[o])}var i=Object.keys(n),s=void 0;try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:rt.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+rt.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){s=t}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(s)throw s;for(var r=!1,o={},a=0;a<i.length;a++){var c=i[a],u=n[c],l=t[c],p=u(l,e);if(void 0===p){var d=at(c,e);throw new Error(d)}o[c]=p,r=r||p!==l}return r?o:t}}({router:function(t=dt,e){switch(e.type){case Object(ct.getType)(ut):if(void 0===e.payload.name)return{routeName:e.payload};switch(e.payload){case pt[0]||pt[1]||pt[2]:return{tag:e.payload};default:return{tag:e.payload,param:e.payload.id}}case Object(ct.getType)(lt):return{routeName:"post-page",param:e.payload.id};default:return t}},layout:function(t=ht,e){switch(e.type){case Object(ct.getType)(ft):return Object.assign({},t,{sheetOpen:!t.sheetOpen});default:return t}},auth:function(t=null,e){switch(e.type){case Object(ct.getType)(yt):return e.payload;default:return t}},postsList:function(t=_t,e){switch(e.type){case Object(ct.getType)(bt):return Object.assign({},t,{posts:e.payload});case Object(ct.getType)(gt):return Object.assign({},t,{query:null,limit:10});case Object(ct.getType)(mt):return Object.assign({},t,{limit:t.limit+=10});case Object(ct.getType)(vt):return Object.assign({},t,{query:["tag.id","==",e.payload]});case Object(ct.getType)(xt):return Object.assign({},t,{selectedPost:e.payload});case Object(ct.getType)(wt):return Object.assign({},t,{tags:e.payload});default:return t}}});var Ot=n(11);const St=function t(e,n,r){var o;if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(t)(e,n)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var i=e,s=n,a=[],c=a,u=!1;function l(){c===a&&(c=a.slice())}function p(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function d(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return l(),c.push(t),function(){if(e){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,l();var n=c.indexOf(t);c.splice(n,1)}}}function f(t){if(!st(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,s=i(s,t)}finally{u=!1}for(var e=a=c,n=0;n<e.length;n++)(0,e[n])();return t}return f({type:rt.INIT}),(o={dispatch:f,subscribe:d,getState:p,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");i=t,f({type:rt.REPLACE})}})[nt.a]=function(){var t,e=d;return(t={subscribe:function(t){if("object"!==(void 0===t?"undefined":ot(t))||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(p())}return n(),{unsubscribe:e(n)}}})[nt.a]=function(){return this},t},o}(Et,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=t.apply(void 0,r),s=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},c=e.map(function(t){return t(a)});return s=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}.apply(void 0,c)(i.dispatch),it({},i,{dispatch:s})}}}(t=>t=>e=>(e.type===Object(ct.getType)(ut)&&(Ot(e.payload,pt[0])?t(gt()):Ot(e.payload,pt[1])?t(e):void 0!==e.payload.id&&t(vt(e.payload.id))),t(e))));var jt=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Tt extends et{constructor(){super(...arguments),this.sheetOpen=!0}connectedCallback(){document.addEventListener("scroll",t=>{this.scrolled=t.target.scrollingElement.scrollTop>0}),this._stateChanged(),St.subscribe(()=>{this._stateChanged()})}_stateChanged(){this.route=St.getState().router,this.sheetOpen=St.getState().layout.sheetOpen,this.posts=St.getState().postsList.posts,this.selectedPost=St.getState().postsList.selectedPost}openNewPostForm(){St.getState().auth?St.dispatch(ut("new-post")):St.dispatch(ut("auth"))}render(){if(!this.route.tag)return"new-post"===this.route.routeName?I`
                    <df-post-form></df-post-form>
                `:"auth"===this.route.routeName?I`
                    <df-auth></df-auth>
                `:"post-page"===this.route.routeName?I`<post-page .post="${this.selectedPost}"></post-page>`:I`
                    <h1>Hold on! This route isn't there yet!</h1>
                `;const t="tags"!==this.route.tag.id;let e;return e="tags"===this.route.tag.id?I`
            <df-tags-list>Tags...</df-tags-list>
            `:I`
            <posts-list .posts="${this.posts}" class="no-scroll"></posts-list>
            `,I`
        <style>
            app-bar {
                position: fixed;
                display: block;
                width: 100%;
                top: 0;
                left: 0;
                right: 0;
                transition: box-shadow 0.2s;
                z-index: 1;
            }
            posts-list, df-tags-list {
                display: block;
                position: absolute;
                top: 46px;
                width: 100%;
                flex: 8;
                height: calc(100% - 46px);
            }
            .shadow {
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
            }
            .btn-new-post {
                margin-right: 5px;
                padding: 3px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ECEDEE
            }
            buttom-sheet {
                position: fixed;
            }
            @media only screen and (min-width: 1080px) {
                
                bottom-sheet.sheet {
                    display: none;
                }

                .page-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                posts-list {
                    width: 70%;
                }
            }
        </style>
        <app-bar class="${this.scrolled?"shadow":""}">
            <div @click="${()=>this.openNewPostForm()}" class="btn-new-post" slot="end">
                +
            </div>
            <div @click="${()=>this.handleBarTitleClick()}">${this.route.tag.name}</div>
        </app-bar>
        <div class="page-container">
            <div class="side-spacing"></div>
            ${e}
            <div class="side-spacing"></div>
        </div>
        <bottom-sheet
            class="sheet"
            @bs-close="${()=>this.handleSheetClose()}" 
            .open="${this.sheetOpen}">
            <df-bottom-options
            .showTags="${t}"></df-bottom-options>
        </bottom-sheet>
        `}handleBarTitleClick(){console.log("Clicked"),St.dispatch(ft())}handleSheetClose(){St.dispatch(ft())}}jt([Q({reflect:!1}),Pt("design:type",Boolean)],Tt.prototype,"scrolled",void 0),jt([Q({reflect:!1}),Pt("design:type",Object)],Tt.prototype,"route",void 0),jt([Q({reflect:!1}),Pt("design:type",Boolean)],Tt.prototype,"sheetOpen",void 0),jt([Q({reflect:!1}),Pt("design:type",Array)],Tt.prototype,"posts",void 0),jt([Q({reflect:!1}),Pt("design:type",Object)],Tt.prototype,"selectedPost",void 0),customElements.define("home-page",Tt);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const kt=new WeakMap;function At(t,e,n){t.startNode.parentNode||n.delete(e)}function Rt(t,e,n){let r;return 2===arguments.length?n=e:3===arguments.length&&(r=e),m(e=>{let o=kt.get(e);void 0===o&&(o=new Map,kt.set(e,o));const i=e.startNode.parentNode;let s=-1,a=e.startNode.nextSibling;for(const c of t){let t,l;try{t=n(c,++s),l=r?r(c):s}catch(t){console.error(t);continue}let p=o.get(l);if(void 0===p){const t=u(),n=u();i.insertBefore(t,a),i.insertBefore(n,a),(p=new j(e.templateFactory)).insertAfterNode(t),void 0!==l&&o.set(l,p)}else if(a!==p.startNode){const t=p.endNode.nextSibling;a!==t&&y(i,p.startNode,t,a)}else a=p.endNode.nextSibling;p.setValue(t),p.commit()}a!==e.endNode&&(b(i,a,e.endNode),o.forEach(At))})}var Nt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class $t extends et{constructor(){super(...arguments),this.posts=[]}postChosen(t){St.dispatch(lt(t)),St.dispatch(xt(t))}render(){return I`
            <style>
            .row {
                display: flex;
                flex-direction: row;
            }
            post-item {
                display: block;
            }
            .posts {
                flex: 1;
            }
            @media only screen and (max-width: 1080px) {
                .tags {
                    display: none;
                }
            }
            </style>
            <div class="row">
                <div class="tags">
                    <df-bottom-options></df-bottom-options>
                </div>
                <div class="posts">
                ${Rt(this.posts,t=>t.id,(t,e)=>I`<post-item
                    @click="${()=>this.postChosen(t)}"
                    .post="${t}"></post-item>`)}
                </div>
            </div>
        `}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q({reflect:!1}),Nt("design:type",Array)],$t.prototype,"posts",void 0),customElements.define("posts-list",$t);var Ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class It extends et{render(){return I`
          <style>
            .post-item {
            user-select: none;
            display: flex;
            flex-direction: row;
            min-height: 60px;
            cursor: pointer;
            }
            .post-item:hover {
                opacity: 0.8;
                background-color: #DFE1E2;
            }
            .start {
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .body {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            }
            .end {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            }
            .title {
            font-size: 14px;
            }
            .tag {
            display: inline-block;
            align-self: flex-start;
            color: white;
            padding: 2px;
            font-size: 12px;
            border-radius: 4px;
            }
            .replies {
            background-color: #ECEDEE;
            display: inline-block;
            padding: 5px;
            font-size: 12px;
            border-radius: 5px;
            color: #7A8185;
            }
            img {
            display: block;
            margin: auto;
            border-radius: 50%;
            height: 36px;
            }
            .alternative {
            display: block;
            margin: auto;
            border-radius: 50%;
            background-color: #ECEDEE;
            height: 36px;
            width: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #7A8185;
            }
        </style>
        <div class="post-item">
            <div class="start">
                ${this.post.author.profilePhotoUrl?I`<img src="${this.post.author.profilePhotoUrl}">`:I`<div class="alternative">${this.post.author.name[0]}</div>`}
            </div>
            <div class="body">
            <div class="title">
                ${this.post.title}
            </div>
            <div .style="background-color: ${this.post.tag.colour}" class="tag">
                ${this.post.tag.name}
            </div>
            </div>
            <div class="end">
            <div class="replies">
                ${this.post.responses||0}
            </div>
            </div>
        </div>
        `}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q({reflect:!1}),Ct("design:type",Object)],It.prototype,"post",void 0),customElements.define("post-item",It);let Dt=class extends et{render(){return I`
        <style>
        .app-bar-style {
            
            display: flex;
            width: 100%;
            height: 46px;
            background: #FFFFFF;
            border-bottom-color: #ECEDEE;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            justify-content: space-between;
            user-select: none;
        }
        .app-bar-title {
            color: #6EA6E5;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            flex: 1;
        }
        .app-bar-title:active {
            opacity: 0.6;
        }
        .end {
            align-self: center;
            flex: 0;
            color: #7A8185;
            font-size: 18px;
        }
        .start {
            flex: 0;
            color: #7A8185;
            font-size: 18px;
        }
        </style>
        <div class="app-bar-style sticky">
            <div class="start">
            <slot name="start"></slot>
            </div>
            <div class="app-bar-title">
            <slot></slot>
            </div>
            <div class="end">
                <slot name="end"></slot>
            </div>
        </div>
        `}};Dt=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}([(t=>e=>{if((t=>{if(t.indexOf("-")<=0)throw new Error("You need at least 1 dash in the custom element name!")})(t.selector),t.template){const n=document.createElement("template");t.style&&(t.template=`<style>${t.style}</style> ${t.template}`),n.innerHTML=t.template;const r=e.prototype.connectedCallback||function(){},o=e.prototype.disconnectedCallback||function(){};e.prototype.connectedCallback=function(){const e=document.importNode(n.content,!0);t.useShadow?this.attachShadow({mode:"open"}).appendChild(e):this.appendChild(e),this.componentWillMount&&this.componentWillMount(),r.call(this),this.componentDidMount&&this.componentDidMount()},e.prototype.disconnectedCallback=function(){this.componentWillUnmount&&this.componentWillUnmount(),o.call(this),this.componentDidUnmount&&this.componentDidUnmount()}}window.customElements.define(t.selector,e)})({selector:"app-bar"})],Dt);var Vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ut extends et{constructor(){super(...arguments),this.open=!1}render(){return I`
        <style>
        :host {
          display: block;
        }
        .sheet {
          height: 0;
          z-index: 1;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 30%;
          background-color: white;
          transition: transform 0.2s;
          transform: translateY(100%);
          overflow-y: scroll;
        }
        .sheet-open {
          transform: translateY(0%);
          height: 70%;
        }
        .content-hidden {
          display: none;
        }
        </style>
        <opaque-background @click="${()=>this.handleBgClick()}" .open="${this.open}"></opaque-background>
        <div class="sheet${this.open?" sheet-open":""}">
          <div class="${this.open?"":"content-hidden"}">
            <slot></slot>
          </div>
        </div>
        `}handleBgClick(){this.dispatchEvent(new CustomEvent("bs-close"))}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q(),Vt("design:type",Boolean)],Ut.prototype,"open",void 0),customElements.define("bottom-sheet",Ut);var Lt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Mt extends et{constructor(){super(...arguments),this.open=!1}render(){return I`
        <style>
        .background {
          position: absolute;
          z-index: -10;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: black;
          transition: opacity 0.2s;
          opacity: 0;
        }
        .background-open {
          display: block;
          opacity: 0.5;
          z-index: 1;
        }
      </style>
      <div class="background${this.open?" background-open":""}"></div>         
        `}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q(),Lt("design:type",Boolean)],Mt.prototype,"open",void 0),customElements.define("opaque-background",Mt);var Bt=n(41),Ft=n(40),zt=n(1),Ht=n(31),qt=n(18),Wt=n(29),Yt=n(27),Gt=n(17),Kt={};var Jt=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new Xt(t,this.resultSelector))},t}(),Xt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.resultSelector=n,r.active=0,r.values=[],r.observables=[],r}return zt.a(e,t),e.prototype._next=function(t){this.values.push(Kt),this.observables.push(t)},e.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(var n=0;n<e;n++){var r=t[n];this.add(Object(Yt.a)(this,r,r,n))}}},e.prototype.notifyComplete=function(t){0==(this.active-=1)&&this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,o){var i=this.values,s=i[n],a=this.toRespond?s===Kt?--this.toRespond:this.toRespond:0;i[n]=e,0===a&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))},e.prototype._tryResultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(Wt.a),Qt=n(37);const Zt={apiKey:"AIzaSyCEjJEdhKR7ZcJBdNL4EnvcKEd_YkGG9Iw",authDomain:"dev-forum-45f8b.firebaseapp.com",databaseURL:"https://dev-forum-45f8b.firebaseio.com",projectId:"dev-forum-45f8b",storageBucket:"dev-forum-45f8b.appspot.com",messagingSenderId:"975027577006"};function te(t=!0,e=Zt){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=null,r=null;return Object(Ht.a)(t[t.length-1])&&(r=t.pop()),"function"==typeof t[t.length-1]&&(n=t.pop()),1===t.length&&Object(qt.a)(t[0])&&(t=t[0]),Object(Gt.a)(t,r).lift(new Jt(n))}(Object(Ft.a)(Promise.resolve().then(n.t.bind(null,42,7))),Object(Ft.a)(n.e(1).then(n.t.bind(null,42,7))),Object(Ft.a)(n.e(1).then(n.bind(null,45))),Object(Ft.a)(n.e(1).then(n.bind(null,44))),Object(Ft.a)(n.e(1).then(n.t.bind(null,42,7)))).pipe(Object(Qt.a)(([n,r,o,i,s])=>{const a=n.apps[0]||n.initializeApp(e);return a.firestore().settings({timestampsInSnapshots:!0}),t&&!n.apps[0]&&a.firestore().enablePersistence(),{app:a,rxfire:o,rxauth:i}}))}var ee=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}c((r=r.apply(t,e||[])).next())})};var ne=n(3);function re(t){return new ne.a(e=>{return e.next(t.getState()),t.subscribe(function(){e.next(t.getState())})})}var oe=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class se extends et{constructor(){super(...arguments),this.post={text:"",title:""},this.tags=[]}navigateToHome(){St.dispatch(ut(pt[0]))}connectedCallback(){this._sub=re(St).subscribe(t=>this.tags=t.postsList.tags)}disconnectedCallback(){this._sub.unsubscribe()}_tagSelected(){const t=this.tagElm.options[this.tagElm.selectedIndex].value;this.post.tag=this.tags.find(e=>e.id===t)}_submited(){""!==this.post.title&&""!==this.post.text&&null!==St.getState().auth&&(!function(t){Promise.all([te().toPromise(),Promise.resolve().then(n.t.bind(null,42,7))]).then(([{app:e,rxfire:n},r])=>{e.firestore().collection("posts").add(Object.assign({},t,{timestamp:r.firestore.FieldValue.serverTimestamp()}))})}(Object.assign({},this.post,{tag:this.post.tag||this.tags[0],author:St.getState().auth})),this.navigateToHome())}render(){return I`
            <style>
                app-bar {
                    cursor: pointer;
                }
                .btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: blueviolet;
                    height: 100%;
                    margin-left: 8px;
                    margin-right: 8px;
                }
                .form-container {
                    display: flex;
                    flex-direction: column;

                }
                .text-field, .title-field, .tag-field {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                input, textarea, label, select {
                    padding: 8px;
                    font-size: 14px;
                    border: none;
                    outline: none;
                    
                }
                textarea {
                    resize: none;
                }
            </style>
            <app-bar>
                <div @click="${()=>this.navigateToHome()}" class="btn" slot="start">back</div>
                <div>New Post</div>
                <div @click="${()=>this._submited()}" class="btn" slot="end">Post</div>
            </app-bar>
            <form class="form-container">
                <div class="tag-field">
                    <label for="tag">Choose Tag</label>
                    <select id="tag" @change="${t=>this._tagSelected()}">
                        ${this.tags.map(t=>I`
                                <option
                                 
                                ?selected="${this.post.tag&&t.id===this.post.tag.id}" .value="${t.id}">${t.name}</option>
                            `)}
                    </select>
                </div>
                <div class="title-field">
                    <label for="title">Enter a title</label>
                    <input
                        @change="${t=>this.post.title=t.target.value}"
                        .value="${this.post.title}"
                        required class="" type="text" id="title" placeholder="New angular content...">
                </div>
                <div class="text-field">
                    <label for="text">Enter some text for your post</label>
                    <textarea 
                        @change="${t=>this.post.text=t.target.value}"
                        .value="${this.post.text}"
                        required id="text" placeholder="New features released..."></textarea>
                </div>
            </form>
        `}}oe([Z("#tag"),ie("design:type",HTMLSelectElement)],se.prototype,"tagElm",void 0),oe([Q({reflect:!1}),ie("design:type",Object)],se.prototype,"post",void 0),oe([Q({reflect:!1}),ie("design:type",Array)],se.prototype,"tags",void 0),customElements.define("df-post-form",se);var ae=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ue extends et{constructor(){super(...arguments),this.currentTag=pt[0],this.tags=[],this.showTags=!0}connectedCallback(){this._updateStoreState(),St.subscribe(()=>{this._updateStoreState()}),this._storeSub=re(St).subscribe(t=>this.tags=t.postsList.tags)}disconnectedCallback(){this._storeSub.unsubscribe()}_updateStoreState(){this.currentTag=St.getState().router.tag}_chooseTag(t){St.dispatch(ft()),St.dispatch(ut(t))}render(){const t=this.tags.map(t=>I`<df-tag-option
            class="${this.currentTag===t?"enabled-route":""}"
            @click="${()=>this._chooseTag(t)}"
            .tag="${t}"></df-tag-option>`);return I`
        <style>
            df-tag-option:hover {
                background-color: #ECEDEE;
                cursor: pointer;
                user-select: none;
                color: black;
            }
            .enabled-route {
                background-color: #4E92DF;
                color: white;
            }
        </style>
        <div>
        ${pt.map(t=>I`<df-tag-option
            class="${this.currentTag===t?"enabled-route":""}"
            @click="${()=>this._chooseTag(t)}"
            .tag="${t}"></df-tag-option>`)}
        ${this.showTags?t:null}
        </div>
        `}}ae([Q({reflect:!1}),ce("design:type",Object)],ue.prototype,"currentTag",void 0),ae([Q({reflect:!1}),ce("design:type",Array)],ue.prototype,"tags",void 0),ae([Q({reflect:!1}),ce("design:type",Boolean)],ue.prototype,"showTags",void 0),customElements.define("df-bottom-options",ue);var le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class pe extends et{render(){return I`
        <style>
        :host {
            height: 54px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size: 17px;
            padding-left: 20px;
        }
        .tagColor {
            height: 17px;
            width: 21px;
            margin-right: 8px;
            border-radius: 4px;
        }
        @media only screen and (min-width: 1080px) {
            :host {
                height: 35px;
                padding-left: 10px;
                padding-right: 10px;
            }
            .tagColor {
                height: 14px;
                width: 18px;
            }
        }
        </style>
        <div .style="background-color: ${this.tag.colour}" class="tagColor"></div>
        <div class="tag">
        ${this.tag.name}</div>
        `}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q({reflect:!1}),le("design:type",Object)],pe.prototype,"tag",void 0),customElements.define("df-tag-option",pe);var de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class fe extends et{render(){return I`
        <style>
        :host {
            cursor: pointer;
            user-select: none;
        }
        .card {
            height: 200px;
            width: 100%;
            color: white;
            display: flex;
            flex-direction: column;
        }
        .title {
            font-size: 20px;
            margin: 20px;
            flex: 0;
        }
        .description {
            font-size: 14px;
            margin-left: 20px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            color: #DBDBDB;
        }
        .bottom {
            font-size: 12px;
            margin-left: 20px;
            flex: 0;
            padding: 7px 0;
            font-size: 12px;
            line-height: 21px;
            margin: 0 20px;
            height: 42px;
            border-top: 1px solid rgba(0,0,0,0.15);
            color: #DBDBDB;
        }
        </style>
        <div
            .style="background-color: ${this.tag.colour};" class="card">
            <div class="title">
                ${this.tag.name}
            </div>
            <div class="description">
                ${this.tag.description}
            </div>
            <div class="bottom">
                ${this.tag.latestPost?this.tag.latestPost:"No posts yet"}
            </div>
        </div>
        `}}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q(),de("design:type",Object)],fe.prototype,"tag",void 0),customElements.define("df-tag-card",fe);var he=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ye extends et{constructor(){super(...arguments),this.tags=[]}connectedCallback(){this._sub=re(St).subscribe(t=>this.tags=t.postsList.tags)}disconnectedCallback(){this._sub.unsubscribe()}render(){return I`
        <div>
        <style>
        :host {
            display: block;
            width: 100%;
        }
        </style>
        ${this.tags.map(t=>I`
                <df-tag-card @click="${()=>this._tagChosen(t)}" .tag=${t}></df-tag-card>
            `)}
        </div>
        `}_tagChosen(t){St.dispatch(ut(t)),St.dispatch(vt(t.id))}}function be(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}(function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);i>3&&s&&Object.defineProperty(e,n,s)})([Q({reflect:!1}),he("design:type",Array)],ye.prototype,"tags",void 0),customElements.define("df-tags-list",ye),be.prototype=Object.create(Error.prototype);var ge=be,me=n(38),ve=n(2);function xe(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}xe.prototype=Object.create(Error.prototype);var we=xe,_e=n(32);var Ee=function(){function t(t){if(this.total=t,this.total<0)throw new we}return t.prototype.call=function(t,e){return e.subscribe(new Oe(t,this.total))},t}(),Oe=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return zt.a(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(ve.a);var Se=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new je(t,this.defaultValue))},t}(),je=function(t){function e(e,n){var r=t.call(this,e)||this;return r.defaultValue=n,r.isEmpty=!0,r}return zt.a(e,t),e.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(ve.a),Pe=n(6),Te=n(12);var ke=function(){function t(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}return t.prototype.call=function(t,e){return e.subscribe(new Ae(t,this.nextOrObserver,this.error,this.complete))},t}(),Ae=function(t){function e(e,n,r,o){var i=t.call(this,e)||this;return i._tapNext=Pe.a,i._tapError=Pe.a,i._tapComplete=Pe.a,i._tapError=r||Pe.a,i._tapComplete=o||Pe.a,Object(Te.a)(n)?(i._context=i,i._tapNext=n):n&&(i._context=n,i._tapNext=n.next||Pe.a,i._tapError=n.error||Pe.a,i._tapComplete=n.complete||Pe.a),i}return zt.a(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(ve.a),Re=function(t){return void 0===t&&(t=Ne),function(t,e,n){return function(r){return r.lift(new ke(t,e,n))}}({hasValue:!1,next:function(){this.hasValue=!0},complete:function(){if(!this.hasValue)throw t()}})};function Ne(){return new ge}function $e(t){return t}function Ce(t,e){var n=arguments.length>=2;return function(r){return r.pipe(t?Object(me.a)(function(e,n){return t(e,n,r)}):$e,function(t){return function(e){return 0===t?Object(_e.a)():e.lift(new Ee(t))}}(1),n?function(t){return void 0===t&&(t=null),function(e){return e.lift(new Se(t))}}(e):Re(function(){return new ge}))}}var Ie=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},De=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ve extends et{constructor(){super(...arguments),this.responses=[],this.responseText=""}connectedCallback(){this._storeSub=re(St).subscribe(t=>{this.auth=t.auth,this.post=t.postsList.selectedPost}),this._responsesSub=re(St).pipe(Ce(t=>!Ot(t.postsList.selectedPost,null)),Object(Qt.a)(t=>t.postsList.selectedPost),Object(Bt.a)(t=>(function(t){return te().pipe(Object(Bt.a)(({app:e,rxfire:n})=>{const r=e.firestore().collection("post-responses");return n.collectionData(r.where("rootPost.id","==",t).orderBy("timestamp"),"id")}))})(t.id))).subscribe(t=>this.responses=t)}disconnectedCallback(){this._storeSub.unsubscribe(),this._responsesSub&&this._responsesSub.unsubscribe()}_navigateBack(){St.dispatch(ut(pt[0]))}_navigateToAuth(){St.dispatch(ut("auth"))}_sendResponse(){console.log(this.responseText),""!==this.responseText&&(this.auth&&function(t,e,r){Promise.all([te().toPromise(),Promise.resolve().then(n.t.bind(null,42,7))]).then(([{app:n,rxfire:o},i])=>n.firestore().collection("post-responses").add({text:e,author:r,rootPost:t,timestamp:i.firestore.FieldValue.serverTimestamp()}).then(()=>({app:n,rxfire:o,firebase:i,postId:t.id}))).then(({app:e,rxfire:n,firebase:r,postId:o})=>e.firestore().collection("posts").doc(t.id).update({timestamp:r.firestore.FieldValue.serverTimestamp()}))}(this.post,this.responseText,this.auth),this.responseText="")}render(){return this.post?I`
        <style>
        :host {
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        .center-child {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .back-btn {
            color: #6EA6E6;
            font-size: 14px;
            padding: 8px;
            height: 100%;
            cursor: pointer;
        }
        div.content {
            flex: 1;
            overflow-y: auto;
        }
        .tag-card {
            height: 102px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 18px;
        }
        .tag-name {
            background-color: white;
            border-radius: 5px;
            font-size: 13px;
            padding: 4px;
        }
        .tag-desc {
            color: white;
            font-size: 15px;
        }
        .author-info {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
        .info-start {
            width: auto;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
        }
        img {
            display: block;
            margin: auto;
            border-radius: 50%;
            height: 36px;
        }
        .alternative {
            display: block;
            margin: auto;
            border-radius: 50%;
            background-color: #ECEDEE;
            height: 36px;
            width: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #7A8185;
            }
        .info-name {
            flex: 1;
        }
        .post-text {
            font-size: 16px;
            padding: 10px;
            border-top: 1px solid #ECEDEE;
            border-bottom: 1px solid #ECEDEE;
        }
        .auth-btn {
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 16px;
            background-color: #007ACC;
            cursor: pointer;
        }
        .space {
            height: 20px;
        }
        </style>
        <app-bar>
            <div class="center-child" slot="start">
                <div class="back-btn center-child" @click="${()=>this._navigateBack()}">
                    back
                </div>
            </div>
            <div>${this.post.title.substring(0,15)||this.post.title}...</div>
            <div slot="end"></div>
        </app-bar>
        <div class="content">
            <!-- The card with Tag info -->
            <div .style="background-color: ${this.post.tag.colour}" 
                class="tag-card">
                <div .style="color: ${this.post.tag.colour}" 
                class="tag-name">${this.post.tag.name}</div>

                <div class="tag-desc">${this.post.title}</div>
            </div>

            <!-- Author Info -->
            <div class="author-info">
                <div class="info-start">
                    ${this.post.author.profilePhotoUrl?I`<img src="${this.post.author.profilePhotoUrl}">`:I`<div class="alternative">${this.post.author.name[0]}</div>`}
                </div>
                <div class="info-name">
                    ${this.post.author.name}
                </div>
            </div>

            <!-- Post Text here -->
            <div class="post-text">
                ${this.post.text}
            </div>

            <div class="space"></div

            <!-- Responses -->
            ${Rt(this.responses,t=>t.id,t=>I`
                <!-- Author Info -->
                <div class="author-info">
                    <div class="info-start">
                        ${t.author.profilePhotoUrl?I`<img src="${t.author.profilePhotoUrl}">`:I`<div class="alternative">${t.author.name[0]}</div>`}
                    </div>
                    <div class="info-name">
                        ${t.author.name}
                    </div>
                </div>

                <!-- Post Text here -->
                <div class="post-text">
                    ${t.text}
                </div>
            `)}
        </div>
        ${this.auth?I`
                <style>
                    .reply-input {
                    flex: 1;
                    border-left: none;
                    border-right: none;
                    border-top: 1px solid #BABABA;
                    border-bottom: 1px solid #BABABA;
                    padding: 12px 20px;
                    font-size: 14px;
                    outline: none;
                    margin: 2px;
                    }
                    .reply-container {
                    display: flex;
                    flex-direction: row;
                    }
                    .send-btn {
                        user-select: none;
                        cursor: pointer;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 8px;
                    }
                </style>
                <div class="reply-container">
                    <input
                        @change="${t=>this.responseText=t.target.value}" 
                        .value="${this.responseText}" 
                        class="reply-input" placeholder="Reply">
                    <div
                        @click="${()=>this._sendResponse()}" 
                        .style="background-color: ${this.post.tag.colour}" 
                        class="send-btn">Submit</div>
                </div>
            `:I`<div @click="${()=>this._navigateToAuth()}" class="auth-btn">Login or Register to reply</div>`}
        `:I``}}Ie([Q(),De("design:type",Object)],Ve.prototype,"post",void 0),Ie([Q({reflect:!1}),De("design:type",Object)],Ve.prototype,"auth",void 0),Ie([Q({reflect:!1}),De("design:type",Array)],Ve.prototype,"responses",void 0),Ie([Q(),De("design:type",String)],Ve.prototype,"responseText",void 0),customElements.define("post-page",Ve);var Ue=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Me extends et{constructor(){super(...arguments),this.isSignIn=!1,this.useFirebaseUI=!0,this.loginInfo={email:"",password:""},this.registerInfo={name:"",email:"",password:"",confirmPassword:""}}handleLogin(){console.log(this.loginInfo),this.dispatchEvent(new CustomEvent("df-login",{detail:{info:this.loginInfo}}))}handleRegister(){console.log(this.registerInfo)}_signInSuccess(){St.dispatch(ut(pt[0]))}render(){return I`
        <style>
            @import url('https://cdn.firebase.com/libs/firebaseui/3.4.1/firebaseui.css');
            :host {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            app-bar {
                flex: 0;
            }
            .background {
                z-index: 2;
                flex: 1;
                background-color: #ECEDEE;
            }
            .form-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            }
            .df-form {
            text-align: center;
            padding: 15px;
            font-size: 16px;
            color: black;
            background-color: #FFFFFF;
            border: none;
            border-radius: 3px;
            margin: 8px 30px;
            }
            .df-form-btn {
                background-color: #4E92DF;
                padding: 15px;
                font-size: 18px;
                color: white;
                border: none;
                border-radius: 3px;
                margin: 8px 30px;
                cursor: pointer;
            }
            .df-form::placeholder {
            color: #7A8185;
            }

            .switch-btn {
                background-color: transparent;
                font-size: 18px;
                color: #4E92DF;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 16px;
                outline: none;
                transition: opacity 0.1s;
            }
            .switch-btn:active {
                opacity: 0.5;
            }
            
            .back-btn {
                background-color: transparent;
                font-size: 14px;
                color: #4E92DF;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                outline: none;
                transition: opacity 0.1s;
                margin-left: 5px;
            }
            .back-btn:active {
                opacity: 0.5;
            }
            
        </style>
        <app-bar>
        SIGN IN
        <div
        @click="${()=>St.dispatch(ut(pt[0]))}"
        class="back-btn" slot="start">back</div>
        </app-bar>
        ${this.useFirebaseUI?I`<df-ui-auth @signin-success="${()=>this._signInSuccess()}"></df-ui-auth>`:this._buildAuthForm()}
        `}_buildAuthForm(){return I`
        <div class="background">
            <form class="form-container">
                ${this.isSignIn?I`

                    <!-- Login form -->
                    <input .value="${this.loginInfo.email}"
                    @change="${t=>this.loginInfo.email=t.target.value}"
                    name="email" 
                    class="df-form" 
                    placeholder="Email">

                    <input @change="${t=>this.loginInfo.password=t.target.value}"
                    .value="${this.loginInfo.password}" 
                    name="password" class="df-form" placeholder="Password">

                    <input @click="${()=>this.handleLogin()}" class="df-form-btn" type="button" value="Login">
                `:I`
                    <!-- Register form -->
                    <input @change="${t=>this.registerInfo.name=t.target.value}"
                    .value="${this.registerInfo.name}" 
                    name="name" class="df-form" placeholder="Name">

                    <input @change="${t=>this.registerInfo.email=t.target.value}"
                    .value="${this.registerInfo.email}" 
                    name="email" class="df-form" placeholder="Email">

                    <input @change="${t=>this.registerInfo.password=t.target.value}"
                    .value="${this.registerInfo.password}" 
                    name="password" class="df-form" placeholder="Password">

                    <input @change="${t=>this.registerInfo.confirmPassword=t.target.value}"
                    .value="${this.registerInfo.confirmPassword}" 
                    name="passrepeat" class="df-form" placeholder="Confirm Password">

                    <input @click="${()=>this.handleRegister()}" class="df-form-btn" type="button" value="Register">
                    
                `}            
            </form>
            <button 
            @click="${()=>this.isSignIn=!this.isSignIn}"
            class="switch-btn">
            ${this.isSignIn?"I don't have any account ":"I already have an account"}</button>
        </div>
        `}}Ue([Q(),Le("design:type",Boolean)],Me.prototype,"isSignIn",void 0),Ue([Q(),Le("design:type",Boolean)],Me.prototype,"useFirebaseUI",void 0),Ue([Q(),Le("design:type",Object)],Me.prototype,"loginInfo",void 0),Ue([Q(),Le("design:type",Object)],Me.prototype,"registerInfo",void 0),customElements.define("df-auth",Me);var Be=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}c((r=r.apply(t,e||[])).next())})};customElements.define("df-ui-auth",class extends HTMLElement{connectedCallback(){return Be(this,void 0,void 0,function*(){const[{app:t,rxfire:e,rxauth:r},o,i]=yield Promise.all([te().toPromise(),Promise.resolve().then(n.t.bind(null,42,7)),Promise.resolve().then(n.t.bind(null,43,7))]);(i.auth.AuthUI.getInstance()||new i.auth.AuthUI(t.auth())).start(this,{signInOptions:[{provider:o.auth.GoogleAuthProvider.PROVIDER_ID,authMethod:"https://accounts.google.com",clientId:"975027577006-qi4o5qo01uflacv6osvo42appm6jmg2u.apps.googleusercontent.com"},{provider:o.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0}],signInFlow:"popup",credentialHelper:i.auth.CredentialHelper.GOOGLE_YOLO,callbacks:{signInSuccessWithAuthResult:(e,n)=>{const r=e.user,o=(e.credential,e.additionalUserInfo.isNewUser);return e.additionalUserInfo.providerId,e.operationType,o&&t.firestore().collection("users").doc(r.uid).set({name:r.displayName,profilePhotoUrl:r.photoURL}),this.dispatchEvent(new CustomEvent("signin-success")),!1}}})})}});var Fe=n(15),ze=n(4);var He=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new qe(t,this.compare,this.keySelector))},t}(),qe=function(t){function e(e,n,r){var o=t.call(this,e)||this;return o.keySelector=r,o.hasKey=!1,"function"==typeof n&&(o.compare=n),o}return zt.a(e,t),e.prototype.compare=function(t,e){return t===e},e.prototype._next=function(t){var e=t;if(this.keySelector&&(e=Object(Fe.a)(this.keySelector)(t))===ze.a)return this.destination.error(ze.a.e);var n=!1;if(this.hasKey){if((n=Object(Fe.a)(this.compare)(this.key,e))===ze.a)return this.destination.error(ze.a.e)}else this.hasKey=!0;!1===Boolean(n)&&(this.key=e,this.destination.next(t))},e}(ve.a);window.__posts&&St.dispatch(bt(window.__posts)),function(){return ee(this,void 0,void 0,function*(){return yield(yield fetch("https://dev-forum-45f8b.firebaseapp.com/api/tags")).json()})}().then(t=>St.dispatch(wt(t))),function(){return ee(this,void 0,void 0,function*(){return yield(yield fetch("https://dev-forum-45f8b.firebaseapp.com/api/posts")).json()})}().then(t=>St.dispatch(bt(t))),te().pipe(Object(Bt.a)(({app:t,rxfire:e,rxauth:n})=>n.authState(t.auth())),Object(Qt.a)(t=>t?{name:t.displayName,profilePhotoUrl:t.photoURL,userUid:t.uid}:null)).subscribe(t=>{St.dispatch(yt(t))}),te().toPromise().then(({app:t})=>t.auth().getRedirectResult()).then(t=>{console.log(t)}),te().pipe(Object(Bt.a)(({app:t,rxfire:e})=>e.collectionData(t.firestore().collection("tags").orderBy("name"),"id"))).subscribe(t=>St.dispatch(wt(t))),re(St).pipe(Object(Qt.a)(t=>{const e=t.postsList;return{query:e.query,limit:e.limit,posts:e.posts}}),function(t,e){return function(n){return n.lift(new He(t,e))}}(Ot),Object(Bt.a)(t=>(function(t,e=10){return te().pipe(Object(Bt.a)(({app:n,rxfire:r})=>{const o=n.firestore().collection("posts");return t?r.collectionData(o.where(t[0],t[1],t[2]).orderBy("timestamp","desc").limit(e),"id"):r.collectionData(o.orderBy("timestamp","desc").limit(e),"id")}))})(t.query,t.limit))).subscribe(t=>{t!==St.getState().postsList.posts&&St.dispatch(bt(t))})},function(t,e,n){"use strict";var r=n(3),o=n(24),i=n(22),s=n(7);var a=n(10);var c=n(17),u=n(8),l=n(25);var p=n(26);var d=n(21);var f=n(20);function h(t,e){if(!e)return t instanceof r.a?t:new r.a(Object(f.a)(t));if(null!=t){if(function(t){return t&&"function"==typeof t[s.a]}(t))return function(t,e){return e?new r.a(function(n){var r=new u.a;return r.add(e.schedule(function(){var o=t[s.a]();r.add(o.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r}):new r.a(Object(d.a)(t))}(t,e);if(Object(o.a)(t))return function(t,e){return e?new r.a(function(n){var r=new u.a;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r}):new r.a(Object(l.a)(t))}(t,e);if(Object(i.a)(t))return Object(c.a)(t,e);if(function(t){return t&&"function"==typeof t[a.a]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return e?new r.a(function(n){var r,o=new u.a;return o.add(function(){r&&"function"==typeof r.return&&r.return()}),o.add(e.schedule(function(){r=t[a.a](),o.add(e.schedule(function(){if(!n.closed){var t,e;try{var o=r.next();t=o.value,e=o.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),o}):new r.a(Object(p.a)(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}n.d(e,"a",function(){return h})},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(1),o=n(29),i=n(28),s=n(27),a=n(37),c=n(40);function u(t,e){return"function"==typeof e?function(n){return n.pipe(u(function(n,r){return Object(c.a)(t(n,r)).pipe(Object(a.a)(function(t,o){return e(n,t,r,o)}))}))}:function(e){return e.lift(new l(t))}}var l=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.project))},t}(),p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return r.a(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var o=new i.a(this,void 0,void 0);this.add(o),this.innerSubscription=Object(s.a)(this,t,e,n,o)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,o){this.destination.next(e)},e}(o.a)},function(t,e){t.exports=firebase},function(t,e){t.exports=firebaseui}]);