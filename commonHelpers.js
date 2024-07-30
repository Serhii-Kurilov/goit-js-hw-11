import{S as u,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="45152595-000e166ccff08e1330e527827",m="https://pixabay.com/api/";async function p(t){const r=await fetch(`${m}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}function y(t){const r=document.getElementById("gallery");r.innerHTML=t.map(n=>`
    <a href="${n.largeImageURL}" class="gallery-item">
      <img src="${n.webformatURL}" alt="${n.tags}" />
      <div class="info">
        <p><b>Likes</b> ${n.likes}</p>
        <p><b>Views</b> ${n.views}</p>
        <p><b>Comments</b> ${n.comments}</p>
        <p><b>Downloads</b> ${n.downloads}</p>
      </div>
    </a>
  `).join(""),new u(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function a(t,r="success"){d[r]({title:r==="success"?"OK":"Error",message:t,position:"topRight"})}function h(){const t=document.getElementById("gallery");t.innerHTML=""}function g(){const t=document.getElementById("loader");t.hidden=!1}function l(){const t=document.getElementById("loader");t.hidden=!0}const c=document.getElementById("search-form");c.addEventListener("submit",async t=>{t.preventDefault();const r=c.searchQuery.value.trim();if(r===""){a("Please enter a search query.","error");return}h(),g();try{const{hits:s}=await p(r);l(),s.length===0?a("Sorry, there are no images matching your search query. Please try again!","error"):y(s)}catch{l(),a("Failed to fetch images. Please try again later.","error")}c.searchQuery.value=""});
//# sourceMappingURL=commonHelpers.js.map
