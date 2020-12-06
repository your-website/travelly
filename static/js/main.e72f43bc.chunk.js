(this.webpackJsonptravelly=this.webpackJsonptravelly||[]).push([[0],{41:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t(0),a=t.n(r),c=t(17),o=t.n(c),d=t(5),s=t(6);function l(){var n=Object(d.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box\n    }\n    html {\n        font-size: 62.5%;\n        overflow: hidden;\n\n        @media (max-width: 950px) {\n            font-size: 45%;\n        }\n\n        @media (max-width: 350px) {\n            font-size: 35%;\n        }\n\n        @media (max-width: 290px) {\n            font-size: 28%;\n        }\n    }\n    body {\n        font-family: 'Noto Serif JP', serif;\n        overflow: hidden;\n    }\n    h1 {\n        font-size: 2.6rem;\n    }\n    h2 {\n        font-size: 4.8rem;\n        font-weight: bold;\n    }\n    h3 {\n        font-size: 3rem;\n        font-weight: normal;\n    }\n    h4,h5 {\n        font-size: 2rem;\n    }\n    li, button, label, input, p {\n        font-size: 2rem;\n    }\n    a {\n        color: white;\n        text-decoration: none;\n    }\n"]);return l=function(){return n},n}var u=Object(s.a)(l()),b=t(12),j=function(n){return{type:"SET_BENEFITS_PAGE",payload:{benefits:n,contact:!1,location:!0,travel:!0}}},h=function(n){return{type:"SET_CONTACT_PAGE",payload:{benefits:!0,contact:n,location:!0,travel:!0}}},f=function(n){return{type:"SET_TRAVEL_PAGE",payload:{benefits:!1,contact:!1,location:!1,travel:n}}},x=function(n){return{type:"SET_LOCATION_PAGE",payload:{benefits:!1,contact:!1,location:n,travel:!0}}},p=t(10),g=function(n){n.select;return Object(i.jsx)(p.b.svg,{transition:{duration:.55},initial:{width:"0%"},animate:{width:"100%"},width:"111",height:"31",viewBox:"0 0 111 31",fill:"none",children:Object(i.jsx)(p.b.path,{d:"M110.664 15.7964C104.322 26.2022 75.4169 41.6622 10.5298 20.256C-18.5092 8.85923 16.5379 15.7964 66.605 3.40858C106.659 -6.50169 112.667 7.53786 110.664 15.7964Z",fill:"#BF93C2"})})};function m(){var n=Object(d.a)(['\n  position: relative;\n  display: flex;\n  flex: 0 0;\n\n  h1 {\n    position: relative;\n    font-family: "Pattaya", sans-serif;\n    font-weight: 400;\n    letter-spacing: 0.1rem;\n    cursor: pointer;\n    z-index: 2;\n  }\n\n  svg {\n    position: absolute;\n    top: 0.5rem;\n    left: 0;\n    z-index: 1;\n  }\n\n  @media (max-width: 950px) {\n    svg {\n      top: 0;\n    }\n  }\n\n  @media (max-width: 655px) {\n    svg {\n      top: 2rem;\n    }\n  }\n\n  @media (max-width: 600px) {\n    flex: 1;\n    justify-content: center;\n  }\n']);return m=function(){return n},n}function O(){var n=Object(d.a)(["\n  min-height: 5vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  flex-wrap: wrap;\n  overflow: hidden;\n\n  width: 90%;\n  margin: auto;\n\n  ul {\n    display: flex;\n    list-style: none;\n    flex: 0 1 60rem;\n  }\n\n  li {\n    position: relative;\n    flex: 1 0 10rem;\n    text-align: center;\n    cursor: pointer;\n    p {\n      position: relative;\n      z-index: 2;\n    }\n    svg {\n      position: absolute;\n      top: 0;\n      right: 0.2rem;\n      z-index: 1;\n    }\n  }\n\n  @media (max-width: 671px) {\n    text-align: center;\n\n    h1 {\n      padding: 2rem;\n    }\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(d.a)(["\n  background: rgb(102, 122, 146);\n  background: linear-gradient(\n    90deg,\n    rgba(102, 122, 146, 1) 0%,\n    rgba(44, 62, 84, 1) 100%\n  );\n  color: white;\n  position: sticky;\n  top: 0px;\n  z-index: 5;\n"]);return v=function(){return n},n}var w=s.b.header(v()),y=s.b.nav(O()),k=Object(s.b)(p.b.div)(m()),E=function(){var n=Object(b.b)(),e=Object(b.c)((function(n){return n.page})).selectPage,t=function(e,t,i){n(t(i)),n({type:"SET_SELECT_PAGE",payload:{selectPage:e}})};return Object(i.jsx)(w,{children:Object(i.jsxs)(y,{children:[Object(i.jsxs)(k,{children:[Object(i.jsx)("h1",{id:"logo",onClick:function(){return t("travel",f,!0)},children:"Travelly"}),"travel"===e&&Object(i.jsx)(g,{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{onClick:function(){return t("location",x,!0)},children:[Object(i.jsx)("p",{children:"Locations"}),"location"===e&&Object(i.jsx)(g,{})]}),Object(i.jsxs)("li",{onClick:function(){return t("benefits",j,!0)},children:[Object(i.jsx)("p",{children:"Benefits"}),"benefits"===e&&Object(i.jsx)(g,{})]}),Object(i.jsxs)("li",{onClick:function(){return t("contact",h,!0)},children:[Object(i.jsx)("p",{children:"Contact"}),"contact"===e&&Object(i.jsx)(g,{})]})]})]})})};function T(){var n=Object(d.a)(["\n  padding: 2rem 6rem;\n  background: #4c6e97;\n  border: none;\n  color: white;\n  font-size: 1.8rem;\n  cursor: pointer;\n\n  font-family: inherit;\n\n  transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background: #27394e;\n  }\n"]);return T=function(){return n},n}var z=s.b.button(T()),_=t.p+"static/media/landing-page.d46e391c.jpg";function S(){var n=Object(d.a)(["\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent),\n    url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n  background-color: #fff;\n\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  text-align: center;\n\n  h3 {\n    padding: 5rem;\n  }\n"]);return S=function(){return n},n}var C=s.b.section(S(),(function(n){return n.background})),P=function(){return Object(i.jsxs)(C,{id:"hero",background:_,children:[Object(i.jsx)("h2",{children:"Travel Beyond Limits."}),Object(i.jsxs)("h3",{children:["Start your travel at an affordable price with Travelly ",Object(i.jsx)("br",{})," Contact us now bellow."]}),Object(i.jsx)(z,{children:"Book Now"})]})},A=t.p+"static/media/new-york-page.cafe77b3.png",N=t.p+"static/media/cloud.a88c881e.png";function F(){var n=Object(d.a)(["\n  position: relative;\n\n  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent),\n    url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n\n  color: white;\n\n  header {\n    width: 90%;\n    margin: auto;\n  }\n\n  h2 {\n    padding: 3rem 0rem;\n    text-decoration: underline;\n    text-decoration-thickness: 0.5rem;\n  }\n  h3 {\n    padding: 4rem 0rem;\n    font-weight: bold;\n    color: black;\n  }\n\n  img {\n    position: absolute;\n    top: 0%;\n    right: 0%;\n    pointer-events: none;\n\n    &.moving-cloud-1 {\n      animation: cloudAnimations 5.2s infinite alternate ease-in-out;\n    }\n\n    &.moving-cloud-2 {\n      top: 20%;\n      z-index: -2;\n      opacity: 0.5;\n      animation: cloudAnimations 5s infinite alternate ease-in-out;\n    }\n  }\n\n  @media (max-width: 760px) {\n    .moving-cloud-1 {\n      z-index: -1;\n    }\n\n    h3 {\n      background: rgba(19, 28, 39, 0.8);\n      -webkit-text-fill-color: white;\n      padding: 4rem 2rem;\n    }\n  }\n\n  @keyframes cloudAnimations {\n    from {\n      transform: translate(10%, -10%);\n    }\n    to {\n      transform: translate(0%, 0%);\n    }\n  }\n"]);return F=function(){return n},n}var L=s.b.section(F(),(function(n){return n.background})),B=function(){return Object(i.jsx)(L,{background:A,id:"location",children:Object(i.jsxs)("header",{children:[Object(i.jsx)("h2",{children:"The Perfect Travelling Experience."}),Object(i.jsxs)("h3",{children:["We cover everything from picking the perfect hotel, ",Object(i.jsx)("br",{})," flight and travelling destination."]}),Object(i.jsx)("img",{src:N,className:"moving-cloud-1 cloud",alt:"cloud"}),Object(i.jsx)("img",{src:N,className:"moving-cloud-2 cloud",alt:"cloud"})]})})},G=t(24),I=t(4),D=function(n){return{hidden:{x:"100%",transition:{duration:n,ease:"easeOut"}},show:{x:"0%",transition:{duration:n,ease:"easeOut"}}}},R=function(n){return{hidden:{x:"-100%",transition:{duration:n,ease:"easeOut"}},show:{x:"0%",transition:{duration:n,ease:"easeOut"}}}},V={enter:function(n){return{x:n>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(n){return{zIndex:0,x:n<0?1e3:-1e3,opacity:0}}},X=t.p+"static/media/swipe_1.ac00a047.jpg",J=t.p+"static/media/swipe_2.3710dbc4.jpg",M=t.p+"static/media/swiper_3.b30273cd.jpg",U=t(21),q=t(23);function W(){var n=Object(d.a)(["\n  top: 50%;\n  position: absolute;\n  user-select: none;\n  color: grey;\n  cursor: pointer;\n  z-index: 2;\n\n  &.next {\n    right: 10px;\n  }\n\n  &.prev {\n    left: 10px;\n  }\n\n  @media (max-width: 650px) {\n    top: 75%;\n    color: #333;\n  }\n"]);return W=function(){return n},n}function Z(){var n=Object(d.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n"]);return Z=function(){return n},n}var H=[X,J,M],K=function(){var n=Object(r.useState)([0,0]),e=Object(G.a)(n,2),t=Object(G.a)(e[0],2),a=t[0],c=t[1],o=e[1],d=Object(I.y)(0,H.length,a),s=function(n){o([a+n,n])};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p.a,{initial:!1,custom:c,children:Object(i.jsx)(Q,{src:H[d],custom:c,variants:V,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.5}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(n,e){var t=e.offset,i=e.velocity,r=function(n,e){return Math.abs(n)*e}(t.x,i.x);r<-1e4?s(1):r>1e4&&s(-1)}},a)}),Object(i.jsx)(Y,{className:"next",onClick:function(){return s(1)},children:Object(i.jsx)(U.a,{size:"4x",icon:q.b})}),Object(i.jsx)(Y,{className:"prev",onClick:function(){return s(-1)},children:Object(i.jsx)(U.a,{size:"4x",icon:q.a})})]})},Q=Object(s.b)(p.b.img)(Z()),Y=s.b.div(W()),$=t.p+"static/media/travel.53f2a249.jpg";function nn(){var n=Object(d.a)(["\n  background: #343c44;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  background: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  h2 {\n    color: white;\n    z-index: 2;\n  }\n  h3 {\n    margin: 3rem 0rem;\n    background-color: rgba(255, 255, 255, 0.6);\n    z-index: 2;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(d.a)(["\n  position: relative;\n  background-color: #fff;\n  height: 100%;\n"]);return en=function(){return n},n}var tn=function(){return Object(i.jsx)(rn,{id:"benefits",children:Object(i.jsxs)(an,{background:$,children:[Object(i.jsx)("h2",{children:"The Perfect Travel"}),Object(i.jsxs)("h3",{children:["We cover everything for picking the perfect hotel ",Object(i.jsx)("br",{}),"to flight and destination"]}),Object(i.jsx)(K,{})]})})},rn=s.b.section(en()),an=s.b.header(nn(),(function(n){return n.background}));function cn(){var n=Object(d.a)(["\n  width: 100%;\n  padding: 2rem;\n  margin-top: 8rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  @media (max-width: 700px) {\n    margin-top: 3rem;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n  div {\n    padding: 2rem;\n    text-align: center;\n    max-width: 80%;\n    margin: auto;\n\n    display: flex;\n  }\n\n  textarea {\n    width: 100%;\n    height: 10rem;\n    padding: 0.2rem 3rem;\n  }\n\n  label {\n    margin: 0rem 3rem;\n    flex: 1 0 7rem;\n  }\n\n  input {\n    width: 100%;\n    padding: 0.2rem 3rem;\n  }\n\n  @media (max-width: 700px) {\n    div {\n      display: block;\n      padding: 0;\n      text-align: left;\n    }\n    input {\n      padding: 1rem;\n    }\n    Button {\n      margin-top: 3rem;\n    }\n    label {\n      padding: 2rem 0rem;\n      display: block;\n      margin: 0;\n    }\n  }\n"]);return on=function(){return n},n}var dn=function(){return Object(i.jsxs)(sn,{action:"https://formspree.io/f/xknpvedd",method:"POST",children:[Object(i.jsxs)("div",{className:"name-form",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(i.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(i.jsxs)("div",{className:"email-form",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(i.jsx)("input",{type:"email",name:"_replyto",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"area",children:"Text:"}),Object(i.jsx)("textarea",{name:"area"})]}),Object(i.jsx)(ln,{type:"submit",value:"Send",children:"Submit"})]})},sn=s.b.form(on()),ln=Object(s.b)(z)(cn()),un=t.p+"static/media/contact-mountain.6518ba30.png";function bn(){var n=Object(d.a)(["\n  width: 100rem;\n  color: white;\n  border-radius: 20px;\n  background: rgba(19, 28, 39, 0.8);\n\n  @media (max-width: 700px) {\n    width: 90%;\n  }\n"]);return bn=function(){return n},n}function jn(){var n=Object(d.a)(["\n  position: relative;\n  background: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n\n  background-color: #fff;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  header {\n    text-align: center;\n    padding: 4rem;\n  }\n\n  @media (max-width: 700px) {\n    header {\n      text-align: center;\n      padding: 2rem;\n    }\n  }\n"]);return jn=function(){return n},n}var hn=function(){return Object(i.jsx)(fn,{background:un,id:"contact",children:Object(i.jsxs)(xn,{children:[Object(i.jsx)("header",{children:Object(i.jsx)("h2",{children:"Contact Us"})}),Object(i.jsx)(dn,{})]})})},fn=s.b.section(jn(),(function(n){return n.background})),xn=s.b.div(bn()),pn=t.p+"static/media/twitter.89a6e616.svg",gn=t.p+"static/media/youtube.ed5daf28.svg",mn=t.p+"static/media/instagram.c3b7a552.svg";function On(){var n=Object(d.a)(["\n  background: rgba(19, 28, 39, 1);\n  min-height: 5vh;\n  padding: 1rem;\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 90%;\n    margin: auto;\n    color: white;\n    flex-wrap: wrap;\n  }\n\n  ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex: 1 1 40rem;\n  }\n\n  li {\n    padding: 0 2rem;\n  }\n\n  h5 {\n    flex: 1 1 40rem;\n  }\n\n  @media (max-width: 668px) {\n    text-align: center;\n    h5 {\n      padding-bottom: 2rem;\n      font-size: 2rem;\n    }\n  }\n"]);return On=function(){return n},n}var vn=function(){return Object(i.jsx)(wn,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:"Travelly \xa9 "}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:pn,alt:"icon twitter"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:gn,alt:"icon youtube"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:mn,alt:"icon instagram"})})})]})]})})},wn=s.b.footer(On());function yn(){var n=Object(d.a)(["\n  width: 100%;\n  z-index: 4;\n"]);return yn=function(){return n},n}function kn(){var n=Object(d.a)(["\n  width: 100%;\n  z-index: 1;\n"]);return kn=function(){return n},n}function En(){var n=Object(d.a)(["\n  width: 100%;\n  z-index: 3;\n"]);return En=function(){return n},n}function Tn(){var n=Object(d.a)(["\n  left: 0;\n  z-index: 2;\n  background-color: #fff;\n"]);return Tn=function(){return n},n}function zn(){var n=Object(d.a)(["\n  position: absolute;\n\n  bottom: 0%;\n  left: 0;\n  z-index: 6;\n  width: 100%;\n  z-index: 11;\n"]);return zn=function(){return n},n}function _n(){var n=Object(d.a)(["\n  position: absolute;\n  height: 100%;\n  top: 0%;\n  width: 100%;\n"]);return _n=function(){return n},n}function Sn(){var n=Object(d.a)(["\n  overflow: hidden;\n  width: 100%;\n  height: 90vh;\n  overflow: hidden;\n  z-index: 10;\n  position: absolute;\n"]);return Sn=function(){return n},n}var Cn=function(){var n=Object(b.c)((function(n){return n.page})),e=n.benefits,t=n.contact,r=n.location,a=Object(p.c)();r?a.start("show"):a.start("hidden");var c=Object(p.c)();e?c.start("show"):c.start("hidden");var o,d=Object(p.c)();return t?d.start("show"):d.start("hidden"),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p.a,{children:Object(i.jsxs)(Pn,{children:[Object(i.jsx)(Bn,{children:Object(i.jsx)(P,{})}),Object(i.jsx)(Fn,{variants:(o=.7,{hidden:{y:"100%",transition:{duration:o,ease:"easeOut"}},show:{y:"0%",transition:{duration:o,ease:"easeOut"}}}),animate:a,initial:"hidden",children:Object(i.jsx)(B,{})}),Object(i.jsx)(Ln,{variants:D(.7),animate:c,initial:"hidden",children:Object(i.jsx)(tn,{})}),Object(i.jsx)(Gn,{variants:R(.7),animate:d,initial:"hidden",children:Object(i.jsx)(hn,{})})]})}),Object(i.jsx)(Nn,{children:Object(i.jsx)(vn,{})})]})},Pn=Object(s.b)(p.b.main)(Sn()),An=Object(s.b)(p.b.div)(_n()),Nn=s.b.div(zn()),Fn=Object(s.b)(An)(Tn()),Ln=Object(s.b)(An)(En()),Bn=Object(s.b)(An)(kn()),Gn=Object(s.b)(An)(yn());var In=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(E,{}),Object(i.jsx)(Cn,{})]})},Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),a(n),c(n)}))},Rn=t(14),Vn=t(11),Xn={benefits:!1,contact:!1,travel:!0,location:!1,selectPage:"travel"},Jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_BENEFITS_PAGE":case"SET_CONTACT_PAGE":case"SET_TRAVEL_PAGE":case"SET_LOCATION_PAGE":return Object(Vn.a)(Object(Vn.a)({},n),{},{benefits:e.payload.benefits,contact:e.payload.contact,location:e.payload.location,travel:e.payload.travel});case"SET_SELECT_PAGE":return Object(Vn.a)(Object(Vn.a)({},n),{},{selectPage:e.payload.selectPage});default:return Object(Vn.a)({},n)}},Mn=Object(Rn.b)({page:Jn}),Un=Object(Rn.c)(Mn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b.a,{store:Un,children:Object(i.jsx)(In,{})})}),document.getElementById("root")),Dn()}},[[41,1,2]]]);
//# sourceMappingURL=main.e72f43bc.chunk.js.map