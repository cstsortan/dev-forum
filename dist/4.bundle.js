/*! For license information please see 4.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(n,t,e){"use strict";e.r(t);var r=e(3),i=e(39),o=e(40),u=e(1),c=e(2);function d(n,t){var e=!1;return arguments.length>=2&&(e=!0),function(r){return r.lift(new a(n,t,e))}}var a=function(){function n(n,t,e){void 0===e&&(e=!1),this.accumulator=n,this.seed=t,this.hasSeed=e}return n.prototype.call=function(n,t){return t.subscribe(new f(n,this.accumulator,this.seed,this.hasSeed))},n}(),f=function(n){function t(t,e,r,i){var o=n.call(this,t)||this;return o.accumulator=e,o._seed=r,o.hasSeed=i,o.index=0,o}return u.a(t,n),Object.defineProperty(t.prototype,"seed",{get:function(){return this._seed},set:function(n){this.hasSeed=!0,this._seed=n},enumerable:!0,configurable:!0}),t.prototype._next=function(n){if(this.hasSeed)return this._tryNext(n);this.seed=n,this.destination.next(n)},t.prototype._tryNext=function(n){var t,e=this.index++;try{t=this.accumulator(this.seed,n,e)}catch(n){this.destination.error(n)}this.seed=t,this.destination.next(t)},t}(c.a);function s(n){return function(n){return new r.a(function(t){return{unsubscribe:n.onSnapshot(t)}})}(n)}function h(n){return s(n)}function p(n){return s(n)}e.d(t,"collectionChanges",function(){return O}),e.d(t,"collection",function(){return g}),e.d(t,"sortedChanges",function(){return j}),e.d(t,"auditTrail",function(){return I}),e.d(t,"collectionData",function(){return S}),e.d(t,"doc",function(){return b}),e.d(t,"docData",function(){return x}),e.d(t,"snapToData",function(){return v}),e.d(t,"fromRef",function(){return s}),e.d(t,"fromDocRef",function(){return h}),e.d(t,"fromCollectionRef",function(){return p});var l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n};function b(n){return h(n)}function x(n,t){return b(n).pipe(Object(i.a)(function(n){return v(n,t)}))}function v(n,t){return l({},n.data(),t?((e={})[t]=n.id,e):null);var e}var w=["added","modified","removed"],m=function(n){return Object(o.a)(function(t){for(var e=!1,r=0;r<t.length;r++){var i=t[r];if(n.indexOf(i.type)>=0){e=!0;break}}return e})},y=Object(o.a)(function(n){return n.length>0});function O(n,t){return void 0===t&&(t=w),p(n).pipe(Object(i.a)(function(n){return n.docChanges()}),m(t),y)}function g(n){return p(n).pipe(Object(i.a)(function(n){return n.docs}))}function j(n,t){return O(n,t).pipe(d(function(n,e){return function(n,t,e){return void 0===e&&(e=w),t.forEach(function(t){e.indexOf(t.type)>-1&&(n=function(n,t){switch(t.type){case"added":n[t.newIndex]&&n[t.newIndex].doc.id==t.doc.id||n.splice(t.newIndex,0,t);break;case"modified":t.oldIndex!==t.newIndex?(n.splice(t.oldIndex,1),n.splice(t.newIndex,0,t)):n[t.newIndex]=t;break;case"removed":n.splice(t.oldIndex,1)}return n}(n,t))}),n}(n,e,t)},[]))}function I(n,t){return O(n,t).pipe(d(function(n,t){return n.concat(t)},[]))}function S(n,t){return g(n).pipe(Object(i.a)(function(n){return n.map(function(n){return v(n,t)})}))}}}]);