!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var c=o("bpxeT"),a=o("2TvXO"),u=o("eWrZJ"),i=document.querySelector(".loader"),l=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),d=document.querySelector(".breed-name"),p=document.querySelector(".description"),f=document.querySelector(".temperament");function y(){i.style.display="block"}function m(){i.style.display="none"}function v(e){var t=e[0],n=t.name,r=t.description,o=t.temperament,c=t.url;d.textContent=n,p.textContent=r,f.textContent=o,s.querySelector("img").src=c}function h(){return(h=e(c)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.value,y(),e.prev=2,e.next=5,(0,u.fetchCatByBreed)(n);case 5:v(e.sent),m(),s.style.display="block",e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),m();case 15:case"end":return e.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}function x(){return(x=e(c)(e(a).mark((function t(){return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),e.prev=1,e.next=4,(0,u.fetchBreeds)();case 4:e.sent.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,l.appendChild(t)})),m(),l.style.display="block",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),m();case 14:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}l.addEventListener("change",(function(){return h.apply(this,arguments)})),function(){x.apply(this,arguments)}()}();
//# sourceMappingURL=index.cfd48313.js.map