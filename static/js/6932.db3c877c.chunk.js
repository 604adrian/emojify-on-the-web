(self.webpackChunkweb_emojify=self.webpackChunkweb_emojify||[]).push([[6932],{6932:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(2791),i=n(4330),r=n(9671),a=n(8235),s=n.n(a);n(1174);var l=n(184);const u=(0,o.memo)((function(e){let{top:t,submit:n,count:a}=e;const[u,c]=(0,o.useState)(!1),x=t?"emoji-bor":"emoji-funk";let f=t?s()(n):s()(n,!0),b=u?["text-box","text-box-big"].join(" "):["text-box","text-box-slim"].join(" "),d=t?["expand-button-container","expand-button-top"].join(" "):["expand-button-container","expand-button-bottom"].join(" ");const p=(0,o.useRef)(null),h=(0,o.useRef)(null);(0,o.useEffect)((()=>{p.current&&(0,r.ZP)(p.current)}),[p]);const j=((e,t)=>{const[n,i]=o.useState(void 0);return o.useLayoutEffect((()=>{const{current:n}=e,o=()=>{const e=n.scrollWidth>n.clientWidth;i(e),t&&t(e)};n&&("ResizeObserver"in window&&new ResizeObserver(o).observe(n),o())}),[t,e]),n})(h,(e=>{}));let m=j?u?"":"text-box-overflow":"";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:p,style:{gridColumnEnd:"".concat(j||u?"7":"8")},className:[b,x,m,"emoji-text"].join(" "),children:u?(0,l.jsx)("div",{className:["emoji-text","big"].join(" "),children:(0,l.jsx)("pre",{children:f})}):(0,l.jsx)("pre",{className:["emoji-text","small"].join(" "),ref:h,children:f})}),(j||u)&&(0,l.jsx)("div",{className:d,children:(0,l.jsx)("button",{className:"expand-btn",onClick:()=>c(!u),children:(0,l.jsx)("abbr",{title:"".concat(u?"Minimize":"Expand"),children:(0,l.jsx)(i.Vmf,{style:{position:"relative",transition:"all 0.2s ease-in",transform:"rotate(".concat(u?0:"-0.5turn",")")}})})})})]})}))},8235:(e,t,n)=>{var o=n(5273),i=(o.emojibet,o.alphabet,o.alphaValues,n(7283)),r=n(5159);e.exports=function(e,t){void 0===t&&(t=!1);var n,o=[],a=e.split(""),s=function(e){var t=r(e,a);void 0!==t&&o.push(t)},l=function(e){return-1!==["~","\\"].indexOf(e)},u=!1;return(n=a).map((function(e,r){var a=e.toLowerCase(),c=l(a),x=l(n[r-1]),f=i(a),b=function(e,t,n){var o=[".",",","-",";","!","?","*"];return(!i||-1!==o.indexOf(e))&&!!(i||-1!==o.indexOf(e)&&" "!==e)}(e);"~"===e&&(u=!u),x&&"~"!==e?o.push(e):c||(u?o.push(e):(t?f?o.push(f):s(a):t||("*"===a?o.push(i(a)):s(a)),b||o.push(" ")))})),o.join("").trim()}},5273:e=>{var t={a:["\ud83c\udde6","\ud83c\udd70\ufe0f"],b:["\ud83c\udde7","\ud83c\udd71\ufe0f"],c:["\ud83c\udde8","\xa9\ufe0f"],d:["\ud83c\udde9","\ud83d\udc2c"],e:["\ud83c\uddea","\ud83d\udce7"],f:["\ud83c\uddeb"],g:["\ud83c\uddec","\ud83d\udddc\ufe0f"],h:["\ud83c\udded"],i:["\ud83c\uddee","\u2139\ufe0f ","\ud83d\udc41\ufe0f"],j:["\ud83c\uddef","\ud83c\udfd1","\ud83d\udc0b"],k:["\ud83c\uddf0"],l:["\ud83c\uddf1","\ud83c\udfd2"],m:["\ud83c\uddf2","\u24c2\ufe0f"],n:["\ud83c\uddf3","\ud83d\udc61"],o:["\ud83c\uddf4","\ud83c\udd7e\ufe0f","\u2b55","\ud83c\udf69"],p:["\ud83c\uddf5","\ud83c\udd7f\ufe0f"],q:["\ud83c\uddf6","\ud83d\udd2e"],r:["\ud83c\uddf7","\xae\ufe0f"],s:["\ud83c\uddf8","\ud83d\udcb2"],t:["\ud83c\uddf9","\u271d\ufe0f","\u2626\ufe0f","\ud83c\udf9a\ufe0f","\u26cf\ufe0f"],u:["\ud83c\uddfa","\u26ce"],v:["\ud83c\uddfb","\u270c\ufe0f"],w:["\ud83c\uddfc","\ud83d\udd31"],x:["\ud83c\uddfd","\u2716\ufe0f","\u274e","\u274c","\ud835\udd4f"],y:["\ud83c\uddfe","\u270c\ufe0f","\ud83d\udd27"],z:["\ud83c\uddff","\ud83d\udca4"],"?":["?","\u2754","\u2753"],"!":["!","\u2755","\u2757","\u203c\ufe0f"],0:["\ud83c\udd7e\ufe0f"],1:["1\ufe0f\u20e3"],2:["2\ufe0f\u20e3"],3:["3\ufe0f\u20e3"],4:["4\ufe0f\u20e3"],5:["5\ufe0f\u20e3"],6:["6\ufe0f\u20e3"],7:["7\ufe0f\u20e3"],8:["8\ufe0f\u20e3"],9:["9\ufe0f\u20e3"],"-":["-","\u2796"],"+":["\u2795"],"=":["\ud83d\udff0"],"\xf7":["\u2797"],"#":["#\ufe0f\u20e3"],"*":["*\ufe0f\u20e3","\ud83d\ude0b","\ud83d\ude1b","\ud83e\udd2a","\ud83d\ude1d","\ud83e\udd17","\ud83e\udd2d","\ud83e\udee2","\ud83e\udee3","\ud83e\udd2b","\ud83e\udd14","\ud83e\udee1","\ud83e\udd24","\ud83e\udd20","\ud83e\udd73","\ud83e\udd73","\ud83e\udd78","\ud83d\ude0e","\ud83e\udd13","\ud83e\uddd0","\ud83d\ude0d","\ud83d\ude18","\ud83d\ude07","\ud83d\ude35\u200d\ud83d\udcab","\ud83e\udd74","\ud83d\ude28","\ud83d\ude30","\ud83d\ude2d","\ud83d\ude08","\ud83d\udc80","\ud83d\udca9","\ud83e\udd21","\ud83d\udc7a","\ud83d\udc7b","\ud83d\ude3c"]},n=Object.keys(t),o=Object.values(t);e.exports={emojibet:t,alphabet:n,alphaValues:o}},7283:(e,t,n)=>{var o=n(5273),i=(o.emojibet,o.alphabet),r=o.alphaValues;e.exports=function(e){var t=[];r.forEach((function(e){e.length>1&&t.push(i[r.indexOf(e)])}));var n=t.indexOf(e),o=i.indexOf(e);if(-1===n)return!1;var a=r[o],s=Math.floor(Math.random()*a.slice(1).length+1);return a[s]}},5159:(e,t,n)=>{var o=n(5273),i=(o.emojibet,o.alphabet),r=o.alphaValues;e.exports=function(e,t){var n=i.indexOf(e);return-1!==n?r[n][0]:" "===e?e+e:e}}}]);
//# sourceMappingURL=6932.db3c877c.chunk.js.map