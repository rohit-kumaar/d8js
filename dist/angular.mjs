import{a as s,b as a,c as i,d as m}from"./chunk-2F3DFNVB.mjs";import{Pipe as u}from"@angular/core";var c=!1,d,t;d=[u({name:"tdf",standalone:!0})];var r=class{transform(n,l="medium",o){try{return m(n,l,o)}catch(e){let p=e?.message?.includes?.("compiler")||e?.message?.includes?.("JIT")||e?.code==="NG0900";!c&&p&&(c=!0,console.warn(`
[tiny-date-formats] Angular JIT compiler not available.
Fix for development:
  \u2192 Add: import "@angular/compiler"; in main.ts

For production:
  \u2192 Use AOT: ng build --aot
`));try{return new Date(n).toLocaleString(o)}catch{return String(n)}}}};t=s(null),r=i(t,0,"TinyDateFormatPipe",d,r),a(t,1,r);export{r as TinyDateFormatPipe};
//# sourceMappingURL=angular.mjs.map