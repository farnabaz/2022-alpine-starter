import B from"./ProseTh.4bc194c5.js";import N from"./ProseTr.6fed5436.js";import V from"./ProseThead.28cd9a79.js";import g from"./ProseCodeInline.a9c50892.js";import b from"./ProseTd.69b23e35.js";import C from"./ProseTbody.9322ec3b.js";import R from"./ProseTable.d2595066.js";import{u as F}from"./asyncData.f794ab77.js";import{m as p,a as S,a1 as j,b as c,o,c as l,j as e,h as r,i as d,s,e as A,F as E,r as I,t as m}from"./entry.e0720008.js";/* empty css                    *//* empty css                    *//* empty css                       *//* empty css                            *//* empty css                    *//* empty css                       */const L=S({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${j(t.of)}`,{data:h}=await F(t.of,()=>$fetch(k),"$NfwNoFP45N"),f=c(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=c(()=>{var a;return t.required!==void 0?t.required:(a=f.value)==null?void 0:a.find(n=>n.required!==void 0)}),q=c(()=>{var a;return t.values!==void 0?t.values:(a=f.value)==null?void 0:a.find(n=>n.values)}),i=c(()=>{var a;return t.description!==void 0?t.description:(a=f.value)==null?void 0:a.find(n=>n.description)}),y=c(()=>{var a;return t.default!==void 0?t.default:(a=f.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:f,showRequired:w,showValues:q,showDescription:i,showDefault:y}}});function Y(t,k,h,f,w,q){var v,D,P;const i=B,y=N,a=V,n=g,_=b,T=C,$=R;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l($,{key:0},{default:e(()=>[r(a,null,{default:e(()=>[r(y,null,{default:e(()=>[r(i,null,{default:e(()=>[d("Prop")]),_:1}),r(i,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(i,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(o(),l(i,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(o(),l(i,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(o(),l(i,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(T,null,{default:e(()=>[(o(!0),A(E,null,I(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const ne=p(L,[["render",Y]]);export{ne as default};
