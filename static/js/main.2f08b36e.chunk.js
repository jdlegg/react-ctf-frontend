(this.webpackJsonpctf_frontend=this.webpackJsonpctf_frontend||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,o,u,j,h=n(0),l=n(33),p=n.n(l),b=(n(43),n(9)),f=n(5),d=n(3),O=n(2),x=n.n(O),m=n(4),g=n(34),v=function(e){try{return Object(g.a)(e).exp>Date.now()/1e3}catch(t){return!1}},y=function(){var e=localStorage.getItem("access_token");return null!==e&&e},k=function(){var e="";try{e=localStorage.getItem("refresh_token")}catch(t){return console.log(t),!1}return e},w=n(1),S=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://boiling-thicket-74024.herokuapp.com/api/user/create/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://boiling-thicket-74024.herokuapp.com/api/token/obtain/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=y(),n=k(),!1!==t&&!1!==n){e.next=4;break}return e.abrupt("return",!1);case 4:return console.log(n),e.next=7,fetch("https://boiling-thicket-74024.herokuapp.com/api/blacklist/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+t},method:"POST",body:JSON.stringify({refresh:n})});case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("RefreshToken"),t=y(),n=k(),!1!==t&&!1!==n){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,fetch("https://boiling-thicket-74024.herokuapp.com/api/token/refresh/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+t},method:"POST",body:JSON.stringify({refresh:n})});case 7:if(200!==(r=e.sent).status){e.next=14;break}return e.next=11,r.json();case 11:a=e.sent,localStorage.setItem("access_token",a.access),localStorage.setItem("refresh_token",a.refresh);case 14:return e.abrupt("return",r.data);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(t=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(t)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/"});t=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/api/hello/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+t},method:"GET"});case 6:return n=e.sent,e.abrupt("return",n.text());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://boiling-thicket-74024.herokuapp.com/api/unprotected/",{headers:{"Content-Type":"application/json"},method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.text());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(t=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(t)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/"});t=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/scoring/highscore",{headers:{"Content-Type":"application/json",Authorization:"JWT "+t},method:"GET"});case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(t=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(t)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/"});t=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/scoring/ind_score",{headers:{"Content-Type":"application/json",Authorization:"JWT "+t},method:"GET"});case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(n=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(n)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/"});n=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/scoring/score_flag/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+n},method:"POST",body:JSON.stringify(t)});case 6:return r=e.sent,e.abrupt("return",r.text());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(n=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(n)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/login"});n=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/scoring/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+n},method:"POST",body:JSON.stringify(t)});case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(n=y())){e.next=3;break}return e.abrupt("return",!1);case 3:return v(n)||C().then((function(e){if(!1===e)return Object(w.jsx)(d.a,{to:"/"});n=y()})),e.next=6,fetch("https://boiling-thicket-74024.herokuapp.com/scoring/verify/"+t,{headers:{"Content-Type":"application/json",Authorization:"JWT "+n},method:"GET"});case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=Object(h.useState)([]),n=Object(f.a)(t,2),r=n[0],a=n[1];return Object(h.useEffect)((function(){N().then(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),console.log(r),Object(w.jsx)("div",{className:"container",children:r})},z=function(e){var t=Object(h.useState)(""),n=Object(f.a)(t,2),r=n[0],a=n[1],c=Object(h.useState)(""),s=Object(f.a)(c,2),i=s[0],o=s[1],u=Object(h.useState)(!1),j=Object(f.a)(u,2),l=j[0],p=j[1],b=Object(h.useState)(""),O=Object(f.a)(b,2),g=O[0],v=O[1],y=function(e){"username"===e.target.name?a(e.target.value):"password"===e.target.name&&o(e.target.value)};return l?Object(w.jsx)(d.a,{to:"/challenges"}):Object(w.jsx)("div",{children:Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),A({username:r,password:i}).then(function(){var t=Object(m.a)(x.a.mark((function t(n){var r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200===n.status){t.next=7;break}return t.next=3,n.json();case 3:r=t.sent,v(r.detail),t.next=16;break;case 7:return t.next=9,n.json();case 9:a=t.sent,console.log("Token: ",a),localStorage.setItem("access_token",a.access),localStorage.setItem("refresh_token",a.refresh),e.setIsAuth(!0),e.setScore(Object(w.jsx)(P,{})),p(!0);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:[Object(w.jsxs)("label",{children:["Username: \xa0",Object(w.jsx)("input",{name:"username",type:"text",value:r,onChange:y,style:{width:"120px",height:"30px"}}),"\xa0"]}),Object(w.jsxs)("label",{children:["Password: \xa0",Object(w.jsx)("input",{name:"password",type:"password",value:i,onChange:y,style:{width:"120px",height:"30px"}}),"\xa0"]}),Object(w.jsx)("input",{type:"submit",value:"Login"}),g&&Object(w.jsxs)("p",{className:"error",style:{color:"#000000",fontWeight:"Bold"},children:[" ",g," "]})]})})},D=n(18),G=function(){var e=Object(h.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(h.useState)(""),c=Object(f.a)(a,2),s=c[0],i=c[1],o=Object(h.useState)(""),u=Object(f.a)(o,2),j=u[0],l=u[1],p=Object(h.useState)(!1),b=Object(f.a)(p,2),O=b[0],g=b[1],v=Object(h.useState)([]),y=Object(f.a)(v,2),k=y[0],A=y[1],T=function(e){"username"===e.target.name?r(e.target.value):"password"===e.target.name?i(e.target.value):"email"===e.target.name&&l(e.target.value)};return O?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsxs)("div",{children:["Signup",Object(w.jsxs)("form",{onSubmit:function(e){A([]),e.preventDefault(),S({username:n,password:s,email:j}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>201)){e.next=9;break}return e.next=3,t.json();case 3:(n=e.sent).username&&A((function(e){return[].concat(Object(D.a)(e),["Username Error: "+n.username[0]])})),n.email&&A((function(e){return[].concat(Object(D.a)(e),["Email Error: "+n.email[0]])})),n.password&&A((function(e){return[].concat(Object(D.a)(e),["Password Error: "+n.password[0]])})),e.next=10;break;case 9:g(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(w.jsxs)("label",{children:["Username:",Object(w.jsx)("input",{name:"username",type:"text",value:n,onChange:T})]}),Object(w.jsxs)("label",{children:["Password:",Object(w.jsx)("input",{name:"password",type:"password",value:s,onChange:T})]}),Object(w.jsxs)("label",{children:["Email:",Object(w.jsx)("input",{name:"email",type:"email",value:j,onChange:T})]}),Object(w.jsx)("input",{type:"submit",value:"Submit"}),k&&Object(w.jsxs)("ul",{className:"error",children:[" ",k.map((function(e){return Object(w.jsx)("li",{children:e})}))," "]})]})]})},B=function(e){var t=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{T().then((function(e){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===localStorage.getItem("access_token")?Object(w.jsx)("div",{children:Object(w.jsx)("h2",{children:" Something went wrong!!! Maybe you are not logged in!!! "})}):(t(),e.setIsAuth(!1),Object(w.jsx)(d.a,{to:"/"}))},L=function(){var e=Object(h.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(h.useEffect)((function(){F().then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"Weclome to the Worst CTF"}),Object(w.jsxs)("p",{children:["The test pull of unportected data: ",n]})]})},R=function(e){var t=Object(h.useState)(),n=Object(f.a)(t,2),r=n[0],a=n[1];return Object(h.useEffect)((function(){I().then((function(t){if(!1===t)return e.setIsAuth(!1),Object(w.jsx)(d.a,{to:"/login/"});a(t)}))}),[]),Object(w.jsxs)("div",{children:["Protected",Object(w.jsx)("p",{children:"Output:"}),r]})},U=n(15),H=n(38),M=n(17),q=n(16),K=q.a.nav(r||(r=Object(U.a)(["\n  background: #C36653;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),Q=Object(q.a)(M.b)(a||(a=Object(U.a)(["\n  color: #FFFFFF;\n  font-family: sans-serif;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n    font-weight: bold;\n  }\n"]))),V=Object(q.a)(H.a)(c||(c=Object(U.a)(["\n  display: none;\n  color: #808080;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),X=q.a.div(s||(s=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Y=q.a.nav(i||(i=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Z=Object(q.a)(M.b)(o||(o=Object(U.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),$=q.a.nav(u||(u=Object(U.a)(["\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  }\n"]))),ee=q.a.nav(j||(j=Object(U.a)(["\n  color: #FFFFFF;\n  font-family: sans-serif;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  }\n"]))),te=function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(K,{children:[Object(w.jsx)(V,{}),Object(w.jsxs)(X,{children:[!e.isAuth&&Object(w.jsx)(Q,{to:"/signup",activeStyle:!0,children:" Signup "}),e.isAuth&&Object(w.jsx)(Q,{to:"/highscore",activeStyle:!0,children:"High Score "}),e.isAuth&&Object(w.jsx)(Q,{to:"/challenges",activeStyle:!0,children:"Challenges "}),e.isAuth&&Object(w.jsx)(Q,{to:"/register",activeStyle:!0,children:"Register Challenge "})]}),Object(w.jsx)(X,{children:Object(w.jsxs)(Y,{children:[e.isAuth&&Object(w.jsxs)($,{children:["Score: ",e.score]}),e.isAuth?Object(w.jsx)(Z,{to:"/logout",children:"Logout"}):Object(w.jsx)(ee,{children:Object(w.jsx)(z,{setScore:e.setScore,setIsAuth:e.setIsAuth})})]})})]})})},ne=n(21),re=n(58),ae=function(){var e,t=Object(h.useState)([]),n=Object(f.a)(t,2),r=n[0],a=n[1];return Object(h.useEffect)((function(){E().then(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)(re.a,(e={variant:"default",style:{width:"50%",margin:"20px auto"},striped:!0,borderd:!0,hover:!0,size:"sm"},Object(ne.a)(e,"variant","light"),Object(ne.a)(e,"children",[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Username"}),Object(w.jsx)("th",{children:"Points"})]})}),Object(w.jsx)("tbody",{children:r.map((function(e){var t=e.username,n=e.points;return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t}),Object(w.jsx)("td",{children:n})]})}))})]),e))})},ce=n(62),se=function(){var e=Object(h.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(h.useState)([]),c=Object(f.a)(a,2),s=c[0],i=c[1],o=Object(h.useState)(!1),u=Object(f.a)(o,2),j=u[0],l=u[1],p=Object(d.g)();Object(h.useEffect)((function(){_("WebApp1").then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status>201?l(!1):l(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(w.jsxs)("div",{children:["Challenge 1",Object(w.jsx)("p",{hidden:!0,children:"FLAG: test"}),Object(w.jsxs)("form",{onSubmit:function(e){i([]),e.preventDefault(),W({name:"WebApp1",flag:n}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("insdie scoreFlag"),!(t.status>201)){e.next=9;break}return console.log("inside Response > 200 Scoring"),e.next=5,t.json();case 5:(n=e.sent).flag&&i((function(e){return[].concat(Object(D.a)(e),["Flag Error: "+n.flag[0]])})),e.next=10;break;case 9:_("WebApp1").then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status>201?l(!1):l(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(w.jsx)("label",{children:j?Object(w.jsx)("div",{children:"Solved!"}):Object(w.jsxs)("p",{children:["Flag: ",Object(w.jsx)("input",{name:"flag",type:"text",value:n,onChange:function(e){"flag"===e.target.name&&r(e.target.value)}})," "]})}),j?Object(w.jsx)("p",{children:Object(w.jsx)(ce.a,{onClick:function(){return p.push("/challenges")},variant:"primary",children:"Return"})}):Object(w.jsx)("input",{type:"submit",value:"Submit"}),s&&Object(w.jsxs)("ul",{className:"error",children:[" ",s.map((function(e){return Object(w.jsx)("li",{children:e})}))," "]})]})]})},ie=n(59),oe=n(60),ue=n(61),je=(n(32),function(e){var t=Object(d.g)();return Object(w.jsx)("div",{className:"container",style:{marginTop:"20px"},children:Object(w.jsxs)(ie.a,{children:[Object(w.jsx)(oe.a,{xs:6,md:6,children:Object(w.jsx)(ue.a,{style:{width:"18rem"},children:Object(w.jsxs)(ue.a.Body,{children:[Object(w.jsx)(ue.a.Title,{children:"Web Application 1"}),Object(w.jsx)(ue.a.Text,{children:"Can you find the flag?"}),Object(w.jsx)(ce.a,{onClick:function(){return t.push("/challenge1")},variant:"primary",children:"Web App 1"})]})})}),Object(w.jsx)(oe.a,{xs:6,md:6,children:Object(w.jsx)(ue.a,{style:{width:"18rem"},children:Object(w.jsxs)(ue.a.Body,{children:[Object(w.jsx)(ue.a.Title,{children:"Web Application 2"}),Object(w.jsx)(ue.a.Text,{children:"Onto the next level..."}),Object(w.jsx)(ce.a,{onClick:function(){return t.push("/challenge1")},variant:"primary",children:"Web App 2"})]})})})]})})}),he=function(){var e=Object(h.useState)(""),t=Object(f.a)(e,2),n=(t[0],t[1],Object(h.useState)(!1)),r=Object(f.a)(n,2),a=r[0],c=r[1],s=Object(h.useState)([]),i=Object(f.a)(s,2),o=i[0],u=i[1];return a?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsxs)("div",{children:["Register for Challenges",Object(w.jsxs)("form",{onSubmit:function(e){u([]),e.preventDefault();J({flags:[]}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>201)){e.next=5;break}return e.next=3,t.json();case 3:(n=e.sent).flag?u((function(e){return[].concat(Object(D.a)(e),["Flag Error: "+n.flag[0]])})):c(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(w.jsx)("label",{children:"Current Challenges"}),Object(w.jsx)("input",{type:"submit",value:"Submit"}),o&&Object(w.jsxs)("ul",{className:"error",children:[" ",o.map((function(e){return Object(w.jsx)("li",{children:e})}))," "]})]})]})},le=Object(h.createContext)();var pe=function(){var e=Object(h.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(h.useState)(),c=Object(f.a)(a,2),s=c[0],i=c[1];return Object(h.useEffect)((function(){localStorage.getItem("access_token")&&(r(!0),i(Object(w.jsx)(P,{})))}),[]),Object(w.jsx)(le.Provider,{value:{},children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(te,{setIsAuth:r,isAuth:n,score:s,setScore:i}),Object(w.jsxs)(d.d,{children:[Object(w.jsx)(d.b,{exact:!0,path:"/",component:L}),Object(w.jsx)(d.b,{exact:!0,path:"/unprotected",component:L}),Object(w.jsx)(d.b,{exact:!0,path:"/login",render:function(e){return Object(w.jsx)(z,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n,score:s,setScore:i}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/signup/",component:G}),Object(w.jsx)(d.b,{exact:!0,path:"/logout",render:function(e){return Object(w.jsx)(B,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/protected",render:function(e){return Object(w.jsx)(R,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/challenges",render:function(e){return Object(w.jsx)(je,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/challenge1",render:function(e){return Object(w.jsx)(se,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/register",render:function(e){return Object(w.jsx)(he,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/highscore",render:function(e){return Object(w.jsx)(ae,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}}),Object(w.jsx)(d.b,{exact:!0,path:"/ind_score",render:function(e){return Object(w.jsx)(P,Object(b.a)(Object(b.a)({},e),{},{setIsAuth:r,isAuth:n}))}})]})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(56);p.a.render(Object(w.jsx)(M.a,{children:Object(w.jsx)(pe,{})}),document.getElementById("root")),be()}},[[57,1,2]]]);
//# sourceMappingURL=main.2f08b36e.chunk.js.map