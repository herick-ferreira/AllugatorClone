(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7534],{33174:function(e,t,n){Promise.resolve().then(n.bind(n,23755)),Promise.resolve().then(n.bind(n,8805)),Promise.resolve().then(n.bind(n,37739)),Promise.resolve().then(n.t.bind(n,22039,23)),Promise.resolve().then(n.t.bind(n,34561,23))},23755:function(e,t,n){"use strict";n.r(t),n.d(t,{Timer:function(){return u}});var r=n(94519),a=n(45978),s=n(34676),l=n(7149),o=n(3403);function i(e){let t=0>+e.value?"00":e.value;return(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("p",{style:{...e.legendColor&&{color:e.legendColor}},className:"mb-1 uppercase text-white/[.64] font-medium text-[10px]",children:e.label}),(0,r.jsx)("span",{style:{...e.borderColor&&{borderColor:e.borderColor}},className:(0,l.cn)("block p-2 rounded border border-white/[.14]","text-center text-[24px] font-bold","min-w-[40px]","h-[40px]","flex items-center justify-center"),children:t})]})}function c(e){var t;return"hours"===e.key&&(null===(t=e.sanitizedHour)||void 0===t?void 0:t.toString().padStart(2,"0"))||e.values[e.key]}function u(e){var t,n,u;let{period:d}=e,m=()=>{window.location.pathname.includes("how-it-works")||window.scrollTo({top:0,behavior:"smooth"})},x=!!(null==d?void 0:null===(t=d.timer)||void 0===t?void 0:t.enable),f=(null==d?void 0:d.timer)&&"".concat(d.timer.bgColor),h=(null==d?void 0:d.timer)&&"".concat(d.timer.textColor),g=(null==d?void 0:d.timer)&&"".concat(d.timer.titleColor),p=(null==d?void 0:d.timer)&&"".concat(d.timer.borderColor),b=(null==d?void 0:d.timer)&&"".concat(d.timer.legendColor),j=d.endAt,{values:v,isNegative:N}=(0,s.a)(j),k=(null===(n=d.timer)||void 0===n?void 0:n.keys.split(","))||[],y={days:"DIAS",hours:"HRS",minutes:"MIN",seconds:"SEG"},w=k.includes("days")?Number(v.hours):Number(v.hours||0)+24*Number(v.days||0),C=x&&!N;a.useEffect(()=>{x&&m()},[x]);let S=[{label:y[k[0]],value:c({sanitizedHour:w,key:k[0],values:v}),divider:":"},{label:y[k[1]],value:c({sanitizedHour:w,key:k[1],values:v}),divider:":"},{label:y[k[2]],value:c({sanitizedHour:w,key:k[2],values:v})}];return(0,r.jsxs)(o.d,{when:C,style:{...h&&{color:h},...f&&{backgroundColor:f}},className:(0,l.cn)("flex flex-col justify-center items-center overflow-hidden p-4","bg-neutral-800","text-white","md:gap-3"),children:[(0,r.jsx)("div",{className:"w-full text-center",children:(0,r.jsx)("h2",{style:{...g&&{color:g}},className:"text-center text-[10px] text-green-300 tracking-[1.5px]",children:(0,r.jsx)("span",{className:"uppercase font-bold",children:null===(u=d.timer)||void 0===u?void 0:u.title})})}),(0,r.jsx)("div",{className:"flex items-center gap-1",children:S.map(e=>{let{label:t,value:n,divider:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{borderColor:p,legendColor:b,label:t||"",value:n}),!!a&&(0,r.jsx)("p",{className:"mt-5 text-[16px] font-bold",children:a})]})})})]})}},3403:function(e,t,n){"use strict";n.d(t,{d:function(){return a}});var r=n(94519);n(45978);let a=e=>{let{when:t,children:n,className:a,style:s}=e;return t&&(0,r.jsx)("div",{style:s,className:a,children:n})}},8805:function(e,t,n){"use strict";n.r(t),n.d(t,{FooterInfoLinks:function(){return u}});var r=n(94519),a=n(7149),s=n(55683),l=n.n(s);n(45978);var o=n(83824),i=n(52532),c=n(41887);function u(e){let{urls:t,className:n,...s}=e,l=(0,c.z)();return(0,r.jsxs)("div",{className:(0,a.cn)("py-6 md:flex md:grid md:grid-cols-1",n),...s,children:[(0,r.jsxs)("div",{className:"md:flex md:gap-24",children:[(0,r.jsxs)("div",{className:"text-green-900 font-bold text-sm mb-12 max-w-[216px]",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:"NOSSAS REDES SOCIAIS"})}),(0,r.jsxs)("div",{className:"grid grid-cols-4 mr-24 gap-11 mt-4 w-[216px]",children:[(0,r.jsx)("a",{"aria-label":"instagram",className:"text-green-500 text-2xl hover:text-green-700",href:t.instagram,target:"_blank","data-testid":"instagram-icon",children:(0,r.jsx)(o.Zf_,{})}),(0,r.jsx)("a",{"aria-label":"twitter",className:"text-green-500 text-2xl hover:text-green-700",href:t.x,target:"_blank","data-testid":"twitter-icon",children:(0,r.jsx)(i.LCd,{})}),(0,r.jsx)("a",{"aria-label":"facebook",className:"text-green-500 text-2xl mb-6 hover:text-green-700",href:t.facebook,target:"_blank","data-testid":"facebook-icon",children:(0,r.jsx)(o.tBk,{})}),(0,r.jsx)("a",{"aria-label":"tiktok",className:"text-green-500 text-2xl hover:text-green-700",href:t.tiktok,target:"_blank","data-testid":"tiktok-icon",children:(0,r.jsx)(o.nTm,{})})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12",children:[(0,r.jsxs)("div",{className:"mb-6  md:w-[176px]",children:[(0,r.jsx)("h3",{className:"text-green-900 font-bold text-sm mb-4",children:"SOBRE N\xd3S"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.job,target:"_blank",children:"Trabalhe Conosco"})}),(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.alluBlog,target:"_blank",children:"Blog"})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-green-900 font-bold text-sm mb-4",children:"SERVI\xc7OS"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.products,target:"_blank",children:"Produtos"})})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-green-900 font-bold text-sm mb-4",children:"SEGURAN\xc7A"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.termsOfUse,target:"_blank",children:"Termos de uso"})}),(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.partnerships,target:"_blank",children:"Prote\xe7\xe3o de dados"})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-green-900 font-bold text-sm mb-4",children:"SUPORTE"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{className:"text-black opacity-60 text-xs font-medium mb-4 hover:text-neutral-700",children:(0,r.jsx)("a",{href:t.alluHelpCenter,target:"_blank",children:"Central de ajuda"})})})]})]})]}),(0,r.jsxs)("div",{className:"md:flex md:ml-[312px] md:gap-8",children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsxs)("div",{className:"col-span-2",children:[(0,r.jsx)("h3",{className:"text-green-900 font-bold text-sm mb-2 uppercase",children:"Contatos"}),(0,r.jsxs)("ul",{className:"flex gap-8",children:[(0,r.jsxs)("li",{className:"text-black",children:[(0,r.jsx)("h4",{className:"text-sm font-bold",children:"e-mail"}),(0,r.jsx)("a",{className:"text-black opacity-60 text-xs font-medium",href:"mailto:lite@allugator.com",target:"_blank",children:"contato@allugator.com"})]}),(0,r.jsxs)("li",{className:"text-black",children:[(0,r.jsx)("h4",{className:"text-sm font-bold",children:"Whatsapp"}),(0,r.jsx)("a",{className:"text-black opacity-60 text-xs font-medium",onClick:()=>l.track("Whatsapp Footer Clicked"),href:t.whatsapp,target:"_blank",children:"+55 31 9109-5737"})]})]})]})}),(0,r.jsx)(d,{})]})]})}function d(){return(0,r.jsxs)("div",{className:"flex flex-col gap-4 items-center pb-6",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6",children:[(0,r.jsx)(l(),{unoptimized:!0,src:"/reclame-aqui.png",className:"max-w-xs",width:185,height:40,alt:"Logo do Reclado aqui"}),(0,r.jsx)(l(),{unoptimized:!0,src:"/pagar-me.png",className:"max-w-xs",width:104,height:28,alt:"Logo pagarme",style:{objectFit:"contain"}})]}),(0,r.jsx)(l(),{unoptimized:!0,src:"/cartoes.png",className:"max-w-xs",width:379,height:24,alt:"Bandeiras de Cart\xf5es"})]})}},37739:function(e,t,n){"use strict";n.r(t),n.d(t,{HeaderNavigationMenuMobile:function(){return f},HeaderNavigationMenuWeb:function(){return h}});var r=n(94519),a=n(45978),s=n(74270),l=n(96896),o=n(58553),i=n(97191),c=n.n(i),u=n(7149),d=n(95399);let m={helpCenter:"https://ajuda.allugator.com/",termsOfService:"https://only-public-files.s3.sa-east-1.amazonaws.com/Termos+de+Uso+-+28.02.2024-2.pdf",dataPrivacy:"https://only-public-files.s3.sa-east-1.amazonaws.com/ALU+-+Aviso+de+Prote%C3%A7%C3%A3o+de+Dados+-+Parceria+(23.10.23)+dcom.pdf"};function x(e){let{categories:t}=e;return(0,r.jsxs)(r.Fragment,{children:[t.map(e=>(0,r.jsx)(s.sN,{children:(0,r.jsx)(c(),{href:e.href,children:(0,r.jsx)("span",{className:"flex items-center gap-2 px-12",children:e.title})})},e.title)),(0,r.jsx)(s.sN,{className:"flex justify-end",children:(0,r.jsx)(c(),{className:"flex underline text-neutral-800/[.65] font-bold items-center gap-2",href:"/catalog/all",children:"Ver todos"})})]})}function f(e){let{className:t,Logo:n,...i}=e,[f,h]=a.useState(!1),p=o.bd.map(e=>({href:"/catalog/".concat(e.slug),title:e.name})),b=(0,d.usePathname)();return a.useEffect(()=>{h(!1)},[b]),(0,r.jsx)("div",{...i,className:(0,u.cn)("",t),children:(0,r.jsxs)(s.dy,{direction:"right",open:f,onOpenChange:h,children:[(0,r.jsx)(s.Qz,{asChild:!0,children:(0,r.jsx)(s.hU,{"aria-label":"Abrir menu de navega\xe7\xe3o",children:(0,r.jsx)(l.wnE,{})})}),(0,r.jsxs)(s.sc,{forceMount:!0,variant:"right",children:[(0,r.jsx)(s.OX,{className:"pb-4 shadow-md",children:(0,r.jsx)(s.iI,{children:n})}),(0,r.jsxs)(s.Ng,{className:"divide-y",children:[(0,r.jsx)("div",{className:"py-6",children:(0,r.jsx)(g,{})}),(0,r.jsxs)(s.v2,{className:"py-6",children:[(0,r.jsxs)(s.bF,{className:"pl-0",children:[(0,r.jsx)(l.TZY,{}),"Produtos"]}),(0,r.jsx)(s.Dv,{children:(0,r.jsx)(x,{categories:p})})]}),(0,r.jsx)(s.v2,{open:!0,className:"py-6",children:(0,r.jsx)(s.Dv,{children:(0,r.jsx)(s.sN,{className:"pl-0",children:(0,r.jsxs)(c(),{href:m.helpCenter,className:"flex items-center gap-2",children:[(0,r.jsx)(l.g_1,{}),"Central de ajuda"]})})})}),(0,r.jsx)(s.v2,{open:!0,className:"py-6",children:(0,r.jsx)(s.Dv,{children:(0,r.jsx)(s.sN,{className:"pl-0",children:(0,r.jsxs)(c(),{href:"/how-it-works",className:"flex items-center gap-2",children:[(0,r.jsx)(l.DP0,{}),"Como funciona"]})})})}),(0,r.jsxs)("div",{className:"py-6 text-sm flex flex-col gap-6",children:[(0,r.jsx)(c(),{href:m.termsOfService,className:"underline",children:"Termos de uso"}),(0,r.jsx)(c(),{href:m.dataPrivacy,className:"underline",children:"Prote\xe7\xe3o de dados"})]})]})]})]})})}function h(e){let{className:t,...n}=e;return(0,r.jsx)("div",{...n,className:(0,u.cn)("",t),children:(0,r.jsxs)("ul",{className:"flex items-center uppercase text-[10px] tracking-[1.5px] gap-12 font-bold pr-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/catalog/all",children:"Produtos"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/how-it-works",children:"como funciona"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:m.helpCenter,children:"central de ajuda"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g,{textColor:n.textColor})})]})})}function g(e){let{textColor:t}=e;return(0,r.jsx)(c(),{href:"https://cliente.allugator.com",target:"_blank",children:(0,r.jsxs)(s.zx,{variant:"outline",style:{...t&&{color:t,borderColor:t}},className:"max-h-[26px] text-sm tracking-[.5px] font-bold gap-2 px-3 py-0",children:[(0,r.jsx)(l.tU0,{}),"J\xe1 sou cliente"]})})}},41887:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(44589),a=n(45978);function s(){return(0,a.useMemo)(()=>r.b.load({writeKey:"",cdnSettings:{integrations:{Orbite:{type:"destination",apiHost:"orbite-api-cjttw7kbaq-rj.a.run.app",apiKey:""}}}}),[])}},58553:function(e,t,n){"use strict";n.d(t,{Ty:function(){return a},bd:function(){return l},jY:function(){return s},p8:function(){return r}});let r=[{name:"Acre",code:"AC"},{name:"Alagoas",code:"AL"},{name:"Amap\xe1",code:"AP"},{name:"Amazonas",code:"AM"},{name:"Bahia",code:"BA"},{name:"Cear\xe1",code:"CE"},{name:"Distrito Federal",code:"DF"},{name:"Esp\xedrito Santo",code:"ES"},{name:"Goi\xe1s",code:"GO"},{name:"Maranh\xe3o",code:"MA"},{name:"Mato Grosso",code:"MT"},{name:"Mato Grosso do Sul",code:"MS"},{name:"Minas Gerais",code:"MG"},{name:"Par\xe1",code:"PA"},{name:"Para\xedba",code:"PB"},{name:"Paran\xe1",code:"PR"},{name:"Pernambuco",code:"PE"},{name:"Piau\xed",code:"PI"},{name:"Rio de Janeiro",code:"RJ"},{name:"Rio Grande do Norte",code:"RN"},{name:"Rio Grande do Sul",code:"RS"},{name:"Rond\xf4nia",code:"RO"},{name:"Roraima",code:"RR"},{name:"Santa Catarina",code:"SC"},{name:"S\xe3o Paulo",code:"SP"},{name:"Sergipe",code:"SE"},{name:"Tocantins",code:"TO"}],a=[{attributes:{description:"banner-allu",url_redirect:"/catalog/all",image_desktop:{data:{attributes:{url:"home/banners/desktop.jpg"}}},image_mobile:{data:{attributes:{url:"home/banners/mobile.jpg"}}},image_ultrawide:{data:{attributes:{url:"home/banners/ultrawide.jpg"}}}}}],s={attributes:{logo:{data:{attributes:{url:"logo-allu.jpg"}}}}},l=[{image:"/catalog/smartphones.png",name:"Smartphones",slug:"smartphones"},{image:"/catalog/notebooks.png",name:"Notebooks",slug:"notebooks"},{image:"/catalog/desktop.png",name:"Desktops",slug:"desktops"},{image:"/catalog/consoles.png",name:"Games",slug:"games"},{image:"/catalog/tablets.png",name:"Tablets",slug:"tablets"},{image:"/catalog/smartwatches.png",name:"Smartwatches",slug:"smartwatches"},{image:"/catalog/linha-branca.png",name:"Cafeteiras",slug:"cafeteiras"}]},7149:function(e,t,n){"use strict";n.d(t,{A2:function(){return d},CG:function(){return l},E4:function(){return j},GT:function(){return g},SG:function(){return c},Tg:function(){return p},UV:function(){return b},aH:function(){return h},cn:function(){return f},no:function(){return m},qc:function(){return x}});var r,a,s,l,o=n(80668),i=n(4092);function c(e){let t=u(Math.floor(e/864e5));return{days:t,hours:u(Math.floor(e%864e5/36e5)),minutes:u(Math.floor(e%36e5/6e4)),seconds:u(Math.floor(e%6e4/1e3))}}function u(e){return e.toString().padStart(2,"0")}function d(e){return e.replace(new RegExp(/[^a-zA-Z0-9\s]/g),"")}function m(e){return Object.fromEntries(Object.entries(e).map(e=>{let[t,n]=e;return[t,n.toLowerCase()]}))}function x(e,t){return new Date(e.setFullYear(e.getFullYear()-t))}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,o.W)(t))}function h(e){return new Intl.NumberFormat("pt-BR",{currency:"BRL",style:"currency"}).format(e)}function g(e){if(!e)return"";let t=Object.keys(e).reduce((t,n)=>(e[n]&&(t[n]=e[n]),t),{});return new URLSearchParams(t)}function p(e){return["".concat(e.code.substring(0,5),"-").concat(e.code.substring(5)),e.street,e.number?"N\xba ".concat(e.number):"",e.complement,e.neighborhood,e.city,e.state].filter(Boolean).join(", ")}n(52398),(r=s||(s={}))[r.yearly=12]="yearly",r[r.semester=6]="semester",r[r.quarterly=3]="quarterly";let b=e=>s[e];(a=l||(l={})).yearly="anual",a.semester="semestral",a.quarterly="trimestral";let j=e=>/[0-9]{8}/.test(e)},34676:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(45978),a=n(7149);function s(e){let t=new Date(e).getTime(),[n,s]=r.useState(t-new Date().getTime());r.useEffect(()=>{let e=setInterval(()=>{s(t-new Date().getTime())},1e3);return()=>clearInterval(e)},[t]);let l=(0,a.SG)(n),o=1>Number(l.seconds);return{values:l,isNegative:o}}},50889:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return i},default:function(){return c}});let r=n(68517),a=n(32686),s=n(23832),l=n(22039),o=r._(n(75337)),i=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=l.Image},74270:function(e,t,n){"use strict";n.d(t,{Af:function(){return r.Af},Bw:function(){return r.Bw},Ce:function(){return r.Ce},Dv:function(){return r.Dv},Ee:function(){return r.Ee},II:function(){return r.II},NM:function(){return r.NM},Ng:function(){return r.Ng},OF:function(){return r.OF},OX:function(){return r.OX},Pg:function(){return r.Pg},Ph:function(){return r.Ph},Ql:function(){return r.Ql},Qz:function(){return r.Qz},UU:function(){return r.UU},XZ:function(){return r.XZ},Y8:function(){return r.Y8},ZD:function(){return r.ZD},_v:function(){return r._v},aJ:function(){return r.aJ},bF:function(){return r.bF},cI:function(){return r.cI},dy:function(){return r.dy},e_:function(){return r.e_},f0:function(){return r.f0},gs:function(){return r.gs},h4:function(){return r.h4},hU:function(){return r.hU},i4:function(){return r.i4},iI:function(){return r.iI},iR:function(){return r.iR},ki:function(){return r.ki},pn:function(){return r.pn},sN:function(){return r.sN},sc:function(){return r.sc},tX:function(){return r.tX},u:function(){return r.u},v2:function(){return r.v2},wI:function(){return r.wI},xV:function(){return r.xV},xo:function(){return r.xo},yk:function(){return r.yk},zx:function(){return r.zx}}),n(77966);var r=n(82632)},77966:function(){},55683:function(e,t,n){e.exports=n(50889)},97191:function(e,t,n){e.exports=n(34561)},95399:function(e,t,n){e.exports=n(21625)}},function(e){e.O(0,[5576,2675,8835,6961,9251,7547,4589,4096,2632,7243,7638,269,1744],function(){return e(e.s=33174)}),_N_E=e.O()}]);