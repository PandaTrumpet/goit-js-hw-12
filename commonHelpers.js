import{a as b,S as E,i as h}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const S=document.querySelector(".todo-list");function c(r){const o=r.map(({webformatURL:t,likes:n,views:e,comments:s,downloads:l,largeImageURL:m,tags:g})=>`<li class="photo-main-list">
        
<a class="galery-link"  href="${m}">
<img class="photo" width="360" height="200" src="${t}" alt="${g}" />
</a>

<ul class='list-menu'>
  <li class='description'>
    <h3 class='title'>Likes</h3>
    <p class='datas'>${n}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Views</h3>
    <p class='datas'>${e}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Comments</h3>
    <p class='datas'>${s}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Downloads</h3>
    <p class='datas'>${l}</p>
  </li>
</ul>
</li>
`).join("");S.insertAdjacentHTML("beforeend",o)}const $="42475254-bcb32dbc18887673c1cce19dd",L="https://pixabay.com/api/",w="photo",x="horizontal",q="true";async function f(r,o,t){try{const n=`${L}?key=${$}&q=${r}&image_type=${w}&orientation=${x}&safesearch=${q}&per_page=${o}&page=${t}`,e=await b.get(n);if(e.status!==200)throw new Error("Image is not found!!!");return e.data}catch(n){console.error("Error occurred while fetching new photos:",n)}}const O=document.querySelector(".input-text"),v=document.querySelector(".main-form"),a=document.querySelector(".load-btn"),d=document.querySelector(".todo-list"),i=document.querySelector(".loading"),u=new E(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});let C;async function A(r){r.preventDefault(),d.innerHTML=null;let o=r.target.elements.input.value.trim();try{const t=await f(o,15,1);if(t.hits.length===0)return d.innerHTML="",i.style.display="none",a.classList.add("is-hidden"),k();if(t.hits.length<15)return c(t.hits),i.style.display="none",a.style.display="none",u.refresh(),y();i.style.display="inline-block",c(t.hits),u.refresh(),C=o,p=1,i.style.display="none"}catch(t){console.error(t)}a.classList.remove("is-hidden")}v.addEventListener("submit",A);let p=1;function I(r){r.preventDefault();let o=O.value;d.insertAdjacentElement("afterend",i),i.style.display="inline-block",p++,f(o,15,p).then(t=>{if(t.hits.length<15)return i.style.display="none",a.style.display="none",y();{c(t.hits),i.style.display="none",u.refresh(),i.style.display="none";const e=document.querySelector(".photo-main-list").getBoundingClientRect();window.scrollBy(0,e.height*2)}})}a.addEventListener("click",I);function k(){h.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}function y(){h.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
