import{a as m,b as l}from"./assets/vendor-3783c3cd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://portfolio-js.b.goit.study/api",f="/requests",u=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),c=document.querySelector(".footer-form-frame");u.addEventListener("submit",y);async function y(r){r.preventDefault();const o=r.currentTarget.elements.email.value.trim(),s=r.currentTarget.elements.comments.value.trim();o&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",c.style.borderBottomColor="rgba(60, 188, 129, 1)"),o||(i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",c.style.borderBottomColor="rgba(231, 74, 59, 1)"),await p({email:o,comment:s})}async function p(r){try{const o=await m.post(`${d}${f}`,r);i.style.visibility="hidden",c.style.borderBottomColor="rgba(250, 250, 250, 0.20)",u.reset(),l.create(`
		<div class="modal">
		<h3>Thank you for your interest in cooperation!</h3>
		<p>The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`).show()}catch(o){l.create(`
		<div class="modal">
		<h2>Please, check your information and try one more time</h2>
		<p>${o.message}</p>
		</div>
		`).show()}}
//# sourceMappingURL=commonHelpers.js.map
