(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{82546:function(e,a,s){Promise.resolve().then(s.bind(s,10795))},10795:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return N}});var r=s(57437),l=s(53648),t=s(54994),n=s(94042),i=s(21507),u=s(12765),d=s(57655),c=s(37782),o=s(95900),h=s(32449),f=s(19174),x=s(2265),y=s(42913),j=s(24033),v=s(94318),m=s(11925),g=s(222),p=s(46999),b=s(61718),w=s(69571),S=s(2913),C=s(39226),I=s(24086);let E=(0,I.ad)(C.Z);async function M(e,a){let s=(0,I.JU)(E,e,a),r=null,l=null;try{r=(await (0,I.QT)(s)).data()}catch(e){l=e}return{result:r,error:l}}let D=(0,I.ad)(C.Z);async function A(e,a,s){let r=null,l=null;try{let l=(0,I.JU)(D,e,a);r=await (0,I.r7)(l,s)}catch(e){l=e}return{result:r,error:l}}var P=s(53085);let R=(0,P.v0)(C.Z),q=(0,I.ad)(C.Z);async function B(e,a,s){let r=null;try{let l=await (0,P.e5)(R,e,a),t=l.user;try{await (0,I.oe)((0,I.JU)(q,s,t.uid));try{await (0,P.h8)(t)}catch(e){r=e}}catch(e){r=e}}catch(e){r=e}return{docResult:null,userResult:null,error:r}}function N(){let e=(0,j.useRouter)(),{user:a}=(0,y.Eu)();(0,x.useLayoutEffect)(()=>{null===a&&e.push("/register")}),(0,x.useEffect)(()=>{let e=async()=>{let{result:e,error:s}=await M("users",null==a?void 0:a.uid);if(s){console.error(s);return}D(e.name),R(e.mobile),N(e.email),k(e.dateOfBirth),T(e.age),L(e.gender),V(e.address),F(e.campus)};a&&e()},[a]);let s=async()=>{if(G===_)return;let{result:e,error:s}=await A("users",null==a?void 0:a.uid,{address:G});if(s){console.error(s);return}},[C,I]=(0,x.useState)(!1),[E,D]=(0,x.useState)(""),[P,R]=(0,x.useState)(""),[q,N]=(0,x.useState)(""),[Y,k]=(0,x.useState)(""),[O,T]=(0,x.useState)(""),[Z,L]=(0,x.useState)(""),[_,V]=(0,x.useState)(""),[U,F]=(0,x.useState)(""),[G,J]=(0,x.useState)(""),[K,W]=(0,x.useState)(""),[z,H]=(0,x.useState)(""),{isOpen:Q,onOpen:X,onOpenChange:$}=(0,v.q)();return(0,r.jsxs)("main",{className:"flex flex-col justify-center items-center h-[90vh]",children:[(0,r.jsxs)(t.w,{className:"p-2 m-2 w-[90%] max-w-md",children:[(0,r.jsxs)(n.u,{className:"flex justify-between items-center",children:["Profile",C?null:(0,r.jsx)(l.A,{variant:"flat",color:"default",onPress:()=>I(!C),children:"Edit"})]}),(0,r.jsxs)(i.G,{children:[(0,r.jsx)(d.Y,{variant:"faded",label:"Full name",isInvalid:!1,errorMessage:"",type:"text",value:E,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(d.Y,{variant:"faded",label:"Mobile",placeholder:"Enter your mobile number",isInvalid:!1,errorMessage:"",type:"tel",value:P,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(d.Y,{variant:"faded",label:"Email",placeholder:"Enter you email",isInvalid:!1,errorMessage:"",type:"email",value:q,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(d.Y,{variant:"faded",label:"DateOfBirth",isInvalid:!1,errorMessage:"",type:"date",value:Y,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(d.Y,{variant:"faded",label:"Age",isInvalid:!1,errorMessage:"",value:O,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(d.Y,{variant:"faded",label:"Gender",isInvalid:!1,errorMessage:"",value:Z,isDisabled:C}),(0,r.jsx)(m.q,{y:4}),(0,r.jsx)(c.Y,{variant:"faded",label:"Address",placeholder:"Enter your address",isInvalid:!1,errorMessage:"",type:"text",value:G||_,onValueChange:J,isReadOnly:!C,maxRows:5}),(0,r.jsx)(m.q,{y:4}),U?(0,r.jsx)(d.Y,{variant:"faded",label:"Campus",isInvalid:!1,errorMessage:"",value:U,isDisabled:C}):(0,r.jsxs)(o.d,{variant:"faded",label:"Campus",placeholder:"Select your campus",isInvalid:!1,errorMessage:"",selectedKey:U,isDisabled:!C,children:[(0,r.jsxs)(h.y,{title:"Bengaluru",children:[(0,r.jsx)(f.R,{children:"Marathahalli, Bengaluru"},"Marathahalli, Bengaluru"),(0,r.jsx)(f.R,{children:"BTM Layout, Bengaluru"},"BTM Layout, Bengaluru")]}),(0,r.jsx)(h.y,{title:"Chennai",children:(0,r.jsx)(f.R,{children:"Chennai"},"Chennai")}),(0,r.jsx)(h.y,{title:"Trichy",children:(0,r.jsx)(f.R,{children:"Trichy"},"Trichy")})]})]}),(0,r.jsx)(u.i,{children:C?(0,r.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,r.jsx)(l.A,{variant:"shadow",color:"primary",onPress:()=>{s(),I(!C)},fullWidth:!0,className:"m-1",children:"Save"}),(0,r.jsx)(l.A,{variant:"bordered",color:"secondary",onPress:()=>{J(""),I(!C)},fullWidth:!0,className:"m-1",children:"Cancel"})]}):null})]}),(0,r.jsx)(l.A,{variant:"light",color:"danger",onPress:X,children:"Delete user"}),(0,r.jsx)(g.R,{isOpen:Q,onOpenChange:$,children:(0,r.jsx)(p.A,{children:a=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.k,{children:"Are you sure you want to delete your user?"}),(0,r.jsxs)(w.I,{children:[(0,r.jsx)("p",{children:"Re-enter your password to confirm deletion"}),(0,r.jsx)(d.Y,{variant:"faded",color:"danger",label:"Password",isInvalid:z,errorMessage:z,type:"password",value:K,onValueChange:W,required:!0})]}),(0,r.jsxs)(S.R,{children:[(0,r.jsx)(l.A,{variant:"light",color:"danger",onPress:async()=>{let{result:a,error:s}=await B(q,K,"users");if(s){console.error(s);return}e.push("/login")},children:"Delete"}),(0,r.jsx)(l.A,{color:"primary",onPress:a,children:"Cancel"})]})]})})})]})}},42913:function(e,a,s){"use strict";s.d(a,{Eu:function(){return d},HD:function(){return c}});var r=s(57437),l=s(2265),t=s(53085),n=s(39226);let i=(0,t.v0)(n.Z),u=(0,l.createContext)({}),d=()=>(0,l.useContext)(u),c=e=>{let{children:a}=e,[s,n]=(0,l.useState)(null),[d,c]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let e=(0,t.Aj)(i,e=>{e?n(e):n(null),c(!1)});return()=>e()},[]),(0,r.jsx)(u.Provider,{value:{user:s},children:d?(0,r.jsx)("div",{className:"flex flex-col justify-center items-center h-screen",children:"Loading..."}):a})}},39226:function(e,a,s){"use strict";var r=s(20994);let l=0===(0,r.C6)().length?(0,r.ZF)({apiKey:"AIzaSyBCYdfofucqE9Cv4S4SLSgCbg-kqPELteU",authDomain:"lifehouse-church-bengaluru.firebaseapp.com",projectId:"lifehouse-church-bengaluru",storageBucket:"lifehouse-church-bengaluru.appspot.com",messagingSenderId:"4605710989",appId:"1:4605710989:web:c7705a169594ee407fc8c4",measurementId:"G-VDT2NP13VV"}):(0,r.C6)()[0];a.Z=l}},function(e){e.O(0,[487,358,924,710,193,672,552,716,917,638,971,472,744],function(){return e(e.s=82546)}),_N_E=e.O()}]);