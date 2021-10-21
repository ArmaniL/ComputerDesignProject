var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u,l;function i(t,n){return u||(u=document.createElement("a")),u.href=n,t===u.href}function a(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t){l=t}const y=[],b=[],_=[],x=[],v=Promise.resolve();let w=!1;function k(t){_.push(t)}let E=!1;const C=new Set;function A(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];$(n),N(n.$$)}for($(null),y.length=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];C.has(n)||(C.add(n),n())}_.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,E=!1,C.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const U=new Set;function j(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,v.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(c,u,i,a,s,f,p,m=[-1]){const h=l;$(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(h?h.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:u.target||h.$$.root};p&&p(g.root);let y=!1;if(g.ctx=i?i(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&j(c,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(U.delete(b),b.i(_))),function(t,e,c,u){const{fragment:l,on_mount:i,on_destroy:a,after_update:s}=t.$$;l&&l.m(e,c),u||k((()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(k)}(c,u.target,u.anchor,u.customElement),A()}var b,_;$(h)}function L(n){let e,r,c,u,l,a,p;return{c(){e=f("img"),c=m(),u=f("img"),g(e,"alt","upload"),i(e.src,r="cloud-data-upload.svg")||g(e,"src","cloud-data-upload.svg"),g(e,"class","svelte-1w6yhef"),g(u,"alt","download"),i(u.src,l="download-file-round-line.svg")||g(u,"src","download-file-round-line.svg"),g(u,"class","svelte-1w6yhef")},m(t,o){s(t,e,o),s(t,c,o),s(t,u,o),a||(p=[h(e,"click",n[3]),h(u,"click",n[4])],a=!0)},p:t,d(t){t&&d(e),t&&d(c),t&&d(u),a=!1,o(p)}}}function O(n){let e,o,r,c,u,l;return{c(){e=f("h1"),e.textContent="File Upload",o=m(),r=f("form"),c=f("input"),u=m(),l=f("input"),g(c,"type","submit"),c.value="Upload",g(l,"name","upload"),g(l,"type","file"),g(r,"action",n[2]+"upload"),g(r,"method","post"),g(r,"enctype","multipart/form-data")},m(t,n){s(t,e,n),s(t,o,n),s(t,r,n),a(r,c),a(r,u),a(r,l)},p:t,d(t){t&&d(e),t&&d(o),t&&d(r)}}}function S(n){let e,o,r,c,u,l;return{c(){e=f("h1"),e.textContent="File Download",o=m(),r=f("form"),c=f("input"),u=m(),l=f("input"),g(c,"type","submit"),c.value="Upload",g(l,"name","upload"),g(l,"type","text"),g(r,"action",n[2]+"download"),g(r,"method","post")},m(t,n){s(t,e,n),s(t,o,n),s(t,r,n),a(r,c),a(r,u),a(r,l)},p:t,d(t){t&&d(e),t&&d(o),t&&d(r)}}}function q(n){let e,o,r;function c(t,n){return t[1]?S:t[0]?O:L}let u=c(n),l=u(n);return{c(){e=f("h1"),e.textContent="File Sharing",o=m(),l.c(),r=p("")},m(t,n){s(t,e,n),s(t,o,n),l.m(t,n),s(t,r,n)},p(t,[n]){u===(u=c(t))&&l?l.p(t,n):(l.d(1),l=u(t),l&&(l.c(),l.m(r.parentNode,r)))},i:t,o:t,d(t){t&&d(e),t&&d(o),l.d(t),t&&d(r)}}}function B(t,n,e){let o=!1,r=!1;const c=document.URL;return[o,r,c,function(){e(0,o=!0),console.log("upload")},function(){e(1,r=!0)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),F(this,t,B,q,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
