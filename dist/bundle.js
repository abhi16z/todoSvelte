var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function d(t){return null==t?"":t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let m;function g(t){m=t}function $(){if(!m)throw new Error("Function called outside component initialization");return m}const v=[],b=[],y=[],_=[],x=Promise.resolve();let k=!1;function w(t){y.push(t)}function C(){const t=new Set;do{for(;v.length;){const t=v.shift();g(t),D(t.$$)}for(;b.length;)b.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];t.has(n)||(n(),t.add(n))}y.length=0}while(v.length);for(;_.length;)_.pop()();k=!1}function D(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(w))}const E=new Set;function S(t,e){t&&t.i&&(E.delete(t),t.i(e))}function T(t,e){t.d(1),e.delete(t.key)}function A(t,e){t.$$.dirty||(v.push(t),k||(k=!0,x.then(C)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function M(r,d,s,l,u,a){const i=m;g(r);const f=d.props||{},p=r.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:null};let h=!1;var $;p.ctx=s?s(r,f,(t,e)=>{p.ctx&&u(p.ctx[t],p.ctx[t]=e)&&(p.bound[t]&&p.bound[t](e),h&&A(r,t))}):f,p.update(),h=!0,o(p.before_update),p.fragment=l(p.ctx),d.target&&(d.hydrate?p.fragment.l(($=d.target,Array.from($.childNodes))):p.fragment.c(),d.intro&&S(r.$$.fragment),function(t,n,r){const{fragment:d,on_mount:s,on_destroy:l,after_update:u}=t.$$;d.m(n,r),w(()=>{const n=s.map(e).filter(c);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(w)}(r,d.target,d.anchor),C()),g(i)}class N{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const O=t=>e=>localStorage.setItem(t,JSON.stringify(e)),j=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):[]},I=t=>new Date(t);function z(t,e,n){const o=Object.create(t);return o.todo=e[n],o.each_value=e,o.index=n,o}function J(t,e){var n,o,c,r,m,g,$,v=e.todo.desc+"";function b(){e.input_change_handler.call(c,e)}return{key:t,first:null,c(){n=a("div"),o=a("label"),c=a("input"),r=f(),m=i(v),h(c,"type","checkbox"),h(c,"class","svelte-nglbme"),h(n,"class",g=d(e.todo.completed?"todoContainer completed":"todoContainer pending")+" svelte-nglbme"),$=p(c,"change",b),this.first=n},m(t,d){l(t,n,d),s(n,o),s(o,c),c.checked=e.todo.completed,s(o,r),s(o,m)},p(t,o){var r,s;e=o,t.todos&&(c.checked=e.todo.completed),t.todos&&v!==(v=e.todo.desc+"")&&(s=""+(s=v),(r=m).data!==s&&(r.data=s)),t.todos&&g!==(g=d(e.todo.completed?"todoContainer completed":"todoContainer pending")+" svelte-nglbme")&&h(n,"class",g)},d(t){t&&u(n),$()}}}function L(t){var e,n,c,r,d;return{c(){e=a("div"),(n=a("button")).textContent="Clear completed",c=f(),(r=a("button")).textContent="Group Items",h(n,"class","svelte-nglbme"),h(r,"class","svelte-nglbme"),d=[p(n,"click",t.clearCompleted),p(r,"click",t.groupTodo)]},m(t,o){l(t,e,o),s(e,n),s(e,c),s(e,r)},d(t){t&&u(e),o(d)}}}function q(e){var n,c,r,d,i,m,g,$,v=[],b=new Map,y=e.todos;const _=t=>I(t.todo.creationTime);for(var x=0;x<y.length;x+=1){let t=z(e,y,x),n=_(t);b.set(n,v[x]=J(n,t))}var k=e.todos.length>0&&L(e);return{c(){for(n=a("div"),c=a("div"),r=a("input"),d=f(),(i=a("button")).textContent="Add Todo",m=f(),x=0;x<v.length;x+=1)v[x].c();g=f(),k&&k.c(),h(r,"placeholder","Enter todo description"),h(r,"class","svelte-nglbme"),h(i,"class","svelte-nglbme"),h(n,"class","todo svelte-nglbme"),$=[p(r,"input",e.input_input_handler),p(i,"click",e.onAddTodo)]},m(t,o){for(l(t,n,o),s(n,c),s(c,r),r.value=e.todoDesc,s(c,d),s(c,i),s(n,m),x=0;x<v.length;x+=1)v[x].m(n,null);s(n,g),k&&k.m(n,null)},p(t,e){t.todoDesc&&r.value!==e.todoDesc&&(r.value=e.todoDesc);const o=e.todos;v=function(t,e,n,o,c,r,d,s,l,u,a,i){let f=t.length,p=r.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,v=new Map;for(h=p;h--;){const t=i(c,r,h),s=n(t);let l=d.get(s);l?o&&l.p(e,t):(l=u(s,t)).c(),$.set(s,g[h]=l),s in m&&v.set(s,Math.abs(h-m[s]))}const b=new Set,y=new Set;function _(t){S(t,1),t.m(s,a),d.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],o=e.key,c=n.key;e===n?(a=e.first,f--,p--):$.has(c)?!d.has(o)||b.has(o)?_(e):y.has(c)?f--:v.get(o)>v.get(c)?(y.add(o),_(e)):(b.add(c),f--):(l(n,d),f--)}for(;f--;){const e=t[f];$.has(e.key)||l(e,d)}for(;p;)_(g[p-1]);return g}(v,t,_,1,e,o,b,n,T,J,g,z),e.todos.length>0?k||((k=L(e)).c(),k.m(n,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){for(t&&u(n),x=0;x<v.length;x+=1)v[x].d();k&&k.d(),o($)}}}const B="xyz.a16.todosvelte.todo";function F(t,e,n){const o=O(B);let c=[],r="";var d;return d=(()=>{const t=j(B);t&&n("todos",c=t)}),$().$$.on_mount.push(d),function(t){$().$$.after_update.push(t)}(()=>console.log("set storage",c)||o(c)),{todos:c,todoDesc:r,onAddTodo:function(){if(!r)return;const t=new Date;n("todos",c=[...c,{creationTime:t,desc:r,completed:!1}]),n("todoDesc",r="")},clearCompleted:function(){n("todos",c=c.filter(t=>!t.completed))},groupTodo:function(){n("todos",c=c.sort((t,e)=>t.completed-e.completed)),console.log("sordting",c)},input_input_handler:function(){r=this.value,n("todoDesc",r)},input_change_handler:function({todo:t,each_value:e,index:o}){e[o].completed=this.checked,n("todos",c)}}}return new class extends N{constructor(t){super(),M(this,t,F,q,r,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
