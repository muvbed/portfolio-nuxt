(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{114:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:function(){return{skills:[{name:"HTML 5",image:n(177),animation_delay:250},{name:"CSS 3",image:n(178),animation_delay:1100},{name:"Java Script",image:n(179),animation_delay:500},{name:"Кроссбраузерная верстка",image:n(180),animation_delay:1650},{name:"Адаптивная верстка",image:n(181),animation_delay:1900},{name:"БЭМ",image:n(182),animation_delay:1250},{name:"jQuery",image:n(183),animation_delay:1950},{name:"Vue.js / Nuxt.js",image:n(184),animation_delay:1550},{name:"npm / yarn",image:n(185),animation_delay:1800},{name:"Gulp",image:n(186),animation_delay:1150},{name:"Webpack",image:n(187),animation_delay:1400},{name:"Pug (Jade)",image:n(188),animation_delay:1350},{name:"Less",image:n(189),animation_delay:1500},{name:"Sass",image:n(190),animation_delay:1700},{name:"Stylus",image:n(191),animation_delay:1200},{name:"Git / GitHub",image:n(192),animation_delay:1850},{name:"Adobe Photoshop",image:n(193),animation_delay:1750},{name:"Figma",image:n(194),animation_delay:1300}]}}}},115:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:function(){return{projects:[{src:"https://muvbed.github.io/rush-effect/",name:"Rush Effect",background:n(195)},{src:"https://muvbed.github.io/sunrise-hotel/",name:"Sunrise Hotel",background:n(196)},{src:"https://muvbed.github.io/aion-salvation/",name:"Aion Salvation",background:n(197)}]}}}},116:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:function(){return{links:[{href:"https://github.com/muvbed",text:"github muvbed",icon:"github-link"},{href:"https://vk.com/muvbed",text:"vk muvbed",icon:"vk-link"},{href:"https://t.me/muvbed",text:"telegram muvbed",icon:"telegram-link"}]}}}},120:function(t,e,n){"use strict";n(36);e.a=function(t,e){e("ancScroller",(function(t){var e,n,o=!0,r=!0;window.innerHeight>t.height&&setTimeout((function(){c()}),500);for(var i=0;i<t.ancors.length;i++)!function(i){t.links[i].addEventListener("click",(function(){n=i,t.ancors[i].scrollIntoView({behavior:"smooth"})}))}(i);function c(){e=Math.abs(t.ancors[0].getBoundingClientRect().top),n=0;for(var i=0;i<t.ancors.length;i++)Math.abs(t.ancors[i].getBoundingClientRect().top)<e&&(e=Math.abs(t.ancors[i].getBoundingClientRect().top),n=i);o?(o=!1,setTimeout((function(){t.ancors[n].scrollIntoView({behavior:"smooth"})}),500)):t.ancors[n].scrollIntoView({behavior:"smooth"}),document.addEventListener("wheel",l,{passive:!1})}function l(e){e.preventDefault(),r&&(r=!1,e.deltaY<0&&n>0?(n--,t.ancors[n].scrollIntoView({behavior:"smooth"})):e.deltaY>0&&n<t.ancors.length-1?(n++,t.ancors[n].scrollIntoView({behavior:"smooth"})):r=!0,r||setTimeout((function(){r=!0}),500))}window.addEventListener("resize",(function(){window.innerHeight>t.height?c():document.removeEventListener("wheel",l,{passive:!1})}))}))}},121:function(t,e,n){"use strict";n(36);e.a=function(t,e){e("scrollClassAdd",(function(){for(var t=document.getElementsByClassName("scrollClassAddElem"),e=window.pageYOffset+window.innerHeight,n=[],o=[],r=[],c=[],i=0;i<t.length;i++)t[i].style.visibility="hidden";function l(){for(var i=0;i<t.length;i++)n[i]=t[i].getAttribute("data-scroll-class-add-class"),o[i]=t[i].getAttribute("data-scroll-class-add-offset"),r[i]=t[i].getAttribute("data-scroll-class-add-delay"),window.pageYOffset>t[i].getBoundingClientRect().top+window.pageYOffset?c[i]=t[i].getBoundingClientRect().bottom+window.pageYOffset-parseInt(o[i]):c[i]=t[i].getBoundingClientRect().top+window.pageYOffset+parseInt(o[i])}function f(){for(var i=0;i<t.length;i++)e>c[i]&&window.pageYOffset<c[i]&&function(i){setTimeout((function(){t[i].style.visibility="visible",t[i].classList.add(n[i])}),r[i])}(i)}l(),f(),window.addEventListener("resize",(function(){e=window.pageYOffset+window.innerHeight,l(),f()})),window.addEventListener("scroll",(function(){e=window.pageYOffset+window.innerHeight,f()}))}))}},161:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("86a1d3aa",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";n(36);var o={mounted:function(){var t=this;setTimeout((function(){t.$refs.preloader.classList.contains("preloader_onload")||(t.$refs.preloader.classList.add("preloader_onload"),t.$scrollClassAdd())}),500)}},r=(n(246),n(39)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"preloader",staticClass:"preloader"},[n("div",{staticClass:"preloader__inner"})]),t._v(" "),n("Nuxt")],1)}),[],!1,null,"0a00c174",null);e.a=component.exports},169:function(t,e,n){t.exports=n.p+"text.cur"},170:function(t,e,n){t.exports=n.p+"normal.cur"},171:function(t,e,n){t.exports=n.p+"fonts/MagistralC-Bold.cb0967f.ttf"},172:function(t,e,n){t.exports=n.p+"fonts/MagistralC-Bold.299a010.woff"},173:function(t,e,n){t.exports=n.p+"fonts/PressStart2P-Regular.d98d68e.ttf"},174:function(t,e,n){t.exports=n.p+"fonts/PressStart2P-Regular.7aadf72.woff"},175:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("e24ccd8c",content,!0,{sourceMap:!1})},176:function(t,e,n){t.exports=n.p+"img/preloader.65d703c.gif"},177:function(t,e,n){t.exports=n.p+"img/html5.912f649.png"},178:function(t,e,n){t.exports=n.p+"img/css3.de63e5f.png"},179:function(t,e,n){t.exports=n.p+"img/javascript.660da8c.png"},180:function(t,e,n){t.exports=n.p+"img/crossbrowser.bbc2ac2.png"},181:function(t,e,n){t.exports=n.p+"img/adaptive.94d6f95.png"},182:function(t,e,n){t.exports=n.p+"img/bem.a179171.png"},183:function(t,e,n){t.exports=n.p+"img/jquery.9dd3536.png"},184:function(t,e,n){t.exports=n.p+"img/vuejs.d7cb20b.png"},185:function(t,e,n){t.exports=n.p+"img/npm.f7aa825.png"},186:function(t,e,n){t.exports=n.p+"img/gulp.6819d09.png"},187:function(t,e,n){t.exports=n.p+"img/webpack.fff3ed3.png"},188:function(t,e,n){t.exports=n.p+"img/pug.76f8b01.png"},189:function(t,e,n){t.exports=n.p+"img/less.c642f15.png"},190:function(t,e,n){t.exports=n.p+"img/sass.f584618.png"},191:function(t,e,n){t.exports=n.p+"img/stylus.09d8afb.png"},192:function(t,e,n){t.exports=n.p+"img/github.36ecfd1.png"},193:function(t,e,n){t.exports=n.p+"img/ps.37d024c.png"},194:function(t,e,n){t.exports=n.p+"img/figma.b14574f.png"},195:function(t,e,n){t.exports=n.p+"img/fitness.e297491.png"},196:function(t,e,n){t.exports=n.p+"img/hotel.673ae36.png"},197:function(t,e,n){t.exports=n.p+"img/aion.6468167.png"},198:function(t,e,n){"use strict";n.r(e),e.default=n.p+"020858e7126b6f1efc1d557b31b8cbc6.svg"},199:function(t,e,n){"use strict";n.r(e),e.default=n.p+"27f6eaa097341301c8bf6e438629b342.svg"},200:function(t,e,n){n(201),t.exports=n(202)},245:function(t,e,n){var o=n(60),r=n(123),c=n(171),l=n(172),f=n(173),x=n(174),d=n(170),m=n(169),h=o(!1),w=r(c),v=r(l),y=r(f),_=r(x),k=r(d),C=r(m);h.push([t.i,'@font-face{font-family:"MagistralC-Bold";font-display:swap;src:url('+w+') format("truetype"),url('+v+') format("woff")}@font-face{font-family:"PressStart2P-Regular";font-display:swap;src:url('+y+') format("truetype"),url('+_+') format("woff")}body{margin:0;font-family:Arial,Helvetica,sans-serif;letter-spacing:3px;background:#000;overflow-x:hidden;overflow-y:hidden;cursor:url('+k+"),default}.scrollHidden{overflow:hidden!important}.container{width:1170px;margin:0 auto;padding:0 15px;box-sizing:border-box}.scene{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;transform:scale(1.05)}.scene__bg,.scene__wrapper{height:100%}.scene__bg{width:100%;background:no-repeat 50%/cover}.subtitle{position:relative;z-index:0;margin-top:0;text-align:center;text-transform:uppercase;font-size:48px;font-family:MagistralC-Bold;color:#fff;cursor:url("+C+'),text}.subtitle:after,.subtitle:before{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;opacity:.8}.subtitle:before{z-index:-2;color:#f0f;-webkit-animation:glitch2 1s linear infinite;animation:glitch2 1s linear infinite}.subtitle:after{z-index:-1;color:#0ff;animation:glitch2 1s infinite reverse}@media (max-width:1199px){.container{width:962px}.subtitle:after,.subtitle:before{-webkit-animation:none;animation:none}}@media (max-width:991px){.container{width:738px}.subtitle{font-size:42px}}@media (max-width:767px){.container{width:100%}.subtitle{font-size:36px}}@media (max-height:899px){body{overflow-y:auto}}@-webkit-keyframes glitch{0%{clip:rect(55px,9999px,56px,0)}5%{clip:rect(47px,9999px,30px,0)}10%{clip:rect(33px,9999px,36px,0)}15%{clip:rect(35px,9999px,9px,0)}20%{clip:rect(63px,9999px,59px,0)}25%{clip:rect(96px,9999px,98px,0)}30%{clip:rect(58px,9999px,77px,0)}35%{clip:rect(50px,9999px,34px,0)}40%{clip:rect(60px,9999px,72px,0)}45%{clip:rect(10px,9999px,81px,0)}50%{clip:rect(2px,9999px,60px,0)}55%{clip:rect(23px,9999px,89px,0)}60%{clip:rect(76px,9999px,91px,0)}65%{clip:rect(62px,9999px,30px,0)}70%{clip:rect(60px,9999px,73px,0)}75%{clip:rect(60px,9999px,87px,0)}80%{clip:rect(2px,9999px,14px,0)}85%{clip:rect(28px,9999px,87px,0)}90%{clip:rect(73px,9999px,50px,0)}95%{clip:rect(79px,9999px,70px,0)}to{clip:rect(17px,9999px,79px,0)}}@keyframes glitch{0%{clip:rect(55px,9999px,56px,0)}5%{clip:rect(47px,9999px,30px,0)}10%{clip:rect(33px,9999px,36px,0)}15%{clip:rect(35px,9999px,9px,0)}20%{clip:rect(63px,9999px,59px,0)}25%{clip:rect(96px,9999px,98px,0)}30%{clip:rect(58px,9999px,77px,0)}35%{clip:rect(50px,9999px,34px,0)}40%{clip:rect(60px,9999px,72px,0)}45%{clip:rect(10px,9999px,81px,0)}50%{clip:rect(2px,9999px,60px,0)}55%{clip:rect(23px,9999px,89px,0)}60%{clip:rect(76px,9999px,91px,0)}65%{clip:rect(62px,9999px,30px,0)}70%{clip:rect(60px,9999px,73px,0)}75%{clip:rect(60px,9999px,87px,0)}80%{clip:rect(2px,9999px,14px,0)}85%{clip:rect(28px,9999px,87px,0)}90%{clip:rect(73px,9999px,50px,0)}95%{clip:rect(79px,9999px,70px,0)}to{clip:rect(17px,9999px,79px,0)}}@-webkit-keyframes glitch2{0%,to{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}}@keyframes glitch2{0%,to{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}}',""]),t.exports=h},246:function(t,e,n){"use strict";n(161)},247:function(t,e,n){var o=n(60),r=n(123),c=n(176),l=o(!1),f=r(c);l.push([t.i,".preloader[data-v-0a00c174]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:4;display:flex;justify-content:center;align-items:center;background:#000;transition:.7s .4s}.preloader_onload[data-v-0a00c174]{transform:translateY(-100%)}.preloader__inner[data-v-0a00c174]{width:256px;height:88px;background:url("+f+") no-repeat 50%}.preloader_onload .preloader__inner[data-v-0a00c174]{opacity:0;transition:.25s}",""]),t.exports=l},248:function(t,e,n){"use strict";n.r(e);var o=n(37),r=n(114),c=n(115),l=n(116);e.default=function(){return new o.a.Store({modules:{skills:r.default,projects:c.default,contacts:l.default}})}},249:function(t,e,n){var map={"./icons.svg":198,"./sprite.svg":199};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=249}},[[200,14,2,15]]]);