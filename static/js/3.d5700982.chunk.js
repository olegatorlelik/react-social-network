(this["webpackJsonpreact-dz-02"]=this["webpackJsonpreact-dz-02"]||[]).push([[3],{320:function(s,t,e){s.exports={global:"MyPosts_global__11sa2",item:"MyPosts_item__2LyzX",wrapper:"MyPosts_wrapper__X3aiA",discription:"MyPosts_discription__1O6yY",addPost:"MyPosts_addPost__1lSZ5",titlePosts:"MyPosts_titlePosts__6hES-"}},321:function(s,t,e){s.exports={item:"Post_item__1pmMN",messag:"Post_messag__2TZsK"}},322:function(s,t,e){s.exports={wrapper:"ProfailInfo_wrapper__1wARP"}},323:function(s,t,e){s.exports={info:"Status_info__D0PQI",itemsStatus:"Status_itemsStatus__WeRAa",statusUser:"Status_statusUser__10y6I",discriptionUser:"Status_discriptionUser__3ZobB",infoUser:"Status_infoUser__2S0zP"}},325:function(s,t,e){"use strict";e.r(t);var a=e(5),i=e(35),r=e(20),c=e(37),n=e(36),o=e(1),u=e(0),d=e.n(u),j=e(14),l=e(107),p=e(109),b=e(10),h=e(320),O=e.n(h),m=e(321),f=e.n(m),x=e(69),_=function(s){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:f.a.item,children:[Object(o.jsx)("img",{src:x.b[Math.round(10*Math.random()+0)]}),Object(o.jsx)("span",{className:f.a.messag,children:s.message})]})})},N=e(139),U=e(140),v=e(78),P=e(86),S=d.a.memo((function(s){return Object(o.jsxs)("div",{className:O.a.wrapper,children:[Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:O.a.discription,children:[Object(o.jsx)(M,{onSubmit:function(t){s.addPost(t.addNewPost)}}),Object(o.jsx)("h3",{className:O.a.titlePosts,children:"\u041f\u043e\u0441\u0442\u044b"}),s.posts.posts.map((function(s){return Object(o.jsx)("div",{className:O.a.item,children:Object(o.jsx)(_,{message:s.message})},s.id)}))]})]})})),g=Object(v.a)(10),M=Object(U.a)({form:"ProfileAddNewPost"})((function(s){return Object(o.jsx)("form",{onSubmit:s.handleSubmit,children:Object(o.jsxs)("div",{className:O.a.global,children:[Object(o.jsx)(N.a,{name:"addNewPost",component:P.b,validate:[v.b,g],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"}),Object(o.jsx)("button",{className:O.a.addPost,children:"Add new post"})]})})})),w=S,y=Object(b.d)(Object(j.b)((function(s){return{posts:s.posts}}),(function(s){return{addPost:function(t){s(Object(p.a)(t))}}})),l.a)(w),I=e(54),z=e(322),A=e.n(z),k=e(80),F=e(323),C=e.n(F),D=function(s){var t=Object(u.useState)(!1),e=Object(k.a)(t,2),a=e[0],i=e[1],r=Object(u.useState)(s.status),c=Object(k.a)(r,2),n=c[0],d=c[1];Object(u.useEffect)((function(){d(s.status)}),[s.status]);return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:C.a.info,children:[a?Object(o.jsx)("input",{autoFocus:!0,placeholder:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441",onBlur:function(){i(!1),s.updateStatus(n)},onChange:function(s){return function(s){d(s.currentTarget.value)}(s)},value:n}):Object(o.jsx)("div",{className:C.a.itemsStatus,children:Object(o.jsx)("span",{onDoubleClick:function(){i(!0)},className:C.a.statusUser,children:s.status+" \u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0431\u044b\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043d\u043e \u0447\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})}),Object(o.jsxs)("span",{className:C.a.discriptionUser,children:[Object(o.jsx)("span",{className:C.a.infoUser,children:"\u0418\u043c\u044f:"})," ",s.fullName]}),Object(o.jsxs)("span",{className:C.a.discriptionUser,children:[Object(o.jsx)("span",{className:C.a.infoUser,children:"\u0418\u043d\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440:"}),s.id]}),Object(o.jsxs)("span",{className:C.a.discriptionUser,children:[Object(o.jsx)("span",{className:C.a.infoUser,children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442:"})," ",Math.round(30*Math.random()+0)]}),Object(o.jsxs)("span",{className:C.a.discriptionUser,children:[Object(o.jsx)("span",{className:C.a.infoUser,children:"\u0413\u043e\u0440\u043e\u0434:"})," \u041c\u0438\u043d\u0441\u043a"]}),Object(o.jsxs)("span",{className:C.a.discriptionUser,children:[Object(o.jsx)("span",{className:C.a.infoUser,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"})," +37529999999"," "]})]})})})})},Z=function(s){return s.profile?(console.log(s),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:A.a.wrapper,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:x.b[Math.round(10*Math.random()+0)],alt:"\u0427\u0422\u041e \u0422\u041e \u041f\u041e\u0428\u041b\u041e \u041d\u0415 \u0422\u0410\u041a"})}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{fullName:s.profile.fullName,status:s.status,updateStatus:s.updateStatus,id:s.profile.userId})})]})})):Object(o.jsx)(I.a,{})},B=function(s){return console.log(s),Object(o.jsxs)("div",{children:[Object(o.jsx)(Z,{profile:s.profile,status:s.status,updateStatus:s.updateUserStatus}),Object(o.jsx)(y,{})]})},E=e(12),J=function(s){Object(c.a)(e,s);var t=Object(n.a)(e);function e(s){return Object(i.a)(this,e),t.call(this,s)}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||(s=this.props.auroraizedUserId)||this.props.history.push("/login"),this.props.getUserProfail(s),this.props.getUserStatus(s)}},{key:"render",value:function(){return Object(o.jsx)(B,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,auroraizedUserId:this.props.AuroraizedUserId,isFetch:this.props.isFetch}))}}]),e}(d.a.Component);t.default=Object(b.d)(Object(j.b)((function(s){return{profile:s.posts.profile,status:s.posts.status,auroraizedUserId:s.auth.userId,isFetch:s.auth.isFetch}}),{getUserProfail:p.c,getUserStatus:p.d,updateUserStatus:p.e}),E.f,l.a)(J)}}]);
//# sourceMappingURL=3.d5700982.chunk.js.map