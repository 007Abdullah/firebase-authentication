(this["webpackJsonpfirebase-authentication"]=this["webpackJsonpfirebase-authentication"]||[]).push([[0],{52:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(19),s=a.n(n),i=a(15),j=a.n(i),o=a(18),l=a(8),u=a(58),d=a(56),b=a(57),p=a(54),O=a(28),h=(a(43),O.a.initializeApp({apiKey:"AIzaSyBd2ZMjvIK--J4FZ1xs5k2DMw0iw3vdJ70",authDomain:"auth-development-188a9.firebaseapp.com",databaseURL:"https://auth-development-188a9-default-rtdb.firebaseio.com",projectId:"auth-development-188a9",storageBucket:"auth-development-188a9.appspot.com",messagingSenderId:"545846359871",appId:"1:545846359871:web:b6fd2f73c9bca32dfc058a"})),x=h.auth(),m=a(1),f=c.a.createContext();function v(){return Object(r.useContext)(f)}function w(e){var t=e.children,a=Object(r.useState)(),c=Object(l.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(!0),j=Object(l.a)(i,2),o=j[0],u=j[1];Object(r.useEffect)((function(){return x.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var d={currentUser:n,signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},login:function(e,t){return x.signInWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},restPassword:function(e){x.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(m.jsx)(f.Provider,{value:d,children:!o&&t})}var g=a(7),y=a(10);function S(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=v(),n=c.signup,s=c.currentUser,i=Object(r.useState)(""),O=Object(l.a)(i,2),h=O[0],x=O[1],f=Object(r.useState)(!1),w=Object(l.a)(f,2),S=w[0],P=w[1],N=Object(g.g)();function k(){return(k=Object(o.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",x("Password do Not Match"));case 3:return r.prev=3,x(""),P(!0),r.next=8,n(e.current.value,t.current.value);case 8:N.push("/login"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),x("Failed to create an account");case 14:P(!1);case 15:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),s&&s.email,h&&Object(m.jsx)(d.a,{variant:"danger",children:h}),Object(m.jsxs)(b.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(m.jsx)(b.a.Label,{children:"Password Confirm"}),Object(m.jsx)(b.a.Control,{type:"password",ref:a,required:!0})]}),Object(m.jsx)(p.a,{disabled:S,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already Have an Account? ",Object(m.jsx)(y.b,{to:"/login",children:"Log In"})]})]})}var P=a(55);function N(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=v(),s=n.currentUser,i=n.logout,b=Object(g.g)();function O(){return(O=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(m.jsx)(d.a,{variant:"danger",children:a}),Object(m.jsx)("strong",{children:"Email: "}),s.email,Object(m.jsx)(y.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(p.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Logout"})})]})}function k(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=v().login,c=Object(r.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),x=h[0],f=h[1],w=Object(g.g)();function S(){return(S=Object(o.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,i(""),f(!0),r.next=6,a(e.current.value,t.current.value);case 6:w.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),i("Failed to Sign in");case 12:f(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Login"}),s&&Object(m.jsx)(d.a,{variant:"danger",children:s}),Object(m.jsxs)(b.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsx)(p.a,{disabled:x,className:"w-100",type:"submit",children:"Login In"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(y.b,{to:"/forgot-password",children:"Forget Password?"})})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(y.b,{to:"/signup",children:"Sign up"})]})]})}var C=a(23),L=a(37);function F(e){var t=e.component,a=Object(L.a)(e,["component"]),r=v().currentUser;return Object(m.jsx)(g.b,Object(C.a)(Object(C.a)({},a),{},{render:function(e){return r?Object(m.jsx)(t,Object(C.a)({},e)):Object(m.jsx)(g.a,{to:"/login"})}}))}function R(){var e=Object(r.useRef)(),t=v().restPassword,a=Object(r.useState)(""),c=Object(l.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(""),O=Object(l.a)(i,2),h=O[0],x=O[1],f=Object(r.useState)(!1),w=Object(l.a)(f,2),g=w[0],S=w[1];function P(){return(P=Object(o.a)(j.a.mark((function a(r){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,x("Check Your Inbox For Further Instructions"),s(""),S(!0),a.next=7,t(e.current.value);case 7:x("Check Your Inbox For Further Instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to Reset Password");case 13:S(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(m.jsx)(d.a,{variant:"danger",children:n}),h&&Object(m.jsx)(d.a,{variant:"success",children:h}),Object(m.jsxs)(b.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsx)(p.a,{disabled:g,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(y.b,{to:"/login",children:"Login"})})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(y.b,{to:"/signup",children:"Sign up"})]})]})}function E(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=v(),n=c.currentUser,s=c.updatePassword,i=c.updateEmail,j=Object(r.useState)(""),o=Object(l.a)(j,2),O=o[0],h=o[1],x=Object(r.useState)(!1),f=Object(l.a)(x,2),w=f[0],S=f[1],P=Object(g.g)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),O&&Object(m.jsx)(d.a,{variant:"danger",children:O}),Object(m.jsxs)(b.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return h("Password do Not Match");var c=[];S(!0),h(""),e.current.value!==n.email&&c.push(i(e.current.value)),t.current.value&&c.push(s(t.current.value)),Promise.all(c).then((function(){P.push("/")})).catch((function(){h("Failed To Update Account")})).finally((function(){S(!1)}))},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,defaultValue:n.email,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(m.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(m.jsx)(b.a.Label,{children:"Password Confirm"}),Object(m.jsx)(b.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(m.jsx)(p.a,{disabled:w,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(y.b,{to:"/",children:"Cancel"})})]})}var I=function(){return Object(m.jsx)(P.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(m.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(m.jsx)(y.a,{children:Object(m.jsx)(w,{children:Object(m.jsxs)(g.d,{children:[Object(m.jsx)(F,{exact:!0,path:"/",component:N}),Object(m.jsx)(F,{path:"/update-profile",component:E}),Object(m.jsx)(g.b,{path:"/signup",component:S}),Object(m.jsx)(g.b,{path:"/login",component:k}),Object(m.jsx)(g.b,{path:"/forgot-password",component:R})]})})})})})};a(51);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ec4b8f6f.chunk.js.map