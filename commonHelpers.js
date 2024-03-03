import{a as g,S as b,i as u}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const E=document.querySelector(".todo-list");function p(r){const s=r.map(({webformatURL:o,likes:i,views:e,comments:t,downloads:l,largeImageURL:m,tags:y})=>`<li class="photo-main-list">
        
<a class="galery-link"  href="${m}">
<img class="photo" width="360" height="200" src="${o}" alt="${y}" />
</a>

<ul class='list-menu'>
  <li class='description'>
    <h3 class='title'>Likes</h3>
    <p class='datas'>${i}</p>
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
    <p class='datas'>${l}</p>
  </li>
</ul>
</li>
`).join("");E.insertAdjacentHTML("beforeend",s)}const S="42475254-bcb32dbc18887673c1cce19dd",$="https://pixabay.com/api/",L="photo",x="horizontal",q="true";async function f(r,s,o){const i=`${$}?key=${S}&q=${r}&image_type=${L}&orientation=${x}&safesearch=${q}&per_page=${s}&page=${o} `;return await g.get(i).then(e=>{if(!e.status===200)throw new Error("Image is no found!!!");return e.data})}const w=document.querySelector(".input-text"),O=document.querySelector(".main-form"),a=document.querySelector(".load-btn"),c=document.querySelector(".todo-list"),n=document.querySelector(".loading"),h=new b(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});function C(r){r.preventDefault(),c.innerHTML=null;let s=r.target.elements.input.value.trim();f(s,15,1).then(o=>{if(o.hits.length===0)return c.innerHTML="",n.style.display="none",a.classList.add("is-hidden"),A();n.style.display="inline-block",p(o.hits),h.refresh(),d=1,n.style.display="none"}),a.classList.remove("is-hidden")}O.addEventListener("submit",C);let d=1;function v(r){let s=w.value;c.insertAdjacentElement("afterend",n),n.style.display="inline-block",d++,f(s,15,d).then(o=>{if(o.hits<15)return n.style.display="none",a.style.display="none",I();p(o.hits),n.style.display="none",h.refresh(),n.style.display="none";const e=document.querySelector(".photo-main-list").getBoundingClientRect();window.scrollBy(0,e.height*2)})}a.addEventListener("click",v);function A(){u.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}function I(){u.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
