import{a as s,b as a,c as m,d as i}from"./chunk-YIVX2JS6.mjs";import{Pipe as p}from"@angular/core";var c=!1,l,t;l=[p({name:"tdf",standalone:!0})];var r=class{transform(n,d="medium",o){try{return i(n,d,o)}catch(e){let f=e?.message?.includes?.("compiler")||e?.message?.includes?.("JIT")||e?.code==="NG0900";!c&&f&&(c=!0,console.warn(`
[tiny-date-formats] Angular JIT compiler not available.
Fix for development:
  \u2192 Add: import "@angular/compiler"; in main.ts

For production:
  \u2192 Use AOT: ng build --aot
`));try{return new Date(n).toLocaleString(o)}catch{return String(n)}}}};t=s(null),r=m(t,0,"TinyDateFormatPipe",l,r),a(t,1,r);export{r as TinyDateFormatPipe};
//# sourceMappingURL=angular.mjs.map