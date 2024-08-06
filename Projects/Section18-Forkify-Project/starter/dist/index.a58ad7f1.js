var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var x={};x=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},M={},P={},T=Function.prototype,F=T.call,I=S&&T.bind.bind(F,F),q={},H=(P=S?I:function(e){return function(){return F.apply(e,arguments)}})({}.toString),A=P("".slice);q=function(e){return A(H(e),8,-1)};var N=Object,U=P("".split);M=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?U(e,""):N(e)}:N;var C={},D={};D=function(e){return null==e};var R=TypeError;C=function(e){if(D(e))throw new R("Can't call method on "+e);return e},L=function(e){return M(C(e))};var W={},B={},G={},Q={},z="object"==typeof document&&document.all;Q=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},G=function(e){return"object"==typeof e?null!==e:Q(e)};var V={},Y={};Y=function(e,t){var r;return arguments.length<2?(r=b[e],Q(r)?r:void 0):b[e]&&b[e][t]};var J={};J=P({}.isPrototypeOf);var Z={},K={},X={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(a=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),X=a;var ea=b.String;Z=(K=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;V=Z?function(e){return"symbol"==typeof e}:function(e){var t=Y("Symbol");return Q(t)&&J(t.prototype,eo(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(Q(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return D(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!G(n=E(r,e))||Q(r=e.valueOf)&&!G(n=E(r,e))||"string"!==t&&Q(r=e.toString)&&!G(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||em(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(C(e))};var eS=P({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},ej=0,eO=Math.random(),ex=P(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++ej+eO,36)};var eL=b.Symbol,eM=eh("wks"),eP=Z?eL.for||eL:eL&&eL.withoutSetter||e$,eT=TypeError,eF=(ew(eM,e="toPrimitive")||(eM[e]=K&&ew(eL,e)?eL[e]:eP("Symbol."+e)),eM[e]);B=function(e,t){if(!G(e)||V(e))return e;var r,n=es(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!G(r)||V(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},W=function(e){var t=B(e,"string");return V(t)?t:t+""};var eI={},eq={},eH=b.document,eA=G(eH)&&G(eH.createElement);eq=function(e){return eA?eH.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=L(e),t=W(t),eI)try{return eN(e,t)}catch(e){}if(ew(e,t))return x(!E(n,e,t),e[t])};var eU={},eC={};eC=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eD={},eR=String,eW=TypeError;eD=function(e){if(G(e))return e;throw new eW(eR(e)+" is not an object")};var eB=TypeError,eG=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,ez="enumerable",eV="configurable",eY="writable";o=w?eC?function(e,t,r){if(eD(e),t=W(t),eD(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eY in r&&!r[eY]){var n=eQ(e,t);n&&n[eY]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:ez in r?r[ez]:n[ez],writable:!1})}return eG(e,t,r)}:eG:function(e,t,r){if(eD(e),t=W(t),eD(r),eI)try{return eG(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=w?function(e,t,r){return o(e,t,x(1,r))}:function(e,t,r){return e[t]=r,e};var eJ={},eZ={},eK=Function.prototype,eX=w&&Object.getOwnPropertyDescriptor,e0=ew(eK,"name")&&(!w||w&&eX(eK,"name").configurable),e1={},e2=P(Function.toString);Q(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e1=eg.inspectSource;var e9={},e3={},e6=b.WeakMap;e3=Q(e6)&&/native code/.test(String(e6));var e4={},e7=eh("keys");e4=function(e){return e7[e]||(e7[e]=e$(e))};var e5={};e5={};var e8="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e3||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e8);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e4("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e8);return t.facade=e,eU(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e9={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e9.get,to=String,ts=Object.defineProperty,tc=P("".slice),tu=P("".replace),tl=P([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eZ=function(e,t,r){"Symbol("===tc(to(t),0,7)&&(t="["+tu(to(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return Q(this)&&ta(this).source||e1(this)},"toString"),eJ=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(Q(r)&&eZ(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},tm={},ty={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;tm=function(e,t){var r=ty(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tj=Math.min;t$=function(e){var t=ty(e);return t>0?tj(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tO=function(e){return function(t,r,n){var i,a=L(t),o=tS(a);if(0===o)return!e&&-1;var s=tm(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tx={includes:tO(!0),indexOf:tO(!1)}.indexOf,tL=P([].push);tv=function(e,t){var r,n=L(e),i=0,a=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tL(a,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tx(a,r)||tL(a,r));return a};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tM)},d=Object.getOwnPropertySymbols;var tP=P([].concat);tg=Y("Reflect","ownKeys")||function(e){var t=l(eD(e));return d?tP(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),a=0;a<i.length;a++){var s=i[a];ew(e,s)||n&&ew(n,s)||o(e,s,r(t,s))}};var tT={},tF=/#|\.prototype\./,tI=function(e,t){var r=tH[tq(e)];return r===tN||r!==tA&&(Q(t)?k(t):!!t)},tq=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tH=tI.data={},tA=tI.NATIVE="N",tN=tI.POLYFILL="P";tT=tI,y=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||em(c,{}):b[c]&&b[c].prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;th(o,a)}(e.sham||a&&a.sham)&&eU(o,"sham",!0),eJ(n,i,o,e)}};var tU={},tC={},tD=Function.prototype,tR=tD.apply,tW=tD.call;tC="object"==typeof Reflect&&Reflect.apply||(S?tW.bind(tR):function(){return tW.apply(tR,arguments)});var tB={},tG={},tQ=(tG=function(e){if("Function"===q(e))return P(e)})(tG.bind);tB=function(e,t){return ec(e),void 0===t?e:S?tQ(e,t):function(){return e.apply(t,arguments)}};var tz={};tz=Y("document","documentElement");var tV={};tV=P([].slice);var tY={},tJ=TypeError;tY=function(e,t){if(e<t)throw new tJ("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tK={};tK="process"===q(b.process);var tX=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t9=b.Function,t3=b.MessageChannel,t6=b.String,t4=0,t7={},t5="onreadystatechange";k(function(){p=b.location});var t8=function(e){if(ew(t7,e)){var t=t7[e];delete t7[e],t()}},re=function(e){return function(){t8(e)}},rt=function(e){t8(e.data)},rr=function(e){b.postMessage(t6(e),p.protocol+"//"+p.host)};tX&&t0||(tX=function(e){tY(arguments.length,1);var t=Q(e)?e:t9(e),r=tV(arguments,1);return t7[++t4]=function(){tC(t,void 0,r)},f(t4),t4},t0=function(e){delete t7[e]},tK?f=function(e){t1.nextTick(re(e))}:t2&&t2.now?f=function(e){t2.now(re(e))}:t3&&!tZ?(g=(h=new t3).port2,h.port1.onmessage=rt,f=tB(g.postMessage,g)):b.addEventListener&&Q(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(f=rr,b.addEventListener("message",rt,!1)):f=t5 in eq("script")?function(e){tz.appendChild(eq("script"))[t5]=function(){tz.removeChild(this),t8(e)}}:function(e){setTimeout(re(e),0)});var rn=(tU={set:tX,clear:t0}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tU.set,ra={},ro={};ro="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ro&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ra=function(e,t){var r=t?2:1;return rc?function(n,i){var a=tY(arguments.length,1)>r,o=Q(n)?n:rs(n),s=a?tV(arguments,r):[],c=a?function(){tC(o,this,s)}:o;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ra(ri,!1):ri;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new O(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function x(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes/",rp="12aae647-4514-4f6b-9e01-acb7dc06bfa2",rf=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rh={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rg=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rv=async function(e){try{let t=await rf(`${rd}${e}?key=${rp}`);rh.recipe=rg(t),rh.bookmarks.some(t=>t.id===e)?rh.recipe.bookmarked=!0:rh.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F62B}\u{1F62A}\u{1F62B}`),e}},rm=async function(e){try{rh.search.query=e;let t=await rf(`${rd}?search=${e}&key=${rp}`);rh.search.results=t.data.recipes.map(function(e){return{id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}})}catch{throw console.error(`${err} \u{1F62B}\u{1F62A}\u{1F62B}`),err}},ry=function(e=rh.search.page){rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage,r=e*rh.search.resultsPerPage;return rh.search.results.slice(t,r)},rb=function(e){rh.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rh.recipe.servings}),rh.recipe.servings=e},r_=function(){localStorage.setItem("bookmarks",JSON.stringify(rh.bookmarks))},rw=function(e){rh.bookmarks.push(e),rh.recipe.bookmarked=!0,r_()},rk=function(e){let t=rh.bookmarks.findIndex(t=>t.id===e);rh.bookmarks.splice(t,1),rh.recipe.bookmarked=!1,r_()};!function(){let e=localStorage.getItem("bookmarks");e&&(rh.bookmarks=JSON.parse(e))}();const rE=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rf(`${rd}?key=${rp}`,r);rh.recipe=rg(n),rw(rh.recipe)}catch(e){throw e}};var rS={};rS=new URL("icons.c14567a0.svg",import.meta.url).toString();class r${_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];!e.isEqualNode(r)&&e.firstChild?.nodeValue.trim()!==""&&e.firstChild?.nodeValue.trim()&&e.firstChild?.nodeValue.trim()!==r.firstChild?.nodeValue.trim()&&(console.log(e),r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
      <div class="spinner">
        <svg>
          <use href="${m(rS)}#icon-loader"></use>
        </svg>
      </div> -->`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
       <div class="error">
          <div>
            <svg>
              <use href="${m(rS)}#icon-alert-triangle"></use>
            </svg>
          </div>
              <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
       <div class="message">
          <div>
            <svg>
              <use href="${m(rS)}#icon-smile"></use>
            </svg>
          </div>
              <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rj={};function rO(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rj=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rO(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rO(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rx extends r${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.update;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rS)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rS)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update="${this._data.servings-1}">
                <svg>
                  <use href="${m(rS)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update="${this._data.servings+1}">
                <svg>
                  <use href="${m(rS)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

         
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${m(rS)}#icon-user"></use>
            </svg>
          </div>
          
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${m(rS)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${m(rS)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${m(rS)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?m(rj)(e.quantity):""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>`}}var rL=new rx;class rM{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rP=new rM,rT=new class extends r${_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}"
          href="#${this._data.id}">
            <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>

              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${m(rS)}#icon-user"></use>
                </svg>
              </div> 
            </div>
        </a>
    </li>`}};class rF extends r${_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_message="";_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rI=new rF;class rq extends r${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");console.log(r),r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=`<button data-goto = ${e+1} class = "btn--inline pagination__btn--next"> <span>Page ${e+1}</span>
    <svg class ="search__icon"> <use href="${m(rS)}#icon-arrow-right"></use></svg>`,n=`<button data-goto = ${e-1} class = "btn--inline pagination__btn--prev"> <span>Page ${e-1}</span>
    <svg class ="search__icon"> <use href="${m(rS)}#icon-arrow-left"></use></svg>`;return 1===e&&t>1?r:e===t&t>1?n:e<t?r+n:""}}var rH=new rq;class rA extends r${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rN=new rA;class rU extends r${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}renderUploadForm(){let e=`
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
  
          <label for="title">Title</label>
          <input
            id="title"
            value="Test recipe"
            required
            name="title"
            type="text"
          />
  
          <label for="sourceUrl">URL</label>
          <input
            id="sourceUrl"
            value="Test URL"
            required
            name="sourceUrl"
            type="text"
          />
  
          <label for="image">Image URL</label>
          <input
            id="image"
            value="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            required
            name="image"
            type="text"
          />
  
          <label for="publisher">Publisher</label>
          <input
            id="publisher"
            value="Test Publisher"
            required
            name="publisher"
            type="text"
          />
  
          <label for="cookingTime">Prep time</label>
          <input
            id="cookingTime"
            value="60"
            required
            name="cookingTime"
            type="number"
          />
  
          <label for="servings">Servings</label>
          <input
            id="servings"
            value="6"
            required
            name="servings"
            type="number"
          />
        </div>
  
        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
  
          <label for="ingredient-1">Ingredient 1</label>
          <input
            id="ingredient-1"
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-2">Ingredient 2</label>
          <input
            id="ingredient-2"
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-3">Ingredient 3</label>
          <input
            id="ingredient-3"
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-4">Ingredient 4</label>
          <input
            id="ingredient-4"
            value=",,pepper"
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-5">Ingredient 5</label>
          <input
            id="ingredient-5"
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-6">Ingredient 6</label>
          <input
            id="ingredient-6"
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>
  
        <button class="btn upload__btn">
          <svg>
            <use href="${m(rS)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_generateMarkup(){}}var rC=new rU;const rD=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rL.renderSpinner(),rI.update(ry()),rN.update(rh.bookmarks),await rv(e),rL.render(rh.recipe)}catch(e){rL.renderError(),console.error(e)}},rR=async function(){try{rI.renderSpinner();let e=rP.getQuery();if(!e)return;await rm(e),rI.render(ry(1)),rH.render(rh.search)}catch(e){console.error(`${e} \u{1F62B}\u{1F62A}\u{1F62B}`)}},rW=async function(e){try{rC.renderSpinner(),await rE(e),console.log(rh.recipe),rL.render(rh.recipe),rC.renderMessage(),rN.render(rh.bookmarks),window.history.pushState(null,"",`#${rh.recipe.id}`),setTimeout(function(){rC.toggleWindow()},2500),setTimeout(function(){rC.renderUploadForm()},3750)}catch(e){console.error("\uD83E\uDD76",e),rC.renderError(e.message),setTimeout(function(){rC.renderUploadForm()},2500)}};rN.addHandlerRender(function(){rN.render(rh.bookmarks)}),rL.addHandlerRender(rD),rL.addHandlerUpdateServings(function(e){rb(e),rL.update(rh.recipe)}),rL.addHandlerAddBookmark(function(){rh.recipe.bookmarked?rk(rh.recipe.id):rw(rh.recipe),rL.update(rh.recipe),rN.render(rh.bookmarks)}),rP.addHandlerSearch(rR),rH.addHandlerClick(function(e){rI.render(ry(e)),rH.render(rh.search)}),rC.addHandlerUpload(rW);
//# sourceMappingURL=index.a58ad7f1.js.map
