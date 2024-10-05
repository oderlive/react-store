"use strict";(()=>{var e={};e.id=453,e.ids=[453],e.modules={53524:e=>{e.exports=require("@prisma/client")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},30600:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>v,patchFetch:()=>x,requestAsyncStorage:()=>f,routeModule:()=>y,serverHooks:()=>h,staticGenerationAsyncStorage:()=>w});var a={};r.r(a),r.d(a,{GET:()=>m,POST:()=>g});var i=r(73278),n=r(45002),s=r(54877),c=r(28707);let o=async e=>{let t=await c._.cart.findFirst({where:{token:e}});return t||(t=await c._.cart.create({data:{token:e}})),t};var d=r(46594),u=r(36102),p=r(84770),l=r.n(p);async function m(e){try{let t=e.cookies.get("cartToken")?.value;if(!t)return u.NextResponse.json({totalAmount:0,items:[]});let r=await c._.cart.findFirst({where:{OR:[{token:t}]},include:{items:{orderBy:{createdAt:"desc"},include:{productItem:{include:{product:!0}},ingredients:!0}}}});return u.NextResponse.json(r)}catch(e){return console.log("[CART_GET] Server error",e),u.NextResponse.json({message:"Не удалось получить корзину"},{status:500})}}async function g(e){try{let t=e.cookies.get("cartToken")?.value;t||(t=l().randomUUID());let r=await o(t),a=await e.json(),i=await c._.cartItem.findFirst({where:{cartId:r.id,productItemId:a.productItemId,ingredients:{every:{id:{in:a.ingredients}}}}});i?await c._.cartItem.update({where:{id:i.id},data:{quantity:i.quantity+1}}):await c._.cartItem.create({data:{cartId:r.id,productItemId:a.productItemId,quantity:1,ingredients:{connect:a.ingredients?.map(e=>({id:e}))}}});let n=await (0,d.y)(t),s=u.NextResponse.json(n);return s.cookies.set("cartToken",t),s}catch(e){return console.log("[CART_POST] Server error",e),u.NextResponse.json({message:"Не удалось создать корзину"},{status:500})}}let y=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/cart/route",pathname:"/api/cart",filename:"route",bundlePath:"app/api/cart/route"},resolvedPagePath:"C:\\Users\\TEST\\Downloads\\next-pizza-20241005T111532Z-001\\next-pizza\\app\\api\\cart\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:f,staticGenerationAsyncStorage:w,serverHooks:h}=y,v="/api/cart/route";function x(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:w})}},54203:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},28707:(e,t,r)=>{r.d(t,{_:()=>i});var a=r(53524);let i=globalThis.prismaGlobal??new a.PrismaClient},46594:(e,t,r)=>{r.d(t,{y:()=>n});var a=r(28707);let i=e=>(e.ingredients.reduce((e,t)=>e+t.price,0)+e.productItem.price)*e.quantity,n=async e=>{let t=await a._.cart.findFirst({where:{token:e},include:{items:{orderBy:{createdAt:"desc"},include:{productItem:{include:{product:!0}},ingredients:!0}}}});if(!t)return;let r=t.items.reduce((e,t)=>e+i(t),0);return await a._.cart.update({where:{id:t.id},data:{totalAmount:r},include:{items:{orderBy:{createdAt:"desc"},include:{productItem:{include:{product:!0}},ingredients:!0}}}})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[379,833],()=>r(30600));module.exports=a})();