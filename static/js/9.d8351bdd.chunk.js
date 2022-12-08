(this["webpackJsonpAhmed-Belaid-portfolio"]=this["webpackJsonpAhmed-Belaid-portfolio"]||[]).push([[9,11],{136:function(e,t,a){"use strict";var i=a(32),n=a(4),o=(a(0),a(398)),c=a(432),r=a(426),s=a(452),d=a(2),l=["icon","href","fontSize"],b=Object(r.a)((function(e){return{icon:{color:e.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:function(e){return e.fontSize?"".concat(e.fontSize,"px"):"32px"},"&:hover":{color:e.palette.text.primary}}}}));t.a=function(e){var t=e.icon,a=e.href,r=e.fontSize,m=Object(n.a)(e,l),u=b({fontSize:r});return Object(d.jsx)(o.a,Object(i.a)(Object(i.a)({display:"inline"},m),{},{component:s.a.div,whileHover:{scale:1.1},children:Object(d.jsx)(c.a,{href:a,children:Object(d.jsx)(t,{className:u.icon})})}))}},142:function(e,t,a){"use strict";var i=a(0),n=a(394),o=a(401),c=a(43),r=a(466),s=a(2),d=function(e){var t=e.onClose,a=Object(i.useContext)(c.a),d=a.isDarkMode,l=a.setIsDarkMode,b=Object(r.a)().t;return Object(s.jsx)(n.a,{control:Object(s.jsx)(o.a,{checked:d,name:"checkedDarkMode",color:"#2626262",onChange:function(){t&&t(),l(!d)}}),label:b("dark_mode")})};t.a=d},255:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(426),o=a(468),c=a(452),r=a(449),s=a(450),d=a(451),l=a(286),b=a(136),m=a(142),u=a(41),h=a(2),p=Object(n.a)((function(e){return{wrapper:{display:"flex",flexDirection:"column",alignItems:"flex-end",position:"fixed",bottom:0,right:0,padding:e.spacing(2),zIndex:100},mobileWrapper:{display:"flex"}}})),j=function(e){var t=e.mobile,a=p(),n=Object(i.useContext)(u.a).isLoading,j=Object(o.a)();return Object(i.useEffect)((function(){n?j.start({opacity:0,y:0}):j.start((function(e){return{opacity:1,y:0,transition:{delay:1.8+.1*e}}}))}),[n,j]),t?Object(h.jsxs)("div",{className:a.mobileWrapper,children:[Object(h.jsx)(b.a,{icon:r.a,m:1,href:"https://github.com/Ahmedbelaid"}),Object(h.jsx)(b.a,{icon:s.a,m:1,href:"https://www.linkedin.com/in/ahmed-belaid/"}),Object(h.jsx)(b.a,{icon:d.a,m:1,href:"mailto:ahmed.belaid.sc@gmail.com"})]}):Object(h.jsxs)(c.a.div,{className:a.wrapper,children:[Object(h.jsx)(c.a.div,{animate:j,custom:0,children:Object(h.jsx)(b.a,{icon:r.a,m:1,href:"https://github.com/Ahmedbelaid"})}),Object(h.jsx)(c.a.div,{animate:j,custom:1,children:Object(h.jsx)(b.a,{icon:l.a,m:1,href:""})}),Object(h.jsx)(c.a.div,{animate:j,custom:2,children:Object(h.jsx)(b.a,{icon:s.a,m:1,href:"https://www.linkedin.com/in/ahmed-belaid/"})}),Object(h.jsx)(c.a.div,{animate:j,custom:3,children:Object(h.jsx)(b.a,{icon:d.a,m:1,href:"mailto:ahmed.belaid.sc@gmail.com"})}),Object(h.jsx)(c.a.div,{animate:j,custom:4,children:Object(h.jsx)(m.a,{})})]})};t.default=j},270:function(e,t,a){"use strict";var i=a(1),n=a(4),o=a(15),c=a(0),r=a(105),s=a(39),d=a(107),l=c.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,b=e.disableGutters,m=void 0!==b&&b,u=e.fixed,h=void 0!==u&&u,p=e.maxWidth,j=void 0===p?"lg":p,f=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(l,Object(i.a)({className:Object(r.a)(a.root,o,h&&a.fixed,m&&a.disableGutters,!1!==j&&a["maxWidth".concat(Object(d.a)(String(j)))]),ref:t},f))}));t.a=Object(s.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},395:function(e,t,a){"use strict";var i=a(1),n=a(4),o=a(0),c=a(105),r=a(39),s=a(23),d=o.forwardRef((function(e,t){var a=e.absolute,r=void 0!==a&&a,s=e.classes,d=e.className,l=e.component,b=void 0===l?"hr":l,m=e.flexItem,u=void 0!==m&&m,h=e.light,p=void 0!==h&&h,j=e.orientation,f=void 0===j?"horizontal":j,x=e.role,g=void 0===x?"hr"!==b?"separator":void 0:x,O=e.variant,v=void 0===O?"fullWidth":O,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(b,Object(i.a)({className:Object(c.a)(s.root,d,"fullWidth"!==v&&s[v],r&&s.absolute,u&&s.flexItem,p&&s.light,"vertical"===f&&s.vertical),role:g,ref:t},k))}));t.a=Object(r.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d)},467:function(e,t,a){"use strict";a.r(t);a(0);var i=a(87),n=a(99),o=a(270),c=a(395),r=a(398),s=a(428),d=a(426),l=a(255),b=a(2),m=Object(d.a)((function(e){return{footer:{paddingTop:e.spacing(4),paddingBottom:e.spacing(6)}}})),u=function(){var e=m(),t=Object(i.a)(),a=Object(n.a)(t.breakpoints.down("sm"));return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(c.a,{style:{backgroundColor:t.palette.primary.main}}),Object(b.jsxs)(r.a,{className:e.footer,children:[a&&Object(b.jsx)(l.default,{mobile:!0}),Object(b.jsx)(s.a,{variant:"body2",color:"initial",children:"\xa9 2022 All Rights Reserved"})]})]})};t.default=u}}]);
//# sourceMappingURL=9.d8351bdd.chunk.js.map