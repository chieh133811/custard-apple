import{d as M,r as c,c as u,a as t,b as y,e as C,t as n,F as _,f as $,w as B,v as V,n as p,g as N,P as O,h as D,u as g,i as k,o as l,_ as K}from"./index-DHTo6cFv.js";const T={class:"draw-lots-top"},z={class:"tab-title"},A={class:"tab-wrap"},S=["onClick"],j={class:"setting-bar"},q=["placeholder"],G={class:"option-box-wrap"},H={class:"option-box"},J={class:"option-num"},Q=["onUpdate:modelValue","placeholder"],R={key:1,class:"option-text"},W=["onClick"],X=["onClick"],Y={key:1},Z={class:"operate-btn-wrap"},x={class:"result-content"},ee={class:"result-title"},te={class:"drawing-results"},se=M({__name:"DrawLotsView",setup(oe){const h=c(1),s=c([]),a=c([]),v=c(null),r=c(""),b=c(""),f=c(!1),P=[{id:1,name:"user-defined"},{id:2,name:"automatic"}];function m(){if(!r.value&&v.value){v.value.focus();return}s.value.push(r.value),r.value="",v.value&&v.value.focus()}function L(e){e.key==="Enter"&&m()}function I(e){if(s.value[e]){if(!a.value.includes(e)){a.value.push(e);return}a.value=a.value.filter(d=>d!==e)}}function U(e){s.value.splice(e,1)}function E(){!s.value.length||a.value.length||(s.value=[])}function F(){const e=s.value.length;!e||a.value.length||(b.value=s.value[Math.floor(Math.random()*e)],f.value=!0)}return(e,d)=>(l(),u(_,null,[t("div",T,[t("div",z,n(e.$t("draw-lots"))+"： ",1),t("div",A,[(l(),u(_,null,$(P,o=>t("button",{class:p({tab:!0,active:h.value===o.id}),key:`draw-lots-tab-${o.id}`,onClick:i=>h.value=o.id},n(e.$t(o.name)),11,S)),64))])]),h.value===1?(l(),u(_,{key:0},[t("div",j,[B(t("input",{ref_key:"theInput",ref:v,"onUpdate:modelValue":d[0]||(d[0]=o=>r.value=o),type:"text",placeholder:e.$t("enter-options"),class:"setting-input",onKeydown:L},null,40,q),[[V,r.value]]),t("button",{class:p({"setting-btn":!0,disabled:!r.value}),onClick:m},n(e.$t("submit")),3)]),t("div",G,[(l(!0),u(_,null,$(s.value,(o,i)=>(l(),u("div",H,[t("div",J,n(i+1),1),a.value.includes(i)?B((l(),u("input",{key:0,"onUpdate:modelValue":w=>s.value[i]=w,placeholder:e.$t("enter-options"),class:"option-edit-input",type:"text"},null,8,Q)),[[V,s.value[i]]]):(l(),u("div",R,n(o),1)),t("button",{class:p({edit:!0,disabled:!o}),onClick:w=>I(i)},[a.value.includes(i)?(l(),D(g(k),{key:0,icon:o?"check":"ban"},null,8,["icon"])):(l(),D(g(k),{key:1,icon:"pencil"}))],10,W),t("button",{class:"delete",onClick:w=>U(i)},[C(g(k),{icon:"trash-can"})],8,X)]))),256))])],64)):y("",!0),h.value===2?(l(),u("div",Y," 這個還沒寫ฅ(๑*д*๑)ฅ ")):y("",!0),t("div",Z,[t("button",{class:p({"clear-drawing-lots":!0,disabled:!s.value.length||a.value.length}),onClick:E},n(e.$t("clear-drawing-lots")),3),t("button",{class:p({"start-drawing-lots":!0,disabled:!s.value.length||a.value.length}),onClick:F},n(e.$t("start-drawing-lots")),3)]),C(O,{showPopBox:f.value,"onUpdate:showPopBox":d[1]||(d[1]=o=>f.value=o)},{"pop-content":N(()=>[t("div",x,[t("div",ee,n(e.$t("drawing-results")),1),t("div",te,n(b.value),1)])]),_:1},8,["showPopBox"])],64))}}),le=K(se,[["__scopeId","data-v-f970956f"]]);export{le as default};
