_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([["pages/posts/related"],{"0l76":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return j}));n("nKUr");var o=n("q1tI"),c=n("/MKj"),r=n("1zst"),u=n("ecW4"),s=n("kduo"),d=n("J7m/"),l=n("p+NB"),i=n("YFqc"),f=n.n(i),b=n("gdfu"),a=n("AeFk"),j=!0;t.default=function(){var e=Object(c.useDispatch)(),t=(Object(c.useSelector)((function(e){var t;return null===(t=e.user.me)||void 0===t?void 0:t.id})),Object(c.useSelector)((function(e){return e.post.mainPosts}))),n=Object(c.useSelector)((function(e){return e.post.hasMorePosts})),i=Object(c.useSelector)((function(e){return e.post.loadPostsLoading})),j=(Object(c.useSelector)((function(e){return e.post.loadPostsDone})),Object(c.useSelector)((function(e){return e.post.reportPostDone}))),p=Object(c.useSelector)((function(e){return e.post.reportPostError})),O=Object(c.useSelector)((function(e){return e.post.retweetError})),m=Object(c.useSelector)((function(e){return e.user.me}));return Object(o.useEffect)((function(){j&&b.message.success("\uc2e0\uace0\uac00 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ube60\ub978 \uc2dc\uc77c \ub0b4\ub85c \uc870\uce58\ud558\uaca0\uc2b5\ub2c8\ub2e4.",5),p&&b.message.error(p,5)}),[j,p]),Object(o.useEffect)((function(){O&&alert(O)}),[O]),Object(o.useEffect)((function(){function o(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&n&&!i){var o,c=null===(o=t[t.length-1])||void 0===o?void 0:o.id;e({type:l.LOAD_RELATED_POSTS_REQUEST,lastId:c})}}return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[t,n,i]),Object(a.jsx)(r.default,null,m&&m.id&&Object(a.jsx)(b.Button,null,Object(a.jsx)(f.a,{href:"/"},Object(a.jsx)("a",null,"\uc804\uccb4 \uac8c\uc2dc\uae00 \ubcf4\uae30"))),m&&m.id&&Object(a.jsx)(d.default,null),m&&Object(a.jsx)(u.default,null),null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(s.default,{key:e.id,post:e})})))}},jfgm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/related",function(){return n("0l76")}])}},[["jfgm","webpack","framework","75fc9c18","commons","b6451bfa71415e1eb6b699247070fee6c4d97f38","6b7903cd2497917111f687055581f790035a2aa9","bd2169d2b71ae7498bb40438be78bb53de033662","9a70cb3a30bde66cd08eb219dd57232e43a96f2a","59d79414bdd89ab0222d264772cc45f5d7457b8c"]]]);