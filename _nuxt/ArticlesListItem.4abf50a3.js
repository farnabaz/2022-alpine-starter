import{a as d,o as r,e as m,f as e,h as o,j as s,c as f,s as n,t as a,u,v as h,x as _,y as x,m as k}from"./entry.e0720008.js";import{f as y}from"./date.824a539b.js";/* empty css                             */const p={class:"image"},B={class:"content"},N={class:"description"},g=d({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){return(c,C)=>{const l=_,i=x;return t.article._path&&t.article.title?(r(),m("article",{key:0,class:h({featured:t.featured})},[e("div",p,[o(i,{to:t.article._path},{default:s(()=>[t.article.cover?(r(),f(l,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):n("",!0)]),_:1},8,["to"])]),e("div",B,[o(i,{to:t.article._path,class:"headline"},{default:s(()=>[e("h1",null,a(t.article.title),1)]),_:1},8,["to"]),e("p",N,a(t.article.description),1),e("time",null,a(("formatDate"in c?c.formatDate:u(y))(t.article.date)),1)])],2)):n("",!0)}}}),b=k(g,[["__scopeId","data-v-4cac9aab"]]);export{b as default};
