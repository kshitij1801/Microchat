(this.webpackJsonpmicrochat=this.webpackJsonpmicrochat||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),o=(a(60),a(23)),u=a(4),l=a(17),s=a(16),m=a.n(s),p=(a(63),m.a.initializeApp({apiKey:"AIzaSyBxYrBPBvncgg6XLMCRbb9xCvdVeAUl1MM",authDomain:"microchat-576ce.firebaseapp.com",projectId:"microchat-576ce",storageBucket:"microchat-576ce.appspot.com",messagingSenderId:"549983730027",appId:"1:549983730027:web:4f5896935fea270056b42e"}).auth()),h=c.a.createContext();function f(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(),m=Object(l.a)(s,2),f=m[0],d=m[1],b=Object(u.f)();Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){d(e),o(!1),b.push("/chats")}))}),[f,b]);var v={user:f};return c.a.createElement(h.Provider,{value:v},!i&&t)}var d=a(18),b=a.n(d),v=a(33),g=a(3),E=a.n(g),j=a(54);function k(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],i=a[1],o=Object(n.useContext)(h).user,s=Object(u.f)();function m(){return(m=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(v.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!e.current){if(e.current=!0,!o||null===o)return void s.push("/");E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"539fb6f3-b37c-4487-b008-efa73e792614","user-name":o.email,"user-secret":o.uid}}).then((function(){return i(!1)})).catch((function(e){var t=new FormData;t.append("email",o.email),t.append("username",o.email),t.append("secret",o.uid),function(e){return f.apply(this,arguments)}(o.photoURL).then((function(e){t.append("avatar",e,e.name),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"9ae3862f-5f7d-42f2-b68b-837474b50890"}}).then((function(){return i(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[o,s]),!o||r?c.a.createElement("div",null):c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"MicroChat"),c.a.createElement("div",{className:"video"},c.a.createElement("a",{href:"https://microchat-576ce.herokuapp.com/",target:"_blank"},"Start an instant meeting")),c.a.createElement("div",{onClick:function(){return m.apply(this,arguments)},className:"logout-tab"},"Logout")),c.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"539fb6f3-b37c-4487-b008-efa73e792614",userName:o.email,userSecret:o.uid}))}var O=a(118),w=a(119);function x(){return c.a.createElement("div",{class:"container",onclick:"onclick"},c.a.createElement("div",{class:"top"}),c.a.createElement("div",{class:"bottom"}),c.a.createElement("div",{class:"center"},c.a.createElement("h2",null,"Welcome to MicroChat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return p.signInWithRedirect(new m.a.auth.GoogleAuthProvider)}},c.a.createElement(O.a,null)," Sign In with Google"),c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return p.signInWithRedirect(new m.a.auth.FacebookAuthProvider)}},c.a.createElement(w.a,null)," Sign In with Facebook"),c.a.createElement("h2",null,"\xa0")))}var y=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(o.a,null,c.a.createElement(f,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/chats",component:k}),c.a.createElement(u.a,{path:"/",component:x})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.2a3bb53e.chunk.js.map