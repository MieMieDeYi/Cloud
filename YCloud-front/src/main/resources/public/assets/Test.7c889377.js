import{d as k,aF as s,r as F,_ as w,h as r,z as x,A as D,I as l,K as u,F as g,ax as C}from"./index.d1cb4c80.js";import{u as B}from"./use-message.32d3ea02.js";import{N as E}from"./Button.17b544ba.js";import{_ as b}from"./DataTable.6bfa61b9.js";import{_ as v}from"./Dropdown.8a0f4a2d.js";import"./use-rtl.a653c34e.js";import"./Icon.92eb07c3.js";import"./Eye.8489cff9.js";const P=k({setup(z){const a=s([]);a[0]={filename:"\u5DF4\u5566\u5566\u5C0F\u9B54\u4ED9\u79D8\u672F\u5B9D\u5178.pdf",hash:"121212",updateTime:"2022-02-02 00:00:00",type:"JPEG",size:"14839483"};const i=[{label:"\u590D\u5236",key:"duplicate"},{label:"\u62F7\u8D1D",key:"copy"},{label:"\u526A\u5207",key:"cut"},{label:()=>r("span",{style:{color:"red"}},"\u5220\u9664"),key:"delete"}],c=B(),t=F(!1),n=s({x:0,y:0}),p=w([{type:"selection",disabled(e,o){return e.hash==="Edward King 3"}},{title:"\u6587\u4EF6\u540D",key:"filename"},{title:"\u4FEE\u6539\u65E5\u671F",key:"updateTime"},{title:"\u7C7B\u578B",key:"type"},{title:"\u5927\u5C0F",key:"size",render:e=>(e.size/8/Math.pow(2,20)).toFixed(2)+"MB"},{title:"\u64CD\u4F5C",key:"operation",render:e=>r(E,{quaternary:!0,type:"error",size:"tiny",onClick:()=>{deleteFile(e)}},()=>"\u5220\u9664")}]),d=()=>{t.value=!1},m=()=>{t.value=!1},y=e=>({onContextmenu:o=>{c.info(JSON.stringify(e,null,2)),o.preventDefault(),t.value=!1,C().then(()=>{t.value=!0,n.x=o.clientX,n.y=o.clientY})}});return(e,o)=>{const _=b,f=v;return x(),D(g,null,[l(_,{"row-key":h=>h.hash,"row-props":y,"max-height":400,columns:u(p),data:u(a),"onUpdate:checkedRowKeys":e.handleCheck},null,8,["row-key","columns","data","onUpdate:checkedRowKeys"]),l(f,{placement:"bottom-start",trigger:"manual",x:u(n).x,y:u(n).y,options:i,show:t.value,"on-clickoutside":m,onSelect:d},null,8,["x","y","show"])],64)}}});export{P as default};
