import{a as S,S as p,i as f}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="42475254-bcb32dbc18887673c1cce19dd",L="https://pixabay.com/api/",x="photo",q="horizontal",w="true";async function h(r,o,s){const n=`${L}?key=${E}&q=${r}&image_type=${x}&orientation=${q}&safesearch=${w}&per_page=${o}&page=${s} `;return await S.get(n).then(e=>{if(!e.status===200)throw new Error("Image is no found!!!");return e.data})}const O=new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}),C=document.querySelector(".input-text"),m=document.querySelector(".load-btn"),y=document.querySelector(".todo-list"),l=document.querySelector(".loading");function g(r){const o=r.map(({webformatURL:s,likes:n,views:e,comments:t,downloads:i,largeImageURL:b,tags:$})=>`<li class="photo-main-list">
        
<a class="galery-link"  href="${b}">
<img class="photo" width="360" height="200" src="${s}" alt="${$}" />
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
`).join("");y.insertAdjacentHTML("beforeend",o)}let c=1;function k(r){let o=C.value;y.insertAdjacentElement("afterend",l),l.style.display="inline-block",c++,h(o,15,c).then(s=>{if(s.hits<15)return l.style.display="none",m.style.display="none",v();g(s.hits),l.style.display="none",O.refresh(),l.style.display="none";const e=document.querySelector(".photo-main-list").getBoundingClientRect();window.scrollBy(0,e.height*2)})}m.addEventListener("click",k);function v(){f.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}const A=new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}),I=document.querySelector(".main-form"),d=document.querySelector(".load-btn"),u=document.querySelector(".todo-list"),a=document.querySelector(".loading");function M(r){r.preventDefault(),u.innerHTML=null;let o=r.target.elements.input.value.trim();h(o,15,1).then(s=>{if(s.hits.length===0)return u.innerHTML="",a.style.display="none",d.classList.add("is-hidden"),N();a.style.display="inline-block",g(s.hits),A.refresh(),a.style.display="none"}),d.classList.remove("is-hidden")}I.addEventListener("submit",M);function N(){f.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
