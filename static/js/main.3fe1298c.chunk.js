(this["webpackJsonpmy-aap"]=this["webpackJsonpmy-aap"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," "),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",to:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch ml-auto  text-".concat("light"===e.mode?"dark ":"light"," "),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark mode"})]})]})]})})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black "},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},id:"exampleFormControlTextarea1",rows:"8",style:{backgroundColor:"dark"===e.mode?"gray ":"white"}}),Object(o.jsx)("button",{className:"btn my-4 btn-primary mx-3",onClick:function(){var t=n.toUpperCase();s(t),e.showalert("converted to Upper case","success")},children:"convert to uppercase"}),Object(o.jsx)("button",{className:"btn my-4 btn-primary mx-3",onClick:function(){s(""),e.showalert("Clear Text Successful","success")},children:"Clear"})]})]}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black "},children:[Object(o.jsx)("h2",{children:" your text summery"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsx)("h2",{children:"Reading time "}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to read the text"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"somthing Write to the preview here"})]})]})}function b(e){return Object(o.jsx)("div",{children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})}i.defaultProps={title:"add title"};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"vishal  Thakur",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#213a5d",m("Dark mode has been enable","success")):(n("light"),document.body.style.backgroundColor="white",m("light mode has been enable","success"))}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container  my-3",children:Object(o.jsx)(d,{showalert:m,heading:" Somthing write in the Textarea",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3fe1298c.chunk.js.map