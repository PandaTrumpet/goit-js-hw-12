import{a as $,S as p,i as h}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const x="42475254-bcb32dbc18887673c1cce19dd",E="https://pixabay.com/api/",L="photo",q="horizontal",w="true";async function f(r,o,s){const n=`${E}?key=${x}&q=${r}&image_type=${L}&orientation=${q}&safesearch=${w}&per_page=${o}&page=${s} `;return await $.get(n).then(e=>{if(!e.status===200)throw new Error("Image is no found!!!");return e.data})}const O=document.querySelector(".input-text"),m=document.querySelector(".load-btn"),y=document.querySelector(".todo-list"),l=document.querySelector(".loading");function g(r){const o=r.map(({webformatURL:s,likes:n,views:e,comments:t,downloads:i,largeImageURL:b,tags:S})=>`<li class="photo-main-list">
        
<a class="galery-link"  href="${b}">
<img class="photo" width="360" height="200" src="${s}" alt="${S}" />
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
    <p class='datas'>${t}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Downloads</h3>
    <p class='datas'>${i}</p>
  </li>
</ul>
</li>
`).join("");y.insertAdjacentHTML("beforeend",o)}let c=1;function C(r){let o=O.value;y.insertAdjacentElement("afterend",l),l.style.display="inline-block",c++,f(o,15,c).then(s=>{if(s.hits<15)return l.style.display="none",m.style.display="none",k();g(s.hits),l.style.display="none",new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}).refresh(),l.style.display="none";const t=document.querySelector(".photo-main-list").getBoundingClientRect();window.scrollBy(0,t.height*2)})}m.addEventListener("click",C);function k(){h.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}const v=document.querySelector(".main-form"),d=document.querySelector(".load-btn"),u=document.querySelector(".todo-list"),a=document.querySelector(".loading");function A(r){r.preventDefault(),u.innerHTML=null;let o=r.target.elements.input.value.trim();f(o,15,1).then(s=>{if(s.hits.length===0)return u.innerHTML="",a.style.display="none",d.classList.add("is-hidden"),I();a.style.display="inline-block",g(s.hits),new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}).refresh(),a.style.display="none"}),d.classList.remove("is-hidden")}v.addEventListener("submit",A);function I(){h.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
