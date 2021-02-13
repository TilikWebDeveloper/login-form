(this["webpackJsonpMulti-Step-form-React"]=this["webpackJsonpMulti-Step-form-React"]||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(18),r=n.n(a),i=n(22),o=n(15),d=n(31),l=n(5),j="SET_SEND_DATA",u={send_data:{}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{send_data:Object(l.a)({},t.new_data)});default:return e}},m=Object(o.c)({login_page:b}),f=Object(o.e)(m,Object(o.a)(d.a)),O=n(26),h=(n(44),n(3)),p=n(35),_=n(10),x=n(34),v=function(e,t){var n,c=Object(x.a)(t);try{for(c.s();!(n=c.n()).done;){var s=(0,n.value)(e);if(s)return s}}catch(a){c.e(a)}finally{c.f()}},y=function(e){return e?void 0:"Field is required"},g=function(e){return e.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)?void 0:"Wrong phone number"},N=function(e){return e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?void 0:"Wrong email"},S=function(e){return v(e,[y,N])},w=function(e){return v(e,[y,g])},C=function(e){return v(e,[y,(t=8,function(e){return e.length<t?"Min length is ".concat(t):void 0})]);var t},E=n(36),A=n(1),D=function(e){var t=e.form,n=e.field,c=e.title,s=Object(E.a)(e,["form","field","title"]),a=t.errors[n.name],r=t.touched[n.name];return Object(A.jsxs)("div",{className:"form__field",children:[Object(A.jsxs)("p",{className:"field__title",children:[c,a&&r&&Object(A.jsx)("span",{className:"field__error",children:a})]}),s.children]})},M=function(e){return Object(A.jsx)(D,Object(l.a)(Object(l.a)({},e),{},{children:Object(A.jsx)("input",Object(l.a)(Object(l.a)({className:"field__input"},e.field),{},{type:e.type,inputMode:e.inputMode||null}))}))},T=function(e){return Object(A.jsx)(D,Object(l.a)(Object(l.a)({},e),{},{children:Object(A.jsx)("div",{className:"select__wrapper",children:Object(A.jsxs)("select",Object(l.a)(Object(l.a)({className:"field__select"},e.field),{},{children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Select..."}),e.option.map((function(e,t){return Object(A.jsx)("option",{defaultValue:!0,value:e,children:"".concat(e[0].toUpperCase()).concat(e.substring(1))},t)}))]}))})}))},k=s.a.memo((function(){return Object(A.jsxs)("div",{className:"form__body",children:[Object(A.jsx)(_.a,{title:"Phone",name:"phone",inputMode:"tel",component:M,validate:w}),Object(A.jsx)(_.a,{title:"Email",name:"email",component:M,validate:S}),Object(A.jsx)(_.a,{title:"Password",name:"password",type:"password",component:M,validate:C})]})})),z=s.a.memo((function(){return Object(A.jsxs)("div",{className:"form__body",children:[Object(A.jsx)(_.a,{title:"Country",name:"country",component:M,validate:y}),Object(A.jsx)(_.a,{title:"City",name:"city",component:M,validate:y}),Object(A.jsx)(_.a,{title:"Address",name:"address",component:M,validate:y})]})})),J=s.a.memo((function(){return Object(A.jsxs)("div",{className:"form__body",children:[Object(A.jsx)(_.a,{title:"Category 1",name:"category1",component:T,validate:y,option:["first","second","third"]}),Object(A.jsx)(_.a,{title:"Category 2",name:"category2",component:T,validate:y,option:["first","second","third"]}),Object(A.jsx)(_.a,{title:"Category 3",name:"category3",component:T,validate:y,option:["first","second","third"]})]})})),P=s.a.memo((function(e){var t=e.send_data;return Object(A.jsxs)("div",{className:"form__body",children:[Object(A.jsxs)("div",{className:"formsuccess",children:[Object(A.jsx)("h1",{className:"formsuccess__title",children:"Success!"}),Object(A.jsxs)("h4",{className:"formsuccess__text",children:["Your account was successfuly registered.",Object(A.jsx)("br",{}),"Please wait for account approval.",Object(A.jsx)("br",{}),"It can take up to 24 hours."]}),Object(A.jsxs)("p",{className:"formsuccess__contact",children:["Have questions?",Object(A.jsx)("br",{}),"Contact",Object(A.jsx)("a",{className:"formsuccess__link",href:"mailto:info@site.com",children:"info@site.com"})]})]}),Object(A.jsx)("div",{id:"log",children:"Send data to server: ".concat(JSON.stringify(t))})]})})),R=function(e){var t=e.send_data,n=e.step,s=e.setErrors,a=e.setTouched;switch(Object(c.useEffect)((function(){s({}),a({})}),[n]),n){case 1:return Object(A.jsx)(k,{});case 2:return Object(A.jsx)(z,{});case 3:return Object(A.jsx)(J,{});default:return Object(A.jsx)(P,{send_data:t})}},q=function(e){var t=e.step,n=e.final;return t<n?Object(A.jsx)("button",{className:"form__send",children:"Continue"}):t===n&&Object(A.jsx)("button",{className:"form__send",children:"Submit"})},I=function(e){var t=e.send_data,n=e.setSendData,s=Object(c.useState)(1),a=Object(p.a)(s,2),r=a[0],i=a[1],o=["Contacts","Address","Categories","Success"];return Object(A.jsx)(_.b,{enableReinitialize:!0,initialValues:Object(l.a)({},{email:"",phone:"",password:"",country:"",address:"",city:"",category1:"",category2:"",category3:""}),onSubmit:function(e){i(r+1),r===o.length-1&&n(e)},children:function(e){var n=e.handleSubmit,c=e.setErrors,s=e.setTouched,a=e.status;return Object(A.jsx)("form",{onSubmit:n,className:"form",children:Object(A.jsxs)("div",{className:"form__container",children:[Object(A.jsxs)("div",{className:"steps form__steps",children:[Object(A.jsx)("div",{className:"steps__arrow_container",children:Object(A.jsx)("hr",{style:{width:"".concat(100/(o.length-1)*(r-1),"%")},className:"steps__arrow"})}),o.map((function(e,t){return Object(A.jsx)("div",{className:["steps__step",r>t&&"active"].join(" "),children:e},t)}))]}),a&&Object(A.jsx)("div",{className:"form__error",children:a}),Object(A.jsx)(R,{send_data:t,step:r,setErrors:c,setTouched:s}),Object(A.jsx)(q,{step:r,final:o.length-1})]})})}})},V=s.a.memo(I),W=Object(o.d)(Object(i.b)((function(e){return{send_data:e.login_page.send_data}}),{setSendData:function(e){return function(t){t({type:j,new_data:e})}}}))((function(e){var t=e.send_data,n=e.setSendData;return Object(A.jsx)(V,{send_data:t,setSendData:n})})),Z=(n(46),function(e){return Object(A.jsx)("div",{id:"wrapper",children:Object(A.jsx)(h.a,{path:"/",render:function(){return Object(A.jsx)(W,{})}})})});r.a.render(Object(A.jsx)(O.a,{children:Object(A.jsx)(i.a,{store:f,children:Object(A.jsx)(Z,{})})}),document.getElementById("body"))}},[[48,1,2]]]);
//# sourceMappingURL=main.dd798dcb.chunk.js.map