import{d,n as t,a_ as p,aF as m,D as l,aZ as g,z as f,A as h,C as v,I as w,H as y,B as o,aW as $}from"./index.b56e0f28.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{N as B}from"./Button.77702d3b.js";import"./use-rtl.e209f69a.js";const k={id:"user-login"},N={id:"login-card"},E=o(" \u70B9\u6211\u767B\u5F55 "),b=o(" Success "),F=d({setup(L){const n=t("$axios"),i=t("$api"),a=p(),r=m({username:"guest",password:"123456"});l(()=>{g().params.msg});const c=function(s){if(s.origin===this.$api.SERVER_BASE){let e=JSON.parse(s.data);console.log(e),e.code==200?(this.$store.commit("setToken",e.token),this.$router.push({name:"Home",params:{login:!0}}),this.$notify({title:e.msg,type:"success"})):this.$notify({title:e.msg,type:"warning"}),window.removeEventListener("message",this.receiveMsg)}},u=function(s){if(typeof s=="string"){let e="width=600,height=500,top=100,left=100,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true";window.open(s,"_blank",e),window.addEventListener("message",c)}else n.post(i.LOGIN,JSON.stringify(r)).then(e=>{e.code==200&&($().setToken(e.token),a.push({name:"Index"}),windows.$message.success("\u767B\u5F55\u6210\u529F!"))}).catch(e=>{})};return(s,e)=>{const _=B;return f(),h("div",k,[v("div",N,[E,w(_,{type:"success",onClick:u},{default:y(()=>[b]),_:1})])])}}});var V=x(F,[["__scopeId","data-v-0f7a3386"]]);export{V as default};
