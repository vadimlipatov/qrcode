import{T as m,c as d,w as n,o as i,a as t,u as s,Z as u,f,t as p,g as _,b as o,n as g,e as b}from"./app-3a77b22c.js";import{_ as x}from"./GuestLayout-fe245869.js";import{_ as y,a as w}from"./TextInput-2e44e0e9.js";import{_ as h}from"./InputLabel-d516c55e.js";import{P as B}from"./PrimaryButton-781f6a8b.js";import"./ApplicationLogo-88dd8e67.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={key:0,class:"mb-4 font-medium text-sm text-green-600"},k=["onSubmit"],v={class:"flex items-center justify-center mt-4"},S=o("span",{class:"flex content-center"},"Авторизоваться",-1),D={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(a){const e=m({email:"",code:"",password:"",remember:!1}),l=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return($,r)=>(i(),d(x,null,{default:n(()=>[t(s(u),{title:"Log in"}),a.status?(i(),f("div",V,p(a.status),1)):_("",!0),o("form",{onSubmit:b(l,["prevent"])},[o("div",null,[t(h,{for:"code",value:`Введите код регистрационной стойки
`,class:"text-center"}),t(y,{id:"code",type:"text",class:"mt-1 block w-full",modelValue:s(e).code,"onUpdate:modelValue":r[0]||(r[0]=c=>s(e).code=c),required:"",autofocus:""},null,8,["modelValue"]),t(w,{class:"mt-2",message:s(e).errors.code},null,8,["message"])]),o("div",v,[t(B,{class:g(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[S]),_:1},8,["class","disabled"])])],40,k)]),_:1}))}};export{D as default};
