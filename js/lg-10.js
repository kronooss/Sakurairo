(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[441],{1363:function(e){var o,i,t,s,r,l,n,a;e.exports=(o=function(){return(o=Object.assign||function(e){for(var o,i=1,t=arguments.length;i<t;i++)for(var s in o=arguments[i])Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);return e}).apply(this,arguments)},i={autoplayFirstVideo:!0,youTubePlayerParams:!1,vimeoPlayerParams:!1,wistiaPlayerParams:!1,gotoNextSlideOnVideoEnd:!0,autoplayVideoOnSlide:!1,videojs:!1,videojsOptions:{}},t="lgHasVideo",s="lgSlideItemLoad",r="lgBeforeSlide",l="lgAfterSlide",n="lgPosterClick",a=function(e){return Object.keys(e).map((function(o){return encodeURIComponent(o)+"="+encodeURIComponent(e[o])})).join("&")},function(){function e(e){return this.core=e,this.settings=o(o({},i),this.core.settings),this}return e.prototype.init=function(){var e=this;this.core.LGel.on(t+".video",this.onHasVideo.bind(this)),this.core.LGel.on(n+".video",(function(){var o=e.core.getSlideItem(e.core.index);e.loadVideoOnPosterClick(o)})),this.core.LGel.on(s+".video",this.onSlideItemLoad.bind(this)),this.core.LGel.on(r+".video",this.onBeforeSlide.bind(this)),this.core.LGel.on(l+".video",this.onAfterSlide.bind(this))},e.prototype.onSlideItemLoad=function(e){var o=this,i=e.detail,t=i.isFirstSlide,s=i.index;this.settings.autoplayFirstVideo&&t&&s===this.core.index&&setTimeout((function(){o.loadAndPlayVideo(s)}),200),!t&&this.settings.autoplayVideoOnSlide&&s===this.core.index&&this.loadAndPlayVideo(s)},e.prototype.onHasVideo=function(e){var o=e.detail,i=o.index,t=o.src,s=o.html5Video;o.hasPoster||(this.appendVideos(this.core.getSlideItem(i),{src:t,addClass:"lg-object",index:i,html5Video:s}),this.gotoNextSlideOnVideoEnd(t,i))},e.prototype.onBeforeSlide=function(e){if(this.core.lGalleryOn){var o=e.detail.prevIndex;this.pauseVideo(o)}},e.prototype.onAfterSlide=function(e){var o=this,i=e.detail,t=i.index,s=i.prevIndex,r=this.core.getSlideItem(t);this.settings.autoplayVideoOnSlide&&t!==s&&r.hasClass("lg-complete")&&setTimeout((function(){o.loadAndPlayVideo(t)}),100)},e.prototype.loadAndPlayVideo=function(e){var o=this.core.getSlideItem(e);this.core.galleryItems[e].poster?this.loadVideoOnPosterClick(o,!0):this.playVideo(e)},e.prototype.playVideo=function(e){this.controlVideo(e,"play")},e.prototype.pauseVideo=function(e){this.controlVideo(e,"pause")},e.prototype.getVideoHtml=function(e,o,i,t){var s="",r=this.core.galleryItems[i].__slideVideoInfo||{},l=this.core.galleryItems[i],n=l.title||l.alt;n=n?'title="'+n+'"':"";var d='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(r.youtube){var c="lg-youtube"+i,u="?"+(r.youtube[2]?r.youtube[2]+"&":"")+"wmode=opaque&autoplay=0&mute=1&enablejsapi=1"+(this.settings.youTubePlayerParams?"&"+a(this.settings.youTubePlayerParams):"");s='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-youtube '+o+'" '+n+' src="//www.youtube.com/embed/'+(r.youtube[1]+u)+'" '+d+"></iframe>"}else if(r.vimeo)c="lg-vimeo"+i,u=function(e,o){if(!o||!o.vimeo)return"";var i=o.vimeo[2]||"";return i="?"==i[0]?"&"+i.slice(1):i||"","?autoplay=0&muted=1"+(e?"&"+a(e):"")+i}(this.settings.vimeoPlayerParams,r),s='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-vimeo '+o+'" '+n+' src="//player.vimeo.com/video/'+(r.vimeo[1]+u)+'" '+d+"></iframe>";else if(r.wistia){var h="lg-wistia"+i;u=(u=a(this.settings.wistiaPlayerParams))?"?"+u:"",s='<iframe allow="autoplay" id="'+h+'" src="//fast.wistia.net/embed/iframe/'+(r.wistia[4]+u)+'" '+n+' class="wistia_embed lg-video-object lg-wistia '+o+'" name="wistia_embed" '+d+"></iframe>"}else if(r.html5){for(var f="",g=0;g<t.source.length;g++)f+='<source src="'+t.source[g].src+'" type="'+t.source[g].type+'">';if(t.tracks){var y=function(e){var o="",i=t.tracks[e];Object.keys(i||{}).forEach((function(e){o+=e+'="'+i[e]+'" '})),f+="<track "+o+">"};for(g=0;g<t.tracks.length;g++)y(g)}var p="",v=t.attributes||{};Object.keys(v||{}).forEach((function(e){p+=e+'="'+v[e]+'" '})),s='<video class="lg-video-object lg-html5 '+(this.settings.videojs?"video-js":"")+'" '+p+">\n                "+f+"\n                Your browser does not support HTML5 video.\n            </video>"}return s},e.prototype.appendVideos=function(e,o){var i,t=this.getVideoHtml(o.src,o.addClass,o.index,o.html5Video);e.find(".lg-video-cont").append(t);var s=e.find(".lg-video-object").first();if(o.html5Video&&s.on("mousedown.lg.video",(function(e){e.stopPropagation()})),this.settings.videojs&&(null===(i=this.core.galleryItems[o.index].__slideVideoInfo)||void 0===i?void 0:i.html5))try{return videojs(s.get(),this.settings.videojsOptions)}catch(e){console.error("lightGallery:- Make sure you have included videojs")}},e.prototype.gotoNextSlideOnVideoEnd=function(e,o){var i=this,t=this.core.getSlideItem(o).find(".lg-video-object").first(),s=this.core.galleryItems[o].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd)if(s.html5)t.on("ended",(function(){i.core.goToNextSlide()}));else if(s.vimeo)try{new Vimeo.Player(t.get()).on("ended",(function(){i.core.goToNextSlide()}))}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(s.wistia)try{window._wq=window._wq||[],window._wq.push({id:t.attr("id"),onReady:function(e){e.bind("end",(function(){i.core.goToNextSlide()}))}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},e.prototype.controlVideo=function(e,o){var i=this.core.getSlideItem(e).find(".lg-video-object").first(),t=this.core.galleryItems[e].__slideVideoInfo||{};if(i.get())if(t.youtube)try{i.get().contentWindow.postMessage('{"event":"command","func":"'+o+'Video","args":""}',"*")}catch(e){console.error("lightGallery:- "+e)}else if(t.vimeo)try{new Vimeo.Player(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(t.html5)if(this.settings.videojs)try{videojs(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included videojs")}else i.get()[o]();else if(t.wistia)try{window._wq=window._wq||[],window._wq.push({id:i.attr("id"),onReady:function(e){e[o]()}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},e.prototype.loadVideoOnPosterClick=function(e,o){var i=this;if(e.hasClass("lg-video-loaded"))o&&this.playVideo(this.core.index);else if(e.hasClass("lg-has-video"))this.playVideo(this.core.index);else{e.addClass("lg-has-video");var t=void 0,s=this.core.galleryItems[this.core.index].src,r=this.core.galleryItems[this.core.index].video;r&&(t="string"==typeof r?JSON.parse(r):r);var l=this.appendVideos(e,{src:s,addClass:"",index:this.core.index,html5Video:t});this.gotoNextSlideOnVideoEnd(s,this.core.index);var n=e.find(".lg-object").first().get();e.find(".lg-video-cont").first().append(n),e.addClass("lg-video-loading"),l&&l.ready((function(){l.on("loadedmetadata",(function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}))})),e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",(function(){setTimeout((function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}),50)}))}},e.prototype.onVideoLoadAfterPosterClick=function(e,o){e.addClass("lg-video-loaded"),this.playVideo(o)},e.prototype.destroy=function(){this.core.LGel.off(".lg.video"),this.core.LGel.off(".video")},e}())}}]);
//# sourceMappingURL=lg-10.js.map