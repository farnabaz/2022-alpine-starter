import{J as s,u as i,b as p,a as c,a3 as u,B as l,R as e,m as d}from"./entry.e0720008.js";import{u as f}from"./asyncData.f794ab77.js";import y from"./Ellipsis.6d24c0be.js";import g from"./ComponentPlaygroundData.5189dfc9.js";/* empty css                                *//* empty css                     */import"./TabsHeader.88bb26cc.js";/* empty css                       */import"./ComponentPlaygroundProps.29ffee1c.js";import"./ProseH4.2b7ce6cf.js";/* empty css                    */import"./ProseCodeInline.a9c50892.js";/* empty css                            */import"./Badge.04efd255.js";import"./ContentSlot.308b543a.js";/* empty css                  */import"./ProseP.ee1fd090.js";/* empty css                   */import"./index.a9663a7e.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.888f4473.js";import"./ComponentPlaygroundTokens.vue.bfc243a5.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),x=d(_,[["__scopeId","data-v-ffdff82a"]]);export{x as default};
