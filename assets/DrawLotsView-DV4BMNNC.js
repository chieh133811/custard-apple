import{d as M,r as c,c as u,a as e,b as y,e as C,t as n,F as _,f as $,w as B,v as V,n as p,g as N,P as O,h as D,u as g,i as k,o as l,_ as K}from"./index-BJQeyqy5.js";const T={class:"draw-lots-top"},z={class:"tab-title"},A={class:"tab-wrap"},S=["onClick"],j={class:"setting-bar"},q=["placeholder"],G={class:"option-box-wrap"},H={class:"option-box"},J={class:"option-num"},Q=["onUpdate:modelValue","placeholder"],R={key:1,class:"option-text"},W=["onClick"],X=["onClick"],Y={key:1},Z={class:"operate-btn-wrap"},x={class:"result-content"},tt={class:"result-top"},et={class:"result-title"},st={class:"drawing-results"},ot=M({__name:"DrawLotsView",setup(at){const h=c(1),s=c([]),a=c([]),v=c(null),r=c(""),b=c(""),f=c(!1),P=[{id:1,name:"user-defined"},{id:2,name:"automatic"}];function m(){if(!r.value&&v.value){v.value.focus();return}s.value.push(r.value),r.value="",v.value&&v.value.focus()}function L(t){t.key==="Enter"&&m()}function I(t){if(s.value[t]){if(!a.value.includes(t)){a.value.push(t);return}a.value=a.value.filter(d=>d!==t)}}function U(t){s.value.splice(t,1)}function E(){!s.value.length||a.value.length||(s.value=[])}function F(){const t=s.value.length;!t||a.value.length||(b.value=s.value[Math.floor(Math.random()*t)],f.value=!0)}return(t,d)=>(l(),u(_,null,[e("div",T,[e("div",z,n(t.$t("draw-lots"))+"： ",1),e("div",A,[(l(),u(_,null,$(P,o=>e("button",{class:p({tab:!0,active:h.value===o.id}),key:`draw-lots-tab-${o.id}`,onClick:i=>h.value=o.id},n(t.$t(o.name)),11,S)),64))])]),h.value===1?(l(),u(_,{key:0},[e("div",j,[B(e("input",{ref_key:"theInput",ref:v,"onUpdate:modelValue":d[0]||(d[0]=o=>r.value=o),type:"text",placeholder:t.$t("enter-options"),class:"setting-input",onKeydown:L},null,40,q),[[V,r.value]]),e("button",{class:p({"setting-btn":!0,disabled:!r.value}),onClick:m},n(t.$t("submit")),3)]),e("div",G,[(l(!0),u(_,null,$(s.value,(o,i)=>(l(),u("div",H,[e("div",J,n(i+1),1),a.value.includes(i)?B((l(),u("input",{key:0,"onUpdate:modelValue":w=>s.value[i]=w,placeholder:t.$t("enter-options"),class:"option-edit-input",type:"text"},null,8,Q)),[[V,s.value[i]]]):(l(),u("div",R,n(o),1)),e("button",{class:p({edit:!0,disabled:!o}),onClick:w=>I(i)},[a.value.includes(i)?(l(),D(g(k),{key:0,icon:o?"check":"ban"},null,8,["icon"])):(l(),D(g(k),{key:1,icon:"pencil"}))],10,W),e("button",{class:"delete",onClick:w=>U(i)},[C(g(k),{icon:"trash-can"})],8,X)]))),256))])],64)):y("",!0),h.value===2?(l(),u("div",Y," 這個還沒寫ฅ(๑*д*๑)ฅ ")):y("",!0),e("div",Z,[e("button",{class:p({"clear-drawing-lots":!0,disabled:!s.value.length||a.value.length}),onClick:E},n(t.$t("clear-drawing-lots")),3),e("button",{class:p({"start-drawing-lots":!0,disabled:!s.value.length||a.value.length}),onClick:F},n(t.$t("start-drawing-lots")),3)]),C(O,{showPopBox:f.value,"onUpdate:showPopBox":d[1]||(d[1]=o=>f.value=o)},{"pop-content":N(()=>[e("div",x,[e("div",tt,[e("span",et,n(t.$t("drawing-results")),1)]),e("div",st,n(b.value),1)])]),_:1},8,["showPopBox"])],64))}}),nt=K(ot,[["__scopeId","data-v-73a75fc1"]]);export{nt as default};
