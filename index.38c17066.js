var t=Array.from(document.querySelectorAll("span.population")).map(function(t){return+t.textContent.replace(/,/g,"")}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,o=document.querySelector(".total-population"),r=document.querySelector(".average-population");o.textContent=e.toLocaleString("en-US"),r.textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.38c17066.js.map
