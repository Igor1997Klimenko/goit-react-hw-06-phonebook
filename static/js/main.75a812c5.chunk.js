(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){t.exports={ButtonsContact:"ContactListItem_ButtonsContact__1lk1E",NumberContacts:"ContactListItem_NumberContacts__QeFvJ"}},15:function(t,e,n){t.exports={LabelForm:"Filter_LabelForm__foaSb",NamesForm:"Filter_NamesForm__185S6"}},18:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3_aZm"}},19:function(t,e,n){t.exports={Container:"Container_Container__1t0e4"}},34:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=n(7),i=n(5),l=n.n(i),u=n(3),m=n(6),b=Object(m.b)({name:"contacts",initialState:{items:[],filter:""},reducers:{addedContacts:function(t,e){var n=e.payload;t.items.push(n)},removeContacts:function(t,e){var n=e.payload;t.items=t.items.filter((function(t){return t.id!==n}))},contactsFilter:function(t,e){var n=e.payload;t.filter=n}}}),j=b.actions,d=j.addedContacts,f=j.removeContacts,O=j.contactsFilter,p=(b.reducer,n(1)),C=function(){var t=Object(u.b)(),e=Object(a.useState)(""),n=Object(o.a)(e,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),b=i[0],j=i[1],f=Object(u.c)((function(t){return t.contacts.items})),O=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":j(a);break;default:return}},C=function(){f.find((function(t){return t.name.toUpperCase()===c.toUpperCase()||t.number===b}))};return Object(p.jsxs)("form",{className:l.a.forma,onSubmit:function(e){e.preventDefault(),C()?alert("".concat(c," is already in contacts")):(t(d({name:c,number:b,id:Object(m.c)()})),r(""),j(""))},children:[Object(p.jsxs)("div",{className:l.a.blockform,children:[Object(p.jsxs)("label",{htmlFor:"",className:l.a.LabelForm,children:[Object(p.jsx)("span",{className:l.a.NamesForm,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:O})]}),Object(p.jsxs)("label",{className:l.a.LabelForm,children:[Object(p.jsx)("span",{className:l.a.NamesForm,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:O})]})]}),Object(p.jsx)("button",{type:"submit",className:l.a.ButtonsContact,children:"Add contact"})]})},h=n(14),x=n.n(h),_=function(t){var e=t.id,n=t.name,a=t.number,c=Object(u.b)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{className:x.a.NumberContacts,children:[n,": ",a]}),Object(p.jsx)("button",{className:x.a.ButtonsContact,type:"button",onClick:function(){return function(t){c(f(t))}(e)},children:"Delete"})]})},F=n(18),N=n.n(F),v=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))},L=function(){var t=Object(u.c)((function(t){return t.contacts.items})),e=Object(u.c)((function(t){return t.contacts.filter}));return Object(p.jsx)("ul",{className:N.a.ContactList,children:v(t,e).map((function(t){var e=t.id,n=t.name,a=t.number;return Object(p.jsx)("li",{children:Object(p.jsx)(_,{id:e,name:n,number:a})},e)}))})},y=n(19),g=n.n(y),k=function(t){var e=t.children;return Object(p.jsx)("div",{className:g.a.Container,children:e})},B=n(15),S=n.n(B),z=function(){var t=Object(u.b)();return Object(p.jsxs)("label",{className:S.a.LabelForm,children:[Object(p.jsx)("span",{className:S.a.NamesForm,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",placeholder:"filter contacts",onChange:function(e){t(O(e.currentTarget.value))}})]})},A=function(){return Object(p.jsxs)(k,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(z,{}),Object(p.jsx)(L,{})]})},w=n(2),J=n(20),Z=n.n(J),q=n(4),I={key:"contacts",storage:Z.a},U=Object(w.b)({contacts:b.reducer}),D=Object(q.g)(I,U),E=Object(m.a)({reducer:D,devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})}}),M={store:E,persistor:Object(q.h)(E)},P=n(21);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{store:M.store,children:Object(p.jsx)(P.a,{loading:null,persistor:M.persistor,children:Object(p.jsx)(A,{})})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={blockform:"ContactForm_blockform__3SiWX",LabelForm:"ContactForm_LabelForm__t62zP",NamesForm:"ContactForm_NamesForm__3uUz6",ButtonsContact:"ContactForm_ButtonsContact__3bdqC"}}},[[34,1,2]]]);
//# sourceMappingURL=main.75a812c5.chunk.js.map