(this["webpackJsonppretty-json"]=this["webpackJsonppretty-json"]||[]).push([[0],{73:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(11),r=n.n(s),l=(n(73),n(47)),i=n.n(l),o=n(51),j=n(29),h=(n(75),n(120)),d=n(121),u=n(128),b=n(125),g=n(59),p=n(60),x=n(129),O=n(86),m=n(130),f=n(122),y=n(131),v=n(127),w=n(133),C=n(5),k=n(4),S=function(e){var t=Object(C.a)((function(e){return{root:{width:42,height:26,padding:5,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,n=Object(p.a)(e,["classes"]);return Object(k.jsx)(x.a,Object(g.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},n))}));return Object(k.jsx)(h.a,{style:{padding:30,margin:10},elevation:3,children:Object(k.jsxs)(d.a,{container:!0,children:[Object(k.jsxs)(d.a,{item:!0,xs:12,lg:12,children:[Object(k.jsx)(O.a,{id:"discrete-slider",gutterBottom:!0,children:"Tab Spaces"}),Object(k.jsx)(m.a,{onChange:e.optionInput,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",defaultValue:4,step:2,min:0,marks:!0,max:12})]}),Object(k.jsx)(d.a,{item:!0,xs:6,lg:6,children:Object(k.jsx)(f.a,{control:Object(k.jsx)(t,{checked:e.showDataTypes,onChange:e.toggleCheckedDataTypes}),label:"Show data types"})}),Object(k.jsx)(d.a,{item:!0,xs:6,lg:6,children:Object(k.jsx)(f.a,{control:Object(k.jsx)(t,{checked:e.showElementCount,onChange:e.toggleElementCount}),label:"Show element count"})}),Object(k.jsxs)(d.a,{item:!0,xs:12,lg:12,children:[Object(k.jsx)(y.a,{id:"demo-simple-select-label",children:"Theme"}),Object(k.jsxs)(v.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.themeChange,onChange:e.themeHanlder,children:[Object(k.jsx)(w.a,{value:"rjv-default",children:"Default"}),Object(k.jsx)(w.a,{value:"ocean",children:"Ocean"}),Object(k.jsx)(w.a,{value:"solarized",children:"Solarized"}),Object(k.jsx)(w.a,{value:"apathy",children:"Apathy"}),Object(k.jsx)(w.a,{value:"isotope",children:"High Contrat"})]})]})]})})},D=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("form",{onSubmit:e.inputHandler,children:Object(k.jsx)(h.a,{style:{padding:30,margin:10},elevation:3,children:Object(k.jsxs)(d.a,{container:!0,children:[Object(k.jsx)(d.a,{item:!0,xs:12,lg:12,children:Object(k.jsx)(u.a,{value:e.json,multiline:!0,rowsMax:20,onChange:e.changeHandler,label:"JSON",variant:"outlined",fullWidth:!0})}),Object(k.jsx)(d.a,{item:!0,xs:6,lg:6,children:Object(k.jsx)(b.a,{type:"input",children:"View"})}),Object(k.jsx)(d.a,{item:!0,xs:6,lg:6,children:Object(k.jsx)(b.a,{onClick:e.clear,children:"Clear"})})]})})}),Object(k.jsx)(S,{style:{"text-align":"center"},toggleCheckedDataTypes:e.toggleCheckedDataTypes,toggleElementCount:e.toggleElementCount,spaces:e.spaces,optionInput:e.optionInput,showDataTypes:e.showDataTypes,showElementCount:e.showElementCount,themeChange:e.theme,themeHanlder:e.themeHanlder})]})},T=n(57),E=n.n(T),H=function(e){return Object(k.jsx)(k.Fragment,{children:""===e.json?Object(k.jsx)(h.a,{elevation:3,style:{height:840,margin:10,maxHeight:840,overflow:"auto"}}):Object(k.jsx)(h.a,{elevation:3,style:{height:840,margin:10,maxHeight:840,overflow:"auto"},children:Object(k.jsx)(E.a,{theme:e.theme,displayObjectSize:e.showElementCount,displayDataTypes:e.showDataTypes,indentWidth:parseInt(e.spaces),src:e.json})})})},I=n(119),F=n(126),J=n(58),V=n.n(J),B=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),l=r[0],h=r[1],u=Object(a.useState)(4),b=Object(j.a)(u,2),g=b[0],p=b[1],x=Object(a.useState)(!0),m=Object(j.a)(x,2),f=m[0],y=m[1],v=Object(a.useState)(!0),w=Object(j.a)(v,2),C=w[0],S=w[1],T=Object(a.useState)("rjv-default"),E=Object(j.a)(T,2),J=E[0],B=E[1],N=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=JSON.parse(l),c(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e,t){c()};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(d.a,{container:!0,spacing:30,children:[Object(k.jsx)(d.a,{item:!0,xs:6,lg:11,children:Object(k.jsx)(O.a,{style:{"text-align":"center"},variant:"h4",children:"Simple JSON Viewer"})}),Object(k.jsx)(d.a,{item:!0,xs:6,lg:1,children:Object(k.jsx)(I.a,{rel:"noreferrer",target:"_blank",href:"https://github.com/viktor111",children:Object(k.jsx)(V.a,{})})}),Object(k.jsx)(d.a,{item:!0,xs:12,lg:12,children:Object(k.jsx)(F.a,{})})]}),Object(k.jsxs)(d.a,{container:!0,spacing:10,children:[Object(k.jsx)(d.a,{item:!0,xs:12,lg:6,children:Object(k.jsx)(D,{inputHandler:N,changeHandler:function(e){var t=e.target.value;h(t),console.log(t)},processJson:$,optionInput:function(e,t){p(t)},spaces:g,toggleCheckedDataTypes:function(){y((function(e){return!e}))},toggleElementCount:function(){S((function(e){return!e}))},showDataTypes:f,showElementCount:C,theme:J,themeHanlder:function(e){var t=e.target.value;console.log("rerqw"),B(t)},json:l,clear:function(){h(""),c("")}})}),Object(k.jsx)(d.a,{item:!0,xs:12,lg:6,children:Object(k.jsx)(H,{json:n,spaces:g,processJson:$,showDataTypes:f,showElementCount:C,theme:J})})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),N()}},[[84,1,2]]]);
//# sourceMappingURL=main.fe014700.chunk.js.map