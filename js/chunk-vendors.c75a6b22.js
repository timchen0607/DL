(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=i.Error,h=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!a(e))return h(this,t);var n=o(e,this,t);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):o(i(t))}},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return zo})),n.d(e,"b",(function(){return qs})),n.d(e,"c",(function(){return Go})),n.d(e,"d",(function(){return Fs})),n.d(e,"e",(function(){return Us})),n.d(e,"f",(function(){return Yo})),n.d(e,"g",(function(){return $s})),n.d(e,"h",(function(){return Is})),n.d(e,"i",(function(){return Bs})),n.d(e,"j",(function(){return Ns}));var r=n("589b"),i=n("22e5"),o=n("e691"),s=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new o["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=o["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=o["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=o["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends s["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class T{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new O(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.p=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */I.A=-1;class N{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new R(0,0))}static max(){return new L(new R(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends U{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends U{construct(t,e,n){return new $(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $(e)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.fields=t,t.sort($.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(y(!!t),"string"==typeof t){let e=0;const n=G.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function X(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Q(t){const e=t.mapValue.fields.__previous_value__;return Y(e)?Q(e):e}function J(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(B.fromString(t))}static fromName(t){return new it(B.fromString(t).popFirst(5))}static empty(){return new it(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Y(t)?4:bt(t)?9:10:v()}function st(t,e){if(t===e)return!0;const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return X(t.bytesValue).isEqual(X(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return W(t.geoPointValue.latitude)===W(e.geoPointValue.latitude)&&W(t.geoPointValue.longitude)===W(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return W(t.integerValue)===W(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=W(t.doubleValue),r=W(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!st(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function at(t,e){return void 0!==(t.values||[]).find(t=>st(t,e))}function ct(t,e){if(t===e)return 0;const n=ot(t),r=ot(e);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=W(t.integerValue||t.doubleValue),r=W(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ut(t.timestampValue,e.timestampValue);case 4:return ut(J(t),J(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=X(t),r=X(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=D(n[i],r[i]);if(0!==t)return t}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(W(t.latitude),W(e.latitude));return 0!==n?n:D(W(t.longitude),W(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ct(n[i],r[i]);if(t)return t}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=D(r[s],o[s]);if(0!==t)return t;const e=ct(n[r[s]],i[o[s]]);if(0!==e)return e}return D(r.length,o.length)}(t.mapValue,e.mapValue);default:throw v()}}function ut(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=H(t),r=H(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function lt(t){return ht(t)}function ht(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?X(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,it.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ht(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ht(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function ft(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dt(t){return!!t&&"integerValue"in t}function pt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vt(t){return!!t&&"mapValue"in t}function yt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=yt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yt(e)}setAll(t){let e=$.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=yt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());vt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];vt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new wt(yt(this.value))}}function Et(t){const e=[];return F(t.fields,(t,n)=>{const r=new $([t]);if(vt(n)){const t=Et(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new K(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _t{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new _t(t,1,e,L.min(),n,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ot{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ot.UNKNOWN_ID=-1;function xt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=L.fromTimestamp(1e9===r?new R(n+1,0):new R(n,r));return new St(i,it.empty(),e)}function Tt(t){return new St(t.readTime,t.key,-1)}class St{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new St(L.min(),it.empty(),-1)}static max(){return new St(L.max(),it.empty(),-1)}}function Ct(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:D(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function At(t,e=null,n=[],r=[],i=null,o=null,s=null){return new kt(t,e,n,r,i,o,s)}function It(t){const e=b(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+lt(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>lt(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>lt(t)).join(",")),e.P=t}return e.P}function jt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${lt(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>lt(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>lt(t)).join(",")),`Target(${e})`}function Nt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!zt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!st(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ht(t.startAt,e.startAt)&&Ht(t.endAt,e.endAt)}function Dt(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Mt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Rt(t,e,n):"array-contains"===e?new Vt(t,n):"in"===e?new Ut(t,n):"not-in"===e?new Bt(t,n):"array-contains-any"===e?new qt(t,n):new Mt(t,e,n)}static V(t,e,n){return"in"===e?new Lt(t,n):new Pt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ct(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.v(ct(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Rt extends Mt{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.v(e)}}class Lt extends Mt{constructor(t,e){super(t,"in",e),this.keys=Ft("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pt extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=Ft("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ft(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>it.fromName(t.referenceValue))}class Vt extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pt(e)&&at(e.arrayValue,this.value)}}class Ut extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&at(this.value.arrayValue,e)}}class Bt extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(at(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!at(this.value.arrayValue,e)}}class qt extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>at(this.value.arrayValue,t))}}class $t{constructor(t,e){this.position=t,this.inclusive=e}}class Kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Gt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?it.comparator(it.fromName(s.referenceValue),n.key):ct(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Ht(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Xt(t,e,n,r,i,o,s,a){return new Wt(t,e,n,r,i,o,s,a)}function Yt(t){return new Wt(t)}function Qt(t){return!et(t.limit)&&"F"===t.limitType}function Jt(t){return!et(t.limit)&&"L"===t.limitType}function Zt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function te(t){for(const e of t.filters)if(e.S())return e.field;return null}function ee(t){return null!==t.collectionGroup}function ne(t){const e=b(t);if(null===e.D){e.D=[];const t=te(e),n=Zt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Kt(t)),e.D.push(new Kt($.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Kt($.keyField(),t))}}}return e.D}function re(t){const e=b(t);if(!e.C)if("F"===e.limitType)e.C=At(e.path,e.collectionGroup,ne(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ne(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Kt(i.field,e))}const n=e.endAt?new $t(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new $t(e.startAt.position,!e.startAt.inclusive):null;e.C=At(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function ie(t,e,n){return new Wt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oe(t,e){return Nt(re(t),re(e))&&t.limitType===e.limitType}function se(t){return`${It(re(t))}|lt:${t.limitType}`}function ae(t){return`Query(target=${jt(re(t))}; limitType=${t.limitType})`}function ce(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Gt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ne(t),e))&&!(t.endAt&&!function(t,e,n){const r=Gt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ne(t),e))}(t,e)}function ue(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function le(t){return(e,n)=>{let r=!1;for(const i of ne(t)){const t=he(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function he(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ct(r,i):v()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function de(t){return{integerValue:""+t}}function pe(t,e){return rt(e)?de(e):fe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this._=void 0}}function me(t,e,n){return t instanceof be?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof we?Ee(t,e):t instanceof _e?Oe(t,e):function(t,e){const n=ye(t,e),r=Te(n)+Te(t.k);return dt(n)&&dt(t.k)?de(r):fe(t.M,r)}(t,e)}function ve(t,e,n){return t instanceof we?Ee(t,e):t instanceof _e?Oe(t,e):n}function ye(t,e){return t instanceof xe?dt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class be extends ge{}class we extends ge{constructor(t){super(),this.elements=t}}function Ee(t,e){const n=Se(e);for(const r of t.elements)n.some(t=>st(t,r))||n.push(r);return{arrayValue:{values:n}}}class _e extends ge{constructor(t){super(),this.elements=t}}function Oe(t,e){let n=Se(e);for(const r of t.elements)n=n.filter(t=>!st(t,r));return{arrayValue:{values:n}}}class xe extends ge{constructor(t,e){super(),this.M=t,this.k=e}}function Te(t){return W(t.integerValue||t.doubleValue)}function Se(t){return pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof we&&e instanceof we||t instanceof _e&&e instanceof _e?M(t.elements,e.elements,st):t instanceof xe&&e instanceof xe?st(t.k,e.k):t instanceof be&&e instanceof be}(t.transform,e.transform)}class ke{constructor(t,e){this.version=t,this.transformResults=e}}class Ae{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ae}static exists(t){return new Ae(void 0,t)}static updateTime(t){return new Ae(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ie(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class je{}function Ne(t,e,n){t instanceof Pe?function(t,e,n){const r=t.value.clone(),i=Ue(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!Ie(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ue(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ve(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function De(t,e,n){t instanceof Pe?function(t,e,n){if(!Ie(t.precondition,e))return;const r=t.value.clone(),i=Be(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Le(e),r).setHasLocalMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!Ie(t.precondition,e))return;const r=Be(t.fieldTransforms,n,e),i=e.data;i.setAll(Ve(t)),i.setAll(r),e.convertToFoundDocument(Le(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ie(t.precondition,e)&&e.convertToNoDocument(L.min())}(t,e)}function Me(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ye(r.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Re(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&M(t,e,(t,e)=>Ce(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Le(t){return t.isFoundDocument()?t.version:L.min()}class Pe extends je{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Fe extends je{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ve(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ue(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,ve(s,a,n[i]))}return r}function Be(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,me(t,o,e))}return r}class qe extends je{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class $e extends je{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ge;function He(t){switch(t){default:return v();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function We(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case ze.OK:return w.OK;case ze.CANCELLED:return w.CANCELLED;case ze.UNKNOWN:return w.UNKNOWN;case ze.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ze.INTERNAL:return w.INTERNAL;case ze.UNAVAILABLE:return w.UNAVAILABLE;case ze.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ze.NOT_FOUND:return w.NOT_FOUND;case ze.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ze.ABORTED:return w.ABORTED;case ze.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ze.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Ge=ze||(ze={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return V(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e){this.comparator=t,this.root=e||Je.EMPTY}insert(t,e){return new Ye(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(t){return new Ye(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Je.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qe(this.root,t,this.comparator,!0)}}class Qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Je{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Je.RED,this.left=null!=r?r:Je.EMPTY,this.right=null!=i?i:Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Je(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Je.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1,Je.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(t){this.comparator=t,this.data=new Ye(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tn(this.data.getIterator())}getIteratorFrom(t){return new tn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ze))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ze(this.comparator);return e.data=t,e}}class tn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en=new Ye(it.comparator);function nn(){return en}const rn=new Ye(it.comparator);function on(){return rn}function sn(){return new Xe(t=>t.toString(),(t,e)=>t.isEqual(e))}const an=new Ye(it.comparator),cn=new Ze(it.comparator);function un(...t){let e=cn;for(const n of t)e=e.add(n);return e}const ln=new Ze(D);function hn(){return ln}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e)),new fn(L.min(),n,hn(),nn(),un())}}class dn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new dn(z.EMPTY_BYTE_STRING,e,un(),un(),un())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class gn{constructor(t,e){this.targetId=t,this.$=e}}class mn{constructor(t,e,n=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class vn{constructor(){this.B=0,this.L=wn(),this.U=z.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=un(),e=un(),n=un();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new dn(this.U,this.q,t,e,n)}J(){this.G=!1,this.L=wn()}Y(t,e){this.G=!0,this.L=this.L.insert(t,e)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class yn{constructor(t){this.nt=t,this.st=new Map,this.it=nn(),this.rt=bn(),this.ot=new Ze(D)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(Dt(t))if(0===n){const n=new it(t.path);this.ct(e,n,_t.newNoDocument(n,L.min()))}else y(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Dt(i.target)){const e=new it(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,_t.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}});let n=un();this.rt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const r=new fn(t,e,this.ot,this.it,n);return this.it=nn(),this.rt=bn(),this.ot=new Ze(D),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new vn,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Ze(D),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new vn),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function bn(){return new Ye(it.comparator)}function wn(){return new Ye(it.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),_n=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class On{constructor(t,e){this.databaseId=t,this.N=e}}function xn(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tn(t,e){return t.N?e.toBase64():e.toUint8Array()}function Sn(t,e){return xn(t,e.toTimestamp())}function Cn(t){return y(!!t),L.fromTimestamp(function(t){const e=H(t);return new R(e.seconds,e.nanos)}(t))}function kn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function An(t){const e=B.fromString(t);return y(Jn(e)),e}function In(t,e){return kn(t.databaseId,e.path)}function jn(t,e){const n=An(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Rn(n))}function Nn(t,e){return kn(t.databaseId,e)}function Dn(t){const e=An(t);return 4===e.length?B.emptyPath():Rn(e)}function Mn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rn(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ln(t,e,n){return{name:In(t,e),fields:n.value.mapValue.fields}}function Pn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.N?(y(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?w.UNKNOWN:We(t.code);return new E(e,t.message||"")}(s);n=new mn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jn(t,r.document.name),o=Cn(r.document.updateTime),s=new wt({mapValue:{fields:r.document.fields}}),a=_t.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jn(t,r.document),o=r.readTime?Cn(r.readTime):L.min(),s=_t.newNoDocument(i,o),a=r.removedTargetIds||[];n=new pn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jn(t,r.document),o=r.removedTargetIds||[];n=new pn([],o,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ke(r),o=t.targetId;n=new gn(o,i)}}return n}function Fn(t,e){let n;if(e instanceof Pe)n={update:Ln(t,e.key,e.value)};else if(e instanceof qe)n={delete:In(t,e.key)};else if(e instanceof Fe)n={update:Ln(t,e.key,e.data),updateMask:Qn(e.fieldMask)};else{if(!(e instanceof $e))return v();n={verify:In(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof be)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof we)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _e)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xe)return{fieldPath:e.field.canonicalString(),increment:n.k};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Sn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Vn(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Cn(t.updateTime):Cn(e);return n.isEqual(L.min())&&(n=Cn(e)),new ke(n,t.transformResults||[])}(t,e))):[]}function Un(t,e){return{documents:[Nn(t,e.path)]}}function Bn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Nn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(mt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(mt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(t.field),op:Gn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Hn(t.field),direction:zn(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.N||et(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function qn(t){let e=Dn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Kn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Kt(Wn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new $t(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new $t(n,e)}(n.endAt)),Xt(e,i,s,o,a,"F",c,u)}function $n(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Kn(t){return t?void 0!==t.unaryFilter?[Yn(t)]:void 0!==t.fieldFilter?[Xn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Kn(t)).reduce((t,e)=>t.concat(e)):v():[]}function zn(t){return En[t]}function Gn(t){return _n[t]}function Hn(t){return{fieldPath:t.canonicalString()}}function Wn(t){return $.fromServerFormat(t.fieldPath)}function Xn(t){return Mt.create(Wn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wn(t.unaryFilter.field);return Mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wn(t.unaryFilter.field);return Mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wn(t.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wn(t.unaryFilter.field);return Mt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Qn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],tr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],er="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof rr?e:rr.resolve(e)}catch(t){return rr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):rr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):rr.reject(e)}static resolve(t){return new rr((e,n)=>{e(t)})}static reject(t){return new rr((e,n)=>{n(t)})}static waitFor(t){return new rr((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=rr.resolve(!1);for(const n of t)e=e.next(t=>t?rr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ne(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&De(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&De(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),un())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,(t,e)=>Re(t,e))&&M(this.baseMutations,t.baseMutations,(t,e)=>Re(t,e))}}class sr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=an;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new sr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,r,i=L.min(),o=L.min(),s=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new cr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.Jt=t}}function lr(t){const e=qn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ie(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(W(t.integerValue));else if("doubleValue"in t){const n=W(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),nt(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(""+(n.seconds||"")),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(X(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?bt(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):v()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),it.fromName(t).path.forEach(t=>{this.ne(e,60),this.le(t,e)})}ne(t,e){t.se(e)}oe(t){t.se(2)}}hr.fe=new hr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(){this.qe=new dr}addToCollectionParentIndex(t,e){return this.qe.add(e),rr.resolve()}getCollectionParents(t,e){return rr.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return rr.resolve()}deleteFieldIndex(t,e){return rr.resolve()}getDocumentsMatchingTarget(t,e){return rr.resolve(null)}getFieldIndex(t,e){return rr.resolve(null)}getFieldIndexes(t,e){return rr.resolve([])}getNextCollectionGroupToUpdate(t){return rr.resolve(null)}updateCollectionGroup(t,e,n){return rr.resolve()}updateIndexEntries(t,e){return rr.resolve()}}class dr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ze(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ze(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new pr(t,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr.DEFAULT_COLLECTION_PERCENTILE=10,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pr.DEFAULT=new pr(41943040,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pr.DISABLED=new pr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new gr(0)}static gn(){return new gr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==er)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(){this.changes=new Xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?rr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e,n){this.fs=t,this.$s=e,this.indexManager=n}Bs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Ls(t,e,n))}Ls(t,e,n){return this.fs.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Us(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}qs(t,e){return this.fs.getEntries(t,e).next(e=>this.Gs(t,e).next(()=>e))}Gs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Us(e,t))}Ks(t,e,n){return function(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):ee(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new it(e)).next(t=>{let e=on();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}js(t,e,n){const r=e.collectionGroup;let i=on();return this.indexManager.getCollectionParents(t,r).next(o=>rr.forEach(o,o=>{const s=function(t,e){return new Wt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.Ws(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Ws(t,e,n){let r;return this.fs.getAllFromCollection(t,e.path,n).next(n=>(r=n,this.$s.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=_t.newInvalidDocument(n),r=r.insert(n,i)),De(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((t,n)=>{ce(e,n)||(r=r.remove(t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=r}static Js(t,e){let n=un(),r=un();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new br(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{Ys(t){this.Xs=t}Ks(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(L.min())?this.Zs(t,e):this.Xs.qs(t,r).next(i=>{const s=this.ti(e,i);return(Qt(e)||Jt(e))&&this.ei(e.limitType,s,r,n)?this.Zs(t,e):(f()<=o["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ae(e)),this.Xs.Ks(t,e,xt(n,-1)).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}ti(t,e){let n=new Ze(le(t));return e.forEach((e,r)=>{ce(t,r)&&(n=n.add(r))}),n}ei(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(t,e){return f()<=o["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",ae(e)),this.Xs.Ks(t,e,St.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,n,r){this.persistence=t,this.ni=e,this.M=r,this.si=new Ye(D),this.ii=new Xe(t=>It(t),Nt),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(n)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new yr(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.si))}}function _r(t,e,n,r){return new Er(t,e,n,r)}async function Or(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.$s.getAllMutationBatches(t).next(i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(t))).next(e=>{const i=[],o=[];let s=un();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.ai.qs(t,s).next(t=>({ci:t,removedBatchIds:i,addedBatchIds:o}))})})}function xr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=rr.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);y(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),s.next(()=>t.$s.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.$s.performConsistencyCheck(t)).next(()=>n.ai.qs(t,r))})}function Tr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ls.getLastRemoteSnapshotVersion(t))}function Sr(t,e){const n=b(t),r=e.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const s=[];e.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.ls.removeMatchingKeys(t,o.removedDocuments,a).next(()=>n.ls.addMatchingKeys(t,o.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(z.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.ls.updateTargetData(t,u))});let a=nn();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(Cr(t,o,e.documentUpdates).next(t=>{a=t})),!r.isEqual(L.min())){const e=n.ls.getLastRemoteSnapshotVersion(t).next(e=>n.ls.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return rr.waitFor(s).next(()=>o.apply(t)).next(()=>n.ai.Gs(t,a)).next(()=>a)}).then(t=>(n.si=i,t))}function Cr(t,e,n){let r=un();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=nn();return n.forEach((n,i)=>{const o=t.get(n);i.isNoDocument()&&i.version.isEqual(L.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),r})}function kr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(t,e)))}function Ar(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ls.getTargetData(t,e).next(i=>i?(r=i,rr.resolve(r)):n.ls.allocateTargetId(t).next(i=>(r=new cr(e,i,0,t.currentSequenceNumber),n.ls.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.si.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t})}async function Ir(t,e,n){const r=b(t),i=r.si.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!ir(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.si=r.si.remove(e),r.ii.delete(i.target)}function jr(t,e,n){const r=b(t);let i=L.min(),o=un();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.ii.get(n);return void 0!==i?rr.resolve(r.si.get(i)):r.ls.getTargetData(e,n)}(r,t,re(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.ni.Ks(t,e,n?i:L.min(),n?o:un())).next(t=>(Nr(r,ue(e),t),{documents:t,hi:o})))}function Nr(t,e,n){let r=L.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.ri.set(e,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,e){return rr.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:Cn(n.createTime)}),rr.resolve()}getNamedQuery(t,e){return rr.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return{name:t.name,query:lr(t.bundledQuery),readTime:Cn(t.readTime)}}(e)),rr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.overlays=new Ye(it.comparator),this.mi=new Map}getOverlay(t,e){return rr.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.Xt(t,e,r)}),rr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.mi.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.mi.delete(n)),rr.resolve()}getOverlaysForCollection(t,e,n){const r=sn(),i=e.length+1,o=new it(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return rr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ye((t,e)=>t-e);const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=sn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>s.set(t,e)),s.size()>=r)break;return rr.resolve(s)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.mi.get(r.largestBatchId).delete(n.key);this.mi.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ar(e,n));let i=this.mi.get(e);void 0===i&&(i=un(),this.mi.set(e,i)),this.mi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.gi=new Ze(Lr.yi),this.pi=new Ze(Lr.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new Lr(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Ei(new Lr(t,e))}Ai(t,e){t.forEach(t=>this.removeReference(t,e))}Ri(t){const e=new it(new B([])),n=new Lr(e,t),r=new Lr(e,t+1),i=[];return this.pi.forEachInRange([n,r],t=>{this.Ei(t),i.push(t.key)}),i}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const e=new it(new B([])),n=new Lr(e,t),r=new Lr(e,t+1);let i=un();return this.pi.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Lr(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Lr{constructor(t,e){this.key=t,this.Vi=e}static yi(t,e){return it.comparator(t.key,e.key)||D(t.Vi,e.Vi)}static Ii(t,e){return D(t.Vi,e.Vi)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.$s=[],this.vi=1,this.Si=new Ze(Lr.yi)}checkEmpty(t){return rr.resolve(0===this.$s.length)}addMutationBatch(t,e,n,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new or(i,e,n,r);this.$s.push(o);for(const s of r)this.Si=this.Si.add(new Lr(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return rr.resolve(o)}lookupMutationBatch(t,e){return rr.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ci(n),i=r<0?0:r;return rr.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return rr.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(t){return rr.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Lr(e,0),r=new Lr(e,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,r],t=>{const e=this.Di(t.Vi);i.push(e)}),rr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ze(D);return e.forEach(t=>{const e=new Lr(t,0),r=new Lr(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,r],t=>{n=n.add(t.Vi)})}),rr.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const o=new Lr(new it(i),0);let s=new Ze(D);return this.Si.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.Vi)),!0)},o),rr.resolve(this.xi(s))}xi(t){const e=[];return t.forEach(t=>{const n=this.Di(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.Ni(e.batchId,"removed")),this.$s.shift();let n=this.Si;return rr.forEach(e.mutations,r=>{const i=new Lr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Si=n})}dn(t){}containsKey(t,e){const n=new Lr(e,0),r=this.Si.firstAfterOrEqual(n);return rr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.$s.length,rr.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.$s.length?0:t-this.$s[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.$s.length?null:this.$s[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.ki=t,this.docs=new Ye(it.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return rr.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=nn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():_t.newInvalidDocument(t))}),rr.resolve(n)}getAllFromCollection(t,e,n){let r=nn();const i=new it(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ct(Tt(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return rr.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}Mi(t,e){return rr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Vr(this)}getSize(t){return rr.resolve(this.size)}}class Vr extends vr{constructor(t){super(),this.qn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.qn.addEntry(t,r)):this.qn.removeEntry(n)}),rr.waitFor(e)}getFromCache(t,e){return this.qn.getEntry(t,e)}getAllFromCache(t,e){return this.qn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.persistence=t,this.Oi=new Xe(t=>It(t),Nt),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Rr,this.targetCount=0,this.Bi=gr.mn()}forEachTarget(t,e){return this.Oi.forEach((t,n)=>e(n)),rr.resolve()}getLastRemoteSnapshotVersion(t){return rr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rr.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),rr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fi&&(this.Fi=e),rr.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new gr(e),this.highestTargetId=e),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,e){return this.In(e),this.targetCount+=1,rr.resolve()}updateTargetData(t,e){return this.In(e),rr.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.$i.Ri(e.targetId),this.targetCount-=1,rr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Oi.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),rr.waitFor(i).next(()=>r)}getTargetCount(t){return rr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return rr.resolve(n)}addMatchingKeys(t,e,n){return this.$i.Ti(e,n),rr.resolve()}removeMatchingKeys(t,e,n){this.$i.Ai(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),rr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.$i.Ri(e),rr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.$i.Pi(e);return rr.resolve(n)}containsKey(t,e){return rr.resolve(this.$i.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.Li={},this.overlays={},this.ts=new I(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new Ur(this),this.indexManager=new fr,this.fs=function(t){return new Fr(t)}(t=>this.referenceDelegate.Ui(t)),this.M=new ur(e),this.ds=new Dr(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new Pr(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new qr(this.ts.next());return this.referenceDelegate.qi(),n(r).next(t=>this.referenceDelegate.Gi(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ki(t,e){return rr.or(Object.values(this.Li).map(n=>()=>n.containsKey(t,e)))}}class qr extends nr{constructor(t){super(),this.currentSequenceNumber=t}}class $r{constructor(t){this.persistence=t,this.Qi=new Rr,this.ji=null}static Wi(t){return new $r(t)}get zi(){if(this.ji)return this.ji;throw v()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),rr.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),rr.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),rr.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach(t=>this.zi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.zi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}qi(){this.ji=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rr.forEach(this.zi,n=>{const r=it.fromPath(n);return this.Hi(t,r).next(t=>{t||e.removeEntry(r,L.min())})}).next(()=>(this.ji=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hi(t,e).next(t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString())})}Ui(t){return 0}Hi(t,e){return rr.or([()=>rr.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ki(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.activeTargetIds=hn()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zr{constructor(){this.Fr=new Kr,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Kr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const o=this.oo(t,e);d("RestConnection","Sending: ",o,n);const s={};return this.uo(s,r,i),this.ao(t,o,s,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",o,"request:",n),e})}co(t,e,n,r,i){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}oo(t,e){const n=Wr[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),o(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(w.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new E(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),o=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.uo(c.initMessageHeaders,e,n),Object(s["p"])()||Object(s["q"])()||Object(s["m"])()||Object(s["n"])()||Object(s["s"])()||Object(s["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");d("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,f=!1;const p=new Xr({jr:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(h||(d("Connection","Opening WebChannel transport."),l.open(),h=!0),d("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),p.eo())}),m(l,a["f"].EventType.ERROR,t=>{f||(f=!0,g("Connection","WebChannel transport errored:",t),p.eo(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ze[t];if(void 0!==e)return We(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),f=!0,p.eo(new E(e,n)),l.close()}else d("Connection","WebChannel received:",n),p.no(n)}}),m(o,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){return new On(t,!0)}class Zr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Jn=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,n,r,i,o,s,a){this.Jn=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Zr(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Po===e&&this.Uo(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)})})}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Go(t,e),this.stream.zr(()=>{n(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(t=>{n(()=>this.qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.Jn.enqueueAndForget(()=>this.Po===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ei extends ti{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.M=i}Go(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Pn(this.M,t),n=function(t){if(!("targetChange"in t))return L.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?L.min():e.readTime?Cn(e.readTime):L.min()}(t);return this.listener.Ko(e,n)}Qo(t){const e={};e.database=Mn(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=Dt(r)?{documents:Un(t,r)}:{query:Bn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Tn(t,e.resumeToken):e.snapshotVersion.compareTo(L.min())>0&&(n.readTime=xn(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=$n(this.M,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=Mn(this.M),e.removeTarget=t,this.Oo(e)}}class ni extends ti{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Vn(t.writeResults,t.commitTime),n=Cn(t.commitTime);return this.listener.Jo(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Mn(this.M),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Fn(this.M,t))};this.Oo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}co(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.Zo=!0}}class ii{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou("Connection failed 1 times. Most recent error: "+t.toString()),this.ru("Offline")))}set(t){this.au(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(p(e),this.su=!1):d("OnlineStateTracker",e)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(t=>{n.enqueueAndForget(async()=>{pi(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.lu.add(4),await ai(e),e._u.set("Unknown"),e.lu.delete(4),await si(e)}(this))})}),this._u=new ii(n,r)}}async function si(t){if(pi(t))for(const e of t.fu)await e(!0)}async function ai(t){for(const e of t.fu)await e(!1)}function ci(t,e){const n=b(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),di(n)?fi(n):Ni(n).Co()&&li(n,e))}function ui(t,e){const n=b(t),r=Ni(n);n.hu.delete(e),r.Co()&&hi(n,e),0===n.hu.size&&(r.Co()?r.ko():pi(n)&&n._u.set("Unknown"))}function li(t,e){t.wu.Z(e.targetId),Ni(t).Qo(e)}function hi(t,e){t.wu.Z(e),Ni(t).jo(e)}function fi(t){t.wu=new yn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),Ni(t).start(),t._u.iu()}function di(t){return pi(t)&&!Ni(t).Do()&&t.hu.size>0}function pi(t){return 0===b(t).lu.size}function gi(t){t.wu=void 0}async function mi(t){t.hu.forEach((e,n)=>{li(t,e)})}async function vi(t,e){gi(t),di(t)?(t._u.uu(e),fi(t)):t._u.set("Unknown")}async function yi(t,e,n){if(t._u.set("Online"),e instanceof mn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bi(t,n)}else if(e instanceof pn?t.wu.ut(e):e instanceof gn?t.wu._t(e):t.wu.ht(e),!n.isEqual(L.min()))try{const e=await Tr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),hi(t,e);const r=new cr(n.target,e,1,n.sequenceNumber);li(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await bi(t,e)}}async function bi(t,e,n){if(!ir(e))throw e;t.lu.add(1),await ai(t),t._u.set("Offline"),n||(n=()=>Tr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await si(t)})}function wi(t,e){return e().catch(n=>bi(t,n,e))}async function Ei(t){const e=b(t),n=Di(e);let r=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;_i(e);)try{const t=await kr(e.localStore,r);if(null===t){0===e.cu.length&&n.ko();break}r=t.batchId,Oi(e,t)}catch(t){await bi(e,t)}xi(e)&&Ti(e)}function _i(t){return pi(t)&&t.cu.length<10}function Oi(t,e){t.cu.push(e);const n=Di(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function xi(t){return pi(t)&&!Di(t).Do()&&t.cu.length>0}function Ti(t){Di(t).start()}async function Si(t){Di(t).Xo()}async function Ci(t){const e=Di(t);for(const n of t.cu)e.Ho(n.mutations)}async function ki(t,e,n){const r=t.cu.shift(),i=sr.from(r,e,n);await wi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ei(t)}async function Ai(t,e){e&&Di(t).zo&&await async function(t,e){if(n=e.code,He(n)&&n!==w.ABORTED){const n=t.cu.shift();Di(t).No(),await wi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ei(t)}var n}(t,e),xi(t)&&Ti(t)}async function Ii(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.lu.add(3),await ai(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await si(n)}async function ji(t,e){const n=b(t);e?(n.lu.delete(2),await si(n)):e||(n.lu.add(2),await ai(n),n._u.set("Unknown"))}function Ni(t){return t.mu||(t.mu=function(t,e,n){const r=b(t);return r.tu(),new ei(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:mi.bind(null,t),Jr:vi.bind(null,t),Ko:yi.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),di(t)?fi(t):t._u.set("Unknown")):(await t.mu.stop(),gi(t))})),t.mu}function Di(t){return t.gu||(t.gu=function(t,e,n){const r=b(t);return r.tu(),new ni(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{zr:Si.bind(null,t),Jr:Ai.bind(null,t),Yo:Ci.bind(null,t),Jo:ki.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ei(t)):(await t.gu.stop(),t.cu.length>0&&(d("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))})),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mi{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Mi(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ri(t,e){if(p("AsyncQueue",`${e}: ${t}`),ir(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=on(),this.sortedSet=new Ye(this.comparator)}static emptySet(t){return new Li(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Li))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Li;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.yu=new Ye(it.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):v():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Fi{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Fi(t,e,Li.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.Iu=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new Xe(t=>se(t),oe),this.onlineState="Unknown",this.Tu=new Set}}async function Bi(t,e){const n=b(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Vi),i)try{o.Iu=await n.onListen(r)}catch(t){const n=Ri(t,`Initialization of query '${ae(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Eu(n.onlineState),o.Iu&&e.Au(o.Iu)&&zi(n)}async function qi(t,e){const n=b(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $i(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(r=!0);e.Iu=i}}r&&zi(n)}function Ki(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function zi(t){t.Tu.forEach(t=>{t.next()})}class Gi{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Fi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),e=!0):this.vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Fi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(t){this.key=t}}class Wi{constructor(t){this.key=t}}class Xi{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=un(),this.mutatedKeys=un(),this.Lu=le(t),this.Uu=new Li(this.Lu)}get qu(){return this.Fu}Gu(t,e){const n=e?e.Ku:new Pi,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=Qt(this.query)&&r.size===this.query.limit?r.last():null,c=Jt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ce(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),Qt(this.query)||Jt(this.query))for(;o.size>this.query.limit;){const t=Qt(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:o,Ku:n,ei:s,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Ku.pu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc)),this.ju(n);const o=e?this.Wu():[],s=0===this.Bu.size&&this.current?1:0,a=s!==this.$u;return this.$u=s,0!==i.length||a?{snapshot:new Fi(this.query,t.Uu,r,i,t.mutatedKeys,0===s,a,!1),zu:o}:{zu:o}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Pi,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=un(),this.Uu.forEach(t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))});const e=[];return t.forEach(t=>{this.Bu.has(t)||e.push(new Wi(t))}),this.Bu.forEach(n=>{t.has(n)||e.push(new Hi(n))}),e}Ju(t){this.Fu=t.hi,this.Bu=un();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Yu(){return Fi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Yi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qi{constructor(t){this.key=t,this.Xu=!1}}class Ji{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Xe(t=>se(t),oe),this.ea=new Map,this.na=new Set,this.sa=new Ye(it.comparator),this.ia=new Map,this.ra=new Rr,this.oa={},this.ua=new Map,this.aa=gr.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function Zi(t,e){const n=bo(t);let r,i;const o=n.ta.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Yu();else{const t=await Ar(n.localStore,re(e));n.isPrimaryClient&&ci(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await to(n,e,r,"current"===o)}return i}async function to(t,e,n,r){t.ha=(e,n,r)=>async function(t,e,n,r){let i=e.view.Gu(n);i.ei&&(i=await jr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Gu(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return fo(t,e.targetId,s.zu),s.snapshot}(t,e,n,r);const i=await jr(t.localStore,e,!0),o=new Xi(e,i.hi),s=o.Gu(i.documents),a=dn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);fo(t,n,c.zu);const u=new Yi(e,n,o);return t.ta.set(e,u),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function eo(t,e){const n=b(t),r=n.ta.get(e),i=n.ea.get(r.targetId);if(i.length>1)return n.ea.set(r.targetId,i.filter(t=>!oe(t,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ir(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ui(n.remoteStore,r.targetId),lo(n,r.targetId)}).catch(mr)):(lo(n,r.targetId),await Ir(n.localStore,r.targetId,!0))}async function no(t,e,n){const r=wo(t);try{const t=await function(t,e){const n=b(t),r=R.now(),i=e.reduce((t,e)=>t.add(e.key),un());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.ai.qs(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=Me(t,o.get(t.key));null!=e&&s.push(new Fe(t.key,e,Et(e.value.mapValue),Ae.exists(!0)))}return n.$s.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oa[t.currentUser.toKey()];r||(r=new Ye(D)),r=r.insert(e,n),t.oa[t.currentUser.toKey()]=r}(r,t.batchId,n),await mo(r,t.changes),await Ei(r.remoteStore)}catch(t){const e=Ri(t,"Failed to persist write");n.reject(e)}}async function ro(t,e){const n=b(t);try{const t=await Sr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.ia.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?y(r.Xu):t.removedDocuments.size>0&&(y(r.Xu),r.Xu=!1))}),await mo(n,t,e)}catch(t){await mr(t)}}function io(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ta.forEach((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)}),r&&zi(n)}(r.eventManager,e),t.length&&r.Zu.Ko(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oo(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ia.get(e),o=i&&i.key;if(o){let t=new Ye(it.comparator);t=t.insert(o,_t.newNoDocument(o,L.min()));const n=un().add(o),i=new fn(L.min(),new Map,new Ze(D),t,n);await ro(r,i),r.sa=r.sa.remove(o),r.ia.delete(e),go(r)}else await Ir(r.localStore,e,!1).then(()=>lo(r,e,n)).catch(mr)}async function so(t,e){const n=b(t),r=e.batch.batchId;try{const t=await xr(n.localStore,e);uo(n,r,null),co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,t)}catch(t){await mr(t)}}async function ao(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.$s.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.$s.removeMutationBatch(t,e))).next(()=>n.$s.performConsistencyCheck(t)).next(()=>n.ai.qs(t,r))})}(r.localStore,e);uo(r,e,n),co(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,t)}catch(n){await mr(n)}}function co(t,e){(t.ua.get(e)||[]).forEach(t=>{t.resolve()}),t.ua.delete(e)}function uo(t,e,n){const r=b(t);let i=r.oa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oa[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ea.get(e))t.ta.delete(r),n&&t.Zu.la(r,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(e=>{t.ra.containsKey(e)||ho(t,e)})}function ho(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);null!==n&&(ui(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),go(t))}function fo(t,e,n){for(const r of n)r instanceof Hi?(t.ra.addReference(r.key,e),po(t,r)):r instanceof Wi?(d("SyncEngine","Document no longer in limbo: "+r.key),t.ra.removeReference(r.key,e),t.ra.containsKey(r.key)||ho(t,r.key)):v()}function po(t,e){const n=e.key,r=n.path.canonicalString();t.sa.get(n)||t.na.has(r)||(d("SyncEngine","New document in limbo: "+n),t.na.add(r),go(t))}function go(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new it(B.fromString(e)),r=t.aa.next();t.ia.set(r,new Qi(n)),t.sa=t.sa.insert(n,r),ci(t.remoteStore,new cr(re(Yt(n.path)),r,2,I.A))}}async function mo(t,e,n){const r=b(t),i=[],o=[],s=[];r.ta.isEmpty()||(r.ta.forEach((t,a)=>{s.push(r.ha(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=br.Js(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.Zu.Ko(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>rr.forEach(e,e=>rr.forEach(e.zs,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>rr.forEach(e.Hs,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!ir(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.si.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.si=n.si.insert(t,i)}}}(r.localStore,o))}async function vo(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Or(n.localStore,e);n.currentUser=e,function(t,e){t.ua.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mo(n,t.ci)}}function yo(t,e){const n=b(t),r=n.ia.get(e);if(r&&r.Xu)return un().add(r.key);{let t=un();const r=n.ea.get(e);if(!r)return t;for(const e of r){const r=n.ta.get(e);t=t.unionWith(r.view.qu)}return t}}function bo(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ro.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oo.bind(null,e),e.Zu.Ko=$i.bind(null,e.eventManager),e.Zu.la=Ki.bind(null,e.eventManager),e}function wo(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=so.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ao.bind(null,e),e}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Jr(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return _r(this.persistence,new wr,t.initialUser,this.M)}_a(t){return new Br($r.Wi,this.M)}da(t){return new zr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _o{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>io(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vo.bind(null,this.syncEngine),await ji(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Jr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Yr(r));var r;return function(t,e,n,r){return new ri(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>io(this.syncEngine,t,0),o=Hr.vt()?new Hr:new Gr,new oi(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Ji(t,e,n,r,i,o);return s&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await ai(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ri(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function To(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Or(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function So(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Co(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Ii(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ii(e.remoteStore,n)),t.onlineComponents=e}async function Co(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await To(t,new Eo)),t.offlineComponents}async function ko(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await So(t,new _o)),t.onlineComponents}function Ao(t){return ko(t).then(t=>t.syncEngine)}async function Io(t){const e=await ko(t),n=e.eventManager;return n.onListen=Zi.bind(null,e.syncEngine),n.onUnlisten=eo.bind(null,e.syncEngine),n}function jo(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Oo({next:o=>{e.enqueueAndForget(()=>qi(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new E(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Gi(Yt(n.path),o,{includeMetadataChanges:!0,Du:!0});return Bi(t,s)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}function No(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Oo({next:n=>{e.enqueueAndForget(()=>qi(t,s)),n.fromCache&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new Gi(n,o,{includeMetadataChanges:!0,Du:!0});return Bi(t,s)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}const Do=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ro(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lo(t){if(!it.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Po(t){if(it.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Vo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fo(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ro("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uo({}),this._settingsFrozen=!1,t instanceof tt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new x;switch(t.type){case"gapi":const e=t.client;return y(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Do.get(t);e&&(d("ComponentProvider","Removing Datastore"),Do.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ko(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qo(this.firestore,t,this._key)}}class $o{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new $o(this.firestore,t,this._query)}}class Ko extends $o{constructor(t,e,n){super(t,e,Yt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qo(this.firestore,null,new it(t))}withConverter(t){return new Ko(this.firestore,t,this._path)}}function zo(t,e,...n){if(t=Object(s["j"])(t),Mo("collection","path",e),t instanceof Bo){const r=B.fromString(e,...n);return Po(r),new Ko(t,null,r)}{if(!(t instanceof qo||t instanceof Ko))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Po(r),new Ko(t.firestore,null,r)}}function Go(t,e,...n){if(t=Object(s["j"])(t),1===arguments.length&&(e=N.R()),Mo("doc","path",e),t instanceof Bo){const r=B.fromString(e,...n);return Lo(r),new qo(t,null,new it(r))}{if(!(t instanceof qo||t instanceof Ko))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Lo(r),new qo(t.firestore,t instanceof Ko?t.converter:null,new it(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Zr(this,"async_queue_retry"),this.Ua=()=>{const t=Qr();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Qr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const e=Qr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const e=new _;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!ir(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const e=this.Na.then(()=>(this.$a=!0,t().catch(t=>{this.Fa=t,this.$a=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.$a=!1,t))));return this.Na=e,e}enqueueAfterDelay(t,e,n){this.qa(),this.La.indexOf(t)>-1&&(e=0);const r=Mi.createAndSchedule(this,t,e,n,t=>this.Qa(t));return this.Oa.push(r),r}qa(){this.Fa&&v()}verifyOperationInProgress(){}async ja(){let t;do{t=this.Na,await t}while(t!==this.Na)}Wa(t){for(const e of this.Oa)if(e.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Oa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const e=this.Oa.indexOf(t);this.Oa.splice(e,1)}}function Wo(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Xo extends Bo{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ho,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Jo(this),this._firestoreClient.terminate()}}function Yo(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Qo(t){return t._firestoreClient||Jo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jo(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Z(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xo(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ts(z.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ts(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=/^__.*__$/;class is{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}function os(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ss{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(t){return new ss(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Xa({path:n,tc:!1});return r.ec(t),r}nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Xa({path:n,tc:!1});return r.Ja(),r}sc(t){return this.Xa({path:void 0,tc:!0})}ic(t){return ys(t,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ja(){if(this.path)for(let t=0;t<this.path.length;t++)this.ec(this.path.get(t))}ec(t){if(0===t.length)throw this.ic("Document fields must not be empty");if(os(this.Ya)&&rs.test(t))throw this.ic('Document fields cannot begin and end with "__"')}}class as{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Jr(t)}uc(t,e,n,r=!1){return new ss({Ya:t,methodName:e,oc:n,path:$.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function cs(t){const e=t._freezeSettings(),n=Jr(t._databaseId);return new as(t._databaseId,!!e.ignoreUndefinedProperties,n)}function us(t,e,n,r,i,o={}){const s=t.uc(o.merge||o.mergeFields?2:0,e,n,i);ps("Data must be an object, but it was:",s,r);const a=fs(r,s);let c,u;if(o.merge)c=new K(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=gs(e,r,n);if(!s.contains(i))throw new E(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);bs(t,i)||t.push(i)}c=new K(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new is(new wt(a),c,u)}function ls(t,e,n,r=!1){return hs(n,t.uc(r?4:3,e))}function hs(t,e){if(ds(t=Object(s["j"])(t)))return ps("Unsupported field value:",e,t),fs(t,e);if(t instanceof es)return function(t,e){if(!os(e.Ya))throw e.ic(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ic(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&4!==e.Ya)throw e.ic("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=hs(i,e.sc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["j"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return pe(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:xn(e.M,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xn(e.M,n)}}if(t instanceof ns)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ts)return{bytesValue:Tn(e.M,t._byteString)};if(t instanceof qo){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ic(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ic("Unsupported field value: "+Fo(t))}(t,e)}function fs(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,(t,r)=>{const i=hs(r,e.Za(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function ds(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof ns||t instanceof ts||t instanceof qo||t instanceof es)}function ps(t,e,n){if(!ds(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Fo(n);throw"an object"===r?e.ic(t+" a custom object"):e.ic(t+" "+r)}}function gs(t,e,n){if((e=Object(s["j"])(e))instanceof Zo)return e._internalPath;if("string"==typeof e)return vs(t,e);throw ys("Field path arguments must be of type string or ",t,!1,void 0,n)}const ms=new RegExp("[~\\*/\\[\\]]");function vs(t,e,n){if(e.search(ms)>=0)throw ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zo(...e.split("."))._internalPath}catch(r){throw ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ys(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function bs(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Es(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_s("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Es extends ws{data(){return super.data()}}function _s(t,e){return"string"==typeof e?vs(t,e):e instanceof Zo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xs extends ws{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_s("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ts extends xs{data(t={}){return super.data(t)}}class Ss{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Os(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ts(this._firestore,this._userDataWriter,n.key,n,new Os(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ts(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Os(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ts(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Os(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:Cs(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Cs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ks(t){if(Jt(t)&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class As{}function Is(t,...e){for(const n of e)t=n._apply(t);return t}class js extends As{constructor(t,e,n){super(),this.hc=t,this.lc=e,this.fc=n,this.type="where"}_apply(t){const e=cs(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Ms(s,o);const e=[];for(const n of s)e.push(Ds(r,t,n));a={arrayValue:{values:e}}}else a=Ds(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Ms(s,o),a=ls(n,e,s,"in"===o||"not-in"===o);const c=Mt.create(i,o,a);return function(t,e){if(e.S()){const n=te(t);if(null!==n&&!n.isEqual(e.field))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Zt(t);null!==r&&Rs(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.hc,this.lc,this.fc);return new $o(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Wt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Ns(t,e,n){const r=e,i=_s("where",t);return new js(i,r,n)}function Ds(t,e,n){if("string"==typeof(n=Object(s["j"])(n))){if(""===n)throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ee(e)&&-1!==n.indexOf("/"))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!it.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ft(t,new it(r))}if(n instanceof qo)return ft(t,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fo(n)}.`)}function Ms(t,e){if(!Array.isArray(t)||0===t.length)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Rs(t,e,n){if(!n.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(X(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return F(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ns(W(t.latitude),W(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Q(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=H(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);y(Jn(n));const r=new tt(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fs(t){t=Vo(t,qo);const e=Vo(t.firestore,Xo);return jo(Qo(e),t._key).then(n=>zs(e,t,n))}class Vs extends Ls{constructor(t){super(),this.firestore=t}convertBytes(t){return new ts(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qo(this.firestore,null,e)}}function Us(t){t=Vo(t,$o);const e=Vo(t.firestore,Xo),n=Qo(e),r=new Vs(e);return ks(t._query),No(n,t._query).then(n=>new Ss(e,r,t,n))}function Bs(t,e,n){t=Vo(t,qo);const r=Vo(t.firestore,Xo),i=Ps(t.converter,e,n);return Ks(r,[us(cs(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ae.none())])}function qs(t){return Ks(Vo(t.firestore,Xo),[new qe(t._key,Ae.none())])}function $s(t,...e){var n,r,i;t=Object(s["j"])(t);let o={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||Wo(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges};if(Wo(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof qo)l=Vo(t.firestore,Xo),h=Yt(t._key.path),u={next:n=>{e[a]&&e[a](zs(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Vo(t,$o);l=Vo(n.firestore,Xo),h=n._query;const r=new Vs(l);u={next:t=>{e[a]&&e[a](new Ss(l,r,n,t))},error:e[a+1],complete:e[a+2]},ks(t._query)}return function(t,e,n,r){const i=new Oo(r),o=new Gi(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Bi(await Io(t),o)),()=>{i.pa(),t.asyncQueue.enqueueAndForget(async()=>qi(await Io(t),o))}}(Qo(l),h,c,u)}function Ks(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>no(await Ao(t),e,n)),n.promise}(Qo(t),e)}function zs(t,e,n){const r=n.docs.get(e._key),i=new Vs(t);return new xs(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Xo(r,new T(t.getProvider("auth-internal")),new A(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.7",t),Object(r["g"])(c,"3.4.7","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:s(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cb2":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,h,f){var d=n+t.length,p=r.length,g=l;return void 0!==h&&(h=i(h),g=u),a(f,g,(function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,d);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var f=o(l/10);return 0===f?i:f<=p?void 0===r[f-1]?s(a,1):r[f-1]+s(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0ccb":function(t,e,n){var r=n("e330"),i=n("50c4"),o=n("577e"),s=n("1148"),a=n("1d80"),c=r(s),u=r("".slice),l=Math.ceil,h=function(t){return function(e,n,r){var s,h,f=o(a(e)),d=i(n),p=f.length,g=void 0===r?" ":o(r);return d<=p||""==g?f:(s=d-p,h=c(g,l(s/g.length)),h.length>s&&(h=u(h,0,s)),t?f+h:h+f)}};t.exports={start:h(!1),end:h(!0)}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1148:function(t,e,n){"use strict";var r=n("da84"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r.RangeError;t.exports=function(t){var e=o(s(this)),n="",r=i(t);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},1276:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),f=n("50c4"),d=n("577e"),p=n("dc4a"),g=n("4dae"),m=n("14c3"),v=n("9263"),y=n("9f7f"),b=n("d039"),w=y.UNSUPPORTED_Y,E=4294967295,_=Math.min,O=[].push,x=o(/./.exec),T=o(O),S=o("".slice),C=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=d(u(this)),s=void 0===n?E:n>>>0;if(0===s)return[];if(void 0===t)return[o];if(!a(t))return i(e,o,t,s);var c,l,h,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,y=new RegExp(t.source,p+"g");while(c=i(v,y,o)){if(l=y.lastIndex,l>m&&(T(f,S(o,m,c.index)),c.length>1&&c.index<o.length&&r(O,f,g(c,1)),h=c[0].length,m=l,f.length>=s))break;y.lastIndex===c.index&&y.lastIndex++}return m===o.length?!h&&x(y,"")||T(f,""):T(f,S(o,m)),f.length>s?g(f,0,s):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=u(this),s=void 0==e?void 0:p(e,t);return s?i(s,e,r,n):i(o,d(r),e,n)},function(t,r){var i=c(this),s=d(t),a=n(o,i,s,r,o!==e);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),v=new u(w?"^(?:"+i.source+")":i,g),y=void 0===r?E:r>>>0;if(0===y)return[];if(0===s.length)return null===m(v,s)?[s]:[];var b=0,O=0,x=[];while(O<s.length){v.lastIndex=w?0:O;var C,k=m(v,w?S(s,O):s);if(null===k||(C=_(f(v.lastIndex+(w?O:0)),s.length))===b)O=h(s,O,p);else{if(T(x,S(s,b,O)),x.length===y)return x;for(var A=1;A<=k.length-1;A++)if(T(x,k[A]),x.length===y)return x;O=b=C}}return T(x,S(s,b)),x}]}),!C,w)},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(s(n)){var r=i(n,t,e);return null!==r&&o(r),r}if("RegExp"===a(t))return i(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1940:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:r,CONFIRM_BUTTON:r+"--confirm",CANCEL_BUTTON:r+"--cancel",DANGER_BUTTON:r+"--danger",BUTTON_LOADING:r+"--loading",BUTTON_LOADER:r+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+t.trim()},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(25));var i=n(26);e.overlayMarkup=i.default,r(n(27)),r(n(28)),r(n(29));var o=n(0),s=o.default.MODAL_TITLE,a=o.default.MODAL_TEXT,c=o.default.ICON,u=o.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+s+'"></div>\n',e.textMarkup='\n  <div class="'+a+'"></div>',e.footerMarkup='\n  <div class="'+u+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var i={visible:!0,text:null,value:null,className:"",closeModal:!0},o=Object.assign({},i,{visible:!1,text:"Cancel",value:null}),s=Object.assign({},i,{text:"OK",value:!0});e.defaultButtonList={cancel:o,confirm:s};var a=function(t){switch(t){case e.CONFIRM_KEY:return s;case e.CANCEL_KEY:return o;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},i,{text:n,value:t})}},c=function(t,e){var n=a(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):r.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},u=function(t){for(var e={},n=0,r=Object.keys(t);n<r.length;n++){var i=r[n],s=t[i],a=c(i,s);e[i]=a}return e.cancel||(e.cancel=o),e},l=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},o,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:r.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=l(t):r.isPlainObject(t)?n=u(t):!0===t?n=l([!0,!0]):!1===t?n=l([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(2),o=n(0),s=o.default.MODAL,a=o.default.OVERLAY,c=n(30),u=n(31),l=n(32),h=n(33);e.injectElIntoModal=function(t){var e=r.getNode(s),n=r.stringToNode(t);return e.appendChild(n),n};var f=function(t){t.className=s,t.textContent=""},d=function(t,e){f(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=r.getNode(s);d(e,t),c.default(t.icon),u.initTitle(t.title),u.initText(t.text),h.default(t.content),l.default(t.buttons,t.dangerMode)};var p=function(){var t=r.getNode(a),e=r.stringToNode(i.modalMarkup);t.appendChild(e)};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i={isOpen:!1,promise:null,actions:{},timer:null},o=Object.assign({},i);e.resetState=function(){o=Object.assign({},i)},e.setActionValue=function(t){if("string"==typeof t)return s(r.CONFIRM_KEY,t);for(var e in t)s(e,t[e])};var s=function(t,e){o.actions[t]||(o.actions[t]={}),Object.assign(o.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,r=void 0===n||n;Object.assign(o.actions[t],{closeModal:r})},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(0),s=o.default.OVERLAY,a=o.default.SHOW_MODAL,c=o.default.BUTTON,u=o.default.BUTTON_LOADING,l=n(5);e.openModal=function(){r.getNode(s).classList.add(a),l.default.isOpen=!0};var h=function(){r.getNode(s).classList.remove(a),l.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=i.CANCEL_KEY);var e=l.default.actions[t],n=e.value;if(!1===e.closeModal){var o=c+"--"+t;r.getNode(o).classList.add(u)}else h();l.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},l.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++)t[e].classList.remove(u)}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var r=n(23).default;t.exports=r},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insertAt:"top",transform:void 0};n(14)(r,i),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}))).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(l(r.parts[o],e));p[r.id]={id:r.id,refs:1,parts:s}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a=o[1],c=o[2],u=o[3],l={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function o(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),o(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),o(t,e),e}function u(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function l(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var u=y++;n=v||(v=a(e)),r=h.bind(null,n,u,!1),i=h.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n,e),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=f.bind(null,n),i=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function h(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=E(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function f(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=w(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}((function(){return window&&document&&document.all&&!window.atob})),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}((function(t){return document.querySelector(t)})),v=null,y=0,b=[],w=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=p[a.id];c.refs--,o.push(c)}t&&r(i(t,e),e);for(s=0;s<o.length;s++){c=o[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var E=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){var r=n(17);"undefined"==typeof window||window.Promise||(window.Promise=r),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|e,o=Math.max(i>=0?i:r-Math.abs(i),0);o<r;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[o],t))return!0;o++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}))}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function r(){}function i(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function s(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,o._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,r)}else(1===t._state?a:c)(e.promise,t._value)}))):t._deferreds.push(e)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void h(i(n,e),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&o._immediateFn((function(){t._handled||o._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function l(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t((function(t){n||(n=!0,a(e,t))}),(function(t){n||(n=!0,c(e,t))}))}catch(t){if(n)return;n=!0,c(e,t)}}var f=setTimeout;o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(r);return s(this,new l(t,e,n)),n},o.all=function(t){var e=Array.prototype.slice.call(t);return new o((function(t,n){function r(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,(function(t){r(o,t)}),n)}e[o]=s,0==--i&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])}))},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o((function(e){e(t)}))},o.reject=function(t){return new o((function(e,n){n(t)}))},o.race=function(t){return new o((function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)}))},o._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){f(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=o:n.Promise||(n.Promise=o)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var i=Function.prototype.apply;e.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return u[c]=r,a(c),c++}function i(t){delete u[t]}function o(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function s(t){if(l)setTimeout(s,0,t);else{var e=u[t];if(e){l=!0;try{o(e)}finally{i(t),l=!1}}}}if(!t.setImmediate){var a,c=1,u={},l=!1,h=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?function(){a=function(t){e.nextTick((function(){s(t)}))}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&s(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){s(t.data)},a=function(e){t.port2.postMessage(e)}}():h&&"onreadystatechange"in h.createElement("script")?function(){var t=h.documentElement;a=function(e){var n=h.createElement("script");n.onreadystatechange=function(){s(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){a=function(t){setTimeout(s,0,t)}}(),f.setImmediate=r,f.clearImmediate=i}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){g&&d&&(g=!1,d.length?p=d.concat(p):m=-1,p.length&&a())}function a(){if(!g){var t=i(s);g=!0;for(var e=p.length;e;){for(d=p,p=[];++m<e;)d&&d[m].run();m=-1,e=p.length}d=null,g=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,h,f=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var d,p=[],g=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||g||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function r(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),r=1;r<arguments.length;r++){var i=arguments[r];if(void 0!==i&&null!==i)for(var o=Object.keys(Object(i)),s=0,a=o.length;s<a;s++){var c=o[s],u=Object.getOwnPropertyDescriptor(i,c);void 0!==u&&u.enumerable&&(n[c]=i[c])}}return n}function i(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}t.exports={assign:r,polyfill:i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),i=n(6),o=n(5),s=n(36),a=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=s.getOpts.apply(void 0,t);return new Promise((function(t,e){o.default.promise={resolve:t,reject:e},r.default(n),setTimeout((function(){i.openModal()}))}))}};a.close=i.onAction,a.getState=i.getState,a.setActionValue=o.setActionValue,a.stopLoading=i.stopLoading,a.setDefaults=s.setDefaults,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(0),o=i.default.MODAL,s=n(4),a=n(34),c=n(35),u=n(1);e.init=function(t){r.getNode(o)||(document.body||u.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),a.default(),s.default()),s.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=r.default.MODAL;e.modalMarkup='\n  <div class="'+i+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=r.default.OVERLAY,o='<div \n    class="'+i+'"\n    tabIndex="-1">\n  </div>';e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=r.default.ICON;e.errorIconMarkup=function(){var t=i+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=i+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=i+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=r.default.CONTENT;e.contentMarkup='\n  <div class="'+i+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=r.default.BUTTON_CONTAINER,o=r.default.BUTTON,s=r.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+i+'">\n\n    <button\n      class="'+o+'"\n    ></button>\n\n    <div class="'+s+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),i=n(2),o=n(0),s=o.default.ICON,a=o.default.ICON_CUSTOM,c=["error","warning","success","info"],u={error:i.errorIconMarkup(),warning:i.warningIconMarkup(),success:i.successIconMarkup()},l=function(t,e){var n=s+"--"+t;e.classList.add(n);var r=u[t];r&&(e.innerHTML=r)},h=function(t,e){e.classList.add(a);var n=document.createElement("img");n.src=t,e.appendChild(n)},f=function(t){if(t){var e=r.injectElIntoModal(i.iconMarkup);c.includes(t)?l(t,e):h(t,e)}};e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=i.injectElIntoModal(r.titleMarkup);e.textContent=t,o(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach((function(t,n,r){e.appendChild(document.createTextNode(t)),n<r.length-1&&e.appendChild(document.createElement("br"))}));var n=i.injectElIntoModal(r.textMarkup);n.appendChild(e),o(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(4),o=n(0),s=o.default.BUTTON,a=o.default.DANGER_BUTTON,c=n(3),u=n(2),l=n(6),h=n(5),f=function(t,e,n){var i=e.text,o=e.value,f=e.className,d=e.closeModal,p=r.stringToNode(u.buttonMarkup),g=p.querySelector("."+s),m=s+"--"+t;g.classList.add(m),f&&(Array.isArray(f)?f:f.split(" ")).filter((function(t){return t.length>0})).forEach((function(t){g.classList.add(t)})),n&&t===c.CONFIRM_KEY&&g.classList.add(a),g.textContent=i;var v={};return v[t]=o,h.setActionValue(v),h.setActionOptionsFor(t,{closeModal:d}),g.addEventListener("click",(function(){return l.onAction(t)})),p},d=function(t,e){var n=i.injectElIntoModal(u.footerMarkup);for(var r in t){var o=t[r],s=f(r,o,e);o.visible&&n.appendChild(s)}0===n.children.length&&n.remove()};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=n(2),s=n(5),a=n(6),c=n(0),u=c.default.CONTENT,l=function(t){t.addEventListener("input",(function(t){var e=t.target,n=e.value;s.setActionValue(n)})),t.addEventListener("keyup",(function(t){if("Enter"===t.key)return a.onAction(r.CONFIRM_KEY)})),setTimeout((function(){t.focus(),s.setActionValue("")}),0)},h=function(t,e,n){var r=document.createElement(e),i=u+"__"+e;for(var o in r.classList.add(i),n){var s=n[o];r[o]=s}"input"===e&&l(r),t.appendChild(r)},f=function(t){if(t){var e=i.injectElIntoModal(o.contentMarkup),n=t.element,r=t.attributes;"string"==typeof n?h(e,n,r):e.appendChild(n)}};e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(2),o=function(){var t=r.stringToNode(i.overlayMarkup);document.body.appendChild(t)};e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n(6),o=n(1),s=n(3),a=n(0),c=a.default.MODAL,u=a.default.BUTTON,l=a.default.OVERLAY,h=function(t){t.preventDefault(),m()},f=function(t){t.preventDefault(),v()},d=function(t){if(r.default.isOpen)switch(t.key){case"Escape":return i.onAction(s.CANCEL_KEY)}},p=function(t){if(r.default.isOpen)switch(t.key){case"Tab":return h(t)}},g=function(t){if(r.default.isOpen)return"Tab"===t.key&&t.shiftKey?f(t):void 0},m=function(){var t=o.getNode(u);t&&(t.tabIndex=0,t.focus())},v=function(){var t=o.getNode(c),e=t.querySelectorAll("."+u),n=e.length-1,r=e[n];r&&r.focus()},y=function(t){t[t.length-1].addEventListener("keydown",p)},b=function(t){t[0].addEventListener("keydown",g)},w=function(){var t=o.getNode(c),e=t.querySelectorAll("."+u);e.length&&(y(e),b(e))},E=function(t){if(o.getNode(l)===t.target)return i.onAction(s.CANCEL_KEY)},_=function(t){var e=o.getNode(l);e.removeEventListener("click",E),t&&e.addEventListener("click",E)},O=function(t){r.default.timer&&clearTimeout(r.default.timer),t&&(r.default.timer=window.setTimeout((function(){return i.onAction(s.CANCEL_KEY)}),t))},x=function(t){t.closeOnEsc?document.addEventListener("keyup",d):document.removeEventListener("keyup",d),t.dangerMode?m():v(),w(),_(t.closeOnClickOutside),O(t.timer)};e.default=x},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(37),s=n(38),a={title:null,text:null,icon:null,buttons:i.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},a);e.setDefaults=function(t){c=Object.assign({},a,t)};var u=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&r.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},l=function(t){return r.ordinalSuffixOf(t+1)},h=function(t,e){r.throwErr(l(e)+" argument ('"+t+"') is invalid")},f=function(t,e){var n=t+1,i=e[n];r.isPlainObject(i)||void 0===i||r.throwErr("Expected "+l(n)+" argument ('"+i+"') to be a plain object")},d=function(t,e){var n=t+1,i=e[n];void 0!==i&&r.throwErr("Unexpected "+l(n)+" argument ("+i+")")},p=function(t,e,n,i){var o=typeof e,s="string"===o,a=e instanceof Element;if(s){if(0===n)return{text:e};if(1===n)return{text:e,title:i[0]};if(2===n)return f(n,i),{icon:e};h(e,n)}else{if(a&&0===n)return f(n,i),{content:e};if(r.isPlainObject(e))return d(n,i),e;h(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach((function(e,r){var i=p(0,e,r,t);Object.assign(n,i)}));var r=u(n);n.buttons=i.getButtonListOpts(r),delete n.button,n.content=o.getContentOpts(n.content);var l=Object.assign({},a,c,n);return Object.keys(l).forEach((function(t){s.DEPRECATED_OPTS[t]&&s.logDeprecation(t)})),l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return r.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?i:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],r=n.onlyRename,i=n.replacement,o=n.subOption,s=n.link,a=r?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+a+".";i&&(c+=" Please use"+(o?' "'+o+'" in ':" ")+'"'+i+'" instead.');var u="https://sweetalert.js.org";c+=s?" More details: "+u+s:" More details: "+u+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])}))},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return P})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return _})),n.d(e,"j",(function(){return F})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return w})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return g})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return I})),n.d(e,"u",(function(){return K})),n.d(e,"v",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function v(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}function E(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function _(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new x(r,s,n);return a}}function S(t,e){return t.replace(C,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){return JSON.parse(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=k(c(o[0])||""),n=k(c(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},I=function(t){const e=A(t).claims;return"object"===typeof e&&e.hasOwnProperty("iat")?e["iat"]:null};function j(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(N(n)&&N(o)){if(!j(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=1e3,M=2,R=144e5,L=.5;function P(t,e=D,n=M){const r=e*Math.pow(n,t),i=Math.round(L*r*(Math.random()-.5)*2);return Math.min(R,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){return new Promise((n,r)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;r(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}})}class U{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e){return new B(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new q(this._db.createObjectStore(t,e))}close(){this._db.close()}}class B{constructor(t){this._transaction=t,this.complete=new Promise((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}})}objectStore(t){return new q(this._transaction.objectStore(t))}}class q{constructor(t){this._store=t}index(t){return new $(this._store.index(t))}createIndex(t,e,n){return new $(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return V(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return V(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return V(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return V(t,"Error clearing IndexedDB object store")}}class ${constructor(t){this._index=t}get(t){const e=this._index.get(t);return V(e,"Error reading from IndexedDB")}}function K(t,e,n){return new Promise((r,i)=>{try{const o=indexedDB.open(t,e);o.onsuccess=t=>{r(new U(t.target.result))},o.onerror=t=>{var e;i("Error opening indexedDB: "+(null===(e=t.target.error)||void 0===e?void 0:e.message))},o.onupgradeneeded=t=>{n(new U(o.result),t.oldVersion,t.newVersion,new B(o.transaction))}}catch(o){i("Error opening indexedDB: "+o.message)}})}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),f=n("35a1"),d=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,v,y,b,w,E,_,O=n&&n.that,x=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),C=i(e,O),k=function(t){return r&&d(r,"normal",t),new g(!0,t)},A=function(t){return x?(s(t),S?C(t[0],t[1],k):C(t[0],t[1])):S?C(t,k):C(t)};if(T)r=t;else{if(v=f(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(w=A(t[y]),w&&l(m,w))return w;return new g(!1)}r=h(t,v)}E=r.next;while(!(_=o(E,r)).done){try{w=A(_.value)}catch(I){d(r,"throw",I)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"25f0":function(t,e,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,o=n("6eeb"),s=n("825a"),a=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=r(l),g=u((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),m=i&&d.name!=h;(g||m)&&o(RegExp.prototype,h,(function(){var t=s(this),e=c(t.source),n=t.flags,r=c(void 0===n&&a(f,t)&&!("flags"in f)?p(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=n("06c5");n("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(s["a"])(t)||a()}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},"2ba4":function(t,e,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),f=n("d039"),d=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("d6d6"),v=n("1cdc"),y=n("605d"),b=a.setImmediate,w=a.clearImmediate,E=a.process,_=a.Dispatch,O=a.Function,x=a.MessageChannel,T=a.String,S=0,C={},k="onreadystatechange";try{r=a.location}catch(D){}var A=function(t){if(h(C,t)){var e=C[t];delete C[t],e()}},I=function(t){return function(){A(t)}},j=function(t){A(t.data)},N=function(t){a.postMessage(T(t),r.protocol+"//"+r.host)};b&&w||(b=function(t){m(arguments.length,1);var e=l(t)?t:O(t),n=p(arguments,1);return C[++S]=function(){c(e,void 0,n)},i(S),S},w=function(t){delete C[t]},y?i=function(t){E.nextTick(I(t))}:_&&_.now?i=function(t){_.now(I(t))}:x&&!v?(o=new x,s=o.port2,o.port1.onmessage=j,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",j,!1)):i=k in g("script")?function(t){d.appendChild(g("script"))[k]=function(){d.removeChild(this),A(t)}}:function(t){setTimeout(I(t),0)}),t.exports={set:b,clear:w}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}var o=n("06c5");n("d9e2");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){return r(t)||i(t,e)||Object(o["a"])(t,e)||s()}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"40d5":function(t,e,n){var r=n("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!s(r=i(n,t)))return r;if(o(n=t.valueOf)&&!s(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!s(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4d90":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=o(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),f=0;u<l;u++,f++)s(h,f,t[u]);return h.length=f,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),f=n("9a1f"),d=n("35a1"),p=r.Array;t.exports=function(t){var e=s(t),n=u(this),r=arguments.length,g=r>1?arguments[1]:void 0,m=void 0!==g;m&&(g=i(g,r>2?arguments[2]:void 0));var v,y,b,w,E,_,O=d(e),x=0;if(!O||this==p&&c(O))for(v=l(e),y=n?new this(v):p(v);v>x;x++)_=m?g(e[x],x):e[x],h(y,x,_);else for(w=f(e,O),E=w.next,y=n?new this:[];!(b=o(E,w)).done;x++)_=m?a(w,g,[b.value,x],!0):b.value,h(y,x,_);return y.length=x,y}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("59ed"),s=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),f=n("04d1"),d=n("d998"),p=n("2d00"),g=n("512c"),m=[],v=i(m.sort),y=i(m.push),b=u((function(){m.sort(void 0)})),w=u((function(){m.sort(null)})),E=h("sort"),_=!u((function(){if(p)return p<70;if(!(f&&f>3)){if(d)return!0;if(g)return g<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:e+r,v:n})}for(m.sort((function(t,e){return e.v-t.v})),r=0;r<m.length;r++)e=m[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),O=b||!w||!E||!_,x=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:O},{sort:function(t){void 0!==t&&o(t);var e=s(this);if(_)return void 0===t?v(e):v(e,t);var n,r,i=[],c=a(e);for(r=0;r<c;r++)r in e&&y(i,e[r]);l(i,x(t)),n=i.length,r=0;while(r<n)e[r]=i[r++];while(r<c)delete e[r++];return e}})},"4fad":function(t,e,n){var r=n("23e7"),i=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return i(t)}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5319:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),f=n("577e"),d=n("1d80"),p=n("8aa5"),g=n("dc4a"),m=n("0cb2"),v=n("14c3"),y=n("b622"),b=y("replace"),w=Math.max,E=Math.min,_=o([].concat),O=o([].push),x=o("".indexOf),T=o("".slice),S=function(t){return void 0===t?t:String(t)},C=function(){return"$0"==="a".replace(/./,"$0")}(),k=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),A=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,n){var o=k?"$":"$0";return[function(t,n){var r=d(this),o=void 0==t?void 0:g(t,b);return o?i(o,t,r,n):i(e,f(r),t,n)},function(t,i){var s=c(this),a=f(t);if("string"==typeof i&&-1===x(i,o)&&-1===x(i,"$<")){var d=n(e,s,a,i);if(d.done)return d.value}var g=u(i);g||(i=f(i));var y=s.global;if(y){var b=s.unicode;s.lastIndex=0}var C=[];while(1){var k=v(s,a);if(null===k)break;if(O(C,k),!y)break;var A=f(k[0]);""===A&&(s.lastIndex=p(a,h(s.lastIndex),b))}for(var I="",j=0,N=0;N<C.length;N++){k=C[N];for(var D=f(k[0]),M=w(E(l(k.index),a.length),0),R=[],L=1;L<k.length;L++)O(R,S(k[L]));var P=k.groups;if(g){var F=_([D],R,M,a);void 0!==P&&O(F,P);var V=f(r(i,void 0,F))}else V=m(D,a,M,R,P,i);M>=j&&(I+=T(a,j,M)+V,j=M+D.length)}return I+T(a,j)}]}),!A||!C||k)},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return H})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return Y}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.20",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",E="@firebase/functions-compat",_="@firebase/installations",O="@firebase/installations-compat",x="@firebase/messaging",T="@firebase/messaging-compat",S="@firebase/performance",C="@firebase/performance-compat",k="@firebase/remote-config",A="@firebase/remote-config-compat",I="@firebase/storage",j="@firebase/storage-compat",N="@firebase/firestore",D="@firebase/firestore-compat",M="firebase",R="9.6.10",L="[DEFAULT]",P={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[E]:"fire-fn-compat",[_]:"fire-iid",[O]:"fire-iid-compat",[x]:"fire-fcm",[T]:"fire-fcm-compat",[S]:"fire-perf",[C]:"fire-perf-compat",[k]:"fire-rc",[A]:"fire-rc-compat",[I]:"fire-gcs",[j]:"fire-gcs-compat",[N]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[M]:"fire-js-all"},F=new Map,V=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(V.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of F.values())U(n,t);return!0}function q(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $(t,e,n=L){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},z=new o["b"]("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=R;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["h"])(t,s.options)&&Object(o["h"])(n,s.config))return s;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new G(t,n,a);return F.set(i,c),c}function X(t=L){const e=F.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function Y(t,e,n){var i;let o=null!==(i=P[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",J=1,Z="firebase-heartbeat-store";let tt=null;function et(){return tt||(tt=Object(o["u"])(Q,J,(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}).catch(t=>{throw z.create("storage-open",{originalErrorMessage:t.message})})),tt}async function nt(t){try{const e=await et();return e.transaction(Z).objectStore(Z).get(it(t))}catch(e){throw z.create("storage-get",{originalErrorMessage:e.message})}}async function rt(t,e){try{const n=await et(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(e,it(t)),r.complete}catch(n){throw z.create("storage-set",{originalErrorMessage:n.message})}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=1024,st=2592e6;class at{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new lt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=st}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ct(),{heartbeatsToSend:e,unsentEntries:n}=ut(this._heartbeatsCache.heartbeats),r=Object(o["e"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ct(){const t=new Date;return t.toISOString().substring(0,10)}function ut(t,e=ot){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["o"])()&&Object(o["v"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ht(t){return Object(o["e"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){B(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),B(new r["a"]("heartbeat",t=>new at(t),"PRIVATE")),Y(c,u,t),Y(c,u,"esm2017"),Y("fire-js","")}ft("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a function")}},"5c40":function(t,e,n){"use strict";n.d(e,"a",(function(){return vt})),n.d(e,"b",(function(){return Ge})),n.d(e,"c",(function(){return Xe})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return on})),n.d(e,"f",(function(){return yn})),n.d(e,"g",(function(){return rn})),n.d(e,"h",(function(){return hn})),n.d(e,"i",(function(){return Re})),n.d(e,"j",(function(){return Me})),n.d(e,"k",(function(){return vn})),n.d(e,"l",(function(){return mn})),n.d(e,"m",(function(){return fn})),n.d(e,"n",(function(){return xt})),n.d(e,"o",(function(){return Nn})),n.d(e,"p",(function(){return Ot})),n.d(e,"q",(function(){return Zn})),n.d(e,"r",(function(){return tr})),n.d(e,"s",(function(){return qn})),n.d(e,"t",(function(){return A})),n.d(e,"v",(function(){return Pt})),n.d(e,"w",(function(){return Bt})),n.d(e,"x",(function(){return Vt})),n.d(e,"y",(function(){return Je})),n.d(e,"z",(function(){return W})),n.d(e,"A",(function(){return H})),n.d(e,"B",(function(){return xn})),n.d(e,"C",(function(){return qe})),n.d(e,"D",(function(){return bt})),n.d(e,"E",(function(){return _t})),n.d(e,"G",(function(){return pt})),n.d(e,"H",(function(){return s})),n.d(e,"I",(function(){return st})),n.d(e,"J",(function(){return at})),n.d(e,"K",(function(){return _e}));var r=n("a1e9"),i=n("9ff4");n.d(e,"u",(function(){return i["J"]})),n.d(e,"F",(function(){return i["M"]}));const o=[];function s(t,...e){Object(r["j"])();const n=o.length?o[o.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=a();if(i)f(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:t})=>`at <${Yn(n,t.type)}>`).join("\n"),s]);else{const n=["[Vue warn]: "+t,...e];s.length&&n.push("\n",...c(s)),console.warn(...n)}Object(r["n"])()}function a(){let t=o[o.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function c(t){const e=[];return t.forEach((t,n)=>{e.push(...0===n?[]:["\n"],...u(t))}),e}function u({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=" at <"+Yn(t.component,t.type,r),o=">"+n;return t.props?[i,...l(t.props),o]:[i+o]}function l(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(n=>{e.push(...h(n,t[n]))}),n.length>3&&e.push(" ..."),e}function h(t,e,n){return Object(i["E"])(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:Object(r["g"])(e)?(e=h(t,Object(r["p"])(e.value),!0),n?e:[t+"=Ref<",e,">"]):Object(i["q"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Object(r["p"])(e),n?e:[t+"=",e])}function f(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){p(o,e,n)}return i}function d(t,e,n,r){if(Object(i["q"])(t)){const o=f(t,e,n,r);return o&&Object(i["z"])(o)&&o.catch(t=>{p(t,e,n)}),o}const o=[];for(let i=0;i<t.length;i++)o.push(d(t[i],e,n,r));return o}function p(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void f(s,null,10,[t,i,o])}g(t,n,i,r)}function g(t,e,n,r=!0){console.error(t)}let m=!1,v=!1;const y=[];let b=0;const w=[];let E=null,_=0;const O=[];let x=null,T=0;const S=Promise.resolve();let C=null,k=null;function A(t){const e=C||S;return t?e.then(this?t.bind(this):t):e}function I(t){let e=b+1,n=y.length;while(e<n){const r=e+n>>>1,i=V(y[r]);i<t?e=r+1:n=r}return e}function j(t){y.length&&y.includes(t,m&&t.allowRecurse?b+1:b)||t===k||(null==t.id?y.push(t):y.splice(I(t.id),0,t),N())}function N(){m||v||(v=!0,C=S.then(U))}function D(t){const e=y.indexOf(t);e>b&&y.splice(e,1)}function M(t,e,n,r){Object(i["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),N()}function R(t){M(t,E,w,_)}function L(t){M(t,x,O,T)}function P(t,e=null){if(w.length){for(k=e,E=[...new Set(w)],w.length=0,_=0;_<E.length;_++)E[_]();E=null,_=0,k=null,P(t,e)}}function F(t){if(O.length){const t=[...new Set(O)];if(O.length=0,x)return void x.push(...t);for(x=t,x.sort((t,e)=>V(t)-V(e)),T=0;T<x.length;T++)x[T]();x=null,T=0}}const V=t=>null==t.id?1/0:t.id;function U(t){v=!1,m=!0,P(t),y.sort((t,e)=>V(t)-V(e));i["d"];try{for(b=0;b<y.length;b++){const t=y[b];t&&!1!==t.active&&f(t,null,14)}}finally{b=0,y.length=0,F(t),m=!1,C=null,(y.length||w.length||O.length)&&U(t)}}new Set;new Map;function B(t,e,...n){const r=t.vnode.props||i["b"];let o=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in r){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:s}=r[t]||i["b"];s?o=n.map(t=>t.trim()):e&&(o=n.map(i["O"]))}let c;let u=r[c=Object(i["N"])(e)]||r[c=Object(i["N"])(Object(i["e"])(e))];!u&&s&&(u=r[c=Object(i["N"])(Object(i["l"])(e))]),u&&d(u,t,6,o);const l=r[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,d(l,t,6,o)}}function q(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!Object(i["q"])(t)){const r=t=>{const n=q(t,e,!0);n&&(c=!0,Object(i["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?(Object(i["o"])(s)?s.forEach(t=>a[t]=null):Object(i["h"])(a,s),r.set(t,a),a):(r.set(t,null),null)}function $(t,e){return!(!t||!Object(i["x"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(i["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(i["k"])(t,Object(i["l"])(e))||Object(i["k"])(t,e))}let K=null,z=null;function G(t){const e=K;return K=t,z=t&&t.type.__scopeId||null,e}function H(t){z=t}function W(){z=null}function X(t,e=K,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&en(-1);const i=G(e),o=t(...n);return G(i),r._d&&en(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Y(t){const{type:e,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:g,ctx:m,inheritAttrs:v}=t;let y,b;const w=G(t);try{if(4&n.shapeFlag){const t=o||r;y=bn(h.call(t,t,f,s,g,d,m)),b=u}else{const t=e;0,y=bn(t.length>1?t(s,{attrs:u,slots:c,emit:l}):t(s,null)),b=e.props?u:Q(u)}}catch(_){Ye.length=0,p(_,t,1),y=fn(We)}let E=y;if(b&&!1!==v){const t=Object.keys(b),{shapeFlag:e}=E;t.length&&7&e&&(a&&t.some(i["v"])&&(b=J(b,a)),E=gn(E,b))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,G(w),y}const Q=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(i["x"])(n))&&((e||(e={}))[n]=t[n]);return e},J=(t,e)=>{const n={};for(const r in t)Object(i["v"])(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Z(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||tt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?tt(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!$(u,n))return!0}}return!1}function tt(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!$(n,o))return!0}return!1}function et({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const nt=t=>t.__isSuspense;function rt(t,e){e&&e.pendingBranch?Object(i["o"])(t)?e.effects.push(...t):e.effects.push(t):L(t)}function it(t,e){if(jn){let n=jn.provides;const r=jn.parent&&jn.parent.provides;r===n&&(n=jn.provides=Object.create(r)),n[t]=e}else 0}function ot(t,e,n=!1){const r=jn||K;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&Object(i["q"])(e)?e.call(r.proxy):e}else 0}function st(t,e){return lt(t,null,e)}function at(t,e){return lt(t,null,{flush:"post"})}const ct={};function ut(t,e,n){return lt(t,e,n)}function lt(t,e,{immediate:n,deep:o,flush:s,onTrack:a,onTrigger:c}=i["b"]){const u=jn;let l,h,p=!1,g=!1;if(Object(r["g"])(t)?(l=()=>t.value,p=Object(r["h"])(t)):Object(r["e"])(t)?(l=()=>t,o=!0):Object(i["o"])(t)?(g=!0,p=t.some(r["e"]),l=()=>t.map(t=>Object(r["g"])(t)?t.value:Object(r["e"])(t)?dt(t):Object(i["q"])(t)?f(t,u,2):void 0)):l=Object(i["q"])(t)?e?()=>f(t,u,2):()=>{if(!u||!u.isUnmounted)return h&&h(),d(t,u,3,[m])}:i["d"],e&&o){const t=l;l=()=>dt(t())}let m=t=>{h=w.onStop=()=>{f(t,u,4)}};if(Fn)return m=i["d"],e?n&&d(e,u,3,[l(),g?[]:void 0,m]):l(),i["d"];let v=g?[]:ct;const y=()=>{if(w.active)if(e){const t=w.run();(o||p||(g?t.some((t,e)=>Object(i["j"])(t,v[e])):Object(i["j"])(t,v)))&&(h&&h(),d(e,u,3,[t,v===ct?void 0:v,m]),v=t)}else w.run()};let b;y.allowRecurse=!!e,b="sync"===s?y:"post"===s?()=>De(y,u&&u.suspense):()=>{!u||u.isMounted?R(y):y()};const w=new r["b"](l,b);return e?n?y():v=w.run():"post"===s?De(w.run.bind(w),u&&u.suspense):w.run(),()=>{w.stop(),u&&u.scope&&Object(i["L"])(u.scope.effects,w)}}function ht(t,e,n){const r=this.proxy,o=Object(i["E"])(t)?t.includes(".")?ft(r,t):()=>r[t]:t.bind(r,r);let s;Object(i["q"])(e)?s=e:(s=e.handler,n=e);const a=jn;Dn(this);const c=lt(o,s.bind(r),n);return a?Dn(a):Mn(),c}function ft(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function dt(t,e){if(!Object(i["w"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Object(r["g"])(t))dt(t.value,e);else if(Object(i["o"])(t))for(let n=0;n<t.length;n++)dt(t[n],e);else if(Object(i["C"])(t)||Object(i["u"])(t))t.forEach(t=>{dt(t,e)});else if(Object(i["y"])(t))for(const n in t)dt(t[n],e);return t}function pt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pt(()=>{t.isMounted=!0}),Ut(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],mt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Nn(),i=pt();let o;return()=>{const s=e.default&&Ot(e.default(),!0);if(!s||!s.length)return;const a=Object(r["p"])(t),{mode:c}=a;const u=s[0];if(i.isLeaving)return wt(u);const l=Et(u);if(!l)return wt(u);const h=bt(l,a,i,n);_t(l,h);const f=n.subTree,d=f&&Et(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===o?o=t:t!==o&&(o=t,p=!0)}if(d&&d.type!==We&&(!an(l,d)||p)){const t=bt(d,a,i,n);if(_t(d,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},wt(u);"in-out"===c&&l.type!==We&&(t.delayLeave=(t,e,n)=>{const r=yt(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},vt=mt;function yt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bt(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=e,w=String(t.key),E=yt(n,t),_=(t,e)=>{t&&d(t,r,9,e)},O={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=m||a}e._leaveCb&&e._leaveCb(!0);const o=E[w];o&&an(t,o)&&o.el._leaveCb&&o.el._leaveCb(),_(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=v||c,r=y||u,o=b||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,_(e?o:r,[t]),O.delayedLeave&&O.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),_(n?g:p,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return bt(t,e,n,r)}};return O}function wt(t){if(St(t))return t=gn(t),t.children=null,t}function Et(t){return St(t)?t.children?t.children[0]:void 0:t}function _t(t,e){6&t.shapeFlag&&t.component?_t(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ot(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Ge?(128&o.patchFlag&&r++,n=n.concat(Ot(o.children,e))):(e||o.type!==We)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function xt(t){return Object(i["q"])(t)?{setup:t,name:t.name}:t}const Tt=t=>!!t.type.__asyncLoader;const St=t=>t.type.__isKeepAlive;RegExp,RegExp;function Ct(t,e){return Object(i["o"])(t)?t.some(t=>Ct(t,e)):Object(i["E"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function kt(t,e){It(t,"a",e)}function At(t,e){It(t,"da",e)}function It(t,e,n=jn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Mt(e,r,n),n){let t=n.parent;while(t&&t.parent)St(t.parent.vnode)&&jt(r,e,n,t),t=t.parent}}function jt(t,e,n,r){const o=Mt(e,t,r,!0);Bt(()=>{Object(i["L"])(r[e],o)},n)}function Nt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Dt(t){return 128&t.shapeFlag?t.ssContent:t}function Mt(t,e,n=jn,i=!1){if(n){const o=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;Object(r["j"])(),Dn(n);const o=d(e,n,t,i);return Mn(),Object(r["n"])(),o});return i?o.unshift(s):o.push(s),s}}const Rt=t=>(e,n=jn)=>(!Fn||"sp"===t)&&Mt(t,e,n),Lt=Rt("bm"),Pt=Rt("m"),Ft=Rt("bu"),Vt=Rt("u"),Ut=Rt("bum"),Bt=Rt("um"),qt=Rt("sp"),$t=Rt("rtg"),Kt=Rt("rtc");function zt(t,e=jn){Mt("ec",t,e)}let Gt=!0;function Ht(t){const e=Qt(t),n=t.proxy,o=t.ctx;Gt=!1,e.beforeCreate&&Xt(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:E,unmounted:_,render:O,renderTracked:x,renderTriggered:T,errorCaptured:S,serverPrefetch:C,expose:k,inheritAttrs:A,components:I,directives:j,filters:N}=e,D=null;if(h&&Wt(h,o,D,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];Object(i["q"])(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(i["w"])(e)&&(t.data=Object(r["l"])(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=Object(i["q"])(t)?t.bind(n,n):Object(i["q"])(t.get)?t.get.bind(n,n):i["d"];0;const s=!Object(i["q"])(t)&&Object(i["q"])(t.set)?t.set.bind(n):i["d"],c=Jn({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Yt(u[r],o,n,r);if(l){const t=Object(i["q"])(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{it(e,t[e])})}function M(t,e){Object(i["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&Xt(f,t,"c"),M(Lt,d),M(Pt,p),M(Ft,g),M(Vt,m),M(kt,v),M(At,y),M(zt,S),M(Kt,x),M($t,T),M(Ut,w),M(Bt,_),M(qt,C),Object(i["o"])(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});O&&t.render===i["d"]&&(t.render=O),null!=A&&(t.inheritAttrs=A),I&&(t.components=I),j&&(t.directives=j)}function Wt(t,e,n=i["d"],o=!1){Object(i["o"])(t)&&(t=ne(t));for(const s in t){const n=t[s];let a;a=Object(i["w"])(n)?"default"in n?ot(n.from||s,n.default,!0):ot(n.from||s):ot(n),Object(r["g"])(a)&&o?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[s]=a}}function Xt(t,e,n){d(Object(i["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const o=r.includes(".")?ft(n,r):()=>n[r];if(Object(i["E"])(t)){const n=e[t];Object(i["q"])(n)&&ut(o,n)}else if(Object(i["q"])(t))ut(o,t.bind(n));else if(Object(i["w"])(t))if(Object(i["o"])(t))t.forEach(t=>Yt(t,e,n,r));else{const r=Object(i["q"])(t.handler)?t.handler.bind(n):e[t.handler];Object(i["q"])(r)&&ut(o,r,t)}else 0}function Qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Jt(c,t,s,!0)),Jt(c,e,s)):c=e,o.set(e,c),c}function Jt(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Jt(t,o,n,!0),i&&i.forEach(e=>Jt(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=Zt[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Zt={data:te,props:ie,emits:ie,methods:ie,computed:ie,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ie,directives:ie,watch:oe,provide:te,inject:ee};function te(t,e){return e?t?function(){return Object(i["h"])(Object(i["q"])(t)?t.call(this,this):t,Object(i["q"])(e)?e.call(this,this):e)}:e:t}function ee(t,e){return ie(ne(t),ne(e))}function ne(t){if(Object(i["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function ie(t,e){return t?Object(i["h"])(Object(i["h"])(Object.create(null),t),e):e}function oe(t,e){if(!t)return e;if(!e)return t;const n=Object(i["h"])(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function se(t,e,n,o=!1){const s={},a={};Object(i["g"])(a,cn,1),t.propsDefaults=Object.create(null),ce(t,e,s,a);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=o?s:Object(r["o"])(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function ae(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=Object(r["p"])(s),[l]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;ce(t,e,s,a)&&(h=!0);for(const o in u)e&&(Object(i["k"])(e,o)||(r=Object(i["l"])(o))!==o&&Object(i["k"])(e,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ue(l,u,o,void 0,t,!0)):delete s[o]);if(a!==u)for(const t in a)e&&Object(i["k"])(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const c=e[o];if(l)if(Object(i["k"])(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=Object(i["e"])(o);s[e]=ue(l,u,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&Object(r["r"])(t,"set","$attrs")}function ce(t,e,n,o){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if(Object(i["A"])(r))continue;const l=e[r];let h;s&&Object(i["k"])(s,h=Object(i["e"])(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:$(t.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const e=Object(r["p"])(n),o=c||i["b"];for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(s,e,c,o[c],t,!Object(i["k"])(o,c))}}return u}function ue(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=Object(i["k"])(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&Object(i["q"])(t)){const{propsDefaults:i}=o;n in i?r=i[n]:(Dn(o),r=i[n]=t.call(null,e),Mn())}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function le(t,e,n=!1){const r=e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!Object(i["q"])(t)){const r=t=>{u=!0;const[n,r]=le(t,e,!0);Object(i["h"])(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return r.set(t,i["a"]),i["a"];if(Object(i["o"])(s))for(let h=0;h<s.length;h++){0;const t=Object(i["e"])(s[h]);he(t)&&(a[t]=i["b"])}else if(s){0;for(const t in s){const e=Object(i["e"])(t);if(he(e)){const n=s[t],r=a[e]=Object(i["o"])(n)||Object(i["q"])(n)?{type:n}:n;if(r){const t=pe(Boolean,r.type),n=pe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||Object(i["k"])(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function he(t){return"$"!==t[0]}function fe(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function de(t,e){return fe(t)===fe(e)}function pe(t,e){return Object(i["o"])(e)?e.findIndex(e=>de(e,t)):Object(i["q"])(e)&&de(e,t)?0:-1}const ge=t=>"_"===t[0]||"$stable"===t,me=t=>Object(i["o"])(t)?t.map(bn):[bn(t)],ve=(t,e,n)=>{const r=X((...t)=>me(e(...t)),n);return r._c=!1,r},ye=(t,e,n)=>{const r=t._ctx;for(const o in t){if(ge(o))continue;const n=t[o];if(Object(i["q"])(n))e[o]=ve(o,n,r);else if(null!=n){0;const t=me(n);e[o]=()=>t}}},be=(t,e)=>{const n=me(e);t.slots.default=()=>n},we=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Object(r["p"])(e),Object(i["g"])(e,"_",n)):ye(e,t.slots={})}else t.slots={},e&&be(t,e);Object(i["g"])(t.slots,cn,1)},Ee=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i["b"];if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:(Object(i["h"])(o,e),n||1!==t||delete o._):(s=!e.$stable,ye(e,o)),a=e}else e&&(be(t,e),a={default:1});if(s)for(const i in o)ge(i)||i in a||delete o[i]};function _e(t,e){const n=K;if(null===n)return t;const r=n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=i["b"]]=e[s];Object(i["q"])(t)&&(t={mounted:t,updated:t}),t.deep&&dt(n),o.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Oe(t,e,n,i){const o=t.dirs,s=e&&e.dirs;for(let a=0;a<o.length;a++){const c=o[a];s&&(c.oldValue=s[a].value);let u=c.dir[i];u&&(Object(r["j"])(),d(u,n,8,[t.el,c,t,e]),Object(r["n"])())}}function xe(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Te=0;function Se(t,e){return function(n,r=null){null==r||Object(i["w"])(r)||(r=null);const o=xe(),s=new Set;let a=!1;const c=o.app={_uid:Te++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:er,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&Object(i["q"])(t.install)?(s.add(t),t.install(c,...e)):Object(i["q"])(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(i,s,u){if(!a){const l=fn(n,r);return l.appContext=o,s&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Gn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}function Ce(t,e,n,o,s=!1){if(Object(i["o"])(t))return void t.forEach((t,r)=>Ce(t,e&&(Object(i["o"])(e)?e[r]:e),n,o,s));if(Tt(o)&&!s)return;const a=4&o.shapeFlag?Gn(o.component)||o.component.proxy:o.el,c=s?null:a,{i:u,r:l}=t;const h=e&&e.r,d=u.refs===i["b"]?u.refs={}:u.refs,p=u.setupState;if(null!=h&&h!==l&&(Object(i["E"])(h)?(d[h]=null,Object(i["k"])(p,h)&&(p[h]=null)):Object(r["g"])(h)&&(h.value=null)),Object(i["q"])(l))f(l,u,12,[c,d]);else{const e=Object(i["E"])(l),o=Object(r["g"])(l);if(e||o){const o=()=>{if(t.f){const n=e?d[l]:l.value;s?Object(i["o"])(n)&&Object(i["L"])(n,a):Object(i["o"])(n)?n.includes(a)||n.push(a):e?d[l]=[a]:(l.value=[a],t.k&&(d[t.k]=l.value))}else e?(d[l]=c,Object(i["k"])(p,l)&&(p[l]=c)):Object(r["g"])(l)&&(l.value=c,t.k&&(d[t.k]=c))};c?(o.id=-1,De(o,n)):o()}else 0}}let ke=!1;const Ae=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,Ie=t=>8===t.nodeType;function je(t){const{mt:e,p:n,o:{patchProp:r,nextSibling:o,parentNode:s,remove:a,insert:c,createComment:u}}=t,l=(t,e)=>{if(!e.hasChildNodes())return n(null,t,e),void F();ke=!1,h(e.firstChild,t,null,null,null),F(),ke&&console.error("Hydration completed but contains mismatches.")},h=(n,r,i,a,c,u=!1)=>{const l=Ie(n)&&"["===n.data,v=()=>g(n,r,i,a,c,l),{type:y,ref:b,shapeFlag:w}=r,E=n.nodeType;r.el=n;let _=null;switch(y){case He:3!==E?_=v():(n.data!==r.children&&(ke=!0,n.data=r.children),_=o(n));break;case We:_=8!==E||l?v():o(n);break;case Xe:if(1===E){_=n;const t=!r.children.length;for(let e=0;e<r.staticCount;e++)t&&(r.children+=_.outerHTML),e===r.staticCount-1&&(r.anchor=_),_=o(_);return _}_=v();break;case Ge:_=l?p(n,r,i,a,c,u):v();break;default:if(1&w)_=1!==E||r.type.toLowerCase()!==n.tagName.toLowerCase()?v():f(n,r,i,a,c,u);else if(6&w){r.slotScopeIds=c;const t=s(n);if(e(r,t,null,i,a,Ae(t),u),_=l?m(n):o(n),Tt(r)){let e;l?(e=fn(Ge),e.anchor=_?_.previousSibling:t.lastChild):e=3===n.nodeType?mn(""):fn("div"),e.el=n,r.component.subTree=e}}else 64&w?_=8!==E?v():r.type.hydrate(n,r,i,a,c,u,t,d):128&w&&(_=r.type.hydrate(n,r,i,a,Ae(s(n)),c,u,t,h))}return null!=b&&Ce(b,null,a,r),_},f=(t,e,n,o,s,c)=>{c=c||!!e.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:f,dirs:p}=e,g="input"===u&&p||"option"===u;if(g||-1!==h){if(p&&Oe(e,null,n,"created"),l)if(g||!c||48&h)for(const e in l)(g&&e.endsWith("value")||Object(i["x"])(e)&&!Object(i["A"])(e))&&r(t,e,null,l[e],!1,void 0,n);else l.onClick&&r(t,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&On(u,n,e),p&&Oe(e,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||p)&&rt(()=>{u&&On(u,n,e),p&&Oe(e,null,n,"mounted")},o),16&f&&(!l||!l.innerHTML&&!l.textContent)){let r=d(t.firstChild,e,t,n,o,s,c);while(r){ke=!0;const t=r;r=r.nextSibling,a(t)}}else 8&f&&t.textContent!==e.children&&(ke=!0,t.textContent=e.children)}return t.nextSibling},d=(t,e,r,i,o,s,a)=>{a=a||!!e.dynamicChildren;const c=e.children,u=c.length;for(let l=0;l<u;l++){const e=a?c[l]:c[l]=bn(c[l]);if(t)t=h(t,e,i,o,s,a);else{if(e.type===He&&!e.children)continue;ke=!0,n(null,e,r,null,i,o,Ae(r),s)}}return t},p=(t,e,n,r,i,a)=>{const{slotScopeIds:l}=e;l&&(i=i?i.concat(l):l);const h=s(t),f=d(o(t),e,h,n,r,i,a);return f&&Ie(f)&&"]"===f.data?o(e.anchor=f):(ke=!0,c(e.anchor=u("]"),h,f),f)},g=(t,e,r,i,c,u)=>{if(ke=!0,e.el=null,u){const e=m(t);while(1){const n=o(t);if(!n||n===e)break;a(n)}}const l=o(t),h=s(t);return a(t),n(null,e,h,l,r,i,Ae(h),c),l},m=t=>{let e=0;while(t)if(t=o(t),t&&Ie(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return o(t);e--}return t};return[l,h]}function Ne(){}const De=rt;function Me(t){return Le(t)}function Re(t){return Le(t,je)}function Le(t,e){Ne();const n=Object(i["i"])();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i["d"],cloneNode:m,insertStaticContent:v}=t,y=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!an(t,e)&&(r=Q(t),z(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case He:b(t,e,n,r);break;case We:w(t,e,n,r);break;case Xe:null==t&&E(e,n,r,s);break;case Ge:N(t,e,n,r,i,o,s,a,c);break;default:1&h?x(t,e,n,r,i,o,s,a,c):6&h?M(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,tt)}null!=l&&i&&Ce(l,t&&t.ref,o,e||t,!e)},b=(t,e,n,r)=>{if(null==t)o(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?o(e.el=l(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},O=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},x=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?T(e,n,r,i,o,s,a,c):k(t,e,i,o,s,a,c)},T=(t,e,n,r,s,u,l,h)=>{let d,p;const{type:g,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:E}=t;if(t.el&&void 0!==m&&-1===w)d=t.el=m(t.el);else{if(d=t.el=c(t.type,u,v&&v.is,v),8&y?f(d,t.children):16&y&&C(t.children,d,null,r,s,u&&"foreignObject"!==g,l,h),E&&Oe(t,null,r,"created"),v){for(const e in v)"value"===e||Object(i["A"])(e)||a(d,e,null,v[e],u,t.children,r,s,X);"value"in v&&a(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&On(p,r,t)}S(d,t,t.scopeId,l,r)}E&&Oe(t,null,r,"beforeMount");const _=(!s||s&&!s.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),o(d,e,n),((p=v&&v.onVnodeMounted)||_||E)&&De(()=>{p&&On(p,r,t),_&&b.enter(d),E&&Oe(t,null,r,"mounted")},s)},S=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let o=0;o<r.length;o++)g(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;S(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},C=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?wn(t[u]):bn(t[u]);y(null,c,e,n,r,i,o,s,a)}},k=(t,e,n,r,o,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i["b"],g=e.props||i["b"];let m;n&&Pe(n,!1),(m=g.onVnodeBeforeUpdate)&&On(m,n,e,t),d&&Oe(e,t,n,"beforeUpdate"),n&&Pe(n,!0);const v=o&&"foreignObject"!==e.type;if(h?A(t.dynamicChildren,h,u,n,r,v,s):c||B(t,e,u,null,n,r,v,s,!1),l>0){if(16&l)I(u,e,p,g,n,r,o);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,o),4&l&&a(u,"style",p.style,g.style,o),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const s=i[e],c=p[s],l=g[s];l===c&&"value"!==s||a(u,s,c,l,o,t.children,n,r,X)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||I(u,e,p,g,n,r,o);((m=g.onVnodeUpdated)||d)&&De(()=>{m&&On(m,n,e,t),d&&Oe(e,t,n,"updated")},r)},A=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ge||!an(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,o,s,!0)}},I=(t,e,n,r,o,s,c)=>{if(n!==r){for(const u in r){if(Object(i["A"])(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,o,s,X)}if(n!==i["b"])for(const u in n)Object(i["A"])(u)||u in r||a(t,u,n[u],null,c,e.children,o,s,X);"value"in r&&a(t,"value",n.value,r.value)}},N=(t,e,n,r,i,s,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(o(h,n,r),o(f,n,r),C(e.children,n,f,i,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(A(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&Fe(t,e,!0)):B(t,e,n,f,i,s,a,c,l)},M=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):R(e,n,r,i,o,s,c):L(t,e,c)},R=(t,e,n,r,i,o,s)=>{const a=t.component=In(t,r,i);if(St(t)&&(a.ctx.renderer=tt),Vn(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=fn(We);w(null,t,e,n)}}else V(a,t,e,n,i,o,s)},L=(t,e,n)=>{const r=e.component=t.component;if(Z(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,D(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},V=(t,e,n,o,s,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:o,parent:u,vnode:l}=t,h=n;0,Pe(t,!1),n?(n.el=l.el,U(t,n,c)):n=l,r&&Object(i["n"])(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&On(e,u,n,l),Pe(t,!0);const f=Y(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),Q(p),t,s,a),n.el=f.el,null===h&&et(t,f.el),o&&De(o,s),(e=n.props&&n.props.onVnodeUpdated)&&De(()=>On(e,u,n,l),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=Tt(e);if(Pe(t,!1),l&&Object(i["n"])(l),!d&&(r=u&&u.onVnodeBeforeMount)&&On(r,f,e),Pe(t,!0),c&&rt){const n=()=>{t.subTree=Y(t),rt(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=Y(t);0,y(null,r,n,o,t,s,a),e.el=r.el}if(h&&De(h,s),!d&&(r=u&&u.onVnodeMounted)){const t=e;De(()=>On(r,f,t),s)}256&e.shapeFlag&&t.a&&De(t.a,s),t.isMounted=!0,e=n=o=null}},l=t.effect=new r["b"](u,()=>j(t.update),t.scope),h=t.update=l.run.bind(l);h.id=t.uid,Pe(t,!0),h()},U=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ae(t,e.props,i,n),Ee(t,e.children,n),Object(r["j"])(),P(void 0,t.update),Object(r["n"])()},B=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void $(u,h,n,r,i,o,s,a,c);if(256&d)return void q(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&X(u,i,o),h!==u&&f(n,h)):16&l?16&p?$(u,h,n,r,i,o,s,a,c):X(u,i,o,!0):(8&l&&f(n,""),16&p&&C(h,n,r,i,o,s,a,c))},q=(t,e,n,r,o,s,a,c,u)=>{t=t||i["a"],e=e||i["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?wn(e[d]):bn(e[d]);y(t[d],r,n,null,o,s,a,c,u)}l>h?X(t,o,s,!0,!1,f):C(e,n,r,o,s,a,c,u,f)},$=(t,e,n,r,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?wn(e[l]):bn(e[l]);if(!an(r,i))break;y(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?wn(e[d]):bn(e[d]);if(!an(r,i))break;y(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?wn(e[l]):bn(e[l]),n,i,o,s,a,c,u),l++}}else if(l>d)while(l<=f)z(t[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?wn(e[l]):bn(e[l]);null!=t.key&&m.set(t.key,l)}let v,b=0;const w=d-g+1;let E=!1,_=0;const O=new Array(w);for(l=0;l<w;l++)O[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){z(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===O[v-g]&&an(r,e[v])){i=v;break}void 0===i?z(r,o,s,!0):(O[i-g]=l+1,i>=_?_=i:E=!0,y(r,e[i],n,null,o,s,a,c,u),b++)}const x=E?Ve(O):i["a"];for(v=x.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===O[l]?y(null,i,n,f,o,s,a,c,u):E&&(v<0||l!==x[v]?K(i,n,f,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Ge){o(s,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void o(t.anchor,e,n)}if(a===Xe)return void _(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),De(()=>c.enter(s),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),u=()=>{t(s,()=>{a(),i&&i()})};r?r(s,a,u):u()}else o(s,e,n)},z=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Ce(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Tt(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&On(g,e,t),6&l)W(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Oe(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):u&&(o!==Ge||h>0&&64&h)?X(u,e,n,!1,!0):(o===Ge&&384&h||!i&&16&l)&&X(c,e,n),r&&G(t)}(p&&(g=s&&s.onVnodeUnmounted)||d)&&De(()=>{g&&On(g,e,t),d&&Oe(t,null,e,"unmounted")},n)},G=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ge)return void H(n,r);if(e===Xe)return void O(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},H=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},W=(t,e,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=t;r&&Object(i["n"])(r),o.stop(),s&&(s.active=!1,z(a,t,e,n)),c&&De(c,e),De(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)z(t[s],e,n,r,i)},Q=t=>6&t.shapeFlag?Q(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),J=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),F(),e._vnode=t},tt={p:y,um:z,m:K,r:G,mt:R,mc:C,pc:B,pbc:A,n:Q,o:t};let nt,rt;return e&&([nt,rt]=e(tt)),{render:J,hydrate:nt,createApp:Se(J,nt)}}function Pe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fe(t,e,n=!1){const r=t.children,o=e.children;if(Object(i["o"])(r)&&Object(i["o"])(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=wn(o[i]),e.el=t.el),n||Fe(t,e))}}function Ve(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const Ue=t=>t.__isTeleport;const Be="components";function qe(t,e){return Ke(Be,t,!0,e)||t}const $e=Symbol();function Ke(t,e,n=!0,r=!1){const o=K||jn;if(o){const n=o.type;if(t===Be){const t=Xn(n);if(t&&(t===e||t===Object(i["e"])(e)||t===Object(i["f"])(Object(i["e"])(e))))return n}const s=ze(o[t]||n[t],e)||ze(o.appContext[t],e);return!s&&r?n:s}}function ze(t,e){return t&&(t[e]||t[Object(i["e"])(e)]||t[Object(i["f"])(Object(i["e"])(e))])}const Ge=Symbol(void 0),He=Symbol(void 0),We=Symbol(void 0),Xe=Symbol(void 0),Ye=[];let Qe=null;function Je(t=!1){Ye.push(Qe=t?null:[])}function Ze(){Ye.pop(),Qe=Ye[Ye.length-1]||null}let tn=1;function en(t){tn+=t}function nn(t){return t.dynamicChildren=tn>0?Qe||i["a"]:null,Ze(),tn>0&&Qe&&Qe.push(t),t}function rn(t,e,n,r,i,o){return nn(hn(t,e,n,r,i,o,!0))}function on(t,e,n,r,i){return nn(fn(t,e,n,r,i,!0))}function sn(t){return!!t&&!0===t.__v_isVNode}function an(t,e){return t.type===e.type&&t.key===e.key}const cn="__vInternal",un=({key:t})=>null!=t?t:null,ln=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(i["E"])(t)||Object(r["g"])(t)||Object(i["q"])(t)?{i:K,r:t,k:e,f:!!n}:t:null;function hn(t,e=null,n=null,r=0,o=null,s=(t===Ge?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&un(e),ref:e&&ln(e),scopeId:z,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(En(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=Object(i["E"])(n)?8:16),tn>0&&!a&&Qe&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Qe.push(u),u}const fn=dn;function dn(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==$e||(t=We),sn(t)){const r=gn(t,e,!0);return n&&En(r,n),r}if(Qn(t)&&(t=t.__vccOpts),e){e=pn(e);let{class:t,style:n}=e;t&&!Object(i["E"])(t)&&(e.class=Object(i["J"])(t)),Object(i["w"])(n)&&(Object(r["d"])(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),e.style=Object(i["K"])(n))}const c=Object(i["E"])(t)?1:nt(t)?128:Ue(t)?64:Object(i["w"])(t)?4:Object(i["q"])(t)?2:0;return hn(t,e,n,o,s,c,a,!0)}function pn(t){return t?Object(r["d"])(t)||cn in t?Object(i["h"])({},t):t:null}function gn(t,e,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=t,c=e?_n(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&un(c),ref:e&&e.ref?n&&o?Object(i["o"])(o)?o.concat(ln(e)):[o,ln(e)]:ln(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gn(t.ssContent),ssFallback:t.ssFallback&&gn(t.ssFallback),el:t.el,anchor:t.anchor};return u}function mn(t=" ",e=0){return fn(He,null,t,e)}function vn(t,e){const n=fn(Xe,null,t);return n.staticCount=e,n}function yn(t="",e=!1){return e?(Je(),on(We,null,t)):fn(We,null,t)}function bn(t){return null==t||"boolean"===typeof t?fn(We):Object(i["o"])(t)?fn(Ge,null,t.slice()):"object"===typeof t?wn(t):fn(He,null,String(t))}function wn(t){return null===t.el||t.memo?t:gn(t)}function En(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if(Object(i["o"])(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),En(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||cn in e?3===r&&K&&(1===K.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=K}}else Object(i["q"])(e)?(e={default:e,_ctx:K},n=32):(e=String(e),64&r?(n=16,e=[mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function _n(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=Object(i["J"])([e.class,r.class]));else if("style"===t)e.style=Object(i["K"])([e.style,r.style]);else if(Object(i["x"])(t)){const n=e[t],o=r[t];!o||n===o||Object(i["o"])(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function On(t,e,n,r=null){d(t,e,7,[n,r])}function xn(t,e,n,r){let o;const s=n&&n[r];if(Object(i["o"])(t)||Object(i["E"])(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if(Object(i["w"])(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,s&&s[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Tn=t=>t?Rn(t)?Gn(t)||t.proxy:Tn(t.parent):null,Sn=Object(i["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tn(t.parent),$root:t=>Tn(t.root),$emit:t=>t.emit,$options:t=>Qt(t),$forceUpdate:t=>()=>j(t.update),$nextTick:t=>A.bind(t.proxy),$watch:t=>ht.bind(t)}),Cn={get({_:t},e){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(o!==i["b"]&&Object(i["k"])(o,e))return c[e]=1,o[e];if(s!==i["b"]&&Object(i["k"])(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&Object(i["k"])(h,e))return c[e]=3,a[e];if(n!==i["b"]&&Object(i["k"])(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const f=Sn[e];let d,p;return f?("$attrs"===e&&Object(r["q"])(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i["b"]&&Object(i["k"])(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,Object(i["k"])(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return o!==i["b"]&&Object(i["k"])(o,e)?(o[e]=n,!0):r!==i["b"]&&Object(i["k"])(r,e)?(r[e]=n,!0):!Object(i["k"])(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i["b"]&&Object(i["k"])(t,a)||e!==i["b"]&&Object(i["k"])(e,a)||(c=s[0])&&Object(i["k"])(c,a)||Object(i["k"])(r,a)||Object(i["k"])(Sn,a)||Object(i["k"])(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?this.set(t,e,n.get(),null):null!=n.value&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const kn=xe();let An=0;function In(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||kn,a={uid:An++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r["a"](!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:le(o,s),emitsOptions:q(o,s),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:o.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=B.bind(null,a),t.ce&&t.ce(a),a}let jn=null;const Nn=()=>jn||K,Dn=t=>{jn=t,t.scope.on()},Mn=()=>{jn&&jn.scope.off(),jn=null};function Rn(t){return 4&t.vnode.shapeFlag}let Ln,Pn,Fn=!1;function Vn(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,i=Rn(t);se(t,n,i,e),we(t,r);const o=i?Un(t,e):void 0;return Fn=!1,o}function Un(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Object(r["i"])(new Proxy(t.ctx,Cn));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?zn(t):null;Dn(t),Object(r["j"])();const s=f(o,t,0,[t.props,n]);if(Object(r["n"])(),Mn(),Object(i["z"])(s)){if(s.then(Mn,Mn),e)return s.then(n=>{Bn(t,n,e)}).catch(e=>{p(e,t,0)});t.asyncDep=s}else Bn(t,s,e)}else $n(t,e)}function Bn(t,e,n){Object(i["q"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(i["w"])(e)&&(t.setupState=Object(r["k"])(e)),$n(t,n)}const qn=()=>!Ln;function $n(t,e,n){const o=t.type;if(!t.render){if(!e&&Ln&&!o.render){const e=o.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:s},r),a);o.render=Ln(e,c)}}t.render=o.render||i["d"],Pn&&Pn(t)}Dn(t),Object(r["j"])(),Ht(t),Object(r["n"])(),Mn()}function Kn(t){return new Proxy(t.attrs,{get(e,n){return Object(r["q"])(t,"get","$attrs"),e[n]}})}function zn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Kn(t))},slots:t.slots,emit:t.emit,expose:e}}function Gn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Object(r["k"])(Object(r["i"])(t.exposed)),{get(e,n){return n in e?e[n]:n in Sn?Sn[n](t):void 0}}))}const Hn=/(?:^|[-_])(\w)/g,Wn=t=>t.replace(Hn,t=>t.toUpperCase()).replace(/[-_]/g,"");function Xn(t){return Object(i["q"])(t)&&t.displayName||t.name}function Yn(t,e,n=!1){let r=Xn(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?Wn(r):n?"App":"Anonymous"}function Qn(t){return Object(i["q"])(t)&&"__vccOpts"in t}const Jn=(t,e)=>Object(r["c"])(t,e,Fn);function Zn(t,e,n){const r=arguments.length;return 2===r?Object(i["w"])(e)&&!Object(i["o"])(e)?sn(e)?fn(t,null,[e]):fn(t,e):fn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&sn(n)&&(n=[n]),fn(t,e,n))}Symbol("");function tr(){return void 0}const er="3.2.31"},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||s((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,s=1,f=c.f,d=u.f;while(i>s){var g,m=h(arguments[s++]),v=f?p(a(m),f(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!o(d,m,g)||(n[g]=m[g])}return n}:f},6488:function(t,e,n){"use strict";n.d(e,"a",(function(){return yt})),n.d(e,"b",(function(){return Et}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=new Map,c={activated:!1,tokenObservers:[]},u={initialized:!1,enabled:!1};function l(t){return a.get(t)||c}function h(t,e){a.set(t,e)}function f(){return u}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d="https://content-firebaseappcheck.googleapis.com/v1beta",p="exchangeRecaptchaToken",g="exchangeDebugToken",m={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4},v=864e5;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(t,e,n,r,i){if(this.operation=t,this.retryPolicy=e,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new o["a"],await b(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new o["a"],await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function b(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},E=new o["b"]("appCheck","AppCheck",w);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(t=!1){var e;return t?null===(e=self.grecaptcha)||void 0===e?void 0:e.enterprise:self.grecaptcha}function O(t){if(!l(t).activated)throw E.create("use-before-activation",{appName:t.name})}function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function T(t){const e=Math.round(t/1e3),n=Math.floor(e/86400),r=Math.floor((e-3600*n*24)/3600),i=Math.floor((e-3600*n*24-3600*r)/60),o=e-3600*n*24-3600*r-60*i;let s="";return n&&(s+=S(n)+"d:"),r&&(s+=S(r)+"h:"),s+=S(i)+"m:"+S(o)+"s",s}function S(t){return 0===t?"00":t>=10?t.toString():"0"+t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C({url:t,body:e},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const t=await i.getHeartbeatsHeader();t&&(r["X-Firebase-Client"]=t)}const o={method:"POST",body:JSON.stringify(e),headers:r};let s,a;try{s=await fetch(t,o)}catch(h){throw E.create("fetch-network-error",{originalErrorMessage:h.message})}if(200!==s.status)throw E.create("fetch-status-error",{httpStatus:s.status});try{a=await s.json()}catch(h){throw E.create("fetch-parse-error",{originalErrorMessage:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw E.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+a.ttl});const u=1e3*Number(c[1]),l=Date.now();return{token:a.attestationToken,expireTimeMillis:l+u,issuedAtTimeMillis:l}}function k(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${d}/projects/${n}/apps/${r}:${p}?key=${i}`,body:{recaptcha_token:e}}}function A(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${d}/projects/${n}/apps/${r}:${g}?key=${i}`,body:{debug_token:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="firebase-app-check-database",j=1,N="firebase-app-check-store",D="debug-token";let M=null;function R(){return M||(M=new Promise((t,e)=>{try{const n=indexedDB.open(I,j);n.onsuccess=e=>{t(e.target.result)},n.onerror=t=>{var n;e(E.create("storage-open",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=t=>{const e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(N,{keyPath:"compositeKey"})}}}catch(n){e(E.create("storage-open",{originalErrorMessage:n.message}))}}),M)}function L(t){return B(q(t))}function P(t,e){return U(q(t),e)}function F(t){return U(D,t)}function V(){return B(D)}async function U(t,e){const n=await R(),r=n.transaction(N,"readwrite"),i=r.objectStore(N),o=i.put({compositeKey:t,value:e});return new Promise((t,e)=>{o.onsuccess=e=>{t()},r.onerror=t=>{var n;e(E.create("storage-set",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))}})}async function B(t){const e=await R(),n=e.transaction(N,"readonly"),r=n.objectStore(N),i=r.get(t);return new Promise((t,e)=>{i.onsuccess=e=>{const n=e.target.result;t(n?n.value:void 0)},n.onerror=t=>{var n;e(E.create("storage-get",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))}})}function q(t){return`${t.options.appId}-${t.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new s["b"]("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t){if(Object(o["o"])()){let n=void 0;try{n=await L(t)}catch(e){$.warn("Failed to read token from IndexedDB. Error: "+e)}return n}}function z(t,e){return Object(o["o"])()?P(t,e).catch(t=>{$.warn("Failed to write token to IndexedDB. Error: "+t)}):Promise.resolve()}async function G(){let t=void 0;try{t=await V()}catch(e){}if(t)return t;{const t=x();return F(t).catch(t=>$.warn("Failed to persist debug token to IndexedDB. Error: "+t)),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){const t=f();return t.enabled}async function W(){const t=f();if(t.enabled&&t.token)return t.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function X(){const t=Object(o["i"])(),e=f();if(e.initialized=!0,"string"!==typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==t.FIREBASE_APPCHECK_DEBUG_TOKEN)return;e.enabled=!0;const n=new o["a"];e.token=n,"string"===typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(G())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={error:"UNKNOWN_ERROR"};function Q(t){return o["d"].encodeString(JSON.stringify(t),!1)}async function J(t,e=!1){const n=t.app;O(n);const r=l(n);let i=r.token,o=void 0;if(!i){const t=await r.cachedTokenPromise;t&&it(t)&&(i=t)}if(!e&&i&&it(i))return{token:i.token};let s,a=!1;if(H()){r.exchangeTokenPromise||(r.exchangeTokenPromise=C(A(n,await W()),t.heartbeatServiceProvider).then(t=>(r.exchangeTokenPromise=void 0,t)),a=!0);const e=await r.exchangeTokenPromise;return await z(n,e),h(n,Object.assign(Object.assign({},r),{token:e})),{token:e.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().then(t=>(r.exchangeTokenPromise=void 0,t)),a=!0),i=await r.exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?$.warn(c.message):$.error(c),o=c}return i?(s={token:i.token},h(n,Object.assign(Object.assign({},r),{token:i})),await z(n,i)):s=ot(o),a&&rt(n,s),s}function Z(t,e,n,r){const{app:i}=t,o=l(i),s={next:n,error:r,type:e};if(h(i,Object.assign(Object.assign({},o),{tokenObservers:[...o.tokenObservers,s]})),o.token&&it(o.token)){const e=o.token;Promise.resolve().then(()=>{n({token:e.token}),et(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>et(t))}function tt(t,e){const n=l(t),r=n.tokenObservers.filter(t=>t.next!==e);0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),h(t,Object.assign(Object.assign({},n),{tokenObservers:r}))}function et(t){const{app:e}=t,n=l(e);let r=n.tokenRefresher;r||(r=nt(t),h(e,Object.assign(Object.assign({},n),{tokenRefresher:r}))),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function nt(t){const{app:e}=t;return new y(async()=>{const n=l(e);let r;if(r=n.token?await J(t,!0):await J(t),r.error)throw r.error},()=>!0,()=>{const t=l(e);if(t.token){let e=t.token.issuedAtTimeMillis+.5*(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)+3e5;const n=t.token.expireTimeMillis-3e5;return e=Math.min(e,n),Math.max(0,e-Date.now())}return 0},m.RETRIAL_MIN_WAIT,m.RETRIAL_MAX_WAIT)}function rt(t,e){const n=l(t).tokenObservers;for(const i of n)try{"EXTERNAL"===i.type&&null!=e.error?i.error(e.error):i.next(e)}catch(r){}}function it(t){return t.expireTimeMillis-Date.now()>0}function ot(t){return{token:Q(Y),error:t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.app=t,this.heartbeatServiceProvider=e}_delete(){const{tokenObservers:t}=l(this.app);for(const e of t)tt(this.app,e.next);return Promise.resolve()}}function at(t,e){return new st(t,e)}function ct(t){return{getToken:e=>J(t,e),addTokenListener:e=>Z(t,"INTERNAL",e),removeTokenListener:e=>tt(t.app,e)}}const ut="@firebase/app-check",lt="0.5.5",ht="https://www.google.com/recaptcha/api.js";function ft(t,e){const n=l(t),r=new o["a"];h(t,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=pt(t),s=_(!1);return s?dt(t,e,s,i,r):vt(()=>{const n=_(!1);if(!n)throw new Error("no recaptcha");dt(t,e,n,i,r)}),r.promise}function dt(t,e,n,r,i){n.ready(()=>{mt(t,e,n,r),i.resolve(n)})}function pt(t){const e="fire_app_check_"+t.name,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function gt(t){O(t);const e=l(t).reCAPTCHAState,n=await e.initialized.promise;return new Promise((e,r)=>{const i=l(t).reCAPTCHAState;n.ready(()=>{e(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function mt(t,e,n,r){const i=n.render(r,{sitekey:e,size:"invisible"}),o=l(t);h(t,Object.assign(Object.assign({},o),{reCAPTCHAState:Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}))}function vt(t){const e=document.createElement("script");e.src=ht,e.onload=t,document.head.appendChild(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t;wt(this._throttleData);const e=await gt(this._app).catch(t=>{throw E.create("recaptcha-error")});let n;try{n=await C(k(this._app,e),this._heartbeatServiceProvider)}catch(r){throw"fetch-status-error"===r.code?(this._throttleData=bt(Number(null===(t=r.customData)||void 0===t?void 0:t.httpStatus),this._throttleData),E.create("throttled",{time:T(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=Object(r["b"])(t,"heartbeat"),ft(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof yt&&this._siteKey===t._siteKey}}function bt(t,e){if(404===t||403===t)return{backoffCount:1,allowRequestsAfter:Date.now()+v,httpStatus:t};{const n=e?e.backoffCount:0,r=Object(o["f"])(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function wt(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw E.create("throttled",{time:T(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t=Object(r["e"])(),e){t=Object(o["j"])(t);const n=Object(r["b"])(t,"app-check");if(f().initialized||X(),H()&&W().then(t=>console.log(`App Check debug token: ${t}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return r;throw E.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return _t(t,e.provider,e.isTokenAutoRefreshEnabled),l(t).isTokenAutoRefreshEnabled&&Z(i,"INTERNAL",()=>{}),i}function _t(t,e,n){const r=l(t),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=e,i.cachedTokenPromise=K(t).then(e=>(e&&it(e)&&(h(t,Object.assign(Object.assign({},l(t)),{token:e})),rt(t,{token:e.token})),e)),i.isTokenAutoRefreshEnabled=void 0===n?t.automaticDataCollectionEnabled:n,h(t,i),i.provider.initialize(t)}const Ot="app-check",xt="app-check-internal";function Tt(){Object(r["c"])(new i["a"](Ot,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return at(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(xt).initialize()})),Object(r["c"])(new i["a"](xt,t=>{const e=t.getProvider("app-check").getImmediate();return ct(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Object(r["g"])(ut,lt)}Tt()},6547:function(t,e,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=o(s(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),g=function(t){if(!o(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),f=n("c6cd"),d=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var w=f.state||(f.state=new v),E=c(w.get),_=c(w.has),O=c(w.set);r=function(t,e){if(_(w,t))throw new m(g);return e.facade=t,O(w,t,e),e},i=function(t){return E(w,t)||{}},o=function(t){return _(w,t)}}else{var x=d("state");p[x]=!0,r=function(t,e){if(h(t,x))throw new m(g);return e.facade=t,l(t,x,e),e},i=function(t){return h(t,x)?t[x]:{}},o=function(t){return h(t,x)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:b}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(t,e,n){var r=n("83ab"),i=n("e330"),o=n("df75"),s=n("fc6a"),a=n("d1e7").f,c=i(a),u=i([].push),l=function(t){return function(e){var n,i=s(e),a=o(i),l=a.length,h=0,f=[];while(l>h)n=a[h++],r&&!c(i,n)||u(f,t?[n,i[n]]:i[n]);return f}};t.exports={entries:l(!0),values:l(!1)}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7a23":function(t,e,n){"use strict";n.d(e,"j",(function(){return r["u"]})),n.d(e,"p",(function(){return r["F"]})),n.d(e,"a",(function(){return r["b"]})),n.d(e,"c",(function(){return r["e"]})),n.d(e,"d",(function(){return r["f"]})),n.d(e,"e",(function(){return r["g"]})),n.d(e,"f",(function(){return r["h"]})),n.d(e,"g",(function(){return r["k"]})),n.d(e,"h",(function(){return r["l"]})),n.d(e,"i",(function(){return r["m"]})),n.d(e,"k",(function(){return r["y"]})),n.d(e,"l",(function(){return r["z"]})),n.d(e,"m",(function(){return r["A"]})),n.d(e,"n",(function(){return r["B"]})),n.d(e,"o",(function(){return r["C"]})),n.d(e,"t",(function(){return r["K"]})),n.d(e,"b",(function(){return mt})),n.d(e,"q",(function(){return it})),n.d(e,"r",(function(){return ot})),n.d(e,"s",(function(){return rt})),n.d(e,"u",(function(){return ft})),n.d(e,"v",(function(){return lt}));var r=n("5c40"),i=n("9ff4");n("a1e9");const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?s.createElementNS(o,t):s.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>s.createTextNode(t),createComment:t=>s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const r=t.style,o=Object(i["E"])(n);if(n&&!o){for(const t in n)f(r,t,n[t]);if(e&&!Object(i["E"])(e))for(const t in e)null==n[t]&&f(r,t,"")}else{const i=r.display;o?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const h=/\s*!important$/;function f(t,e,n){if(Object(i["o"])(n))n.forEach(n=>f(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=g(t,e);h.test(n)?t.setProperty(Object(i["l"])(r),n.replace(h,""),"important"):t[r]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let r=Object(i["e"])(e);if("filter"!==r&&r in t)return p[e]=r;r=Object(i["f"])(r);for(let i=0;i<d.length;i++){const n=d[i]+r;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function v(t,e,n,r,o){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const r=Object(i["D"])(e);null==n||r&&!Object(i["m"])(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function y(t,e,n,r,o,s,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const r=typeof t[e];if("boolean"===r)return void(t[e]=Object(i["m"])(n));if(null==n&&"string"===r)return t[e]="",void t.removeAttribute(e);if("number"===r){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let b=Date.now,w=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);w=!!(t&&Number(t[1])<=53)}let E=0;const _=Promise.resolve(),O=()=>{E=0},x=()=>E||(_.then(O),E=b());function T(t,e,n,r){t.addEventListener(e,n,r)}function S(t,e,n,r){t.removeEventListener(e,n,r)}function C(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=A(e);if(r){const s=o[e]=I(r,i);T(t,n,s,a)}else s&&(S(t,n,s,a),o[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function A(t){let e;if(k.test(t)){let n;e={};while(n=t.match(k))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(i["l"])(t.slice(2)),e]}function I(t,e){const n=t=>{const i=t.timeStamp||b();(w||i>=n.attached-1)&&Object(r["d"])(j(t,n.value),e,5,[t])};return n.value=t,n.attached=x(),n}function j(t,e){if(Object(i["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const N=/^on[a-z]/,D=(t,e,n,r,o=!1,s,a,c,h)=>{"class"===e?u(t,r,o):"style"===e?l(t,n,r):Object(i["x"])(e)?Object(i["v"])(e)||C(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):M(t,e,r,o))?y(t,e,r,s,a,c,h):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),v(t,e,r,o))};function M(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&N.test(e)&&Object(i["q"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!N.test(e)||!Object(i["E"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const R="transition",L="animation",P=(t,{slots:e})=>Object(r["q"])(r["a"],B(t),e);P.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(P.props=Object(i["h"])({},r["a"].props,F),(t,e=[])=>{Object(i["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),U=t=>!!t&&(Object(i["o"])(t)?t.some(t=>t.length>1):t.length>1);function B(t){const e={};for(const i in t)i in F||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=q(o),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:E,onLeaveCancelled:_,onBeforeAppear:O=y,onAppear:x=b,onAppearCancelled:T=w}=e,S=(t,e,n)=>{z(t,e?h:c),z(t,e?l:a),n&&n()},C=(t,e)=>{z(t,p),z(t,d),e&&e()},k=t=>(e,n)=>{const i=t?x:b,o=()=>S(e,t,n);V(i,[e,o]),G(()=>{z(e,t?u:s),K(e,t?h:c),U(i)||W(e,r,m,o)})};return Object(i["h"])(e,{onBeforeEnter(t){V(y,[t]),K(t,s),K(t,a)},onBeforeAppear(t){V(O,[t]),K(t,u),K(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){const n=()=>C(t,e);K(t,f),J(),K(t,d),G(()=>{z(t,f),K(t,p),U(E)||W(t,r,v,n)}),V(E,[t,n])},onEnterCancelled(t){S(t,!1),V(w,[t])},onAppearCancelled(t){S(t,!0),V(T,[t])},onLeaveCancelled(t){C(t),V(_,[t])}})}function q(t){if(null==t)return null;if(Object(i["w"])(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=Object(i["O"])(t);return e}function K(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function z(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let H=0;function W(t,e,n,r){const i=t._endId=++H,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=X(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function X(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(R+"Delay"),o=r(R+"Duration"),s=Y(i,o),a=r(L+"Delay"),c=r(L+"Duration"),u=Y(a,c);let l=null,h=0,f=0;e===R?s>0&&(l=R,h=s,f=o.length):e===L?u>0&&(l=L,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?R:L:null,f=l?l===R?o.length:c.length:0);const d=l===R&&/\b(transform|all)(,|$)/.test(n[R+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function Y(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>Q(e)+Q(t[n])))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"];return Object(i["o"])(e)?t=>Object(i["n"])(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,nt(e,"input"))}function nt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const rt={created(t,{modifiers:{lazy:e,trim:n,number:r}},o){t._assign=Z(o);const s=r||o.props&&"number"===o.props.type;T(t,e?"change":"input",e=>{if(e.target.composing)return;let r=t.value;n?r=r.trim():s&&(r=Object(i["O"])(r)),t._assign(r)}),n&&T(t,"change",()=>{t.value=t.value.trim()}),e||(T(t,"compositionstart",tt),T(t,"compositionend",et),T(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:o}},s){if(t._assign=Z(s),t.composing)return;if(document.activeElement===t){if(n)return;if(r&&t.value.trim()===e)return;if((o||"number"===t.type)&&Object(i["O"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const it={created(t,{value:e},n){t.checked=Object(i["G"])(e,n.props.value),t._assign=Z(n),T(t,"change",()=>{t._assign(at(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Z(r),e!==n&&(t.checked=Object(i["G"])(e,r.props.value))}},ot={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const o=Object(i["C"])(e);T(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>n?Object(i["O"])(at(t)):at(t));t._assign(t.multiple?o?new Set(e):e:e[0])}),t._assign=Z(r)},mounted(t,{value:e}){st(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){st(t,e)}};function st(t,e){const n=t.multiple;if(!n||Object(i["o"])(e)||Object(i["C"])(e)){for(let r=0,o=t.options.length;r<o;r++){const o=t.options[r],s=at(o);if(n)Object(i["o"])(e)?o.selected=Object(i["H"])(e,s)>-1:o.selected=e.has(s);else if(Object(i["G"])(at(o),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function at(t){return"_value"in t?t._value:t.value}const ct=["ctrl","shift","alt","meta"],ut={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ct.some(n=>t[n+"Key"]&&!e.includes(n))},lt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=ut[e[t]];if(r&&r(n,e))return}return t(n,...r)},ht={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ft=(t,e)=>n=>{if(!("key"in n))return;const r=Object(i["l"])(n.key);return e.some(t=>t===r||ht[t]===r)?t(n):void 0};const dt=Object(i["h"])({patchProp:D},c);let pt;function gt(){return pt||(pt=Object(r["j"])(dt))}const mt=(...t)=>{const e=gt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=vt(t);if(!r)return;const o=e._component;Object(i["q"])(o)||o.render||o.template||(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function vt(t){if(Object(i["E"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),o=r.Object;t.exports=function(t){return o(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o.f(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),f=n("9112"),d=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=s.PROPER,y=s.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,E=p("iterator"),_="keys",O="values",x="entries",T=function(){return this};t.exports=function(t,e,n,s,p,m,S){c(n,e,s);var C,k,A,I=function(t){if(t===p&&R)return R;if(!w&&t in D)return D[t];switch(t){case _:return function(){return new n(this,t)};case O:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",N=!1,D=t.prototype,M=D[E]||D["@@iterator"]||p&&D[p],R=!w&&M||I(p),L="Array"==e&&D.entries||M;if(L&&(C=u(L.call(new t)),C!==Object.prototype&&C.next&&(o||u(C)===b||(l?l(C,b):a(C[E])||d(C,E,T)),h(C,j,!0,!0),o&&(g[j]=T))),v&&p==O&&M&&M.name!==O&&(!o&&y?f(D,"name",O):(N=!0,R=function(){return i(M,this)})),p)if(k={values:I(O),keys:m?R:I(_),entries:I(x)},S)for(A in k)(w||N||!(A in D))&&d(D,A,k[A]);else r({target:e,proto:!0,forced:w||N},k);return o&&!S||D[E]===R||d(D,E,R,{name:p}),g[e]=R,k}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"81d5":function(t,e,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("07fa");t.exports=function(t){var e=r(this),n=o(e),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)e[a++]=t;return e}},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"857a":function(t,e,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=/"/g,a=r("".replace);t.exports=function(t,e,n,r){var c=o(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+a(o(r),s,"&quot;")+'"'),u+">"+c+"</"+e+">"}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Ir})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return jr})),n.d(e,"f",(function(){return Dr})),n.d(e,"g",(function(){return Mr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return Cr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete E[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function x(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function T(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var k,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function I(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var D=N.userAgent;if(D){k=D;break t}}k=""}function M(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function R(t){const e={};for(const n in t)e[n]=t[n];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function V(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var U,B=I(k,"Opera"),q=I(k,"Trident")||I(k,"MSIE"),$=I(k,"Edge"),K=$||q,z=I(k,"Gecko")&&!(I(k.toLowerCase(),"webkit")&&!I(k,"Edge"))&&!(I(k,"Trident")||I(k,"MSIE"))&&!I(k,"Edge"),G=I(k.toLowerCase(),"webkit")&&!I(k,"Edge");function H(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",X=function(){var t=k;return z?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):G?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(W=X?X[1]:""),q){var Y=H();if(null!=Y&&Y>parseFloat(W)){U=String(Y);break t}}U=W}var Q,J={};function Z(){return V((function(){let t=0;const e=A(String(U)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||j(0==i[2].length,0==o[2].length)||j(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=H();Q=tt||(parseInt(U,10)||void 0)}else Q=void 0;var et=Q,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{F(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ot[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var ot={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=_(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ft(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ct(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)gt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[st]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=Ot(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=_t;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[st]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)bt(t,e[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=Tt(n),t&&t[st]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ft(o,n,r,i),-1<n&&(ut(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[st])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ot(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Ot(t){return t=t[dt],t instanceof lt?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),P(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=kt(s,r,!0,e)&&i}if(s=e.g=t,i=kt(s,r,!0,e)&&i,i=kt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=kt(s,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&ht(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(St,b),St.prototype[st]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function It(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Mt,t=>t.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){a.setTimeout(()=>{throw t},0)}function Lt(t,e){Nt||Pt(),Ft||(Nt(),Ft=!0),Vt.add(t,e)}function Pt(){var t=a.Promise.resolve(void 0);Nt=function(){t.then(Ut)}}var Ft=!1,Vt=new jt;function Ut(){for(var t;t=It();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Kt(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Kt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class zt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){b.call(this),this.h=t,this.g={}}y(Gt,b);var Ht=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var i=0;i<n.length;i++){var o=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Xt(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Yt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Jt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return At(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.Z.M.call(this),Xt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function oe(t){rt.call(this,ne.Ma,t)}function se(t){const e=ie();Ct(e,new oe(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();Ct(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(oe,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Gt(this),this.P=Oe,t=K?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Oe=45e3,xe={},Te={};function Se(t,e,n){t.K=1,t.v=Qe(ze(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),je(t),t.A=ze(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?R(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),se(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ie(t,n),r==Te){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==xe){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Le(t,r)}ke(t)&&r!=Te&&r!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Re(t),Me(t))}function Ie(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Te:(n=Number(e.substring(n,r)),isNaN(n)?xe:(r+=1,r+n>e.length?Te:(e=e.substr(r,n),t.C=r+n,e)))}function je(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Me(t){0==t.l.G||t.I||pr(t.l,t)}function Re(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!C(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(I(t,"spdy")||I(t,"quic")||I(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(_n(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=yr(r,r.H?r.la:null,r.W),s.J){On(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(De(a),je(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}se(4)}catch(u){}}function Pe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Pe(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||K||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=h||7==e||se(8==e||0>=f?3:2),De(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Xn(this.g);t="";var i=r.length,o=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Re(this),Me(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Re(this),Me(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.U?(Ae(this,h,s),K&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,s,null),Le(this,s)),4==h&&Re(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Re(this),Me(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(De(this),Ae(this,t,e),this.i&&4!=t&&je(this))}},r.cancel=function(){this.I=!0,Re(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(se(3),ce(17)),Re(this),this.o=2,Me(this)):Ne(this,this.Y-t)},r=Ve.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Ge(this,t.j),this.s=t.s,He(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ge(this,n[1]||"",!0),this.s=tn(n[2]||""),He(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function ze(t){return new Ke(t)}function Ge(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Qe(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ke?ze(t):new Ke(t,void 0)}function Ze(t,e,n,r){var i=new Ke(null,void 0);return t&&Ge(i,t),e&&He(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ve,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){O(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=T(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=T(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _n(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function Tn(){}function Sn(){this.g=new Tn}function Cn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Yt;if(a.Image){const r=new Image;r.onload=v(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(An,n,r,"TestLoadImage: error",!1,e),r.onabort=v(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function In(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Tn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Tn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(In,de),In.prototype.g=function(){return new jn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),y(jn,St);var Nn=0;function Dn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=jn.prototype,r.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mn(this)),this.readyState=Nn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):Rn(this),3==this.readyState&&Dn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Mn(this))},r.Ta=function(t){this.g&&(this.response=t,Mn(this))},r.ha=function(){this.g&&Mn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ln=a.JSON.parse;function Pn(t){St.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Pn,St);var Fn="",Vn=/^https?$/i,Un=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Gn(t)}function Kn(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function zn(t){if(t.h&&"undefined"!=typeof s&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))$t(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const s=t.ba();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Kn(t)}}finally{Gn(t)}}}function Gn(t,e){if(t.g){Hn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Hn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=ze(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Qe(ze(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Lt(t.Ha,t),t.C=0)}function or(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function sr(t,e){var n;n=e?e.m:t.V++;const r=ze(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_n(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{Cn(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Lt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ze(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ar(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe(ze(e)),n.s=null,n.U=!0,Ce(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,On(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),Ct(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&or(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ge(n,"https"),Qe(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==xn(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Je(n);if(""!=r.i)e&&He(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&M(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Pn(new In({ib:!0})):new Pn(t.qa),e.L=t.H,e}function wr(){}function Er(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function _r(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tr(this)}function Or(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xr(){be.call(this),this.status=1}function Tr(t){this.g=t}r=Pn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void $n(this,o)}t=n||"";const i=new Ve(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=x(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=_(Un,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){$n(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),Pn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ln(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ee(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=R(o),P(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=ze(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Qn(n,this.o,o),_n(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?sr(this,t):0==this.l.length||bn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new _r(t,e)},y(_r,St),_r.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},_r.prototype.close=function(){tr(this.g)},_r.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},_r.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,_r.Z.M.call(this)},y(Or,ye),y(xr,be),y(Tr,wr),Tr.prototype.xa=function(){Ct(this.g,"a")},Tr.prototype.wa=function(t){Ct(this.g,new Or(t))},Tr.prototype.va=function(t){Ct(this.g,new xr(t))},Tr.prototype.ua=function(){Ct(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,_r.prototype.send=_r.prototype.u,_r.prototype.open=_r.prototype.m,_r.prototype.close=_r.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",St.prototype.listen=St.prototype.N,Pn.prototype.listenOnce=Pn.prototype.O,Pn.prototype.getLastError=Pn.prototype.La,Pn.prototype.getLastErrorCode=Pn.prototype.Da,Pn.prototype.getStatus=Pn.prototype.ba,Pn.prototype.getResponseJson=Pn.prototype.Qa,Pn.prototype.getResponseText=Pn.prototype.ga,Pn.prototype.send=Pn.prototype.ea;var Sr=o.createWebChannelTransport=function(){return new Er},Cr=o.getStatEventTarget=function(){return ie()},kr=o.ErrorCode=he,Ar=o.EventType=fe,Ir=o.Event=ne,jr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=o.FetchXmlHttpFactory=In,Dr=o.WebChannel=ge,Mr=o.XhrIo=Pn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),f=n("107c"),d=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),E=a.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],O=w||_||E||h||f;O&&(g=function(t){var e,n,i,a,c,h,f,O=this,x=l(O),T=o(t),S=x.raw;if(S)return S.lastIndex=O.lastIndex,e=r(g,S,T),O.lastIndex=S.lastIndex,e;var C=x.groups,k=E&&O.sticky,A=r(s,O),I=O.source,j=0,N=T;if(k&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),N=b(T,O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==m(T,O.lastIndex-1))&&(I="(?: "+I+")",N=" "+N,j++),n=new RegExp("^(?:"+I+")",A)),_&&(n=new RegExp("^"+I+"$(?!\\s)",A)),w&&(i=O.lastIndex),a=r(p,k?n:O,N),k?a?(a.input=b(a.input,j),a[0]=b(a[0],j),a.index=O.lastIndex,O.lastIndex+=a[0].length):O.lastIndex=0:w&&a&&(O.lastIndex=O.global?a.index+a[0].length:i),_&&a&&a.length>1&&r(d,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&C)for(a.groups=h=u(null),c=0;c<C.length;c++)f=C[c],h[f[0]]=a[f[1]];return a}),t.exports=g},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),f=n("1dde"),d=n("b622"),p=n("2d00"),g=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",y=i.TypeError,b=p>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),w=f("concat"),E=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},_=!b||!w;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,r,i,o,s=c(this),a=h(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],E(o)){if(i=u(o),f+i>m)throw y(v);for(n=0;n<i;n++,f++)n in o&&l(a,f,o[n])}else{if(f>=m)throw y(v);l(a,f++,o)}return a.length=f,a}})},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return s(i(n,t));throw u(a(t)+" is not iterable")}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";e.f=i?s?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),o)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),s(t,l,!1,!0),a[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return et})),n.d(e,"g",(function(){return ot})),n.d(e,"h",(function(){return I})),n.d(e,"i",(function(){return ct})),n.d(e,"j",(function(){return rt})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return tt})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return it})),n.d(e,"o",(function(){return M})),n.d(e,"p",(function(){return X})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return o})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return H})),n.d(e,"u",(function(){return R})),n.d(e,"v",(function(){return A})),n.d(e,"w",(function(){return B})),n.d(e,"x",(function(){return k})),n.d(e,"y",(function(){return G})),n.d(e,"z",(function(){return q})),n.d(e,"A",(function(){return W})),n.d(e,"B",(function(){return v})),n.d(e,"C",(function(){return L})),n.d(e,"D",(function(){return a})),n.d(e,"E",(function(){return V})),n.d(e,"F",(function(){return U})),n.d(e,"G",(function(){return b})),n.d(e,"H",(function(){return w})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return d})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return j})),n.d(e,"M",(function(){return E})),n.d(e,"N",(function(){return nt})),n.d(e,"O",(function(){return st})),n.d(e,"P",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function u(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=V(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return V(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(V(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=P(t),r=P(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=M(t),r=M(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const E=t=>V(t)?t:null==t?"":M(t)||B(t)&&(t.toString===$||!F(t.toString))?JSON.stringify(t,_,2):String(t),_=(t,e)=>e&&e.__v_isRef?_(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:L(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||M(e)||G(e)?e:String(e),O={},x=[],T=()=>{},S=()=>!1,C=/^on[^a-z]/,k=t=>C.test(t),A=t=>t.startsWith("onUpdate:"),I=Object.assign,j=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},N=Object.prototype.hasOwnProperty,D=(t,e)=>N.call(t,e),M=Array.isArray,R=t=>"[object Map]"===K(t),L=t=>"[object Set]"===K(t),P=t=>t instanceof Date,F=t=>"function"===typeof t,V=t=>"string"===typeof t,U=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,q=t=>B(t)&&F(t.then)&&F(t.catch),$=Object.prototype.toString,K=t=>$.call(t),z=t=>K(t).slice(8,-1),G=t=>"[object Object]"===K(t),H=t=>V(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},Q=/-(\w)/g,J=Y(t=>t.replace(Q,(t,e)=>e?e.toUpperCase():"")),Z=/\B([A-Z])/g,tt=Y(t=>t.replace(Z,"-$1").toLowerCase()),et=Y(t=>t.charAt(0).toUpperCase()+t.slice(1)),nt=Y(t=>t?"on"+et(t):""),rt=(t,e)=>!Object.is(t,e),it=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ot=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let at;const ct=()=>at||(at="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("44ad"),s=n("fc6a"),a=n("a640"),c=i([].join),u=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c(s(this),void 0===t?",":t)}})},a1e9:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return Bt})),n.d(e,"d",(function(){return St})),n.d(e,"e",(function(){return Ot})),n.d(e,"f",(function(){return xt})),n.d(e,"g",(function(){return Dt})),n.d(e,"h",(function(){return Tt})),n.d(e,"i",(function(){return kt})),n.d(e,"j",(function(){return O})),n.d(e,"k",(function(){return Vt})),n.d(e,"l",(function(){return bt})),n.d(e,"m",(function(){return Mt})),n.d(e,"n",(function(){return x})),n.d(e,"o",(function(){return wt})),n.d(e,"p",(function(){return Ct})),n.d(e,"q",(function(){return T})),n.d(e,"r",(function(){return C}));var r=n("9ff4");let i;class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return i=this,t()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function s(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!u(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const v=Symbol(""),y=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?l(this):w(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function O(){_.push(E),E=!1}function x(){const t=_.pop();E=void 0===t||t}function T(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;S(r,i)}}function S(t,e){let n=!1;d<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function C(t,e,n,i,o,s){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&Object(r["o"])(t))c.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(c.get(n)),e){case"add":Object(r["o"])(t)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(v)),Object(r["u"])(t)&&u.push(c.get(y)));break;case"delete":Object(r["o"])(t)||(u.push(c.get(v)),Object(r["u"])(t)&&u.push(c.get(y)));break;case"set":Object(r["u"])(t)&&u.push(c.get(v));break}if(1===u.length)u[0]&&k(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);k(a(t))}}function k(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==m||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const A=Object(r["I"])("__proto__,__v_isRef,__isVue"),I=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["F"])),j=L(),N=L(!1,!0),D=L(!0),M=R();function R(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)T(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){O();const n=Ct(this)[e].apply(this,t);return x(),n}}),t}function L(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&o===(t?e?mt:gt:e?pt:dt).get(n))return n;const s=Object(r["o"])(n);if(!t&&s&&Object(r["k"])(M,i))return Reflect.get(M,i,o);const a=Reflect.get(n,i,o);if(Object(r["F"])(i)?I.has(i):A(i))return a;if(t||T(n,"get",i),e)return a;if(Dt(a)){const t=!s||!Object(r["t"])(i);return t?a.value:a}return Object(r["w"])(a)?t?Et(a):bt(a):a}}const P=V(),F=V(!0);function V(t=!1){return function(e,n,i,o){let s=e[n];if(xt(s)&&Dt(s)&&!Dt(i))return!1;if(!t&&!xt(i)&&(Tt(i)||(i=Ct(i),s=Ct(s)),!Object(r["o"])(e)&&Dt(s)&&!Dt(i)))return s.value=i,!0;const a=Object(r["o"])(e)&&Object(r["t"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,o);return e===Ct(o)&&(a?Object(r["j"])(i,s)&&C(e,"set",n,i,s):C(e,"add",n,i)),c}}function U(t,e){const n=Object(r["k"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&C(t,"delete",e,void 0,i),o}function B(t,e){const n=Reflect.has(t,e);return Object(r["F"])(e)&&I.has(e)||T(t,"has",e),n}function q(t){return T(t,"iterate",Object(r["o"])(t)?"length":v),Reflect.ownKeys(t)}const $={get:j,set:P,deleteProperty:U,has:B,ownKeys:q},K={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},z=Object(r["h"])({},$,{get:N,set:F}),G=t=>t,H=t=>Reflect.getPrototypeOf(t);function W(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ct(t),o=Ct(e);e!==o&&!n&&T(i,"get",e),!n&&T(i,"get",o);const{has:s}=H(i),a=r?G:n?It:At;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=Ct(n),i=Ct(t);return t!==i&&!e&&T(r,"has",t),!e&&T(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Y(t,e=!1){return t=t["__v_raw"],!e&&T(Ct(t),"iterate",v),Reflect.get(t,"size",t)}function Q(t){t=Ct(t);const e=Ct(this),n=H(e),r=n.has.call(e,t);return r||(e.add(t),C(e,"add",t,t)),this}function J(t,e){e=Ct(e);const n=Ct(this),{has:i,get:o}=H(n);let s=i.call(n,t);s||(t=Ct(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["j"])(e,a)&&C(n,"set",t,e,a):C(n,"add",t,e),this}function Z(t){const e=Ct(this),{has:n,get:r}=H(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&C(e,"delete",t,void 0,o),s}function tt(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&C(t,"clear",void 0,void 0,n),r}function et(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Ct(o),a=e?G:t?It:At;return!t&&T(s,"iterate",v),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function nt(t,e,n){return function(...i){const o=this["__v_raw"],s=Ct(o),a=Object(r["u"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?G:e?It:At;return!e&&T(s,"iterate",u?y:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return W(this,t)},get size(){return Y(this)},has:X,add:Q,set:J,delete:Z,clear:tt,forEach:et(!1,!1)},e={get(t){return W(this,t,!1,!0)},get size(){return Y(this)},has:X,add:Q,set:J,delete:Z,clear:tt,forEach:et(!1,!0)},n={get(t){return W(this,t,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!1)},r={get(t){return W(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=nt(i,!1,!1),n[i]=nt(i,!0,!1),e[i]=nt(i,!1,!0),r[i]=nt(i,!0,!0)}),[t,n,e,r]}const[ot,st,at,ct]=it();function ut(t,e){const n=e?t?ct:at:t?st:ot;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,o)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},ft={get:ut(!0,!1)};const dt=new WeakMap,pt=new WeakMap,gt=new WeakMap,mt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt(Object(r["P"])(t))}function bt(t){return xt(t)?t:_t(t,!1,$,lt,dt)}function wt(t){return _t(t,!1,z,ht,pt)}function Et(t){return _t(t,!0,K,ft,gt)}function _t(t,e,n,i,o){if(!Object(r["w"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=yt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Ot(t){return xt(t)?Ot(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function xt(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function St(t){return Ot(t)||xt(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function kt(t){return Object(r["g"])(t,"__v_skip",!0),t}const At=t=>Object(r["w"])(t)?bt(t):t,It=t=>Object(r["w"])(t)?Et(t):t;function jt(t){E&&m&&(t=Ct(t),S(t.dep||(t.dep=a())))}function Nt(t,e){t=Ct(t),t.dep&&k(t.dep)}function Dt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Rt(t,!1)}function Rt(t,e){return Dt(t)?t:new Lt(t,e)}class Lt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:At(t)}get value(){return jt(this),this._value}set value(t){t=this.__v_isShallow?t:Ct(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:At(t),Nt(this,t))}}function Pt(t){return Dt(t)?t.value:t}const Ft={get:(t,e,n)=>Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Vt(t){return Ot(t)?t:new Proxy(t,Ft)}class Ut{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,()=>{this._dirty||(this._dirty=!0,Nt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return jt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bt(t,e,n=!1){let i,o;const s=Object(r["q"])(t);s?(i=t,o=r["d"]):(i=t.get,o=t.set);const a=new Ut(i,o,s||!o,n);return a}Promise.resolve()},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),f=n("d039"),d=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),v=n("3a9b"),y=n("d9b5"),b=n("825a"),w=n("7b0b"),E=n("fc6a"),_=n("a04b"),O=n("577e"),x=n("5c6c"),T=n("7c73"),S=n("df75"),C=n("241c"),k=n("057f"),A=n("7418"),I=n("06cf"),j=n("9bf2"),N=n("37e8"),D=n("d1e7"),M=n("f36a"),R=n("6eeb"),L=n("5692"),P=n("f772"),F=n("d012"),V=n("90e3"),U=n("b622"),B=n("e538"),q=n("746f"),$=n("d44e"),K=n("69f3"),z=n("b727").forEach,G=P("hidden"),H="Symbol",W="prototype",X=U("toPrimitive"),Y=K.set,Q=K.getterFor(H),J=Object[W],Z=i.Symbol,tt=Z&&Z[W],et=i.TypeError,nt=i.QObject,rt=o("JSON","stringify"),it=I.f,ot=j.f,st=k.f,at=D.f,ct=c([].push),ut=L("symbols"),lt=L("op-symbols"),ht=L("string-to-symbol-registry"),ft=L("symbol-to-string-registry"),dt=L("wks"),pt=!nt||!nt[W]||!nt[W].findChild,gt=l&&f((function(){return 7!=T(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(J,e);r&&delete J[e],ot(t,e,n),r&&t!==J&&ot(J,e,r)}:ot,mt=function(t,e){var n=ut[t]=T(tt);return Y(n,{type:H,tag:t,description:e}),l||(n.description=e),n},vt=function(t,e,n){t===J&&vt(lt,e,n),b(t);var r=_(e);return b(n),d(ut,r)?(n.enumerable?(d(t,G)&&t[G][r]&&(t[G][r]=!1),n=T(n,{enumerable:x(0,!1)})):(d(t,G)||ot(t,G,x(1,{})),t[G][r]=!0),gt(t,r,n)):ot(t,r,n)},yt=function(t,e){b(t);var n=E(e),r=S(n).concat(Ot(n));return z(r,(function(e){l&&!a(wt,n,e)||vt(t,e,n[e])})),t},bt=function(t,e){return void 0===e?T(t):yt(T(t),e)},wt=function(t){var e=_(t),n=a(at,this,e);return!(this===J&&d(ut,e)&&!d(lt,e))&&(!(n||!d(this,e)||!d(ut,e)||d(this,G)&&this[G][e])||n)},Et=function(t,e){var n=E(t),r=_(e);if(n!==J||!d(ut,r)||d(lt,r)){var i=it(n,r);return!i||!d(ut,r)||d(n,G)&&n[G][r]||(i.enumerable=!0),i}},_t=function(t){var e=st(E(t)),n=[];return z(e,(function(t){d(ut,t)||d(F,t)||ct(n,t)})),n},Ot=function(t){var e=t===J,n=st(e?lt:E(t)),r=[];return z(n,(function(t){!d(ut,t)||e&&!d(J,t)||ct(r,ut[t])})),r};if(h||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=V(t),n=function(t){this===J&&a(n,lt,t),d(this,G)&&d(this[G],e)&&(this[G][e]=!1),gt(this,e,x(1,t))};return l&&pt&&gt(J,e,{configurable:!0,set:n}),mt(e,t)},tt=Z[W],R(tt,"toString",(function(){return Q(this).tag})),R(Z,"withoutSetter",(function(t){return mt(V(t),t)})),D.f=wt,j.f=vt,N.f=yt,I.f=Et,C.f=k.f=_t,A.f=Ot,B.f=function(t){return mt(U(t),t)},l&&(ot(tt,"description",{configurable:!0,get:function(){return Q(this).description}}),u||R(J,"propertyIsEnumerable",wt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),z(S(dt),(function(t){q(t)})),r({target:H,stat:!0,forced:!h},{for:function(t){var e=O(t);if(d(ht,e))return ht[e];var n=Z(e);return ht[e]=n,ft[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(d(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:bt,defineProperty:vt,defineProperties:yt,getOwnPropertyDescriptor:Et}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:_t,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(w(t))}}),rt){var xt=!h||f((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,n){var r=M(arguments),i=e;if((m(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(g(i)&&(e=a(i,this,t,e)),!y(e))return e}),r[1]=e,s(rt,null,r)}})}if(!tt[X]){var Tt=tt.valueOf;R(tt,X,(function(t){return a(Tt,this)}))}$(Z,H),F[G]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&h(o.prototype,"finally",d,{unsafe:!0})}},ab36:function(t,e,n){var r=n("861d"),i=n("9112");t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e,n){var r=n("4dae"),i=Math.floor,o=function(t,e){var n=t.length,c=i(n/2);return n<8?s(t,e):a(t,o(r(t,0,c),e),o(r(t,c),e),e)},s=function(t,e){var n,r,i=t.length,o=1;while(o<i){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},a=function(t,e,n,r){var i=e.length,o=n.length,s=0,a=0;while(s<i||a<o)t[s+a]=s<i&&a<o?r(e[s],n[a])<=0?e[s++]:n[a++]:s<i?e[s++]:n[a++];return t};t.exports=o},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var t={};return r[d].call(t)!==t}));g?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(t,e,n){var r=n("83ab"),i=n("d039");t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("0366"),d=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,E=h.process,_=h.Promise,O=d(h,"queueMicrotask"),x=O&&O.value;x||(r=function(){var t,e;y&&(t=E.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},g||y||v||!b||!w?!m&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=f(u.then,u),s=function(){l(r)}):y?s=function(){E.nextTick(r)}:(p=f(p,h),s=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=x||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=s(p),E=o(w),_=r(g,m),O=a(E),x=0,T=v||c,S=e?T(p,O):n||f?T(p,0):void 0;O>x;x++)if((d||x in E)&&(y=E[x],b=_(y,x,w),t))if(e)S[x]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:u(S,y)}else switch(t){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(t,e,n){var r=n("d039"),i=n("5c6c");t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e,n){var r=n("40d5"),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c770:function(t,e,n){var r=n("e330"),i=r("".replace),o=function(t){return String(Error(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(o);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=i(t,s,"");return t}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},cb29:function(t,e,n){var r=n("23e7"),i=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:i}),o("fill")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,h){var f=a(t),d=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=d&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!d||!p||n){var g=r(/./[f]),m=e(f,""[t],(function(t,e,n,i,s){var a=r(t),c=e.exec;return c===o||c===l.exec?d&&!s?{done:!0,value:g(e,n,i)}:{done:!0,value:a(n,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(l,f,m[1])}h&&c(l[f],"sham",!0)}},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&s(e.prototype,c(t))}},d9e2:function(t,e,n){var r=n("23e7"),i=n("da84"),o=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=s(t,e,u),r({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(r){t[n]=s[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(o,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,f=n("e893"),d=o.Symbol,p=d&&d.prototype;if(i&&c(d)&&(!("description"in p)||void 0!==d().description)){var g={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(g[e]=!0),e};f(m,d),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(d("test")),y=s(p.toString),b=s(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,E=s("".replace),_=s("".slice);h(p,"description",{configurable:!0,get:function(){var t=b(this),e=y(t);if(a(g,t))return"";var n=v?_(e,7,-1):E(e,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=s(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",f=s.set,d=s.getterFor(h);t.exports=c(Array,"Array",(function(t,e){f(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},e391:function(t,e,n){var r=n("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e5cb:function(t,e,n){"use strict";var r=n("d066"),i=n("1a2d"),o=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),h=n("ab36"),f=n("c770"),d=n("b980"),p=n("c430");t.exports=function(t,e,n,g){var m=g?2:1,v=t.split("."),y=v[v.length-1],b=r.apply(null,v);if(b){var w=b.prototype;if(!p&&i(w,"cause")&&delete w.cause,!n)return b;var E=r("Error"),_=e((function(t,e){var n=l(g?e:t,void 0),r=g?new b(t):new b;return void 0!==n&&o(r,"message",n),d&&o(r,"stack",f(r.stack,2)),this&&s(w,this)&&u(r,this,_),arguments.length>m&&h(r,arguments[m]),r}));if(_.prototype=w,"Error"!==y&&(a?a(_,E):c(_,E,{name:!0})),c(_,b),!p)try{w.name!==y&&o(w,"name",y),w.constructor=_}catch(O){}return _}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),f=n("fea9"),d=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),E=n("19aa"),_=n("8925"),O=n("2266"),x=n("1c7e"),T=n("4840"),S=n("2cf4").set,C=n("b575"),k=n("cdf9"),A=n("44de"),I=n("f069"),j=n("e667"),N=n("01b4"),D=n("69f3"),M=n("94ca"),R=n("b622"),L=n("6069"),P=n("605d"),F=n("2d00"),V=R("species"),U="Promise",B=D.getterFor(U),q=D.set,$=D.getterFor(U),K=f&&f.prototype,z=f,G=K,H=u.TypeError,W=u.document,X=u.process,Y=I.f,Q=Y,J=!!(W&&W.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,ot=1,st=2,at=!1,ct=M(U,(function(){var t=_(z),e=t!==String(z);if(!e&&66===F)return!0;if(c&&!G["finally"])return!0;if(F>=51&&/native code/.test(t))return!1;var n=new z((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[V]=r,at=n.then((function(){}))instanceof r,!at||!e&&L&&!Z})),ut=ct||!x((function(t){z.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},ht=function(t,e){var n,r,i,o=e.value,s=e.state==rt,a=s?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(s||(e.rejection===st&&mt(e),e.rejection=ot),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===t.promise?u(H("Promise-chain cycle")):(r=lt(n))?h(r,n,c,u):c(n)):u(o)}catch(f){l&&!i&&l.exit(),u(f)}},ft=function(t,e){t.notified||(t.notified=!0,C((function(){var n,r=t.reactions;while(n=r.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},dt=function(t,e,n){var r,i;J?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===tt&&A("Unhandled promise rejection",n)},pt=function(t){h(S,u,(function(){var e,n=t.facade,r=t.value,i=gt(t);if(i&&(e=j((function(){P?X.emit("unhandledRejection",r,n):dt(tt,n,r)})),t.rejection=P||gt(t)?st:ot,e.error))throw e.value}))},gt=function(t){return t.rejection!==ot&&!t.parent},mt=function(t){h(S,u,(function(){var e=t.facade;P?X.emit("rejectionHandled",e):dt(et,e,t.value)}))},vt=function(t,e,n){return function(r){t(e,r,n)}},yt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,ft(t,!0))},bt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw H("Promise can't be resolved itself");var r=lt(e);r?C((function(){var n={done:!1};try{h(r,e,vt(bt,n,t),vt(yt,n,t))}catch(i){yt(n,i,t)}})):(t.value=e,t.state=rt,ft(t,!1))}catch(i){yt({done:!1},i,t)}}};if(ct&&(z=function(t){E(this,G),y(t),h(r,this);var e=B(this);try{t(vt(bt,e),vt(yt,e))}catch(n){yt(e,n)}},G=z.prototype,r=function(t){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:new N,rejection:!1,state:nt,value:void 0})},r.prototype=p(G,{then:function(t,e){var n=$(this),r=Y(T(this,z));return n.parent=!0,r.ok=!b(t)||t,r.fail=b(e)&&e,r.domain=P?X.domain:void 0,n.state==nt?n.reactions.add(r):C((function(){ht(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=B(t);this.promise=t,this.resolve=vt(bt,e),this.reject=vt(yt,e)},I.f=Y=function(t){return t===z||t===o?new i(t):Q(t)},!c&&b(f)&&K!==Object.prototype)){s=K.then,at||(d(K,"then",(function(t,e){var n=this;return new z((function(t,e){h(s,n,t,e)})).then(t,e)}),{unsafe:!0}),d(K,"catch",G["catch"],{unsafe:!0}));try{delete K.constructor}catch(wt){}g&&g(K,G)}a({global:!0,wrap:!0,forced:ct},{Promise:z}),m(z,U,!1,!0),v(U),o=l(U),a({target:U,stat:!0,forced:ct},{reject:function(t){var e=Y(this);return h(e.reject,void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||ct},{resolve:function(t){return k(c&&this===o?z:this,t)}}),a({target:U,stat:!0,forced:ut},{all:function(t){var e=this,n=Y(e),r=n.resolve,i=n.reject,o=j((function(){var n=y(e.resolve),o=[],s=0,a=1;O(t,(function(t){var c=s++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=Y(e),r=n.reject,i=j((function(){var i=y(e.resolve);O(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["c"]})),n.d(e,"b",(function(){return r["d"]})),n.d(e,"c",(function(){return r["f"]})),n.d(e,"d",(function(){return r["i"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?s(e):"Object"==(r=s(e))&&o(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),s=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),f=n("b622"),d=n("1dde"),p=n("f36a"),g=d("slice"),m=f("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!g},{slice:function(t,e){var n,r,i,f=l(this),d=u(f),g=c(t,d),b=c(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,s(n)&&(n===v||o(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===v||void 0===n))return p(f,g,b);for(r=new(void 0===n?v:n)(y(b-g,0)),i=0;g<b;g++,i++)g in f&&h(r,i,f[g]);return r.length=i,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.c75a6b22.js.map