(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t),c.d(t,"store",(function(){return re}));var i=c(0),n=c(11),r=c.n(n),s=c(16),j=c(41),l=c(33),a=c(63),d=c(37),b="SIGN_IN",h="SIGN_OUT",O={users:{email:"",isSignedIn:!1,uid:"",role:"",username:""}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.users,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),t.payload);case h:return Object(d.a)({},t.payload);default:return e}},x=c(67);var u=c(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=c(28),f=c(18),v=(c(48),c(2));c(85);var g=function(){return Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{children:Object(v.jsx)("img",{src:"./images/logo.png",alt:"",id:"link-top"})}),Object(v.jsx)("div",{id:"code",children:"\u91d1\u878d\u6a5f\u95a2\u30b3\u30fc\u30c9:0917"}),Object(v.jsxs)("div",{id:"font-size",children:[Object(v.jsx)("div",{id:"moji-size",children:"\u6587\u5b57\u30b5\u30a4\u30ba"}),Object(v.jsxs)("div",{id:"syou",children:[Object(v.jsx)("img",{src:"./images/fontsize_s.png",alt:""})," "]}),Object(v.jsxs)("div",{id:"tyuu",children:[Object(v.jsx)("img",{src:"./images/fontsize_m.png",alt:""})," "]}),Object(v.jsxs)("div",{id:"dai",children:[Object(v.jsx)("img",{src:"./images/fontsize_l.png",alt:""})," "]})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{id:"eigo",children:[Object(v.jsx)("div",{id:"global",children:Object(v.jsx)("u",{children:"global site"})}),Object(v.jsx)("div",{id:"site-map",children:Object(v.jsx)("u",{children:"site map"})})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{id:"search",children:Object(v.jsx)("input",{type:"text",placeholder:"\u691c\u7d22\u30ef\u30fc\u30c9\u3092\u5165\u529b"})}),Object(v.jsx)("input",{type:"image",src:"./images/search.png",id:"button",alt:""})]})]})]})},p=c(20);c(86);var _=function(e){var t=e.title,c=e.drop_item,i=e.active,n=e.setActive;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{className:"drop1",onMouseEnter:function(){return n(i!==t&&t)},onMouseLeave:function(){return n(!1)},children:Object(v.jsxs)("li",{className:"drop",children:[t,Object(v.jsx)("div",{className:(i===t?"show":"")+"drop_item",children:c})]})})})};var y=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),c=t[0],n=t[1],r=Object(v.jsxs)("ul",{className:"nav_item",children:[Object(v.jsx)("li",{children:"\u666e\u901a\u9810\u91d1"}),Object(v.jsx)("li",{children:" \u5b9a\u671f\u9810\u91d1\u30fb\u7a4d\u7acb"}),Object(v.jsx)("li",{children:" \u5916\u8ca8\u9810\u91d1"}),Object(v.jsx)("li",{children:" \u5916\u50b5"}),Object(v.jsx)("li",{children:" \u30d5\u30a1\u30f3\u30c9\u30e9\u30c3\u30d7"}),Object(v.jsx)("li",{children:" \u500b\u4eba\u5411\u3051\u56fd\u50b5"}),Object(v.jsx)("li",{children:" \u9000\u8077\u91d1\u904b\u7528\u306e\u3054\u6848\u5185"})]}),s=Object(v.jsxs)("ul",{className:"nav_item",children:[Object(v.jsx)("li",{children:"\u8cc7\u91d1\u8abf\u9054"}),Object(v.jsx)("li",{children:"\u56fd\u969b\u696d\u52d9\u30fb\u5916\u70ba\u53d6\u5f15 "}),Object(v.jsx)("li",{children:" \u798f\u5229\u539a\u751f"}),Object(v.jsx)("li",{children:" \u4e8b\u696d\u6226\u7565\u30fb\u7d4c\u55b6\u76f8\u8ac7"}),Object(v.jsx)("li",{children:" \u632f\u8fbc\u30fb\u5165\u91d1\u78ba\u8a8d\u306e\u52b9\u7387\u5316"}),Object(v.jsx)("li",{children:" \u96fb\u5b50\u8a18\u9332\u50b5\u6a29\u30fb\u624b\u5f62\u95a2\u9023"})]}),j=Object(v.jsxs)("ul",{className:"nav_item",children:[Object(v.jsx)("li",{children:"\u305b\u3089\u304f\u30b0\u30eb\u30fc\u30d7\u306e\u6982\u8981"}),Object(v.jsx)("li",{children:" \u6c7a\u7b97\u516c\u544a"}),Object(v.jsx)("li",{children:" \u793e\u50b5\u60c5\u5831"})]}),l=Object(v.jsxs)("ul",{className:"nav_item",children:[Object(v.jsx)("li",{children:"\u65b0\u5352\u63a1\u7528"}),Object(v.jsx)("li",{children:" \u30ad\u30e3\u30ea\u30a2\u63a1\u7528"}),Object(v.jsx)("li",{children:" \u6d77\u5916\u73fe\u5730\u63a1\u7528"}),Object(v.jsx)("li",{children:" \u5951\u7d04\u793e\u54e1\u306e\u304a\u4ed5\u4e8b"}),Object(v.jsx)("li",{children:" \u6d3e\u9063\u793e\u54e1\u306e\u304a\u4ed5\u4e8b"})]}),a=Object(v.jsxs)("ul",{className:"nav_item",children:[Object(v.jsx)("li",{children:"\u3054\u3042\u3044\u3055\u3064"}),Object(v.jsx)("li",{children:" \u4e8b\u696d\u5185\u5bb9"}),Object(v.jsx)("li",{children:" \u4f01\u696d\u306e\u793e\u4f1a\u7684\u8cac\u4efb(CSR)"}),Object(v.jsx)("li",{children:" \u5f79\u54e1\u4e00\u89a7"}),Object(v.jsx)("li",{children:" \u7d44\u7e54\u4f53\u5236"}),Object(v.jsx)("li",{children:" \u304a\u554f\u5408\u308f\u305b\u5148"})]});return Object(v.jsxs)("div",{id:"nav",children:[Object(v.jsx)(_,{title:"\u500b\u4eba\u306e\u304a\u5ba2\u69d8",drop_item:r,active:c,setActive:n}),Object(v.jsx)(_,{title:"\u6cd5\u4eba\u306e\u304a\u5ba2\u69d8",drop_item:s,active:c,setActive:n}),Object(v.jsx)(_,{title:"\u682a\u4e3b\u30fb\u6295\u8cc7\u5bb6\u306e\u7686\u69d8",drop_item:j,active:c,setActive:n}),Object(v.jsx)(_,{title:"\u63a1\u7528\u60c5\u5831",drop_item:l,active:c,setActive:n}),Object(v.jsx)(_,{title:"\u305b\u3089\u304f\u9280\u884c\u306b\u3064\u3044\u3066",drop_item:a,active:c,setActive:n})]})},N=c(68),w=c.n(N);c(102),c(103);var k=function(){return Object(v.jsx)("div",{id:"main1",children:Object(v.jsx)("div",{id:"main-image",children:function(){var e={customPaging:function(e){return Object(v.jsxs)("a",{className:"thumb_list",children:[Object(v.jsx)("img",{src:"../images/main0".concat(e+1,"_thumb.png"),alt:""})," "]})},dots:!0,dotsClass:"slick-dots slick-thumb",speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,nextArrow:Object(v.jsx)("img",{src:"../public/imsges/arrow_right.png",alt:""}),prevArrow:Object(v.jsx)("img",{src:"../public/images/arrow_left.png",alt:""})};return Object(v.jsxs)(w.a,Object(d.a)(Object(d.a)({},e),{},{children:[Object(v.jsx)("div",{className:"main-image",children:Object(v.jsx)("img",{src:"../public/images/main01.png",alt:""})}),Object(v.jsx)("div",{className:"main-image",children:Object(v.jsx)("img",{src:"../public/images/main02.png",alt:""})}),Object(v.jsx)("div",{className:"main-image",children:Object(v.jsx)("img",{src:"../public/images/main03.png",alt:""})})]}))}()})})},S=c(24),C=(c(104),function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(S.d,{className:"tabs",children:[Object(v.jsxs)(S.b,{children:[Object(v.jsx)(S.a,{className:"tab",children:"\u65b0\u7740\u60c5\u5831"}),Object(v.jsx)(S.a,{className:"tab",children:"\u30cb\u30e5\u30fc\u30b9\u30ea\u30ea\u30fc\u30b9"}),Object(v.jsx)(S.a,{className:"tab",children:"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3"}),Object(v.jsx)(S.a,{className:"tab",children:"\u304a\u77e5\u3089\u305b"})]}),Object(v.jsx)(S.c,{children:function(){for(var e=c(50),t=[],i=0;i<e.length;i++){if("\u30cb\u30e5\u30fc\u30b9\u30ea\u30ea\u30fc\u30b9"===e[i].category)var n="category_news";if("\u30ad\u30e3\u30f3\u30da\u30fc\u30f3"===e[i].category)n="category_campaign";if("\u304a\u77e5\u3089\u305b"===e[i].category)n="category_notice";t.push(Object(v.jsxs)("div",{className:"json_colum",children:[Object(v.jsx)("div",{className:"json_time",children:e[i].time}),Object(v.jsx)("div",{className:n,children:e[i].category}),Object(v.jsx)("div",{className:"json_text",children:Object(v.jsx)("u",{children:e[i].text})})]}))}return Object(v.jsx)("div",{children:t})}()}),Object(v.jsxs)(S.c,{children:["  ",function(){for(var e=c(50),t=[],i=0;i<e.length;i++)if("\u30cb\u30e5\u30fc\u30b9\u30ea\u30ea\u30fc\u30b9"===e[i].category){t.push(Object(v.jsxs)("div",{className:"json_colum",children:[Object(v.jsx)("div",{className:"json_time",children:e[i].time}),Object(v.jsx)("div",{className:"category_news",children:e[i].category}),Object(v.jsx)("div",{className:"json_text",children:Object(v.jsx)("u",{children:e[i].text})})]}))}return Object(v.jsx)("div",{children:t})}()]}),Object(v.jsx)(S.c,{children:function(){for(var e=c(50),t=[],i=0;i<e.length;i++)if("\u30ad\u30e3\u30f3\u30da\u30fc\u30f3"===e[i].category){t.push(Object(v.jsxs)("div",{className:"json_colum",children:[Object(v.jsx)("div",{className:"json_time",children:e[i].time}),Object(v.jsx)("div",{className:"category_campaign",children:e[i].category}),Object(v.jsx)("div",{className:"json_text",children:Object(v.jsx)("u",{children:e[i].text})})]}))}return Object(v.jsx)("div",{children:t})}()}),Object(v.jsx)(S.c,{children:function(){for(var e=c(50),t=[],i=0;i<e.length;i++)if("\u304a\u77e5\u3089\u305b"===e[i].category){t.push(Object(v.jsxs)("div",{className:"json_colum",children:[Object(v.jsx)("div",{className:"json_time",children:e[i].time}),Object(v.jsx)("div",{className:"category_notice",children:e[i].category}),Object(v.jsx)("div",{className:"json_text",children:Object(v.jsx)("u",{children:e[i].text})})]}))}return Object(v.jsx)("div",{children:t})}()})]})})});var A=function(e){var t=e.title,c=e.Accordion_item,i=e.active,n=e.setActive;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"accordion",children:[Object(v.jsx)("div",{className:"accordionHeading",onClick:function(){return n(i!==t&&t)},children:Object(v.jsx)("h2",{children:t})}),Object(v.jsx)("div",{className:(i===t?"show":"")+" accordionContent",children:c})]})})};var I=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),c=t[0],n=t[1],r=Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\uff1e\u53e3\u5ea7\u3092\u3072\u3089\u304f"}),Object(v.jsx)("li",{children:"\uff1e\u4f4f\u5b85\u30ed\u30fc\u30f3"}),Object(v.jsx)("li",{children:"\uff1e\u6295\u8cc7\u4fe1\u8a17"}),Object(v.jsx)("li",{children:"\uff1e\u5916\u8ca8\u9810\u91d1"}),Object(v.jsx)("li",{children:"\uff1e\u30d0\u30f3\u30af\u30a4\u30c3\u30af"}),Object(v.jsx)("li",{children:"\uff1e\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u4e00\u89a7"})]}),s=Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\uff1e\u53e3\u5ea7\u3092\u3072\u3089\u304f"}),Object(v.jsx)("li",{children:"\uff1e\u3067\u3093\u3055\u3044"}),Object(v.jsx)("li",{children:"\uff1eCSR\u306e\u53d6\u308a\u7d44\u307f"}),Object(v.jsx)("li",{children:"\uff1e\u5730\u7403\u74b0\u5883\u554f\u984c\u3078\u306e\u5bfe\u5fdc"}),Object(v.jsx)("li",{children:"\uff1eCSR\u306e\u53d6\u308a\u7d44\u307f"}),Object(v.jsx)("li",{children:"\uff1eGlobal Website"})]}),j=Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\uff1e\u6c7a\u7b97\u5e83\u544a"}),Object(v.jsx)("li",{children:"\uff1e\u793e\u50b5\u60c5\u5831"})]}),l=Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\uff1e\u65b0\u5352\u63a1\u7528"}),Object(v.jsx)("li",{children:"\uff1e\u4e2d\u9014\u63a1\u7528"}),Object(v.jsx)("li",{children:"\uff1e\u6d77\u5916\u73fe\u5730\u63a1\u7528"})]});return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A,{title:"\u500b\u4eba\u304a\u5ba2\u69d8",Accordion_item:r,active:c,setActive:n}),Object(v.jsx)(A,{title:"\u6cd5\u4eba\u304a\u5ba2\u69d8",Accordion_item:s,active:c,setActive:n}),Object(v.jsx)(A,{title:"\u682a\u4e3b\u30fb\u6295\u8cc7\u5bb6\u306e\u7686\u69d8",Accordion_item:j,active:c,setActive:n}),Object(v.jsx)(A,{title:"\u63a1\u7528\u60c5\u5831",Accordion_item:l,active:c,setActive:n})]})},W=(c(105),c(146)),z=c(147),T=Object(z.a)({input:{marginLeft:"25%",marginBottom:16,width:"50%"}}),q=function(e){var t=T();return Object(v.jsx)(W.a,{className:t.input,fullWidth:e.fullWidth,label:e.label,margin:"dense",multiline:e.multiline,required:e.required,rows:e.rows,value:e.value,type:e.type,onChange:e.onChange})},B=c(148),D=Object(z.a)({button:{backgroundColor:"#202d74",color:"#ffffff",marginLeft:"25%",marginTop:30,width:"50%",height:50,fontSize:18}}),E=function(e){var t=D();return Object(v.jsx)(B.a,{className:t.button,variant:"contained",onClick:function(){return e.onClick()},children:e.label})},U=Object(z.a)({button:{backgroundColor:"#202d74",color:"#ffffff",height:50,fontSize:12,width:"100%",marginTop:6,marginBottom:6}}),F=function(e){var t=U();return Object(v.jsx)(B.a,{className:t.button,variant:"contained",onClick:function(){return e.onClick()},children:e.label})},G=function(){var e=Object(s.d)();return Object(v.jsxs)("div",{id:"login",children:[Object(v.jsx)("h2",{children:"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30d0\u30f3\u30ad\u30f3\u30b0"}),Object(v.jsx)("div",{children:"\u305b\u3089\u304f\u9280\u884c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30d0\u30f3\u30ad\u30f3\u30b0"}),Object(v.jsx)(F,{label:"\u30ed\u30b0\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9",onClick:function(){return e(Object(f.d)("/signIn"))}}),Object(v.jsx)(F,{label:"\u521d\u3081\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u65b9",onClick:function(){return e(Object(f.d)("/signUp"))}}),Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"../",children:"\uff1e\u30d1\u30b9\u30ef\u30fc\u30c9\u5fd8\u308c\u305f\u65b9\u306f\u3053\u3061\u3089"})})]})},M=c(38),R=c.n(M),J=c(55),K=c(44);c(108),c(113),c(114),c(115);K.a.initializeApp({apiKey:"AIzaSyDd0u_rxQ90UDu9DN9Tfo43xonnIsXMTHE",authDomain:"react-firebase-7aee4.firebaseapp.com",projectId:"react-firebase-7aee4",storageBucket:"react-firebase-7aee4.appspot.com",messagingSenderId:"715857419358",appId:"1:715857419358:web:25153ba759f38fa63568cf",measurementId:"G-H50Z94SDM6"});var L=K.a.auth(),P=K.a.firestore(),Z=(K.a.storage(),K.a.functions(),function(){var e=Object(s.d)(),t=Object(i.useState)(Object),c=Object(p.a)(t,2),n=c[0],r=c[1],j=Object(i.useState)(Object),l=Object(p.a)(j,2),a=l[0],d=l[1];Object(i.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){r({items:e.rates}),d({times:e.date})}))}),[]),console.log("A");var b=Object.keys(n).map((function(e){return n[e].JPY})),h=Object.keys(n).map((function(e){return n[e].USD})),O=Object.keys(a).map((function(e){return a[e]})),o=(b/h).toFixed(3);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"center",children:"\u70ba\u66ff\u3000\u7c73\u30c9\u30eb\u2192\u65e5\u672c\u5186"}),Object(v.jsxs)("p",{className:"center",children:[" ",o,"\u5186"]}),Object(v.jsxs)("p",{className:"center",children:["\u6700\u65b0\u66f4\u65b0\u65e5\uff1a",O]})]}),Object(v.jsx)(F,{label:"\u30ed\u30b0\u30a2\u30a6\u30c8",onClick:function(){return e(function(){var e=Object(J.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.signOut().then((function(){t({type:"SIGN_OUT",payload:{isSignedIn:!1,role:"",uid:"",username:""}})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})]})}),H=function(){return Object(s.e)((function(e){return e})).users.isSignedIn?Object(v.jsx)(Z,{}):Object(v.jsx)(G,{})},$=function(){return Object(v.jsxs)("div",{id:"main2",children:[Object(v.jsxs)("div",{id:"main2_left",children:[Object(v.jsx)(H,{}),Object(v.jsxs)("div",{id:"service_guide",children:[Object(v.jsx)("h2",{children:"\u30b5\u30fc\u30d3\u30b9\u306e\u3054\u6848\u5185"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["\u5e97\u8217",Object(v.jsx)("br",{}),"\u30fb",Object(v.jsx)("br",{}),"ATM\u691c\u7d22"]}),Object(v.jsx)("li",{children:"\u8cc7\u6599\u8acb\u6c42"}),Object(v.jsx)("li",{children:"\u91d1\u5229\u4e00\u89a7"}),Object(v.jsx)("li",{children:"\u624b\u6570\u6599"}),Object(v.jsxs)("li",{children:["\u3088\u304f\u3042\u308b",Object(v.jsx)("br",{}),"\u3054\u8cea\u554f"]}),Object(v.jsxs)("li",{children:["\u6295\u8cc7\u4fe1\u8a17\u57fa\u6e96",Object(v.jsx)("br",{}),"\u4fa1\u683c\u4e00\u89a7"]})]})]}),Object(v.jsx)("div",{id:"guide1",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\u53e3\u5ea7\u958b\u8a2d\u306e\u3054\u6848\u5185"}),Object(v.jsx)("li",{children:"\u91d1\u878d\u7d4c\u6e08\u30cb\u30e5\u30fc\u30b9"}),Object(v.jsx)("li",{children:"\u8a50\u6b3a\u306b\u6ce8\u610f\uff01\uff01"})]})}),Object(v.jsx)("div",{id:"guide2",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"\u30c6\u30ec\u30d3CM\u30fb\u52d5\u753b\u306e\u3054\u7d39\u4ecb"}),Object(v.jsx)("li",{children:"\u4eca\u304b\u3089\u8003\u3048\u308b\u6559\u80b2\u30ed\u30fc\u30f3"})]})}),Object(v.jsx)("div",{id:"guide3",children:Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"./images/caution.png",alt:""})})})]}),Object(v.jsxs)("div",{id:"main2_right",children:[Object(v.jsx)("div",{id:"main2_right_top",children:Object(v.jsx)(I,{})}),Object(v.jsx)("div",{id:"main2_right_bottom",children:Object(v.jsx)(C,{})})]})]})};var Q=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsx)($,{})]})};c(111);var X,Y=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{id:"footer0",children:[Object(v.jsxs)("div",{id:"footer_1",children:[Object(v.jsxs)("ul",{id:"fot_1",children:[Object(v.jsx)("h3",{children:"\u500b\u4eba\u306e\u304a\u5ba2\u69d8"}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u666e\u901a\u9810\u91d1"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u5b9a\u671f\u9810\u91d1\u30fb\u7a4d\u7acb"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u5916\u8cc7\u9810\u91d1"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u5916\u50b5"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u30d5\u30a1\u30f3\u30c9\u30e9\u30c3\u30d7"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u500b\u4eba\u5411\u3051\u56fd\u50b5"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u9000\u8077\u91d1\u904b\u7528\u306e\u3054\u6848\u5185"})})]}),Object(v.jsxs)("ul",{id:"fot_2",children:[Object(v.jsx)("h3",{children:"\u6cd5\u4eba\u306e\u304a\u5ba2\u69d8"}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u8cc7\u91d1\u8abf\u9054"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u56fd\u969b\u696d\u52d9\u30fb\u5916\u70ba\u53d6\u5f15"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u798f\u5229\u539a\u751f"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u4e8b\u696d\u6226\u7565\u30fb\u7d4c\u55b6\u76f8\u8ac7"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u632f\u8fbc\u30fb\u5165\u91d1\u78ba\u8a8d\u306e\u52b9\u7387\u5316"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u96fb\u5b50\u8a18\u9332\u50b5\u6a29\u30fb\u624b\u5f62\u95a2\u9023"})})]}),Object(v.jsxs)("ul",{id:"fot_3",children:[Object(v.jsx)("h3",{children:"\u682a\u4e3b\u30fb\u6295\u8cc7\u5bb6\u306e\u7686\u69d8"}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u305b\u3089\u304f\u30b0\u30eb\u30fc\u30d7\u306e\u6982\u8981"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u6c7a\u7b97\u516c\u544a"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u793e\u50b5\u60c5\u5831"})})]}),Object(v.jsxs)("ul",{id:"fot_4",children:[Object(v.jsx)("h3",{children:"\u63a1\u7528\u60c5\u5831"}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u65b0\u5352\u63a1\u7528"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u30ad\u30e3\u30ea\u30a2\u63a1\u7528"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u6d77\u5916\u73fe\u5730\u63a1\u7528"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u5951\u7d04\u793e\u54e1\u306e\u304a\u4ed5\u4e8b"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u6d3e\u9063\u793e\u54e1\u306e\u304a\u4ed5\u4e8b"})})]}),Object(v.jsxs)("ul",{id:"fot_5",children:[Object(v.jsx)("h3",{children:"\u305b\u3089\u304f\u9280\u884c\u306b\u3064\u3044\u3066"}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u3054\u3042\u3044\u3055\u3064"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u4e8b\u696d\u5185\u5bb9"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u4f01\u696d\u306e\u793e\u4f1a\u7684\u8cac\u4efb(CSR)"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u5f79\u54e1\u4e00\u89a7"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u7d44\u7e54\u4f53\u5236"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u5148"})})]})]}),Object(v.jsx)("div",{id:"footer_2",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u306b\u3064\u3044\u3066"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u91d1\u878d\u5546\u54c1\u52e7\u8a98\u65b9\u91dd"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u6cd5\u4eba\u7b49\u306e\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u306b\u3064\u3044\u3066"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u672c\u30b5\u30a4\u30c8\u306e\u3054\u5229\u7528\u306b\u3042\u305f\u3063\u3066"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:"\u53cd\u793e\u4f1a\u52e2\u529b\u306b\u5bfe\u3059\u308b\u57fa\u672c\u65b9\u91dd"})})]})})]})})},V=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(g,{}),Object(v.jsx)(y,{}),Object(v.jsx)(Q,{}),Object(v.jsx)(Y,{})]})},ee=(c(65),function(){var e=Object(s.d)(),t=Object(i.useState)(""),c=Object(p.a)(t,2),n=c[0],r=c[1],j=Object(i.useState)(""),l=Object(p.a)(j,2),a=l[0],d=l[1],b=Object(i.useState)(""),h=Object(p.a)(b,2),O=h[0],o=h[1],x=Object(i.useState)(""),u=Object(p.a)(x,2),m=u[0],g=u[1],_=Object(i.useCallback)((function(e){r(e.target.value)}),[r]),y=Object(i.useCallback)((function(e){d(e.target.value)}),[d]),N=Object(i.useCallback)((function(e){o(e.target.value)}),[o]),w=Object(i.useCallback)((function(e){g(e.target.value)}),[g]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"center",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332"}),Object(v.jsx)("div",{}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30e6\u30fc\u30b6\u540d",margin:"dense",multiline:!1,required:!0,rows:1,value:n,type:"text",onChange:_}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",margin:"dense",multiline:!1,required:!0,rows:1,value:a,type:"email",onChange:y}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9",margin:"dense",multiline:!1,required:!0,rows:1,value:O,type:"password",onChange:N}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9(\u78ba\u8a8d\u7528)",margin:"dense",multiline:!1,required:!0,rows:1,value:m,type:"password",onChange:w}),Object(v.jsx)("div",{children:Object(v.jsx)(E,{label:"\u767b\u9332",onClick:function(){return e(function(e,t,c,i){var n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-].+(?:\.[a-zA-Z0-9-]+)*$/;return function(){var r=Object(J.a)(R.a.mark((function r(s){return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e&&""!==t&&""!==c&&""!==i){r.next=3;break}return alert("\u672a\u5165\u529b\u304c\u3042\u308a\u307e\u3059"),r.abrupt("return",!1);case 3:if(!1!==n.test(t)){r.next=6;break}return alert("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093"),r.abrupt("return",!1);case 6:if(!(c.length<6)){r.next=9;break}return alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u306f6\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),r.abrupt("return",!1);case 9:if(c===i){r.next=12;break}return alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u307e\u305b\u3093"),r.abrupt("return",!1);case 12:return r.abrupt("return",L.createUserWithEmailAndPassword(t,c).then((function(c){var i=c.user;if(i){var n=i.uid,r={email:t,role:"customer",uid:n,username:e};P.collection("users").doc(n).set(r).then((function(){s(Object(f.d)("/"))}))}})));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(n,a,O,m))}})})]})}),te=function(){var e=Object(s.d)(),t=Object(i.useState)(""),c=Object(p.a)(t,2),n=c[0],r=c[1],j=Object(i.useState)(""),l=Object(p.a)(j,2),a=l[0],d=l[1],b=Object(i.useCallback)((function(e){r(e.target.value)}),[r]),h=Object(i.useCallback)((function(e){d(e.target.value)}),[d]);return Object(v.jsxs)("div",{className:"login",children:[Object(v.jsx)("h2",{className:"center",children:"\u30ed\u30b0\u30a4\u30f3"}),Object(v.jsx)("div",{}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",margin:"dense",multiline:!1,required:!0,rows:1,value:n,type:"email",onChange:b}),Object(v.jsx)("div",{className:"text-space"}),Object(v.jsx)(q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9",margin:"dense",multiline:!1,required:!0,rows:1,value:a,type:"password",onChange:h}),Object(v.jsx)("div",{className:"text-space"}),Object(v.jsx)("div",{children:Object(v.jsx)(E,{label:"\u30ed\u30b0\u30a4\u30f3",onClick:function(){return e(function(e,t){return function(){var c=Object(J.a)(R.a.mark((function c(i){return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(""!==e&&""!==t){c.next=3;break}return alert("\u672a\u5165\u529b\u304c\u3042\u308a\u307e\u3059"),c.abrupt("return",!1);case 3:return c.abrupt("return",L.signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;if(!t)return alert("\u30e6\u30fc\u30b6\u30fcID\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093"),!1;var c=t.uid;return P.collection("users").doc(c).get().then((function(e){var t,n=e.data();i({type:"SIGN_IN",payload:{isSignedIn:!0,uid:(t={isSignedIn:!0,role:n.role,uid:c,username:n.username}).uid,role:t.role,username:t.username}}),i(Object(f.d)("/"))}))})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(n,a))}})})]})},ce=function(){return Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{exact:!0,path:"/signUp",component:ee}),Object(v.jsx)(m.a,{exact:!0,path:"/signIn",component:te}),Object(v.jsx)(m.a,{path:"(/)?",component:V})]})},ie=function(){return Object(v.jsx)("main",{children:Object(v.jsx)(ce,{})})},ne=u.a(),re=(X=ne,Object(j.d)(Object(j.c)({router:Object(l.b)(X),users:o}),Object(j.a)(Object(a.a)(X),x.a)));r.a.render(Object(v.jsx)(s.a,{store:re,children:Object(v.jsx)(l.a,{history:ne,children:Object(v.jsx)(ie,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,c){},50:function(e){e.exports=JSON.parse('[{"time":"2020\u5e7406\u670810\u65e5","category":"\u304a\u77e5\u3089\u305b","text":"\u3010\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30d0\u30f3\u30ad\u30f3\u30b0\u3011\u30d1\u30b9\u30ef\u30fc\u30c9\u7b49\u3092\u5165\u529b\u3055\u305b\u308b\u507d\u30e1\u30fc\u30eb\u304c\u5c4a\u3044\u3066\u3082\u3001\u7d76\u5bfe\u306b\u5165\u529b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3","text":"\u62bd\u9078\u3067200\u4eba\u306b\u4e00\u4e07\u5186\u304c\u5f53\u305f\u308b!\u590f\u306e\u8cc7\u7523\u904b\u7528\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u5b9f\u65bd\u4e2d!"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3","text":"\u5e73\u621027\u5e745\u670825\u65e5(\u6708)\u3088\u308a\u300c\u5b50\u3069\u3082\u53e3\u5ea7\u958b\u8a2d\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u300d\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u304a\u77e5\u3089\u305b","text":"\u300c\u5e74\u91d1\u60c5\u5831\u6d41\u51fa\u300d\u3092\u53e3\u5b9f\u306b\u3057\u305f\u632f\u308a\u8fbc\u3081\u8a50\u6b3a\u3084\u500b\u4eba\u60c5\u5831\u306e\u8a50\u6b3a\u306b\u3054\u6ce8\u610f\u4e0b\u3055\u3044\u3002"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u30cb\u30e5\u30fc\u30b9\u30ea\u30ea\u30fc\u30b9","text":"\u30b9\u30a6\u30a7\u30fc\u30c7\u30f3\u305b\u3089\u304f\u9280\u884c\u25cb\u25cb\u652f\u5e97\u958b\u696d\u306b\u3064\u3044\u3066    pdf(97KB)"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u304a\u77e5\u3089\u305b","text":"\u304a\u5ba2\u69d8\u60c5\u5831\u306eSRK\u30b0\u30eb\u30fc\u30d7\u3067\u306e\u5171\u540c\u5229\u7528\u306b\u3064\u3044\u3066"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u304a\u77e5\u3089\u305b","text":"LINE\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u89e3\u8aac\u3057\u307e\u3057\u305f!"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u30cb\u30e5\u30fc\u30b9\u30ea\u30ea\u30fc\u30b9","text":"\u3010\u305b\u3089\u304f\u30c0\u30a4\u30ec\u30af\u30c8\u3011\u30ef\u30f3\u30bf\u30a4\u30e0\u30d1\u30b9\u30ef\u30fc\u30c9\u30ab\u30fc\u30c9\u306e\u63d0\u4f9b\u958b\u59cb\u306b\u3064\u3044\u3066 pdf(130KB)"},{"time":"2020\u5e7406\u670810\u65e5","category":"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3","text":"\u62bd\u9078\u3067\u30ab\u30bf\u30ed\u30b0\u30ae\u30d5\u30c8\u304c\u5f53\u305f\u308b\uff01\u4fdd\u967a\u306e\u898b\u76f4\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u5b9f\u65bd\u4e2d"}]')},65:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.5f4dcd58.chunk.js.map