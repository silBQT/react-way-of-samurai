"use strict";(self.webpackChunksocial_network_app=self.webpackChunksocial_network_app||[]).push([[935],{1548:(s,a,e)=>{e.d(a,{D:()=>d});e(2791);var o=e(4420),i=e(7689),l=e(184);let r=s=>({isAuth:s.auth.isAuth});const d=s=>(0,o.$j)(r)((a=>a.isAuth?(0,l.jsx)(s,{...a}):(0,l.jsx)(i.Fg,{to:"/login"})))},6935:(s,a,e)=>{e.r(a),e.d(a,{default:()=>f});e(2791);const o={dialog:"Dialog_dialog__NtB+Z",dialog__wrapper:"Dialog_dialog__wrapper__cF8bp"};var i=e(1087),l=e(184);const r=s=>{const a="/dialogs/".concat(s.id);return(0,l.jsx)("div",{className:o.dialog,children:(0,l.jsx)(i.OL,{to:a,className:o.dialog__item,children:(0,l.jsxs)("div",{className:o.dialog__wrapper,children:[(0,l.jsx)("img",{src:s.profPic,alt:"avatarka"}),s.name]})})})},d="Message_message__Y7Bnq",t=s=>(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("img",{src:"https://koshka.top/uploads/posts/2021-12/1638931898_6-koshka-top-p-koshek-na-avatarku-6.jpg",alt:"profPic"}),s.message]}),n={dialogs__wrapper:"Dialogs_dialogs__wrapper__u2dhq",dialogs__items:"Dialogs_dialogs__items__yWbAx",dialogs__messages:"Dialogs_dialogs__messages__g49no"};var g=e(704),c=e(6139),_=e(5530),m=e(5304);const p=(0,m.D)(50),h=s=>(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsx)(c.Z,{component:_.g,validate:[m.C,p],name:"newMessageBody",placeholder:"your message..."}),(0,l.jsx)("button",{children:"Send message"})]}),u=(0,g.Z)({form:"dialogsAddMessageForm"})(h),j=s=>{let a=s.dialogsPage.dialogs.map((s=>(0,l.jsx)(r,{id:s.id,name:s.name,profPic:s.profPic},s.id))),e=s.dialogsPage.messages.map((s=>(0,l.jsx)(t,{id:s.id,message:s.message},s.id)));return(0,l.jsxs)("div",{className:n.dialogs,children:[(0,l.jsx)("h2",{children:"Dialogs"}),(0,l.jsxs)("div",{className:n.dialogs__wrapper,children:[(0,l.jsx)("div",{className:n.dialogs__items,children:a}),(0,l.jsxs)("div",{className:n.dialogs__messages,children:[e,(0,l.jsx)(u,{onSubmit:a=>{s.sendMessage(a.newMessageBody)}})]})]})]})};var x=e(2807),v=e(4420),k=e(1548);const f=(0,e(1154).qC)((0,v.$j)((s=>({dialogsPage:s.dialogsPage})),{sendMessage:x.b}),k.D)(j)},5530:(s,a,e)=>{e.d(a,{I:()=>t,g:()=>d});const o="FormsControls_formControl__JXR2U",i="FormsControls_error__gRq-8";var l=e(184);const r=s=>a=>{let{input:e,meta:r,...d}=a;const t=r.error&&r.touched;return(0,l.jsxs)("div",{className:"".concat(o," ").concat(t&&i),children:[(0,l.jsx)(s,{...e,...d}),t&&(0,l.jsx)("div",{children:r.error})]})},d=r("textarea"),t=r("input")},5304:(s,a,e)=>{e.d(a,{C:()=>o,D:()=>i});const o=s=>{if(!s)return"Field is required!"},i=s=>a=>{if(a.length>s)return"Max length is ".concat(s," symbols!")}}}]);
//# sourceMappingURL=935.0c9d9a63.chunk.js.map