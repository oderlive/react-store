"use strict";(()=>{var e={};e.id=740,e.ids=[740],e.modules={53524:e=>{e.exports=require("@prisma/client")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},61212:e=>{e.exports=require("async_hooks")},84770:e=>{e.exports=require("crypto")},76162:e=>{e.exports=require("stream")},21764:e=>{e.exports=require("util")},84492:e=>{e.exports=require("node:stream")},81338:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>j,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>b,staticGenerationAsyncStorage:()=>x});var a={};r.r(a),r.d(a,{POST:()=>p});var o=r(73278),s=r(45002),i=r(54877),n=r(28707),c=r(3060),u=r(54721),d=r(53524),l=r(36102);async function p(e){try{let t=await e.json(),r=await n._.order.findFirst({where:{id:Number(t.object.metadata.order_id)}});if(!r)return l.NextResponse.json({error:"Order not found"});let a="suceeded"===t.object.status;await n._.order.update({where:{id:r.id},data:{status:a?d.OrderStatus.SUCCEEDED:d.OrderStatus.CANCELLED}});let o=JSON.parse(r?.items);a&&await (0,u.Cz)(r.email,"Next Pizza / Ваш заказ успешно оформлен",(0,c.d)({orderId:r.id,items:o}))}catch(e){return console.log("[Checkout Callback] Error:",e),l.NextResponse.json({error:"Server error"})}}let h=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/checkout/callback/route",pathname:"/api/checkout/callback",filename:"route",bundlePath:"app/api/checkout/callback/route"},resolvedPagePath:"C:\\Users\\TEST\\Downloads\\next-pizza-20241005T111532Z-001\\next-pizza\\app\\api\\checkout\\callback\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:x,serverHooks:b}=h,f="/api/checkout/callback/route";function j(){return(0,i.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:x})}},54203:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},28707:(e,t,r)=>{r.d(t,{_:()=>o});var a=r(53524);let o=globalThis.prismaGlobal??new a.PrismaClient},3060:(e,t,r)=>{r.d(t,{d:()=>o});var a=r(72051);let o=({orderId:e,items:t})=>(0,a.jsxs)("div",{children:[a.jsx("h1",{children:"Спасибо за покупку!"}),(0,a.jsxs)("p",{children:["Ваш заказ #$",e," оплачен. Список товаров"]}),a.jsx("hr",{}),a.jsx("ul",{children:t.map(e=>(0,a.jsxs)("li",{children:[e.productItem.product.name," | ",e.productItem.price," р. * ",e.quantity," шт. = "," ",e.productItem.price*e.quantity," р."]},e.id))})]})},54721:(e,t,r)=>{r.d(t,{Cz:()=>o}),Object.entries({20:"Маленькая",30:"Средняя",40:"Большая"}).map(([e,t])=>({name:t,value:e})),Object.entries({1:"традиционное",2:"тонкое"}).map(([e,t])=>({name:t,value:e}));var a=r(29384);let o=async(e,t,r)=>{let o=new a.R(process.env.RESEND_API_KEY),{data:s,error:i}=await o.emails.send({from:"onboarding@resend.dev",to:e,subject:t,text:"",react:r});if(i)throw i;return s}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[379,137,833],()=>r(81338));module.exports=a})();