import{S as l,i as u}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function d(s){const r=`https://pixabay.com/api/?key=45152595-000e166ccff08e1330e527827&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){console.error("Fetch error: ",e)}}function f(s){const t=document.getElementById("gallery");t.innerHTML=s.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p><b>Likes</b> ${r.likes}</p>
        <p><b>Views</b> ${r.views}</p>
        <p><b>Comments</b> ${r.comments}</p>
        <p><b>Downloads</b> ${r.downloads}</p>
      </div>
    </a>
  `).join(""),new l(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function a(s,t="success"){u[t]({title:t==="success"?"OK":"Error",message:s,position:"topRight"})}function p(){document.getElementById("loader").hidden=!1}function m(){document.getElementById("loader").hidden=!0}const c=document.getElementById("search-form");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.searchQuery.value.trim();if(t===""){a("Please enter a search query.","error");return}p();const n=await d(t);m(),n.length===0?a("Sorry, there are no images matching your search query. Please try again!","error"):f(n)});
//# sourceMappingURL=commonHelpers.js.map
