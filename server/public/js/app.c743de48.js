(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)c=s[l],o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Lastest Posts")]),n("div",[n("label",{attrs:{for:"create-post"}},[e._v("Say Something....")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"create a post"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{on:{click:e.createPost}},[e._v("Post!")])]),n("hr"),e.error?n("p",[e._v(e._s(e.error))]):e._e(),n("div",e._l(e.posts,function(t,r){return n("div",{key:t.text,attrs:{item:t,index:r},on:{dblclick:function(n){return e.deletePost(t.text)}}},[e._v("\n    "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())+"\n    "),n("p",[e._v(e._s(t.text))])])}),0)])},s=[],u=(n("96cf"),n("3b8d")),i=n("cebc"),p=n("d225"),l=n("b0b4"),f=n("bc3a"),d=n.n(f),v="api/posts/",h=function(){function e(){Object(p["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(v);case 3:r=e.sent,o=r.data,t(o.map(function(e){return Object(i["a"])({},e,{createdAt:new Date(e.createdAt)})})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return d.a.post(v,{text:e})}},{key:"deletePost",value:function(e){return console.log("".concat(v).concat(e)),d.a.delete("".concat(v).concat(e))}}]),e}(),m=h,g={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getPosts();case 3:this.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{createPost:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.insertPost(this.text);case 2:return e.next=4,m.getPosts();case 4:this.posts=e.sent;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deletePost:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,m.deletePost(t);case 3:return e.next=5,m.getPosts();case 5:this.posts=e.sent;case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},b=g,x=(n("86ed"),n("2877")),w=Object(x["a"])(b,c,s,!1,null,"355b5cfe",null),y=w.exports,P={name:"app",components:{PostComponent:y}},_=P,O=(n("034f"),Object(x["a"])(_,o,a,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,n){},"86ed":function(e,t,n){"use strict";var r=n("e47c"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e47c:function(e,t,n){}});
//# sourceMappingURL=app.c743de48.js.map