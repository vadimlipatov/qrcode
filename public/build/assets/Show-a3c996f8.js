import{k as i,f as p,a as r,w as d,b as t,t as c,e as h,d as o,m as _,o as x}from"./app-60493c4a.js";import{_ as m}from"./MainLayout-1b58b105.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const y={layout:m,props:["post"],components:{Link:i},methods:{deletePost(s){confirm("Are you sure you want to delete this contact?")&&this.$inertia.delete(`/posts/${s}`)}}},u={class:"w-2/3 mx-auto pt-8 text-center"},g=t("h1",{class:"text-lg mb-4"},"Post",-1),k={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},b={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},w=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"ID"),t("th",{scope:"col",class:"px-6 py-3"},"Title"),t("th",{scope:"col",class:"px-6 py-3"},"Content"),t("th",{scope:"col",class:"px-6 py-3"},[o(" Actions "),t("span",{class:"sr-only"},"Edit")])])],-1),v={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},B={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},C={class:"px-6 py-4"},D={class:"px-6 py-4"},E={class:"px-6 py-4 text-right"};function L(s,n,e,N,P,l){const a=_("Link");return x(),p("div",u,[g,r(a,{href:s.route("post.index"),class:"text-sky-500 block mb-3"},{default:d(()=>[o("Back")]),_:1},8,["href"]),t("div",k,[t("table",b,[w,t("tbody",null,[t("tr",v,[t("th",B,c(e.post.id),1),t("td",C,c(e.post.title),1),t("td",D,c(e.post.content),1),t("td",E,[r(a,{href:s.route("post.edit",e.post.id),class:"font-medium text-green-600 dark:text-green-500 hover:underline mr-2"},{default:d(()=>[o("Edit")]),_:1},8,["href"]),r(a,{onClick:n[0]||(n[0]=h(V=>l.deletePost(e.post.id),["prevent"])),class:"font-medium text-red-600 dark:text-red-500 hover:underline"},{default:d(()=>[o(" Delete ")]),_:1})])])])])])])}const $=f(y,[["render",L]]);export{$ as default};
