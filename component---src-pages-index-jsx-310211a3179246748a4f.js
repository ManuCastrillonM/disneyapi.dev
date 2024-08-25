"use strict";(self.webpackChunkdisney_api_site=self.webpackChunkdisney_api_site||[]).push([[279],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return E},S:function(){return W},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(6540),n=(a(2729),a(5556)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,f);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},x={image:s().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],D=new Set;let I,_;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,T);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:N}=w,k=o(w,$),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{I||(I=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void D.add(C);if(_&&D.has(C))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:D.has(C),image:n},f)),D.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,D,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{D.has(C)&&_&&(S.current.innerHTML=_(i({isLoading:D.has(C),isLoaded:D.has(C),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:`${N}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));R.propTypes=x,R.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=o(t,j);return s&&console.warn(s),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const q=A((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:w,height:L,layout:x,images:T,placeholder:$,backgroundColor:D}=l,I=c(w,L,x),{style:_,className:O}=I,R=o(I,S),j={fallback:void 0,sources:[]};return T.fallback&&(j.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(j.sources=T.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},_,s,{backgroundColor:f}),className:`${O}${a?` ${a}`:""}`}),r.createElement(g,{layout:x,width:w,height:L},r.createElement(E,i({},u($,!1,x,w,L,D,y,b))),r.createElement(N,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,j,m,h)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:L,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=F;const W=A(R);W.displayName="StaticImage",W.propTypes=F},5879:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(6540),n=a(3188),s=a(2269);var i=()=>r.createElement("div",{className:"hero-module--hero--d526b"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero-module--hero-title--6838e"},"Disney API"),r.createElement("h2",null,"The REST and GraphQL API based on Disney characters"))),o=a(2532);function l(){const e="https://api.disneyapi.dev/character",{0:t,1:n}=(0,r.useState)(""),{0:s,1:i}=(0,r.useState)(!1),{0:l,1:c}=(0,r.useState)(""),d=(0,r.useRef)(null);async function u(e){try{const t=await fetch(e),a=await t.json(),r=JSON.stringify(a.data,void 0,2);n(r)}catch(t){n(`Error retrieving data from ${e}`)}}function m(e){if(!e||13===e.keyCode||"sendButton"===e.target.id){u(d.current.value)}}return(0,r.useEffect)((()=>{u(e)}),[]),r.createElement("section",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"apiDemo-module--demo-content--bd011"},r.createElement("div",{className:"apiDemo-module--demo-header--85eac"},r.createElement("span",{className:"apiDemo-module--demo-header-red--bba72"}),r.createElement("span",{className:"apiDemo-module--demo-header-yellow--8da56"}),r.createElement("span",{className:"apiDemo-module--demo-header-green--6869e"}),r.createElement("div",{className:"apiDemo-module--demo-header-title--864bf"},"Try me!")),r.createElement("div",{className:"apiDemo-module--demo-body--f9154"},r.createElement("div",{className:"apiDemo-module--demo-request--2100a"},r.createElement("input",{className:"apiDemo-module--demo-input--0fdcd",type:"text",placeholder:e,"aria-label":"type the api url here to try it",ref:d,onKeyUp:m,defaultValue:e}),r.createElement("button",{onClick:async function(){const e=d.current.value;try{await navigator.clipboard.writeText(e),c("URL copied to clipboard!")}catch(t){c("Failed to copy: ",t)}i(!0),setTimeout((()=>{i(!1)}),3e3)},className:"apiDemo-module--demo-copy--178c2"},r.createElement(o.S,{src:"../../images/copy-paste-icon.svg",alt:"copy url button",__imageData:a(7339)}),r.createElement("div",{className:"apiDemo-module--demo-copy-alert--bb288 "+(s?"apiDemo-module--demo-copy-alert-active--f598b":"")},l)),r.createElement("button",{className:"apiDemo-module--demo-button--d7a35",onClick:m,id:"sendButton"},"send")),r.createElement("div",{className:"apiDemo-module--demo-result--c5446"},r.createElement("pre",null,t))))))}console.log("%c\n⠀⠀⠀⢀⣀⣠⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀\n⠀⢀⣴⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣦⡀⠀\n⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁\n⠀⠀⠉⠛⠛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠉⠀⠀ Hello Dev Friends!\n⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⣿⣿⡿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀\n","color: red; background: white; font-size: 14px");var c=()=>r.createElement(n.A,null,r.createElement(s.A,{title:"Home"}),r.createElement(i,null),r.createElement(l,null))},7339:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/43c58fa4e7c67a8c8e0ef1048464eaea/5fb79/copy-paste-icon.svg","srcSet":"/static/43c58fa4e7c67a8c8e0ef1048464eaea/49f58/copy-paste-icon.svg 200w,\\n/static/43c58fa4e7c67a8c8e0ef1048464eaea/48025/copy-paste-icon.svg 400w,\\n/static/43c58fa4e7c67a8c8e0ef1048464eaea/5fb79/copy-paste-icon.svg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/43c58fa4e7c67a8c8e0ef1048464eaea/2e34e/copy-paste-icon.webp 200w,\\n/static/43c58fa4e7c67a8c8e0ef1048464eaea/416c3/copy-paste-icon.webp 400w,\\n/static/43c58fa4e7c67a8c8e0ef1048464eaea/c1587/copy-paste-icon.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":800}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-310211a3179246748a4f.js.map