import{a as f,z as B,B as _,o as s,e as l,f as y,h,j as w,c as d,u as m,T as S,v as C,G as b,p as k,k as $,m as v,t as x,s as I,E as z}from"./entry.e0720008.js";import{u as P}from"./index.a9663a7e.js";/* empty css                      */const T=e=>(k("data-v-b3c33a06"),e=e(),$(),e),N=T(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),V={class:"icon-wrapper"},A=f({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,{copy:a}=P(),{prose:o}=B(),t=_("init"),c=g=>{a(n.content).then(()=>{t.value="copied",setTimeout(()=>{t.value="init"},1e3)}).catch(p=>{console.warn("Couldn't copy to clipboard!",p)})};return(g,p)=>{const i=b;return s(),l("button",{class:C([(e.show||t.value==="copied")&&"show"]),onClick:c},[N,y("span",V,[h(S,{name:"fade"},{default:w(()=>{var r,u;return[t.value==="copied"?(s(),d(i,{key:0,name:(r=m(o).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),d(i,{key:1,name:(u=m(o).copyButton)==null?void 0:u.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),E=v(A,[["__scopeId","data-v-b3c33a06"]]),M={key:0,class:"filename"},j=f({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(a,o)=>{const t=E;return s(),l("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:o[0]||(o[0]=c=>n.value=!0),onMouseleave:o[1]||(o[1]=c=>n.value=!1)},[e.filename?(s(),l("span",M,x(e.filename),1)):I("",!0),z(a.$slots,"default",{},void 0,!0),h(t,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),F=v(j,[["__scopeId","data-v-3ced033e"]]);export{F as default};
