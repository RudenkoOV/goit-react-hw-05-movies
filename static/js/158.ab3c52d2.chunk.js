"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{158:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r,a,u,c=n(861),i=n(439),s=n(757),o=n.n(s),l=n(243),h=n(791),f=n(689),d=n(87),p=n(168),m=n(444),x=m.ZP.form(r||(r=(0,p.Z)(["\n  margin: 20px;\n"]))),v=m.ZP.li(a||(a=(0,p.Z)(["\n  margin: 10px;\n"]))),b=m.ZP.b(u||(u=(0,p.Z)(["\n  margin: 20px;\n"]))),g=n(184),j=function(){var e=(0,h.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,h.useState)(""),u=(0,i.Z)(a,2),s=u[0],p=u[1],m=(0,f.TH)(),j=(0,d.lr)(),Z=(0,i.Z)(j,2),y=Z[0],k=Z[1],w=y.get("query");(0,h.useEffect)((function(){if(w){var e=function(){var e=(0,c.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("".concat("https://api.themoviedb.org/3/search/movie?","api_key=").concat("cbd8bb6ab7443496075b168356471aed","&query=").concat(w));case 2:0!==(t=e.sent).data.results.length?(n=t.data.results.map((function(e){return{id:e.id,title:e.title}})),r(n)):(alert("Nothing found."),p(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),r([])}}),[w]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(x,{onSubmit:function(e){e.preventDefault(),""!==s?k({query:"".concat(s)}):alert("Please enter your query.")},children:[(0,g.jsx)("input",{type:"text",value:s,onChange:function(e){e.preventDefault(),p(e.target.value)}}),(0,g.jsx)("button",{children:"Search"})]}),(0,g.jsx)(h.Suspense,{fallback:(0,g.jsx)("b",{children:"Loading..."}),children:0===n.length?(0,g.jsx)(b,{children:"There are no movies. Please enter your query."}):(0,g.jsx)("ul",{children:n.map((function(e){return(0,g.jsx)(v,{children:(0,g.jsx)(d.rU,{to:"/movies/".concat(e.id),state:{from:m},children:(0,g.jsx)("p",{children:e.title})})},e.id)}))})})]})}}}]);
//# sourceMappingURL=158.ab3c52d2.chunk.js.map