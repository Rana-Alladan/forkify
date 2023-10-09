var e,t,r,n,o,i,a,s,c,u,l,d,f,p,h,g,v,m,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire3a11=k);var E={},S={},O=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
O("object"==typeof self&&self)||O("object"==typeof y&&y)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||S||Function("return this")();var j={},L={};// Detect IE8's incomplete defineProperty implementation
j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},M={};M=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;$=M?F.bind(F):function(){return F.apply(F,arguments)};var x={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;i=P&&!x.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:x;var T={};T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},H={},I={},N=Function.prototype,A=N.call,C=M&&N.bind.bind(A,A),D={},R=(I=M?C:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=I("".slice);D=function(e){return W(R(e),8,-1)};var z=Object,G=I("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
H=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?G(e,""):z(e)}:z;var U={},B={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
B=function(e){return null==e};var J=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
U=function(e){if(B(e))throw new J("Can't call method on "+e);return e},q=function(e){return H(U(e))};var Y={},Q={},V={},K={},X={},Z="object"==typeof document&&document.all,ee=(X={all:Z,IS_HTMLDDA:void 0===Z&&void 0!==Z}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
K=X.IS_HTMLDDA?function(e){return"function"==typeof e||e===ee}:function(e){return"function"==typeof e};var et=X.all;V=X.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===et}:function(e){return"object"==typeof e?null!==e:K(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var eo={};eo=I({}.isPrototypeOf);var ei={},ea={},es={},ec={};ec="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=S.process,el=S.Deno,ed=eu&&eu.versions||el&&el.version,ef=ed&&ed.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ec&&(!(a=ec.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ec.match(/Chrome\/(\d+)/))&&(s=+a[1]),es=s;var ep=S.String;ei=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ea=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ep(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;er=ei?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return K(t)&&eo(t.prototype,eh(e))};var eg={},ev={},em={},ey=String;em=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;// `Assert: IsCallable(argument) is true`
ev=function(e){if(K(e))return e;throw new eb(em(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eg=function(e,t){var r=e[t];return B(r)?void 0:ev(r)};var e_={},ew=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
e_=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!V(n=$(r,e))||K(r=e.valueOf)&&!V(n=$(r,e))||"string"!==t&&K(r=e.toString)&&!V(n=$(r,e)))return n;throw new ew("Can't convert object to primitive value")};var ek={},eE={};eE=!1;var eS={},eO={},ej=Object.defineProperty;eO=function(e,t){try{ej(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var eL="__core-js_shared__";eS=S[eL]||eO(eL,{}),(ek=function(e,t){return eS[e]||(eS[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:eE?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var e$={},eM={},eF=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eM=function(e){return eF(U(e))};var ex=I({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
e$=Object.hasOwn||function(e,t){return ex(eM(e),t)};var eP={},eT=0,eq=Math.random(),eH=I(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eH(++eT+eq,36)};var eI=S.Symbol,eN=ek("wks"),eA=ei?eI.for||eI:eI&&eI.withoutSetter||eP,eC=TypeError,eD=(e$(eN,e="toPrimitive")||(eN[e]=ea&&e$(eI,e)?eI[e]:eA("Symbol."+e)),eN[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Q=function(e,t){if(!V(e)||er(e))return e;var r,n=eg(e,eD);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!V(r)||er(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),e_(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Y=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eR={},eW={},ez=S.document,eG=V(ez)&&V(ez.createElement);eW=function(e){return eG?ez.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eR=!j&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eU=Object.getOwnPropertyDescriptor;o=j?eU:function(e,t){if(e=q(e),t=Y(t),eR)try{return eU(e,t)}catch(e){}if(e$(e,t))return T(!$(i,e,t),e[t])};var eB={},eJ={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eJ=j&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eV=TypeError;// `Assert: Type(argument) is Object`
eY=function(e){if(V(e))return e;throw new eV(eQ(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";c=j?eJ?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eY(e),t=Y(t),eY(r),eR)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=j?function(e,t,r){return c(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e4={},e7=Function.prototype,e9=j&&Object.getOwnPropertyDescriptor,e8=e$(e7,"name")&&(!j||j&&e9(e7,"name").configurable),e5={},e6=I(Function.toString);K(eS.inspectSource)||(eS.inspectSource=function(e){return e6(e)}),e5=eS.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},to=ek("keys");tn=function(e){return to[e]||(to[e]=eP(e))};var ti={};ti={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||eS.state){var tu=eS.state||(eS.state=new tc);/* eslint-disable no-self-assign -- prototype methods protection */tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},l=function(e){return tu.get(e)||{}},d=function(e){return tu.has(e)}}else{var tl=tn("state");ti[tl]=!0,u=function(e,t){if(e$(e,tl))throw new ts(ta);return t.facade=e,eB(e,tl,t),t},l=function(e){return e$(e,tl)?e[tl]:{}},d=function(e){return e$(e,tl)}}var tf=(te={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=l(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tg=Object.defineProperty,tv=I("".slice),tm=I("".replace),ty=I([].join),tb=j&&!L(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e4=function(e,t,r){"Symbol("===tv(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e8&&e.name!==t)&&(j?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&e$(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?j&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return e$(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e5(this)},"toString"),e3=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(K(r)&&e4(r,i,n),n.global)o?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tO={},tj={},tL={},t$=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tL=Math.trunc||function(e){var t=+e;return(t>0?tM:t$)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tL(t)};var tF=Math.max,tx=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tO=function(e,t){var r=tj(e);return r<0?tF(r+t,0):tx(r,t)};var tP={},tT={},tq=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tT=function(e){return e>0?tq(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tP=function(e){return tT(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tH=function(e){return function(t,r,n){var o,i=q(t),a=tP(i),s=tO(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[s++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tH(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tH(!1)}.indexOf,tN=I([].push);tS=function(e,t){var r,n=q(e),o=0,i=[];for(r in n)!e$(ti,r)&&e$(n,r)&&tN(i,r);// Don't enum bug & hidden keys
for(;t.length>o;)e$(n,r=t[o++])&&(~tI(i,r)||tN(i,r));return i};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tS(e,tA)},p=Object.getOwnPropertySymbols;var tC=I([].concat);// all object keys, includes non-enumerable and symbols
tE=en("Reflect","ownKeys")||function(e){var t=f(eY(e));return p?tC(t,p(e)):t},tk=function(e,t,r){for(var n=tE(t),i=0;i<n.length;i++){var a=n[i];e$(e,a)||r&&e$(r,a)||c(e,a,o(t,a))}};var tD={},tR=/#|\.prototype\./,tW=function(e,t){var r=tG[tz(e)];return r===tB||r!==tU&&(K(t)?L(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tG=tW.data={},tU=tW.NATIVE="N",tB=tW.POLYFILL="P";tD=tW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/E=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eO(c,{}):(S[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tD(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tk(a,i)}(e.sham||i&&i.sham)&&eB(a,"sham",!0),e3(r,n,a,e)}};var tJ={},tY={},tQ=Function.prototype,tV=tQ.apply,tK=tQ.call;// eslint-disable-next-line es/no-reflect -- safe
tY="object"==typeof Reflect&&Reflect.apply||(M?tK.bind(tV):function(){return tK.apply(tV,arguments)});var tX={},tZ={},t0=(tZ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===D(e))return I(e)})(tZ.bind);// optional / simple context binding
tX=function(e,t){return ev(e),void 0===t?e:M?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=en("document","documentElement");var t2={};t2=I([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw new t4("Not enough arguments");return e};var t7={};// eslint-disable-next-line redos/no-vulnerable -- safe
t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(ec);var t9={};t9="process"===D(S.process);var t8=S.setImmediate,t5=S.clearImmediate,t6=S.process,re=S.Dispatch,rt=S.Function,rr=S.MessageChannel,rn=S.String,ro=0,ri={},ra="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=S.location});var rs=function(e){if(e$(ri,e)){var t=ri[e];delete ri[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){// old engines have not location.origin
S.postMessage(rn(e),h.protocol+"//"+h.host)};t8&&t5||(t8=function(e){t3(arguments.length,1);var t=K(e)?e:rt(e),r=t2(arguments,1);return ri[++ro]=function(){tY(t,void 0,r)},g(ro),ro},t5=function(e){delete ri[e]},t9?g=function(e){t6.nextTick(rc(e))}:re&&re.now?g=function(e){re.now(rc(e))}:rr&&!t7?(m=(v=new rr).port2,v.port1.onmessage=ru,g=tX(m.postMessage,m)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!L(rl)?(g=rl,S.addEventListener("message",ru,!1)):g=ra in eW("script")?function(e){t1.appendChild(eW("script"))[ra]=function(){t1.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tJ={set:t8,clear:t5}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rd},{clearImmediate:rd});var rf=tJ.set,rp={},rh={};/* global Bun -- Deno case */rh="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rg=S.Function,rv=/MSIE .\./.test(ec)||rh&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rp=function(e,t){var r=t?2:1;return rv?function(n,o/* , ...arguments */){var i=t3(arguments.length,1)>r,a=K(n)?n:rg(n),s=i?t2(arguments,r):[],c=i?function(){tY(a,this,s)}:a;return t?e(c,o):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rm=S.setImmediate?rp(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rm},{setImmediate:rm});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new L(i||[]),s=f,function(r,o){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return M()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g);var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}// Return an iterator with no values.
return{next:M}}function M(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=ry}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=ry:Function("r","regeneratorRuntime = r")(ry)}const rb="https://forkify-api.herokuapp.com/api/v2/recipes",r_="160b957e-51ea-4511-8970-00901ef88234",rw=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e}},rk={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rE=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rS=async function(e){try{let t=await rw(`${rb}/${e}?key=${r_}`);rk.recipe=rE(t),rk.bookmarks.some(t=>t.id===e)?rk.recipe.bookmarked=!0:rk.recipe.bookmarked=!1;// end fetching data
}catch(e){throw console.error(`${e} !!`),e}},rO=async function(e){try{rk.search.query=e;let t=await rw(`${rb}/?search=${e}&key=${r_}`);console.log(t),rk.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rk.search.page=1,console.log(rk.search.page)}catch(e){throw console.error(`${err} !!`),err}},rj=function(e=rk.search.page){rk.search.page=e;let t=(e-1)*rk.search.resultsPerPage,r=e*rk.search.resultsPerPage;return rk.search.results.slice(t,r)},rL=function(e){rk.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rk.recipe.servings}),rk.recipe.servings=e},r$=function(){localStorage.setItem("bookmarks",JSON.stringify(rk.bookmarks))},rM=function(e){//add bookmark
rk.bookmarks.push(e),console.log(e),e.id===rk.recipe.id&&(rk.recipe.bookmarked=!0),r$()},rF=function(e){let t=rk.bookmarks.findIndex(t=>t.id===e);rk.bookmarks.splice(t,1),e===rk.recipe.id&&(rk.recipe.bookmarked=!1),r$()};!function(){let e=localStorage.getItem("bookmarks");e&&(rk.bookmarks=JSON.parse(e))}();const rx=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rw(`${rb}/?key=${r_}`,r);rk.recipe=rE(n),rM(rk.recipe)}catch(e){throw e}};// export const uploadRecipe = async function (recipe) {
//   try {
//     const ingredients = Object.entries(recipe)
//       .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
//       .map(ing => {
//         const ingArr = ing[1].replaceAll(' ', '').split(',');
//         if (ingArr !== 3) throw new Error('Wrong ingrediantes format');
//         const [quantity, unit, description] = ingArr;
//         return { quantity: quantity ? +quantity : null, unit, description };
//       });
//     const recipe = {
//       title: recipe.title,
//       source_url: recipe.sourceUrl,
//       image_url: recipe.image,
//       publisher: recipe.publisher,
//       cooking_time: +recipe.cookingTime,
//       servings: +recipe.servings,
//       ingredients,
//     };
//     console.log(recipe);
//   } catch (err) {
//     throw err;
//   }
// };
// icons pf parcel
var rP={};rP=new URL(k("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rT{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}//render only the changed elements
update(e){// if (!data || (Array.isArray(data) && data.length === 0))
//   return this.renderError();
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=o[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML="";// remove default text
}renderSpinner(){let e=`
  <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/b(rP)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMesssage){let t=`
    <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/b(rP)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
            <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/b(rP)}svg#icon-smile"></use>
            </svg>
          </div>
          <p>${e} </p>
        </div>`;this._clear,this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var i=r.split("/");this.numerator=i[0],this.denominator=i[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},Fraction;class rq extends rT{_parentElement=document.querySelector(".recipe");_errorMesssage="We could not find that recipe, Please try another one! ";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e));//^equal
// window.addEventListener('hashchange', handler);
// window.addEventListener('load', handler);
}addHAndlerServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;//>> {updateTo}=btn.dataset (it changes to camel case)
n>0&&e(n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to='${this._data.servings-1}'>
                <svg>
                  <use href="${/*@__PURE__*/b(rP)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings"  data-update-to='${this._data.servings+1}'>
                <svg>
                  <use href="${/*@__PURE__*/b(rP)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/b(rP)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/b(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${/*@__PURE__*/b(rP)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
     ${e.description}
    </div>
  </li>`}}var rH=new rq;class rI{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rN=new rI,rA=new class extends rT{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
   <li class="preview">
    <a class="preview__link  ${this._data.id===e?"preview__link--active":""} "href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
         <div class="preview__user-generated ${this._data.key?"":"hidden"}">
           <svg>
          <use href="${/*@__PURE__*/b(rP)}#icon-user"></use>
          </svg>
          </div>
     </div>  
    </a>
  </li>
    `}};class rC extends rT{_parentElement=document.querySelector(".bookmarks__list");_errorMesssage="No bookmarks yet!";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rD=new rC;class rR extends rT{_parentElement=document.querySelector(".results");_errorMesssage="No recipes found for your query, Please try another one! ";_successMessage="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rW=new rR;class rz extends rT{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n,r),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// first page and other pages
(console.log(e),1===e&&t>1)?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-arrow-right"></use>
            </svg>
          </button>`:e===t&&t>1?`<button  data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`:e<t?(console.log("PAges"),`<button  data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-arrow-right"></use>
            </svg>
          </button>
          <button  data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/b(rP)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          `):" ")}}var rG=new rz;class rU extends rT{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);// this is the eventhandler i.e parent
e(n)})}_generateMarkup(){}}var rB=new rU;// if (module.hot) module.hot.accept(); // parcel for reload
// console.log(icons);
// const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const rJ=async function(){try{// console.log('hello');
// displayin the info whenever the hash change i.e #num(id)
let e=window.location.hash.slice(1);if(!e)return;rH.renderSpinner(),rW.update(rj()),rD.update(rk.bookmarks),//1- loading recipe
await rS(e),rH.render(rk.recipe)}catch(e){rH.renderError()}},rY=async function(){try{rW.renderSpinner();// get search value
let e=rN.getQuery();if(!e)return;// load info
await rO(e),rW.render(rj(3)),rG.render(rk.search)}catch(e){console.log(e)}},rQ=async function(e){try{rB.renderSpinner(),await rx(e),rH.render(rk.recipe),rB.renderMessage(),rD.render(rk.bookmarks),//change url id
window.history.pushState(null,"",`#${rk.recipe.id}`),//close window
setTimeout(function(){rB.toggleWindow()},2500)}catch(e){console.log(e),rB.renderError(e.message)}};rD.addHandlerRender(function(){rD.render(rk.bookmarks)}),rH.addHandlerRender(rJ),rH.addHandlerBookmark(function(){let e=rk.recipe;e.bookmarked?rF(e.id):rM(e),rH.update(e),rD.render(rk.bookmarks)}),rN.addHandlerSearch(rY),rG.addHandlerClick(function(e){rW.render(rj(e)),rG.render(rk.search)}),rH.addHAndlerServings(function(e){//Update recipe
rL(e),rH.update(rk.recipe)}),rB.addHandlerUpload(rQ);//# sourceMappingURL=index.c4ed3b74.js.map

//# sourceMappingURL=index.c4ed3b74.js.map
