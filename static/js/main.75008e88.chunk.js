(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/bb.dfca1fa5.png"},29:function(e,a,t){e.exports=t.p+"static/media/logo.3795f66d.png"},30:function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},32:function(e,a,t){e.exports=t(61)},37:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),s=(t(37),t(7)),i=t.n(s),m=t(9),u=t(3),o=t(10),E=t.n(o),d=t(29),p=t.n(d),v=function(){return r.a.createElement("header",{className:"center",style:{marginTop:"50px"}},r.a.createElement("img",{src:p.a,alt:"",width:"200",height:"120"}))},f=t(14),b=t.n(f),g=function(e){var a=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:b.a,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,"Season: ",a.season),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Title:"),a.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Episode No:")," ",a.episode),r.a.createElement("li",null,r.a.createElement("strong",null,"Air Date:")," ",a.air_date),r.a.createElement("li",null,r.a.createElement("strong",null,"Charaters:")," ",a.characters)))))},h=t(30),N=t.n(h),k=function(){return r.a.createElement("img",{src:N.a,width:"200",height:"200",alt:"Loading...",style:{display:"block",margin:"auto"}})},j=function(e){var a=e.items;return e.isLoading?r.a.createElement(k,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(g,{key:e.episode_id,item:e})})))};var O=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad");case 2:a=e.sent,console.log(a.data),d(a.data),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(j,{items:o,isLoading:t}))},w=t(11);var y=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-success"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(w.b,{className:"navbar-brand",to:"/"},"Breaking Bad"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{className:"nav-link active",to:"/episode"},"Episode")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{className:"nav-link active",to:"/death"},"Death")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{className:"nav-link active",to:"/quotes"},"Quotes"))))))},x=t(1),S=function(e){var a=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:a.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",a.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",a.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",a.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Appearance-No of Season:"),a.appearance.length),r.a.createElement("li",null,r.a.createElement("strong",null,"Season Appeared:"),a.appearance),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",a.status)))))},L=function(e){var a=e.items;return e.isLoading?r.a.createElement(k,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(S,{key:e.char_id,item:e})})))},B=function(e){var a=e.getQuery,t=Object(n.useState)(""),c=Object(u.a)(t,2),l=c[0],s=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters...",value:l,onChange:function(e){return t=e.target.value,s(t),void a(t);var t},autoFocus:!0})))},q=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),s=Object(u.a)(l,2),o=s[0],d=s[1],p=Object(n.useState)(""),f=Object(u.a)(p,2),b=f[0],g=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 2:a=e.sent,console.log(a.data),c(a.data),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(B,{getQuery:function(e){return g(e)}}),r.a.createElement(L,{items:t,isLoading:o}))},_=function(e){var a=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:b.a,alt:"",width:"50",height:"50",style:{display:"block"}})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.death),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Cause:")," ",a.cause),r.a.createElement("li",null,r.a.createElement("strong",null,"Responsible:")," ",a.responsible),r.a.createElement("li",null,r.a.createElement("strong",null,"Season:")," ",a.season),r.a.createElement("li",null,r.a.createElement("strong",null,"Episode:"),a.episode),r.a.createElement("li",null,r.a.createElement("strong",null,"Last Words:"),a.last_words)))))},A=function(e){var a=e.items;return e.isLoading?r.a.createElement(k,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement("section",null,r.a.createElement(_,{key:e.death_id,item:e}),r.a.createElement("hr",{style:{color:"red"}}))})))};var C=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://www.breakingbadapi.com/api/deaths");case 2:a=e.sent,console.log(a.data),d(a.data),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(A,{items:o,isLoading:t}))},Q=function(e){var a=e.item;return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("p",null,"Quote:"),r.a.createElement("div",{className:"container-quote"},a.quote)),r.a.createElement("div",null,r.a.createElement("p",null,"Author:"),r.a.createElement("div",{className:"container-quote"},a.author)))},F=function(e){var a=e.items;return e.isLoading?r.a.createElement(k,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(Q,{key:e.quote_id,item:e})})))};var D=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://www.breakingbadapi.com/api/quotes?series=Breaking+Bad");case 2:a=e.sent,console.log(a.data),d(a.data),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(F,{items:o,isLoading:t}))};var J=function(){return r.a.createElement(w.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"container"},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:q}),r.a.createElement(x.a,{exact:!0,path:"/episode",component:O}),r.a.createElement(x.a,{exact:!0,path:"/death",component:C}),r.a.createElement(x.a,{exact:!0,path:"/quotes",component:D})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.75008e88.chunk.js.map