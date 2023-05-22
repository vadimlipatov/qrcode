import{j as C,o,f as i,b as t,F as f,k as w,t as d,u as r,l as m,m as $,p as h,q as k,a as g,w as b,Z as B,c as N,g as E,s as I}from"./app-3a77b22c.js";import{_ as S}from"./AuthenticatedLayout-f5209179.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./InputLabel-d516c55e.js";import"./ApplicationLogo-88dd8e67.js";const q={class:"w-4/5 mx-auto text-center"},D=t("h1",{class:"text-lg mb-4"},"Table",-1),L={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},M={class:"w-full text-sm text-left text-gray-500"},Z=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"ID"),t("th",{scope:"col",class:"px-6 py-3"},"Name"),t("th",{scope:"col",class:"px-6 py-3"},"Content"),t("th",{scope:"col",class:"px-6 py-3"},"Created"),t("th",{scope:"col",class:"px-6 py-3"},"Actions")])],-1),F={key:0},T={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},A={class:"px-6 py-4"},P={class:"px-6 py-4"},R={class:"px-6 py-4"},Q={class:"px-6 py-4"},z=["onClick"],G={key:1},H=t("p",{class:"text-center p-2"},"No data..",-1),J=[H],K={__name:"Table",props:{contacts:{type:Array}},setup(u){let{printCertificate:n}=C("printCertificate");return(p,x)=>(o(),i("div",q,[D,t("div",L,[t("table",M,[Z,u.contacts.length?(o(),i("tbody",F,[(o(!0),i(f,null,w(u.contacts,s=>(o(),i("tr",{key:s.id,class:"bg-white border-b hover:bg-gray-50"},[t("th",T,d(s.id),1),t("td",A,d(s.name),1),t("td",P,d(s.content),1),t("td",R,d(s.created_at),1),t("td",Q,[t("button",{onClick:_=>r(n)(s),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Print ",8,z)])]))),128))])):(o(),i("tbody",G,J))])])]))}},O={},U={role:"status"},W=t("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),X=t("span",{class:"sr-only"},"Loading...",-1),Y=[W,X];function tt(u,n){return o(),i("div",U,Y)}const et=V(O,[["render",tt]]),st=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight text-center"}," QR Code ",-1),ot={class:"py-12"},nt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},at={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg flex justify-between"},it={class:"p-6 text-gray-900 flex items-center justify-center"},ct=t("video",{width:"200",id:"preview",src:""},null,-1),rt={class:"flex items-center p-6"},lt={class:"",id:"print"},dt=t("p",null,"Имя",-1),pt=t("p",null,"Фамилия",-1),ut=t("p",null,"Название билета",-1),_t={class:"pt-2",id:"btn"},mt={class:"flex items-center p-6"},ht=t("input",{class:"ml-2 w-3/5 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",type:"text",id:"text",name:"text",readonly:""},null,-1),gt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},ft={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg py-8"},wt={__name:"Dashboard",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(u){let n=m({}),p=m([]),x=m(""),s=m(!0);function _(a){const e=document.getElementById("app"),c=document.createElement("div"),l=document.createElement("p");l.textContent=a.name,document.body.before(l),c.append(l);const y=document.createElement("p");y.textContent=a.lastName,c.append(y);const v=document.createElement("p");v.textContent="Название билета",c.append(v),document.body.before(c),e.style.visibility="hidden",window.print(),setTimeout(()=>{c.remove(),e.style.visibility="visible"},100)}return I("printCertificate",{printCertificate:_}),$(x,a=>{h.get("api/contacts").then(e=>{p.value=e.data,console.log(e.data)})}),setInterval(()=>{h.get("api/contacts").then(a=>{p.value=a.data})},5e3),k(()=>{h.get("api/contacts").then(e=>{p.value=e.data,console.log(e)});let a=new Instascan.Scanner({video:document.getElementById("preview")});Instascan.Camera.getCameras().then(function(e){e.length>0?(a.start(e[0]),s.value=!1):(alert("No cameras"),s.value=!1)}).catch(function(e){console.error(e)}),a.addListener("scan",function(e){x.value=e;const c=document.getElementById("text").value;document.getElementById("text").value=e,e!==c&&h.post("api/contacts",{id:e}).then(l=>{n.value=l.data,console.log(l.data),_(n.value)})})}),(a,e)=>(o(),i(f,null,[g(r(B),{title:"Dashboard"}),g(S,null,{header:b(()=>[st]),default:b(()=>[t("div",ot,[t("div",nt,[t("div",at,[t("div",it,[r(s)?(o(),N(et,{key:0})):E("",!0),ct]),t("div",rt,[t("div",lt,[r(n).name?(o(),i(f,{key:0},[t("p",null,d(r(n).name),1),t("p",null,d(r(n).lastName),1)],64)):(o(),i(f,{key:1},[dt,pt],64)),ut,t("p",_t,[t("button",{onClick:e[0]||(e[0]=c=>_(r(n))),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Print ")])])]),t("div",mt,[g(j,{value:"Scanner"}),ht])])])]),t("div",gt,[t("div",ft,[g(K,{contacts:r(p)},null,8,["contacts"])])])]),_:1})],64))}};export{wt as default};
