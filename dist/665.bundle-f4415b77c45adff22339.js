(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[665],{4665:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CardsContainer:()=>S});var a=r(7294);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,n,c,o=[],i=!0,p=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(a=n.call(r)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(e){p=!0,s=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function c(e){var t=s((0,a.useState)(),2),r=t[0],n=t[1],c=a.createElement(a.Fragment,null,a.createElement("h3",{className:"selectionResultsSplashHeader correct"},"Your Answer: ",e.correctCard.props.treeImgs.name),a.createElement("div",{className:"Card "+e.correctCard.props.treeImgs.catName},a.createElement("div",{className:"imgsWrapper"},a.createElement("div",{className:"imgFrame overviewFrame"},a.createElement("img",{className:"overviewImg treeImg",src:e.correctCard.props.treeImgs.overview})),a.createElement("div",{className:"imgFrame coneFruitFrame"},a.createElement("img",{className:"coneFruitImg treeImg",src:e.correctCard.props.treeImgs.conefruit})),a.createElement("div",{className:"imgFrame needleLeafFrame"},a.createElement("img",{className:"needleLeafImg treeImg",src:e.correctCard.props.treeImgs.needleleaf})))),a.createElement("button",{className:"selectionResultsSplashButton",onClick:e.newTurn},"Next")),o=a.createElement(a.Fragment,null,a.createElement("h3",{className:"selectionResultsSplashHeader incorrect"},"You Chose: ",e.selection.props.treeImgs.name),a.createElement("div",{className:"Card "+e.selection.props.treeImgs.catName},a.createElement("div",{className:"imgsWrapper"},a.createElement("div",{className:"imgFrame overviewFrame"},a.createElement("img",{className:"overviewImg treeImg",src:e.selection.props.treeImgs.overview})),a.createElement("div",{className:"imgFrame coneFruitFrame"},a.createElement("img",{className:"coneFruitImg treeImg",src:e.selection.props.treeImgs.conefruit})),a.createElement("div",{className:"imgFrame needleLeafFrame"},a.createElement("img",{className:"needleLeafImg treeImg",src:e.selection.props.treeImgs.needleleaf})))),a.createElement("h3",{className:"selectionResultsSplashHeader correct"},"Correct Answer: ",e.correctCard.props.treeImgs.name),a.createElement("div",{className:"Card "+e.correctCard.props.treeImgs.catName},a.createElement("div",{className:"imgsWrapper"},a.createElement("div",{className:"imgFrame overviewFrame"},a.createElement("img",{className:"overviewImg treeImg",src:e.correctCard.props.treeImgs.overview})),a.createElement("div",{className:"imgFrame coneFruitFrame"},a.createElement("img",{className:"coneFruitImg treeImg",src:e.correctCard.props.treeImgs.conefruit})),a.createElement("div",{className:"imgFrame needleLeafFrame"},a.createElement("img",{className:"needleLeafImg treeImg",src:e.correctCard.props.treeImgs.needleleaf})))),a.createElement("button",{className:"selectionResultsSplashButton",onClick:e.newTurn},"Next"));return(0,a.useEffect)((function(){"correct"===e.result?n(c):n(o)}),[]),a.createElement(a.Fragment,null,r)}function o(e){return a.createElement("div",{className:"EndCard"},a.createElement("h3",null,"You Finished the Quiz!"),a.createElement("p",null,"You scored ",e.rightAnswers," out of ",e.length),a.createElement("button",{onClick:e.resetGame},"Restart"))}const i={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},p={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},l="mousemove",u="mouseup";function g(e,t){if(0===t)return e;const r=Math.PI/180*t;return[e[0]*Math.cos(r)+e[1]*Math.sin(r),e[1]*Math.cos(r)-e[0]*Math.sin(r)]}function d(e,t){const r=t=>{const r="touches"in t;r&&t.touches.length>1||e(((e,s)=>{s.trackMouse&&!r&&(document.addEventListener(l,a),document.addEventListener(u,n));const{clientX:c,clientY:o}=r?t.touches[0]:t,i=g([c,o],s.rotationAngle);return s.onTouchStartOrOnMouseDown&&s.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),p),{initial:i.slice(),xy:i,start:t.timeStamp||0})}))},a=t=>{e(((e,r)=>{const a="touches"in t;if(a&&t.touches.length>1)return e;if(t.timeStamp-e.start>r.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:s,clientY:n}=a?t.touches[0]:t,[c,o]=g([s,n],r.rotationAngle),p=c-e.xy[0],l=o-e.xy[1],u=Math.abs(p),d=Math.abs(l),f=(t.timeStamp||0)-e.start,m=Math.sqrt(u*u+d*d)/(f||1),b=[p/(f||1),l/(f||1)],j=function(e,t,r,a){return e>t?r>0?"Right":"Left":a>0?"Down":"Up"}(u,d,p,l),v="number"==typeof r.delta?r.delta:r.delta[j.toLowerCase()]||i.delta;if(u<v&&d<v&&!e.swiping)return e;const h={absX:u,absY:d,deltaX:p,deltaY:l,dir:j,event:t,first:e.first,initial:e.initial,velocity:m,vxvy:b};h.first&&r.onSwipeStart&&r.onSwipeStart(h),r.onSwiping&&r.onSwiping(h);let w=!1;return(r.onSwiping||r.onSwiped||r[`onSwiped${j}`])&&(w=!0),w&&r.preventScrollOnSwipe&&r.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:h,swiping:!0})}))},s=t=>{e(((e,r)=>{let a;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<r.swipeDuration){a=Object.assign(Object.assign({},e.eventData),{event:t}),r.onSwiped&&r.onSwiped(a);const s=r[`onSwiped${a.dir}`];s&&s(a)}}else r.onTap&&r.onTap({event:t});return r.onTouchEndOrOnMouseUp&&r.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),p),{eventData:a})}))},n=e=>{document.removeEventListener(l,a),document.removeEventListener(u,n),s(e)},c=(e,t)=>{let n=()=>{};if(e&&e.addEventListener){const c=Object.assign(Object.assign({},i.touchEventOptions),t.touchEventOptions),o=[["touchstart",r,c],["touchmove",a,Object.assign(Object.assign({},c),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",s,c]];o.forEach((([t,r,a])=>e.addEventListener(t,r,a))),n=()=>o.forEach((([t,r])=>e.removeEventListener(t,r)))}return n},o={ref:t=>{null!==t&&e(((e,r)=>{if(e.el===t)return e;const a={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),a.cleanUpTouch=void 0),r.trackTouch&&t&&(a.cleanUpTouch=c(t,r)),Object.assign(Object.assign(Object.assign({},e),{el:t}),a)}))}};return t.trackMouse&&(o.onMouseDown=r),[o,c]}function f(e){const{trackMouse:t}=e,r=a.useRef(Object.assign({},p)),s=a.useRef(Object.assign({},i)),n=a.useRef(Object.assign({},s.current));let c;for(c in n.current=Object.assign({},s.current),s.current=Object.assign(Object.assign({},i),e),i)void 0===s.current[c]&&(s.current[c]=i[c]);const[o,l]=a.useMemo((()=>d((e=>r.current=e(r.current,s.current)),{trackMouse:t})),[t]);return r.current=function(e,t,r,a){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:a(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:a(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(r.current,s.current,n.current,l),o}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function b(e){var t=f({delta:10,onSwipedRight:e.handleRightSwipe,onSwiping:e.handleSwiping,onTouchEndOrOnMouseUp:e.handleUp});return a.createElement("div",m({},t,{className:"Card "+e.treeImgs.catName}),a.createElement("div",{className:"imgsWrapper"},a.createElement("div",{className:"imgFrame overviewFrame",onClick:e.handleCardClick.bind(this,e.treeImgs.overview,e.treeImgs.catName,"overviewImg")},a.createElement("img",{onLoad:e.reportImageLoaded,draggable:"false",className:"overviewImg treeImg",src:e.treeImgs.overview})),a.createElement("div",{className:"imgFrame coneFruitFrame",onClick:e.handleCardClick.bind(this,e.treeImgs.conefruit,e.treeImgs.catName,"coneFruitImg")},a.createElement("img",{onLoad:e.reportImageLoaded,draggable:"false",className:"coneFruitImg treeImg",src:e.treeImgs.conefruit})),a.createElement("div",{draggable:"false",className:"imgFrame needleLeafFrame",onClick:e.handleCardClick.bind(this,e.treeImgs.needleleaf,e.treeImgs.catName,"needleLeafImg")},a.createElement("img",{onLoad:e.reportImageLoaded,draggable:"false",className:"needleLeafImg treeImg",src:e.treeImgs.needleleaf}))))}var j=r(6104),v=r.n(j);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,n,c,o=[],i=!0,p=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(a=n.call(r)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(e){p=!0,s=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function x(e){var t=h((0,a.useState)(""),2),r=t[0],s=t[1],n=a.createElement("img",{className:"imgZoomed "+e.catName+" "+e.treeClass,alt:"Overview Img",src:e.treeImg});return(0,a.useEffect)((function(){s(n)}),[]),a.createElement("div",{className:"cardsModal"},a.createElement("button",{className:"xBtn",onClick:e.handleModalXClick}),a.createElement("div",{className:"modalImgWrapper"},r))}var y=r(4754);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,n,c,o=[],i=!0,p=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(a=n.call(r)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(e){p=!0,s=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function S(e){var t,s,n=k((0,a.useState)((t={},(s=r(9269)).keys().forEach((function(e){var r=e.split("/")[1],a=e.split("/")[2].split(".")[0];t.hasOwnProperty(r)||(t[r]={}),t[r][a]=s(e),t[r].name=function(e){switch(e){case"americanhornbeam":return"American Hornbeam";case"easternhemlock":return"Eastern Hemlock";case"easternredcedar":return"Eastern Red Cedar";case"floweringdogwood":return"Flowering Dogwood";case"fraserfir":return"Fraser Fir";case"northernredoak":return"Northern Red Oak";case"redspruce":return"Red Spruce";case"rvrbirch":return"River Birch";case"tblmtnpine":return"Table Mountain Pine";case"tuliptree":return"Tulip Tree";case"whitepine":return"White Pine";case"ylwbuckeye":return"Yellow Buckeye";case"americanbasswood":return"American Basswood";case"southerncatalpa":return"Southern Catalpa";case"blackcherry":return"Black Cherry";default:return'Set tree name in "treeImageHandling.js"';case"slipperyelm":return"Slippery Elm";case"wingedelm":return"Winged Elm";case"mountainash":return"Mountain Ash";case"sassafras":return"Sassafras";case"blacklocust":return"Black Locust";case"postoak":return"Post Oak";case"chestnutoak":return"Chestnut Oak";case"blackjackoak":return"Blackjack Oak";case"southernredoak":return"Southern Red Oak";case"scarletoak":return"Scarlet Oak";case"whiteoak":return"White Oak";case"firecherry":return"Fire Cherry";case"sycamore":return"Sycamore";case"virginiapine":return"Virginia Pine";case"loblollypine":return"Loblolly Pine";case"pitchpine":return"Pitch Pine";case"shortleafpine":return"Shortleaf Pine";case"sweetgum":return"Sweet Gum";case"blackwalnut":return"Black Walnut";case"americanholly":return"American Holly";case"whiteash":return"White Ash";case"americanbeech":return"American Beech";case"hawthorn":return"Hawthorn";case"easternredbud":return"Eastern Redbud"}}(r),t[r].catName=r})),t)),2),i=n[0],p=(n[1],(0,a.useState)(function(e,t,r,s,n,c){var o=[];for(var i in e)o.push(a.createElement(b,{key:v()(),reportImageLoaded:c,treeName:i,treeImgs:e[i],handleCardClick:t,handleRightSwipe:r,handleSwiping:s,handleUp:n}));return o}(i,(function(e,t,r){N(a.createElement(x,{treeImg:e,catName:t,treeClass:r,handleModalXClick:V}))}),(function(){}),(function(e){var t=Z(e.event.target);e.deltaX>0&&(t.style.left=e.deltaX+"px");e.deltaX>100?t.style.backgroundColor="green":t.style.backgroundColor="beige"}),(function(e){var t=Z(e.event.target);getComputedStyle(t).left.split("px")[0]>100&&T(t);t.style.left="0px",t.style.backgroundColor="beige"}),(function(){H((function(e){return e+1}))})))),l=k(p,2),u=l[0],g=(l[1],k((0,a.useState)(u),2)),d=g[0],f=g[1],m=k((0,a.useState)([]),2),j=m[0],h=m[1],w=k((0,a.useState)(""),2),E=w[0],S=w[1],O=k((0,a.useState)(""),2),I=O[0],N=O[1],C=k((0,a.useState)(""),2),F=C[0],T=C[1],A=k((0,a.useState)(0),2),M=A[0],L=A[1],U=k((0,a.useState)(!1),2),R=U[0],D=U[1],B=k((0,a.useState)(""),2),P=B[0],W=B[1],X=k((0,a.useState)(0),2),Y=X[0],H=X[1],$=k((0,a.useState)(""),2),G=$[0],_=$[1],q=a.createElement(a.Fragment,null,j[0],j[1],j[2],I);function z(e){W(a.createElement(c,{newTurn:Q,result:e,correctCard:E,selection:K(J(F))}))}function Q(){if(H(0),e.setSlideNumber((function(){return e.slideNumber+1})),W(q),d.length>0){var t=function(e){return Math.floor(Math.random()*e.length)},r=function(e,t){return t.filter((function(t){return!(t===e)}))},a=d,s=a[t(a)];e.setTargetTree(s.props.treeImgs.name),S(s),(a=r(s,a))||D(!0),f(a);for(var n=[s],c=r(s,u),o=1;o<3;o++){var i=t(c);n.push(c[i]),c=r(c[i],c)}n=function(e){for(var r=[],a=[],s=0;s<e.length;s++)a.push(s);return e.forEach((function(e){var s=t(a),n=a[s];r[n]=e,a.splice(s,1)})),r}(n),h(n)}else D(!0)}function V(){N("")}function Z(e){return e.classList.contains("Card")?e:Z(e.parentElement)}function J(e){return e[Object.keys(e).find((function(e){return e.startsWith("__reactFiber")}))].return.key}function K(e){return u.find((function(t){return t.key===e}))||"not found"}return(0,a.useEffect)((function(){9===Y?(document.querySelector(".cardsContainer").style.display="block",_("")):(document.querySelector(".cardsContainer").style.display="none",_(a.createElement(y.F,null)))}),[Y]),(0,a.useEffect)((function(){Q()}),[]),(0,a.useEffect)((function(){e.setTotalSlides(u.length)}),[u]),(0,a.useEffect)((function(){var t,r;F&&(t=E.key,r=J(F),t===r?(L((function(){return M+1})),T(""),e.setTargetTree("Correct!"),z("correct")):(T(""),e.setTargetTree("Oops!"),z("incorrect")))}),[F]),(0,a.useEffect)((function(){R?(e.setTargetTree("Congrats!"),e.setSlideNumber(u.length),H(9),W(a.createElement(o,{resetGame:e.resetGame,rightAnswers:M,length:u.length}))):W(q)}),[R,j,I]),a.createElement(a.Fragment,null,a.createElement("div",{className:"cardsContainer"},P),G)}},9269:(e,t,r)=>{var a={"./americanbasswood/conefruit.jpg":3035,"./americanbasswood/needleleaf.jpg":5273,"./americanbasswood/overview.jpg":5010,"./americanbeech/conefruit.jpg":6160,"./americanbeech/needleleaf.jpg":3025,"./americanbeech/overview.jpg":4318,"./americanholly/conefruit.jpg":8537,"./americanholly/needleleaf.jpg":4207,"./americanholly/overview.jpg":7534,"./americanhornbeam/conefruit.jpg":2020,"./americanhornbeam/needleleaf.jpg":3219,"./americanhornbeam/overview.jpg":3288,"./blackcherry/conefruit.jpg":4809,"./blackcherry/needleleaf.jpg":9759,"./blackcherry/overview.jpg":2785,"./blackjackoak/conefruit.jpg":9534,"./blackjackoak/needleleaf.jpg":6527,"./blackjackoak/overview.jpg":8787,"./blacklocust/conefruit.jpg":8505,"./blacklocust/needleleaf.jpg":9841,"./blacklocust/overview.jpg":6943,"./blackwalnut/conefruit.jpg":4199,"./blackwalnut/needleleaf.jpg":2354,"./blackwalnut/overview.jpg":6752,"./chestnutoak/conefruit.jpg":2254,"./chestnutoak/needleleaf.jpg":8583,"./chestnutoak/overview.jpg":423,"./easternhemlock/conefruit.jpg":5938,"./easternhemlock/needleleaf.jpg":9775,"./easternhemlock/overview.jpg":4420,"./easternredbud/conefruit.jpg":9328,"./easternredbud/needleleaf.jpg":5670,"./easternredbud/overview.jpg":9893,"./easternredcedar/conefruit.jpg":493,"./easternredcedar/needleleaf.jpg":7714,"./easternredcedar/overview.jpg":4037,"./firecherry/conefruit.jpg":2956,"./firecherry/needleleaf.jpg":1969,"./firecherry/overview.jpg":2393,"./floweringdogwood/conefruit.jpg":4264,"./floweringdogwood/needleleaf.jpg":9134,"./floweringdogwood/overview.jpg":955,"./fraserfir/conefruit.jpg":670,"./fraserfir/needleleaf.jpg":2316,"./fraserfir/overview.jpg":6237,"./hawthorn/conefruit.jpg":7641,"./hawthorn/needleleaf.jpg":5389,"./hawthorn/overview.jpg":9499,"./loblollypine/conefruit.jpg":8103,"./loblollypine/needleleaf.jpg":9518,"./loblollypine/overview.jpg":7036,"./mountainash/conefruit.jpg":2622,"./mountainash/needleleaf.jpg":328,"./mountainash/overview.jpg":6916,"./northernredoak/conefruit.jpg":3076,"./northernredoak/needleleaf.jpg":5007,"./northernredoak/overview.jpg":9039,"./pitchpine/conefruit.jpg":1019,"./pitchpine/needleleaf.jpg":995,"./pitchpine/overview.jpg":7585,"./postoak/conefruit.jpg":8388,"./postoak/needleleaf.jpg":3132,"./postoak/overview.jpg":1149,"./redspruce/conefruit.jpg":8499,"./redspruce/needleleaf.jpg":6285,"./redspruce/overview.jpg":3084,"./rvrbirch/conefruit.jpg":3408,"./rvrbirch/needleleaf.jpg":9217,"./rvrbirch/overview.jpg":4882,"./sassafras/conefruit.jpg":7632,"./sassafras/needleleaf.jpg":4649,"./sassafras/overview.jpg":6306,"./scarletoak/conefruit.jpg":7806,"./scarletoak/needleleaf.jpg":1865,"./scarletoak/overview.jpg":1323,"./shortleafpine/conefruit.jpg":6233,"./shortleafpine/needleleaf.jpg":7666,"./shortleafpine/overview.jpg":2778,"./slipperyelm/conefruit.jpg":6641,"./slipperyelm/needleleaf.jpg":3977,"./slipperyelm/overview.jpg":2072,"./southerncatalpa/conefruit.jpg":3524,"./southerncatalpa/needleleaf.jpg":6971,"./southerncatalpa/overview.jpg":4951,"./southernredoak/conefruit.jpg":6643,"./southernredoak/needleleaf.jpg":1914,"./southernredoak/overview.jpg":1782,"./sweetgum/conefruit.jpg":7409,"./sweetgum/needleleaf.jpg":2905,"./sweetgum/overview.jpg":6325,"./sycamore/conefruit.jpg":8959,"./sycamore/needleleaf.jpg":3709,"./sycamore/overview.jpg":5165,"./tblmtnpine/conefruit.jpg":8314,"./tblmtnpine/needleleaf.jpg":297,"./tblmtnpine/overview.jpg":3348,"./tuliptree/conefruit.jpg":1973,"./tuliptree/needleleaf.jpg":6377,"./tuliptree/overview.jpg":9435,"./virginiapine/conefruit.jpg":9334,"./virginiapine/needleleaf.jpg":2475,"./virginiapine/overview.jpg":1989,"./whiteash/conefruit.jpg":5644,"./whiteash/needleleaf.jpg":8270,"./whiteash/overview.jpg":7975,"./whiteoak/conefruit.jpg":3760,"./whiteoak/needleleaf.jpg":8186,"./whiteoak/overview.jpg":3676,"./whitepine/conefruit.jpg":9222,"./whitepine/needleleaf.jpg":4944,"./whitepine/overview.jpg":4051,"./wingedelm/conefruit.jpg":808,"./wingedelm/needleleaf.jpg":9805,"./wingedelm/overview.jpg":8765,"./ylwbuckeye/conefruit.jpg":5851,"./ylwbuckeye/needleleaf.jpg":580,"./ylwbuckeye/overview.jpg":6862};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=9269},3035:(e,t,r)=>{"use strict";e.exports=r.p+"ca626d49eb0f44e25160.jpg"},5273:(e,t,r)=>{"use strict";e.exports=r.p+"b51fff9761856f22a43d.jpg"},5010:(e,t,r)=>{"use strict";e.exports=r.p+"763f52acc52bfa371ec1.jpg"},6160:(e,t,r)=>{"use strict";e.exports=r.p+"a59fbf70b3d99746b6c1.jpg"},3025:(e,t,r)=>{"use strict";e.exports=r.p+"a53625b3aa832780db92.jpg"},4318:(e,t,r)=>{"use strict";e.exports=r.p+"bc515141e8200720e348.jpg"},8537:(e,t,r)=>{"use strict";e.exports=r.p+"2e91a87396aee548f12b.jpg"},4207:(e,t,r)=>{"use strict";e.exports=r.p+"fdc9c4df90b4d40083e0.jpg"},7534:(e,t,r)=>{"use strict";e.exports=r.p+"3afcac260255b2e4fcef.jpg"},2020:(e,t,r)=>{"use strict";e.exports=r.p+"6147a523ca65f48f4df6.jpg"},3219:(e,t,r)=>{"use strict";e.exports=r.p+"6a5aa9a887a80dfaf075.jpg"},3288:(e,t,r)=>{"use strict";e.exports=r.p+"9ff282d20882b3a42adc.jpg"},4809:(e,t,r)=>{"use strict";e.exports=r.p+"f7b376e1384e9196d1fe.jpg"},9759:(e,t,r)=>{"use strict";e.exports=r.p+"84ae76575e04d1faf16d.jpg"},2785:(e,t,r)=>{"use strict";e.exports=r.p+"40fda6f5b11a8839f626.jpg"},9534:(e,t,r)=>{"use strict";e.exports=r.p+"cbf31bf2708a9154dd7e.jpg"},6527:(e,t,r)=>{"use strict";e.exports=r.p+"5cd545b1979dc1eebdf0.jpg"},8787:(e,t,r)=>{"use strict";e.exports=r.p+"0cb21c75da2db3cb16cd.jpg"},8505:(e,t,r)=>{"use strict";e.exports=r.p+"cd9b36bfa986a878c70b.jpg"},9841:(e,t,r)=>{"use strict";e.exports=r.p+"3dc5f5461cd189695bbd.jpg"},6943:(e,t,r)=>{"use strict";e.exports=r.p+"94943d1c01493a48f9cf.jpg"},4199:(e,t,r)=>{"use strict";e.exports=r.p+"124d10dcf47bfc171448.jpg"},2354:(e,t,r)=>{"use strict";e.exports=r.p+"295c64d6f461064b7a9b.jpg"},6752:(e,t,r)=>{"use strict";e.exports=r.p+"73b65deed8a9663b4023.jpg"},2254:(e,t,r)=>{"use strict";e.exports=r.p+"119df1a8f7a82959b828.jpg"},8583:(e,t,r)=>{"use strict";e.exports=r.p+"b7e625c31e6399b57085.jpg"},423:(e,t,r)=>{"use strict";e.exports=r.p+"26185d36403a366c6e0f.jpg"},5938:(e,t,r)=>{"use strict";e.exports=r.p+"f65fd6b068a17330b496.jpg"},9775:(e,t,r)=>{"use strict";e.exports=r.p+"bb13996d6e8c2ee6ce44.jpg"},4420:(e,t,r)=>{"use strict";e.exports=r.p+"f786dd53652a862013a3.jpg"},9328:(e,t,r)=>{"use strict";e.exports=r.p+"3de781c1111dfe1f3e57.jpg"},5670:(e,t,r)=>{"use strict";e.exports=r.p+"dd4dc19c79d45aeb4de9.jpg"},9893:(e,t,r)=>{"use strict";e.exports=r.p+"24a2d1121a851b9eb0f6.jpg"},493:(e,t,r)=>{"use strict";e.exports=r.p+"160faa7dc765b657d4e0.jpg"},7714:(e,t,r)=>{"use strict";e.exports=r.p+"aa26c362869e18cd3d45.jpg"},4037:(e,t,r)=>{"use strict";e.exports=r.p+"a9d39c5c823d45ca6ae6.jpg"},2956:(e,t,r)=>{"use strict";e.exports=r.p+"3d21de4dbc7fed94d3f3.jpg"},1969:(e,t,r)=>{"use strict";e.exports=r.p+"2c700c8038282d1f84fc.jpg"},2393:(e,t,r)=>{"use strict";e.exports=r.p+"1c2f4cbf6ab8a6e915bc.jpg"},4264:(e,t,r)=>{"use strict";e.exports=r.p+"3d31df639cd34e501c87.jpg"},9134:(e,t,r)=>{"use strict";e.exports=r.p+"61bc86ddf7908587d7ba.jpg"},955:(e,t,r)=>{"use strict";e.exports=r.p+"796ea038f56f00abebf8.jpg"},670:(e,t,r)=>{"use strict";e.exports=r.p+"bab6b0db2dd0659cb16b.jpg"},2316:(e,t,r)=>{"use strict";e.exports=r.p+"52dbee14419025f515a0.jpg"},6237:(e,t,r)=>{"use strict";e.exports=r.p+"dc61d691b05a150af25a.jpg"},7641:(e,t,r)=>{"use strict";e.exports=r.p+"5f5770add1f2f50506db.jpg"},5389:(e,t,r)=>{"use strict";e.exports=r.p+"d3c69ffc4123ab1a4dfa.jpg"},9499:(e,t,r)=>{"use strict";e.exports=r.p+"cf1d15645c95e3c562b8.jpg"},8103:(e,t,r)=>{"use strict";e.exports=r.p+"2d88aeeec2ab77d00110.jpg"},9518:(e,t,r)=>{"use strict";e.exports=r.p+"51ff581449a7cb9ed938.jpg"},7036:(e,t,r)=>{"use strict";e.exports=r.p+"77922a59f589226f4401.jpg"},2622:(e,t,r)=>{"use strict";e.exports=r.p+"ed13860ca701387be64b.jpg"},328:(e,t,r)=>{"use strict";e.exports=r.p+"0017154db60e0a316b77.jpg"},6916:(e,t,r)=>{"use strict";e.exports=r.p+"d692c3d9470b4899ae1f.jpg"},3076:(e,t,r)=>{"use strict";e.exports=r.p+"ae994fca0a7d5356be7a.jpg"},5007:(e,t,r)=>{"use strict";e.exports=r.p+"90132eb3f44b5958db10.jpg"},9039:(e,t,r)=>{"use strict";e.exports=r.p+"2a1cfc367e81c429477a.jpg"},1019:(e,t,r)=>{"use strict";e.exports=r.p+"b75969867e243d742157.jpg"},995:(e,t,r)=>{"use strict";e.exports=r.p+"28f5aacdc01f9aa23ae8.jpg"},7585:(e,t,r)=>{"use strict";e.exports=r.p+"97379adbe1b22934210e.jpg"},8388:(e,t,r)=>{"use strict";e.exports=r.p+"2ba2e54a4927adbb7e06.jpg"},3132:(e,t,r)=>{"use strict";e.exports=r.p+"0747db0f9902d03393b8.jpg"},1149:(e,t,r)=>{"use strict";e.exports=r.p+"0d778df15aa4e1c40aed.jpg"},8499:(e,t,r)=>{"use strict";e.exports=r.p+"6ba0b2f45ee4d1420cca.jpg"},6285:(e,t,r)=>{"use strict";e.exports=r.p+"18f52ad02ff0bb276b07.jpg"},3084:(e,t,r)=>{"use strict";e.exports=r.p+"0e940133c14264dde765.jpg"},3408:(e,t,r)=>{"use strict";e.exports=r.p+"de43bfa1f757f067c120.jpg"},9217:(e,t,r)=>{"use strict";e.exports=r.p+"c89de24bb53a174662f5.jpg"},4882:(e,t,r)=>{"use strict";e.exports=r.p+"31ba4cb2c28310d924b4.jpg"},7632:(e,t,r)=>{"use strict";e.exports=r.p+"d60bdf4deafcb8a783c9.jpg"},4649:(e,t,r)=>{"use strict";e.exports=r.p+"b5d4973854ed97914d5a.jpg"},6306:(e,t,r)=>{"use strict";e.exports=r.p+"b16d86de15e5c1a9d931.jpg"},7806:(e,t,r)=>{"use strict";e.exports=r.p+"8122e9de01873e63c7e8.jpg"},1865:(e,t,r)=>{"use strict";e.exports=r.p+"a613b7d62b24da3d2286.jpg"},1323:(e,t,r)=>{"use strict";e.exports=r.p+"934739d95fe745230616.jpg"},6233:(e,t,r)=>{"use strict";e.exports=r.p+"95085f737f9ff130e711.jpg"},7666:(e,t,r)=>{"use strict";e.exports=r.p+"029bed0ef786d94ca175.jpg"},2778:(e,t,r)=>{"use strict";e.exports=r.p+"5a5df1a77df6023a113f.jpg"},6641:(e,t,r)=>{"use strict";e.exports=r.p+"0e8076f7fc9382c17ef4.jpg"},3977:(e,t,r)=>{"use strict";e.exports=r.p+"61ae3978c6b98c3b9582.jpg"},2072:(e,t,r)=>{"use strict";e.exports=r.p+"63dad13d14b1b8c83784.jpg"},3524:(e,t,r)=>{"use strict";e.exports=r.p+"09d9c56e9e446283dbb9.jpg"},6971:(e,t,r)=>{"use strict";e.exports=r.p+"847dcd6a08ad82ca4389.jpg"},4951:(e,t,r)=>{"use strict";e.exports=r.p+"e7a39e935c33e3102d07.jpg"},6643:(e,t,r)=>{"use strict";e.exports=r.p+"d06b3f4cfe2ff6236d98.jpg"},1914:(e,t,r)=>{"use strict";e.exports=r.p+"23cc5d47a43939272e14.jpg"},1782:(e,t,r)=>{"use strict";e.exports=r.p+"c6caa7f2b563fd808262.jpg"},7409:(e,t,r)=>{"use strict";e.exports=r.p+"476f78ee6875b3d2ab67.jpg"},2905:(e,t,r)=>{"use strict";e.exports=r.p+"d4e95f5590cb15c861d1.jpg"},6325:(e,t,r)=>{"use strict";e.exports=r.p+"2b9fbc465995150738d2.jpg"},8959:(e,t,r)=>{"use strict";e.exports=r.p+"007a207ed0445c6bcbf2.jpg"},3709:(e,t,r)=>{"use strict";e.exports=r.p+"5b83a550e8873adba72c.jpg"},5165:(e,t,r)=>{"use strict";e.exports=r.p+"6b34a31891ecf6b47b0e.jpg"},8314:(e,t,r)=>{"use strict";e.exports=r.p+"93c7de92df952ecf0424.jpg"},297:(e,t,r)=>{"use strict";e.exports=r.p+"17a190e3e789a72ba918.jpg"},3348:(e,t,r)=>{"use strict";e.exports=r.p+"cc651d5692f1bdd2c16f.jpg"},1973:(e,t,r)=>{"use strict";e.exports=r.p+"834afeeb751d557cfb0b.jpg"},6377:(e,t,r)=>{"use strict";e.exports=r.p+"b94ab369c8f3317ba6d7.jpg"},9435:(e,t,r)=>{"use strict";e.exports=r.p+"3442cdd24ef65197f833.jpg"},9334:(e,t,r)=>{"use strict";e.exports=r.p+"82632456ec54c5d16acd.jpg"},2475:(e,t,r)=>{"use strict";e.exports=r.p+"e71b90a1f985dd0e8a97.jpg"},1989:(e,t,r)=>{"use strict";e.exports=r.p+"b2438f05bfc0e7c0ab73.jpg"},5644:(e,t,r)=>{"use strict";e.exports=r.p+"1de2a5ceae54296887f8.jpg"},8270:(e,t,r)=>{"use strict";e.exports=r.p+"66a07fb8fa683489636f.jpg"},7975:(e,t,r)=>{"use strict";e.exports=r.p+"7ab6aa75b384ecd33dcc.jpg"},3760:(e,t,r)=>{"use strict";e.exports=r.p+"a75b7ea67a5b20155c9c.jpg"},8186:(e,t,r)=>{"use strict";e.exports=r.p+"9f7c7c17df3454b506d7.jpg"},3676:(e,t,r)=>{"use strict";e.exports=r.p+"fc95200e4c2c436f69ea.jpg"},9222:(e,t,r)=>{"use strict";e.exports=r.p+"de234476d9661651bd2f.jpg"},4944:(e,t,r)=>{"use strict";e.exports=r.p+"50f4b737de36f66209d6.jpg"},4051:(e,t,r)=>{"use strict";e.exports=r.p+"ef187cb71b80ba61190d.jpg"},808:(e,t,r)=>{"use strict";e.exports=r.p+"f1dfe450655fee4eda4e.jpg"},9805:(e,t,r)=>{"use strict";e.exports=r.p+"880c6a01da8ddde61221.jpg"},8765:(e,t,r)=>{"use strict";e.exports=r.p+"3ba85cb0f61d70fea8b8.jpg"},5851:(e,t,r)=>{"use strict";e.exports=r.p+"219ae1c3638dc9696ff4.jpg"},580:(e,t,r)=>{"use strict";e.exports=r.p+"8f0b3004f29a3adbb3f5.jpg"},6862:(e,t,r)=>{"use strict";e.exports=r.p+"48563fabf67f68fd0716.jpg"}}]);