import{r as o,j as x,f,a,u as s,w as g,F as _,o as n,Z as h,b as t,c as b,t as m,k as v}from"./app-348c5bdc.js";import{_ as y}from"./GuestLayout-438eac34.js";import{S as w}from"./Spinner-2022b75a.js";import{_ as p}from"./InputLabel-80ac93aa.js";import"./ApplicationLogo-6c0ad60d.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},B=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight text-center"}," Fill Contacts from Bitrix ",-1),D={class:"flex items-center pt-4 pb-2"},I={style:{"margin-right":"20px"}},F=t("input",{class:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",type:"text",id:"text",name:"text"},null,-1),j=t("input",{class:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",type:"text",id:"text",name:"text"},null,-1),C={class:"flex content-center justify-center pt-2"},N={key:1,class:"flex content-center justify-center pt-2"},Z={__name:"Bitrix",setup(S){let i=o(0),r=o(0),l=o(!1),c=o(0),d=o(500);x(()=>{});function u(){c.value+=500,d.value+=500,v.post("api/contacts/bitrix",{fromID:c.value,toID:d.value}).then(e=>{i.value=e.data.total,r.value=e.data.now,e.data.now<e.data.total&&u(),l.value=!1,console.log(e)})}return(e,T)=>(n(),f(_,null,[a(s(h),{title:"Bitrix"}),a(y,null,{default:g(()=>[t("div",k,[B,t("div",D,[t("div",I,[a(p,{value:"From Id"}),F]),t("div",null,[a(p,{value:"To Id"}),j])]),t("div",C,[s(l)?(n(),b(w,{key:0})):(n(),f("p",N," Total : "+m(s(i))+", Now: "+m(s(r)),1))]),t("div",{class:"text-center p-2",id:"btn"},[t("button",{onClick:u,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Go ")])])]),_:1})],64))}};export{Z as default};
