(this["webpackJsonptask-arceptive"]=this["webpackJsonptask-arceptive"]||[]).push([[0],{49:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),s=n.n(r),i=(n(49),n(16)),o=n(37),u=n(9),j=n(79),d=n(63),l=n(38),b=n(80),h=n(81),p=n(12),g=n(2);function x(e){var t=e.rating,n="\u2b50".repeat(Math.ceil(t));return Object(g.jsx)(g.Fragment,{children:n})}function m(e){var t=e.productData,n=t.name,c=t.id,a=t.description,r=t.seller_name,s=t.last_updated,o=t.location,j=t.available_count,d=t.price,l=t.star_rating,b=t.review_count,m=Object(u.c)(),O=Object(i.a)(m,1)[0];return Object(g.jsx)(h.a,{title:n,headerImage:"https://source.unsplash.com/user/erondu/1600x900?".concat(c),children:Object(g.jsxs)(p.b,{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:O({fontWeight:"800",fontSize:"2em"}),children:d}),Object(g.jsxs)("span",{children:[" ",j," left"]})]}),Object(g.jsxs)("p",{children:["by ".concat(r," from ").concat(o," "),Object(g.jsx)("br",{}),Object(g.jsx)(x,{rating:l}),"(",b,")"]}),Object(g.jsx)("p",{children:a}),Object(g.jsx)("p",{children:s})]})})}var O=n(33),f=n(78);function P(e){var t,n=e.numProductPerPage,c=e.avaliableProducts,r=Math.ceil(c.length/n),s=a.a.useState(1),o=Object(i.a)(s,2),u=o[0],j=o[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{numPages:r,currentPage:u,setCurrentPage:j}),Object(g.jsx)(O.b,{gridColumns:[1,2,2],gridGaps:[12,24,24],gridGutters:[12,12,12],children:(t=c,Object(l.a)(t).splice((u-1)*n,n)).map((function(e){return Object(g.jsx)(f.a,{children:Object(g.jsx)(m,{productData:e},e.id)})}))}),Object(g.jsx)(v,{numPages:r,currentPage:u,setCurrentPage:j})]})}var v=function(e){var t=e.numPages,n=e.currentPage,c=e.setCurrentPage;return Object(g.jsx)(b.a,{numPages:t,currentPage:n,onPageChange:function(e){var t=e.nextPage;c(Math.min(Math.max(t,1),20))},overrides:{Root:{style:function(e){e.$theme;return{display:"flex",justifyContent:"center",marginBottom:"1em",borderTop:"1px #ccc solid",borderBottom:"1px #ccc solid"}}}}})},C=new o.a,y={method:"GET",header:{"Content-Type":"application/json"}};var F=function(){var e=a.a.useState([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){fetch("".concat("api","/products.json"),y).then((function(e){e.json().then((function(e){c(e.review)}))}))}),[]),Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(u.a,{value:C,children:Object(g.jsx)(j.a,{theme:d.a,children:Object(g.jsx)(P,{avaliableProducts:n,numProductPerPage:5})})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),w()}},[[62,1,2]]]);
//# sourceMappingURL=main.6f568d05.chunk.js.map