import{a as b,S as E,i as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const S=document.querySelector(".todo-list");function p(r){const o=r.map(({webformatURL:t,likes:n,views:e,comments:s,downloads:a,largeImageURL:m,tags:g})=>`<li class="photo-main-list">
        
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
    <p class='datas'>${a}</p>
  </li>
</ul>
</li>
`).join("");S.insertAdjacentHTML("beforeend",o)}const $="42475254-bcb32dbc18887673c1cce19dd",w="https://pixabay.com/api/",L="photo",x="horizontal",q="true";async function h(r,o,t){try{const n=`${w}?key=${$}&q=${r}&image_type=${L}&orientation=${x}&safesearch=${q}&per_page=${o}&page=${t}`,e=await b.get(n);if(e.status!==200)throw new Error("Image is not found!!!");return e.data}catch(n){console.error("Error occurred while fetching new photos:",n)}}const O=document.querySelector(".input-text"),C=document.querySelector(".main-form"),i=document.querySelector(".load-btn"),c=document.querySelector(".todo-list"),l=document.querySelector(".loading"),f=new E(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});let k,d=1;async function v(r){r.preventDefault(),c.innerHTML=null;let o=r.target.elements.input.value.trim();try{const t=await h(o,15,1);if(t.hits.length===0)return c.innerHTML="",l.style.display="none",i.classList.add("is-hidden"),I();p(t.hits),f.refresh(),k=o,d=1,l.style.display="none",t.hits.length<15?(i.style.display="none",y()):i.style.display="block"}catch(t){console.error(t)}}C.addEventListener("submit",v);function A(r){r.preventDefault();let o=O.value;c.insertAdjacentElement("afterend",l),l.style.display="inline-block",d++,h(o,15,d).then(t=>{if(t.hits.length===0)return l.style.display="none",i.style.display="none",y();{p(t.hits),f.refresh(),l.style.display="none";const e=document.querySelector(".photo-main-list").getBoundingClientRect();window.scrollBy(0,e.height*2),t.hits.length<15?i.style.display="none":i.style.display="block"}})}i.addEventListener("click",A);function I(){u.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}function y(){u.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
