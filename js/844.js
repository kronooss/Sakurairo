/*! For license information please see 844.js.LICENSE.txt */
(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[844],{5213:function(e){var t;t=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){var o=document.createElement("canvas");o.width=window.innerWidth,o.height=window.innerHeight,o.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight})),document.body.appendChild(o);var r=o.getContext("2d"),a=[],i=0,l=!1;function s(e,t){return Math.random()*(t-e)+e}function c(e){if(d.colorful){var t=s(0,360);return"hsla("+s(t-10,t+10)+", 100%, "+s(50,80)+"%, 1)"}return window.getComputedStyle(e).color}function u(e,t,n){return{x:e,y:t,alpha:1,color:n,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}}function d(){for(var e=function(){var e,t=document.activeElement;if("TEXTAREA"===t.tagName||"INPUT"===t.tagName&&"text"===t.getAttribute("type")){var o=n(1)(t,t.selectionEnd);return e=t.getBoundingClientRect(),{x:o.left+e.left,y:o.top+e.top,color:c(t)}}var r=window.getSelection();if(r.rangeCount){var a=r.getRangeAt(0),i=a.startContainer;return i.nodeType===document.TEXT_NODE&&(i=i.parentNode),{x:(e=a.getBoundingClientRect()).left,y:e.top,color:c(i)}}return{x:0,y:0,color:"transparent"}}(),t=5+Math.round(10*Math.random());t--;)a[i]=u(e.x,e.y,e.color),i=(i+1)%500;if(d.shake){var o=1+2*Math.random(),r=o*(Math.random()>.5?-1:1),s=o*(Math.random()>.5?-1:1);document.body.style.marginLeft=r+"px",document.body.style.marginTop=s+"px",setTimeout((function(){document.body.style.marginLeft="",document.body.style.marginTop=""}),75)}l||requestAnimationFrame(m)}function m(){l=!0,r.clearRect(0,0,o.width,o.height);for(var e=!1,t=o.getBoundingClientRect(),n=0;n<a.length;++n){var i=a[n];i.alpha<=.1||(i.velocity.y+=.075,i.x+=i.velocity.x,i.y+=i.velocity.y,i.alpha*=.96,r.globalAlpha=i.alpha,r.fillStyle=i.color,r.fillRect(Math.round(i.x-1.5)-t.left,Math.round(i.y-1.5)-t.top,3,3),e=!0)}e?requestAnimationFrame(m):l=!1}d.shake=!0,d.colorful=!1,e.exports=d},function(e,t){!function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=null!=window.mozInnerScreenX;function o(e,o,r){var a=r&&r.debug||!1;if(a){var i=document.querySelector("#input-textarea-caret-position-mirror-div");i&&i.parentNode.removeChild(i)}var l=document.createElement("div");l.id="input-textarea-caret-position-mirror-div",document.body.appendChild(l);var s=l.style,c=window.getComputedStyle?getComputedStyle(e):e.currentStyle;s.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(s.wordWrap="break-word"),s.position="absolute",a||(s.visibility="hidden"),t.forEach((function(e){s[e]=c[e]})),n?e.scrollHeight>parseInt(c.height)&&(s.overflowY="scroll"):s.overflow="hidden",l.textContent=e.value.substring(0,o),"INPUT"===e.nodeName&&(l.textContent=l.textContent.replace(/\s/g," "));var u=document.createElement("span");u.textContent=e.value.substring(o)||".",l.appendChild(u);var d={top:u.offsetTop+parseInt(c.borderTopWidth),left:u.offsetLeft+parseInt(c.borderLeftWidth)};return a?u.style.backgroundColor="#aaa":document.body.removeChild(l),d}void 0!==e&&void 0!==e.exports?e.exports=o:window.getCaretCoordinates=o}()}])},e.exports=t()},402:()=>{const e=[".bili",".menhera",".tieba"];window.motionSwitch=function(t){for(let t=0;t<e.length;t++)document.querySelector(e[t]+"-bar").classList.remove("on-hover"),document.querySelector(e[t]+"-container").style.display="none";document.querySelector(t+"-bar").classList.add("on-hover"),document.querySelector(t+"-container").style.display="block"},window.grin=function(e,t,n,o){let r;switch(t){case"custom":e=n+e+o;break;case"Img":e="[img]"+e+"[/img]";break;case"Math":e=" {{"+e+"}} ";break;case"tieba":e=" ::"+e+":: ";break;default:e=" :"+e+": "}if(!document.getElementById("comment")||"textarea"!=document.getElementById("comment").type)return!1;if(r=document.getElementById("comment"),document.selection)r.focus(),sel=document.selection.createRange(),sel.text=e,r.focus();else if(r.selectionStart||"0"==r.selectionStart){let t=r.selectionStart,n=r.selectionEnd,o=n;r.value=r.value.substring(0,t)+e+r.value.substring(n,r.value.length),o+=e.length,r.focus(),r.selectionStart=o,r.selectionEnd=o}else r.value+=e,r.focus()}},6844:(e,t,n)=>{n.r(t),n.d(t,{whileLoaded:()=>k,whilePjaxComplete:()=>x,whileReady:()=>T});var o=n(8487),r=n(5082);function a(){!function(){const e=document.getElementsByClassName("collapseButton");if(e.length>0){const t=e=>{(0,r.wy)(e.target.parentNode.parentNode.parentNode.querySelector(".xContent"))};for(const n of e)n.addEventListener("click",t)}}(),mashiro_option.baguetteBoxON?((0,o.loadCSS)("https://cdn.jsdelivr.net/npm/baguettebox.js@1.11.1/dist/baguetteBox.min.css"),n.e(731).then(n.t.bind(n,5731,23)).then((({default:e})=>{e.run(".entry-content",{captions:function(e){return e.getElementsByTagName("img")[0].alt},ignoreClass:"fancybox"})}))):mashiro_option.fancybox&&((0,o.loadCSS)("https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"),n.e(755).then(n.t.bind(n,9755,23)).then((e=>{window.jQuery=e.default,window.$=e.default,n.e(155).then(n.t.bind(n,4155,23))})))}var i=n(7648),l=n(6589),s=n(5213),c=n.n(s),u=(n(402),n(5990)),d=n(2568),m=n.n(d);const g=(e,t=80)=>"https://"+Poi.gravatar_url+"/"+m()(e)+".jpg?s="+t+"&d=mm";function p(){let e=!1;const t=document.querySelector("input#author"),n=document.querySelector("input#qq"),o=document.querySelector("input#email"),r=document.querySelector("input#url"),a=document.querySelector(".qq-check"),i=document.querySelector(".gravatar-check"),l=document.querySelector("div.comment-user-avatar img");if(null==t)return;localStorage.getItem("user_qq")||localStorage.getItem("user_qq_email")||localStorage.getItem("user_author")||(n.value=t.value=o.value=r.value=""),localStorage.getItem("user_avatar")&&localStorage.getItem("user_qq")&&localStorage.getItem("user_qq_email")&&(l.setAttribute("src",localStorage.getItem("user_avatar")),t.value=localStorage.getItem("user_author"),o.value=localStorage.getItem("user_qq")+"@qq.com",n.value=localStorage.getItem("user_qq"),mashiro_option.qzone_autocomplete&&(r.value="https://user.qzone.qq.com/"+localStorage.getItem("user_qq")),n.value&&(a.style.display="block",i.style.display="none"));let s=o.value;t.addEventListener("blur",(()=>{const c=t.value;if(/^[1-9]\d{4,9}$/.test(c)){const d=()=>{n.value="",a.style.display="none",i.style.display="block",l.setAttribute("src",g(o.value,80)),localStorage.setItem("user_qq",""),localStorage.setItem("user_email",o.value),localStorage.setItem("user_avatar",g(o.value,80))};fetch((0,u.Z)(mashiro_option.qq_api_url,{qq:c})).then((async u=>{if(u.ok)try{const d=await u.json();t.value=d.name,o.value=c.trim()+"@qq.com",mashiro_option.qzone_autocomplete&&(r.value="https://user.qzone.qq.com/"+c.trim()),l.setAttribute("src","https://q2.qlogo.cn/headimg_dl?dst_uin="+c+"&spec=100"),e=!0,n.value=c.trim(),n.value&&(a.style.display="block",i.style.display="none"),localStorage.setItem("user_author",d.name),localStorage.setItem("user_qq",c),localStorage.setItem("is_user_qq","yes"),localStorage.setItem("user_qq_email",c+"@qq.com"),localStorage.setItem("user_email",c+"@qq.com"),s=o.value,l.setAttribute("src",d.avatar),localStorage.setItem("user_avatar",d.avatar)}catch(e){console.warn(e),d()}else d()}))}})),localStorage.getItem("user_avatar")&&localStorage.getItem("user_email")&&"no"==localStorage.getItem("is_user_qq")&&!localStorage.getItem("user_qq_email")&&(l.setAttribute("src",localStorage.getItem("user_avatar")),o.value=localStorage.getItem("user_mail"),n.value="",n.value||(a.style.display="none",i.style.display="block")),o.addEventListener("blur",(function(){let t=o.value;0!=e&&s==t||""==t||(l.setAttribute("src",g(t,80)),localStorage.setItem("user_avatar",g(t,80)),localStorage.setItem("user_email",t),localStorage.setItem("user_qq_email",""),localStorage.setItem("is_user_qq","no"),n.value="",n.value||(a.style.display="none",i.style.display="block"))})),localStorage.getItem("user_url")&&(r.value=localStorage.getItem("user_url")),r.addEventListener("blur",(function(){let e=r.value;r.value=e,localStorage.setItem("user_url",e)})),localStorage.getItem("user_author")&&(t.value=localStorage.getItem("user_author")),t.addEventListener("blur",(function(){let e=t.value;t.value=e,localStorage.setItem("user_author",e)}))}const f={respondId:"",moveForm:function(e,t,n){const o=document.getElementById(e),r=document.getElementById(n),a=document.getElementById("cancel-comment-reply-link"),i=document.getElementById("comment_parent");if(this.respondId=n,!document.getElementById("wp-temp-form-div")){let e;e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",r.parentNode.insertBefore(e,r)}if(o)o.parentNode.insertBefore(r,o.nextSibling);else{const e=document.getElementById("wp-temp-form-div");document.getElementById("comment_parent").value="0",e.parentNode.insertBefore(r,e),e.remove()}const l=document.getElementById("respond");window.scrollTo({top:l.getBoundingClientRect().top+window.pageYOffset-l.clientTop-100,behavior:"smooth"}),i.value=t,a.style.display="",a.onclick=function(e){var t=f,n=document.getElementById("wp-temp-form-div"),o=document.getElementById(t.respondId);return document.getElementById("comment_parent").value="0",n&&o&&(n.parentNode.insertBefore(o,n),n.remove()),this.style.display="none",this.onclick=null,!1};try{document.getElementById("comment").focus()}catch(e){}return!1}},h=f;var y=n(6520);const v=(()=>{var e,t;function r(e,t){const n={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",design:"by Mashiro"};if(!e.children[0])return;const o=e.children[0].className;let r=o.substr(0,o.indexOf(" ")).replace("language-","");"hljs"==r.toLowerCase()&&(r=t.className.replace("hljs","")?t.className.replace("hljs",""):"text"),e.classList.add("highlight-wrap");for(const t in n)e.setAttribute(t,n[t]);t.setAttribute("data-rel",r.toUpperCase())}async function a(e,t){try{await async function(){try{window.hljs||(window.hljs=await Promise.all([n.e(869),n.e(870),n.e(450),n.e(130),n.e(135),n.e(356),n.e(412),n.e(455),n.e(140),n.e(191),n.e(732),n.e(914)]).then(n.t.bind(n,7869,23)),await n.e(241).then(n.t.bind(n,5241,23)))}catch(e){console.warn(e)}}();for(let e=0;e<t.length;e++)hljs.highlightBlock(t[e]);for(let n=0;n<e.length;n++)r(e[n],t[n]);hljs.initLineNumbersOnLoad();const o=document.querySelector(".entry-content");o&&o.addEventListener("click",(function(e){e.target.classList.contains("highlight-wrap")&&(e.target.classList.toggle("code-block-fullscreen"),document.documentElement.classList.toggle("code-block-fullscreen-html-scroll"))}))}catch(e){console.warn(e)}}const i=null!==(e=null===(t=mashiro_option.code_highlight_prism)||void 0===t?void 0:t.autoload_path)&&void 0!==e?e:"https://cdn.jsdelivr.net/npm/prismjs@1.23.0/";let l;const s=(()=>{var e,t;const{light:n,dark:o}=null!==(e=null===(t=mashiro_option.code_highlight_prism)||void 0===t?void 0:t.theme)&&void 0!==e?e:{},r={light:null!=n?n:"themes/prism.min.css",dark:null!=o?o:"themes/prism-tomorrow.min.css"};for(const e in r)r[e]=new URL(r[e],i).toString();return r})();function c(e){const t=e?s.dark:s.light;if(l){if(l.href!==t){const e=(0,o.loadCSS)(t);e.addEventListener("load",(()=>{l.remove(),l=e}))}}else l=(0,o.loadCSS)(t)}function u(){return(0,o.loadCSS)(new URL("plugins/line-numbers/prism-line-numbers.min.css",i).toString()),n.e(759).then(n.t.bind(n,8759,23))}async function d(e){try{await async function(){try{if(!window.Prism){const{default:e}=await n.e(660).then(n.t.bind(n,5660,23));window.Prism=e}(0,o.loadCSS)(new URL("plugins/toolbar/prism-toolbar.min.css",i).toString()),(0,o.loadCSS)(new URL("plugins/previewers/prism-previewers.min.css",i).toString()),c((0,y.N2)()),document.addEventListener("darkmode",(e=>{c(e.detail)})),await Promise.all([n.e(475).then(n.t.bind(n,3475,23)),n.e(470).then(n.t.bind(n,9470,23)),n.e(206).then(n.t.bind(n,5206,23)).then((()=>n.e(695).then(n.t.bind(n,2695,23))))]),Prism.plugins.autoloader.languages_path=new URL("components/",i).toString()}catch(e){console.warn(e)}}(),mashiro_option.code_highlight_prism.line_number_all&&(document.querySelector(".entry-content").classList.add("line-numbers"),await u()),e.forEach((async e=>{e.parentElement.classList.contains("line-numbers")&&await u(),e.classList.contains("match-braces")&&(await n.e(873).then(n.t.bind(n,7873,23)),(0,o.loadCSS)(new URL("plugins/match-braces/prism-match-braces.min.css",i).toString())),Prism.highlightElement(e)})),Prism.plugins.fileHighlight&&Prism.plugins.fileHighlight.highlight()}catch(e){console.warn(e)}}return async function(){const e=document.getElementsByTagName("pre"),t=document.querySelectorAll("pre code");if(e.length)switch(mashiro_option.code_highlight){case"hljs":return a(e,t);case"prism":return d(t);case"custom":return;default:console.warn(`mashiro_option.code_highlight这咋填的是个${mashiro_option.code_highlight}啊🤔`)}}})();function b(){const e=document.querySelectorAll("pre code");if(e.length>0){for(let t=0;t<e.length;t++)e[t].setAttribute("id","code-block-"+t),e[t].insertAdjacentHTML("afterend",'<a class="copy-code" href="javascript:" data-clipboard-target="#code-block-'+t+'" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i>');n.e(152).then(n.t.bind(n,2152,23)).then((({default:e})=>{new e(".copy-code")}))}}function w(){document.getElementsByClassName("comment_inline_img").length&&document.getElementsByClassName("comments-main")[0].addEventListener("click",(function(e){e.target.classList.contains("comment_inline_img")&&window.open(e.target.src)}))}function S(){document.getElementsByClassName("emoji-item").length&&document.querySelector(".menhera-container").addEventListener("click",(function(e){e.target.classList.contains("emoji-item")&&grin(e.target.innerText,"custom","`","` ")}))}function _(){const e="commentwrap",t=document.getElementById("commentform");if(t){let n=!1;t.addEventListener("submit",(function(t){if(t.stopPropagation(),t.preventDefault(),n)return;const o=(0,l.f)("提交中(Commiting)....",!0),r=new FormData(this);r.append("action","ajax_comment"),n=!0,fetch(Poi.ajaxurl,{method:this.attributes.method.value,body:r}).then((async t=>{const n=await t.text();if(t.ok){Array.from(document.getElementsByTagName("textarea")).forEach((e=>e.value=""));const t=document.getElementById("cancel-comment-reply-link"),o=document.getElementById("wp-temp-form-div"),r=document.getElementById(h.respondId);"0"!=document.getElementById("comment_parent").value?document.getElementById("respond").insertAdjacentHTML("beforebegin",'<ol class="children">'+n+"</ol>"):document.getElementsByClassName(e).length?"asc"==Poi.order?document.getElementsByClassName("commentwrap")[1].insertAdjacentHTML("beforeend",n):document.getElementsByClassName("commentwrap")[1].insertAdjacentHTML("afterbegin",n):"bottom"==Poi.formpostion?document.getElementById("respond").insertAdjacentHTML("beforebegin",'<ol class="'+e+'">'+n+"</ol>"):document.getElementById("respond").insertAdjacentHTML("afterend",'<ol class="'+e+'">'+n+"</ol>"),(0,l.f)("提交成功(Succeed)"),(0,i.m)(),v(),w(),document.getElementById("upload-img-show").innerHTML="",t.style.display="none",t.onclick=null,document.getElementById("comment_parent").value="0",o&&r&&(o.parentNode.insertBefore(r,o),o.remove())}else(0,l.f)(null!=n?n:"HTTP"+t.status+":"+t.statusText)})).catch((e=>{(0,l.f)(e)})).finally((()=>{o.remove(),n=!1}))}))}}function q(){let e=document.getElementsByClassName("sm"),t=document.querySelector(".comments-main");e.length&&("new"==Poi.reply_link_version&&t&&t.addEventListener("click",(function(e){if(e.target.classList.contains("comment-reply-link")){e.preventDefault(),e.stopPropagation();let t=e.target.getAttribute("data-commentid");h.moveForm("comment-"+t,t,"respond",this.getAttribute("data-postid"))}})),t&&t.addEventListener("click",(e=>{let t=e.target.parentNode;if(t.classList.contains("sm")){if(1==confirm("您真的要设为私密吗？")){if(t.classList.contains("private_now"))return alert("您之前已设过私密评论"),!1;{t.classList.add("private_now");let e=t.getAttribute("data-idp"),n=t.getAttribute("data-actionp"),o=t.getElementsByClassName("has_set_private")[0],r="action=siren_private&p_id="+e+"&p_action="+n,a=new XMLHttpRequest;return a.onreadystatechange=function(){4==this.readyState&&200==this.status&&(o.innerHTML=a.responseText)},a.open("POST","/wp-admin/admin-ajax.php",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(r),!1}}alert("已取消")}})))}function E(e){if(!(document.body.clientWidth<=1200))if(document.querySelector("div.have-toc")||document.querySelector("div.has-toc")){if(e){let e=1,t="sakura"==mashiro_option.entry_content_theme?document.querySelector("article.type-post")?document.querySelector("div.pattern-attachment-img")?-75:200:375:window.innerHeight/2,o=document.querySelectorAll(".entry-content,.links");for(let t=0;t<o.length;t++){let n=o[t].querySelectorAll("h1,h2,h3,h4,h5");for(let t=0;t<n.length;t++)n[t].id="toc-head-"+e,e++}n.e(866).then(n.t.bind(n,2866,23)).then((({default:e})=>{e.init({tocSelector:".toc",contentSelector:[".entry-content",".links"],headingSelector:"h1, h2, h3, h4, h5",headingsOffset:t-window.innerHeight/2})}))}}else{let e=document.getElementsByClassName("toc-container")[0];e&&(e.remove(),e=null)}}function I(){let e=document.getElementById("emotion-toggle");e&&e.addEventListener("click",(function(){document.querySelector(".emotion-toggle-off").classList.toggle("emotion-hide"),document.querySelector(".emotion-toggle-on").classList.toggle("emotion-show"),document.querySelector(".emotion-box").classList.toggle("emotion-box-show")}))}function B(){const e=document.querySelector(".form-submit #submit");if(null==e)return;if(!mashiro_option.comment_upload_img)return void(e.style.width="100%");e.insertAdjacentHTML("afterend",'<div class="insert-image-tips popup"><i class="fa fa-picture-o" aria-hidden="true"></i><span class="insert-img-popuptext" id="uploadTipPopup">上传图片</span></div><input id="upload-img-file" type="file" accept="image/*" multiple="multiple" class="insert-image-button">'),function(){let e=document.getElementsByClassName("insert-image-tips")[0],t=document.getElementById("upload-img-file");t&&t.addEventListener("change",(function(){if(this.files.length>10)return(0,l.f)("每次上传上限为10张.<br>10 files max per request."),0;for(let e=0;e<this.files.length;e++)if(this.files[e].size>=5242880)return void alert("图片上传大小限制为5 MB.\n5 MB max per file.\n\n「"+this.files[e].name+"」\n\n这张图太大啦~请重新上传噢！\nThis image is too large~Please reupload!");for(let t=0;t<this.files.length;t++){let n=this.files[t],o=new FormData,r=new XMLHttpRequest;o.append("cmt_img_file",n),r.addEventListener("loadstart",(function(){e.innerHTML='<i class="fa fa-spinner rotating" aria-hidden="true"></i>',(0,l.f)("上传中...<br>Uploading...")})),r.open("POST",buildAPI(Poi.api+"sakura/v1/image/upload"),!0),r.send(o),r.onreadystatechange=function(){if(4!=r.readyState||200!=r.status&&304!=r.status)4==r.readyState&&(e.innerHTML='<i class="fa fa-times" aria-hidden="true" style="color:red"></i>',alert("上传失败，请重试.\nUpload failed, please try again."),setTimeout((function(){e.innerHTML='<i class="fa fa-picture-o" aria-hidden="true"></i>'}),1e3));else{e.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>',setTimeout((function(){e.innerHTML='<i class="fa fa-picture-o" aria-hidden="true"></i>'}),1e3);let t=JSON.parse(r.responseText);if(200==t.status){let e=t.proxy;document.getElementById("upload-img-show").insertAdjacentHTML("afterend",'<img class="lazyload upload-image-preview" src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/theme/colorful/load/inload.svg" data-src="'+e+'" onclick="window.open(\''+e+'\')" onerror="imgError(this)" />'),(0,i.m)(),(0,l.f)("图片上传成功~<br>Uploaded successfully~"),grin(e,type="Img")}else(0,l.f)("上传失败！<br>Uploaded failed!<br> 文件名/Filename: "+n.name+"<br>code: "+t.status+"<br>"+t.message,3e3)}}}}))}();const t=document.getElementById("upload-img-file"),n=document.getElementsByClassName("insert-image-tips")[0],o=document.getElementById("uploadTipPopup");t&&(t.addEventListener("mouseenter",(function(){n.classList.toggle("insert-image-tips-hover"),o.classList.toggle("show")})),t.addEventListener("mouseleave",(function(){n.classList.toggle("insert-image-tips-hover"),o.classList.toggle("show")})))}function L(){a(),q()}function T(){a(),_(),document.body.addEventListener("click",(function(e){if(e.target.parentNode==document.getElementById("comments-navi")&&"a"==e.target.nodeName.toLowerCase()){e.preventDefault(),e.stopPropagation();let t=e.target,n=t.pathname,o=new XMLHttpRequest;o.open("GET",t.getAttribute("href"),!0),o.responseType="document",o.onloadstart=()=>{let e=document.getElementById("comments-navi"),t=document.querySelector("ul.commentwrap"),n=document.getElementById("loading-comments"),o=document.getElementById("comments-list-title");e.remove(),t.remove(),n.style.display="block",(0,r.wy)(n,500,"show"),window.scrollTo({top:o.getBoundingClientRect().top+window.pageYOffset-o.clientTop-65,behavior:"smooth"})},o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){let e=o.response,t=e.querySelector("ul.commentwrap"),a=e.getElementById("comments-navi"),l=document.getElementById("loading-comments");(0,r.wy)(l,200,"hide"),document.getElementById("loading-comments").insertAdjacentHTML("afterend",t.outerHTML),document.querySelector("ul.commentwrap").insertAdjacentHTML("afterend",a.outerHTML),(0,i.m)(),window.gtag&&gtag("config",Poi.google_analytics_id,{page_path:n}),v(),w();let s=document.querySelector("ul.commentwrap");window.scrollTo({top:s&&s.getBoundingClientRect().top+window.pageYOffset-s.clientTop-200,behavior:"smooth"})}},o.send()}})),c().colorful=!0,c().shake=!1,document.body.addEventListener("input",c()),p(),B(),b()}function x(){try{B(),a(),E(!0),w(),p(),q(),S(),v(),b(),I()}catch(e){console.warn(e)}}function k(){window.addEventListener("popstate",L),w(),v(),q(),S(),I(),E(!0)}},487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},1012:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],o=0;o<e.length;o+=3)for(var r=e[o]<<16|e[o+1]<<8|e[o+2],a=0;a<4;a++)8*o+6*a<=8*e.length?n.push(t.charAt(r>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],o=0,r=0;o<e.length;r=++o%4)0!=r&&n.push((t.indexOf(e.charAt(o-1))&Math.pow(2,-2*r+8)-1)<<2*r|t.indexOf(e.charAt(o))>>>6-2*r);return n}},e.exports=n},8738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},2568:(e,t,n)=>{var o,r,a,i,l;o=n(1012),r=n(487).utf8,a=n(8738),i=n(487).bin,(l=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?i.stringToBytes(e):r.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=o.bytesToWords(e),s=8*e.length,c=1732584193,u=-271733879,d=-1732584194,m=271733878,g=0;g<n.length;g++)n[g]=16711935&(n[g]<<8|n[g]>>>24)|4278255360&(n[g]<<24|n[g]>>>8);n[s>>>5]|=128<<s%32,n[14+(s+64>>>9<<4)]=s;var p=l._ff,f=l._gg,h=l._hh,y=l._ii;for(g=0;g<n.length;g+=16){var v=c,b=u,w=d,S=m;c=p(c,u,d,m,n[g+0],7,-680876936),m=p(m,c,u,d,n[g+1],12,-389564586),d=p(d,m,c,u,n[g+2],17,606105819),u=p(u,d,m,c,n[g+3],22,-1044525330),c=p(c,u,d,m,n[g+4],7,-176418897),m=p(m,c,u,d,n[g+5],12,1200080426),d=p(d,m,c,u,n[g+6],17,-1473231341),u=p(u,d,m,c,n[g+7],22,-45705983),c=p(c,u,d,m,n[g+8],7,1770035416),m=p(m,c,u,d,n[g+9],12,-1958414417),d=p(d,m,c,u,n[g+10],17,-42063),u=p(u,d,m,c,n[g+11],22,-1990404162),c=p(c,u,d,m,n[g+12],7,1804603682),m=p(m,c,u,d,n[g+13],12,-40341101),d=p(d,m,c,u,n[g+14],17,-1502002290),c=f(c,u=p(u,d,m,c,n[g+15],22,1236535329),d,m,n[g+1],5,-165796510),m=f(m,c,u,d,n[g+6],9,-1069501632),d=f(d,m,c,u,n[g+11],14,643717713),u=f(u,d,m,c,n[g+0],20,-373897302),c=f(c,u,d,m,n[g+5],5,-701558691),m=f(m,c,u,d,n[g+10],9,38016083),d=f(d,m,c,u,n[g+15],14,-660478335),u=f(u,d,m,c,n[g+4],20,-405537848),c=f(c,u,d,m,n[g+9],5,568446438),m=f(m,c,u,d,n[g+14],9,-1019803690),d=f(d,m,c,u,n[g+3],14,-187363961),u=f(u,d,m,c,n[g+8],20,1163531501),c=f(c,u,d,m,n[g+13],5,-1444681467),m=f(m,c,u,d,n[g+2],9,-51403784),d=f(d,m,c,u,n[g+7],14,1735328473),c=h(c,u=f(u,d,m,c,n[g+12],20,-1926607734),d,m,n[g+5],4,-378558),m=h(m,c,u,d,n[g+8],11,-2022574463),d=h(d,m,c,u,n[g+11],16,1839030562),u=h(u,d,m,c,n[g+14],23,-35309556),c=h(c,u,d,m,n[g+1],4,-1530992060),m=h(m,c,u,d,n[g+4],11,1272893353),d=h(d,m,c,u,n[g+7],16,-155497632),u=h(u,d,m,c,n[g+10],23,-1094730640),c=h(c,u,d,m,n[g+13],4,681279174),m=h(m,c,u,d,n[g+0],11,-358537222),d=h(d,m,c,u,n[g+3],16,-722521979),u=h(u,d,m,c,n[g+6],23,76029189),c=h(c,u,d,m,n[g+9],4,-640364487),m=h(m,c,u,d,n[g+12],11,-421815835),d=h(d,m,c,u,n[g+15],16,530742520),c=y(c,u=h(u,d,m,c,n[g+2],23,-995338651),d,m,n[g+0],6,-198630844),m=y(m,c,u,d,n[g+7],10,1126891415),d=y(d,m,c,u,n[g+14],15,-1416354905),u=y(u,d,m,c,n[g+5],21,-57434055),c=y(c,u,d,m,n[g+12],6,1700485571),m=y(m,c,u,d,n[g+3],10,-1894986606),d=y(d,m,c,u,n[g+10],15,-1051523),u=y(u,d,m,c,n[g+1],21,-2054922799),c=y(c,u,d,m,n[g+8],6,1873313359),m=y(m,c,u,d,n[g+15],10,-30611744),d=y(d,m,c,u,n[g+6],15,-1560198380),u=y(u,d,m,c,n[g+13],21,1309151649),c=y(c,u,d,m,n[g+4],6,-145523070),m=y(m,c,u,d,n[g+11],10,-1120210379),d=y(d,m,c,u,n[g+2],15,718787259),u=y(u,d,m,c,n[g+9],21,-343485551),c=c+v>>>0,u=u+b>>>0,d=d+w>>>0,m=m+S>>>0}return o.endian([c,u,d,m])})._ff=function(e,t,n,o,r,a,i){var l=e+(t&n|~t&o)+(r>>>0)+i;return(l<<a|l>>>32-a)+t},l._gg=function(e,t,n,o,r,a,i){var l=e+(t&o|n&~o)+(r>>>0)+i;return(l<<a|l>>>32-a)+t},l._hh=function(e,t,n,o,r,a,i){var l=e+(t^n^o)+(r>>>0)+i;return(l<<a|l>>>32-a)+t},l._ii=function(e,t,n,o,r,a,i){var l=e+(n^(t|~o))+(r>>>0)+i;return(l<<a|l>>>32-a)+t},l._blocksize=16,l._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=o.wordsToBytes(l(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):o.bytesToHex(n)}}}]);
//# sourceMappingURL=844.js.map