"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[203],{785:function(e,n,s){s.r(n),s.d(n,{default:function(){return w}});var i=s(439),r=s(791),a=s(689),t=s(719),c=s(87),o=s(185),l="GoBackBtn_goBackBtn__XUv89",d="GoBackBtn_goBackLink__HjKXY",h=s(184),j=function(e){var n=e.backLinkHref;return(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"button",className:l,children:(0,h.jsxs)(c.rU,{to:n,className:d,children:[(0,h.jsx)(o.And,{size:20}),(0,h.jsx)("span",{children:"Go back"})]})})})},x=s.p+"static/media/no-image-available.06f0f15cfcb8d681b62c.png",f="MovieInfo_cardFilm__+K6nK",_="MovieInfo_cardFilmDetails__ucJII",m="MovieInfo_title__oNnRW",v="MovieInfo_img__fx+Ux",u="MovieInfo_score__v69LA",p=function(e){var n=e.movie,s=n.title,i=n.overview,r=n.genres,a=n.release_date,t=n.first_air_date,c=n.poster_path,o=n.vote_average,l=Math.round(10*o),d=x,j=c?"https://image.tmdb.org/t/p/w500".concat(c):d;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("img",{src:j,alt:s,width:"200",className:v}),(0,h.jsxs)("div",{className:_,children:[(0,h.jsxs)("h2",{className:m,children:[s," (",(t||a).slice(0,4),")"]}),(0,h.jsxs)("p",{className:u,children:["User Score: ",l,"%"]}),i&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:i})]}),r&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:r.map((function(e){return e.name})).join(", ")})]})]})]}),(0,h.jsx)("hr",{})]})},k="AdditionalInfo_addInfo__gKkNq",g=function(e){var n=e.location;return(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:k,children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",state:{from:n},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",state:{from:n},children:"Reviews"})})]}),(0,h.jsx)("hr",{})]})},b=s(2),w=function(){var e,n,s=(0,r.useState)(null),c=(0,i.Z)(s,2),o=c[0],l=c[1],d=(0,a.UO)().movieId,x=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,r.useEffect)((function(){(0,t.YJ)(d).then((function(e){l(e)})).catch(console.log)}),[d]),(0,h.jsxs)("div",{children:[(0,h.jsx)(j,{backLinkHref:x}),o&&(0,h.jsx)(p,{movie:o}),(0,h.jsx)(g,{location:x}),(0,h.jsx)(r.Suspense,{fallback:(0,h.jsx)(b.Z,{}),children:(0,h.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=203.2d4939b0.chunk.js.map