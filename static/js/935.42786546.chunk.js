"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[935],{1548:(s,a,e)=>{e.d(a,{D:()=>d});e(2791);var i=e(4420),o=e(7689),r=e(184);let l=s=>({isAuth:s.auth.isAuth});const d=s=>(0,i.$j)(l)((a=>a.isAuth?(0,r.jsx)(s,{...a}):(0,r.jsx)(o.Fg,{to:"/login"})))},6935:(s,a,e)=>{e.r(a),e.d(a,{default:()=>w});e(2791);const i={dialog:"Dialog_dialog__Slrm3",dialog__wrapper:"Dialog_dialog__wrapper__4AGC1"};var o=e(1087),r=e(184);const l=s=>{const a="/dialogs/".concat(s.id);return(0,r.jsx)("div",{className:i.dialog,children:(0,r.jsx)(o.OL,{to:a,className:i.dialog__item,children:(0,r.jsxs)("div",{className:i.dialog__wrapper,children:[(0,r.jsx)("img",{src:s.profPic,alt:"avatarka"}),s.name]})})})},d="Message_message__c2FSx",t=s=>(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("img",{src:"https://koshka.top/uploads/posts/2021-12/1638931898_6-koshka-top-p-koshek-na-avatarku-6.jpg",alt:"profPic"}),s.message]}),g={dialogs__wrapper:"Dialogs_dialogs__wrapper__pn1bD",dialogs__items:"Dialogs_dialogs__items__5gFez",dialogs__messages:"Dialogs_dialogs__messages__nbwsy"};var n=e(704),_=e(6139),c=e(5530),m=e(5304);const p=(0,m.D)(50),h=s=>(0,r.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,r.jsx)(_.Z,{component:c.g,validate:[m.C,p],name:"newMessageBody",placeholder:"your message..."}),(0,r.jsx)("button",{children:"Send message"})]}),u=(0,n.Z)({form:"dialogsAddMessageForm"})(h),j=s=>{let a=s.dialogsPage.dialogs.map((s=>(0,r.jsx)(l,{id:s.id,name:s.name,profPic:s.profPic},s.id))),e=s.dialogsPage.messages.map((s=>(0,r.jsx)(t,{id:s.id,message:s.message},s.id)));return(0,r.jsxs)("div",{className:g.dialogs,children:[(0,r.jsx)("h2",{children:"Dialogs"}),(0,r.jsxs)("div",{className:g.dialogs__wrapper,children:[(0,r.jsx)("div",{className:g.dialogs__items,children:a}),(0,r.jsxs)("div",{className:g.dialogs__messages,children:[e,(0,r.jsx)(u,{onSubmit:a=>{s.sendMessage(a.newMessageBody)}})]})]})]})};var x=e(2807),v=e(4420),f=e(1548);const w=(0,e(1154).qC)((0,v.$j)((s=>({dialogsPage:s.dialogsPage})),{sendMessage:x.b}),f.D)(j)},5530:(s,a,e)=>{e.d(a,{I:()=>t,g:()=>d});const i="FormsControls_formControl__RaJ6P",o="FormsControls_error__zr2y+";var r=e(184);const l=s=>a=>{let{input:e,meta:l,...d}=a;const t=l.error&&l.touched;return(0,r.jsxs)("div",{className:"".concat(i," ").concat(t&&o),children:[(0,r.jsx)(s,{...e,...d}),t&&(0,r.jsx)("div",{children:l.error})]})},d=l("textarea"),t=l("input")},5304:(s,a,e)=>{e.d(a,{C:()=>i,D:()=>o});const i=s=>{if(!s)return"Field is required!"},o=s=>a=>{if(a.length>s)return"Max length is ".concat(s," symbols!")}}}]);
//# sourceMappingURL=935.42786546.chunk.js.map