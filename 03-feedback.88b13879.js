var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("form"),n=document.querySelector("input"),o=document.querySelector("textarea");var i={},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function y(e){return l=e,u=setTimeout(S,t),c?v(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function S(){var e=p();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?g(n,r-(e-l)):n}(e))}function w(e){return u=void 0,d&&o?v(e):(o=i=void 0,a)}function O(){var e=p(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return y(f);if(s)return u=setTimeout(S,t),v(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=h(t)||0,b(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(h(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(p())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}i=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};t.addEventListener("input",i((()=>{const e={email:n.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=e.email,o.value=e.message}catch(e){console.log(e.name),console.log(e.message)}t.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:n.value,message:o.value}),localStorage.removeItem("feedback-form-state"),n.value="",o.value=""}));
//# sourceMappingURL=03-feedback.88b13879.js.map
