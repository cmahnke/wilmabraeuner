(()=>{var po=Object.create;var mr=Object.defineProperty;var ho=Object.getOwnPropertyDescriptor;var _o=Object.getOwnPropertyNames;var go=Object.getPrototypeOf,mo=Object.prototype.hasOwnProperty;var pe=(a,l)=>()=>(l||a((l={exports:{}}).exports,l),l.exports);var yo=(a,l,c,p)=>{if(l&&typeof l=="object"||typeof l=="function")for(let m of _o(l))!mo.call(a,m)&&m!==c&&mr(a,m,{get:()=>l[m],enumerable:!(p=ho(l,m))||p.enumerable});return a};var yr=(a,l,c)=>(c=a!=null?po(go(a)):{},yo(l||!a||!a.__esModule?mr(c,"default",{value:a,enumerable:!0}):c,a));var vr=pe((Xt,Qt)=>{(function(a,l){typeof Xt=="object"&&typeof Qt<"u"?Qt.exports=l():typeof define=="function"&&define.amd?define(l):(a=a||self,a.Headroom=l())})(Xt,function(){"use strict";function a(){return typeof window<"u"}function l(){var f=!1;try{var h={get passive(){f=!0}};window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch{f=!1}return f}function c(){return!!(a()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}function p(f){return f.nodeType===9}function m(f){return f&&f.document&&p(f.document)}function T(f){var h=f.document,v=h.body,k=h.documentElement;return{scrollHeight:function(){return Math.max(v.scrollHeight,k.scrollHeight,v.offsetHeight,k.offsetHeight,v.clientHeight,k.clientHeight)},height:function(){return f.innerHeight||k.clientHeight||v.clientHeight},scrollY:function(){return f.pageYOffset!==void 0?f.pageYOffset:(k||v.parentNode||v).scrollTop}}}function O(f){return{scrollHeight:function(){return Math.max(f.scrollHeight,f.offsetHeight,f.clientHeight)},height:function(){return Math.max(f.offsetHeight,f.clientHeight)},scrollY:function(){return f.scrollTop}}}function D(f){return m(f)?T(f):O(f)}function I(f,h,v){var k=l(),S,x=!1,L=D(f),B=L.scrollY(),$={};function P(){var j=Math.round(L.scrollY()),E=L.height(),M=L.scrollHeight();$.scrollY=j,$.lastScrollY=B,$.direction=j>B?"down":"up",$.distance=Math.abs(j-B),$.isOutOfBounds=j<0||j+E>M,$.top=j<=h.offset[$.direction],$.bottom=j+E>=M,$.toleranceExceeded=$.distance>h.tolerance[$.direction],v($),B=j,x=!1}function q(){x||(x=!0,S=requestAnimationFrame(P))}var o=k?{passive:!0,capture:!1}:!1;return f.addEventListener("scroll",q,o),P(),{destroy:function(){cancelAnimationFrame(S),f.removeEventListener("scroll",q,o)}}}function z(f){return f===Object(f)?f:{down:f,up:f}}function i(f,h){h=h||{},Object.assign(this,i.options,h),this.classes=Object.assign({},i.options.classes,h.classes),this.elem=f,this.tolerance=z(this.tolerance),this.offset=z(this.offset),this.initialised=!1,this.frozen=!1}return i.prototype={constructor:i,init:function(){return i.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(f){f.scrollTracker=I(f.scroller,{offset:f.offset,tolerance:f.tolerance},f.update.bind(f))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){(this.hasClass("pinned")||!this.hasClass("unpinned"))&&(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(f){var h=f.direction==="down";return h&&!f.top&&f.toleranceExceeded},shouldPin:function(f){var h=f.direction==="up";return h&&f.toleranceExceeded||f.top},addClass:function(f){this.elem.classList.add.apply(this.elem.classList,this.classes[f].split(" "))},removeClass:function(f){this.elem.classList.remove.apply(this.elem.classList,this.classes[f].split(" "))},hasClass:function(f){return this.classes[f].split(" ").every(function(h){return this.classList.contains(h)},this.elem)},update:function(f){f.isOutOfBounds||this.frozen!==!0&&(f.top?this.top():this.notTop(),f.bottom?this.bottom():this.notBottom(),this.shouldUnpin(f)?this.unpin():this.shouldPin(f)&&this.pin())}},i.options={tolerance:{up:0,down:0},offset:0,scroller:a()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},i.cutsTheMustard=c(),i})});var wr=pe(xt=>{(function(){"use strict";var a=function(){this.init()};a.prototype={init:function(){var i=this||l;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var f=this||l;if(i=parseFloat(i),f.ctx||z(),typeof i<"u"&&i>=0&&i<=1){if(f._volume=i,f._muted)return f;f.usingWebAudio&&f.masterGain.gain.setValueAtTime(i,l.ctx.currentTime);for(var h=0;h<f._howls.length;h++)if(!f._howls[h]._webAudio)for(var v=f._howls[h]._getSoundIds(),k=0;k<v.length;k++){var S=f._howls[h]._soundById(v[k]);S&&S._node&&(S._node.volume=S._volume*i)}return f}return f._volume},mute:function(i){var f=this||l;f.ctx||z(),f._muted=i,f.usingWebAudio&&f.masterGain.gain.setValueAtTime(i?0:f._volume,l.ctx.currentTime);for(var h=0;h<f._howls.length;h++)if(!f._howls[h]._webAudio)for(var v=f._howls[h]._getSoundIds(),k=0;k<v.length;k++){var S=f._howls[h]._soundById(v[k]);S&&S._node&&(S._node.muted=i?!0:S._muted)}return f},stop:function(){for(var i=this||l,f=0;f<i._howls.length;f++)i._howls[f].stop();return i},unload:function(){for(var i=this||l,f=i._howls.length-1;f>=0;f--)i._howls[f].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,z()),i},codecs:function(i){return(this||l)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||l;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var f=new Audio;typeof f.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var f=new Audio;f.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||l,f=null;try{f=typeof Audio<"u"?new Audio:null}catch{return i}if(!f||typeof f.canPlayType!="function")return i;var h=f.canPlayType("audio/mpeg;").replace(/^no$/,""),v=i._navigator?i._navigator.userAgent:"",k=v.match(/OPR\/(\d+)/g),S=k&&parseInt(k[0].split("/")[1],10)<33,x=v.indexOf("Safari")!==-1&&v.indexOf("Chrome")===-1,L=v.match(/Version\/(.*?) /),B=x&&L&&parseInt(L[1],10)<15;return i._codecs={mp3:!!(!S&&(h||f.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!h,opus:!!f.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!f.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!f.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(f.canPlayType('audio/wav; codecs="1"')||f.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!f.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!f.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(f.canPlayType("audio/x-m4a;")||f.canPlayType("audio/m4a;")||f.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(f.canPlayType("audio/x-m4b;")||f.canPlayType("audio/m4b;")||f.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(f.canPlayType("audio/x-mp4;")||f.canPlayType("audio/mp4;")||f.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!B&&f.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!B&&f.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!f.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(f.canPlayType("audio/x-flac;")||f.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||l;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var f=function(h){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var v=new Audio;v._unlocked=!0,i._releaseHtml5Audio(v)}catch{i.noAudio=!0;break}for(var k=0;k<i._howls.length;k++)if(!i._howls[k]._webAudio)for(var S=i._howls[k]._getSoundIds(),x=0;x<S.length;x++){var L=i._howls[k]._soundById(S[x]);L&&L._node&&!L._node._unlocked&&(L._node._unlocked=!0,L._node.load())}i._autoResume();var B=i.ctx.createBufferSource();B.buffer=i._scratchBuffer,B.connect(i.ctx.destination),typeof B.start>"u"?B.noteOn(0):B.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),B.onended=function(){B.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",f,!0),document.removeEventListener("touchend",f,!0),document.removeEventListener("click",f,!0),document.removeEventListener("keydown",f,!0);for(var $=0;$<i._howls.length;$++)i._howls[$]._emit("unlock")}};return document.addEventListener("touchstart",f,!0),document.addEventListener("touchend",f,!0),document.addEventListener("click",f,!0),document.addEventListener("keydown",f,!0),i}},_obtainHtml5Audio:function(){var i=this||l;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var f=new Audio().play();return f&&typeof Promise<"u"&&(f instanceof Promise||typeof f.then=="function")&&f.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var f=this||l;return i._unlocked&&f._html5AudioPool.push(i),f},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!l.usingWebAudio)){for(var f=0;f<i._howls.length;f++)if(i._howls[f]._webAudio){for(var h=0;h<i._howls[f]._sounds.length;h++)if(!i._howls[f]._sounds[h]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var v=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(v,v)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!l.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var f=0;f<i._howls.length;f++)i._howls[f]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var l=new a,c=function(i){var f=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}f.init(i)};c.prototype={init:function(i){var f=this;return l.ctx||z(),f._autoplay=i.autoplay||!1,f._format=typeof i.format!="string"?i.format:[i.format],f._html5=i.html5||!1,f._muted=i.mute||!1,f._loop=i.loop||!1,f._pool=i.pool||5,f._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,f._rate=i.rate||1,f._sprite=i.sprite||{},f._src=typeof i.src!="string"?i.src:[i.src],f._volume=i.volume!==void 0?i.volume:1,f._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},f._duration=0,f._state="unloaded",f._sounds=[],f._endTimers={},f._queue=[],f._playLock=!1,f._onend=i.onend?[{fn:i.onend}]:[],f._onfade=i.onfade?[{fn:i.onfade}]:[],f._onload=i.onload?[{fn:i.onload}]:[],f._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],f._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],f._onpause=i.onpause?[{fn:i.onpause}]:[],f._onplay=i.onplay?[{fn:i.onplay}]:[],f._onstop=i.onstop?[{fn:i.onstop}]:[],f._onmute=i.onmute?[{fn:i.onmute}]:[],f._onvolume=i.onvolume?[{fn:i.onvolume}]:[],f._onrate=i.onrate?[{fn:i.onrate}]:[],f._onseek=i.onseek?[{fn:i.onseek}]:[],f._onunlock=i.onunlock?[{fn:i.onunlock}]:[],f._onresume=[],f._webAudio=l.usingWebAudio&&!f._html5,typeof l.ctx<"u"&&l.ctx&&l.autoUnlock&&l._unlockAudio(),l._howls.push(f),f._autoplay&&f._queue.push({event:"play",action:function(){f.play()}}),f._preload&&f._preload!=="none"&&f.load(),f},load:function(){var i=this,f=null;if(l.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var h=0;h<i._src.length;h++){var v,k;if(i._format&&i._format[h])v=i._format[h];else{if(k=i._src[h],typeof k!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}v=/^data:audio\/([^;,]+);/i.exec(k),v||(v=/\.([^.]+)$/.exec(k.split("?",1)[0])),v&&(v=v[1].toLowerCase())}if(v||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),v&&l.codecs(v)){f=i._src[h];break}}if(!f){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=f,i._state="loading",window.location.protocol==="https:"&&f.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new p(i),i._webAudio&&T(i),i},play:function(i,f){var h=this,v=null;if(typeof i=="number")v=i,i=null;else{if(typeof i=="string"&&h._state==="loaded"&&!h._sprite[i])return null;if(typeof i>"u"&&(i="__default",!h._playLock)){for(var k=0,S=0;S<h._sounds.length;S++)h._sounds[S]._paused&&!h._sounds[S]._ended&&(k++,v=h._sounds[S]._id);k===1?i=null:v=null}}var x=v?h._soundById(v):h._inactiveSound();if(!x)return null;if(v&&!i&&(i=x._sprite||"__default"),h._state!=="loaded"){x._sprite=i,x._ended=!1;var L=x._id;return h._queue.push({event:"play",action:function(){h.play(L)}}),L}if(v&&!x._paused)return f||h._loadQueue("play"),x._id;h._webAudio&&l._autoResume();var B=Math.max(0,x._seek>0?x._seek:h._sprite[i][0]/1e3),$=Math.max(0,(h._sprite[i][0]+h._sprite[i][1])/1e3-B),P=$*1e3/Math.abs(x._rate),q=h._sprite[i][0]/1e3,o=(h._sprite[i][0]+h._sprite[i][1])/1e3;x._sprite=i,x._ended=!1;var j=function(){x._paused=!1,x._seek=B,x._start=q,x._stop=o,x._loop=!!(x._loop||h._sprite[i][2])};if(B>=o){h._ended(x);return}var E=x._node;if(h._webAudio){var M=function(){h._playLock=!1,j(),h._refreshBuffer(x);var U=x._muted||h._muted?0:x._volume;E.gain.setValueAtTime(U,l.ctx.currentTime),x._playStart=l.ctx.currentTime,typeof E.bufferSource.start>"u"?x._loop?E.bufferSource.noteGrainOn(0,B,86400):E.bufferSource.noteGrainOn(0,B,$):x._loop?E.bufferSource.start(0,B,86400):E.bufferSource.start(0,B,$),P!==1/0&&(h._endTimers[x._id]=setTimeout(h._ended.bind(h,x),P)),f||setTimeout(function(){h._emit("play",x._id),h._loadQueue()},0)};l.state==="running"&&l.ctx.state!=="interrupted"?M():(h._playLock=!0,h.once("resume",M),h._clearTimer(x._id))}else{var H=function(){E.currentTime=B,E.muted=x._muted||h._muted||l._muted||E.muted,E.volume=x._volume*l.volume(),E.playbackRate=x._rate;try{var U=E.play();if(U&&typeof Promise<"u"&&(U instanceof Promise||typeof U.then=="function")?(h._playLock=!0,j(),U.then(function(){h._playLock=!1,E._unlocked=!0,f?h._loadQueue():h._emit("play",x._id)}).catch(function(){h._playLock=!1,h._emit("playerror",x._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),x._ended=!0,x._paused=!0})):f||(h._playLock=!1,j(),h._emit("play",x._id)),E.playbackRate=x._rate,E.paused){h._emit("playerror",x._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||x._loop?h._endTimers[x._id]=setTimeout(h._ended.bind(h,x),P):(h._endTimers[x._id]=function(){h._ended(x),E.removeEventListener("ended",h._endTimers[x._id],!1)},E.addEventListener("ended",h._endTimers[x._id],!1))}catch(te){h._emit("playerror",x._id,te)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=h._src,E.load());var X=window&&window.ejecta||!E.readyState&&l._navigator.isCocoonJS;if(E.readyState>=3||X)H();else{h._playLock=!0,h._state="loading";var Q=function(){h._state="loaded",H(),E.removeEventListener(l._canPlayEvent,Q,!1)};E.addEventListener(l._canPlayEvent,Q,!1),h._clearTimer(x._id)}}return x._id},pause:function(i){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"pause",action:function(){f.pause(i)}}),f;for(var h=f._getSoundIds(i),v=0;v<h.length;v++){f._clearTimer(h[v]);var k=f._soundById(h[v]);if(k&&!k._paused&&(k._seek=f.seek(h[v]),k._rateSeek=0,k._paused=!0,f._stopFade(h[v]),k._node))if(f._webAudio){if(!k._node.bufferSource)continue;typeof k._node.bufferSource.stop>"u"?k._node.bufferSource.noteOff(0):k._node.bufferSource.stop(0),f._cleanBuffer(k._node)}else(!isNaN(k._node.duration)||k._node.duration===1/0)&&k._node.pause();arguments[1]||f._emit("pause",k?k._id:null)}return f},stop:function(i,f){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"stop",action:function(){h.stop(i)}}),h;for(var v=h._getSoundIds(i),k=0;k<v.length;k++){h._clearTimer(v[k]);var S=h._soundById(v[k]);S&&(S._seek=S._start||0,S._rateSeek=0,S._paused=!0,S._ended=!0,h._stopFade(v[k]),S._node&&(h._webAudio?S._node.bufferSource&&(typeof S._node.bufferSource.stop>"u"?S._node.bufferSource.noteOff(0):S._node.bufferSource.stop(0),h._cleanBuffer(S._node)):(!isNaN(S._node.duration)||S._node.duration===1/0)&&(S._node.currentTime=S._start||0,S._node.pause(),S._node.duration===1/0&&h._clearSound(S._node))),f||h._emit("stop",S._id))}return h},mute:function(i,f){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"mute",action:function(){h.mute(i,f)}}),h;if(typeof f>"u")if(typeof i=="boolean")h._muted=i;else return h._muted;for(var v=h._getSoundIds(f),k=0;k<v.length;k++){var S=h._soundById(v[k]);S&&(S._muted=i,S._interval&&h._stopFade(S._id),h._webAudio&&S._node?S._node.gain.setValueAtTime(i?0:S._volume,l.ctx.currentTime):S._node&&(S._node.muted=l._muted?!0:i),h._emit("mute",S._id))}return h},volume:function(){var i=this,f=arguments,h,v;if(f.length===0)return i._volume;if(f.length===1||f.length===2&&typeof f[1]>"u"){var k=i._getSoundIds(),S=k.indexOf(f[0]);S>=0?v=parseInt(f[0],10):h=parseFloat(f[0])}else f.length>=2&&(h=parseFloat(f[0]),v=parseInt(f[1],10));var x;if(typeof h<"u"&&h>=0&&h<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,f)}}),i;typeof v>"u"&&(i._volume=h),v=i._getSoundIds(v);for(var L=0;L<v.length;L++)x=i._soundById(v[L]),x&&(x._volume=h,f[2]||i._stopFade(v[L]),i._webAudio&&x._node&&!x._muted?x._node.gain.setValueAtTime(h,l.ctx.currentTime):x._node&&!x._muted&&(x._node.volume=h*l.volume()),i._emit("volume",x._id))}else return x=v?i._soundById(v):i._sounds[0],x?x._volume:0;return i},fade:function(i,f,h,v){var k=this;if(k._state!=="loaded"||k._playLock)return k._queue.push({event:"fade",action:function(){k.fade(i,f,h,v)}}),k;i=Math.min(Math.max(0,parseFloat(i)),1),f=Math.min(Math.max(0,parseFloat(f)),1),h=parseFloat(h),k.volume(i,v);for(var S=k._getSoundIds(v),x=0;x<S.length;x++){var L=k._soundById(S[x]);if(L){if(v||k._stopFade(S[x]),k._webAudio&&!L._muted){var B=l.ctx.currentTime,$=B+h/1e3;L._volume=i,L._node.gain.setValueAtTime(i,B),L._node.gain.linearRampToValueAtTime(f,$)}k._startFadeInterval(L,i,f,h,S[x],typeof v>"u")}}return k},_startFadeInterval:function(i,f,h,v,k,S){var x=this,L=f,B=h-f,$=Math.abs(B/.01),P=Math.max(4,$>0?v/$:v),q=Date.now();i._fadeTo=h,i._interval=setInterval(function(){var o=(Date.now()-q)/v;q=Date.now(),L+=B*o,L=Math.round(L*100)/100,B<0?L=Math.max(h,L):L=Math.min(h,L),x._webAudio?i._volume=L:x.volume(L,i._id,!0),S&&(x._volume=L),(h<f&&L<=h||h>f&&L>=h)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,x.volume(h,i._id),x._emit("fade",i._id))},P)},_stopFade:function(i){var f=this,h=f._soundById(i);return h&&h._interval&&(f._webAudio&&h._node.gain.cancelScheduledValues(l.ctx.currentTime),clearInterval(h._interval),h._interval=null,f.volume(h._fadeTo,i),h._fadeTo=null,f._emit("fade",i)),f},loop:function(){var i=this,f=arguments,h,v,k;if(f.length===0)return i._loop;if(f.length===1)if(typeof f[0]=="boolean")h=f[0],i._loop=h;else return k=i._soundById(parseInt(f[0],10)),k?k._loop:!1;else f.length===2&&(h=f[0],v=parseInt(f[1],10));for(var S=i._getSoundIds(v),x=0;x<S.length;x++)k=i._soundById(S[x]),k&&(k._loop=h,i._webAudio&&k._node&&k._node.bufferSource&&(k._node.bufferSource.loop=h,h&&(k._node.bufferSource.loopStart=k._start||0,k._node.bufferSource.loopEnd=k._stop,i.playing(S[x])&&(i.pause(S[x],!0),i.play(S[x],!0)))));return i},rate:function(){var i=this,f=arguments,h,v;if(f.length===0)v=i._sounds[0]._id;else if(f.length===1){var k=i._getSoundIds(),S=k.indexOf(f[0]);S>=0?v=parseInt(f[0],10):h=parseFloat(f[0])}else f.length===2&&(h=parseFloat(f[0]),v=parseInt(f[1],10));var x;if(typeof h=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,f)}}),i;typeof v>"u"&&(i._rate=h),v=i._getSoundIds(v);for(var L=0;L<v.length;L++)if(x=i._soundById(v[L]),x){i.playing(v[L])&&(x._rateSeek=i.seek(v[L]),x._playStart=i._webAudio?l.ctx.currentTime:x._playStart),x._rate=h,i._webAudio&&x._node&&x._node.bufferSource?x._node.bufferSource.playbackRate.setValueAtTime(h,l.ctx.currentTime):x._node&&(x._node.playbackRate=h);var B=i.seek(v[L]),$=(i._sprite[x._sprite][0]+i._sprite[x._sprite][1])/1e3-B,P=$*1e3/Math.abs(x._rate);(i._endTimers[v[L]]||!x._paused)&&(i._clearTimer(v[L]),i._endTimers[v[L]]=setTimeout(i._ended.bind(i,x),P)),i._emit("rate",x._id)}}else return x=i._soundById(v),x?x._rate:i._rate;return i},seek:function(){var i=this,f=arguments,h,v;if(f.length===0)i._sounds.length&&(v=i._sounds[0]._id);else if(f.length===1){var k=i._getSoundIds(),S=k.indexOf(f[0]);S>=0?v=parseInt(f[0],10):i._sounds.length&&(v=i._sounds[0]._id,h=parseFloat(f[0]))}else f.length===2&&(h=parseFloat(f[0]),v=parseInt(f[1],10));if(typeof v>"u")return 0;if(typeof h=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,f)}}),i;var x=i._soundById(v);if(x)if(typeof h=="number"&&h>=0){var L=i.playing(v);L&&i.pause(v,!0),x._seek=h,x._ended=!1,i._clearTimer(v),!i._webAudio&&x._node&&!isNaN(x._node.duration)&&(x._node.currentTime=h);var B=function(){L&&i.play(v,!0),i._emit("seek",v)};if(L&&!i._webAudio){var $=function(){i._playLock?setTimeout($,0):B()};setTimeout($,0)}else B()}else if(i._webAudio){var P=i.playing(v)?l.ctx.currentTime-x._playStart:0,q=x._rateSeek?x._rateSeek-x._seek:0;return x._seek+(q+P*Math.abs(x._rate))}else return x._node.currentTime;return i},playing:function(i){var f=this;if(typeof i=="number"){var h=f._soundById(i);return h?!h._paused:!1}for(var v=0;v<f._sounds.length;v++)if(!f._sounds[v]._paused)return!0;return!1},duration:function(i){var f=this,h=f._duration,v=f._soundById(i);return v&&(h=f._sprite[v._sprite][1]/1e3),h},state:function(){return this._state},unload:function(){for(var i=this,f=i._sounds,h=0;h<f.length;h++)f[h]._paused||i.stop(f[h]._id),i._webAudio||(i._clearSound(f[h]._node),f[h]._node.removeEventListener("error",f[h]._errorFn,!1),f[h]._node.removeEventListener(l._canPlayEvent,f[h]._loadFn,!1),f[h]._node.removeEventListener("ended",f[h]._endFn,!1),l._releaseHtml5Audio(f[h]._node)),delete f[h]._node,i._clearTimer(f[h]._id);var v=l._howls.indexOf(i);v>=0&&l._howls.splice(v,1);var k=!0;for(h=0;h<l._howls.length;h++)if(l._howls[h]._src===i._src||i._src.indexOf(l._howls[h]._src)>=0){k=!1;break}return m&&k&&delete m[i._src],l.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,f,h,v){var k=this,S=k["_on"+i];return typeof f=="function"&&S.push(v?{id:h,fn:f,once:v}:{id:h,fn:f}),k},off:function(i,f,h){var v=this,k=v["_on"+i],S=0;if(typeof f=="number"&&(h=f,f=null),f||h)for(S=0;S<k.length;S++){var x=h===k[S].id;if(f===k[S].fn&&x||!f&&x){k.splice(S,1);break}}else if(i)v["_on"+i]=[];else{var L=Object.keys(v);for(S=0;S<L.length;S++)L[S].indexOf("_on")===0&&Array.isArray(v[L[S]])&&(v[L[S]]=[])}return v},once:function(i,f,h){var v=this;return v.on(i,f,h,1),v},_emit:function(i,f,h){for(var v=this,k=v["_on"+i],S=k.length-1;S>=0;S--)(!k[S].id||k[S].id===f||i==="load")&&(setTimeout(function(x){x.call(this,f,h)}.bind(v,k[S].fn),0),k[S].once&&v.off(i,k[S].fn,k[S].id));return v._loadQueue(i),v},_loadQueue:function(i){var f=this;if(f._queue.length>0){var h=f._queue[0];h.event===i&&(f._queue.shift(),f._loadQueue()),i||h.action()}return f},_ended:function(i){var f=this,h=i._sprite;if(!f._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(f._ended.bind(f,i),100),f;var v=!!(i._loop||f._sprite[h][2]);if(f._emit("end",i._id),!f._webAudio&&v&&f.stop(i._id,!0).play(i._id),f._webAudio&&v){f._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=l.ctx.currentTime;var k=(i._stop-i._start)*1e3/Math.abs(i._rate);f._endTimers[i._id]=setTimeout(f._ended.bind(f,i),k)}return f._webAudio&&!v&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,f._clearTimer(i._id),f._cleanBuffer(i._node),l._autoSuspend()),!f._webAudio&&!v&&f.stop(i._id,!0),f},_clearTimer:function(i){var f=this;if(f._endTimers[i]){if(typeof f._endTimers[i]!="function")clearTimeout(f._endTimers[i]);else{var h=f._soundById(i);h&&h._node&&h._node.removeEventListener("ended",f._endTimers[i],!1)}delete f._endTimers[i]}return f},_soundById:function(i){for(var f=this,h=0;h<f._sounds.length;h++)if(i===f._sounds[h]._id)return f._sounds[h];return null},_inactiveSound:function(){var i=this;i._drain();for(var f=0;f<i._sounds.length;f++)if(i._sounds[f]._ended)return i._sounds[f].reset();return new p(i)},_drain:function(){var i=this,f=i._pool,h=0,v=0;if(!(i._sounds.length<f)){for(v=0;v<i._sounds.length;v++)i._sounds[v]._ended&&h++;for(v=i._sounds.length-1;v>=0;v--){if(h<=f)return;i._sounds[v]._ended&&(i._webAudio&&i._sounds[v]._node&&i._sounds[v]._node.disconnect(0),i._sounds.splice(v,1),h--)}}},_getSoundIds:function(i){var f=this;if(typeof i>"u"){for(var h=[],v=0;v<f._sounds.length;v++)h.push(f._sounds[v]._id);return h}else return[i]},_refreshBuffer:function(i){var f=this;return i._node.bufferSource=l.ctx.createBufferSource(),i._node.bufferSource.buffer=m[f._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,l.ctx.currentTime),f},_cleanBuffer:function(i){var f=this,h=l._navigator&&l._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return f;if(l._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),h))try{i.bufferSource.buffer=l._scratchBuffer}catch{}return i.bufferSource=null,f},_clearSound:function(i){var f=/MSIE |Trident\//.test(l._navigator&&l._navigator.userAgent);f||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var p=function(i){this._parent=i,this.init()};p.prototype={init:function(){var i=this,f=i._parent;return i._muted=f._muted,i._loop=f._loop,i._volume=f._volume,i._rate=f._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++l._counter,f._sounds.push(i),i.create(),i},create:function(){var i=this,f=i._parent,h=l._muted||i._muted||i._parent._muted?0:i._volume;return f._webAudio?(i._node=typeof l.ctx.createGain>"u"?l.ctx.createGainNode():l.ctx.createGain(),i._node.gain.setValueAtTime(h,l.ctx.currentTime),i._node.paused=!0,i._node.connect(l.masterGain)):l.noAudio||(i._node=l._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(l._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=f._src,i._node.preload=f._preload===!0?"auto":f._preload,i._node.volume=h*l.volume(),i._node.load()),i},reset:function(){var i=this,f=i._parent;return i._muted=f._muted,i._loop=f._loop,i._volume=f._volume,i._rate=f._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++l._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,f=i._parent;f._duration=Math.ceil(i._node.duration*10)/10,Object.keys(f._sprite).length===0&&(f._sprite={__default:[0,f._duration*1e3]}),f._state!=="loaded"&&(f._state="loaded",f._emit("load"),f._loadQueue()),i._node.removeEventListener(l._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,f=i._parent;f._duration===1/0&&(f._duration=Math.ceil(i._node.duration*10)/10,f._sprite.__default[1]===1/0&&(f._sprite.__default[1]=f._duration*1e3),f._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var m={},T=function(i){var f=i._src;if(m[f]){i._duration=m[f].duration,I(i);return}if(/^data:[^;]+;base64,/.test(f)){for(var h=atob(f.split(",")[1]),v=new Uint8Array(h.length),k=0;k<h.length;++k)v[k]=h.charCodeAt(k);D(v.buffer,i)}else{var S=new XMLHttpRequest;S.open(i._xhr.method,f,!0),S.withCredentials=i._xhr.withCredentials,S.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(x){S.setRequestHeader(x,i._xhr.headers[x])}),S.onload=function(){var x=(S.status+"")[0];if(x!=="0"&&x!=="2"&&x!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+S.status+".");return}D(S.response,i)},S.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete m[f],i.load())},O(S)}},O=function(i){try{i.send()}catch{i.onerror()}},D=function(i,f){var h=function(){f._emit("loaderror",null,"Decoding audio data failed.")},v=function(k){k&&f._sounds.length>0?(m[f._src]=k,I(f,k)):h()};typeof Promise<"u"&&l.ctx.decodeAudioData.length===1?l.ctx.decodeAudioData(i).then(v).catch(h):l.ctx.decodeAudioData(i,v,h)},I=function(i,f){f&&!i._duration&&(i._duration=f.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},z=function(){if(l.usingWebAudio){try{typeof AudioContext<"u"?l.ctx=new AudioContext:typeof webkitAudioContext<"u"?l.ctx=new webkitAudioContext:l.usingWebAudio=!1}catch{l.usingWebAudio=!1}l.ctx||(l.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(l._navigator&&l._navigator.platform),f=l._navigator&&l._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),h=f?parseInt(f[1],10):null;if(i&&h&&h<9){var v=/safari/.test(l._navigator&&l._navigator.userAgent.toLowerCase());l._navigator&&!v&&(l.usingWebAudio=!1)}l.usingWebAudio&&(l.masterGain=typeof l.ctx.createGain>"u"?l.ctx.createGainNode():l.ctx.createGain(),l.masterGain.gain.setValueAtTime(l._muted?0:l._volume,l.ctx.currentTime),l.masterGain.connect(l.ctx.destination)),l._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:l,Howl:c}}),typeof xt<"u"&&(xt.Howler=l,xt.Howl=c),typeof global<"u"?(global.HowlerGlobal=a,global.Howler=l,global.Howl=c,global.Sound=p):typeof window<"u"&&(window.HowlerGlobal=a,window.Howler=l,window.Howl=c,window.Sound=p)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(l){var c=this;if(!c.ctx||!c.ctx.listener)return c;for(var p=c._howls.length-1;p>=0;p--)c._howls[p].stereo(l);return c},HowlerGlobal.prototype.pos=function(l,c,p){var m=this;if(!m.ctx||!m.ctx.listener)return m;if(c=typeof c!="number"?m._pos[1]:c,p=typeof p!="number"?m._pos[2]:p,typeof l=="number")m._pos=[l,c,p],typeof m.ctx.listener.positionX<"u"?(m.ctx.listener.positionX.setTargetAtTime(m._pos[0],Howler.ctx.currentTime,.1),m.ctx.listener.positionY.setTargetAtTime(m._pos[1],Howler.ctx.currentTime,.1),m.ctx.listener.positionZ.setTargetAtTime(m._pos[2],Howler.ctx.currentTime,.1)):m.ctx.listener.setPosition(m._pos[0],m._pos[1],m._pos[2]);else return m._pos;return m},HowlerGlobal.prototype.orientation=function(l,c,p,m,T,O){var D=this;if(!D.ctx||!D.ctx.listener)return D;var I=D._orientation;if(c=typeof c!="number"?I[1]:c,p=typeof p!="number"?I[2]:p,m=typeof m!="number"?I[3]:m,T=typeof T!="number"?I[4]:T,O=typeof O!="number"?I[5]:O,typeof l=="number")D._orientation=[l,c,p,m,T,O],typeof D.ctx.listener.forwardX<"u"?(D.ctx.listener.forwardX.setTargetAtTime(l,Howler.ctx.currentTime,.1),D.ctx.listener.forwardY.setTargetAtTime(c,Howler.ctx.currentTime,.1),D.ctx.listener.forwardZ.setTargetAtTime(p,Howler.ctx.currentTime,.1),D.ctx.listener.upX.setTargetAtTime(m,Howler.ctx.currentTime,.1),D.ctx.listener.upY.setTargetAtTime(T,Howler.ctx.currentTime,.1),D.ctx.listener.upZ.setTargetAtTime(O,Howler.ctx.currentTime,.1)):D.ctx.listener.setOrientation(l,c,p,m,T,O);else return I;return D},Howl.prototype.init=(function(l){return function(c){var p=this;return p._orientation=c.orientation||[1,0,0],p._stereo=c.stereo||null,p._pos=c.pos||null,p._pannerAttr={coneInnerAngle:typeof c.coneInnerAngle<"u"?c.coneInnerAngle:360,coneOuterAngle:typeof c.coneOuterAngle<"u"?c.coneOuterAngle:360,coneOuterGain:typeof c.coneOuterGain<"u"?c.coneOuterGain:0,distanceModel:typeof c.distanceModel<"u"?c.distanceModel:"inverse",maxDistance:typeof c.maxDistance<"u"?c.maxDistance:1e4,panningModel:typeof c.panningModel<"u"?c.panningModel:"HRTF",refDistance:typeof c.refDistance<"u"?c.refDistance:1,rolloffFactor:typeof c.rolloffFactor<"u"?c.rolloffFactor:1},p._onstereo=c.onstereo?[{fn:c.onstereo}]:[],p._onpos=c.onpos?[{fn:c.onpos}]:[],p._onorientation=c.onorientation?[{fn:c.onorientation}]:[],l.call(this,c)}})(Howl.prototype.init),Howl.prototype.stereo=function(l,c){var p=this;if(!p._webAudio)return p;if(p._state!=="loaded")return p._queue.push({event:"stereo",action:function(){p.stereo(l,c)}}),p;var m=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof c>"u")if(typeof l=="number")p._stereo=l,p._pos=[l,0,0];else return p._stereo;for(var T=p._getSoundIds(c),O=0;O<T.length;O++){var D=p._soundById(T[O]);if(D)if(typeof l=="number")D._stereo=l,D._pos=[l,0,0],D._node&&(D._pannerAttr.panningModel="equalpower",(!D._panner||!D._panner.pan)&&a(D,m),m==="spatial"?typeof D._panner.positionX<"u"?(D._panner.positionX.setValueAtTime(l,Howler.ctx.currentTime),D._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),D._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):D._panner.setPosition(l,0,0):D._panner.pan.setValueAtTime(l,Howler.ctx.currentTime)),p._emit("stereo",D._id);else return D._stereo}return p},Howl.prototype.pos=function(l,c,p,m){var T=this;if(!T._webAudio)return T;if(T._state!=="loaded")return T._queue.push({event:"pos",action:function(){T.pos(l,c,p,m)}}),T;if(c=typeof c!="number"?0:c,p=typeof p!="number"?-.5:p,typeof m>"u")if(typeof l=="number")T._pos=[l,c,p];else return T._pos;for(var O=T._getSoundIds(m),D=0;D<O.length;D++){var I=T._soundById(O[D]);if(I)if(typeof l=="number")I._pos=[l,c,p],I._node&&((!I._panner||I._panner.pan)&&a(I,"spatial"),typeof I._panner.positionX<"u"?(I._panner.positionX.setValueAtTime(l,Howler.ctx.currentTime),I._panner.positionY.setValueAtTime(c,Howler.ctx.currentTime),I._panner.positionZ.setValueAtTime(p,Howler.ctx.currentTime)):I._panner.setPosition(l,c,p)),T._emit("pos",I._id);else return I._pos}return T},Howl.prototype.orientation=function(l,c,p,m){var T=this;if(!T._webAudio)return T;if(T._state!=="loaded")return T._queue.push({event:"orientation",action:function(){T.orientation(l,c,p,m)}}),T;if(c=typeof c!="number"?T._orientation[1]:c,p=typeof p!="number"?T._orientation[2]:p,typeof m>"u")if(typeof l=="number")T._orientation=[l,c,p];else return T._orientation;for(var O=T._getSoundIds(m),D=0;D<O.length;D++){var I=T._soundById(O[D]);if(I)if(typeof l=="number")I._orientation=[l,c,p],I._node&&(I._panner||(I._pos||(I._pos=T._pos||[0,0,-.5]),a(I,"spatial")),typeof I._panner.orientationX<"u"?(I._panner.orientationX.setValueAtTime(l,Howler.ctx.currentTime),I._panner.orientationY.setValueAtTime(c,Howler.ctx.currentTime),I._panner.orientationZ.setValueAtTime(p,Howler.ctx.currentTime)):I._panner.setOrientation(l,c,p)),T._emit("orientation",I._id);else return I._orientation}return T},Howl.prototype.pannerAttr=function(){var l=this,c=arguments,p,m,T;if(!l._webAudio)return l;if(c.length===0)return l._pannerAttr;if(c.length===1)if(typeof c[0]=="object")p=c[0],typeof m>"u"&&(p.pannerAttr||(p.pannerAttr={coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor,panningModel:p.panningModel}),l._pannerAttr={coneInnerAngle:typeof p.pannerAttr.coneInnerAngle<"u"?p.pannerAttr.coneInnerAngle:l._coneInnerAngle,coneOuterAngle:typeof p.pannerAttr.coneOuterAngle<"u"?p.pannerAttr.coneOuterAngle:l._coneOuterAngle,coneOuterGain:typeof p.pannerAttr.coneOuterGain<"u"?p.pannerAttr.coneOuterGain:l._coneOuterGain,distanceModel:typeof p.pannerAttr.distanceModel<"u"?p.pannerAttr.distanceModel:l._distanceModel,maxDistance:typeof p.pannerAttr.maxDistance<"u"?p.pannerAttr.maxDistance:l._maxDistance,refDistance:typeof p.pannerAttr.refDistance<"u"?p.pannerAttr.refDistance:l._refDistance,rolloffFactor:typeof p.pannerAttr.rolloffFactor<"u"?p.pannerAttr.rolloffFactor:l._rolloffFactor,panningModel:typeof p.pannerAttr.panningModel<"u"?p.pannerAttr.panningModel:l._panningModel});else return T=l._soundById(parseInt(c[0],10)),T?T._pannerAttr:l._pannerAttr;else c.length===2&&(p=c[0],m=parseInt(c[1],10));for(var O=l._getSoundIds(m),D=0;D<O.length;D++)if(T=l._soundById(O[D]),T){var I=T._pannerAttr;I={coneInnerAngle:typeof p.coneInnerAngle<"u"?p.coneInnerAngle:I.coneInnerAngle,coneOuterAngle:typeof p.coneOuterAngle<"u"?p.coneOuterAngle:I.coneOuterAngle,coneOuterGain:typeof p.coneOuterGain<"u"?p.coneOuterGain:I.coneOuterGain,distanceModel:typeof p.distanceModel<"u"?p.distanceModel:I.distanceModel,maxDistance:typeof p.maxDistance<"u"?p.maxDistance:I.maxDistance,refDistance:typeof p.refDistance<"u"?p.refDistance:I.refDistance,rolloffFactor:typeof p.rolloffFactor<"u"?p.rolloffFactor:I.rolloffFactor,panningModel:typeof p.panningModel<"u"?p.panningModel:I.panningModel};var z=T._panner;z||(T._pos||(T._pos=l._pos||[0,0,-.5]),a(T,"spatial"),z=T._panner),z.coneInnerAngle=I.coneInnerAngle,z.coneOuterAngle=I.coneOuterAngle,z.coneOuterGain=I.coneOuterGain,z.distanceModel=I.distanceModel,z.maxDistance=I.maxDistance,z.refDistance=I.refDistance,z.rolloffFactor=I.rolloffFactor,z.panningModel=I.panningModel}return l},Sound.prototype.init=(function(l){return function(){var c=this,p=c._parent;c._orientation=p._orientation,c._stereo=p._stereo,c._pos=p._pos,c._pannerAttr=p._pannerAttr,l.call(this),c._stereo?p.stereo(c._stereo):c._pos&&p.pos(c._pos[0],c._pos[1],c._pos[2],c._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(l){return function(){var c=this,p=c._parent;return c._orientation=p._orientation,c._stereo=p._stereo,c._pos=p._pos,c._pannerAttr=p._pannerAttr,c._stereo?p.stereo(c._stereo):c._pos?p.pos(c._pos[0],c._pos[1],c._pos[2],c._id):c._panner&&(c._panner.disconnect(0),c._panner=void 0,p._refreshBuffer(c)),l.call(this)}})(Sound.prototype.reset);var a=function(l,c){c=c||"spatial",c==="spatial"?(l._panner=Howler.ctx.createPanner(),l._panner.coneInnerAngle=l._pannerAttr.coneInnerAngle,l._panner.coneOuterAngle=l._pannerAttr.coneOuterAngle,l._panner.coneOuterGain=l._pannerAttr.coneOuterGain,l._panner.distanceModel=l._pannerAttr.distanceModel,l._panner.maxDistance=l._pannerAttr.maxDistance,l._panner.refDistance=l._pannerAttr.refDistance,l._panner.rolloffFactor=l._pannerAttr.rolloffFactor,l._panner.panningModel=l._pannerAttr.panningModel,typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(l._pos[0],Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(l._pos[1],Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(l._pos[2],Howler.ctx.currentTime)):l._panner.setPosition(l._pos[0],l._pos[1],l._pos[2]),typeof l._panner.orientationX<"u"?(l._panner.orientationX.setValueAtTime(l._orientation[0],Howler.ctx.currentTime),l._panner.orientationY.setValueAtTime(l._orientation[1],Howler.ctx.currentTime),l._panner.orientationZ.setValueAtTime(l._orientation[2],Howler.ctx.currentTime)):l._panner.setOrientation(l._orientation[0],l._orientation[1],l._orientation[2])):(l._panner=Howler.ctx.createStereoPanner(),l._panner.pan.setValueAtTime(l._stereo,Howler.ctx.currentTime)),l._panner.connect(l._node),l._paused||l._parent.pause(l._id,!0).play(l._id,!0)}})()});var Vr=pe((an,sn)=>{(function(a,l){typeof an=="object"&&typeof sn<"u"?sn.exports=l():typeof define=="function"&&define.amd?define(l):(a=typeof globalThis<"u"?globalThis:a||self,a.Data=l())})(an,(function(){"use strict";let a=new Map;return{set(c,p,m){a.has(c)||a.set(c,new Map);let T=a.get(c);if(!T.has(p)&&T.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(T.keys())[0]}.`);return}T.set(p,m)},get(c,p){return a.has(c)&&a.get(c).get(p)||null},remove(c,p){if(!a.has(c))return;let m=a.get(c);m.delete(p),m.size===0&&a.delete(c)}}}))});var ze=pe((kt,$r)=>{(function(a,l){typeof kt=="object"&&typeof $r<"u"?l(kt):typeof define=="function"&&define.amd?define(["exports"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a.Index={}))})(kt,(function(a){"use strict";let p="transitionend",m=E=>(E&&window.CSS&&window.CSS.escape&&(E=E.replace(/#([^\s"#']+)/g,(M,H)=>`#${CSS.escape(H)}`)),E),T=E=>E==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase(),O=E=>{do E+=Math.floor(Math.random()*1e6);while(document.getElementById(E));return E},D=E=>{if(!E)return 0;let{transitionDuration:M,transitionDelay:H}=window.getComputedStyle(E),X=Number.parseFloat(M),Q=Number.parseFloat(H);return!X&&!Q?0:(M=M.split(",")[0],H=H.split(",")[0],(Number.parseFloat(M)+Number.parseFloat(H))*1e3)},I=E=>{E.dispatchEvent(new Event(p))},z=E=>!E||typeof E!="object"?!1:(typeof E.jquery<"u"&&(E=E[0]),typeof E.nodeType<"u"),i=E=>z(E)?E.jquery?E[0]:E:typeof E=="string"&&E.length>0?document.querySelector(m(E)):null,f=E=>{if(!z(E)||E.getClientRects().length===0)return!1;let M=getComputedStyle(E).getPropertyValue("visibility")==="visible",H=E.closest("details:not([open])");if(!H)return M;if(H!==E){let X=E.closest("summary");if(X&&X.parentNode!==H||X===null)return!1}return M},h=E=>!E||E.nodeType!==Node.ELEMENT_NODE||E.classList.contains("disabled")?!0:typeof E.disabled<"u"?E.disabled:E.hasAttribute("disabled")&&E.getAttribute("disabled")!=="false",v=E=>{if(!document.documentElement.attachShadow)return null;if(typeof E.getRootNode=="function"){let M=E.getRootNode();return M instanceof ShadowRoot?M:null}return E instanceof ShadowRoot?E:E.parentNode?v(E.parentNode):null},k=()=>{},S=E=>{E.offsetHeight},x=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],B=E=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(let M of L)M()}),L.push(E)):E()},$=()=>document.documentElement.dir==="rtl",P=E=>{B(()=>{let M=x();if(M){let H=E.NAME,X=M.fn[H];M.fn[H]=E.jQueryInterface,M.fn[H].Constructor=E,M.fn[H].noConflict=()=>(M.fn[H]=X,E.jQueryInterface)}})},q=(E,M=[],H=E)=>typeof E=="function"?E.call(...M):H,o=(E,M,H=!0)=>{if(!H){q(E);return}let Q=D(M)+5,U=!1,te=({target:se})=>{se===M&&(U=!0,M.removeEventListener(p,te),q(E))};M.addEventListener(p,te),setTimeout(()=>{U||I(M)},Q)},j=(E,M,H,X)=>{let Q=E.length,U=E.indexOf(M);return U===-1?!H&&X?E[Q-1]:E[0]:(U+=H?1:-1,X&&(U=(U+Q)%Q),E[Math.max(0,Math.min(U,Q-1))])};a.defineJQueryPlugin=P,a.execute=q,a.executeAfterTransition=o,a.findShadowRoot=v,a.getElement=i,a.getNextActiveElement=j,a.getTransitionDurationFromElement=D,a.getUID=O,a.getjQuery=x,a.isDisabled=h,a.isElement=z,a.isRTL=$,a.isVisible=f,a.noop=k,a.onDOMContentLoaded=B,a.parseSelector=m,a.reflow=S,a.toType=T,a.triggerTransitionEnd=I,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}))});var cn=pe((un,fn)=>{(function(a,l){typeof un=="object"&&typeof fn<"u"?fn.exports=l(ze()):typeof define=="function"&&define.amd?define(["../util/index"],l):(a=typeof globalThis<"u"?globalThis:a||self,a.EventHandler=l(a.Index))})(un,(function(a){"use strict";let l=/[^.]*(?=\..*)\.|.*/,c=/\..*/,p=/::\d+$/,m={},T=1,O={mouseenter:"mouseover",mouseleave:"mouseout"},D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function I(P,q){return q&&`${q}::${T++}`||P.uidEvent||T++}function z(P){let q=I(P);return P.uidEvent=q,m[q]=m[q]||{},m[q]}function i(P,q){return function o(j){return $(j,{delegateTarget:P}),o.oneOff&&B.off(P,j.type,q),q.apply(P,[j])}}function f(P,q,o){return function j(E){let M=P.querySelectorAll(q);for(let{target:H}=E;H&&H!==this;H=H.parentNode)for(let X of M)if(X===H)return $(E,{delegateTarget:H}),j.oneOff&&B.off(P,E.type,q,o),o.apply(H,[E])}}function h(P,q,o=null){return Object.values(P).find(j=>j.callable===q&&j.delegationSelector===o)}function v(P,q,o){let j=typeof q=="string",E=j?o:q||o,M=L(P);return D.has(M)||(M=P),[j,E,M]}function k(P,q,o,j,E){if(typeof q!="string"||!P)return;let[M,H,X]=v(q,o,j);q in O&&(H=(De=>function(N){if(!N.relatedTarget||N.relatedTarget!==N.delegateTarget&&!N.delegateTarget.contains(N.relatedTarget))return De.call(this,N)})(H));let Q=z(P),U=Q[X]||(Q[X]={}),te=h(U,H,M?o:null);if(te){te.oneOff=te.oneOff&&E;return}let se=I(H,q.replace(l,"")),ae=M?f(P,o,H):i(P,H);ae.delegationSelector=M?o:null,ae.callable=H,ae.oneOff=E,ae.uidEvent=se,U[se]=ae,P.addEventListener(X,ae,M)}function S(P,q,o,j,E){let M=h(q[o],j,E);M&&(P.removeEventListener(o,M,!!E),delete q[o][M.uidEvent])}function x(P,q,o,j){let E=q[o]||{};for(let[M,H]of Object.entries(E))M.includes(j)&&S(P,q,o,H.callable,H.delegationSelector)}function L(P){return P=P.replace(c,""),O[P]||P}let B={on(P,q,o,j){k(P,q,o,j,!1)},one(P,q,o,j){k(P,q,o,j,!0)},off(P,q,o,j){if(typeof q!="string"||!P)return;let[E,M,H]=v(q,o,j),X=H!==q,Q=z(P),U=Q[H]||{},te=q.startsWith(".");if(typeof M<"u"){if(!Object.keys(U).length)return;S(P,Q,H,M,E?o:null);return}if(te)for(let se of Object.keys(Q))x(P,Q,se,q.slice(1));for(let[se,ae]of Object.entries(U)){let re=se.replace(p,"");(!X||q.includes(re))&&S(P,Q,H,ae.callable,ae.delegationSelector)}},trigger(P,q,o){if(typeof q!="string"||!P)return null;let j=a.getjQuery(),E=L(q),M=q!==E,H=null,X=!0,Q=!0,U=!1;M&&j&&(H=j.Event(q,o),j(P).trigger(H),X=!H.isPropagationStopped(),Q=!H.isImmediatePropagationStopped(),U=H.isDefaultPrevented());let te=$(new Event(q,{bubbles:X,cancelable:!0}),o);return U&&te.preventDefault(),Q&&P.dispatchEvent(te),te.defaultPrevented&&H&&H.preventDefault(),te}};function $(P,q={}){for(let[o,j]of Object.entries(q))try{P[o]=j}catch{Object.defineProperty(P,o,{configurable:!0,get(){return j}})}return P}return B}))});var Wr=pe((ln,dn)=>{(function(a,l){typeof ln=="object"&&typeof dn<"u"?dn.exports=l():typeof define=="function"&&define.amd?define(l):(a=typeof globalThis<"u"?globalThis:a||self,a.Manipulator=l())})(ln,(function(){"use strict";function a(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function l(p){return p.replace(/[A-Z]/g,m=>`-${m.toLowerCase()}`)}return{setDataAttribute(p,m,T){p.setAttribute(`data-bs-${l(m)}`,T)},removeDataAttribute(p,m){p.removeAttribute(`data-bs-${l(m)}`)},getDataAttributes(p){if(!p)return{};let m={},T=Object.keys(p.dataset).filter(O=>O.startsWith("bs")&&!O.startsWith("bsConfig"));for(let O of T){let D=O.replace(/^bs/,"");D=D.charAt(0).toLowerCase()+D.slice(1),m[D]=a(p.dataset[O])}return m},getDataAttribute(p,m){return a(p.getAttribute(`data-bs-${l(m)}`))}}}))});var zr=pe((pn,hn)=>{(function(a,l){typeof pn=="object"&&typeof hn<"u"?hn.exports=l(Wr(),ze()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],l):(a=typeof globalThis<"u"?globalThis:a||self,a.Config=l(a.Manipulator,a.Index))})(pn,(function(a,l){"use strict";class c{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(m){return m=this._mergeConfigObj(m),m=this._configAfterMerge(m),this._typeCheckConfig(m),m}_configAfterMerge(m){return m}_mergeConfigObj(m,T){let O=l.isElement(T)?a.getDataAttribute(T,"config"):{};return{...this.constructor.Default,...typeof O=="object"?O:{},...l.isElement(T)?a.getDataAttributes(T):{},...typeof m=="object"?m:{}}}_typeCheckConfig(m,T=this.constructor.DefaultType){for(let[O,D]of Object.entries(T)){let I=m[O],z=l.isElement(I)?"element":l.toType(I);if(!new RegExp(D).test(z))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${O}" provided type "${z}" but expected type "${D}".`)}}}return c}))});var Gr=pe((_n,gn)=>{(function(a,l){typeof _n=="object"&&typeof gn<"u"?gn.exports=l(Vr(),cn(),zr(),ze()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],l):(a=typeof globalThis<"u"?globalThis:a||self,a.BaseComponent=l(a.Data,a.EventHandler,a.Config,a.Index))})(_n,(function(a,l,c,p){"use strict";let m="5.3.8";class T extends c{constructor(D,I){super(),D=p.getElement(D),D&&(this._element=D,this._config=this._getConfig(I),a.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(let D of Object.getOwnPropertyNames(this))this[D]=null}_queueCallback(D,I,z=!0){p.executeAfterTransition(D,I,z)}_getConfig(D){return D=this._mergeConfigObj(D,this._element),D=this._configAfterMerge(D),this._typeCheckConfig(D),D}static getInstance(D){return a.get(p.getElement(D),this.DATA_KEY)}static getOrCreateInstance(D,I={}){return this.getInstance(D)||new this(D,typeof I=="object"?I:null)}static get VERSION(){return m}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(D){return`${D}${this.EVENT_KEY}`}}return T}))});var Ur=pe((mn,yn)=>{(function(a,l){typeof mn=="object"&&typeof yn<"u"?yn.exports=l(ze()):typeof define=="function"&&define.amd?define(["../util/index"],l):(a=typeof globalThis<"u"?globalThis:a||self,a.SelectorEngine=l(a.Index))})(mn,(function(a){"use strict";let l=p=>{let m=p.getAttribute("data-bs-target");if(!m||m==="#"){let T=p.getAttribute("href");if(!T||!T.includes("#")&&!T.startsWith("."))return null;T.includes("#")&&!T.startsWith("#")&&(T=`#${T.split("#")[1]}`),m=T&&T!=="#"?T.trim():null}return m?m.split(",").map(T=>a.parseSelector(T)).join(","):null},c={find(p,m=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(m,p))},findOne(p,m=document.documentElement){return Element.prototype.querySelector.call(m,p)},children(p,m){return[].concat(...p.children).filter(T=>T.matches(m))},parents(p,m){let T=[],O=p.parentNode.closest(m);for(;O;)T.push(O),O=O.parentNode.closest(m);return T},prev(p,m){let T=p.previousElementSibling;for(;T;){if(T.matches(m))return[T];T=T.previousElementSibling}return[]},next(p,m){let T=p.nextElementSibling;for(;T;){if(T.matches(m))return[T];T=T.nextElementSibling}return[]},focusableChildren(p){let m=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(T=>`${T}:not([tabindex^="-"])`).join(",");return this.find(m,p).filter(T=>!a.isDisabled(T)&&a.isVisible(T))},getSelectorFromElement(p){let m=l(p);return m&&c.findOne(m)?m:null},getElementFromSelector(p){let m=l(p);return m?c.findOne(m):null},getMultipleElementsFromSelector(p){let m=l(p);return m?c.find(m):[]}};return c}))});var Yr=pe((vn,bn)=>{(function(a,l){typeof vn=="object"&&typeof bn<"u"?bn.exports=l(Gr(),cn(),Ur(),ze()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],l):(a=typeof globalThis<"u"?globalThis:a||self,a.Tab=l(a.BaseComponent,a.EventHandler,a.SelectorEngine,a.Index))})(vn,(function(a,l,c,p){"use strict";let O=".bs.tab",D=`hide${O}`,I=`hidden${O}`,z=`show${O}`,i=`shown${O}`,f=`click${O}`,h=`keydown${O}`,v=`load${O}`,k="ArrowLeft",S="ArrowRight",x="ArrowUp",L="ArrowDown",B="Home",$="End",P="active",q="fade",o="show",j="dropdown",E=".dropdown-toggle",M=".dropdown-menu",H=`:not(${E})`,X='.list-group, .nav, [role="tablist"]',Q=".nav-item, .list-group-item",U=`.nav-link${H}, .list-group-item${H}, [role="tab"]${H}`,te='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',se=`${U}, ${te}`,ae=`.${P}[data-bs-toggle="tab"], .${P}[data-bs-toggle="pill"], .${P}[data-bs-toggle="list"]`;class re extends a{constructor(N){super(N),this._parent=this._element.closest(X),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),l.on(this._element,h,G=>this._keydown(G)))}static get NAME(){return"tab"}show(){let N=this._element;if(this._elemIsActive(N))return;let G=this._getActiveElem(),Z=G?l.trigger(G,D,{relatedTarget:N}):null;l.trigger(N,z,{relatedTarget:G}).defaultPrevented||Z&&Z.defaultPrevented||(this._deactivate(G,N),this._activate(N,G))}_activate(N,G){if(!N)return;N.classList.add(P),this._activate(c.getElementFromSelector(N));let Z=()=>{if(N.getAttribute("role")!=="tab"){N.classList.add(o);return}N.removeAttribute("tabindex"),N.setAttribute("aria-selected",!0),this._toggleDropDown(N,!0),l.trigger(N,i,{relatedTarget:G})};this._queueCallback(Z,N,N.classList.contains(q))}_deactivate(N,G){if(!N)return;N.classList.remove(P),N.blur(),this._deactivate(c.getElementFromSelector(N));let Z=()=>{if(N.getAttribute("role")!=="tab"){N.classList.remove(o);return}N.setAttribute("aria-selected",!1),N.setAttribute("tabindex","-1"),this._toggleDropDown(N,!1),l.trigger(N,I,{relatedTarget:G})};this._queueCallback(Z,N,N.classList.contains(q))}_keydown(N){if(![k,S,x,L,B,$].includes(N.key))return;N.stopPropagation(),N.preventDefault();let G=this._getChildren().filter(me=>!p.isDisabled(me)),Z;if([B,$].includes(N.key))Z=G[N.key===B?0:G.length-1];else{let me=[S,L].includes(N.key);Z=p.getNextActiveElement(G,N.target,me,!0)}Z&&(Z.focus({preventScroll:!0}),re.getOrCreateInstance(Z).show())}_getChildren(){return c.find(se,this._parent)}_getActiveElem(){return this._getChildren().find(N=>this._elemIsActive(N))||null}_setInitialAttributes(N,G){this._setAttributeIfNotExists(N,"role","tablist");for(let Z of G)this._setInitialAttributesOnChild(Z)}_setInitialAttributesOnChild(N){N=this._getInnerElement(N);let G=this._elemIsActive(N),Z=this._getOuterElement(N);N.setAttribute("aria-selected",G),Z!==N&&this._setAttributeIfNotExists(Z,"role","presentation"),G||N.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(N,"role","tab"),this._setInitialAttributesOnTargetPanel(N)}_setInitialAttributesOnTargetPanel(N){let G=c.getElementFromSelector(N);G&&(this._setAttributeIfNotExists(G,"role","tabpanel"),N.id&&this._setAttributeIfNotExists(G,"aria-labelledby",`${N.id}`))}_toggleDropDown(N,G){let Z=this._getOuterElement(N);if(!Z.classList.contains(j))return;let me=(Ge,Ct)=>{let rt=c.findOne(Ge,Z);rt&&rt.classList.toggle(Ct,G)};me(E,P),me(M,o),Z.setAttribute("aria-expanded",G)}_setAttributeIfNotExists(N,G,Z){N.hasAttribute(G)||N.setAttribute(G,Z)}_elemIsActive(N){return N.classList.contains(P)}_getInnerElement(N){return N.matches(se)?N:c.findOne(se,N)}_getOuterElement(N){return N.closest(Q)||N}static jQueryInterface(N){return this.each(function(){let G=re.getOrCreateInstance(this);if(typeof N=="string"){if(G[N]===void 0||N.startsWith("_")||N==="constructor")throw new TypeError(`No method named "${N}"`);G[N]()}})}}return l.on(document,f,te,function(De){["A","AREA"].includes(this.tagName)&&De.preventDefault(),!p.isDisabled(this)&&re.getOrCreateInstance(this).show()}),l.on(window,v,()=>{for(let De of c.find(ae))re.getOrCreateInstance(De)}),p.defineJQueryPlugin(re),re}))});var Kr=pe((wn,Qr)=>{function Wo(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function Xr(a,l){for(var c=0;c<l.length;c++){var p=l[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(a,p.key,p)}}function zo(a,l,c){return l&&Xr(a.prototype,l),c&&Xr(a,c),a}var Go=(function(){function a(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Wo(this,a),this.selector=l,this.elements=[],this.version="1.3.0",this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options={wrap:c.wrap||!1,wrapWith:c.wrapWith||"<span></span>",marginTop:c.marginTop||0,marginBottom:c.marginBottom||0,stickyFor:c.stickyFor||0,stickyClass:c.stickyClass||null,stickyContainer:c.stickyContainer||"body"},this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}return zo(a,[{key:"run",value:function(){var c=this,p=setInterval(function(){if(document.readyState==="complete"){clearInterval(p);var m=document.querySelectorAll(c.selector);c.forEach(m,function(T){return c.renderElement(T)})}},10)}},{key:"renderElement",value:function(c){var p=this;c.sticky={},c.sticky.active=!1,c.sticky.marginTop=parseInt(c.getAttribute("data-margin-top"))||this.options.marginTop,c.sticky.marginBottom=parseInt(c.getAttribute("data-margin-bottom"))||this.options.marginBottom,c.sticky.stickyFor=parseInt(c.getAttribute("data-sticky-for"))||this.options.stickyFor,c.sticky.stickyClass=c.getAttribute("data-sticky-class")||this.options.stickyClass,c.sticky.wrap=c.hasAttribute("data-sticky-wrap")?!0:this.options.wrap,c.sticky.stickyContainer=this.options.stickyContainer,c.sticky.container=this.getStickyContainer(c),c.sticky.container.rect=this.getRectangle(c.sticky.container),c.sticky.rect=this.getRectangle(c),c.tagName.toLowerCase()==="img"&&(c.onload=function(){return c.sticky.rect=p.getRectangle(c)}),c.sticky.wrap&&this.wrapElement(c),this.activate(c)}},{key:"wrapElement",value:function(c){c.insertAdjacentHTML("beforebegin",c.getAttribute("data-sticky-wrapWith")||this.options.wrapWith),c.previousSibling.appendChild(c)}},{key:"activate",value:function(c){c.sticky.rect.top+c.sticky.rect.height<c.sticky.container.rect.top+c.sticky.container.rect.height&&c.sticky.stickyFor<this.vp.width&&!c.sticky.active&&(c.sticky.active=!0),this.elements.indexOf(c)<0&&this.elements.push(c),c.sticky.resizeEvent||(this.initResizeEvents(c),c.sticky.resizeEvent=!0),c.sticky.scrollEvent||(this.initScrollEvents(c),c.sticky.scrollEvent=!0),this.setPosition(c)}},{key:"initResizeEvents",value:function(c){var p=this;c.sticky.resizeListener=function(){return p.onResizeEvents(c)},window.addEventListener("resize",c.sticky.resizeListener)}},{key:"destroyResizeEvents",value:function(c){window.removeEventListener("resize",c.sticky.resizeListener)}},{key:"onResizeEvents",value:function(c){this.vp=this.getViewportSize(),c.sticky.rect=this.getRectangle(c),c.sticky.container.rect=this.getRectangle(c.sticky.container),c.sticky.rect.top+c.sticky.rect.height<c.sticky.container.rect.top+c.sticky.container.rect.height&&c.sticky.stickyFor<this.vp.width&&!c.sticky.active?c.sticky.active=!0:(c.sticky.rect.top+c.sticky.rect.height>=c.sticky.container.rect.top+c.sticky.container.rect.height||c.sticky.stickyFor>=this.vp.width&&c.sticky.active)&&(c.sticky.active=!1),this.setPosition(c)}},{key:"initScrollEvents",value:function(c){var p=this;c.sticky.scrollListener=function(){return p.onScrollEvents(c)},window.addEventListener("scroll",c.sticky.scrollListener)}},{key:"destroyScrollEvents",value:function(c){window.removeEventListener("scroll",c.sticky.scrollListener)}},{key:"onScrollEvents",value:function(c){c.sticky&&c.sticky.active&&this.setPosition(c)}},{key:"setPosition",value:function(c){this.css(c,{position:"",width:"",top:"",left:""}),!(this.vp.height<c.sticky.rect.height||!c.sticky.active)&&(c.sticky.rect.width||(c.sticky.rect=this.getRectangle(c)),c.sticky.wrap&&this.css(c.parentNode,{display:"block",width:c.sticky.rect.width+"px",height:c.sticky.rect.height+"px"}),c.sticky.rect.top===0&&c.sticky.container===this.body?(this.css(c,{position:"fixed",top:c.sticky.rect.top+"px",left:c.sticky.rect.left+"px",width:c.sticky.rect.width+"px"}),c.sticky.stickyClass&&c.classList.add(c.sticky.stickyClass)):this.scrollTop>c.sticky.rect.top-c.sticky.marginTop?(this.css(c,{position:"fixed",width:c.sticky.rect.width+"px",left:c.sticky.rect.left+"px"}),this.scrollTop+c.sticky.rect.height+c.sticky.marginTop>c.sticky.container.rect.top+c.sticky.container.offsetHeight-c.sticky.marginBottom?(c.sticky.stickyClass&&c.classList.remove(c.sticky.stickyClass),this.css(c,{top:c.sticky.container.rect.top+c.sticky.container.offsetHeight-(this.scrollTop+c.sticky.rect.height+c.sticky.marginBottom)+"px"})):(c.sticky.stickyClass&&c.classList.add(c.sticky.stickyClass),this.css(c,{top:c.sticky.marginTop+"px"}))):(c.sticky.stickyClass&&c.classList.remove(c.sticky.stickyClass),this.css(c,{position:"",width:"",top:"",left:""}),c.sticky.wrap&&this.css(c.parentNode,{display:"",width:"",height:""})))}},{key:"update",value:function(){var c=this;this.forEach(this.elements,function(p){p.sticky.rect=c.getRectangle(p),p.sticky.container.rect=c.getRectangle(p.sticky.container),c.activate(p),c.setPosition(p)})}},{key:"destroy",value:function(){var c=this;window.removeEventListener("load",this.updateScrollTopPosition),window.removeEventListener("scroll",this.updateScrollTopPosition),this.forEach(this.elements,function(p){c.destroyResizeEvents(p),c.destroyScrollEvents(p),delete p.sticky})}},{key:"getStickyContainer",value:function(c){for(var p=c.parentNode;!p.hasAttribute("data-sticky-container")&&!p.parentNode.querySelector(c.sticky.stickyContainer)&&p!==this.body;)p=p.parentNode;return p}},{key:"getRectangle",value:function(c){this.css(c,{position:"",width:"",top:"",left:""});var p=Math.max(c.offsetWidth,c.clientWidth,c.scrollWidth),m=Math.max(c.offsetHeight,c.clientHeight,c.scrollHeight),T=0,O=0;do T+=c.offsetTop||0,O+=c.offsetLeft||0,c=c.offsetParent;while(c);return{top:T,left:O,width:p,height:m}}},{key:"getViewportSize",value:function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}},{key:"updateScrollTopPosition",value:function(){this.scrollTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0)||0}},{key:"forEach",value:function(c,p){for(var m=0,T=c.length;m<T;m++)p(c[m])}},{key:"css",value:function(c,p){for(var m in p)p.hasOwnProperty(m)&&(c.style[m]=p[m])}}]),a})();(function(a,l){typeof wn<"u"?Qr.exports=l:typeof define=="function"&&define.amd?define([],function(){return l}):a.Sticky=l})(wn,Go)});var Jr=pe((ss,Zr)=>{var Uo=Kr();Zr.exports=Uo});function vo(a,l){if(typeof a>"u"||!a.document)throw new Error("jQuery requires a window with a document");var c=[],p=Object.getPrototypeOf,m=c.slice,T=c.flat?function(e){return c.flat.call(e)}:function(e){return c.concat.apply([],e)},O=c.push,D=c.indexOf,I={},z=I.toString,i=I.hasOwnProperty,f=i.toString,h=f.call(Object),v={};function k(e){return e==null?e+"":typeof e=="object"?I[z.call(e)]||"object":typeof e}function S(e){return e!=null&&e===e.window}function x(e){var t=!!e&&e.length,n=k(e);return typeof e=="function"||S(e)?!1:n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}var L=a.document,B={type:!0,src:!0,nonce:!0,noModule:!0};function $(e,t,n){n=n||L;var r,s=n.createElement("script");s.text=e;for(r in B)t&&t[r]&&(s[r]=t[r]);n.head.appendChild(s).parentNode&&s.parentNode.removeChild(s)}var P="4.0.0",q=/HTML$/i,o=function(e,t){return new o.fn.init(e,t)};o.fn=o.prototype={jquery:P,constructor:o,length:0,toArray:function(){return m.call(this)},get:function(e){return e==null?m.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=o.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return o.each(this,e)},map:function(e){return this.pushStack(o.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(m.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(o.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(o.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()}},o.extend=o.fn.extend=function(){var e,t,n,r,s,u,d=arguments[0]||{},g=1,_=arguments.length,y=!1;for(typeof d=="boolean"&&(y=d,d=arguments[g]||{},g++),typeof d!="object"&&typeof d!="function"&&(d={}),g===_&&(d=this,g--);g<_;g++)if((e=arguments[g])!=null)for(t in e)r=e[t],!(t==="__proto__"||d===r)&&(y&&r&&(o.isPlainObject(r)||(s=Array.isArray(r)))?(n=d[t],s&&!Array.isArray(n)?u=[]:!s&&!o.isPlainObject(n)?u={}:u=n,s=!1,d[t]=o.extend(y,u,r)):r!==void 0&&(d[t]=r));return d},o.extend({expando:"jQuery"+(P+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!e||z.call(e)!=="[object Object]"?!1:(t=p(e),t?(n=i.call(t,"constructor")&&t.constructor,typeof n=="function"&&f.call(n)===h):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){$(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(x(e))for(n=e.length;r<n&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},text:function(e){var t,n="",r=0,s=e.nodeType;if(!s)for(;t=e[r++];)n+=o.text(t);return s===1||s===11?e.textContent:s===9?e.documentElement.textContent:s===3||s===4?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return e!=null&&(x(Object(e))?o.merge(n,typeof e=="string"?[e]:e):O.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:D.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!q.test(t||n&&n.nodeName||"HTML")},contains:function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&n.nodeType===1&&(e.contains?e.contains(n):e.compareDocumentPosition&&e.compareDocumentPosition(n)&16))},merge:function(e,t){for(var n=+t.length,r=0,s=e.length;r<n;r++)e[s++]=t[r];return e.length=s,e},grep:function(e,t,n){for(var r,s=[],u=0,d=e.length,g=!n;u<d;u++)r=!t(e[u],u),r!==g&&s.push(e[u]);return s},map:function(e,t,n){var r,s,u=0,d=[];if(x(e))for(r=e.length;u<r;u++)s=t(e[u],u,n),s!=null&&d.push(s);else for(u in e)s=t(e[u],u,n),s!=null&&d.push(s);return T(d)},guid:1,support:v}),typeof Symbol=="function"&&(o.fn[Symbol.iterator]=c[Symbol.iterator]),o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){I["[object "+t+"]"]=t.toLowerCase()});function j(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var E=c.pop,M="[\\x20\\t\\r\\n\\f]",H=L.documentMode,X=H&&new RegExp(":enabled|:disabled|\\["+M+"*name"+M+"*="+M+`*(?:''|"")`),Q=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),U="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",te=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),se=new RegExp(M+"|>"),ae=/[+~]/,re=L.documentElement,De=re.matches||re.msMatchesSelector;function N(){var e=[];function t(n,r){return e.push(n+" ")>o.expr.cacheLength&&delete t[e.shift()],t[n+" "]=r}return t}function G(e){return e&&typeof e.getElementsByTagName<"u"&&e}var Z="\\["+M+"*("+U+")(?:"+M+"*([*^$|!~]?=)"+M+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+U+"))|)"+M+"*\\]",me=":("+U+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Z+")*)|.*)\\)|)",Ge={ID:new RegExp("^#("+U+")"),CLASS:new RegExp("^\\.("+U+")"),TAG:new RegExp("^("+U+"|[*])"),ATTR:new RegExp("^"+Z),PSEUDO:new RegExp("^"+me),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i")},Ct=new RegExp(me),rt=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ei=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320))};function ke(e){return e.replace(rt,ei)}function Ue(e){o.error("Syntax error, unrecognized expression: "+e)}var ti=new RegExp("^"+M+"*,"+M+"*"),Tn=N();function Ye(e,t){var n,r,s,u,d,g,_,y=Tn[e+" "];if(y)return t?0:y.slice(0);for(d=e,g=[],_=o.expr.preFilter;d;){(!n||(r=ti.exec(d)))&&(r&&(d=d.slice(r[0].length)||d),g.push(s=[])),n=!1,(r=te.exec(d))&&(n=r.shift(),s.push({value:n,type:r[0].replace(Q," ")}),d=d.slice(n.length));for(u in Ge)(r=o.expr.match[u].exec(d))&&(!_[u]||(r=_[u](r)))&&(n=r.shift(),s.push({value:n,type:u,matches:r}),d=d.slice(n.length));if(!n)break}return t?d.length:d?Ue(e):Tn(e,g).slice(0)}var ni={ATTR:function(e){return e[1]=ke(e[1]),e[3]=ke(e[3]||e[4]||e[5]||""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||Ue(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&Ue(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Ge.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Ct.test(n)&&(t=Ye(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}};function it(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function we(e,t,n,r,s,u,d){var g=0,_=e.length,y=n==null;if(k(n)==="object"){s=!0;for(g in n)we(e,t,g,n[g],!0,u,d)}else if(r!==void 0&&(s=!0,typeof r!="function"&&(d=!0),y&&(d?(t.call(e,r),t=null):(y=t,t=function(w,C,b){return y.call(o(w),b)})),t))for(;g<_;g++)t(e[g],n,d?r:r.call(e[g],g,t(e[g],n)));return s?e:y?t.call(e):_?t(e[0],n):u}var ye=/[^\x20\t\r\n\f]+/g;o.fn.extend({attr:function(e,t){return we(this,o.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){o.removeAttr(this,e)})}}),o.extend({attr:function(e,t,n){var r,s,u=e.nodeType;if(!(u===3||u===8||u===2)){if(typeof e.getAttribute>"u")return o.prop(e,t,n);if((u!==1||!o.isXMLDoc(e))&&(s=o.attrHooks[t.toLowerCase()]),n!==void 0){if(n===null||n===!1&&t.toLowerCase().indexOf("aria-")!==0){o.removeAttr(e,t);return}return s&&"set"in s&&(r=s.set(e,n,t))!==void 0?r:(e.setAttribute(t,n),n)}return s&&"get"in s&&(r=s.get(e,t))!==null?r:(r=e.getAttribute(t),r??void 0)}},attrHooks:{},removeAttr:function(e,t){var n,r=0,s=t&&t.match(ye);if(s&&e.nodeType===1)for(;n=s[r++];)e.removeAttribute(n)}}),H&&(o.attrHooks.type={set:function(e,t){if(t==="radio"&&j(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}});var ri=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ii(e,t){return t?e==="\0"?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}o.escapeSelector=function(e){return(e+"").replace(ri,ii)};var oi=c.sort,ai=c.splice,Et;function si(e,t){if(e===t)return Et=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1,n&1?e==L||e.ownerDocument==L&&o.contains(L,e)?-1:t==L||t.ownerDocument==L&&o.contains(L,t)?1:0:n&4?-1:1)}o.uniqueSort=function(e){var t,n=[],r=0,s=0;if(Et=!1,oi.call(e,si),Et){for(;t=e[s++];)t===e[s]&&(r=n.push(s));for(;r--;)ai.call(e,n[r],1)}return e},o.fn.uniqueSort=function(){return this.pushStack(o.uniqueSort(m.apply(this)))};var Ne,ot,le,An,xe,Te=0,ui=0,kn=N(),Cn=N(),at=N(),fi=new RegExp(M+"+","g"),ci=new RegExp("^"+U+"$"),En=o.extend({needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Ge),li=/^(?:input|select|textarea|button)$/i,di=/^h\d$/i,pi=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,hi=function(){Me()},_i=st(function(e){return e.disabled===!0&&j(e,"fieldset")},{dir:"parentNode",next:"legend"});function _e(e,t,n,r){var s,u,d,g,_,y,w,C=t&&t.ownerDocument,b=t?t.nodeType:9;if(n=n||[],typeof e!="string"||!e||b!==1&&b!==9&&b!==11)return n;if(!r&&(Me(t),t=t||le,xe)){if(b!==11&&(_=pi.exec(e)))if(s=_[1]){if(b===9)return(d=t.getElementById(s))&&O.call(n,d),n;if(C&&(d=C.getElementById(s))&&o.contains(t,d))return O.call(n,d),n}else{if(_[2])return O.apply(n,t.getElementsByTagName(e)),n;if((s=_[3])&&t.getElementsByClassName)return O.apply(n,t.getElementsByClassName(s)),n}if(!at[e+" "]&&(!X||!X.test(e))){if(w=e,C=t,b===1&&(se.test(e)||te.test(e))){for(C=ae.test(e)&&G(t.parentNode)||t,(C!=t||H)&&((g=t.getAttribute("id"))?g=o.escapeSelector(g):t.setAttribute("id",g=o.expando)),y=Ye(e),u=y.length;u--;)y[u]=(g?"#"+g:":scope")+" "+it(y[u]);w=y.join(",")}try{return O.apply(n,C.querySelectorAll(w)),n}catch{at(e,!0)}finally{g===o.expando&&t.removeAttribute("id")}}}return On(e.replace(Q,"$1"),t,n,r)}function ve(e){return e[o.expando]=!0,e}function gi(e){return function(t){return j(t,"input")&&t.type===e}}function mi(e){return function(t){return(j(t,"input")||j(t,"button"))&&t.type===e}}function Sn(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&_i(t)===e:t.disabled===e:"label"in t?t.disabled===e:!1}}function Oe(e){return ve(function(t){return t=+t,ve(function(n,r){for(var s,u=e([],n.length,t),d=u.length;d--;)n[s=u[d]]&&(n[s]=!(r[s]=n[s]))})})}function Me(e){var t,n=e?e.ownerDocument||e:L;n==le||n.nodeType!==9||(le=n,An=le.documentElement,xe=!o.isXMLDoc(le),H&&L!=le&&(t=le.defaultView)&&t.top!==t&&t.addEventListener("unload",hi))}_e.matches=function(e,t){return _e(e,null,null,t)},_e.matchesSelector=function(e,t){if(Me(e),xe&&!at[t+" "]&&(!X||!X.test(t)))try{return De.call(e,t)}catch{at(t,!0)}return _e(t,le,null,[e]).length>0},o.expr={cacheLength:50,createPseudo:ve,match:En,find:{ID:function(e,t){if(typeof t.getElementById<"u"&&xe){var n=t.getElementById(e);return n?[n]:[]}},TAG:function(e,t){return typeof t.getElementsByTagName<"u"?t.getElementsByTagName(e):t.querySelectorAll(e)},CLASS:function(e,t){if(typeof t.getElementsByClassName<"u"&&xe)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:ni,filter:{ID:function(e){var t=ke(e);return function(n){return n.getAttribute("id")===t}},TAG:function(e){var t=ke(e).toLowerCase();return e==="*"?function(){return!0}:function(n){return j(n,t)}},CLASS:function(e){var t=kn[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&kn(e,function(n){return t.test(typeof n.className=="string"&&n.className||typeof n.getAttribute<"u"&&n.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var s=o.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.slice(-n.length)===n:t==="~="?(" "+s.replace(fi," ")+" ").indexOf(n)>-1:t==="|="?s===n||s.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,s){var u=e.slice(0,3)!=="nth",d=e.slice(-4)!=="last",g=t==="of-type";return r===1&&s===0?function(_){return!!_.parentNode}:function(_,y,w){var C,b,A,R,V,F=u!==d?"nextSibling":"previousSibling",ee=_.parentNode,J=g&&_.nodeName.toLowerCase(),ce=!w&&!g,ie=!1;if(ee){if(u){for(;F;){for(A=_;A=A[F];)if(g?j(A,J):A.nodeType===1)return!1;V=F=e==="only"&&!V&&"nextSibling"}return!0}if(V=[d?ee.firstChild:ee.lastChild],d&&ce){for(b=ee[o.expando]||(ee[o.expando]={}),C=b[e]||[],R=C[0]===Te&&C[1],ie=R&&C[2],A=R&&ee.childNodes[R];A=++R&&A&&A[F]||(ie=R=0)||V.pop();)if(A.nodeType===1&&++ie&&A===_){b[e]=[Te,R,ie];break}}else if(ce&&(b=_[o.expando]||(_[o.expando]={}),C=b[e]||[],R=C[0]===Te&&C[1],ie=R),ie===!1)for(;(A=++R&&A&&A[F]||(ie=R=0)||V.pop())&&!((g?j(A,J):A.nodeType===1)&&++ie&&(ce&&(b=A[o.expando]||(A[o.expando]={}),b[e]=[Te,ie]),A===_)););return ie-=s,ie===r||ie%r===0&&ie/r>=0}}},PSEUDO:function(e,t){var n=o.expr.pseudos[e]||o.expr.setFilters[e.toLowerCase()]||Ue("unsupported pseudo: "+e);return n[o.expando]?n(t):n}},pseudos:{not:ve(function(e){var t=[],n=[],r=Lt(e.replace(Q,"$1"));return r[o.expando]?ve(function(s,u,d,g){for(var _,y=r(s,null,g,[]),w=s.length;w--;)(_=y[w])&&(s[w]=!(u[w]=_))}):function(s,u,d){return t[0]=s,r(t,null,d,n),t[0]=null,!n.pop()}}),has:ve(function(e){return function(t){return _e(e,t).length>0}}),contains:ve(function(e){return e=ke(e),function(t){return(t.textContent||o.text(t)).indexOf(e)>-1}}),lang:ve(function(e){return ci.test(e||"")||Ue("unsupported lang: "+e),e=ke(e).toLowerCase(),function(t){var n;do if(n=xe?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(e){var t=a.location&&a.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===An},focus:function(e){return e===le.activeElement&&le.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:Sn(!1),disabled:Sn(!0),checked:function(e){return j(e,"input")&&!!e.checked||j(e,"option")&&!!e.selected},selected:function(e){return H&&e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!o.expr.pseudos.empty(e)},header:function(e){return di.test(e.nodeName)},input:function(e){return li.test(e.nodeName)},button:function(e){return j(e,"input")&&e.type==="button"||j(e,"button")},text:function(e){return j(e,"input")&&e.type==="text"},first:Oe(function(){return[0]}),last:Oe(function(e,t){return[t-1]}),eq:Oe(function(e,t,n){return[n<0?n+t:n]}),even:Oe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:Oe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:Oe(function(e,t,n){var r;for(n<0?r=n+t:n>t?r=t:r=n;--r>=0;)e.push(r);return e}),gt:Oe(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},o.expr.pseudos.nth=o.expr.pseudos.eq;for(Ne in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.expr.pseudos[Ne]=gi(Ne);for(Ne in{submit:!0,reset:!0})o.expr.pseudos[Ne]=mi(Ne);function Dn(){}Dn.prototype=o.expr.pseudos,o.expr.setFilters=new Dn;function st(e,t,n){var r=t.dir,s=t.next,u=s||r,d=n&&u==="parentNode",g=ui++;return t.first?function(_,y,w){for(;_=_[r];)if(_.nodeType===1||d)return e(_,y,w);return!1}:function(_,y,w){var C,b,A=[Te,g];if(w){for(;_=_[r];)if((_.nodeType===1||d)&&e(_,y,w))return!0}else for(;_=_[r];)if(_.nodeType===1||d)if(b=_[o.expando]||(_[o.expando]={}),s&&j(_,s))_=_[r]||_;else{if((C=b[u])&&C[0]===Te&&C[1]===g)return A[2]=C[2];if(b[u]=A,A[2]=e(_,y,w))return!0}return!1}}function St(e){return e.length>1?function(t,n,r){for(var s=e.length;s--;)if(!e[s](t,n,r))return!1;return!0}:e[0]}function yi(e,t,n){for(var r=0,s=t.length;r<s;r++)_e(e,t[r],n);return n}function ut(e,t,n,r,s){for(var u,d=[],g=0,_=e.length,y=t!=null;g<_;g++)(u=e[g])&&(!n||n(u,r,s))&&(d.push(u),y&&t.push(g));return d}function Dt(e,t,n,r,s,u){return r&&!r[o.expando]&&(r=Dt(r)),s&&!s[o.expando]&&(s=Dt(s,u)),ve(function(d,g,_,y){var w,C,b,A,R=[],V=[],F=g.length,ee=d||yi(t||"*",_.nodeType?[_]:_,[]),J=e&&(d||!t)?ut(ee,R,e,_,y):ee;if(n?(A=s||(d?e:F||r)?[]:g,n(J,A,_,y)):A=J,r)for(w=ut(A,V),r(w,[],_,y),C=w.length;C--;)(b=w[C])&&(A[V[C]]=!(J[V[C]]=b));if(d){if(s||e){if(s){for(w=[],C=A.length;C--;)(b=A[C])&&w.push(J[C]=b);s(null,A=[],w,y)}for(C=A.length;C--;)(b=A[C])&&(w=s?D.call(d,b):R[C])>-1&&(d[w]=!(g[w]=b))}}else A=ut(A===g?A.splice(F,A.length):A),s?s(null,g,A,y):O.apply(g,A)})}function Ot(e){for(var t,n,r,s=e.length,u=o.expr.relative[e[0].type],d=u||o.expr.relative[" "],g=u?1:0,_=st(function(C){return C===t},d,!0),y=st(function(C){return D.call(t,C)>-1},d,!0),w=[function(C,b,A){var R=!u&&(A||b!=ot)||((t=b).nodeType?_(C,b,A):y(C,b,A));return t=null,R}];g<s;g++)if(n=o.expr.relative[e[g].type])w=[st(St(w),n)];else{if(n=o.expr.filter[e[g].type].apply(null,e[g].matches),n[o.expando]){for(r=++g;r<s&&!o.expr.relative[e[r].type];r++);return Dt(g>1&&St(w),g>1&&it(e.slice(0,g-1).concat({value:e[g-2].type===" "?"*":""})).replace(Q,"$1"),n,g<r&&Ot(e.slice(g,r)),r<s&&Ot(e=e.slice(r)),r<s&&it(e))}w.push(n)}return St(w)}function vi(e,t){var n=t.length>0,r=e.length>0,s=function(u,d,g,_,y){var w,C,b,A=0,R="0",V=u&&[],F=[],ee=ot,J=u||r&&o.expr.find.TAG("*",y),ce=Te+=ee==null?1:Math.random()||.1;for(y&&(ot=d==le||d||y);(w=J[R])!=null;R++){if(r&&w){for(C=0,!d&&w.ownerDocument!=le&&(Me(w),g=!xe);b=e[C++];)if(b(w,d||le,g)){O.call(_,w);break}y&&(Te=ce)}n&&((w=!b&&w)&&A--,u&&V.push(w))}if(A+=R,n&&R!==A){for(C=0;b=t[C++];)b(V,F,d,g);if(u){if(A>0)for(;R--;)V[R]||F[R]||(F[R]=E.call(_));F=ut(F)}O.apply(_,F),y&&!u&&F.length>0&&A+t.length>1&&o.uniqueSort(_)}return y&&(Te=ce,ot=ee),V};return n?ve(s):s}function Lt(e,t){var n,r=[],s=[],u=Cn[e+" "];if(!u){for(t||(t=Ye(e)),n=t.length;n--;)u=Ot(t[n]),u[o.expando]?r.push(u):s.push(u);u=Cn(e,vi(s,r)),u.selector=e}return u}function On(e,t,n,r){var s,u,d,g,_,y=typeof e=="function"&&e,w=!r&&Ye(e=y.selector||e);if(n=n||[],w.length===1){if(u=w[0]=w[0].slice(0),u.length>2&&(d=u[0]).type==="ID"&&t.nodeType===9&&xe&&o.expr.relative[u[1].type]){if(t=(o.expr.find.ID(ke(d.matches[0]),t)||[])[0],t)y&&(t=t.parentNode);else return n;e=e.slice(u.shift().value.length)}for(s=En.needsContext.test(e)?0:u.length;s--&&(d=u[s],!o.expr.relative[g=d.type]);)if((_=o.expr.find[g])&&(r=_(ke(d.matches[0]),ae.test(u[0].type)&&G(t.parentNode)||t))){if(u.splice(s,1),e=r.length&&it(u),!e)return O.apply(n,r),n;break}}return(y||Lt(e,w))(r,t,!xe,n,!t||ae.test(e)&&G(t.parentNode)||t),n}Me(),o.find=_e,_e.compile=Lt,_e.select=On,_e.setDocument=Me,_e.tokenize=Ye;function He(e,t,n){for(var r=[],s=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(s&&o(e).is(n))break;r.push(e)}return r}function Ln(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}var In=o.expr.match.needsContext,Nn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Mn(e){return e[0]==="<"&&e[e.length-1]===">"&&e.length>=3}function It(e,t,n){return typeof t=="function"?o.grep(e,function(r,s){return!!t.call(r,s,r)!==n}):t.nodeType?o.grep(e,function(r){return r===t!==n}):typeof t!="string"?o.grep(e,function(r){return D.call(t,r)>-1!==n}):o.filter(t,e,n)}o.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?o.find.matchesSelector(r,e)?[r]:[]:o.find.matches(e,o.grep(t,function(s){return s.nodeType===1}))},o.fn.extend({find:function(e){var t,n,r=this.length,s=this;if(typeof e!="string")return this.pushStack(o(e).filter(function(){for(t=0;t<r;t++)if(o.contains(s[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)o.find(e,s[t],n);return r>1?o.uniqueSort(n):n},filter:function(e){return this.pushStack(It(this,e||[],!1))},not:function(e){return this.pushStack(It(this,e||[],!0))},is:function(e){return!!It(this,typeof e=="string"&&In.test(e)?o(e):e||[],!1).length}});var ft,bi=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,wi=o.fn.init=function(e,t){var n,r;if(!e)return this;if(e.nodeType)return this[0]=e,this.length=1,this;if(typeof e=="function")return ft.ready!==void 0?ft.ready(e):e(o);if(n=e+"",Mn(n))n=[null,e,null];else if(typeof e=="string")n=bi.exec(e);else return o.makeArray(e,this);if(n&&(n[1]||!t))if(n[1]){if(t=t instanceof o?t[0]:t,o.merge(this,o.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:L,!0)),Nn.test(n[1])&&o.isPlainObject(t))for(n in t)typeof this[n]=="function"?this[n](t[n]):this.attr(n,t[n]);return this}else return r=L.getElementById(n[2]),r&&(this[0]=r,this.length=1),this;else return!t||t.jquery?(t||ft).find(e):this.constructor(t).find(e)};wi.prototype=o.fn,ft=o(L);var xi=/^(?:parents|prev(?:Until|All))/,Ti={children:!0,contents:!0,next:!0,prev:!0};o.fn.extend({has:function(e){var t=o(e,this),n=t.length;return this.filter(function(){for(var r=0;r<n;r++)if(o.contains(this,t[r]))return!0})},closest:function(e,t){var n,r=0,s=this.length,u=[],d=typeof e!="string"&&o(e);if(!In.test(e)){for(;r<s;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(d?d.index(n)>-1:n.nodeType===1&&o.find.matchesSelector(n,e))){u.push(n);break}}return this.pushStack(u.length>1?o.uniqueSort(u):u)},index:function(e){return e?typeof e=="string"?D.call(o(e),this[0]):D.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(o.uniqueSort(o.merge(this.get(),o(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Hn(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}o.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return He(e,"parentNode")},parentsUntil:function(e,t,n){return He(e,"parentNode",n)},next:function(e){return Hn(e,"nextSibling")},prev:function(e){return Hn(e,"previousSibling")},nextAll:function(e){return He(e,"nextSibling")},prevAll:function(e){return He(e,"previousSibling")},nextUntil:function(e,t,n){return He(e,"nextSibling",n)},prevUntil:function(e,t,n){return He(e,"previousSibling",n)},siblings:function(e){return Ln((e.parentNode||{}).firstChild,e)},children:function(e){return Ln(e.firstChild)},contents:function(e){return e.contentDocument!=null&&p(e.contentDocument)?e.contentDocument:(j(e,"template")&&(e=e.content||e),o.merge([],e.childNodes))}},function(e,t){o.fn[e]=function(n,r){var s=o.map(this,t,n);return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(s=o.filter(r,s)),this.length>1&&(Ti[e]||o.uniqueSort(s),xi.test(e)&&s.reverse()),this.pushStack(s)}});function Ai(e){var t={};return o.each(e.match(ye)||[],function(n,r){t[r]=!0}),t}o.Callbacks=function(e){e=typeof e=="string"?Ai(e):o.extend({},e);var t,n,r,s,u=[],d=[],g=-1,_=function(){for(s=s||e.once,r=t=!0;d.length;g=-1)for(n=d.shift();++g<u.length;)u[g].apply(n[0],n[1])===!1&&e.stopOnFalse&&(g=u.length,n=!1);e.memory||(n=!1),t=!1,s&&(n?u=[]:u="")},y={add:function(){return u&&(n&&!t&&(g=u.length-1,d.push(n)),(function w(C){o.each(C,function(b,A){typeof A=="function"?(!e.unique||!y.has(A))&&u.push(A):A&&A.length&&k(A)!=="string"&&w(A)})})(arguments),n&&!t&&_()),this},remove:function(){return o.each(arguments,function(w,C){for(var b;(b=o.inArray(C,u,b))>-1;)u.splice(b,1),b<=g&&g--}),this},has:function(w){return w?o.inArray(w,u)>-1:u.length>0},empty:function(){return u&&(u=[]),this},disable:function(){return s=d=[],u=n="",this},disabled:function(){return!u},lock:function(){return s=d=[],!n&&!t&&(u=n=""),this},locked:function(){return!!s},fireWith:function(w,C){return s||(C=C||[],C=[w,C.slice?C.slice():C],d.push(C),t||_()),this},fire:function(){return y.fireWith(this,arguments),this},fired:function(){return!!r}};return y};function Pe(e){return e}function ct(e){throw e}function Pn(e,t,n,r){var s;try{e&&typeof(s=e.promise)=="function"?s.call(e).done(t).fail(n):e&&typeof(s=e.then)=="function"?s.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(u){n(u)}}o.extend({Deferred:function(e){var t=[["notify","progress",o.Callbacks("memory"),o.Callbacks("memory"),2],["resolve","done",o.Callbacks("once memory"),o.Callbacks("once memory"),0,"resolved"],["reject","fail",o.Callbacks("once memory"),o.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(u){return r.then(null,u)},pipe:function(){var u=arguments;return o.Deferred(function(d){o.each(t,function(g,_){var y=typeof u[_[4]]=="function"&&u[_[4]];s[_[1]](function(){var w=y&&y.apply(this,arguments);w&&typeof w.promise=="function"?w.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[_[0]+"With"](this,y?[w]:arguments)})}),u=null}).promise()},then:function(u,d,g){var _=0;function y(w,C,b,A){return function(){var R=this,V=arguments,F=function(){var J,ce;if(!(w<_)){if(J=b.apply(R,V),J===C.promise())throw new TypeError("Thenable self-resolution");ce=J&&(typeof J=="object"||typeof J=="function")&&J.then,typeof ce=="function"?A?ce.call(J,y(_,C,Pe,A),y(_,C,ct,A)):(_++,ce.call(J,y(_,C,Pe,A),y(_,C,ct,A),y(_,C,Pe,C.notifyWith))):(b!==Pe&&(R=void 0,V=[J]),(A||C.resolveWith)(R,V))}},ee=A?F:function(){try{F()}catch(J){o.Deferred.exceptionHook&&o.Deferred.exceptionHook(J,ee.error),w+1>=_&&(b!==ct&&(R=void 0,V=[J]),C.rejectWith(R,V))}};w?ee():(o.Deferred.getErrorHook&&(ee.error=o.Deferred.getErrorHook()),a.setTimeout(ee))}}return o.Deferred(function(w){t[0][3].add(y(0,w,typeof g=="function"?g:Pe,w.notifyWith)),t[1][3].add(y(0,w,typeof u=="function"?u:Pe)),t[2][3].add(y(0,w,typeof d=="function"?d:ct))}).promise()},promise:function(u){return u!=null?o.extend(u,r):r}},s={};return o.each(t,function(u,d){var g=d[2],_=d[5];r[d[1]]=g.add,_&&g.add(function(){n=_},t[3-u][2].disable,t[3-u][3].disable,t[0][2].lock,t[0][3].lock),g.add(d[3].fire),s[d[0]]=function(){return s[d[0]+"With"](this===s?void 0:this,arguments),this},s[d[0]+"With"]=g.fireWith}),r.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),s=m.call(arguments),u=o.Deferred(),d=function(g){return function(_){r[g]=this,s[g]=arguments.length>1?m.call(arguments):_,--t||u.resolveWith(r,s)}};if(t<=1&&(Pn(e,u.done(d(n)).resolve,u.reject,!t),u.state()==="pending"||typeof(s[n]&&s[n].then)=="function"))return u.then();for(;n--;)Pn(s[n],d(n),u.reject);return u.promise()}});var ki=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;o.Deferred.exceptionHook=function(e,t){e&&ki.test(e.name)&&a.console.warn("jQuery.Deferred exception",e,t)},o.readyException=function(e){a.setTimeout(function(){throw e})};var Nt=o.Deferred();o.fn.ready=function(e){return Nt.then(e).catch(function(t){o.readyException(t)}),this},o.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--o.readyWait:o.isReady)||(o.isReady=!0,!(e!==!0&&--o.readyWait>0)&&Nt.resolveWith(L,[o]))}}),o.ready.then=Nt.then;function lt(){L.removeEventListener("DOMContentLoaded",lt),a.removeEventListener("load",lt),o.ready()}L.readyState!=="loading"?a.setTimeout(o.ready):(L.addEventListener("DOMContentLoaded",lt),a.addEventListener("load",lt));var Ci=/-([a-z])/g;function Ei(e,t){return t.toUpperCase()}function Le(e){return e.replace(Ci,Ei)}function Xe(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType}function Qe(){this.expando=o.expando+Qe.uid++}Qe.uid=1,Qe.prototype={cache:function(e){var t=e[this.expando];return t||(t=Object.create(null),Xe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,s=this.cache(e);if(typeof t=="string")s[Le(t)]=n;else for(r in t)s[Le(r)]=t[r];return n},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Le(t)]},access:function(e,t,n){return t===void 0||t&&typeof t=="string"&&n===void 0?this.get(e,t):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,r=e[this.expando];if(r!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Le):(t=Le(t),t=t in r?[t]:t.match(ye)||[]),n=t.length;n--;)delete r[t[n]];(t===void 0||o.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!o.isEmptyObject(t)}};var W=new Qe,ue=new Qe,Si=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Di=/[A-Z]/g;function Oi(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Si.test(e)?JSON.parse(e):e}function jn(e,t,n){var r;if(n===void 0&&e.nodeType===1)if(r="data-"+t.replace(Di,"-$&").toLowerCase(),n=e.getAttribute(r),typeof n=="string"){try{n=Oi(n)}catch{}ue.set(e,t,n)}else n=void 0;return n}o.extend({hasData:function(e){return ue.hasData(e)||W.hasData(e)},data:function(e,t,n){return ue.access(e,t,n)},removeData:function(e,t){ue.remove(e,t)},_data:function(e,t,n){return W.access(e,t,n)},_removeData:function(e,t){W.remove(e,t)}}),o.fn.extend({data:function(e,t){var n,r,s,u=this[0],d=u&&u.attributes;if(e===void 0){if(this.length&&(s=ue.get(u),u.nodeType===1&&!W.get(u,"hasDataAttrs"))){for(n=d.length;n--;)d[n]&&(r=d[n].name,r.indexOf("data-")===0&&(r=Le(r.slice(5)),jn(u,r,s[r])));W.set(u,"hasDataAttrs",!0)}return s}return typeof e=="object"?this.each(function(){ue.set(this,e)}):we(this,function(g){var _;if(u&&g===void 0)return _=ue.get(u,e),_!==void 0||(_=jn(u,e),_!==void 0)?_:void 0;this.each(function(){ue.set(this,e,g)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ue.remove(this,e)})}}),o.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=W.get(e,t),n&&(!r||Array.isArray(n)?r=W.set(e,t,o.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=o.queue(e,t),r=n.length,s=n.shift(),u=o._queueHooks(e,t),d=function(){o.dequeue(e,t)};s==="inprogress"&&(s=n.shift(),r--),s&&(t==="fx"&&n.unshift("inprogress"),delete u.stop,s.call(e,d,u)),!r&&u&&u.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return W.get(e,n)||W.set(e,n,{empty:o.Callbacks("once memory").add(function(){W.remove(e,[t+"queue",n])})})}}),o.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?o.queue(this[0],e):t===void 0?this:this.each(function(){var r=o.queue(this,e,t);o._queueHooks(this,e),e==="fx"&&r[0]!=="inprogress"&&o.dequeue(this,e)})},dequeue:function(e){return this.each(function(){o.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,s=o.Deferred(),u=this,d=this.length,g=function(){--r||s.resolveWith(u,[u])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";d--;)n=W.get(u[d],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(g));return g(),s.promise(t)}});var Rn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ke=new RegExp("^(?:([+-])=|)("+Rn+")([a-z%]*)$","i"),Ce=["Top","Right","Bottom","Left"];function dt(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&o.css(e,"display")==="none"}var Li=/^[a-z]/,Ii=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function pt(e){return Li.test(e)&&Ii.test(e[0].toUpperCase()+e.slice(1))}function qn(e,t,n,r){var s,u,d=20,g=r?function(){return r.cur()}:function(){return o.css(e,t,"")},_=g(),y=n&&n[3]||(pt(t)?"px":""),w=e.nodeType&&(!pt(t)||y!=="px"&&+_)&&Ke.exec(o.css(e,t));if(w&&w[3]!==y){for(_=_/2,y=y||w[3],w=+_||1;d--;)o.style(e,t,w+y),(1-u)*(1-(u=g()/_||.5))<=0&&(d=0),w=w/u;w=w*2,o.style(e,t,w+y),n=n||[]}return n&&(w=+w||+_||0,s=n[1]?w+(n[1]+1)*n[2]:+n[2],r&&(r.unit=y,r.start=w,r.end=s)),s}var Ni=/^-ms-/;function Mt(e){return Le(e.replace(Ni,"ms-"))}var Fn={};function Mi(e){var t,n=e.ownerDocument,r=e.nodeName,s=Fn[r];return s||(t=n.body.appendChild(n.createElement(r)),s=o.css(t,"display"),t.parentNode.removeChild(t),s==="none"&&(s="block"),Fn[r]=s,s)}function je(e,t){for(var n,r,s=[],u=0,d=e.length;u<d;u++)r=e[u],r.style&&(n=r.style.display,t?(n==="none"&&(s[u]=W.get(r,"display")||null,s[u]||(r.style.display="")),r.style.display===""&&dt(r)&&(s[u]=Mi(r))):n!=="none"&&(s[u]="none",W.set(r,"display",n)));for(u=0;u<d;u++)s[u]!=null&&(e[u].style.display=s[u]);return e}o.fn.extend({show:function(){return je(this,!0)},hide:function(){return je(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){dt(this)?o(this).show():o(this).hide()})}});var Ze=function(e){return o.contains(e.ownerDocument,e)||e.getRootNode(Hi)===e.ownerDocument},Hi={composed:!0};re.getRootNode||(Ze=function(e){return o.contains(e.ownerDocument,e)});var Bn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ae={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};Ae.tbody=Ae.tfoot=Ae.colgroup=Ae.caption=Ae.thead,Ae.th=Ae.td;function fe(e,t){var n;return typeof e.getElementsByTagName<"u"?n=c.slice.call(e.getElementsByTagName(t||"*")):typeof e.querySelectorAll<"u"?n=e.querySelectorAll(t||"*"):n=[],t===void 0||t&&j(e,t)?o.merge([e],n):n}var Vn=/^$|^module$|\/(?:java|ecma)script/i;function Ht(e,t){for(var n=0,r=e.length;n<r;n++)W.set(e[n],"globalEval",!t||W.get(t[n],"globalEval"))}var Pi=/<|&#?\w+;/;function $n(e,t,n,r,s){for(var u,d,g,_,y,w,C=t.createDocumentFragment(),b=[],A=0,R=e.length;A<R;A++)if(u=e[A],u||u===0)if(k(u)==="object"&&(u.nodeType||x(u)))o.merge(b,u.nodeType?[u]:u);else if(!Pi.test(u))b.push(t.createTextNode(u));else{for(d=d||C.appendChild(t.createElement("div")),g=(Bn.exec(u)||["",""])[1].toLowerCase(),_=Ae[g]||c,w=_.length;--w>-1;)d=d.appendChild(t.createElement(_[w]));d.innerHTML=o.htmlPrefilter(u),o.merge(b,d.childNodes),d=C.firstChild,d.textContent=""}for(C.textContent="",A=0;u=b[A++];){if(r&&o.inArray(u,r)>-1){s&&s.push(u);continue}if(y=Ze(u),d=fe(C.appendChild(u),"script"),y&&Ht(d),n)for(w=0;u=d[w++];)Vn.test(u.type||"")&&n.push(u)}return C}function ji(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Ri(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Re(e,t,n,r){t=T(t);var s,u,d,g,_,y,w=0,C=e.length,b=C-1,A=t[0],R=typeof A=="function";if(R)return e.each(function(V){var F=e.eq(V);t[0]=A.call(this,V,F.html()),Re(F,t,n,r)});if(C&&(s=$n(t,e[0].ownerDocument,!1,e,r),u=s.firstChild,s.childNodes.length===1&&(s=u),u||r)){for(d=o.map(fe(s,"script"),ji),g=d.length;w<C;w++)_=s,w!==b&&(_=o.clone(_,!0,!0),g&&o.merge(d,fe(_,"script"))),n.call(e[w],_,w);if(g)for(y=d[d.length-1].ownerDocument,o.map(d,Ri),w=0;w<g;w++)_=d[w],Vn.test(_.type||"")&&!W.get(_,"globalEval")&&o.contains(y,_)&&(_.src&&(_.type||"").toLowerCase()!=="module"?o._evalUrl&&!_.noModule&&o._evalUrl(_.src,{nonce:_.nonce,crossOrigin:_.crossOrigin},y):$(_.textContent,_,y))}return e}var ht=/^(?:checkbox|radio)$/i,Wn=/^([^.]*)(?:\.(.+)|)/;function qe(){return!0}function Fe(){return!1}function Pt(e,t,n,r,s,u){var d,g;if(typeof t=="object"){typeof n!="string"&&(r=r||n,n=void 0);for(g in t)Pt(e,g,n,r,t[g],u);return e}if(r==null&&s==null?(s=n,r=n=void 0):s==null&&(typeof n=="string"?(s=r,r=void 0):(s=r,r=n,n=void 0)),s===!1)s=Fe;else if(!s)return e;return u===1&&(d=s,s=function(_){return o().off(_),d.apply(this,arguments)},s.guid=d.guid||(d.guid=o.guid++)),e.each(function(){o.event.add(this,t,s,r,n)})}o.event={add:function(e,t,n,r,s){var u,d,g,_,y,w,C,b,A,R,V,F=W.get(e);if(Xe(e))for(n.handler&&(u=n,n=u.handler,s=u.selector),s&&o.find.matchesSelector(re,s),n.guid||(n.guid=o.guid++),(_=F.events)||(_=F.events=Object.create(null)),(d=F.handle)||(d=F.handle=function(ee){return typeof o<"u"&&o.event.triggered!==ee.type?o.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ye)||[""],y=t.length;y--;)g=Wn.exec(t[y])||[],A=V=g[1],R=(g[2]||"").split(".").sort(),A&&(C=o.event.special[A]||{},A=(s?C.delegateType:C.bindType)||A,C=o.event.special[A]||{},w=o.extend({type:A,origType:V,data:r,handler:n,guid:n.guid,selector:s,needsContext:s&&o.expr.match.needsContext.test(s),namespace:R.join(".")},u),(b=_[A])||(b=_[A]=[],b.delegateCount=0,(!C.setup||C.setup.call(e,r,R,d)===!1)&&e.addEventListener&&e.addEventListener(A,d)),C.add&&(C.add.call(e,w),w.handler.guid||(w.handler.guid=n.guid)),s?b.splice(b.delegateCount++,0,w):b.push(w))},remove:function(e,t,n,r,s){var u,d,g,_,y,w,C,b,A,R,V,F=W.hasData(e)&&W.get(e);if(!(!F||!(_=F.events))){for(t=(t||"").match(ye)||[""],y=t.length;y--;){if(g=Wn.exec(t[y])||[],A=V=g[1],R=(g[2]||"").split(".").sort(),!A){for(A in _)o.event.remove(e,A+t[y],n,r,!0);continue}for(C=o.event.special[A]||{},A=(r?C.delegateType:C.bindType)||A,b=_[A]||[],g=g[2]&&new RegExp("(^|\\.)"+R.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=u=b.length;u--;)w=b[u],(s||V===w.origType)&&(!n||n.guid===w.guid)&&(!g||g.test(w.namespace))&&(!r||r===w.selector||r==="**"&&w.selector)&&(b.splice(u,1),w.selector&&b.delegateCount--,C.remove&&C.remove.call(e,w));d&&!b.length&&((!C.teardown||C.teardown.call(e,R,F.handle)===!1)&&o.removeEvent(e,A,F.handle),delete _[A])}o.isEmptyObject(_)&&W.remove(e,"handle events")}},dispatch:function(e){var t,n,r,s,u,d,g=new Array(arguments.length),_=o.event.fix(e),y=(W.get(this,"events")||Object.create(null))[_.type]||[],w=o.event.special[_.type]||{};for(g[0]=_,t=1;t<arguments.length;t++)g[t]=arguments[t];if(_.delegateTarget=this,!(w.preDispatch&&w.preDispatch.call(this,_)===!1)){for(d=o.event.handlers.call(this,_,y),t=0;(s=d[t++])&&!_.isPropagationStopped();)for(_.currentTarget=s.elem,n=0;(u=s.handlers[n++])&&!_.isImmediatePropagationStopped();)(!_.rnamespace||u.namespace===!1||_.rnamespace.test(u.namespace))&&(_.handleObj=u,_.data=u.data,r=((o.event.special[u.origType]||{}).handle||u.handler).apply(s.elem,g),r!==void 0&&(_.result=r)===!1&&(_.preventDefault(),_.stopPropagation()));return w.postDispatch&&w.postDispatch.call(this,_),_.result}},handlers:function(e,t){var n,r,s,u,d,g=[],_=t.delegateCount,y=e.target;if(_&&!(e.type==="click"&&e.button>=1)){for(;y!==this;y=y.parentNode||this)if(y.nodeType===1&&!(e.type==="click"&&y.disabled===!0)){for(u=[],d={},n=0;n<_;n++)r=t[n],s=r.selector+" ",d[s]===void 0&&(d[s]=r.needsContext?o(s,this).index(y)>-1:o.find(s,this,null,[y]).length),d[s]&&u.push(r);u.length&&g.push({elem:y,handlers:u})}}return y=this,_<t.length&&g.push({elem:y,handlers:t.slice(_)}),g},addProp:function(e,t){Object.defineProperty(o.Event.prototype,e,{enumerable:!0,configurable:!0,get:typeof t=="function"?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[o.expando]?e:new o.Event(e)},special:o.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ht.test(t.type)&&t.click&&j(t,"input")&&_t(t,"click",!0),!1},trigger:function(e){var t=this||e;return ht.test(t.type)&&t.click&&j(t,"input")&&_t(t,"click"),!0},_default:function(e){var t=e.target;return ht.test(t.type)&&t.click&&j(t,"input")&&W.get(t,"click")||j(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.preventDefault()}}})};function _t(e,t,n){if(!n){W.get(e,t)===void 0&&o.event.add(e,t,qe);return}W.set(e,t,!1),o.event.add(e,t,{namespace:!1,handler:function(r){var s,u=W.get(this,t);if(r.isTrigger&1&&this[t]){if(u.length)(o.event.special[t]||{}).delegateType&&r.stopPropagation();else if(u=m.call(arguments),W.set(this,t,u),this[t](),s=W.get(this,t),W.set(this,t,!1),u!==s)return r.stopImmediatePropagation(),r.preventDefault(),s&&s.value}else u.length&&(W.set(this,t,{value:o.event.trigger(u[0],u.slice(1),this)}),r.stopPropagation(),r.isImmediatePropagationStopped=qe)}})}o.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},o.Event=function(e,t){if(!(this instanceof o.Event))return new o.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented?qe:Fe,this.target=e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&o.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[o.expando]=!0},o.Event.prototype={constructor:o.Event,isDefaultPrevented:Fe,isPropagationStopped:Fe,isImmediatePropagationStopped:Fe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=qe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=qe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=qe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},o.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},o.event.addProp),o.each({focus:"focusin",blur:"focusout"},function(e,t){function n(r){var s=o.event.fix(r);s.type=r.type==="focusin"?"focus":"blur",s.isSimulated=!0,s.target===s.currentTarget&&W.get(this,"handle")(s)}o.event.special[e]={setup:function(){if(_t(this,e,!0),H)this.addEventListener(t,n);else return!1},trigger:function(){return _t(this,e),!0},teardown:function(){if(H)this.removeEventListener(t,n);else return!1},_default:function(r){return W.get(r.target,e)},delegateType:t}}),o.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){o.event.special[e]={delegateType:t,bindType:t,handle:function(n){var r,s=this,u=n.relatedTarget,d=n.handleObj;return(!u||u!==s&&!o.contains(s,u))&&(n.type=d.origType,r=d.handler.apply(this,arguments),n.type=t),r}}}),o.fn.extend({on:function(e,t,n,r){return Pt(this,e,t,n,r)},one:function(e,t,n,r){return Pt(this,e,t,n,r,1)},off:function(e,t,n){var r,s;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,o(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if(typeof e=="object"){for(s in e)this.off(s,t,e[s]);return this}return(t===!1||typeof t=="function")&&(n=t,t=void 0),n===!1&&(n=Fe),this.each(function(){o.event.remove(this,e,n,t)})}});var qi=/<script|<style|<link/i;function zn(e,t){return j(e,"table")&&j(t.nodeType!==11?t:t.firstChild,"tr")&&o(e).children("tbody")[0]||e}function Gn(e,t){var n,r,s,u=W.get(e,"events");if(t.nodeType===1){if(u){W.remove(t,"handle events");for(n in u)for(r=0,s=u[n].length;r<s;r++)o.event.add(t,n,u[n][r])}ue.hasData(e)&&ue.set(t,o.extend({},ue.get(e)))}}function Un(e,t,n){for(var r,s=t?o.filter(t,e):e,u=0;(r=s[u])!=null;u++)!n&&r.nodeType===1&&o.cleanData(fe(r)),r.parentNode&&(n&&Ze(r)&&Ht(fe(r,"script")),r.parentNode.removeChild(r));return e}o.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,s,u,d,g=e.cloneNode(!0),_=Ze(e);if(H&&(e.nodeType===1||e.nodeType===11)&&!o.isXMLDoc(e))for(d=fe(g),u=fe(e),r=0,s=u.length;r<s;r++)j(d[r],"textarea")&&(d[r].defaultValue=u[r].defaultValue);if(t)if(n)for(u=u||fe(e),d=d||fe(g),r=0,s=u.length;r<s;r++)Gn(u[r],d[r]);else Gn(e,g);return d=fe(g,"script"),d.length>0&&Ht(d,!_&&fe(e,"script")),g},cleanData:function(e){for(var t,n,r,s=o.event.special,u=0;(n=e[u])!==void 0;u++)if(Xe(n)){if(t=n[W.expando]){if(t.events)for(r in t.events)s[r]?o.event.remove(n,r):o.removeEvent(n,r,t.handle);n[W.expando]=void 0}n[ue.expando]&&(n[ue.expando]=void 0)}}}),o.fn.extend({detach:function(e){return Un(this,e,!0)},remove:function(e){return Un(this,e)},text:function(e){return we(this,function(t){return t===void 0?o.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=zn(this,e);t.appendChild(e)}})},prepend:function(){return Re(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=zn(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(o.cleanData(fe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return o.clone(this,e,t)})},html:function(e){return we(this,function(t){var n=this[0]||{},r=0,s=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!qi.test(t)&&!Ae[(Bn.exec(t)||["",""])[1].toLowerCase()]){t=o.htmlPrefilter(t);try{for(;r<s;r++)n=this[r]||{},n.nodeType===1&&(o.cleanData(fe(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;o.inArray(this,e)<0&&(o.cleanData(fe(this)),n&&n.replaceChild(t,this))},e)}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){o.fn[e]=function(n){for(var r,s=[],u=o(n),d=u.length-1,g=0;g<=d;g++)r=g===d?this:this.clone(!0),o(u[g])[t](r),O.apply(s,r);return this.pushStack(s)}});var Fi=new RegExp("^("+Rn+")(?!px)[a-z%]+$","i"),jt=/^--/;function gt(e){var t=e.ownerDocument.defaultView;return t||(t=a),t.getComputedStyle(e)}function Bi(e,t,n){var r,s,u={};for(s in t)u[s]=e.style[s],e.style[s]=t[s];r=n.call(e);for(s in t)e.style[s]=u[s];return r}function Yn(e,t,n){var r,s=jt.test(t);return n=n||gt(e),n&&(r=n.getPropertyValue(t)||n[t],s&&r&&(r=r.replace(Q,"$1")||void 0),r===""&&!Ze(e)&&(r=o.style(e,t))),r!==void 0?r+"":r}var Xn=["Webkit","Moz","ms"],Qn=L.createElement("div").style;function Vi(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Xn.length;n--;)if(e=Xn[n]+t,e in Qn)return e}function Rt(e){return e in Qn?e:Vi(e)||e}var Kn,Zn,Ee=L.createElement("table");function Jn(){if(!(!Ee||!Ee.style)){var e,t=L.createElement("col"),n=L.createElement("tr"),r=L.createElement("td");if(Ee.style.cssText="position:absolute;left:-11111px;border-collapse:separate;border-spacing:0",n.style.cssText="box-sizing:content-box;border:1px solid;height:1px",r.style.cssText="height:9px;width:9px;padding:0",t.span=2,re.appendChild(Ee).appendChild(t).parentNode.appendChild(n).appendChild(r).parentNode.appendChild(r.cloneNode(!0)),Ee.offsetWidth===0){re.removeChild(Ee);return}e=a.getComputedStyle(n),Zn=H||Math.round(parseFloat(a.getComputedStyle(t).width))===18,Kn=Math.round(parseFloat(e.height)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth))===n.offsetHeight,re.removeChild(Ee),Ee=null}}o.extend(v,{reliableTrDimensions:function(){return Jn(),Kn},reliableColDimensions:function(){return Jn(),Zn}});var $i={position:"absolute",visibility:"hidden",display:"block"},er={letterSpacing:"0",fontWeight:"400"};function tr(e,t,n){var r=Ke.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function nr(e,t,n,r,s,u){var d=t==="width"?1:0,g=0,_=0,y=0;if(n===(r?"border":"content"))return 0;for(;d<4;d+=2)n==="margin"&&(y+=o.css(e,n+Ce[d],!0,s)),r?(n==="content"&&(_-=o.css(e,"padding"+Ce[d],!0,s)),n!=="margin"&&(_-=o.css(e,"border"+Ce[d]+"Width",!0,s))):(_+=o.css(e,"padding"+Ce[d],!0,s),n!=="padding"?_+=o.css(e,"border"+Ce[d]+"Width",!0,s):g+=o.css(e,"border"+Ce[d]+"Width",!0,s));return!r&&u>=0&&(_+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-u-_-g-.5))||0),_+y}function rr(e,t,n){var r=gt(e),s=H||n,u=s&&o.css(e,"boxSizing",!1,r)==="border-box",d=u,g=Yn(e,t,r),_="offset"+t[0].toUpperCase()+t.slice(1);if(Fi.test(g)){if(!n)return g;g="auto"}return(g==="auto"||H&&u||!v.reliableColDimensions()&&j(e,"col")||!v.reliableTrDimensions()&&j(e,"tr"))&&e.getClientRects().length&&(u=o.css(e,"boxSizing",!1,r)==="border-box",d=_ in e,d&&(g=e[_])),g=parseFloat(g)||0,g+nr(e,t,n||(u?"border":"content"),d,r,g)+"px"}o.extend({cssHooks:{},style:function(e,t,n,r){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var s,u,d,g=Mt(t),_=jt.test(t),y=e.style;if(_||(t=Rt(g)),d=o.cssHooks[t]||o.cssHooks[g],n!==void 0){if(u=typeof n,u==="string"&&(s=Ke.exec(n))&&s[1]&&(n=qn(e,t,s),u="number"),n==null||n!==n)return;u==="number"&&(n+=s&&s[3]||(pt(g)?"px":"")),H&&n===""&&t.indexOf("background")===0&&(y[t]="inherit"),(!d||!("set"in d)||(n=d.set(e,n,r))!==void 0)&&(_?y.setProperty(t,n):y[t]=n)}else return d&&"get"in d&&(s=d.get(e,!1,r))!==void 0?s:y[t]}},css:function(e,t,n,r){var s,u,d,g=Mt(t),_=jt.test(t);return _||(t=Rt(g)),d=o.cssHooks[t]||o.cssHooks[g],d&&"get"in d&&(s=d.get(e,!0,n)),s===void 0&&(s=Yn(e,t,r)),s==="normal"&&t in er&&(s=er[t]),n===""||n?(u=parseFloat(s),n===!0||isFinite(u)?u||0:s):s}}),o.each(["height","width"],function(e,t){o.cssHooks[t]={get:function(n,r,s){if(r)return o.css(n,"display")==="none"?Bi(n,$i,function(){return rr(n,t,s)}):rr(n,t,s)},set:function(n,r,s){var u,d=gt(n),g=s&&o.css(n,"boxSizing",!1,d)==="border-box",_=s?nr(n,t,s,g,d):0;return _&&(u=Ke.exec(r))&&(u[3]||"px")!=="px"&&(n.style[t]=r,r=o.css(n,t)),tr(n,r,_)}}}),o.each({margin:"",padding:"",border:"Width"},function(e,t){o.cssHooks[e+t]={expand:function(n){for(var r=0,s={},u=typeof n=="string"?n.split(" "):[n];r<4;r++)s[e+Ce[r]+t]=u[r]||u[r-2]||u[0];return s}},e!=="margin"&&(o.cssHooks[e+t].set=tr)}),o.fn.extend({css:function(e,t){return we(this,function(n,r,s){var u,d,g={},_=0;if(Array.isArray(r)){for(u=gt(n),d=r.length;_<d;_++)g[r[_]]=o.css(n,r[_],!1,u);return g}return s!==void 0?o.style(n,r,s):o.css(n,r)},e,t,arguments.length>1)}});function de(e,t,n,r,s){return new de.prototype.init(e,t,n,r,s)}o.Tween=de,de.prototype={constructor:de,init:function(e,t,n,r,s,u){this.elem=e,this.prop=n,this.easing=s||o.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=u||(pt(n)?"px":"")},cur:function(){var e=de.propHooks[this.prop];return e&&e.get?e.get(this):de.propHooks._default.get(this)},run:function(e){var t,n=de.propHooks[this.prop];return this.options.duration?this.pos=t=o.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):de.propHooks._default.set(this),this}},de.prototype.init.prototype=de.prototype,de.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=o.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){o.fx.step[e.prop]?o.fx.step[e.prop](e):e.elem.nodeType===1&&(o.cssHooks[e.prop]||e.elem.style[Rt(e.prop)]!=null)?o.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},o.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},o.fx=de.prototype.init,o.fx.step={};var Be,mt,Wi=/^(?:toggle|show|hide)$/,zi=/queueHooks$/;function qt(){mt&&(L.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(qt):a.setTimeout(qt,13),o.fx.tick())}function ir(){return a.setTimeout(function(){Be=void 0}),Be=Date.now()}function yt(e,t){var n,r=0,s={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ce[r],s["margin"+n]=s["padding"+n]=e;return t&&(s.opacity=s.width=e),s}function or(e,t,n){for(var r,s=(ge.tweeners[t]||[]).concat(ge.tweeners["*"]),u=0,d=s.length;u<d;u++)if(r=s[u].call(n,t,e))return r}function Gi(e,t,n){var r,s,u,d,g,_,y,w,C="width"in t||"height"in t,b=this,A={},R=e.style,V=e.nodeType&&dt(e),F=W.get(e,"fxshow");n.queue||(d=o._queueHooks(e,"fx"),d.unqueued==null&&(d.unqueued=0,g=d.empty.fire,d.empty.fire=function(){d.unqueued||g()}),d.unqueued++,b.always(function(){b.always(function(){d.unqueued--,o.queue(e,"fx").length||d.empty.fire()})}));for(r in t)if(s=t[r],Wi.test(s)){if(delete t[r],u=u||s==="toggle",s===(V?"hide":"show"))if(s==="show"&&F&&F[r]!==void 0)V=!0;else continue;A[r]=F&&F[r]||o.style(e,r)}if(_=!o.isEmptyObject(t),!(!_&&o.isEmptyObject(A))){C&&e.nodeType===1&&(n.overflow=[R.overflow,R.overflowX,R.overflowY],y=F&&F.display,y==null&&(y=W.get(e,"display")),w=o.css(e,"display"),w==="none"&&(y?w=y:(je([e],!0),y=e.style.display||y,w=o.css(e,"display"),je([e]))),(w==="inline"||w==="inline-block"&&y!=null)&&o.css(e,"float")==="none"&&(_||(b.done(function(){R.display=y}),y==null&&(w=R.display,y=w==="none"?"":w)),R.display="inline-block")),n.overflow&&(R.overflow="hidden",b.always(function(){R.overflow=n.overflow[0],R.overflowX=n.overflow[1],R.overflowY=n.overflow[2]})),_=!1;for(r in A)_||(F?"hidden"in F&&(V=F.hidden):F=W.set(e,"fxshow",{display:y}),u&&(F.hidden=!V),V&&je([e],!0),b.done(function(){V||je([e]),W.remove(e,"fxshow");for(r in A)o.style(e,r,A[r])})),_=or(V?F[r]:0,r,b),r in F||(F[r]=_.start,V&&(_.end=_.start,_.start=0))}}function Ui(e,t){var n,r,s,u,d;for(n in e)if(r=Mt(n),s=t[r],u=e[n],Array.isArray(u)&&(s=u[1],u=e[n]=u[0]),n!==r&&(e[r]=u,delete e[n]),d=o.cssHooks[r],d&&"expand"in d){u=d.expand(u),delete e[r];for(n in u)n in e||(e[n]=u[n],t[n]=s)}else t[r]=s}function ge(e,t,n){var r,s,u=0,d=ge.prefilters.length,g=o.Deferred().always(function(){delete _.elem}),_=function(){if(s)return!1;for(var C=Be||ir(),b=Math.max(0,y.startTime+y.duration-C),A=1-(b/y.duration||0),R=0,V=y.tweens.length;R<V;R++)y.tweens[R].run(A);return g.notifyWith(e,[y,A,b]),A<1&&V?b:(V||g.notifyWith(e,[y,1,0]),g.resolveWith(e,[y]),!1)},y=g.promise({elem:e,props:o.extend({},t),opts:o.extend(!0,{specialEasing:{},easing:o.easing._default},n),originalProperties:t,originalOptions:n,startTime:Be||ir(),duration:n.duration,tweens:[],createTween:function(C,b){var A=o.Tween(e,y.opts,C,b,y.opts.specialEasing[C]||y.opts.easing);return y.tweens.push(A),A},stop:function(C){var b=0,A=C?y.tweens.length:0;if(s)return this;for(s=!0;b<A;b++)y.tweens[b].run(1);return C?(g.notifyWith(e,[y,1,0]),g.resolveWith(e,[y,C])):g.rejectWith(e,[y,C]),this}}),w=y.props;for(Ui(w,y.opts.specialEasing);u<d;u++)if(r=ge.prefilters[u].call(y,e,w,y.opts),r)return typeof r.stop=="function"&&(o._queueHooks(y.elem,y.opts.queue).stop=r.stop.bind(r)),r;return o.map(w,or,y),typeof y.opts.start=="function"&&y.opts.start.call(e,y),y.progress(y.opts.progress).done(y.opts.done,y.opts.complete).fail(y.opts.fail).always(y.opts.always),o.fx.timer(o.extend(_,{elem:e,anim:y,queue:y.opts.queue})),y}o.Animation=o.extend(ge,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return qn(n.elem,e,Ke.exec(t),n),n}]},tweener:function(e,t){typeof e=="function"?(t=e,e=["*"]):e=e.match(ye);for(var n,r=0,s=e.length;r<s;r++)n=e[r],ge.tweeners[n]=ge.tweeners[n]||[],ge.tweeners[n].unshift(t)},prefilters:[Gi],prefilter:function(e,t){t?ge.prefilters.unshift(e):ge.prefilters.push(e)}}),o.speed=function(e,t,n){var r=e&&typeof e=="object"?o.extend({},e):{complete:n||t||typeof e=="function"&&e,duration:e,easing:n&&t||t&&typeof t!="function"&&t};return o.fx.off?r.duration=0:typeof r.duration!="number"&&(r.duration in o.fx.speeds?r.duration=o.fx.speeds[r.duration]:r.duration=o.fx.speeds._default),(r.queue==null||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){typeof r.old=="function"&&r.old.call(this),r.queue&&o.dequeue(this,r.queue)},r},o.fn.extend({fadeTo:function(e,t,n,r){return this.filter(dt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var s=o.isEmptyObject(e),u=o.speed(t,n,r),d=function(){var g=ge(this,o.extend({},e),u);(s||W.get(this,"finish"))&&g.stop(!0)};return d.finish=d,s||u.queue===!1?this.each(d):this.queue(u.queue,d)},stop:function(e,t,n){var r=function(s){var u=s.stop;delete s.stop,u(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var s=!0,u=e!=null&&e+"queueHooks",d=o.timers,g=W.get(this);if(u)g[u]&&g[u].stop&&r(g[u]);else for(u in g)g[u]&&g[u].stop&&zi.test(u)&&r(g[u]);for(u=d.length;u--;)d[u].elem===this&&(e==null||d[u].queue===e)&&(d[u].anim.stop(n),s=!1,d.splice(u,1));(s||!n)&&o.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=W.get(this),r=n[e+"queue"],s=n[e+"queueHooks"],u=o.timers,d=r?r.length:0;for(n.finish=!0,o.queue(this,e,[]),s&&s.stop&&s.stop.call(this,!0),t=u.length;t--;)u[t].elem===this&&u[t].queue===e&&(u[t].anim.stop(!0),u.splice(t,1));for(t=0;t<d;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),o.each(["toggle","show","hide"],function(e,t){var n=o.fn[t];o.fn[t]=function(r,s,u){return r==null||typeof r=="boolean"?n.apply(this,arguments):this.animate(yt(t,!0),r,s,u)}}),o.each({slideDown:yt("show"),slideUp:yt("hide"),slideToggle:yt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){o.fn[e]=function(n,r,s){return this.animate(t,n,r,s)}}),o.timers=[],o.fx.tick=function(){var e,t=0,n=o.timers;for(Be=Date.now();t<n.length;t++)e=n[t],!e()&&n[t]===e&&n.splice(t--,1);n.length||o.fx.stop(),Be=void 0},o.fx.timer=function(e){o.timers.push(e),o.fx.start()},o.fx.start=function(){mt||(mt=!0,qt())},o.fx.stop=function(){mt=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(e,t){return e=o.fx&&o.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,r){var s=a.setTimeout(n,e);r.stop=function(){a.clearTimeout(s)}})};var Yi=/^(?:input|select|textarea|button)$/i,Xi=/^(?:a|area)$/i;o.fn.extend({prop:function(e,t){return we(this,o.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[o.propFix[e]||e]})}}),o.extend({prop:function(e,t,n){var r,s,u=e.nodeType;if(!(u===3||u===8||u===2))return(u!==1||!o.isXMLDoc(e))&&(t=o.propFix[t]||t,s=o.propHooks[t]),n!==void 0?s&&"set"in s&&(r=s.set(e,n,t))!==void 0?r:e[t]=n:s&&"get"in s&&(r=s.get(e,t))!==null?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttribute("tabindex");return t?parseInt(t,10):Yi.test(e.nodeName)||Xi.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),H&&(o.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});function Ie(e){var t=e.match(ye)||[];return t.join(" ")}function Ve(e){return e.getAttribute&&e.getAttribute("class")||""}function Ft(e){return Array.isArray(e)?e:typeof e=="string"?e.match(ye)||[]:[]}o.fn.extend({addClass:function(e){var t,n,r,s,u,d;return typeof e=="function"?this.each(function(g){o(this).addClass(e.call(this,g,Ve(this)))}):(t=Ft(e),t.length?this.each(function(){if(r=Ve(this),n=this.nodeType===1&&" "+Ie(r)+" ",n){for(u=0;u<t.length;u++)s=t[u],n.indexOf(" "+s+" ")<0&&(n+=s+" ");d=Ie(n),r!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(e){var t,n,r,s,u,d;return typeof e=="function"?this.each(function(g){o(this).removeClass(e.call(this,g,Ve(this)))}):arguments.length?(t=Ft(e),t.length?this.each(function(){if(r=Ve(this),n=this.nodeType===1&&" "+Ie(r)+" ",n){for(u=0;u<t.length;u++)for(s=t[u];n.indexOf(" "+s+" ")>-1;)n=n.replace(" "+s+" "," ");d=Ie(n),r!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(e,t){var n,r,s,u;return typeof e=="function"?this.each(function(d){o(this).toggleClass(e.call(this,d,Ve(this),t),t)}):typeof t=="boolean"?t?this.addClass(e):this.removeClass(e):(n=Ft(e),n.length?this.each(function(){for(u=o(this),s=0;s<n.length;s++)r=n[s],u.hasClass(r)?u.removeClass(r):u.addClass(r)}):this)},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(n.nodeType===1&&(" "+Ie(Ve(n))+" ").indexOf(t)>-1)return!0;return!1}}),o.fn.extend({val:function(e){var t,n,r,s=this[0];return arguments.length?(r=typeof e=="function",this.each(function(u){var d;this.nodeType===1&&(r?d=e.call(this,u,o(this).val()):d=e,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=o.map(d,function(g){return g==null?"":g+""})),t=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,d,"value")===void 0)&&(this.value=d))})):s?(t=o.valHooks[s.type]||o.valHooks[s.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(s,"value"))!==void 0?n:(n=s.value,n??"")):void 0}}),o.extend({valHooks:{select:{get:function(e){var t,n,r,s=e.options,u=e.selectedIndex,d=e.type==="select-one",g=d?null:[],_=d?u+1:s.length;for(u<0?r=_:r=d?u:0;r<_;r++)if(n=s[r],n.selected&&!n.disabled&&(!n.parentNode.disabled||!j(n.parentNode,"optgroup"))){if(t=o(n).val(),d)return t;g.push(t)}return g},set:function(e,t){for(var n,r,s=e.options,u=o.makeArray(t),d=s.length;d--;)r=s[d],(r.selected=o.inArray(o(r).val(),u)>-1)&&(n=!0);return n||(e.selectedIndex=-1),u}}}}),H&&(o.valHooks.option={get:function(e){var t=e.getAttribute("value");return t??Ie(o.text(e))}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=o.inArray(o(e).val(),t)>-1}}});var ar=/^(?:focusinfocus|focusoutblur)$/,sr=function(e){e.stopPropagation()};o.extend(o.event,{trigger:function(e,t,n,r){var s,u,d,g,_,y,w,C,b=[n||L],A=i.call(e,"type")?e.type:e,R=i.call(e,"namespace")?e.namespace.split("."):[];if(u=C=d=n=n||L,!(n.nodeType===3||n.nodeType===8)&&!ar.test(A+o.event.triggered)&&(A.indexOf(".")>-1&&(R=A.split("."),A=R.shift(),R.sort()),_=A.indexOf(":")<0&&"on"+A,e=e[o.expando]?e:new o.Event(A,typeof e=="object"&&e),e.isTrigger=r?2:3,e.namespace=R.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+R.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:o.makeArray(t,[e]),w=o.event.special[A]||{},!(!r&&w.trigger&&w.trigger.apply(n,t)===!1))){if(!r&&!w.noBubble&&!S(n)){for(g=w.delegateType||A,ar.test(g+A)||(u=u.parentNode);u;u=u.parentNode)b.push(u),d=u;d===(n.ownerDocument||L)&&b.push(d.defaultView||d.parentWindow||a)}for(s=0;(u=b[s++])&&!e.isPropagationStopped();)C=u,e.type=s>1?g:w.bindType||A,y=(W.get(u,"events")||Object.create(null))[e.type]&&W.get(u,"handle"),y&&y.apply(u,t),y=_&&u[_],y&&y.apply&&Xe(u)&&(e.result=y.apply(u,t),e.result===!1&&e.preventDefault());return e.type=A,!r&&!e.isDefaultPrevented()&&(!w._default||w._default.apply(b.pop(),t)===!1)&&Xe(n)&&_&&typeof n[A]=="function"&&!S(n)&&(d=n[_],d&&(n[_]=null),o.event.triggered=A,e.isPropagationStopped()&&C.addEventListener(A,sr),n[A](),e.isPropagationStopped()&&C.removeEventListener(A,sr),o.event.triggered=void 0,d&&(n[_]=d)),e.result}},simulate:function(e,t,n){var r=o.extend(new o.Event,n,{type:e,isSimulated:!0});o.event.trigger(r,null,t)}}),o.fn.extend({trigger:function(e,t){return this.each(function(){o.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return o.event.trigger(e,t,n,!0)}});var Je=a.location,ur={guid:Date.now()},Bt=/\?/;o.parseXML=function(e){var t,n;if(!e||typeof e!="string")return null;try{t=new a.DOMParser().parseFromString(e,"text/xml")}catch{}return n=t&&t.getElementsByTagName("parsererror")[0],(!t||n)&&o.error("Invalid XML: "+(n?o.map(n.childNodes,function(r){return r.textContent}).join(`
`):e)),t};var Qi=/\[\]$/,fr=/\r?\n/g,Ki=/^(?:submit|button|image|reset|file)$/i,Zi=/^(?:input|select|textarea|keygen)/i;function Vt(e,t,n,r){var s;if(Array.isArray(t))o.each(t,function(u,d){n||Qi.test(e)?r(e,d):Vt(e+"["+(typeof d=="object"&&d!=null?u:"")+"]",d,n,r)});else if(!n&&k(t)==="object")for(s in t)Vt(e+"["+s+"]",t[s],n,r);else r(e,t)}o.param=function(e,t){var n,r=[],s=function(u,d){var g=typeof d=="function"?d():d;r[r.length]=encodeURIComponent(u)+"="+encodeURIComponent(g??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!o.isPlainObject(e))o.each(e,function(){s(this.name,this.value)});else for(n in e)Vt(n,e[n],t,s);return r.join("&")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=o.prop(this,"elements");return e?o.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!o(this).is(":disabled")&&Zi.test(this.nodeName)&&!Ki.test(e)&&(this.checked||!ht.test(e))}).map(function(e,t){var n=o(this).val();return n==null?null:Array.isArray(n)?o.map(n,function(r){return{name:t.name,value:r.replace(fr,`\r
`)}}):{name:t.name,value:n.replace(fr,`\r
`)}}).get()}});var Ji=/%20/g,eo=/#.*$/,to=/([?&])_=[^&]*/,no=/^(.*?):[ \t]*([^\r\n]*)$/mg,ro=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,io=/^(?:GET|HEAD)$/,oo=/^\/\//,cr={},$t={},lr="*/".concat("*"),Wt=L.createElement("a");Wt.href=Je.href;function dr(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,s=0,u=t.toLowerCase().match(ye)||[];if(typeof n=="function")for(;r=u[s++];)r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function pr(e,t,n,r){var s={},u=e===$t;function d(g){var _;return s[g]=!0,o.each(e[g]||[],function(y,w){var C=w(t,n,r);if(typeof C=="string"&&!u&&!s[C])return t.dataTypes.unshift(C),d(C),!1;if(u)return!(_=C)}),_}return d(t.dataTypes[0])||!s["*"]&&d("*")}function zt(e,t){var n,r,s=o.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((s[n]?e:r||(r={}))[n]=t[n]);return r&&o.extend(!0,e,r),e}function ao(e,t,n){for(var r,s,u,d,g=e.contents,_=e.dataTypes;_[0]==="*";)_.shift(),r===void 0&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r){for(s in g)if(g[s]&&g[s].test(r)){_.unshift(s);break}}if(_[0]in n)u=_[0];else{for(s in n){if(!_[0]||e.converters[s+" "+_[0]]){u=s;break}d||(d=s)}u=u||d}if(u)return u!==_[0]&&_.unshift(u),n[u]}function so(e,t,n,r){var s,u,d,g,_,y={},w=e.dataTypes.slice();if(w[1])for(d in e.converters)y[d.toLowerCase()]=e.converters[d];for(u=w.shift();u;)if(e.responseFields[u]&&(n[e.responseFields[u]]=t),!_&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),_=u,u=w.shift(),u){if(u==="*")u=_;else if(_!=="*"&&_!==u){if(d=y[_+" "+u]||y["* "+u],!d){for(s in y)if(g=s.split(" "),g[1]===u&&(d=y[_+" "+g[0]]||y["* "+g[0]],d)){d===!0?d=y[s]:y[s]!==!0&&(u=g[0],w.unshift(g[1]));break}}if(d!==!0)if(d&&e.throws)t=d(t);else try{t=d(t)}catch(C){return{state:"parsererror",error:d?C:"No conversion from "+_+" to "+u}}}}return{state:"success",data:t}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Je.href,type:"GET",isLocal:ro.test(Je.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":lr,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,o.ajaxSettings),t):zt(o.ajaxSettings,e)},ajaxPrefilter:dr(cr),ajaxTransport:dr($t),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var n,r,s,u,d,g,_,y,w,C,b=o.ajaxSetup({},t),A=b.context||b,R=b.context&&(A.nodeType||A.jquery)?o(A):o.event,V=o.Deferred(),F=o.Callbacks("once memory"),ee=b.statusCode||{},J={},ce={},ie="canceled",Y={readyState:0,getResponseHeader:function(K){var ne;if(_){if(!u)for(u={};ne=no.exec(s);)u[ne[1].toLowerCase()+" "]=(u[ne[1].toLowerCase()+" "]||[]).concat(ne[2]);ne=u[K.toLowerCase()+" "]}return ne==null?null:ne.join(", ")},getAllResponseHeaders:function(){return _?s:null},setRequestHeader:function(K,ne){return _==null&&(K=ce[K.toLowerCase()]=ce[K.toLowerCase()]||K,J[K]=ne),this},overrideMimeType:function(K){return _==null&&(b.mimeType=K),this},statusCode:function(K){var ne;if(K)if(_)Y.always(K[Y.status]);else for(ne in K)ee[ne]=[ee[ne],K[ne]];return this},abort:function(K){var ne=K||ie;return n&&n.abort(ne),vt(0,ne),this}};if(V.promise(Y),b.url=((e||b.url||Je.href)+"").replace(oo,Je.protocol+"//"),b.type=t.method||t.type||b.method||b.type,b.dataTypes=(b.dataType||"*").toLowerCase().match(ye)||[""],b.crossDomain==null){g=L.createElement("a");try{g.href=b.url,g.href=g.href,b.crossDomain=Wt.protocol+"//"+Wt.host!=g.protocol+"//"+g.host}catch{b.crossDomain=!0}}if(pr(cr,b,t,Y),b.data&&b.processData&&typeof b.data!="string"&&(b.data=o.param(b.data,b.traditional)),_)return Y;y=o.event&&b.global,y&&o.active++===0&&o.event.trigger("ajaxStart"),b.type=b.type.toUpperCase(),b.hasContent=!io.test(b.type),r=b.url.replace(eo,""),b.hasContent?b.data&&b.processData&&(b.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(b.data=b.data.replace(Ji,"+")):(C=b.url.slice(r.length),b.data&&(b.processData||typeof b.data=="string")&&(r+=(Bt.test(r)?"&":"?")+b.data,delete b.data),b.cache===!1&&(r=r.replace(to,"$1"),C=(Bt.test(r)?"&":"?")+"_="+ur.guid+++C),b.url=r+C),b.ifModified&&(o.lastModified[r]&&Y.setRequestHeader("If-Modified-Since",o.lastModified[r]),o.etag[r]&&Y.setRequestHeader("If-None-Match",o.etag[r])),(b.data&&b.hasContent&&b.contentType!==!1||t.contentType)&&Y.setRequestHeader("Content-Type",b.contentType),Y.setRequestHeader("Accept",b.dataTypes[0]&&b.accepts[b.dataTypes[0]]?b.accepts[b.dataTypes[0]]+(b.dataTypes[0]!=="*"?", "+lr+"; q=0.01":""):b.accepts["*"]);for(w in b.headers)Y.setRequestHeader(w,b.headers[w]);if(b.beforeSend&&(b.beforeSend.call(A,Y,b)===!1||_))return Y.abort();if(ie="abort",F.add(b.complete),Y.done(b.success),Y.fail(b.error),n=pr($t,b,t,Y),!n)vt(-1,"No Transport");else{if(Y.readyState=1,y&&R.trigger("ajaxSend",[Y,b]),_)return Y;b.async&&b.timeout>0&&(d=a.setTimeout(function(){Y.abort("timeout")},b.timeout));try{_=!1,n.send(J,vt)}catch(K){if(_)throw K;vt(-1,K)}}function vt(K,ne,gr,lo){var Se,Ut,et,$e,We,be=ne;_||(_=!0,d&&a.clearTimeout(d),n=void 0,s=lo||"",Y.readyState=K>0?4:0,Se=K>=200&&K<300||K===304,gr&&($e=ao(b,Y,gr)),!Se&&o.inArray("script",b.dataTypes)>-1&&o.inArray("json",b.dataTypes)<0&&(b.converters["text script"]=function(){}),$e=so(b,$e,Y,Se),Se?(b.ifModified&&(We=Y.getResponseHeader("Last-Modified"),We&&(o.lastModified[r]=We),We=Y.getResponseHeader("etag"),We&&(o.etag[r]=We)),K===204||b.type==="HEAD"?be="nocontent":K===304?be="notmodified":(be=$e.state,Ut=$e.data,et=$e.error,Se=!et)):(et=be,(K||!be)&&(be="error",K<0&&(K=0))),Y.status=K,Y.statusText=(ne||be)+"",Se?V.resolveWith(A,[Ut,be,Y]):V.rejectWith(A,[Y,be,et]),Y.statusCode(ee),ee=void 0,y&&R.trigger(Se?"ajaxSuccess":"ajaxError",[Y,b,Se?Ut:et]),F.fireWith(A,[Y,be]),y&&(R.trigger("ajaxComplete",[Y,b]),--o.active||o.event.trigger("ajaxStop")))}return Y},getJSON:function(e,t,n){return o.get(e,t,n,"json")},getScript:function(e,t){return o.get(e,void 0,t,"script")}}),o.each(["get","post"],function(e,t){o[t]=function(n,r,s,u){return(typeof r=="function"||r===null)&&(u=u||s,s=r,r=void 0),o.ajax(o.extend({url:n,type:t,dataType:u,data:r,success:s},o.isPlainObject(n)&&n))}}),o.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),o._evalUrl=function(e,t,n){return o.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:t.crossOrigin?{crossOrigin:t.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(r){o.globalEval(r,t,n)}})},o.fn.extend({wrapAll:function(e){var t;return this[0]&&(typeof e=="function"&&(e=e.call(this[0])),t=o(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return typeof e=="function"?this.each(function(t){o(this).wrapInner(e.call(this,t))}):this.each(function(){var t=o(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=typeof e=="function";return this.each(function(n){o(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){o(this).replaceWith(this.childNodes)}),this}}),o.expr.pseudos.hidden=function(e){return!o.expr.pseudos.visible(e)},o.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},o.ajaxSettings.xhr=function(){return new a.XMLHttpRequest};var uo={0:200};o.ajaxTransport(function(e){var t;return{send:function(n,r){var s,u=e.xhr();if(u.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)u[s]=e.xhrFields[s];e.mimeType&&u.overrideMimeType&&u.overrideMimeType(e.mimeType),!e.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");for(s in n)u.setRequestHeader(s,n[s]);t=function(d){return function(){t&&(t=u.onload=u.onerror=u.onabort=u.ontimeout=null,d==="abort"?u.abort():d==="error"?r(u.status,u.statusText):r(uo[u.status]||u.status,u.statusText,(u.responseType||"text")==="text"?{text:u.responseText}:{binary:u.response},u.getAllResponseHeaders()))}},u.onload=t(),u.onabort=u.onerror=u.ontimeout=t("error"),t=t("abort");try{u.send(e.hasContent&&e.data||null)}catch(d){if(t)throw d}},abort:function(){t&&t()}}});function hr(e){return e.scriptAttrs||!e.headers&&(e.crossDomain||e.async&&o.inArray("json",e.dataTypes)<0)}o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(e){return o.globalEval(e),e}}}),o.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),hr(e)&&(e.type="GET")}),o.ajaxTransport("script",function(e){if(hr(e)){var t,n;return{send:function(r,s){t=o("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(u){t.remove(),n=null,u&&s(u.type==="error"?404:200,u.type)}),L.head.appendChild(t[0])},abort:function(){n&&n()}}}});var _r=[],Gt=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_r.pop()||o.expando+"_"+ur.guid++;return this[e]=!0,e}}),o.ajaxPrefilter("jsonp",function(e,t,n){var r,s,u,d=e.jsonp!==!1&&(Gt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Gt.test(e.data)&&"data");return r=e.jsonpCallback=typeof e.jsonpCallback=="function"?e.jsonpCallback():e.jsonpCallback,d?e[d]=e[d].replace(Gt,"$1"+r):e.jsonp!==!1&&(e.url+=(Bt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return u||o.error(r+" was not called"),u[0]},e.dataTypes[0]="json",s=a[r],a[r]=function(){u=arguments},n.always(function(){s===void 0?o(a).removeProp(r):a[r]=s,e[r]&&(e.jsonpCallback=t.jsonpCallback,_r.push(r)),u&&typeof s=="function"&&s(u[0]),u=s=void 0}),"script"}),o.ajaxPrefilter(function(e,t){typeof e.data!="string"&&!o.isPlainObject(e.data)&&!Array.isArray(e.data)&&!("processData"in t)&&(e.processData=!1),e.data instanceof a.FormData&&(e.contentType=!1)}),o.parseHTML=function(e,t,n){if(typeof e!="string"&&!Mn(e+""))return[];typeof t=="boolean"&&(n=t,t=!1);var r,s;return t||(t=new a.DOMParser().parseFromString("","text/html")),r=Nn.exec(e),s=!n&&[],r?[t.createElement(r[1])]:(r=$n([e],t,s),s&&s.length&&o(s).remove(),o.merge([],r.childNodes))},o.fn.load=function(e,t,n){var r,s,u,d=this,g=e.indexOf(" ");return g>-1&&(r=Ie(e.slice(g)),e=e.slice(0,g)),typeof t=="function"?(n=t,t=void 0):t&&typeof t=="object"&&(s="POST"),d.length>0&&o.ajax({url:e,type:s||"GET",dataType:"html",data:t}).done(function(_){u=arguments,d.html(r?o("<div>").append(o.parseHTML(_)).find(r):_)}).always(n&&function(_,y){d.each(function(){n.apply(this,u||[_.responseText,y,_])})}),this},o.expr.pseudos.animated=function(e){return o.grep(o.timers,function(t){return e===t.elem}).length},o.offset={setOffset:function(e,t,n){var r,s,u,d,g,_,y,w=o.css(e,"position"),C=o(e),b={};w==="static"&&(e.style.position="relative"),g=C.offset(),u=o.css(e,"top"),_=o.css(e,"left"),y=(w==="absolute"||w==="fixed")&&(u+_).indexOf("auto")>-1,y?(r=C.position(),d=r.top,s=r.left):(d=parseFloat(u)||0,s=parseFloat(_)||0),typeof t=="function"&&(t=t.call(e,n,o.extend({},g))),t.top!=null&&(b.top=t.top-g.top+d),t.left!=null&&(b.left=t.left-g.left+s),"using"in t?t.using.call(e,b):C.css(b)}},o.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(s){o.offset.setOffset(this,e,s)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],s={top:0,left:0};if(o.css(r,"position")==="fixed")t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&e!==n.documentElement&&o.css(e,"position")==="static";)e=e.offsetParent||n.documentElement;e&&e!==r&&e.nodeType===1&&o.css(e,"position")!=="static"&&(s=o(e).offset(),s.top+=o.css(e,"borderTopWidth",!0),s.left+=o.css(e,"borderLeftWidth",!0))}return{top:t.top-s.top-o.css(r,"marginTop",!0),left:t.left-s.left-o.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&o.css(e,"position")==="static";)e=e.offsetParent;return e||re})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";o.fn[e]=function(r){return we(this,function(s,u,d){var g;if(S(s)?g=s:s.nodeType===9&&(g=s.defaultView),d===void 0)return g?g[t]:s[u];g?g.scrollTo(n?g.pageXOffset:d,n?d:g.pageYOffset):s[u]=d},e,r,arguments.length)}}),o.each({Height:"height",Width:"width"},function(e,t){o.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){o.fn[r]=function(s,u){var d=arguments.length&&(n||typeof s!="boolean"),g=n||(s===!0||u===!0?"margin":"border");return we(this,function(_,y,w){var C;return S(_)?r.indexOf("outer")===0?_["inner"+e]:_.document.documentElement["client"+e]:_.nodeType===9?(C=_.documentElement,Math.max(_.body["scroll"+e],C["scroll"+e],_.body["offset"+e],C["offset"+e],C["client"+e])):w===void 0?o.css(_,y,g):o.style(_,y,w,g)},t,d?s:void 0,d)}})}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){o.fn[t]=function(n){return this.on(t,n)}}),o.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){o.fn[t]=function(n,r){return arguments.length>0?this.on(t,null,n,r):this.trigger(t)}}),o.proxy=function(e,t){var n,r,s;if(typeof t=="string"&&(n=e[t],t=e,e=n),typeof e=="function")return r=m.call(arguments,2),s=function(){return e.apply(t||this,r.concat(m.call(arguments)))},s.guid=e.guid=e.guid||o.guid++,s},o.holdReady=function(e){e?o.readyWait++:o.ready(!0)},o.expr[":"]=o.expr.filters=o.expr.pseudos,typeof define=="function"&&define.amd&&define("jquery",[],function(){return o});var fo=a.jQuery,co=a.$;return o.noConflict=function(e){return a.$===o&&(a.$=co),e&&a.jQuery===o&&(a.jQuery=fo),o},typeof l>"u"&&(a.jQuery=a.$=o),o}var bo=vo(window,!0);var Yt=bo;window.jQuery=Yt;window.$=Yt;var xn=yr(vr());function bt(a){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var p in c)p!=="__proto__"&&(a[p]=c[p])}return a}var wo={read:function(a){return a[0]==='"'&&(a=a.slice(1,-1)),a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(a){return encodeURIComponent(a).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Kt(a,l){function c(m,T,O){if(!(typeof document>"u")){O=bt({},l,O),typeof O.expires=="number"&&(O.expires=new Date(Date.now()+O.expires*864e5)),O.expires&&(O.expires=O.expires.toUTCString()),m=encodeURIComponent(m).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var D="";for(var I in O)O[I]&&(D+="; "+I,O[I]!==!0&&(D+="="+O[I].split(";")[0]));return document.cookie=m+"="+a.write(T,m)+D}}function p(m){if(!(typeof document>"u"||arguments.length&&!m)){for(var T=document.cookie?document.cookie.split("; "):[],O={},D=0;D<T.length;D++){var I=T[D].split("="),z=I.slice(1).join("=");try{var i=decodeURIComponent(I[0]);if(i in O||(O[i]=a.read(z,i)),m===i)break}catch{}}return m?O[m]:O}}return Object.create({set:c,get:p,remove:function(m,T){c(m,"",bt({},T,{expires:-1}))},withAttributes:function(m){return Kt(this.converter,bt({},this.attributes,m))},withConverter:function(m){return Kt(bt({},this.converter,m),this.attributes)}},{attributes:{value:Object.freeze(l)},converter:{value:Object.freeze(a)}})}var wt=Kt(wo,{path:"/"});function xo(a){return wt.get(a),a!=null&&a=="1"}function br(a,l,c){l==!0?wt.set(a,!0,c):wt.set(a,!1,c)}function Jo(toggle,overlay,cookie,iframe){var expire={expires:30,path:""};expire=Object.assign(expire,{sameSite:"None",secure:!0}),toggle.addEventListener("change",function(){this.checked?(console.log("Setting conset cookie for "+cookie+" to true, expire: "+expire),br(cookie,!0,expire),overlay.style.display="none",overlay.parentNode.querySelector(".iframe-content").innerHTML=iframe,Array.from(overlay.parentNode.querySelectorAll(".iframe-content script")).forEach(el=>eval(el.innerHTML))):(console.log("Setting conset cookie for "+cookie+" to false, expire: "+expire),br(cookie,!1,expire),overlay.style.display="block",Array.from(overlay.parentNode.querySelectorAll(".iframe-content *")).forEach(a=>a.remove()))}),xo(cookie)&&(toggle.disabled=!1)}var{Howl:To,Howler:na}=wr();function Ao(a,l,c){var p=new To({html5:!0,src:[l],onend:function(){c.classList.add("play"),c.classList.remove("pause"),a.removeEventListener("click",m),a.addEventListener("click",m)},onpause:function(){c.classList.add("play"),c.classList.remove("pause"),a.removeEventListener("click",T),a.addEventListener("click",m)},onstop:function(){c.classList.remove("pause"),c.classList.add("play"),a.removeEventListener("click",T),a.addEventListener("click",m)},onplay:function(){c.classList.remove("play"),c.classList.add("pause"),a.removeEventListener("click",m),a.addEventListener("click",T)}});function m(){p.play()}function T(){p.pause()}a.addEventListener("click",m)}window.audioplayer=Ao;function ko(a){return a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2}var Co={start_mode:"circle",circumference_fraction:.005,circle_size:void 0,circle_fraction:.2,show_circle:!0,revolve_imgs_on_click:!0,slider_fraction:.01,slider_time:400,rate_function:ko,start_slider_pos:.5,show_slider:!0};function he(a,l){return a[l]!=null?a[l]:Co[l]}function Eo(a){let l=Math.max(a.canvas.width,a.canvas.height);a.circumference_thickness=l*he(a.cfg,"circumference_fraction"),a.circle_size=a.cfg.circle_size!=null?a.cfg.circle_size:l*he(a.cfg,"circle_fraction"),a.slider_thickness=l*he(a.cfg,"slider_fraction")}function Tt(a,l){a.canvas.width=l[0],a.canvas.height=l[1],a.width=a.canvas.width,a.height=a.canvas.height,Eo(a)}function So(a){let l=a[0]?.element.width,c=a[0]?.element.height;for(let p of a)(p.element.width!=l||p.element.height!=c)&&console.log("Warning: images don't have the same resolution"),l=Math.max(l,p.element.width),c=Math.max(c,p.element.height);return[l,c]}function xr(a,l){if(a.length<2)throw`image_urls must contain at least two images, not ${a.length}`;let c=[],p=0,m=a.length;for(let T=0;T<m;++T){let O={url:a[T],element:document.createElement("img"),label:`${T}`};c.push(O),O.element.onload=()=>{++p,p==m&&l(c,So(c))},O.element.src=O.url}}function Tr(a){return a.images.unshift(a.images.pop()),!0}function Ar(a){return a.images=a.new_images,Tt(a,a.new_image_resolution),!0}function Do(a){a.circle_check.checked=!1,a.horizontal_check.checked=!1,a.vertical_check.checked=!1}function Jt(a){if(a.ctrl_data!=null)switch(Do(a.ctrl_data),a.current_mode){case"circle":a.ctrl_data.circle_check.checked=!0;break;case"horizontal":a.ctrl_data.horizontal_check.checked=!0;break;case"vertical":a.ctrl_data.vertical_check.checked=!0;break;default:throw`unsupported mode: ${a.current_mode}`}}function Zt(a,l){return c=>{if(!c.target.checked){Jt(a);return}a.next_mode=l,oe(a,3)}}function kr(a,l){a.ctrl_data=l,l.circle_check.onclick=Zt(a,"circle"),l.horizontal_check.onclick=Zt(a,"horizontal"),l.vertical_check.onclick=Zt(a,"vertical"),l.revolve_imgs_button.onclick=()=>{oe(a,1)}}function At(a,l){let c=a.canvas.getBoundingClientRect(),p=a.width/c.width,m=a.height/c.height;a.mouse_pos=[(l.clientX-c.left)*p,(l.clientY-c.top)*m]}function Cr(){let a="",l="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(let c=0;c<12;c++)a+=l.charAt(Math.floor(Math.random()*36));return a}function Sr(a){a.canvas.onmousemove=l=>{At(a,l),oe(a,4)},a.canvas.onmouseleave=()=>{oe(a,5)},a.revolve_imgs_on_click&&(a.canvas.ontouchstart=()=>{a.touching=!0},a.canvas.onmousedown=()=>{a.touching||oe(a,1)}),a.canvas.matches(":hover")&&oe(a,4),a.canvas.onfocus=()=>{document.body.style.userSelect="none"},a.canvas.onblur=()=>{document.body.style.userSelect="text",a.touching=!1}}function Dr(a){a.canvas.onmousemove=null,a.canvas.onmouseleave=null,a.canvas.ontouchstart=null,a.canvas.onmousedown=null,a.canvas.onfocus=null,a.canvas.onblur=null,a.canvas.style.cursor="default",document.body.style.userSelect="text",a.touching=!1,oe(a,5)}function Or(a){return a.render_circle=!0,a.canvas.style.cursor="none",!1}function Lr(a){return en(a,4),a.canvas.style.cursor="default",!0}function Oo(a){a.ctx.beginPath(),a.ctx.arc(a.mouse_pos[0],a.mouse_pos[1],a.circle_size-1,0,Math.PI*2),a.ctx.lineTo(a.width,0),a.ctx.lineTo(0,0),a.ctx.lineTo(0,a.height),a.ctx.lineTo(a.width,a.height),a.ctx.lineTo(a.width,0),a.ctx.closePath(),a.ctx.save(),a.ctx.clip(),a.ctx.drawImage(a.images[0]?.element,0,0,a.width,a.height),a.ctx.restore()}function Er(a,l,c){a.ctx.beginPath(),a.ctx.arc(a.mouse_pos[0],a.mouse_pos[1],a.circle_size,l,c),c-l!=Math.PI*2&&a.ctx.lineTo(a.mouse_pos[0],a.mouse_pos[1]),a.ctx.closePath()}function Lo(a,l,c,p){Er(a,c,p),a.ctx.save(),a.ctx.clip(),a.ctx.drawImage(a.images[l]?.element,0,0,a.width,a.height),a.ctx.restore(),a.show_circle&&(Er(a,c,p),a.ctx.strokeStyle="black",a.ctx.lineWidth=a.circumference_thickness,a.ctx.stroke())}function Ir(a){if(a.render_circle){a.ctx.clearRect(0,0,a.width,a.height),Oo(a);for(let l=1;l<a.images_len;++l){let c=(l-1)*Math.PI*2/(a.images_len-1),p=l*Math.PI*2/(a.images_len-1);Lo(a,l,c,p)}}else a.ctx.clearRect(0,0,a.width,a.height),a.ctx.drawImage(a.images[0]?.element,0,0,a.width,a.height);a.render_circle=!1}function tn(a){a.canvas.onmousedown=()=>{a.held_down=!0,oe(a,6)},a.canvas.onmouseup=()=>{a.held_down=!1},document.onmouseup=()=>{a.held_down=!1},a.canvas.onmousemove=l=>{At(a,l),oe(a,7)},a.current_mode=="horizontal"?a.canvas.onmouseenter=()=>{a.canvas.style.cursor="ew-resize"}:a.canvas.onmouseenter=()=>{a.canvas.style.cursor="ns-resize"},a.canvas.onmouseleave=()=>{a.canvas.style.cursor="default"},a.canvas.onfocus=()=>{document.body.style.userSelect="none"},a.canvas.onblur=()=>{document.body.style.userSelect="text"}}function nn(a){a.canvas.onmousedown=null,a.canvas.onmouseup=null,document.onmouseup=null,a.canvas.onmouseup=null,a.canvas.onmousemove=null,a.canvas.onmouseenter=null,a.canvas.onmouseleave=null,a.canvas.onfocus=null,a.canvas.onblur=null,a.held_down=!1,a.canvas.style.cursor="default",document.body.style.userSelect="text"}function Nr(a,l){return oe(a,8),a.start_timestamp=l,a.start_pos=a.slider_pos,a.current_mode=="horizontal"?a.target_pos=a.mouse_pos[0]/a.width:a.target_pos=a.mouse_pos[1]/a.height,!0}function Mr(a,l){return a.held_down&&(a.current_mode=="horizontal"?a.target_pos=a.mouse_pos[0]/a.width:a.target_pos=a.mouse_pos[1]/a.height,a.start_pos=a.target_pos,a.slider_pos=a.target_pos),!0}function Hr(a,l){let p=(l-a.start_timestamp)/a.slider_time;return p=Math.min(Math.max(p,0),1),p=a.rate_function(p),a.slider_pos=(1-p)*a.start_pos+p*a.target_pos,a.slider_pos==a.target_pos}function Io(a){a.ctx.beginPath(),a.current_mode=="horizontal"?(a.ctx.moveTo(a.slider_pos*a.width,0),a.ctx.lineTo(a.slider_pos*a.width,a.height)):(a.ctx.moveTo(0,a.slider_pos*a.height),a.ctx.lineTo(a.width,a.slider_pos*a.height)),a.ctx.closePath(),a.ctx.strokeStyle="black",a.ctx.lineWidth=a.slider_thickness,a.ctx.stroke()}function No(a){a.ctx.beginPath(),a.current_mode=="horizontal"?a.ctx.rect(a.slider_pos*a.width,0,a.width,a.height):a.ctx.rect(0,a.slider_pos*a.height,a.width,a.height),a.ctx.closePath(),a.ctx.save(),a.ctx.clip(),a.ctx.clearRect(0,0,a.width,a.height),a.ctx.drawImage(a.images[1]?.element,0,0,a.width,a.height),a.ctx.restore()}function rn(a){a.ctx.clearRect(0,0,a.width,a.height),a.ctx.drawImage(a.images[0]?.element,0,0,a.width,a.height),a.show_slider&&Io(a),No(a)}function Mo(a){switch(a.current_mode){case"undefined":break;case"circle":Dr(a);break;case"horizontal":nn(a);break;case"vertical":nn(a);break;default:throw`unsupported mode: ${a.current_mode}`}}function Ho(a){switch(a.current_mode=a.next_mode,a.next_mode){case"circle":Sr(a);break;case"horizontal":tn(a);break;case"vertical":tn(a);break;default:throw`unsupported mode: ${a.current_mode}`}Jt(a)}function Pr(a){return Mo(a),Ho(a),!0}function Po(a,l){let c=[];for(;a.task_stack.length;){let p=a.task_stack.pop(),m;switch(p){case 0:m=!0;break;case 3:m=Pr(a);break;case 1:m=Tr(a);break;case 2:m=Ar(a);break;case 4:m=Or(a);break;case 5:m=Lr(a);break;case 6:m=Nr(a,l);break;case 7:m=Mr(a,l);break;case 8:m=Hr(a,l);break;default:throw`unknown task: ${p}`}m||c.push(p)}a.task_stack=c}function jo(a){switch(a.current_mode){case"circle":Ir(a);break;case"horizontal":rn(a);break;case"vertical":rn(a);break;default:throw`unsupported mode: ${a.current_mode}`}}function Ro(a,l){Po(a,l),jo(a),a.task_stack.length?jr(a):a.next_update_queued=!1}function jr(a){a.next_update_queued=!0,window.requestAnimationFrame(l=>{Ro(a,l)})}function qo(a){a.next_update_queued||jr(a)}function en(a,l){let c=a.task_stack.indexOf(l);c!=-1&&a.task_stack.splice(c,1)}function oe(a,l){en(a,l),a.task_stack.push(l),qo(a)}function Fo(a){if(a.dataset.in_use==="y")throw`the canvas with the id '${a.id}' is already in use`;a.dataset.in_use="y"}function Rr(a,l,c={},p){Fo(l.canvas),xr(a,(m,T)=>{let O={cfg:c,images:m,images_len:m.length,new_images:[],new_image_resolution:[0,0],canvas:l.canvas,ctx:l,width:0,height:0,ctrl_data:void 0,mouse_pos:[0,0],held_down:!1,next_mode:he(c,"start_mode"),current_mode:"undefined",task_stack:[],next_update_queued:!1,circumference_thickness:0,render_circle:!1,circle_size:0,show_circle:he(c,"show_circle"),revolve_imgs_on_click:he(c,"revolve_imgs_on_click"),touching:!1,slider_thickness:0,slider_pos:he(c,"start_slider_pos"),slider_time:he(c,"slider_time"),rate_function:he(c,"rate_function"),show_slider:he(c,"show_slider"),start_timestamp:0,start_pos:0,target_pos:0};Tt(O,T),p?.(O),oe(O,3)})}function qr(a){let l=document.getElementById(a),c=l.getContext("2d");return l.tabIndex=1,c}function on(a,l,c){let p=document.createElement("input");p.type="checkbox",p.id=a;let m=document.createElement("label");m.innerHTML=l,m.htmlFor=p.id;let T=document.createElement("br");return c.appendChild(p),c.appendChild(m),c.appendChild(T),p}function Bo(a,l){let c=document.createElement("button");c.innerHTML=a;let p=document.createElement("br");return l.appendChild(c),l.appendChild(p),c}function Fr(a,l=Cr()){let c=document.getElementById(a);if(c==null)throw`controls_id '${a}' isn't valid`;return{circle_check:on(`${l}_circle_button`,"Circle",c),horizontal_check:on(`${l}_horizontal_button`,"Horizontal",c),vertical_check:on(`${l}_vertical_button`,"Vertical",c),revolve_imgs_button:Bo("Revolve Images",c)}}function Br(a,l,c={},p=()=>{}){let m=c.controls_id!=null?Fr(c.controls_id,c.key):void 0;Rr(a,qr(l),c,T=>{m!=null&&kr(T,m),p(T)})}function $o(a,l,c){Br(l,a,c)}window.addCompareView=$o;var _s=yr(Yr());window.Headroom=xn.default;window.Sticky=Jr();document.addEventListener("DOMContentLoaded",function(){"use strict";var a=new Sticky("#head"),l={},c=new xn.default(document.querySelector("header"),l);c.init(),document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(p=>{p.addEventListener("shown.bs.tab",function(m){var T=m.target.getAttribute("data-bs-target"),O;if(document.querySelector(T+" div[id]")!==null&&(O=document.querySelector(T+" div[id]").data,typeof O.updateSize=="function")){var D=O.getLayers().item(0).getSource(),I=D.getTileGrid().getExtent();O.updateSize(),O.getView().fit(I)}})})});})();
/*! Bundled license information:

headroom.js/dist/headroom.js:
  (*!
   * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
   * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
   * License: MIT
   *)

howler/dist/howler.js:
  (*!
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
  (*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/tab.js:
  (*!
    * Bootstrap tab.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

sticky-js/dist/sticky.compile.js:
  (**
   * Sticky.js
   * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
   *
   * @version 1.3.0
   * @author Rafal Galus <biuro@rafalgalus.pl>
   * @website https://rgalus.github.io/sticky-js/
   * @repo https://github.com/rgalus/sticky-js
   * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
   *)

jquery/dist-module/jquery.module.js:
  (*!
   * jQuery JavaScript Library v4.0.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.com/license/
   *
   * Date: 2026-01-18T00:20Z
   *)

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.7 | MIT *)
*/

;
(() => {
  // node_modules/ol/asserts.js
  function assert(assertion, errorMessage) {
    if (!assertion) {
      throw new Error(errorMessage);
    }
  }

  // node_modules/ol/extent/Relationship.js
  var Relationship_default = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
  };

  // node_modules/ol/extent.js
  function boundingExtent(coordinates2) {
    const extent = createEmpty();
    for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
      extendCoordinate(extent, coordinates2[i]);
    }
    return extent;
  }
  function _boundingExtentXYs(xs, ys, dest) {
    const minX = Math.min.apply(null, xs);
    const minY = Math.min.apply(null, ys);
    const maxX = Math.max.apply(null, xs);
    const maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, dest);
  }
  function clone(extent, dest) {
    if (dest) {
      dest[0] = extent[0];
      dest[1] = extent[1];
      dest[2] = extent[2];
      dest[3] = extent[3];
      return dest;
    }
    return extent.slice();
  }
  function closestSquaredDistanceXY(extent, x, y) {
    let dx, dy;
    if (x < extent[0]) {
      dx = extent[0] - x;
    } else if (extent[2] < x) {
      dx = x - extent[2];
    } else {
      dx = 0;
    }
    if (y < extent[1]) {
      dy = extent[1] - y;
    } else if (extent[3] < y) {
      dy = y - extent[3];
    } else {
      dy = 0;
    }
    return dx * dx + dy * dy;
  }
  function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
  }
  function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
  }
  function coordinateRelationship(extent, coordinate) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const x = coordinate[0];
    const y = coordinate[1];
    let relationship = Relationship_default.UNKNOWN;
    if (x < minX) {
      relationship = relationship | Relationship_default.LEFT;
    } else if (x > maxX) {
      relationship = relationship | Relationship_default.RIGHT;
    }
    if (y < minY) {
      relationship = relationship | Relationship_default.BELOW;
    } else if (y > maxY) {
      relationship = relationship | Relationship_default.ABOVE;
    }
    if (relationship === Relationship_default.UNKNOWN) {
      relationship = Relationship_default.INTERSECTING;
    }
    return relationship;
  }
  function createEmpty() {
    return [Infinity, Infinity, -Infinity, -Infinity];
  }
  function createOrUpdate(minX, minY, maxX, maxY, dest) {
    if (dest) {
      dest[0] = minX;
      dest[1] = minY;
      dest[2] = maxX;
      dest[3] = maxY;
      return dest;
    }
    return [minX, minY, maxX, maxY];
  }
  function createOrUpdateEmpty(dest) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
  }
  function createOrUpdateFromCoordinate(coordinate, dest) {
    const x = coordinate[0];
    const y = coordinate[1];
    return createOrUpdate(x, y, x, y, dest);
  }
  function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
  }
  function equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
  }
  function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) {
      extent1[0] = extent2[0];
    }
    if (extent2[2] > extent1[2]) {
      extent1[2] = extent2[2];
    }
    if (extent2[1] < extent1[1]) {
      extent1[1] = extent2[1];
    }
    if (extent2[3] > extent1[3]) {
      extent1[3] = extent2[3];
    }
    return extent1;
  }
  function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) {
      extent[0] = coordinate[0];
    }
    if (coordinate[0] > extent[2]) {
      extent[2] = coordinate[0];
    }
    if (coordinate[1] < extent[1]) {
      extent[1] = coordinate[1];
    }
    if (coordinate[1] > extent[3]) {
      extent[3] = coordinate[1];
    }
  }
  function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for (; offset < end; offset += stride) {
      extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    }
    return extent;
  }
  function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
  }
  function forEachCorner(extent, callback) {
    let val;
    val = callback(getBottomLeft(extent));
    if (val) {
      return val;
    }
    val = callback(getBottomRight(extent));
    if (val) {
      return val;
    }
    val = callback(getTopRight(extent));
    if (val) {
      return val;
    }
    val = callback(getTopLeft(extent));
    if (val) {
      return val;
    }
    return false;
  }
  function getArea(extent) {
    let area = 0;
    if (!isEmpty(extent)) {
      area = getWidth(extent) * getHeight(extent);
    }
    return area;
  }
  function getBottomLeft(extent) {
    return [extent[0], extent[1]];
  }
  function getBottomRight(extent) {
    return [extent[2], extent[1]];
  }
  function getCenter(extent) {
    return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
  }
  function getCorner(extent, corner) {
    let coordinate;
    if (corner === "bottom-left") {
      coordinate = getBottomLeft(extent);
    } else if (corner === "bottom-right") {
      coordinate = getBottomRight(extent);
    } else if (corner === "top-left") {
      coordinate = getTopLeft(extent);
    } else if (corner === "top-right") {
      coordinate = getTopRight(extent);
    } else {
      throw new Error("Invalid corner");
    }
    return coordinate;
  }
  function getForViewAndSize(center, resolution, rotation, size, dest) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(
      center,
      resolution,
      rotation,
      size
    );
    return createOrUpdate(
      Math.min(x0, x1, x2, x3),
      Math.min(y0, y1, y2, y3),
      Math.max(x0, x1, x2, x3),
      Math.max(y0, y1, y2, y3),
      dest
    );
  }
  function getRotatedViewport(center, resolution, rotation, size) {
    const dx = resolution * size[0] / 2;
    const dy = resolution * size[1] / 2;
    const cosRotation = Math.cos(rotation);
    const sinRotation = Math.sin(rotation);
    const xCos = dx * cosRotation;
    const xSin = dx * sinRotation;
    const yCos = dy * cosRotation;
    const ySin = dy * sinRotation;
    const x = center[0];
    const y = center[1];
    return [
      x - xCos + ySin,
      y - xSin - yCos,
      x - xCos - ySin,
      y - xSin + yCos,
      x + xCos - ySin,
      y + xSin + yCos,
      x + xCos + ySin,
      y + xSin - yCos,
      x - xCos + ySin,
      y - xSin - yCos
    ];
  }
  function getHeight(extent) {
    return extent[3] - extent[1];
  }
  function getIntersection(extent1, extent2, dest) {
    const intersection = dest ? dest : createEmpty();
    if (intersects(extent1, extent2)) {
      if (extent1[0] > extent2[0]) {
        intersection[0] = extent1[0];
      } else {
        intersection[0] = extent2[0];
      }
      if (extent1[1] > extent2[1]) {
        intersection[1] = extent1[1];
      } else {
        intersection[1] = extent2[1];
      }
      if (extent1[2] < extent2[2]) {
        intersection[2] = extent1[2];
      } else {
        intersection[2] = extent2[2];
      }
      if (extent1[3] < extent2[3]) {
        intersection[3] = extent1[3];
      } else {
        intersection[3] = extent2[3];
      }
    } else {
      createOrUpdateEmpty(intersection);
    }
    return intersection;
  }
  function getTopLeft(extent) {
    return [extent[0], extent[3]];
  }
  function getTopRight(extent) {
    return [extent[2], extent[3]];
  }
  function getWidth(extent) {
    return extent[2] - extent[0];
  }
  function intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
  }
  function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
  }
  function returnOrUpdate(extent, dest) {
    if (dest) {
      dest[0] = extent[0];
      dest[1] = extent[1];
      dest[2] = extent[2];
      dest[3] = extent[3];
      return dest;
    }
    return extent;
  }
  function intersectsSegment(extent, start, end) {
    let intersects3 = false;
    const startRel = coordinateRelationship(extent, start);
    const endRel = coordinateRelationship(extent, end);
    if (startRel === Relationship_default.INTERSECTING || endRel === Relationship_default.INTERSECTING) {
      intersects3 = true;
    } else {
      const minX = extent[0];
      const minY = extent[1];
      const maxX = extent[2];
      const maxY = extent[3];
      const startX = start[0];
      const startY = start[1];
      const endX = end[0];
      const endY = end[1];
      const slope = (endY - startY) / (endX - startX);
      let x, y;
      if (!!(endRel & Relationship_default.ABOVE) && !(startRel & Relationship_default.ABOVE)) {
        x = endX - (endY - maxY) / slope;
        intersects3 = x >= minX && x <= maxX;
      }
      if (!intersects3 && !!(endRel & Relationship_default.RIGHT) && !(startRel & Relationship_default.RIGHT)) {
        y = endY - (endX - maxX) * slope;
        intersects3 = y >= minY && y <= maxY;
      }
      if (!intersects3 && !!(endRel & Relationship_default.BELOW) && !(startRel & Relationship_default.BELOW)) {
        x = endX - (endY - minY) / slope;
        intersects3 = x >= minX && x <= maxX;
      }
      if (!intersects3 && !!(endRel & Relationship_default.LEFT) && !(startRel & Relationship_default.LEFT)) {
        y = endY - (endX - minX) * slope;
        intersects3 = y >= minY && y <= maxY;
      }
    }
    return intersects3;
  }
  function applyTransform(extent, transformFn, dest, stops) {
    if (isEmpty(extent)) {
      return createOrUpdateEmpty(dest);
    }
    let coordinates2 = [];
    if (stops > 1) {
      const width = extent[2] - extent[0];
      const height = extent[3] - extent[1];
      for (let i = 0; i < stops; ++i) {
        coordinates2.push(
          extent[0] + width * i / stops,
          extent[1],
          extent[2],
          extent[1] + height * i / stops,
          extent[2] - width * i / stops,
          extent[3],
          extent[0],
          extent[3] - height * i / stops
        );
      }
    } else {
      coordinates2 = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3]
      ];
    }
    transformFn(coordinates2, coordinates2, 2);
    const xs = [];
    const ys = [];
    for (let i = 0, l = coordinates2.length; i < l; i += 2) {
      xs.push(coordinates2[i]);
      ys.push(coordinates2[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, dest);
  }
  function wrapX(extent, projection) {
    const projectionExtent = projection.getExtent();
    const center = getCenter(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
      const worldWidth = getWidth(projectionExtent);
      const worldsAway = Math.floor(
        (center[0] - projectionExtent[0]) / worldWidth
      );
      const offset = worldsAway * worldWidth;
      extent[0] -= offset;
      extent[2] -= offset;
    }
    return extent;
  }
  function wrapAndSliceX(extent, projection, multiWorld) {
    if (projection.canWrapX()) {
      const projectionExtent = projection.getExtent();
      if (!isFinite(extent[0]) || !isFinite(extent[2])) {
        return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
      }
      wrapX(extent, projection);
      const worldWidth = getWidth(projectionExtent);
      if (getWidth(extent) > worldWidth && !multiWorld) {
        return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
      }
      if (extent[0] < projectionExtent[0]) {
        return [
          [extent[0] + worldWidth, extent[1], projectionExtent[2], extent[3]],
          [projectionExtent[0], extent[1], extent[2], extent[3]]
        ];
      }
      if (extent[2] > projectionExtent[2]) {
        return [
          [extent[0], extent[1], projectionExtent[2], extent[3]],
          [projectionExtent[0], extent[1], extent[2] - worldWidth, extent[3]]
        ];
      }
    }
    return [extent];
  }

  // node_modules/ol/format/IIIFInfo.js
  var Versions = {
    VERSION1: "version1",
    VERSION2: "version2",
    VERSION3: "version3"
  };
  var IIIF_PROFILE_VALUES = {};
  IIIF_PROFILE_VALUES[Versions.VERSION1] = {
    "level0": {
      supports: [],
      formats: [],
      qualities: ["native"]
    },
    "level1": {
      supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"],
      formats: ["jpg"],
      qualities: ["native"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["native", "color", "grey", "bitonal"]
    }
  };
  IIIF_PROFILE_VALUES[Versions.VERSION2] = {
    "level0": {
      supports: [],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level1": {
      supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByDistortedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["default", "bitonal"]
    }
  };
  IIIF_PROFILE_VALUES[Versions.VERSION3] = {
    "level0": {
      supports: [],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level1": {
      supports: ["regionByPx", "regionSquare", "sizeByW", "sizeByH", "sizeByWh"],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionSquare",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["default"]
    }
  };
  IIIF_PROFILE_VALUES["none"] = {
    "none": {
      supports: [],
      formats: [],
      qualities: []
    }
  };
  var COMPLIANCE_VERSION1 = /^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/;
  var COMPLIANCE_VERSION2 = /^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/;
  var COMPLIANCE_VERSION3 = /(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;
  function generateVersion1Options(iiifInfo) {
    let levelProfile = iiifInfo.getComplianceLevelSupportedFeatures();
    if (levelProfile === void 0) {
      levelProfile = IIIF_PROFILE_VALUES[Versions.VERSION1]["level0"];
    }
    return {
      url: iiifInfo.imageInfo["@id"] === void 0 ? void 0 : iiifInfo.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g, ""),
      supports: levelProfile.supports,
      formats: [
        ...levelProfile.formats,
        iiifInfo.imageInfo.formats === void 0 ? [] : iiifInfo.imageInfo.formats
      ],
      qualities: [
        ...levelProfile.qualities,
        iiifInfo.imageInfo.qualities === void 0 ? [] : iiifInfo.imageInfo.qualities
      ],
      resolutions: iiifInfo.imageInfo.scale_factors,
      tileSize: iiifInfo.imageInfo.tile_width !== void 0 ? iiifInfo.imageInfo.tile_height !== void 0 ? [iiifInfo.imageInfo.tile_width, iiifInfo.imageInfo.tile_height] : [iiifInfo.imageInfo.tile_width, iiifInfo.imageInfo.tile_width] : iiifInfo.imageInfo.tile_height != void 0 ? [iiifInfo.imageInfo.tile_height, iiifInfo.imageInfo.tile_height] : void 0
    };
  }
  function generateVersion2Options(iiifInfo) {
    const levelProfile = iiifInfo.getComplianceLevelSupportedFeatures(), additionalProfile = Array.isArray(iiifInfo.imageInfo.profile) && iiifInfo.imageInfo.profile.length > 1, profileSupports = additionalProfile && iiifInfo.imageInfo.profile[1].supports ? iiifInfo.imageInfo.profile[1].supports : [], profileFormats = additionalProfile && iiifInfo.imageInfo.profile[1].formats ? iiifInfo.imageInfo.profile[1].formats : [], profileQualities = additionalProfile && iiifInfo.imageInfo.profile[1].qualities ? iiifInfo.imageInfo.profile[1].qualities : [];
    return {
      url: iiifInfo.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g, ""),
      sizes: iiifInfo.imageInfo.sizes === void 0 ? void 0 : iiifInfo.imageInfo.sizes.map(function(size) {
        return [size.width, size.height];
      }),
      tileSize: iiifInfo.imageInfo.tiles === void 0 ? void 0 : [
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.width;
        })[0],
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.height === void 0 ? tile.width : tile.height;
        })[0]
      ],
      resolutions: iiifInfo.imageInfo.tiles === void 0 ? void 0 : iiifInfo.imageInfo.tiles.map(function(tile) {
        return tile.scaleFactors;
      })[0],
      supports: [...levelProfile.supports, ...profileSupports],
      formats: [...levelProfile.formats, ...profileFormats],
      qualities: [...levelProfile.qualities, ...profileQualities]
    };
  }
  function generateVersion3Options(iiifInfo) {
    const levelProfile = iiifInfo.getComplianceLevelSupportedFeatures(), formats = iiifInfo.imageInfo.extraFormats === void 0 ? levelProfile.formats : [...levelProfile.formats, ...iiifInfo.imageInfo.extraFormats], preferredFormat = iiifInfo.imageInfo.preferredFormats !== void 0 && Array.isArray(iiifInfo.imageInfo.preferredFormats) && iiifInfo.imageInfo.preferredFormats.length > 0 ? iiifInfo.imageInfo.preferredFormats.filter(function(format) {
      return ["jpg", "png", "gif"].includes(format);
    }).reduce(function(acc, format) {
      return acc === void 0 && formats.includes(format) ? format : acc;
    }, void 0) : void 0;
    return {
      url: iiifInfo.imageInfo["id"],
      sizes: iiifInfo.imageInfo.sizes === void 0 ? void 0 : iiifInfo.imageInfo.sizes.map(function(size) {
        return [size.width, size.height];
      }),
      tileSize: iiifInfo.imageInfo.tiles === void 0 ? void 0 : [
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.width;
        })[0],
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.height;
        })[0]
      ],
      resolutions: iiifInfo.imageInfo.tiles === void 0 ? void 0 : iiifInfo.imageInfo.tiles.map(function(tile) {
        return tile.scaleFactors;
      })[0],
      supports: iiifInfo.imageInfo.extraFeatures === void 0 ? levelProfile.supports : [...levelProfile.supports, ...iiifInfo.imageInfo.extraFeatures],
      formats,
      qualities: iiifInfo.imageInfo.extraQualities === void 0 ? levelProfile.qualities : [...levelProfile.qualities, ...iiifInfo.imageInfo.extraQualities],
      preferredFormat
    };
  }
  var versionFunctions = {};
  versionFunctions[Versions.VERSION1] = generateVersion1Options;
  versionFunctions[Versions.VERSION2] = generateVersion2Options;
  versionFunctions[Versions.VERSION3] = generateVersion3Options;
  var IIIFInfo = class {
    /**
     * @param {string|ImageInformationResponse} imageInfo
     * Deserialized image information JSON response object or JSON response as string
     */
    constructor(imageInfo) {
      this.setImageInfo(imageInfo);
    }
    /**
     * @param {string|ImageInformationResponse} imageInfo
     * Deserialized image information JSON response object or JSON response as string
     * @api
     */
    setImageInfo(imageInfo) {
      if (typeof imageInfo == "string") {
        this.imageInfo = JSON.parse(imageInfo);
      } else {
        this.imageInfo = imageInfo;
      }
    }
    /**
     * @return {Versions|undefined} Major IIIF version.
     * @api
     */
    getImageApiVersion() {
      if (this.imageInfo === void 0) {
        return void 0;
      }
      let context = this.imageInfo["@context"] || "ol-no-context";
      if (typeof context == "string") {
        context = [context];
      }
      for (let i = 0; i < context.length; i++) {
        switch (context[i]) {
          case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
          case "http://iiif.io/api/image/1/context.json":
            return Versions.VERSION1;
          case "http://iiif.io/api/image/2/context.json":
            return Versions.VERSION2;
          case "http://iiif.io/api/image/3/context.json":
            return Versions.VERSION3;
          case "ol-no-context":
            if (this.getComplianceLevelEntryFromProfile(Versions.VERSION1) && this.imageInfo.identifier) {
              return Versions.VERSION1;
            }
            break;
          default:
        }
      }
      assert(
        false,
        "Cannot determine IIIF Image API version from provided image information JSON"
      );
    }
    /**
     * @param {Versions} version Optional IIIF image API version
     * @return {string|undefined} Compliance level as it appears in the IIIF image information
     * response.
     */
    getComplianceLevelEntryFromProfile(version) {
      if (this.imageInfo === void 0 || this.imageInfo.profile === void 0) {
        return void 0;
      }
      if (version === void 0) {
        version = this.getImageApiVersion();
      }
      switch (version) {
        case Versions.VERSION1:
          if (COMPLIANCE_VERSION1.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          break;
        case Versions.VERSION3:
          if (COMPLIANCE_VERSION3.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          break;
        case Versions.VERSION2:
          if (typeof this.imageInfo.profile === "string" && COMPLIANCE_VERSION2.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          if (Array.isArray(this.imageInfo.profile) && this.imageInfo.profile.length > 0 && typeof this.imageInfo.profile[0] === "string" && COMPLIANCE_VERSION2.test(this.imageInfo.profile[0])) {
            return this.imageInfo.profile[0];
          }
          break;
        default:
      }
      return void 0;
    }
    /**
     * @param {Versions} version Optional IIIF image API version
     * @return {string} Compliance level, on of 'level0', 'level1' or 'level2' or undefined
     */
    getComplianceLevelFromProfile(version) {
      const complianceLevel = this.getComplianceLevelEntryFromProfile(version);
      if (complianceLevel === void 0) {
        return void 0;
      }
      const level2 = complianceLevel.match(/level[0-2](?:\.json)?$/g);
      return Array.isArray(level2) ? level2[0].replace(".json", "") : void 0;
    }
    /**
     * @return {SupportedFeatures|undefined} Image formats, qualities and region / size calculation
     * methods that are supported by the IIIF service.
     */
    getComplianceLevelSupportedFeatures() {
      if (this.imageInfo === void 0) {
        return void 0;
      }
      const version = this.getImageApiVersion();
      const level2 = this.getComplianceLevelFromProfile(version);
      if (level2 === void 0) {
        return IIIF_PROFILE_VALUES["none"]["none"];
      }
      return IIIF_PROFILE_VALUES[version][level2];
    }
    /**
     * @param {PreferredOptions} [preferredOptions] Optional options for preferred format and quality.
     * @return {import("../source/IIIF.js").Options|undefined} IIIF tile source ready constructor options.
     * @api
     */
    getTileSourceOptions(preferredOptions) {
      const options = preferredOptions || {}, version = this.getImageApiVersion();
      if (version === void 0) {
        return void 0;
      }
      const imageOptions = version === void 0 ? void 0 : versionFunctions[version](this);
      if (imageOptions === void 0) {
        return void 0;
      }
      return {
        url: imageOptions.url,
        version,
        size: [this.imageInfo.width, this.imageInfo.height],
        sizes: imageOptions.sizes,
        format: options.format !== void 0 && imageOptions.formats.includes(options.format) ? options.format : imageOptions.preferredFormat !== void 0 ? imageOptions.preferredFormat : "jpg",
        supports: imageOptions.supports,
        quality: options.quality && imageOptions.qualities.includes(options.quality) ? options.quality : imageOptions.qualities.includes("native") ? "native" : "default",
        resolutions: Array.isArray(imageOptions.resolutions) ? imageOptions.resolutions.sort(function(a, b) {
          return b - a;
        }) : void 0,
        tileSize: imageOptions.tileSize
      };
    }
  };
  var IIIFInfo_default = IIIFInfo;

  // node_modules/ol/size.js
  function hasArea(size) {
    return size[0] > 0 && size[1] > 0;
  }
  function scale(size, ratio, dest) {
    if (dest === void 0) {
      dest = [0, 0];
    }
    dest[0] = size[0] * ratio + 0.5 | 0;
    dest[1] = size[1] * ratio + 0.5 | 0;
    return dest;
  }
  function toSize(size, dest) {
    if (Array.isArray(size)) {
      return size;
    }
    if (dest === void 0) {
      dest = [size, size];
    } else {
      dest[0] = size;
      dest[1] = size;
    }
    return dest;
  }

  // node_modules/ol/TileRange.js
  var TileRange = class {
    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     */
    constructor(minX, maxX, minY, maxY) {
      this.minX = minX;
      this.maxX = maxX;
      this.minY = minY;
      this.maxY = maxY;
    }
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {boolean} Contains tile coordinate.
     */
    contains(tileCoord) {
      return this.containsXY(tileCoord[1], tileCoord[2]);
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Contains.
     */
    containsTileRange(tileRange) {
      return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
    }
    /**
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @return {boolean} Contains coordinate.
     */
    containsXY(x, y) {
      return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Equals.
     */
    equals(tileRange) {
      return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     */
    extend(tileRange) {
      if (tileRange.minX < this.minX) {
        this.minX = tileRange.minX;
      }
      if (tileRange.maxX > this.maxX) {
        this.maxX = tileRange.maxX;
      }
      if (tileRange.minY < this.minY) {
        this.minY = tileRange.minY;
      }
      if (tileRange.maxY > this.maxY) {
        this.maxY = tileRange.maxY;
      }
    }
    /**
     * @return {number} Height.
     */
    getHeight() {
      return this.maxY - this.minY + 1;
    }
    /**
     * @return {import("./size.js").Size} Size.
     */
    getSize() {
      return [this.getWidth(), this.getHeight()];
    }
    /**
     * @return {number} Width.
     */
    getWidth() {
      return this.maxX - this.minX + 1;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Intersects.
     */
    intersects(tileRange) {
      return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
    }
  };
  function createOrUpdate2(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== void 0) {
      tileRange.minX = minX;
      tileRange.maxX = maxX;
      tileRange.minY = minY;
      tileRange.maxY = maxY;
      return tileRange;
    }
    return new TileRange(minX, maxX, minY, maxY);
  }
  var TileRange_default = TileRange;

  // node_modules/ol/array.js
  function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function linearFindNearest(arr, target, direction) {
    if (arr[0] <= target) {
      return 0;
    }
    const n = arr.length;
    if (target <= arr[n - 1]) {
      return n - 1;
    }
    if (typeof direction === "function") {
      for (let i = 1; i < n; ++i) {
        const candidate = arr[i];
        if (candidate === target) {
          return i;
        }
        if (candidate < target) {
          if (direction(target, arr[i - 1], candidate) > 0) {
            return i - 1;
          }
          return i;
        }
      }
      return n - 1;
    }
    if (direction > 0) {
      for (let i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
      return n - 1;
    }
    if (direction < 0) {
      for (let i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
      return n - 1;
    }
    for (let i = 1; i < n; ++i) {
      if (arr[i] == target) {
        return i;
      }
      if (arr[i] < target) {
        if (arr[i - 1] - target < target - arr[i]) {
          return i - 1;
        }
        return i;
      }
    }
    return n - 1;
  }
  function extend2(arr, data) {
    const extension = Array.isArray(data) ? data : [data];
    const length = extension.length;
    for (let i = 0; i < length; i++) {
      arr[arr.length] = extension[i];
    }
  }
  function equals2(arr1, arr2) {
    const len1 = arr1.length;
    if (len1 !== arr2.length) {
      return false;
    }
    for (let i = 0; i < len1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  function isSorted(arr, func, strict) {
    const compare = func || ascending;
    return arr.every(function(currentVal, index) {
      if (index === 0) {
        return true;
      }
      const res = compare(arr[index - 1], currentVal);
      return !(res > 0 || strict && res === 0);
    });
  }

  // node_modules/ol/geom/flat/contains.js
  function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
    const outside = forEachCorner(
      extent,
      /**
       * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {boolean} Contains (x, y).
       */
      function(coordinate) {
        return !linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          coordinate[0],
          coordinate[1]
        );
      }
    );
    return !outside;
  }
  function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
    let wn = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      if (y1 <= y) {
        if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
          wn++;
        }
      } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
        wn--;
      }
      x1 = x2;
      y1 = y2;
    }
    return wn !== 0;
  }
  function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) {
      return false;
    }
    if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
      return false;
    }
    for (let i = 1, ii = ends.length; i < ii; ++i) {
      if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
        return false;
      }
    }
    return true;
  }

  // node_modules/ol/geom/flat/segments.js
  function forEach(flatCoordinates, offset, end, stride, callback) {
    let ret;
    offset += stride;
    for (; offset < end; offset += stride) {
      ret = callback(
        flatCoordinates.slice(offset - stride, offset),
        flatCoordinates.slice(offset, offset + stride)
      );
      if (ret) {
        return ret;
      }
    }
    return false;
  }

  // node_modules/ol/geom/flat/intersectsextent.js
  function intersectsLineString(flatCoordinates, offset, end, stride, extent, coordinatesExtent) {
    coordinatesExtent = coordinatesExtent ?? extendFlatCoordinates(createEmpty(), flatCoordinates, offset, end, stride);
    if (!intersects(extent, coordinatesExtent)) {
      return false;
    }
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2] || coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
      return true;
    }
    return forEach(
      flatCoordinates,
      offset,
      end,
      stride,
      /**
       * @param {import("../../coordinate.js").Coordinate} point1 Start point.
       * @param {import("../../coordinate.js").Coordinate} point2 End point.
       * @return {boolean} `true` if the segment and the extent intersect,
       *     `false` otherwise.
       */
      function(point1, point2) {
        return intersectsSegment(extent, point1, point2);
      }
    );
  }
  function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
    if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[1]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[3]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[1]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[3]
    )) {
      return true;
    }
    return false;
  }
  function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
    if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
      return false;
    }
    if (ends.length === 1) {
      return true;
    }
    for (let i = 1, ii = ends.length; i < ii; ++i) {
      if (linearRingContainsExtent(
        flatCoordinates,
        ends[i - 1],
        ends[i],
        stride,
        extent
      )) {
        if (!intersectsLineString(
          flatCoordinates,
          ends[i - 1],
          ends[i],
          stride,
          extent
        )) {
          return false;
        }
      }
    }
    return true;
  }

  // node_modules/ol/math.js
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
      const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x1 = x2;
        y1 = y2;
      } else if (t > 0) {
        x1 += dx * t;
        y1 += dy * t;
      }
    }
    return squaredDistance(x, y, x1, y1);
  }
  function squaredDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
  }
  function solveLinearSystem(mat) {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      let maxRow = i;
      let maxEl = Math.abs(mat[i][i]);
      for (let r = i + 1; r < n; r++) {
        const absValue = Math.abs(mat[r][i]);
        if (absValue > maxEl) {
          maxEl = absValue;
          maxRow = r;
        }
      }
      if (maxEl === 0) {
        return null;
      }
      const tmp = mat[maxRow];
      mat[maxRow] = mat[i];
      mat[i] = tmp;
      for (let j = i + 1; j < n; j++) {
        const coef = -mat[j][i] / mat[i][i];
        for (let k = i; k < n + 1; k++) {
          if (i == k) {
            mat[j][k] = 0;
          } else {
            mat[j][k] += coef * mat[i][k];
          }
        }
      }
    }
    const x = new Array(n);
    for (let l = n - 1; l >= 0; l--) {
      x[l] = mat[l][n] / mat[l][l];
      for (let m = l - 1; m >= 0; m--) {
        mat[m][n] -= mat[m][l] * x[l];
      }
    }
    return x;
  }
  function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
  }
  function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
  }
  function modulo(a, b) {
    const r = a % b;
    return r * b < 0 ? r + b : r;
  }
  function lerp(a, b, x) {
    return a + x * (b - a);
  }
  function toFixed(n, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
  }
  function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
  }
  function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
  }
  function wrap(n, min, max) {
    if (n >= min && n < max) {
      return n;
    }
    const range = max - min;
    return ((n - min) % range + range) % range + min;
  }

  // node_modules/ol/util.js
  function abstract() {
    throw new Error("Unimplemented abstract method.");
  }
  var uidCounter_ = 0;
  function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
  }

  // node_modules/ol/tilecoord.js
  function createOrUpdate3(z, x, y, tileCoord) {
    if (tileCoord !== void 0) {
      tileCoord[0] = z;
      tileCoord[1] = x;
      tileCoord[2] = y;
      return tileCoord;
    }
    return [z, x, y];
  }
  function getKeyZXY(z, x, y) {
    return z + "/" + x + "/" + y;
  }
  function getCacheKey(source, sourceKey, z, x, y) {
    return `${getUid(source)},${sourceKey},${getKeyZXY(z, x, y)}`;
  }
  function hash(tileCoord) {
    return hashZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
  }
  function hashZXY(z, x, y) {
    return (x << z) + y;
  }
  function withinExtentAndZ(tileCoord, tileGrid) {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
      return false;
    }
    const tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) {
      return true;
    }
    return tileRange.containsXY(x, y);
  }

  // node_modules/ol/tilegrid/common.js
  var DEFAULT_MAX_ZOOM = 42;
  var DEFAULT_TILE_SIZE = 256;

  // node_modules/ol/tilegrid/TileGrid.js
  var tmpTileCoord = [0, 0, 0];
  var DECIMALS = 5;
  var TileGrid = class {
    /**
     * @param {Options} options Tile grid options.
     */
    constructor(options) {
      this.minZoom = options.minZoom !== void 0 ? options.minZoom : 0;
      this.resolutions_ = options.resolutions;
      assert(
        isSorted(
          this.resolutions_,
          /**
           * @param {number} a First resolution
           * @param {number} b Second resolution
           * @return {number} Comparison result
           */
          (a, b) => b - a,
          true
        ),
        "`resolutions` must be sorted in descending order"
      );
      let zoomFactor;
      if (!options.origins) {
        for (let i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
          if (!zoomFactor) {
            zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
          } else {
            if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
              zoomFactor = void 0;
              break;
            }
          }
        }
      }
      this.zoomFactor_ = zoomFactor;
      this.maxZoom = this.resolutions_.length - 1;
      this.origin_ = options.origin !== void 0 ? options.origin : null;
      this.origins_ = null;
      if (options.origins !== void 0) {
        this.origins_ = options.origins;
        assert(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal"
        );
      }
      const extent = options.extent;
      if (extent !== void 0 && !this.origin_ && !this.origins_) {
        this.origin_ = getTopLeft(extent);
      }
      assert(
        !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
        "Either `origin` or `origins` must be configured, never both"
      );
      this.tileSizes_ = null;
      if (options.tileSizes !== void 0) {
        this.tileSizes_ = options.tileSizes;
        assert(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal"
        );
      }
      this.tileSize_ = options.tileSize !== void 0 ? options.tileSize : !this.tileSizes_ ? DEFAULT_TILE_SIZE : null;
      assert(
        !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
        "Either `tileSize` or `tileSizes` must be configured, never both"
      );
      this.extent_ = extent !== void 0 ? extent : null;
      this.fullTileRanges_ = null;
      this.tmpSize_ = [0, 0];
      this.tmpExtent_ = [0, 0, 0, 0];
      if (options.sizes !== void 0) {
        this.fullTileRanges_ = options.sizes.map((size, z) => {
          const tileRange = new TileRange_default(
            Math.min(0, size[0]),
            Math.max(size[0] - 1, -1),
            Math.min(0, size[1]),
            Math.max(size[1] - 1, -1)
          );
          if (extent) {
            const restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
            tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
            tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
            tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
            tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
          }
          return tileRange;
        });
      } else if (extent) {
        this.calculateTileRanges_(extent);
      }
    }
    /**
     * Call a function with each tile coordinate for a given extent and zoom level.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} zoom Integer zoom level.
     * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
     * @api
     */
    forEachTileCoord(extent, zoom, callback) {
      const tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
      for (let i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
        for (let j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
          callback([zoom, i, j]);
        }
      }
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {boolean} Callback succeeded.
     */
    forEachTileCoordParentTileRange(tileCoord, callback, tempTileRange, tempExtent) {
      let tileRange, x, y;
      let tileCoordExtent = null;
      let z = tileCoord[0] - 1;
      if (this.zoomFactor_ === 2) {
        x = tileCoord[1];
        y = tileCoord[2];
      } else {
        tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent);
      }
      while (z >= this.minZoom) {
        if (x !== void 0 && y !== void 0) {
          x = Math.floor(x / 2);
          y = Math.floor(y / 2);
          tileRange = createOrUpdate2(x, x, y, y, tempTileRange);
        } else {
          tileRange = this.getTileRangeForExtentAndZ(
            tileCoordExtent,
            z,
            tempTileRange
          );
        }
        if (callback(z, tileRange)) {
          return true;
        }
        --z;
      }
      return false;
    }
    /**
     * Get the extent for this tile grid, if it was configured.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the maximum zoom level for the grid.
     * @return {number} Max zoom.
     * @api
     */
    getMaxZoom() {
      return this.maxZoom;
    }
    /**
     * Get the minimum zoom level for the grid.
     * @return {number} Min zoom.
     * @api
     */
    getMinZoom() {
      return this.minZoom;
    }
    /**
     * Get the origin for the grid at the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {import("../coordinate.js").Coordinate} Origin.
     * @api
     */
    getOrigin(z) {
      if (this.origin_) {
        return this.origin_;
      }
      return this.origins_[z];
    }
    /**
     * Get the list of origins for the grid.
     * @return {Array<import("../coordinate.js").Coordinate>|null} Origin.
     */
    getOrigins() {
      return this.origins_;
    }
    /**
     * Get the resolution for the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {number} Resolution.
     * @api
     */
    getResolution(z) {
      return this.resolutions_[z];
    }
    /**
     * Get the list of resolutions for the tile grid.
     * @return {Array<number>} Resolutions.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileCoordChildTileRange(tileCoord, tempTileRange, tempExtent) {
      if (tileCoord[0] < this.maxZoom) {
        if (this.zoomFactor_ === 2) {
          const minX = tileCoord[1] * 2;
          const minY = tileCoord[2] * 2;
          return createOrUpdate2(
            minX,
            minX + 1,
            minY,
            minY + 1,
            tempTileRange
          );
        }
        const tileCoordExtent = this.getTileCoordExtent(
          tileCoord,
          tempExtent || this.tmpExtent_
        );
        return this.getTileRangeForExtentAndZ(
          tileCoordExtent,
          tileCoord[0] + 1,
          tempTileRange
        );
      }
      return null;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileRangeForTileCoordAndZ(tileCoord, z, tempTileRange) {
      if (z > this.maxZoom || z < this.minZoom) {
        return null;
      }
      const tileCoordZ = tileCoord[0];
      const tileCoordX = tileCoord[1];
      const tileCoordY = tileCoord[2];
      if (z === tileCoordZ) {
        return createOrUpdate2(
          tileCoordX,
          tileCoordY,
          tileCoordX,
          tileCoordY,
          tempTileRange
        );
      }
      if (this.zoomFactor_) {
        const factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
        const minX = Math.floor(tileCoordX * factor);
        const minY = Math.floor(tileCoordY * factor);
        if (z < tileCoordZ) {
          return createOrUpdate2(minX, minX, minY, minY, tempTileRange);
        }
        const maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
        const maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
        return createOrUpdate2(minX, maxX, minY, maxY, tempTileRange);
      }
      const tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
    }
    /**
     * Get a tile range for the given extent and integer zoom level.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
     * @return {import("../TileRange.js").default} Tile range.
     */
    getTileRangeForExtentAndZ(extent, z, tempTileRange) {
      this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tmpTileCoord);
      const minX = tmpTileCoord[1];
      const minY = tmpTileCoord[2];
      this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tmpTileCoord);
      const maxX = tmpTileCoord[1];
      const maxY = tmpTileCoord[2];
      return createOrUpdate2(minX, maxX, minY, maxY, tempTileRange);
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {import("../coordinate.js").Coordinate} Tile center.
     */
    getTileCoordCenter(tileCoord) {
      const origin = this.getOrigin(tileCoord[0]);
      const resolution = this.getResolution(tileCoord[0]);
      const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
      return [
        origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
        origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution
      ];
    }
    /**
     * Get the extent of a tile coordinate.
     *
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getTileCoordExtent(tileCoord, tempExtent) {
      const origin = this.getOrigin(tileCoord[0]);
      const resolution = this.getResolution(tileCoord[0]);
      const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
      const minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
      const minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
      const maxX = minX + tileSize[0] * resolution;
      const maxY = minY + tileSize[1] * resolution;
      return createOrUpdate(minX, minY, maxX, maxY, tempExtent);
    }
    /**
     * Get the tile coordinate for the given map coordinate and resolution.  This
     * method considers that coordinates that intersect tile boundaries should be
     * assigned the higher tile coordinate.
     *
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} resolution Resolution.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord) {
      return this.getTileCoordForXYAndResolution_(
        coordinate[0],
        coordinate[1],
        resolution,
        false,
        opt_tileCoord
      );
    }
    /**
     * Note that this method should not be called for resolutions that correspond
     * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} resolution Resolution (for a non-integer zoom level).
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndResolution_(x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
      const z = this.getZForResolution(resolution);
      const scale4 = resolution / this.getResolution(z);
      const origin = this.getOrigin(z);
      const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
      let tileCoordX = scale4 * (x - origin[0]) / resolution / tileSize[0];
      let tileCoordY = scale4 * (origin[1] - y) / resolution / tileSize[1];
      if (reverseIntersectionPolicy) {
        tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
        tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
      } else {
        tileCoordX = floor(tileCoordX, DECIMALS);
        tileCoordY = floor(tileCoordY, DECIMALS);
      }
      return createOrUpdate3(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
     * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
     * they should have separate implementations.  This method is for integer zoom
     * levels.  The other method should only be called for resolutions corresponding
     * to non-integer zoom levels.
     * @param {number} x Map x coordinate.
     * @param {number} y Map y coordinate.
     * @param {number} z Integer zoom level.
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndZ_(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
      const origin = this.getOrigin(z);
      const resolution = this.getResolution(z);
      const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
      let tileCoordX = (x - origin[0]) / resolution / tileSize[0];
      let tileCoordY = (origin[1] - y) / resolution / tileSize[1];
      if (reverseIntersectionPolicy) {
        tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
        tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
      } else {
        tileCoordX = floor(tileCoordX, DECIMALS);
        tileCoordY = floor(tileCoordY, DECIMALS);
      }
      return createOrUpdate3(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
     * Get a tile coordinate given a map coordinate and zoom level.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord) {
      return this.getTileCoordForXYAndZ_(
        coordinate[0],
        coordinate[1],
        z,
        false,
        opt_tileCoord
      );
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {number} Tile resolution.
     */
    getTileCoordResolution(tileCoord) {
      return this.resolutions_[tileCoord[0]];
    }
    /**
     * Get the tile size for a zoom level. The type of the return value matches the
     * `tileSize` or `tileSizes` that the tile grid was configured with. To always
     * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
     * @param {number} z Z.
     * @return {number|import("../size.js").Size} Tile size.
     * @api
     */
    getTileSize(z) {
      if (this.tileSize_) {
        return this.tileSize_;
      }
      return this.tileSizes_[z];
    }
    /**
     * @param {number} z Zoom level.
     * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
     */
    getFullTileRange(z) {
      if (!this.fullTileRanges_) {
        return this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, z) : null;
      }
      return this.fullTileRanges_[z];
    }
    /**
     * @param {number} resolution Resolution.
     * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
     *     If 0, the nearest resolution will be used.
     *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
     *     nearest lower resolution (higher Z) will be used. Default is 0.
     *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
     *
     * For example to change tile Z at the midpoint of zoom levels
     * ```js
     * function(value, high, low) {
     *   return value - low * Math.sqrt(high / low);
     * }
     * ```
     * @return {number} Z.
     * @api
     */
    getZForResolution(resolution, opt_direction) {
      const z = linearFindNearest(
        this.resolutions_,
        resolution,
        opt_direction || 0
      );
      return clamp(z, this.minZoom, this.maxZoom);
    }
    /**
     * The tile with the provided tile coordinate intersects the given viewport.
     * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
     * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
     * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
     */
    tileCoordIntersectsViewport(tileCoord, viewport) {
      return intersectsLinearRing(
        viewport,
        0,
        viewport.length,
        2,
        this.getTileCoordExtent(tileCoord)
      );
    }
    /**
     * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
     * @private
     */
    calculateTileRanges_(extent) {
      const length = this.resolutions_.length;
      const fullTileRanges = new Array(length);
      for (let z = this.minZoom; z < length; ++z) {
        fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
      }
      this.fullTileRanges_ = fullTileRanges;
    }
  };
  var TileGrid_default = TileGrid;

  // node_modules/ol/ImageState.js
  var ImageState_default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
  };

  // node_modules/ol/obj.js
  function clear(object) {
    for (const property in object) {
      delete object[property];
    }
  }
  function isEmpty2(object) {
    let property;
    for (property in object) {
      return false;
    }
    return !property;
  }

  // node_modules/ol/events.js
  function listen(target, type, listener, thisArg, once) {
    if (once) {
      const originalListener = listener;
      listener = function(event) {
        target.removeEventListener(type, listener);
        return originalListener.call(thisArg ?? this, event);
      };
    } else if (thisArg && thisArg !== target) {
      listener = listener.bind(thisArg);
    }
    const eventsKey = {
      target,
      type,
      listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
  }
  function listenOnce(target, type, listener, thisArg) {
    return listen(target, type, listener, thisArg, true);
  }
  function unlistenByKey(key) {
    if (key && key.target) {
      key.target.removeEventListener(key.type, key.listener);
      clear(key);
    }
  }

  // node_modules/ol/events/EventType.js
  var EventType_default = {
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */
    CHANGE: "change",
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */
    ERROR: "error",
    BLUR: "blur",
    CLEAR: "clear",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DROP: "drop",
    FOCUS: "focus",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    RESIZE: "resize",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel"
  };

  // node_modules/ol/Disposable.js
  var Disposable = class {
    constructor() {
      this.disposed = false;
    }
    /**
     * Clean up.
     */
    dispose() {
      if (!this.disposed) {
        this.disposed = true;
        this.disposeInternal();
      }
    }
    /**
     * Extension point for disposable objects.
     * @protected
     */
    disposeInternal() {
    }
  };
  var Disposable_default = Disposable;

  // node_modules/ol/functions.js
  function TRUE() {
    return true;
  }
  function FALSE() {
    return false;
  }
  function VOID() {
  }
  function memoizeOne(fn) {
    let lastResult;
    let lastArgs;
    let lastThis;
    return function() {
      const nextArgs = Array.prototype.slice.call(arguments);
      if (!lastArgs || this !== lastThis || !equals2(nextArgs, lastArgs)) {
        lastThis = this;
        lastArgs = nextArgs;
        lastResult = fn.apply(this, arguments);
      }
      return lastResult;
    };
  }
  function toPromise(getter) {
    function promiseGetter() {
      let value;
      try {
        value = getter();
      } catch (err) {
        return Promise.reject(err);
      }
      if (value instanceof Promise) {
        return value;
      }
      return Promise.resolve(value);
    }
    return promiseGetter();
  }

  // node_modules/ol/events/Event.js
  var BaseEvent = class {
    /**
     * @param {string} type Type.
     */
    constructor(type) {
      this.propagationStopped;
      this.defaultPrevented;
      this.type = type;
      this.target = null;
    }
    /**
     * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
     * will be fired.
     * @api
     */
    preventDefault() {
      this.defaultPrevented = true;
    }
    /**
     * Stop event propagation.
     * @api
     */
    stopPropagation() {
      this.propagationStopped = true;
    }
  };
  var Event_default = BaseEvent;

  // node_modules/ol/events/Target.js
  var Target = class extends Disposable_default {
    /**
     * @param {*} [target] Default event target for dispatched events.
     */
    constructor(target) {
      super();
      this.eventTarget_ = target;
      this.pendingRemovals_ = null;
      this.dispatching_ = null;
      this.listeners_ = null;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    addEventListener(type, listener) {
      if (!type || !listener) {
        return;
      }
      const listeners = this.listeners_ || (this.listeners_ = {});
      const listenersForType = listeners[type] || (listeners[type] = []);
      if (!listenersForType.includes(listener)) {
        listenersForType.push(listener);
      }
    }
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */
    dispatchEvent(event) {
      const isString = typeof event === "string";
      const type = isString ? event : event.type;
      const listeners = this.listeners_ && this.listeners_[type];
      if (!listeners) {
        return;
      }
      const evt = isString ? new Event_default(event) : (
        /** @type {Event} */
        event
      );
      if (!evt.target) {
        evt.target = this.eventTarget_ || this;
      }
      const dispatching = this.dispatching_ || (this.dispatching_ = {});
      const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
      if (!(type in dispatching)) {
        dispatching[type] = 0;
        pendingRemovals[type] = 0;
      }
      ++dispatching[type];
      let propagate;
      for (let i = 0, ii = listeners.length; i < ii; ++i) {
        if ("handleEvent" in listeners[i]) {
          propagate = /** @type {import("../events.js").ListenerObject} */
          listeners[i].handleEvent(evt);
        } else {
          propagate = /** @type {import("../events.js").ListenerFunction} */
          listeners[i].call(this, evt);
        }
        if (propagate === false || evt.propagationStopped) {
          propagate = false;
          break;
        }
      }
      if (--dispatching[type] === 0) {
        let pr = pendingRemovals[type];
        delete pendingRemovals[type];
        while (pr--) {
          this.removeEventListener(type, VOID);
        }
        delete dispatching[type];
      }
      return propagate;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.listeners_ && clear(this.listeners_);
    }
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").Listener>|undefined} Listeners.
     */
    getListeners(type) {
      return this.listeners_ && this.listeners_[type] || void 0;
    }
    /**
     * @param {string} [type] Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */
    hasListener(type) {
      if (!this.listeners_) {
        return false;
      }
      return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    removeEventListener(type, listener) {
      if (!this.listeners_) {
        return;
      }
      const listeners = this.listeners_[type];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        if (this.pendingRemovals_ && type in this.pendingRemovals_) {
          listeners[index] = VOID;
          ++this.pendingRemovals_[type];
        } else {
          listeners.splice(index, 1);
          if (listeners.length === 0) {
            delete this.listeners_[type];
          }
        }
      }
    }
  };
  var Target_default = Target;

  // node_modules/ol/has.js
  var ua = typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" ? navigator.userAgent.toLowerCase() : "";
  var SAFARI = ua.includes("safari") && !ua.includes("chrom");
  var SAFARI_BUG_237906 = SAFARI && (ua.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ua));
  var WEBKIT = ua.includes("webkit") && !ua.includes("edge");
  var MAC = ua.includes("macintosh");
  var DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
  var WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== "undefined" && typeof OffscreenCanvas !== "undefined" && self instanceof WorkerGlobalScope;
  var IMAGE_DECODE = typeof Image !== "undefined" && Image.prototype.decode;
  var PASSIVE_EVENT_LISTENERS = (function() {
    let passive = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get: function() {
          passive = true;
        }
      });
      window.addEventListener("_", null, options);
      window.removeEventListener("_", null, options);
    } catch {
    }
    return passive;
  })();

  // node_modules/ol/Image.js
  function listenImage(image, loadHandler, errorHandler) {
    const img = (
      /** @type {HTMLImageElement} */
      image
    );
    let listening = true;
    let decoding = false;
    let loaded = false;
    const listenerKeys = [
      listenOnce(img, EventType_default.LOAD, function() {
        loaded = true;
        if (!decoding) {
          loadHandler();
        }
      })
    ];
    if (img.src && IMAGE_DECODE) {
      decoding = true;
      img.decode().then(function() {
        if (listening) {
          loadHandler();
        }
      }).catch(function(error) {
        if (listening) {
          if (loaded) {
            loadHandler();
          } else {
            errorHandler();
          }
        }
      });
    } else {
      listenerKeys.push(listenOnce(img, EventType_default.ERROR, errorHandler));
    }
    return function unlisten() {
      listening = false;
      listenerKeys.forEach(unlistenByKey);
    };
  }
  function load(image, src) {
    return new Promise((resolve, reject) => {
      function handleLoad() {
        unlisten();
        resolve(image);
      }
      function handleError() {
        unlisten();
        reject(new Error("Image load error"));
      }
      function unlisten() {
        image.removeEventListener("load", handleLoad);
        image.removeEventListener("error", handleError);
      }
      image.addEventListener("load", handleLoad);
      image.addEventListener("error", handleError);
      if (src) {
        image.src = src;
      }
    });
  }
  function decodeFallback(image, src) {
    if (src) {
      image.src = src;
    }
    return image.src && IMAGE_DECODE ? new Promise(
      (resolve, reject) => image.decode().then(() => resolve(image)).catch(
        (e) => image.complete && image.width ? resolve(image) : reject(e)
      )
    ) : load(image);
  }

  // node_modules/ol/TileState.js
  var TileState_default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
     * Indicates that tile loading failed
     * @type {number}
     */
    ERROR: 3,
    EMPTY: 4
  };

  // node_modules/ol/easing.js
  function easeIn(t) {
    return Math.pow(t, 3);
  }
  function easeOut(t) {
    return 1 - easeIn(1 - t);
  }
  function inAndOut(t) {
    return 3 * t * t - 2 * t * t * t;
  }
  function linear(t) {
    return t;
  }

  // node_modules/ol/Tile.js
  var Tile = class extends Target_default {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {Options} [options] Tile options.
     */
    constructor(tileCoord, state, options) {
      super();
      options = options ? options : {};
      this.tileCoord = tileCoord;
      this.state = state;
      this.key = "";
      this.transition_ = options.transition === void 0 ? 250 : options.transition;
      this.transitionStarts_ = {};
      this.interpolate = !!options.interpolate;
    }
    /**
     * @protected
     */
    changed() {
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * Called by the tile cache when the tile is removed from the cache due to expiry
     */
    release() {
      this.setState(TileState_default.EMPTY);
    }
    /**
     * @return {string} Key.
     */
    getKey() {
      return this.key + "/" + this.tileCoord;
    }
    /**
     * Get the tile coordinate for this tile.
     * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
     * @api
     */
    getTileCoord() {
      return this.tileCoord;
    }
    /**
     * @return {import("./TileState.js").default} State.
     */
    getState() {
      return this.state;
    }
    /**
     * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
     * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
     * when the tile cannot be loaded. Otherwise the tile cannot be removed from
     * the tile queue and will block other requests.
     * @param {import("./TileState.js").default} state State.
     * @api
     */
    setState(state) {
      if (this.state === TileState_default.EMPTY) {
        return;
      }
      if (this.state !== TileState_default.ERROR && this.state > state) {
        throw new Error("Tile load sequence violation");
      }
      this.state = state;
      this.changed();
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @abstract
     * @api
     */
    load() {
      abstract();
    }
    /**
     * Get the alpha value for rendering.
     * @param {string} id An id for the renderer.
     * @param {number} time The render frame time.
     * @return {number} A number between 0 and 1.
     */
    getAlpha(id, time) {
      if (!this.transition_) {
        return 1;
      }
      let start = this.transitionStarts_[id];
      if (!start) {
        start = time;
        this.transitionStarts_[id] = start;
      } else if (start === -1) {
        return 1;
      }
      const delta = time - start + 1e3 / 60;
      if (delta >= this.transition_) {
        return 1;
      }
      return easeIn(delta / this.transition_);
    }
    /**
     * Determine if a tile is in an alpha transition.  A tile is considered in
     * transition if tile.getAlpha() has not yet been called or has been called
     * and returned 1.
     * @param {string} id An id for the renderer.
     * @return {boolean} The tile is in transition.
     */
    inTransition(id) {
      if (!this.transition_) {
        return false;
      }
      return this.transitionStarts_[id] !== -1;
    }
    /**
     * Mark a transition as complete.
     * @param {string} id An id for the renderer.
     */
    endTransition(id) {
      if (this.transition_) {
        this.transitionStarts_[id] = -1;
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      this.release();
      super.disposeInternal();
    }
  };
  var Tile_default = Tile;

  // node_modules/ol/dom.js
  function createCanvasContext2D(width, height, canvasPool2, settings) {
    let canvas;
    if (canvasPool2 && canvasPool2.length) {
      canvas = /** @type {HTMLCanvasElement} */
      canvasPool2.shift();
    } else if (WORKER_OFFSCREEN_CANVAS) {
      canvas = new class extends OffscreenCanvas {
        style = {};
      }(width ?? 300, height ?? 150);
    } else {
      canvas = document.createElement("canvas");
    }
    if (width) {
      canvas.width = width;
    }
    if (height) {
      canvas.height = height;
    }
    return (
      /** @type {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} */
      canvas.getContext("2d", settings)
    );
  }
  var sharedCanvasContext;
  function getSharedCanvasContext2D() {
    if (!sharedCanvasContext) {
      sharedCanvasContext = createCanvasContext2D(1, 1);
    }
    return sharedCanvasContext;
  }
  function releaseCanvas(context) {
    const canvas = context.canvas;
    canvas.width = 1;
    canvas.height = 1;
    context.clearRect(0, 0, 1, 1);
  }
  function replaceNode(newNode, oldNode) {
    const parent = oldNode.parentNode;
    if (parent) {
      parent.replaceChild(newNode, oldNode);
    }
  }
  function removeChildren(node) {
    while (node.lastChild) {
      node.lastChild.remove();
    }
  }
  function replaceChildren(node, children) {
    const oldChildren = node.childNodes;
    for (let i = 0; true; ++i) {
      const oldChild = oldChildren[i];
      const newChild = children[i];
      if (!oldChild && !newChild) {
        break;
      }
      if (oldChild === newChild) {
        continue;
      }
      if (!oldChild) {
        node.appendChild(newChild);
        continue;
      }
      if (!newChild) {
        node.removeChild(oldChild);
        --i;
        continue;
      }
      node.insertBefore(newChild, oldChild);
    }
  }
  function createMockDiv() {
    const mockedDiv = new Proxy(
      {
        /**
         * @type {Array<HTMLElement>}
         */
        childNodes: [],
        /**
         * @param {HTMLElement} node html node.
         * @return {HTMLElement} html node.
         */
        appendChild: function(node) {
          this.childNodes.push(node);
          return node;
        },
        /**
         * dummy function, as this structure is not supposed to have a parent.
         */
        remove: function() {
        },
        /**
         * @param {HTMLElement} node html node.
         * @return {HTMLElement} html node.
         */
        removeChild: function(node) {
          const index = this.childNodes.indexOf(node);
          if (index === -1) {
            throw new Error("Node to remove was not found");
          }
          this.childNodes.splice(index, 1);
          return node;
        },
        /**
         * @param {HTMLElement} newNode new html node.
         * @param {HTMLElement} referenceNode reference html node.
         * @return {HTMLElement} new html node.
         */
        insertBefore: function(newNode, referenceNode) {
          const index = this.childNodes.indexOf(referenceNode);
          if (index === -1) {
            throw new Error("Reference node not found");
          }
          this.childNodes.splice(index, 0, newNode);
          return newNode;
        },
        style: {}
      },
      {
        get(target, prop, receiver) {
          if (prop === "firstElementChild") {
            return target.childNodes.length > 0 ? target.childNodes[0] : null;
          }
          return Reflect.get(target, prop, receiver);
        }
      }
    );
    return (
      /** @type {HTMLDivElement} */
      /** @type {*} */
      mockedDiv
    );
  }
  function isCanvas(obj) {
    return typeof HTMLCanvasElement !== "undefined" && obj instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && obj instanceof OffscreenCanvas;
  }

  // node_modules/ol/ImageTile.js
  var ImageTile = class extends Tile_default {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {import('./dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("./Tile.js").Options} [options] Tile options.
     */
    constructor(tileCoord, state, src, imageAttributes, tileLoadFunction, options) {
      super(tileCoord, state, options);
      this.crossOrigin_ = imageAttributes?.crossOrigin;
      this.referrerPolicy_ = imageAttributes?.referrerPolicy;
      this.src_ = src;
      this.key = src;
      this.image_;
      if (WORKER_OFFSCREEN_CANVAS) {
        this.image_ = new OffscreenCanvas(1, 1);
      } else {
        this.image_ = new Image();
        if (this.crossOrigin_ !== null) {
          this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.referrerPolicy_ !== void 0) {
          this.image_.referrerPolicy = this.referrerPolicy_;
        }
      }
      this.unlisten_ = null;
      this.tileLoadFunction_ = tileLoadFunction;
    }
    /**
     * Get the HTML image element for this tile (may be a Canvas, OffscreenCanvas, Image, or Video).
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
     * @param {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement} element Element.
     */
    setImage(element) {
      this.image_ = element;
      this.state = TileState_default.LOADED;
      this.unlistenImage_();
      this.changed();
    }
    /**
     * Get the cross origin of the ImageTile.
     * @return {string} Cross origin.
     */
    getCrossOrigin() {
      return this.crossOrigin_;
    }
    /**
     * Get the referrer policy of the ImageTile.
     * @return {ReferrerPolicy} Referrer policy.
     */
    getReferrerPolicy() {
      return this.referrerPolicy_;
    }
    /**
     * Tracks loading or read errors.
     *
     * @private
     */
    handleImageError_() {
      this.state = TileState_default.ERROR;
      this.unlistenImage_();
      this.image_ = getBlankImage();
      this.changed();
    }
    /**
     * Tracks successful image load.
     *
     * @private
     */
    handleImageLoad_() {
      if (WORKER_OFFSCREEN_CANVAS) {
        this.state = TileState_default.LOADED;
      } else {
        const image = (
          /** @type {HTMLImageElement} */
          this.image_
        );
        if (image.naturalWidth && image.naturalHeight) {
          this.state = TileState_default.LOADED;
        } else {
          this.state = TileState_default.EMPTY;
        }
      }
      this.unlistenImage_();
      this.changed();
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     *
     * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
     * that checks for error status codes and reloads only when the status code is
     * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
     * made already:
     *
     * ```js
     * const retryCodes = [408, 429, 500, 502, 503, 504];
     * const retries = {};
     * source.setTileLoadFunction((tile, src) => {
     *   const image = tile.getImage();
     *   fetch(src)
     *     .then((response) => {
     *       if (retryCodes.includes(response.status)) {
     *         retries[src] = (retries[src] || 0) + 1;
     *         if (retries[src] <= 3) {
     *           setTimeout(() => tile.load(), retries[src] * 1000);
     *         }
     *         return Promise.reject();
     *       }
     *       return response.blob();
     *     })
     *     .then((blob) => {
     *       const imageUrl = URL.createObjectURL(blob);
     *       image.src = imageUrl;
     *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
     *     })
     *     .catch(() => tile.setState(3)); // error
     * });
     * ```
     * @api
     * @override
     */
    load() {
      if (this.state == TileState_default.ERROR) {
        this.state = TileState_default.IDLE;
        this.image_ = new Image();
        if (this.crossOrigin_ !== null) {
          this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.referrerPolicy_ !== void 0) {
          this.image_.referrerPolicy = this.referrerPolicy_;
        }
      }
      if (this.state == TileState_default.IDLE) {
        this.state = TileState_default.LOADING;
        this.changed();
        this.tileLoadFunction_(this, this.src_);
        this.unlisten_ = listenImage(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this)
        );
      }
    }
    /**
     * Discards event handlers which listen for load completion or errors.
     *
     * @private
     */
    unlistenImage_() {
      if (this.unlisten_) {
        this.unlisten_();
        this.unlisten_ = null;
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      this.unlistenImage_();
      this.image_ = null;
      super.disposeInternal();
    }
  };
  function getBlankImage() {
    const ctx = createCanvasContext2D(1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
  }
  var ImageTile_default = ImageTile;

  // node_modules/ol/console.js
  var levels = {
    info: 1,
    warn: 2,
    error: 3,
    none: 4
  };
  var level = levels.info;
  function warn(...args) {
    if (level > levels.warn) {
      return;
    }
    console.warn(...args);
  }

  // node_modules/ol/coordinate.js
  function add(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
  }
  function equals3(coordinate1, coordinate2) {
    let equals4 = true;
    for (let i = coordinate1.length - 1; i >= 0; --i) {
      if (coordinate1[i] != coordinate2[i]) {
        equals4 = false;
        break;
      }
    }
    return equals4;
  }
  function rotate(coordinate, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
  }
  function scale2(coordinate, scale4) {
    coordinate[0] *= scale4;
    coordinate[1] *= scale4;
    return coordinate;
  }
  function wrapX2(coordinate, projection) {
    if (projection.canWrapX()) {
      const worldWidth = getWidth(projection.getExtent());
      const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
      if (worldsAway) {
        coordinate[0] -= worldsAway * worldWidth;
      }
    }
    return coordinate;
  }
  function getWorldsAway(coordinate, projection, sourceExtentWidth) {
    const projectionExtent = projection.getExtent();
    let worldsAway = 0;
    if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
      sourceExtentWidth = sourceExtentWidth || getWidth(projectionExtent);
      worldsAway = Math.floor(
        (coordinate[0] - projectionExtent[0]) / sourceExtentWidth
      );
    }
    return worldsAway;
  }

  // node_modules/ol/proj/Units.js
  var METERS_PER_UNIT = {
    // use the radius of the Normal sphere
    "radians": 6370997 / (2 * Math.PI),
    "degrees": 2 * Math.PI * 6370997 / 360,
    "ft": 0.3048,
    "m": 1,
    "us-ft": 1200 / 3937
  };

  // node_modules/ol/proj/Projection.js
  var Projection = class {
    /**
     * @param {Options} options Projection options.
     */
    constructor(options) {
      this.code_ = options.code;
      this.units_ = /** @type {import("./Units.js").Units} */
      options.units;
      this.extent_ = options.extent !== void 0 ? options.extent : null;
      this.worldExtent_ = options.worldExtent !== void 0 ? options.worldExtent : null;
      this.axisOrientation_ = options.axisOrientation !== void 0 ? options.axisOrientation : "enu";
      this.global_ = options.global !== void 0 ? options.global : false;
      this.canWrapX_ = !!(this.global_ && this.extent_);
      this.getPointResolutionFunc_ = options.getPointResolution;
      this.defaultTileGrid_ = null;
      this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
     * @return {boolean} The projection is suitable for wrapping the x-axis
     */
    canWrapX() {
      return this.canWrapX_;
    }
    /**
     * Get the code for this projection, e.g. 'EPSG:4326'.
     * @return {string} Code.
     * @api
     */
    getCode() {
      return this.code_;
    }
    /**
     * Get the validity extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the units of this projection.
     * @return {import("./Units.js").Units} Units.
     * @api
     */
    getUnits() {
      return this.units_;
    }
    /**
     * Get the amount of meters per unit of this projection.  If the projection is
     * not configured with `metersPerUnit` or a units identifier, the return is
     * `undefined`.
     * @return {number|undefined} Meters.
     * @api
     */
    getMetersPerUnit() {
      return this.metersPerUnit_ || METERS_PER_UNIT[this.units_];
    }
    /**
     * Get the world extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getWorldExtent() {
      return this.worldExtent_;
    }
    /**
     * Get the axis orientation of this projection.
     * Example values are:
     * enu - the default easting, northing, elevation.
     * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
     *     or south orientated transverse mercator.
     * wnu - westing, northing, up - some planetary coordinate systems have
     *     "west positive" coordinate systems
     * @return {string} Axis orientation.
     * @api
     */
    getAxisOrientation() {
      return this.axisOrientation_;
    }
    /**
     * Is this projection a global projection which spans the whole world?
     * @return {boolean} Whether the projection is global.
     * @api
     */
    isGlobal() {
      return this.global_;
    }
    /**
     * Set if the projection is a global projection which spans the whole world
     * @param {boolean} global Whether the projection is global.
     * @api
     */
    setGlobal(global) {
      this.global_ = global;
      this.canWrapX_ = !!(global && this.extent_);
    }
    /**
     * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
     */
    getDefaultTileGrid() {
      return this.defaultTileGrid_;
    }
    /**
     * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
     */
    setDefaultTileGrid(tileGrid) {
      this.defaultTileGrid_ = tileGrid;
    }
    /**
     * Set the validity extent for this projection.
     * @param {import("../extent.js").Extent} extent Extent.
     * @api
     */
    setExtent(extent) {
      this.extent_ = extent;
      this.canWrapX_ = !!(this.global_ && extent);
    }
    /**
     * Set the world extent for this projection.
     * @param {import("../extent.js").Extent} worldExtent World extent
     *     [minlon, minlat, maxlon, maxlat].
     * @api
     */
    setWorldExtent(worldExtent) {
      this.worldExtent_ = worldExtent;
    }
    /**
     * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
     * for this projection.
     * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
     * @api
     */
    setGetPointResolution(func) {
      this.getPointResolutionFunc_ = func;
    }
    /**
     * Get the custom point resolution function for this projection (if set).
     * @return {GetPointResolution|undefined} The custom point
     * resolution function (if set).
     */
    getPointResolutionFunc() {
      return this.getPointResolutionFunc_;
    }
  };
  var Projection_default = Projection;

  // node_modules/ol/proj/epsg3857.js
  var RADIUS = 6378137;
  var HALF_SIZE = Math.PI * RADIUS;
  var EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
  var WORLD_EXTENT = [-180, -85, 180, 85];
  var MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
  var EPSG3857Projection = class extends Projection_default {
    /**
     * @param {string} code Code.
     */
    constructor(code) {
      super({
        code,
        units: "m",
        extent: EXTENT,
        global: true,
        worldExtent: WORLD_EXTENT,
        getPointResolution: function(resolution, point) {
          return resolution / Math.cosh(point[1] / RADIUS);
        }
      });
    }
  };
  var PROJECTIONS = [
    new EPSG3857Projection("EPSG:3857"),
    new EPSG3857Projection("EPSG:102100"),
    new EPSG3857Projection("EPSG:102113"),
    new EPSG3857Projection("EPSG:900913"),
    new EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857")
  ];
  function fromEPSG4326(input, output, dimension, stride) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    stride = stride ?? dimension;
    if (output === void 0) {
      if (dimension > 2) {
        output = input.slice();
      } else {
        output = new Array(length);
      }
    }
    for (let i = 0; i < length; i += stride) {
      output[i] = HALF_SIZE * input[i] / 180;
      let y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
      if (y > MAX_SAFE_Y) {
        y = MAX_SAFE_Y;
      } else if (y < -MAX_SAFE_Y) {
        y = -MAX_SAFE_Y;
      }
      output[i + 1] = y;
    }
    return output;
  }
  function toEPSG4326(input, output, dimension, stride) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    stride = stride ?? dimension;
    if (output === void 0) {
      if (dimension > 2) {
        output = input.slice();
      } else {
        output = new Array(length);
      }
    }
    for (let i = 0; i < length; i += stride) {
      output[i] = 180 * input[i] / HALF_SIZE;
      output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
    }
    return output;
  }

  // node_modules/ol/proj/epsg4326.js
  var RADIUS2 = 6378137;
  var EXTENT2 = [-180, -90, 180, 90];
  var METERS_PER_UNIT2 = Math.PI * RADIUS2 / 180;
  var EPSG4326Projection = class extends Projection_default {
    /**
     * @param {string} code Code.
     * @param {string} [axisOrientation] Axis orientation.
     */
    constructor(code, axisOrientation) {
      super({
        code,
        units: "degrees",
        extent: EXTENT2,
        axisOrientation,
        global: true,
        metersPerUnit: METERS_PER_UNIT2,
        worldExtent: EXTENT2
      });
    }
  };
  var PROJECTIONS2 = [
    new EPSG4326Projection("CRS:84"),
    new EPSG4326Projection("EPSG:4326", "neu"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
  ];

  // node_modules/ol/proj/projections.js
  var cache = {};
  function get(code) {
    return cache[code] || cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
  }
  function add2(code, projection) {
    cache[code] = projection;
  }

  // node_modules/ol/proj/transforms.js
  var transforms = {};
  function add3(source, destination, transformFn) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    if (!(sourceCode in transforms)) {
      transforms[sourceCode] = {};
    }
    transforms[sourceCode][destinationCode] = transformFn;
  }
  function get2(sourceCode, destinationCode) {
    if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
      return transforms[sourceCode][destinationCode];
    }
    return null;
  }

  // node_modules/ol/proj/utm.js
  var K0 = 0.9996;
  var E = 669438e-8;
  var E2 = E * E;
  var E3 = E2 * E;
  var E_P2 = E / (1 - E);
  var SQRT_E = Math.sqrt(1 - E);
  var _E = (1 - SQRT_E) / (1 + SQRT_E);
  var _E2 = _E * _E;
  var _E3 = _E2 * _E;
  var _E4 = _E3 * _E;
  var _E5 = _E4 * _E;
  var M1 = 1 - E / 4 - 3 * E2 / 64 - 5 * E3 / 256;
  var M2 = 3 * E / 8 + 3 * E2 / 32 + 45 * E3 / 1024;
  var M3 = 15 * E2 / 256 + 45 * E3 / 1024;
  var M4 = 35 * E3 / 3072;
  var P2 = 3 / 2 * _E - 27 / 32 * _E3 + 269 / 512 * _E5;
  var P3 = 21 / 16 * _E2 - 55 / 32 * _E4;
  var P4 = 151 / 96 * _E3 - 417 / 128 * _E5;
  var P5 = 1097 / 512 * _E4;
  var R = 6378137;
  function toLonLat(easting, northing, zone) {
    const x = easting - 5e5;
    const y = zone.north ? northing : northing - 1e7;
    const m = y / K0;
    const mu = m / (R * M1);
    const pRad = mu + P2 * Math.sin(2 * mu) + P3 * Math.sin(4 * mu) + P4 * Math.sin(6 * mu) + P5 * Math.sin(8 * mu);
    const pSin = Math.sin(pRad);
    const pSin2 = pSin * pSin;
    const pCos = Math.cos(pRad);
    const pTan = pSin / pCos;
    const pTan2 = pTan * pTan;
    const pTan4 = pTan2 * pTan2;
    const epSin = 1 - E * pSin2;
    const epSinSqrt = Math.sqrt(1 - E * pSin2);
    const n = R / epSinSqrt;
    const r = (1 - E) / epSin;
    const c = E_P2 * pCos ** 2;
    const c2 = c * c;
    const d = x / (n * K0);
    const d2 = d * d;
    const d3 = d2 * d;
    const d4 = d3 * d;
    const d5 = d4 * d;
    const d6 = d5 * d;
    const latitude = pRad - pTan / r * (d2 / 2 - d4 / 24 * (5 + 3 * pTan2 + 10 * c - 4 * c2 - 9 * E_P2)) + d6 / 720 * (61 + 90 * pTan2 + 298 * c + 45 * pTan4 - 252 * E_P2 - 3 * c2);
    let longitude = (d - d3 / 6 * (1 + 2 * pTan2 + c) + d5 / 120 * (5 - 2 * c + 28 * pTan2 - 3 * c2 + 8 * E_P2 + 24 * pTan4)) / pCos;
    longitude = wrap(
      longitude + toRadians(zoneToCentralLongitude(zone.number)),
      -Math.PI,
      Math.PI
    );
    return [toDegrees(longitude), toDegrees(latitude)];
  }
  var MIN_LATITUDE = -80;
  var MAX_LATITUDE = 84;
  var MIN_LONGITUDE = -180;
  var MAX_LONGITUDE = 180;
  function fromLonLat(longitude, latitude, zone) {
    longitude = wrap(longitude, MIN_LONGITUDE, MAX_LONGITUDE);
    if (latitude < MIN_LATITUDE) {
      latitude = MIN_LATITUDE;
    } else if (latitude > MAX_LATITUDE) {
      latitude = MAX_LATITUDE;
    }
    const latRad = toRadians(latitude);
    const latSin = Math.sin(latRad);
    const latCos = Math.cos(latRad);
    const latTan = latSin / latCos;
    const latTan2 = latTan * latTan;
    const latTan4 = latTan2 * latTan2;
    const lonRad = toRadians(longitude);
    const centralLon = zoneToCentralLongitude(zone.number);
    const centralLonRad = toRadians(centralLon);
    const n = R / Math.sqrt(1 - E * latSin ** 2);
    const c = E_P2 * latCos ** 2;
    const a = latCos * wrap(lonRad - centralLonRad, -Math.PI, Math.PI);
    const a22 = a * a;
    const a3 = a22 * a;
    const a4 = a3 * a;
    const a5 = a4 * a;
    const a6 = a5 * a;
    const m = R * (M1 * latRad - M2 * Math.sin(2 * latRad) + M3 * Math.sin(4 * latRad) - M4 * Math.sin(6 * latRad));
    const easting = K0 * n * (a + a3 / 6 * (1 - latTan2 + c) + a5 / 120 * (5 - 18 * latTan2 + latTan4 + 72 * c - 58 * E_P2)) + 5e5;
    let northing = K0 * (m + n * latTan * (a22 / 2 + a4 / 24 * (5 - latTan2 + 9 * c + 4 * c ** 2) + a6 / 720 * (61 - 58 * latTan2 + latTan4 + 600 * c - 330 * E_P2)));
    if (!zone.north) {
      northing += 1e7;
    }
    return [easting, northing];
  }
  function zoneToCentralLongitude(zone) {
    return (zone - 1) * 6 - 180 + 3;
  }
  var epsgRegExes = [
    /^EPSG:(\d+)$/,
    /^urn:ogc:def:crs:EPSG::(\d+)$/,
    /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/
  ];
  function zoneFromCode(code) {
    let epsgId = 0;
    for (const re of epsgRegExes) {
      const match = code.match(re);
      if (match) {
        epsgId = parseInt(match[1]);
        break;
      }
    }
    if (!epsgId) {
      return null;
    }
    let number = 0;
    let north = false;
    if (epsgId > 32700 && epsgId < 32761) {
      number = epsgId - 32700;
    } else if (epsgId > 32600 && epsgId < 32661) {
      north = true;
      number = epsgId - 32600;
    }
    if (!number) {
      return null;
    }
    return { number, north };
  }
  function makeTransformFunction(transformer, zone) {
    return function(input, output, dimension, stride) {
      const length = input.length;
      dimension = dimension > 1 ? dimension : 2;
      stride = stride ?? dimension;
      if (!output) {
        if (dimension > 2) {
          output = input.slice();
        } else {
          output = new Array(length);
        }
      }
      for (let i = 0; i < length; i += stride) {
        const x = input[i];
        const y = input[i + 1];
        const coord = transformer(x, y, zone);
        output[i] = coord[0];
        output[i + 1] = coord[1];
      }
      return output;
    };
  }
  function makeProjection(code) {
    const zone = zoneFromCode(code);
    if (!zone) {
      return null;
    }
    return new Projection_default({ code, units: "m" });
  }
  function makeTransforms(projection) {
    const zone = zoneFromCode(projection.getCode());
    if (!zone) {
      return null;
    }
    return {
      forward: makeTransformFunction(fromLonLat, zone),
      inverse: makeTransformFunction(toLonLat, zone)
    };
  }

  // node_modules/ol/sphere.js
  var DEFAULT_RADIUS = 63710088e-1;
  function getDistance(c1, c2, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = toRadians(c1[1]);
    const lat2 = toRadians(c2[1]);
    const deltaLatBy2 = (lat2 - lat1) / 2;
    const deltaLonBy2 = toRadians(c2[0] - c1[0]) / 2;
    const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // node_modules/ol/proj.js
  var transformFactories = [makeTransforms];
  var projectionFactories = [makeProjection];
  var showCoordinateWarning = true;
  function disableCoordinateWarning(disable2) {
    const hide = disable2 === void 0 ? true : disable2;
    showCoordinateWarning = !hide;
  }
  function cloneTransform(input, output) {
    if (output !== void 0) {
      for (let i = 0, ii = input.length; i < ii; ++i) {
        output[i] = input[i];
      }
      output = output;
    } else {
      output = input.slice();
    }
    return output;
  }
  function addProjection(projection) {
    add2(projection.getCode(), projection);
    add3(projection, projection, cloneTransform);
  }
  function addProjections(projections) {
    projections.forEach(addProjection);
  }
  function get3(projectionLike) {
    if (!(typeof projectionLike === "string")) {
      return projectionLike;
    }
    const projection = get(projectionLike);
    if (projection) {
      return projection;
    }
    for (const makeProjection2 of projectionFactories) {
      const projection2 = makeProjection2(projectionLike);
      if (projection2) {
        return projection2;
      }
    }
    return null;
  }
  function getPointResolution(projection, resolution, point, units) {
    projection = get3(projection);
    let pointResolution;
    const getter = projection.getPointResolutionFunc();
    if (getter) {
      pointResolution = getter(resolution, point);
      if (units && units !== projection.getUnits()) {
        const metersPerUnit = projection.getMetersPerUnit();
        if (metersPerUnit) {
          pointResolution = pointResolution * metersPerUnit / METERS_PER_UNIT[units];
        }
      }
    } else {
      const projUnits = projection.getUnits();
      if (projUnits == "degrees" && !units || units == "degrees") {
        pointResolution = resolution;
      } else {
        const toEPSG43262 = getTransformFromProjections(
          projection,
          get3("EPSG:4326")
        );
        if (!toEPSG43262 && projUnits !== "degrees") {
          pointResolution = resolution * projection.getMetersPerUnit();
        } else {
          let vertices = [
            point[0] - resolution / 2,
            point[1],
            point[0] + resolution / 2,
            point[1],
            point[0],
            point[1] - resolution / 2,
            point[0],
            point[1] + resolution / 2
          ];
          vertices = toEPSG43262(vertices, vertices, 2);
          const width = getDistance(vertices.slice(0, 2), vertices.slice(2, 4));
          const height = getDistance(vertices.slice(4, 6), vertices.slice(6, 8));
          pointResolution = (width + height) / 2;
        }
        const metersPerUnit = units ? METERS_PER_UNIT[units] : projection.getMetersPerUnit();
        if (metersPerUnit !== void 0) {
          pointResolution /= metersPerUnit;
        }
      }
    }
    return pointResolution;
  }
  function addEquivalentProjections(projections) {
    addProjections(projections);
    projections.forEach(function(source) {
      projections.forEach(function(destination) {
        if (source !== destination) {
          add3(source, destination, cloneTransform);
        }
      });
    });
  }
  function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function(projection1) {
      projections2.forEach(function(projection2) {
        add3(projection1, projection2, forwardTransform);
        add3(projection2, projection1, inverseTransform);
      });
    });
  }
  function createProjection(projection, defaultCode) {
    if (!projection) {
      return get3(defaultCode);
    }
    if (typeof projection === "string") {
      return get3(projection);
    }
    return (
      /** @type {Projection} */
      projection
    );
  }
  function createTransformFromCoordinateTransform(coordTransform) {
    return (
      /**
       * @param {Array<number>} input Input.
       * @param {Array<number>} [output] Output.
       * @param {number} [dimension] Dimensions that should be transformed.
       * @param {number} [stride] Stride.
       * @return {Array<number>} Output.
       */
      (function(input, output, dimension, stride) {
        const length = input.length;
        dimension = dimension !== void 0 ? dimension : 2;
        stride = stride ?? dimension;
        output = output !== void 0 ? output : new Array(length);
        for (let i = 0; i < length; i += stride) {
          const point = coordTransform(input.slice(i, i + dimension));
          const pointLength = point.length;
          for (let j = 0, jj = stride; j < jj; ++j) {
            output[i + j] = j >= pointLength ? input[i + j] : point[j];
          }
        }
        return output;
      })
    );
  }
  function equivalent(projection1, projection2) {
    if (projection1 === projection2) {
      return true;
    }
    const equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) {
      return equalUnits;
    }
    const transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
  }
  function getTransformFromProjections(source, destination) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    let transformFunc = get2(sourceCode, destinationCode);
    if (transformFunc) {
      return transformFunc;
    }
    let sourceTransforms = null;
    let destinationTransforms = null;
    for (const makeTransforms2 of transformFactories) {
      if (!sourceTransforms) {
        sourceTransforms = makeTransforms2(source);
      }
      if (!destinationTransforms) {
        destinationTransforms = makeTransforms2(destination);
      }
    }
    if (!sourceTransforms && !destinationTransforms) {
      return null;
    }
    const intermediateCode = "EPSG:4326";
    if (!destinationTransforms) {
      const toDestination = get2(intermediateCode, destinationCode);
      if (toDestination) {
        transformFunc = composeTransformFuncs(
          sourceTransforms.inverse,
          toDestination
        );
      }
    } else if (!sourceTransforms) {
      const fromSource = get2(sourceCode, intermediateCode);
      if (fromSource) {
        transformFunc = composeTransformFuncs(
          fromSource,
          destinationTransforms.forward
        );
      }
    } else {
      transformFunc = composeTransformFuncs(
        sourceTransforms.inverse,
        destinationTransforms.forward
      );
    }
    if (transformFunc) {
      addProjection(source);
      addProjection(destination);
      add3(source, destination, transformFunc);
    }
    return transformFunc;
  }
  function composeTransformFuncs(t1, t2) {
    return function(input, output, dimensions, stride) {
      output = t1(input, output, dimensions, stride);
      return t2(output, output, dimensions, stride);
    };
  }
  function getTransform(source, destination) {
    const sourceProjection = get3(source);
    const destinationProjection = get3(destination);
    return getTransformFromProjections(sourceProjection, destinationProjection);
  }
  function transform(coordinate, source, destination) {
    const transformFunc = getTransform(source, destination);
    if (!transformFunc) {
      const sourceCode = get3(source).getCode();
      const destinationCode = get3(destination).getCode();
      throw new Error(
        `No transform available between ${sourceCode} and ${destinationCode}`
      );
    }
    return transformFunc(coordinate, void 0, coordinate.length);
  }
  function transformExtent(extent, source, destination, stops) {
    const transformFunc = getTransform(source, destination);
    return applyTransform(extent, transformFunc, void 0, stops);
  }
  var userProjection = null;
  function getUserProjection() {
    return userProjection;
  }
  function toUserCoordinate(coordinate, sourceProjection) {
    if (!userProjection) {
      return coordinate;
    }
    return transform(coordinate, sourceProjection, userProjection);
  }
  function fromUserCoordinate(coordinate, destProjection) {
    if (!userProjection) {
      if (showCoordinateWarning && !equals3(coordinate, [0, 0]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
        showCoordinateWarning = false;
        warn(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
        );
      }
      return coordinate;
    }
    return transform(coordinate, userProjection, destProjection);
  }
  function toUserExtent(extent, sourceProjection) {
    if (!userProjection) {
      return extent;
    }
    return transformExtent(extent, sourceProjection, userProjection);
  }
  function fromUserExtent(extent, destProjection) {
    if (!userProjection) {
      return extent;
    }
    return transformExtent(extent, userProjection, destProjection);
  }
  function addCommon() {
    addEquivalentProjections(PROJECTIONS);
    addEquivalentProjections(PROJECTIONS2);
    addEquivalentTransforms(
      PROJECTIONS2,
      PROJECTIONS,
      fromEPSG4326,
      toEPSG4326
    );
  }
  addCommon();

  // node_modules/ol/reproj.js
  var brokenDiagonalRendering_;
  var canvasPool = [];
  function drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
  }
  function verifyBrokenDiagonalRendering(data, offset) {
    return Math.abs(data[offset * 4] - 210) > 2 || Math.abs(data[offset * 4 + 3] - 0.75 * 255) > 2;
  }
  function isBrokenDiagonalRendering() {
    if (brokenDiagonalRendering_ === void 0) {
      const ctx = createCanvasContext2D(6, 6, canvasPool);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(210, 0, 0, 0.75)";
      drawTestTriangle(ctx, 4, 5, 4, 0);
      drawTestTriangle(ctx, 4, 5, 0, 5);
      const data = ctx.getImageData(0, 0, 3, 3).data;
      brokenDiagonalRendering_ = verifyBrokenDiagonalRendering(data, 0) || verifyBrokenDiagonalRendering(data, 4) || verifyBrokenDiagonalRendering(data, 8);
      releaseCanvas(ctx);
      canvasPool.push(ctx.canvas);
    }
    return brokenDiagonalRendering_;
  }
  function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
    const sourceCenter = transform(targetCenter, targetProj, sourceProj);
    let sourceResolution = getPointResolution(
      targetProj,
      targetResolution,
      targetCenter
    );
    const targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== void 0) {
      sourceResolution *= targetMetersPerUnit;
    }
    const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== void 0) {
      sourceResolution /= sourceMetersPerUnit;
    }
    const sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || containsCoordinate(sourceExtent, sourceCenter)) {
      const compensationFactor = getPointResolution(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
      if (isFinite(compensationFactor) && compensationFactor > 0) {
        sourceResolution /= compensationFactor;
      }
    }
    return sourceResolution;
  }
  function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
    const targetCenter = getCenter(targetExtent);
    let sourceResolution = calculateSourceResolution(
      sourceProj,
      targetProj,
      targetCenter,
      targetResolution
    );
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      forEachCorner(targetExtent, function(corner) {
        sourceResolution = calculateSourceResolution(
          sourceProj,
          targetProj,
          corner,
          targetResolution
        );
        return isFinite(sourceResolution) && sourceResolution > 0;
      });
    }
    return sourceResolution;
  }
  function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, renderEdges, interpolate, drawSingle, clipExtent) {
    const context = createCanvasContext2D(
      Math.round(pixelRatio * width),
      Math.round(pixelRatio * height),
      canvasPool
    );
    if (!interpolate) {
      context.imageSmoothingEnabled = false;
    }
    if (sources.length === 0) {
      return context.canvas;
    }
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
      return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = "lighter";
    const sourceDataExtent = createEmpty();
    sources.forEach(function(src, i, arr) {
      extend(sourceDataExtent, src.extent);
    });
    let stitchContext;
    const stitchScale = pixelRatio / sourceResolution;
    const inverseScale = (interpolate ? 1 : 1 + Math.pow(2, -24)) / stitchScale;
    if (!drawSingle || sources.length !== 1 || gutter !== 0) {
      stitchContext = createCanvasContext2D(
        Math.round(getWidth(sourceDataExtent) * stitchScale),
        Math.round(getHeight(sourceDataExtent) * stitchScale),
        canvasPool
      );
      if (!interpolate) {
        stitchContext.imageSmoothingEnabled = false;
      }
      if (sourceExtent && clipExtent) {
        const xPos = (sourceExtent[0] - sourceDataExtent[0]) * stitchScale;
        const yPos = -(sourceExtent[3] - sourceDataExtent[3]) * stitchScale;
        const width2 = getWidth(sourceExtent) * stitchScale;
        const height2 = getHeight(sourceExtent) * stitchScale;
        stitchContext.rect(xPos, yPos, width2, height2);
        stitchContext.clip();
      }
      sources.forEach(function(src, i, arr) {
        if (src.image.width > 0 && src.image.height > 0) {
          if (src.clipExtent) {
            stitchContext.save();
            const xPos2 = (src.clipExtent[0] - sourceDataExtent[0]) * stitchScale;
            const yPos2 = -(src.clipExtent[3] - sourceDataExtent[3]) * stitchScale;
            const width2 = getWidth(src.clipExtent) * stitchScale;
            const height2 = getHeight(src.clipExtent) * stitchScale;
            stitchContext.rect(
              interpolate ? xPos2 : Math.round(xPos2),
              interpolate ? yPos2 : Math.round(yPos2),
              interpolate ? width2 : Math.round(xPos2 + width2) - Math.round(xPos2),
              interpolate ? height2 : Math.round(yPos2 + height2) - Math.round(yPos2)
            );
            stitchContext.clip();
          }
          const xPos = (src.extent[0] - sourceDataExtent[0]) * stitchScale;
          const yPos = -(src.extent[3] - sourceDataExtent[3]) * stitchScale;
          const srcWidth = getWidth(src.extent) * stitchScale;
          const srcHeight = getHeight(src.extent) * stitchScale;
          stitchContext.drawImage(
            src.image,
            gutter,
            gutter,
            src.image.width - 2 * gutter,
            src.image.height - 2 * gutter,
            interpolate ? xPos : Math.round(xPos),
            interpolate ? yPos : Math.round(yPos),
            interpolate ? srcWidth : Math.round(xPos + srcWidth) - Math.round(xPos),
            interpolate ? srcHeight : Math.round(yPos + srcHeight) - Math.round(yPos)
          );
          if (src.clipExtent) {
            stitchContext.restore();
          }
        }
      });
    }
    const targetTopLeft = getTopLeft(targetExtent);
    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      const source = triangle.source;
      const target = triangle.target;
      let x0 = source[0][0], y0 = source[0][1];
      let x1 = source[1][0], y1 = source[1][1];
      let x2 = source[2][0], y2 = source[2][1];
      const u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
      const v0 = pixelRound(
        -(target[0][1] - targetTopLeft[1]) / targetResolution
      );
      const u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
      const v1 = pixelRound(
        -(target[1][1] - targetTopLeft[1]) / targetResolution
      );
      const u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
      const v2 = pixelRound(
        -(target[2][1] - targetTopLeft[1]) / targetResolution
      );
      const sourceNumericalShiftX = x0;
      const sourceNumericalShiftY = y0;
      x0 = 0;
      y0 = 0;
      x1 -= sourceNumericalShiftX;
      y1 -= sourceNumericalShiftY;
      x2 -= sourceNumericalShiftX;
      y2 -= sourceNumericalShiftY;
      const augmentedMatrix = [
        [x1, y1, 0, 0, u1 - u0],
        [x2, y2, 0, 0, u2 - u0],
        [0, 0, x1, y1, v1 - v0],
        [0, 0, x2, y2, v2 - v0]
      ];
      const affineCoefs = solveLinearSystem(augmentedMatrix);
      if (!affineCoefs) {
        return;
      }
      context.save();
      context.beginPath();
      if (isBrokenDiagonalRendering() || !interpolate) {
        context.moveTo(u1, v1);
        const steps = 4;
        const ud = u0 - u1;
        const vd = v0 - v1;
        for (let step = 0; step < steps; step++) {
          context.lineTo(
            u1 + pixelRound((step + 1) * ud / steps),
            v1 + pixelRound(step * vd / (steps - 1))
          );
          if (step != steps - 1) {
            context.lineTo(
              u1 + pixelRound((step + 1) * ud / steps),
              v1 + pixelRound((step + 1) * vd / (steps - 1))
            );
          }
        }
        context.lineTo(u2, v2);
      } else {
        context.moveTo(u1, v1);
        context.lineTo(u0, v0);
        context.lineTo(u2, v2);
      }
      context.clip();
      context.transform(
        affineCoefs[0],
        affineCoefs[2],
        affineCoefs[1],
        affineCoefs[3],
        u0,
        v0
      );
      context.translate(
        sourceDataExtent[0] - sourceNumericalShiftX,
        sourceDataExtent[3] - sourceNumericalShiftY
      );
      let image;
      if (stitchContext) {
        image = stitchContext.canvas;
        context.scale(inverseScale, -inverseScale);
      } else {
        const source2 = sources[0];
        const extent = source2.extent;
        image = source2.image;
        context.scale(
          getWidth(extent) / image.width,
          -getHeight(extent) / image.height
        );
      }
      context.drawImage(image, 0, 0);
      context.restore();
    });
    if (stitchContext) {
      releaseCanvas(stitchContext);
      canvasPool.push(stitchContext.canvas);
    }
    if (renderEdges) {
      context.save();
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = "black";
      context.lineWidth = 1;
      triangulation.getTriangles().forEach(function(triangle, i, arr) {
        const target = triangle.target;
        const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
        const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
        const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
        const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
        const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
        const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
        context.beginPath();
        context.moveTo(u1, v1);
        context.lineTo(u0, v0);
        context.lineTo(u2, v2);
        context.closePath();
        context.stroke();
      });
      context.restore();
    }
    return context.canvas;
  }

  // node_modules/ol/transform.js
  var tmp_ = new Array(6);
  function create() {
    return [1, 0, 0, 1, 0, 0];
  }
  function apply(transform2, coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    coordinate[0] = transform2[0] * x + transform2[2] * y + transform2[4];
    coordinate[1] = transform2[1] * x + transform2[3] * y + transform2[5];
    return coordinate;
  }
  function compose(transform2, dx1, dy1, sx, sy, angle, dx2, dy2) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    transform2[0] = sx * cos;
    transform2[1] = sy * sin;
    transform2[2] = -sx * sin;
    transform2[3] = sy * cos;
    transform2[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform2[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform2;
  }
  function makeInverse(target, source) {
    const det = determinant(source);
    assert(det !== 0, "Transformation matrix cannot be inverted");
    const a = source[0];
    const b = source[1];
    const c = source[2];
    const d = source[3];
    const e = source[4];
    const f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
  }
  function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
  }
  var matrixPrecision = [1e5, 1e5, 1e5, 1e5, 2, 2];
  function toString(mat) {
    const transformString = "matrix(" + mat.join(", ") + ")";
    return transformString;
  }
  function fromString(cssTransform) {
    const values = cssTransform.substring(7, cssTransform.length - 1).split(",");
    return values.map(parseFloat);
  }
  function equivalent2(cssTransform1, cssTransform2) {
    const mat1 = fromString(cssTransform1);
    const mat2 = fromString(cssTransform2);
    for (let i = 0; i < 6; ++i) {
      if (Math.round((mat1[i] - mat2[i]) * matrixPrecision[i]) !== 0) {
        return false;
      }
    }
    return true;
  }

  // node_modules/ol/reproj/Triangulation.js
  var MAX_SUBDIVISION = 10;
  var MAX_TRIANGLE_WIDTH = 0.25;
  var Triangulation = class {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
     * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
     * @param {number} errorThreshold Acceptable error (in source units).
     * @param {?number} destinationResolution The (optional) resolution of the destination.
     * @param {import("../transform.js").Transform} [sourceMatrix] Source transform matrix.
     */
    constructor(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, destinationResolution, sourceMatrix) {
      this.sourceProj_ = sourceProj;
      this.targetProj_ = targetProj;
      let transformInvCache = {};
      const transformInv = sourceMatrix ? createTransformFromCoordinateTransform(
        (input) => apply(
          sourceMatrix,
          transform(input, this.targetProj_, this.sourceProj_)
        )
      ) : getTransform(this.targetProj_, this.sourceProj_);
      this.transformInv_ = function(c) {
        const key = c[0] + "/" + c[1];
        if (!transformInvCache[key]) {
          transformInvCache[key] = transformInv(c);
        }
        return transformInvCache[key];
      };
      this.maxSourceExtent_ = maxSourceExtent;
      this.errorThresholdSquared_ = errorThreshold * errorThreshold;
      this.triangles_ = [];
      this.wrapsXInSource_ = false;
      this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && getWidth(maxSourceExtent) >= getWidth(this.sourceProj_.getExtent());
      this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? getWidth(this.sourceProj_.getExtent()) : null;
      this.targetWorldWidth_ = this.targetProj_.getExtent() ? getWidth(this.targetProj_.getExtent()) : null;
      const destinationTopLeft = getTopLeft(targetExtent);
      const destinationTopRight = getTopRight(targetExtent);
      const destinationBottomRight = getBottomRight(targetExtent);
      const destinationBottomLeft = getBottomLeft(targetExtent);
      const sourceTopLeft = this.transformInv_(destinationTopLeft);
      const sourceTopRight = this.transformInv_(destinationTopRight);
      const sourceBottomRight = this.transformInv_(destinationBottomRight);
      const sourceBottomLeft = this.transformInv_(destinationBottomLeft);
      const maxSubdivision = MAX_SUBDIVISION + (destinationResolution ? Math.max(
        0,
        Math.ceil(
          Math.log2(
            getArea(targetExtent) / (destinationResolution * destinationResolution * 256 * 256)
          )
        )
      ) : 0);
      this.addQuad_(
        destinationTopLeft,
        destinationTopRight,
        destinationBottomRight,
        destinationBottomLeft,
        sourceTopLeft,
        sourceTopRight,
        sourceBottomRight,
        sourceBottomLeft,
        maxSubdivision
      );
      if (this.wrapsXInSource_) {
        let leftBound = Infinity;
        this.triangles_.forEach(function(triangle, i, arr) {
          leftBound = Math.min(
            leftBound,
            triangle.source[0][0],
            triangle.source[1][0],
            triangle.source[2][0]
          );
        });
        this.triangles_.forEach((triangle) => {
          if (Math.max(
            triangle.source[0][0],
            triangle.source[1][0],
            triangle.source[2][0]
          ) - leftBound > this.sourceWorldWidth_ / 2) {
            const newTriangle = [
              [triangle.source[0][0], triangle.source[0][1]],
              [triangle.source[1][0], triangle.source[1][1]],
              [triangle.source[2][0], triangle.source[2][1]]
            ];
            if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[0][0] -= this.sourceWorldWidth_;
            }
            if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[1][0] -= this.sourceWorldWidth_;
            }
            if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[2][0] -= this.sourceWorldWidth_;
            }
            const minX = Math.min(
              newTriangle[0][0],
              newTriangle[1][0],
              newTriangle[2][0]
            );
            const maxX = Math.max(
              newTriangle[0][0],
              newTriangle[1][0],
              newTriangle[2][0]
            );
            if (maxX - minX < this.sourceWorldWidth_ / 2) {
              triangle.source = newTriangle;
            }
          }
        });
      }
      transformInvCache = {};
    }
    /**
     * Adds triangle to the triangulation.
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @private
     */
    addTriangle_(a, b, c, aSrc, bSrc, cSrc) {
      this.triangles_.push({
        source: [aSrc, bSrc, cSrc],
        target: [a, b, c]
      });
    }
    /**
     * Adds quad (points in clock-wise order) to the triangulation
     * (and reprojects the vertices) if valid.
     * Performs quad subdivision if needed to increase precision.
     *
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
     * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
     * @private
     */
    addQuad_(a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
      const sourceQuadExtent = boundingExtent([aSrc, bSrc, cSrc, dSrc]);
      const sourceCoverageX = this.sourceWorldWidth_ ? getWidth(sourceQuadExtent) / this.sourceWorldWidth_ : null;
      const sourceWorldWidth = (
        /** @type {number} */
        this.sourceWorldWidth_
      );
      const wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;
      let needsSubdivision = false;
      if (maxSubdivision > 0) {
        if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
          const targetQuadExtent = boundingExtent([a, b, c, d]);
          const targetCoverageX = getWidth(targetQuadExtent) / this.targetWorldWidth_;
          needsSubdivision = targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
        if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
          needsSubdivision = sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
      }
      if (!needsSubdivision && this.maxSourceExtent_) {
        if (isFinite(sourceQuadExtent[0]) && isFinite(sourceQuadExtent[1]) && isFinite(sourceQuadExtent[2]) && isFinite(sourceQuadExtent[3])) {
          if (!intersects(sourceQuadExtent, this.maxSourceExtent_)) {
            return;
          }
        }
      }
      let isNotFinite = 0;
      if (!needsSubdivision) {
        if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
          if (maxSubdivision > 0) {
            needsSubdivision = true;
          } else {
            isNotFinite = (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) + (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) + (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) + (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
            if (isNotFinite != 1 && isNotFinite != 2 && isNotFinite != 4 && isNotFinite != 8) {
              return;
            }
          }
        }
      }
      if (maxSubdivision > 0) {
        if (!needsSubdivision) {
          const center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
          const centerSrc = this.transformInv_(center);
          let dx;
          if (wrapsX) {
            const centerSrcEstimX = (modulo(aSrc[0], sourceWorldWidth) + modulo(cSrc[0], sourceWorldWidth)) / 2;
            dx = centerSrcEstimX - modulo(centerSrc[0], sourceWorldWidth);
          } else {
            dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
          }
          const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
          const centerSrcErrorSquared = dx * dx + dy * dy;
          needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
        }
        if (needsSubdivision) {
          if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
            const bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
            const bcSrc = this.transformInv_(bc);
            const da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
            const daSrc = this.transformInv_(da);
            this.addQuad_(
              a,
              b,
              bc,
              da,
              aSrc,
              bSrc,
              bcSrc,
              daSrc,
              maxSubdivision - 1
            );
            this.addQuad_(
              da,
              bc,
              c,
              d,
              daSrc,
              bcSrc,
              cSrc,
              dSrc,
              maxSubdivision - 1
            );
          } else {
            const ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
            const abSrc = this.transformInv_(ab);
            const cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
            const cdSrc = this.transformInv_(cd);
            this.addQuad_(
              a,
              ab,
              cd,
              d,
              aSrc,
              abSrc,
              cdSrc,
              dSrc,
              maxSubdivision - 1
            );
            this.addQuad_(
              ab,
              b,
              c,
              cd,
              abSrc,
              bSrc,
              cSrc,
              cdSrc,
              maxSubdivision - 1
            );
          }
          return;
        }
      }
      if (wrapsX) {
        if (!this.canWrapXInSource_) {
          return;
        }
        this.wrapsXInSource_ = true;
      }
      if ((isNotFinite & 11) == 0) {
        this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
      }
      if ((isNotFinite & 14) == 0) {
        this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
      }
      if (isNotFinite) {
        if ((isNotFinite & 13) == 0) {
          this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
        }
        if ((isNotFinite & 7) == 0) {
          this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
        }
      }
    }
    /**
     * Calculates extent of the `source` coordinates from all the triangles.
     *
     * @return {import("../extent.js").Extent} Calculated extent.
     */
    calculateSourceExtent() {
      const extent = createEmpty();
      this.triangles_.forEach(function(triangle, i, arr) {
        const src = triangle.source;
        extendCoordinate(extent, src[0]);
        extendCoordinate(extent, src[1]);
        extendCoordinate(extent, src[2]);
      });
      return extent;
    }
    /**
     * @return {Array<Triangle>} Array of the calculated triangles.
     */
    getTriangles() {
      return this.triangles_;
    }
  };
  var Triangulation_default = Triangulation;

  // node_modules/ol/reproj/common.js
  var ERROR_THRESHOLD = 0.5;

  // node_modules/ol/reproj/Tile.js
  var ReprojTile = class extends Tile_default {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
     * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} gutter Gutter of the source tiles.
     * @param {FunctionType} getTileFunction
     *     Function returning source tiles (z, x, y, pixelRatio).
     * @param {number} [errorThreshold] Acceptable reprojection error (in px).
     * @param {boolean} [renderEdges] Render reprojection edges.
     * @param {import("../Tile.js").Options} [options] Tile options.
     */
    constructor(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, errorThreshold, renderEdges, options) {
      super(tileCoord, TileState_default.IDLE, options);
      this.renderEdges_ = renderEdges !== void 0 ? renderEdges : false;
      this.pixelRatio_ = pixelRatio;
      this.gutter_ = gutter;
      this.canvas_ = null;
      this.sourceTileGrid_ = sourceTileGrid;
      this.targetTileGrid_ = targetTileGrid;
      this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
      this.sourceTiles_ = [];
      this.sourcesListenerKeys_ = null;
      this.sourceZ_ = 0;
      this.clipExtent_ = sourceProj.canWrapX() ? sourceProj.getExtent() : void 0;
      const targetExtent = targetTileGrid.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      const maxTargetExtent = this.targetTileGrid_.getExtent();
      let maxSourceExtent = this.sourceTileGrid_.getExtent();
      const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
      if (getArea(limitedTargetExtent) === 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      const sourceProjExtent = sourceProj.getExtent();
      if (sourceProjExtent) {
        if (!maxSourceExtent) {
          maxSourceExtent = sourceProjExtent;
        } else {
          maxSourceExtent = getIntersection(maxSourceExtent, sourceProjExtent);
        }
      }
      const targetResolution = targetTileGrid.getResolution(
        this.wrappedTileCoord_[0]
      );
      const sourceResolution = calculateSourceExtentResolution(
        sourceProj,
        targetProj,
        limitedTargetExtent,
        targetResolution
      );
      if (!isFinite(sourceResolution) || sourceResolution <= 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      const errorThresholdInPixels = errorThreshold !== void 0 ? errorThreshold : ERROR_THRESHOLD;
      this.triangulation_ = new Triangulation_default(
        sourceProj,
        targetProj,
        limitedTargetExtent,
        maxSourceExtent,
        sourceResolution * errorThresholdInPixels,
        targetResolution
      );
      if (this.triangulation_.getTriangles().length === 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
      let sourceExtent = this.triangulation_.calculateSourceExtent();
      if (maxSourceExtent) {
        if (sourceProj.canWrapX()) {
          sourceExtent[1] = clamp(
            sourceExtent[1],
            maxSourceExtent[1],
            maxSourceExtent[3]
          );
          sourceExtent[3] = clamp(
            sourceExtent[3],
            maxSourceExtent[1],
            maxSourceExtent[3]
          );
        } else {
          sourceExtent = getIntersection(sourceExtent, maxSourceExtent);
        }
      }
      if (!getArea(sourceExtent)) {
        this.state = TileState_default.EMPTY;
      } else {
        let worldWidth = 0;
        let worldsAway = 0;
        if (sourceProj.canWrapX()) {
          worldWidth = getWidth(sourceProjExtent);
          worldsAway = Math.floor(
            (sourceExtent[0] - sourceProjExtent[0]) / worldWidth
          );
        }
        const sourceExtents = wrapAndSliceX(
          sourceExtent.slice(),
          sourceProj,
          true
        );
        sourceExtents.forEach((extent) => {
          const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
            extent,
            this.sourceZ_
          );
          for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
            for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
              const offset = worldsAway * worldWidth;
              this.sourceTiles_.push({
                getTile: () => getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio),
                offset
              });
            }
          }
          ++worldsAway;
        });
        if (this.sourceTiles_.length === 0) {
          this.state = TileState_default.EMPTY;
        }
      }
    }
    /**
     * Get the HTML Canvas element for this tile.
     * @return {HTMLCanvasElement|OffscreenCanvas} Canvas.
     */
    getImage() {
      return this.canvas_;
    }
    /**
     * @private
     */
    reproject_() {
      const sources = [];
      this.sourceTiles_.forEach((source) => {
        const tile = source.tile;
        if (tile && tile.getState() == TileState_default.LOADED) {
          const extent = this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord);
          extent[0] += source.offset;
          extent[2] += source.offset;
          const clipExtent = this.clipExtent_?.slice();
          if (clipExtent) {
            clipExtent[0] += source.offset;
            clipExtent[2] += source.offset;
          }
          sources.push({
            extent,
            clipExtent,
            image: tile.getImage()
          });
        }
      });
      this.sourceTiles_.length = 0;
      if (sources.length === 0) {
        this.state = TileState_default.ERROR;
      } else {
        const z = this.wrappedTileCoord_[0];
        const size = this.targetTileGrid_.getTileSize(z);
        const width = typeof size === "number" ? size : size[0];
        const height = typeof size === "number" ? size : size[1];
        const targetResolution = this.targetTileGrid_.getResolution(z);
        const sourceResolution = this.sourceTileGrid_.getResolution(
          this.sourceZ_
        );
        const targetExtent = this.targetTileGrid_.getTileCoordExtent(
          this.wrappedTileCoord_
        );
        this.canvas_ = render(
          width,
          height,
          this.pixelRatio_,
          sourceResolution,
          this.sourceTileGrid_.getExtent(),
          targetResolution,
          targetExtent,
          this.triangulation_,
          sources,
          this.gutter_,
          this.renderEdges_,
          this.interpolate
        );
        this.state = TileState_default.LOADED;
      }
      this.changed();
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
      for (const sourceTile of this.sourceTiles_) {
        sourceTile.tile = sourceTile.getTile();
      }
      if (this.state == TileState_default.IDLE) {
        this.state = TileState_default.LOADING;
        this.changed();
        let leftToLoad = 0;
        this.sourcesListenerKeys_ = [];
        this.sourceTiles_.forEach(({ tile }) => {
          const state = tile.getState();
          if (state == TileState_default.IDLE || state == TileState_default.LOADING) {
            leftToLoad++;
            const sourceListenKey = listen(tile, EventType_default.CHANGE, (e) => {
              const state2 = tile.getState();
              if (state2 == TileState_default.LOADED || state2 == TileState_default.ERROR || state2 == TileState_default.EMPTY) {
                unlistenByKey(sourceListenKey);
                leftToLoad--;
                if (leftToLoad === 0) {
                  this.unlistenSources_();
                  this.reproject_();
                }
              }
            });
            this.sourcesListenerKeys_.push(sourceListenKey);
          }
        });
        if (leftToLoad === 0) {
          setTimeout(this.reproject_.bind(this), 0);
        } else {
          this.sourceTiles_.forEach(function({ tile }, i, arr) {
            const state = tile.getState();
            if (state == TileState_default.IDLE) {
              tile.load();
            }
          });
        }
      }
    }
    /**
     * @private
     */
    unlistenSources_() {
      this.sourcesListenerKeys_.forEach(unlistenByKey);
      this.sourcesListenerKeys_ = null;
    }
    /**
     * Remove from the cache due to expiry
     * @override
     */
    release() {
      if (this.canvas_) {
        releaseCanvas(
          /** @type {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} */
          this.canvas_.getContext("2d")
        );
        canvasPool.push(this.canvas_);
        this.canvas_ = null;
      }
      this.sourceTiles_.length = 0;
      super.release();
    }
  };
  var Tile_default2 = ReprojTile;

  // node_modules/ol/tilegrid.js
  function getForProjection(projection) {
    let tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
      tileGrid = createForProjection(projection);
      projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
  }
  function wrapX3(tileGrid, tileCoord, projection) {
    const z = tileCoord[0];
    const center = tileGrid.getTileCoordCenter(tileCoord);
    const projectionExtent = extentFromProjection(projection);
    if (!containsCoordinate(projectionExtent, center)) {
      const worldWidth = getWidth(projectionExtent);
      const worldsAway = Math.ceil(
        (projectionExtent[0] - center[0]) / worldWidth
      );
      center[0] += worldWidth * worldsAway;
      return tileGrid.getTileCoordForCoordAndZ(center, z);
    }
    return tileCoord;
  }
  function createForExtent(extent, maxZoom, tileSize, corner) {
    corner = corner !== void 0 ? corner : "top-left";
    const resolutions = resolutionsFromExtent(extent, maxZoom, tileSize);
    return new TileGrid_default({
      extent,
      origin: getCorner(extent, corner),
      resolutions,
      tileSize
    });
  }
  function resolutionsFromExtent(extent, maxZoom, tileSize, maxResolution) {
    maxZoom = maxZoom !== void 0 ? maxZoom : DEFAULT_MAX_ZOOM;
    tileSize = toSize(tileSize !== void 0 ? tileSize : DEFAULT_TILE_SIZE);
    const height = getHeight(extent);
    const width = getWidth(extent);
    maxResolution = maxResolution > 0 ? maxResolution : Math.max(width / tileSize[0], height / tileSize[1]);
    const length = maxZoom + 1;
    const resolutions = new Array(length);
    for (let z = 0; z < length; ++z) {
      resolutions[z] = maxResolution / Math.pow(2, z);
    }
    return resolutions;
  }
  function createForProjection(projection, maxZoom, tileSize, corner) {
    const extent = extentFromProjection(projection);
    return createForExtent(extent, maxZoom, tileSize, corner);
  }
  function extentFromProjection(projection) {
    projection = get3(projection);
    let extent = projection.getExtent();
    if (!extent) {
      const half = 180 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit();
      extent = createOrUpdate(-half, -half, half, half);
    }
    return extent;
  }

  // node_modules/ol/uri.js
  var zRegEx = /\{z\}/g;
  var xRegEx = /\{x\}/g;
  var yRegEx = /\{y\}/g;
  var dashYRegEx = /\{-y\}/g;
  function renderXYZTemplate(template, z, x, y, maxY) {
    return template.replace(zRegEx, z.toString()).replace(xRegEx, x.toString()).replace(yRegEx, y.toString()).replace(dashYRegEx, function() {
      if (maxY === void 0) {
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known"
        );
      }
      return (maxY - y).toString();
    });
  }
  function expandUrl(url) {
    const urls = [];
    let match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
      const startCharCode = match[1].charCodeAt(0);
      const stopCharCode = match[2].charCodeAt(0);
      let charCode;
      for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
        urls.push(url.replace(match[0], String.fromCharCode(charCode)));
      }
      return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
      const stop = parseInt(match[2], 10);
      for (let i = parseInt(match[1], 10); i <= stop; i++) {
        urls.push(url.replace(match[0], i.toString()));
      }
      return urls;
    }
    urls.push(url);
    return urls;
  }

  // node_modules/ol/tileurlfunction.js
  function createFromTemplate(template, tileGrid) {
    return (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      (function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
          return void 0;
        }
        let maxY;
        const z = tileCoord[0];
        if (tileGrid) {
          const range = tileGrid.getFullTileRange(z);
          if (range) {
            maxY = range.getHeight() - 1;
          }
        }
        return renderXYZTemplate(template, z, tileCoord[1], tileCoord[2], maxY);
      })
    );
  }
  function createFromTemplates(templates, tileGrid) {
    const len = templates.length;
    const tileUrlFunctions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
    }
    return createFromTileUrlFunctions(tileUrlFunctions);
  }
  function createFromTileUrlFunctions(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) {
      return tileUrlFunctions[0];
    }
    return (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      (function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
          return void 0;
        }
        const h = hash(tileCoord);
        const index = modulo(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
      })
    );
  }

  // node_modules/ol/ObjectEventType.js
  var ObjectEventType_default = {
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */
    PROPERTYCHANGE: "propertychange"
  };

  // node_modules/ol/Observable.js
  var Observable = class extends Target_default {
    constructor() {
      super();
      this.on = /** @type {ObservableOnSignature<import("./events.js").EventsKey>} */
      this.onInternal;
      this.once = /** @type {ObservableOnSignature<import("./events.js").EventsKey>} */
      this.onceInternal;
      this.un = /** @type {ObservableOnSignature<void>} */
      this.unInternal;
      this.revision_ = 0;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    changed() {
      ++this.revision_;
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */
    getRevision() {
      return this.revision_;
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onInternal(type, listener) {
      if (Array.isArray(type)) {
        const len = type.length;
        const keys = new Array(len);
        for (let i = 0; i < len; ++i) {
          keys[i] = listen(this, type[i], listener);
        }
        return keys;
      }
      return listen(
        this,
        /** @type {string} */
        type,
        listener
      );
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onceInternal(type, listener) {
      let key;
      if (Array.isArray(type)) {
        const len = type.length;
        key = new Array(len);
        for (let i = 0; i < len; ++i) {
          key[i] = listenOnce(this, type[i], listener);
        }
      } else {
        key = listenOnce(
          this,
          /** @type {string} */
          type,
          listener
        );
      }
      listener.ol_key = key;
      return key;
    }
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @protected
     */
    unInternal(type, listener) {
      const key = (
        /** @type {Object} */
        listener.ol_key
      );
      if (key) {
        unByKey(key);
      } else if (Array.isArray(type)) {
        for (let i = 0, ii = type.length; i < ii; ++i) {
          this.removeEventListener(type[i], listener);
        }
      } else {
        this.removeEventListener(type, listener);
      }
    }
  };
  Observable.prototype.on;
  Observable.prototype.once;
  Observable.prototype.un;
  function unByKey(key) {
    if (Array.isArray(key)) {
      for (let i = 0, ii = key.length; i < ii; ++i) {
        unlistenByKey(key[i]);
      }
    } else {
      unlistenByKey(
        /** @type {import("./events.js").EventsKey} */
        key
      );
    }
  }
  var Observable_default = Observable;

  // node_modules/ol/Object.js
  var ObjectEvent = class extends Event_default {
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */
    constructor(type, key, oldValue) {
      super(type);
      this.key = key;
      this.oldValue = oldValue;
    }
  };
  var BaseObject = class extends Observable_default {
    /**
     * @param {NoInfer<Properties>} [values] An object with key-value pairs.
     */
    constructor(values) {
      super();
      this.on;
      this.once;
      this.un;
      getUid(this);
      this.values_ = null;
      if (values !== void 0) {
        this.setProperties(values);
      }
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */
    get(key) {
      let value;
      if (this.values_ && this.values_.hasOwnProperty(key)) {
        value = this.values_[key];
      }
      return value;
    }
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */
    getKeys() {
      return this.values_ && Object.keys(this.values_) || [];
    }
    /**
     * Get an object of all property names and values.
     * @return {NoInfer<Properties>} Object.
     * @api
     */
    getProperties() {
      return (
        /** @type {NoInfer<Properties>} */
        this.values_ && Object.assign({}, this.values_) || {}
      );
    }
    /**
     * Get an object of all property names and values.
     * @return {Partial<NoInfer<Properties>>?} Object.
     */
    getPropertiesInternal() {
      return this.values_;
    }
    /**
     * @return {boolean} The object has properties.
     */
    hasProperties() {
      return !!this.values_;
    }
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */
    notify(key, oldValue) {
      let eventType;
      eventType = `change:${key}`;
      if (this.hasListener(eventType)) {
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
      }
      eventType = ObjectEventType_default.PROPERTYCHANGE;
      if (this.hasListener(eventType)) {
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
      }
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    addChangeListener(key, listener) {
      this.addEventListener(`change:${key}`, listener);
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    removeChangeListener(key, listener) {
      this.removeEventListener(`change:${key}`, listener);
    }
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    set(key, value, silent) {
      const values = this.values_ || (this.values_ = {});
      if (silent) {
        values[key] = value;
      } else {
        const oldValue = values[key];
        values[key] = value;
        if (oldValue !== value) {
          this.notify(key, oldValue);
        }
      }
    }
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Partial<NoInfer<Properties>>} values Values.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    setProperties(values, silent) {
      for (const key in values) {
        this.set(key, values[key], silent);
      }
    }
    /**
     * Apply any properties from another object without triggering events.
     * @param {BaseObject} source The source object.
     * @protected
     */
    applyProperties(source) {
      if (!source.values_) {
        return;
      }
      Object.assign(this.values_ || (this.values_ = {}), source.values_);
    }
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean} [silent] Unset without triggering an event.
     * @api
     */
    unset(key, silent) {
      if (this.values_ && key in this.values_) {
        const oldValue = this.values_[key];
        delete this.values_[key];
        if (isEmpty2(this.values_)) {
          this.values_ = null;
        }
        if (!silent) {
          this.notify(key, oldValue);
        }
      }
    }
  };
  var Object_default = BaseObject;

  // node_modules/ol/source/Source.js
  var Source = class extends Object_default {
    /**
     * @param {Options} options Source options.
     */
    constructor(options) {
      super();
      this.projection = get3(options.projection);
      this.attributions_ = adaptAttributions(options.attributions);
      this.attributionsCollapsible_ = options.attributionsCollapsible ?? true;
      this.loading = false;
      this.state_ = options.state !== void 0 ? options.state : "ready";
      this.wrapX_ = options.wrapX !== void 0 ? options.wrapX : false;
      this.interpolate_ = !!options.interpolate;
      this.viewResolver = null;
      this.viewRejector = null;
      const self2 = this;
      this.viewPromise_ = new Promise(function(resolve, reject) {
        self2.viewResolver = resolve;
        self2.viewRejector = reject;
      });
    }
    /**
     * Get the attribution function for the source.
     * @return {?Attribution} Attribution function.
     * @api
     */
    getAttributions() {
      return this.attributions_;
    }
    /**
     * @return {boolean} Attributions are collapsible.
     * @api
     */
    getAttributionsCollapsible() {
      return this.attributionsCollapsible_;
    }
    /**
     * Get the projection of the source.
     * @return {import("../proj/Projection.js").default|null} Projection.
     * @api
     */
    getProjection() {
      return this.projection;
    }
    /**
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     */
    getResolutions(projection) {
      return null;
    }
    /**
     * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
     */
    getView() {
      return this.viewPromise_;
    }
    /**
     * Get the state of the source, see {@link import("./Source.js").State} for possible states.
     * @return {import("./Source.js").State} State.
     * @api
     */
    getState() {
      return this.state_;
    }
    /**
     * @return {boolean|undefined} Wrap X.
     */
    getWrapX() {
      return this.wrapX_;
    }
    /**
     * @return {boolean} Use linear interpolation when resampling.
     */
    getInterpolate() {
      return this.interpolate_;
    }
    /**
     * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
     * @api
     */
    refresh() {
      this.changed();
    }
    /**
     * Set the attributions of the source.
     * @param {AttributionLike|undefined} attributions Attributions.
     *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
     *     or `undefined`.
     * @api
     */
    setAttributions(attributions) {
      this.attributions_ = adaptAttributions(attributions);
      this.changed();
    }
    /**
     * Set the state of the source.
     * @param {import("./Source.js").State} state State.
     */
    setState(state) {
      this.state_ = state;
      this.changed();
    }
  };
  function adaptAttributions(attributionLike) {
    if (!attributionLike) {
      return null;
    }
    if (typeof attributionLike === "function") {
      return attributionLike;
    }
    if (!Array.isArray(attributionLike)) {
      attributionLike = [attributionLike];
    }
    return (frameState) => attributionLike;
  }
  var Source_default = Source;

  // node_modules/ol/source/Tile.js
  var TileSource = class extends Source_default {
    /**
     * @param {Options} options SourceTile source options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        attributionsCollapsible: options.attributionsCollapsible,
        projection: options.projection,
        state: options.state,
        wrapX: options.wrapX,
        interpolate: options.interpolate
      });
      this.on;
      this.once;
      this.un;
      this.tilePixelRatio_ = options.tilePixelRatio !== void 0 ? options.tilePixelRatio : 1;
      this.tileGrid = options.tileGrid !== void 0 ? options.tileGrid : null;
      const tileSize = [256, 256];
      if (this.tileGrid) {
        toSize(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), tileSize);
      }
      this.tmpSize = [0, 0];
      this.key_ = options.key || getUid(this);
      this.tileOptions = {
        transition: options.transition,
        interpolate: options.interpolate
      };
      this.zDirection = options.zDirection ? options.zDirection : 0;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    getGutterForProjection(projection) {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     */
    getKey() {
      return this.key_;
    }
    /**
     * Set the value to be used as the key for all tiles in the source.
     * @param {string} key The key for tiles.
     * @protected
     */
    setKey(key) {
      if (this.key_ !== key) {
        this.key_ = key;
        this.changed();
      }
    }
    /**
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     * @override
     */
    getResolutions(projection) {
      const tileGrid = projection ? this.getTileGridForProjection(projection) : this.tileGrid;
      if (!tileGrid) {
        return null;
      }
      return tileGrid.getResolutions();
    }
    /**
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {TileType|null} Tile.
     */
    getTile(z, x, y, pixelRatio, projection, tileCache) {
      return abstract();
    }
    /**
     * Return the tile grid of the tile source.
     * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
     * @api
     */
    getTileGrid() {
      return this.tileGrid;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    getTileGridForProjection(projection) {
      if (!this.tileGrid) {
        return getForProjection(projection);
      }
      return this.tileGrid;
    }
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided `pixelRatio` as close as possible.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Tile pixel ratio.
     */
    getTilePixelRatio(pixelRatio) {
      return this.tilePixelRatio_;
    }
    /**
     * @param {number} z Z.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../size.js").Size} Tile size.
     */
    getTilePixelSize(z, pixelRatio, projection) {
      const tileGrid = this.getTileGridForProjection(projection);
      const tilePixelRatio = this.getTilePixelRatio(pixelRatio);
      const tileSize = toSize(tileGrid.getTileSize(z), this.tmpSize);
      if (tilePixelRatio == 1) {
        return tileSize;
      }
      return scale(tileSize, tilePixelRatio, this.tmpSize);
    }
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, `null` will be
     * returned.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
     *     null if no tile URL should be created for the passed `tileCoord`.
     */
    getTileCoordForTileUrlFunction(tileCoord, projection) {
      const gridProjection = projection !== void 0 ? projection : this.getProjection();
      const tileGrid = projection !== void 0 ? this.getTileGridForProjection(gridProjection) : this.tileGrid || this.getTileGridForProjection(gridProjection);
      if (this.getWrapX() && gridProjection.isGlobal()) {
        tileCoord = wrapX3(tileGrid, tileCoord, gridProjection);
      }
      return withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
    }
    /**
     * Remove all cached reprojected tiles from the source. The next render cycle will create new tiles.
     * @api
     */
    clear() {
    }
    /**
     * @override
     */
    refresh() {
      this.clear();
      super.refresh();
    }
  };
  var TileSourceEvent = class extends Event_default {
    /**
     * @param {string} type Type.
     * @param {import("../Tile.js").default} tile The tile.
     */
    constructor(type, tile) {
      super(type);
      this.tile = tile;
    }
  };
  var Tile_default3 = TileSource;

  // node_modules/ol/source/TileEventType.js
  var TileEventType_default = {
    /**
     * Triggered when a tile starts loading.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
     * @api
     */
    TILELOADSTART: "tileloadstart",
    /**
     * Triggered when a tile finishes loading, either when its data is loaded,
     * or when loading was aborted because the tile is no longer needed.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadend
     * @api
     */
    TILELOADEND: "tileloadend",
    /**
     * Triggered if tile loading results in an error. Note that this is not the
     * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
     * for details.
     * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
     * @api
     */
    TILELOADERROR: "tileloaderror"
  };

  // node_modules/ol/source/UrlTile.js
  var UrlTile = class _UrlTile extends Tile_default3 {
    /**
     * @param {Options} options Image tile options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        cacheSize: options.cacheSize,
        projection: options.projection,
        state: options.state,
        tileGrid: options.tileGrid,
        tilePixelRatio: options.tilePixelRatio,
        wrapX: options.wrapX,
        transition: options.transition,
        interpolate: options.interpolate,
        key: options.key,
        attributionsCollapsible: options.attributionsCollapsible,
        zDirection: options.zDirection
      });
      this.generateTileUrlFunction_ = this.tileUrlFunction === _UrlTile.prototype.tileUrlFunction;
      this.tileLoadFunction = options.tileLoadFunction;
      if (options.tileUrlFunction) {
        this.tileUrlFunction = options.tileUrlFunction;
      }
      this.urls = null;
      if (options.urls) {
        this.setUrls(options.urls);
      } else if (options.url) {
        this.setUrl(options.url);
      }
      this.tileLoadingKeys_ = {};
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile load function of the source.
     * @return {import("../Tile.js").LoadFunction} TileLoadFunction
     * @api
     */
    getTileLoadFunction() {
      return this.tileLoadFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile URL function of the source.
     * @return {import("../Tile.js").UrlFunction} TileUrlFunction
     * @api
     */
    getTileUrlFunction() {
      return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the URLs used for this source.
     * When a tileUrlFunction is used instead of url or urls,
     * null will be returned.
     * @return {!Array<string>|null} URLs.
     * @api
     */
    getUrls() {
      return this.urls;
    }
    /**
     * Handle tile change events.
     * @param {import("../events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(event) {
      const tile = (
        /** @type {import("../Tile.js").default} */
        event.target
      );
      const uid = getUid(tile);
      const tileState = tile.getState();
      let type;
      if (tileState == TileState_default.LOADING) {
        this.tileLoadingKeys_[uid] = true;
        type = TileEventType_default.TILELOADSTART;
      } else if (uid in this.tileLoadingKeys_) {
        delete this.tileLoadingKeys_[uid];
        type = tileState == TileState_default.ERROR ? TileEventType_default.TILELOADERROR : tileState == TileState_default.LOADED ? TileEventType_default.TILELOADEND : void 0;
      }
      if (type != void 0) {
        this.dispatchEvent(new TileSourceEvent(type, tile));
      }
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile load function of the source.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @api
     */
    setTileLoadFunction(tileLoadFunction) {
      this.tileLoadFunction = tileLoadFunction;
      this.changed();
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile URL function of the source.
     * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
     * @param {string} [key] Optional new tile key for the source.
     * @api
     */
    setTileUrlFunction(tileUrlFunction, key) {
      this.tileUrlFunction = tileUrlFunction;
      if (typeof key !== "undefined") {
        this.setKey(key);
      } else {
        this.changed();
      }
    }
    /**
     * Set the URL to use for requests.
     * @param {string} url URL.
     * @api
     */
    setUrl(url) {
      const urls = expandUrl(url);
      this.urls = urls;
      this.setUrls(urls);
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the URLs to use for requests.
     * @param {Array<string>} urls URLs.
     * @api
     */
    setUrls(urls) {
      this.urls = urls;
      const key = urls.join("\n");
      if (this.generateTileUrlFunction_) {
        this.setTileUrlFunction(createFromTemplates(urls, this.tileGrid), key);
      } else {
        this.setKey(key);
      }
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    tileUrlFunction(tileCoord, pixelRatio, projection) {
      return void 0;
    }
  };
  var UrlTile_default = UrlTile;

  // node_modules/ol/source/TileImage.js
  var TileImage = class extends UrlTile_default {
    /**
     * @param {!Options} options Image tile options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        cacheSize: options.cacheSize,
        projection: options.projection,
        state: options.state,
        tileGrid: options.tileGrid,
        tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultTileLoadFunction,
        tilePixelRatio: options.tilePixelRatio,
        tileUrlFunction: options.tileUrlFunction,
        url: options.url,
        urls: options.urls,
        wrapX: options.wrapX,
        transition: options.transition,
        interpolate: options.interpolate !== void 0 ? options.interpolate : true,
        key: options.key,
        attributionsCollapsible: options.attributionsCollapsible,
        zDirection: options.zDirection
      });
      this.crossOrigin = options.crossOrigin !== void 0 ? options.crossOrigin : null;
      this.referrerPolicy = options.referrerPolicy;
      this.tileClass = options.tileClass !== void 0 ? options.tileClass : ImageTile_default;
      this.tileGridForProjection = {};
      this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
      this.renderReprojectionEdges_ = false;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     * @override
     */
    getGutterForProjection(projection) {
      if (this.getProjection() && projection && !equivalent(this.getProjection(), projection)) {
        return 0;
      }
      return this.getGutter();
    }
    /**
     * @return {number} Gutter.
     */
    getGutter() {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     * @override
     */
    getKey() {
      let key = super.getKey();
      if (!this.getInterpolate()) {
        key += ":disable-interpolation";
      }
      return key;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     * @override
     */
    getTileGridForProjection(projection) {
      const thisProj = this.getProjection();
      if (this.tileGrid && (!thisProj || equivalent(thisProj, projection))) {
        return this.tileGrid;
      }
      const projKey = getUid(projection);
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = getForProjection(projection);
      }
      return this.tileGridForProjection[projKey];
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {string} key The key set on the tile.
     * @return {!ImageTile} Tile.
     * @private
     */
    createTile_(z, x, y, pixelRatio, projection, key) {
      const tileCoord = [z, x, y];
      const urlTileCoord = this.getTileCoordForTileUrlFunction(
        tileCoord,
        projection
      );
      const tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : void 0;
      const tile = new this.tileClass(
        tileCoord,
        tileUrl !== void 0 ? TileState_default.IDLE : TileState_default.EMPTY,
        tileUrl !== void 0 ? tileUrl : "",
        {
          crossOrigin: this.crossOrigin,
          referrerPolicy: this.referrerPolicy
        },
        this.tileLoadFunction,
        this.tileOptions
      );
      tile.key = key;
      tile.addEventListener(EventType_default.CHANGE, this.handleTileChange.bind(this));
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {!(ImageTile|ReprojTile)} Tile.
     * @override
     */
    getTile(z, x, y, pixelRatio, projection, tileCache) {
      const sourceProjection = this.getProjection();
      if (!sourceProjection || !projection || equivalent(sourceProjection, projection)) {
        return this.getTileInternal(
          z,
          x,
          y,
          pixelRatio,
          sourceProjection || projection
        );
      }
      const tileCoord = [z, x, y];
      const key = this.getKey();
      const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
      const targetTileGrid = this.getTileGridForProjection(projection);
      const wrappedTileCoord = this.getTileCoordForTileUrlFunction(
        tileCoord,
        projection
      );
      const tile = new Tile_default2(
        sourceProjection,
        sourceTileGrid,
        projection,
        targetTileGrid,
        tileCoord,
        wrappedTileCoord,
        this.getTilePixelRatio(pixelRatio),
        this.getGutter(),
        (z2, x2, y2, pixelRatio2) => this.getTileInternal(z2, x2, y2, pixelRatio2, sourceProjection, tileCache),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions
      );
      tile.key = key;
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {!import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {!ImageTile} Tile.
     * @protected
     */
    getTileInternal(z, x, y, pixelRatio, projection, tileCache) {
      const key = this.getKey();
      const cacheKey = getCacheKey(this, key, z, x, y);
      if (tileCache && tileCache.containsKey(cacheKey)) {
        const tile2 = (
          /** @type {!ImageTile} */
          tileCache.get(cacheKey)
        );
        return tile2;
      }
      const tile = this.createTile_(z, x, y, pixelRatio, projection, key);
      tileCache?.set(cacheKey, tile);
      return tile;
    }
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     * @param {boolean} render Render the edges.
     * @api
     */
    setRenderReprojectionEdges(render2) {
      if (this.renderReprojectionEdges_ == render2) {
        return;
      }
      this.renderReprojectionEdges_ = render2;
      this.changed();
    }
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     *
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     *
     * @param {import("../proj.js").ProjectionLike} projection Projection.
     * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
     * @api
     */
    setTileGridForProjection(projection, tilegrid) {
      const proj = get3(projection);
      if (proj) {
        const projKey = getUid(proj);
        if (!(projKey in this.tileGridForProjection)) {
          this.tileGridForProjection[projKey] = tilegrid;
        }
      }
    }
  };
  function defaultTileLoadFunction(imageTile, src) {
    if (WORKER_OFFSCREEN_CANVAS) {
      const crossOrigin = imageTile.getCrossOrigin();
      let mode = "same-origin";
      let credentials = "same-origin";
      if (crossOrigin === "anonymous" || crossOrigin === "") {
        mode = "cors";
        credentials = "omit";
      } else if (crossOrigin === "use-credentials") {
        mode = "cors";
        credentials = "include";
      }
      const options = {
        mode,
        credentials,
        referrerPolicy: imageTile.getReferrerPolicy()
      };
      fetch(src, options).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.blob();
      }).then((blob) => {
        return createImageBitmap(blob);
      }).then((imageBitmap) => {
        const canvas = imageTile.getImage();
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const ctx = (
          /** @type {OffscreenCanvas} */
          canvas.getContext("2d")
        );
        ctx.drawImage(imageBitmap, 0, 0);
        imageBitmap.close?.();
        canvas.dispatchEvent(new Event("load"));
      }).catch(() => {
        const canvas = imageTile.getImage();
        canvas.dispatchEvent(new Event("error"));
      });
      return;
    }
    imageTile.getImage().src = src;
  }
  var TileImage_default = TileImage;

  // node_modules/ol/source/Zoomify.js
  var CustomTile = class extends ImageTile_default {
    /**
     * @param {import("../size.js").Size} tileSize Full tile size.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {import('../dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("../Tile.js").Options} [options] Tile options.
     */
    constructor(tileSize, tileCoord, state, src, imageAttributes, tileLoadFunction, options) {
      super(tileCoord, state, src, imageAttributes, tileLoadFunction, options);
      this.zoomifyImage_ = null;
      this.tileSize_ = tileSize;
    }
    /**
     * Get the image element for this tile.
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @override
     */
    getImage() {
      if (this.zoomifyImage_) {
        return this.zoomifyImage_;
      }
      const image = super.getImage();
      if (this.state == TileState_default.LOADED) {
        const tileSize = this.tileSize_;
        if (image.width == tileSize[0] && image.height == tileSize[1]) {
          this.zoomifyImage_ = image;
          return image;
        }
        const context = createCanvasContext2D(tileSize[0], tileSize[1]);
        context.drawImage(image, 0, 0);
        this.zoomifyImage_ = context.canvas;
        return context.canvas;
      }
      return image;
    }
  };

  // node_modules/ol/source/IIIF.js
  function formatPercentage(percentage) {
    return percentage.toLocaleString("en", { maximumFractionDigits: 10 });
  }
  var IIIF = class extends TileImage_default {
    /**
     * @param {Options} [options] Tile source options. Use {@link import("../format/IIIFInfo.js").IIIFInfo}
     * to parse Image API service information responses into constructor options.
     * @api
     */
    constructor(options) {
      const partialOptions = options || {};
      let baseUrl = partialOptions.url || "";
      baseUrl = baseUrl + (baseUrl.lastIndexOf("/") === baseUrl.length - 1 || baseUrl === "" ? "" : "/");
      const version = partialOptions.version || Versions.VERSION2;
      const sizes = partialOptions.sizes || [];
      const size = partialOptions.size;
      assert(
        size != void 0 && Array.isArray(size) && size.length == 2 && !isNaN(size[0]) && size[0] > 0 && !isNaN(size[1]) && size[1] > 0,
        "Missing or invalid `size`"
      );
      const width = size[0];
      const height = size[1];
      const tileSize = partialOptions.tileSize;
      const tilePixelRatio = partialOptions.tilePixelRatio || 1;
      const format = partialOptions.format || "jpg";
      const quality = partialOptions.quality || (partialOptions.version == Versions.VERSION1 ? "native" : "default");
      let resolutions = partialOptions.resolutions || [];
      const supports = partialOptions.supports || [];
      const extent = partialOptions.extent || [0, -height, width, 0];
      const supportsListedSizes = sizes != void 0 && Array.isArray(sizes) && sizes.length > 0;
      const supportsListedTiles = tileSize !== void 0 && (typeof tileSize === "number" && Number.isInteger(tileSize) && tileSize > 0 || Array.isArray(tileSize) && tileSize.length > 0);
      const supportsArbitraryTiling = supports != void 0 && Array.isArray(supports) && (supports.includes("regionByPx") || supports.includes("regionByPct")) && (supports.includes("sizeByWh") || supports.includes("sizeByH") || supports.includes("sizeByW") || supports.includes("sizeByPct"));
      let tileWidth, tileHeight, maxZoom;
      resolutions.sort(function(a, b) {
        return b - a;
      });
      if (supportsListedTiles || supportsArbitraryTiling) {
        if (tileSize != void 0) {
          if (typeof tileSize === "number" && Number.isInteger(tileSize) && tileSize > 0) {
            tileWidth = tileSize;
            tileHeight = tileSize;
          } else if (Array.isArray(tileSize) && tileSize.length > 0) {
            if (tileSize.length == 1 || tileSize[1] == void 0 && Number.isInteger(tileSize[0])) {
              tileWidth = tileSize[0];
              tileHeight = tileSize[0];
            }
            if (tileSize.length == 2) {
              if (Number.isInteger(tileSize[0]) && Number.isInteger(tileSize[1])) {
                tileWidth = tileSize[0];
                tileHeight = tileSize[1];
              } else if (tileSize[0] == void 0 && Number.isInteger(tileSize[1])) {
                tileWidth = tileSize[1];
                tileHeight = tileSize[1];
              }
            }
          }
        }
        if (tileWidth === void 0 || tileHeight === void 0) {
          tileWidth = DEFAULT_TILE_SIZE;
          tileHeight = DEFAULT_TILE_SIZE;
        }
        if (resolutions.length == 0) {
          maxZoom = Math.max(
            Math.ceil(Math.log(width / tileWidth) / Math.LN2),
            Math.ceil(Math.log(height / tileHeight) / Math.LN2)
          );
          for (let i = maxZoom; i >= 0; i--) {
            resolutions.push(Math.pow(2, i));
          }
        } else {
          const maxScaleFactor = Math.max(...resolutions);
          maxZoom = Math.round(Math.log(maxScaleFactor) / Math.LN2);
        }
      } else {
        tileWidth = width;
        tileHeight = height;
        resolutions = [];
        if (supportsListedSizes) {
          sizes.sort(function(a, b) {
            return a[0] - b[0];
          });
          maxZoom = -1;
          const ignoredSizesIndex = [];
          for (let i = 0; i < sizes.length; i++) {
            const resolution = width / sizes[i][0];
            if (resolutions.length > 0 && resolutions[resolutions.length - 1] == resolution) {
              ignoredSizesIndex.push(i);
              continue;
            }
            resolutions.push(resolution);
            maxZoom++;
          }
          if (ignoredSizesIndex.length > 0) {
            for (let i = 0; i < ignoredSizesIndex.length; i++) {
              sizes.splice(ignoredSizesIndex[i] - i, 1);
            }
          }
        } else {
          resolutions.push(1);
          sizes.push([width, height]);
          maxZoom = 0;
        }
      }
      const tileGrid = new TileGrid_default({
        tileSize: [tileWidth, tileHeight],
        extent,
        origin: getTopLeft(extent),
        resolutions
      });
      const tileUrlFunction = function(tileCoord, pixelRatio, projection) {
        let regionParam, sizeParam;
        const zoom = tileCoord[0];
        if (zoom > maxZoom) {
          return;
        }
        const tileX = tileCoord[1], tileY = tileCoord[2], scale4 = resolutions[zoom];
        if (tileX === void 0 || tileY === void 0 || scale4 === void 0 || tileX < 0 || Math.ceil(width / scale4 / tileWidth) <= tileX || tileY < 0 || Math.ceil(height / scale4 / tileHeight) <= tileY) {
          return;
        }
        if (supportsArbitraryTiling || supportsListedTiles) {
          const regionX = tileX * tileWidth * scale4, regionY = tileY * tileHeight * scale4;
          let regionW = tileWidth * scale4, regionH = tileHeight * scale4, sizeW = tileWidth, sizeH = tileHeight;
          if (regionX + regionW > width) {
            regionW = width - regionX;
          }
          if (regionY + regionH > height) {
            regionH = height - regionY;
          }
          if (regionX + tileWidth * scale4 > width) {
            sizeW = Math.floor((width - regionX + scale4 - 1) / scale4);
          }
          if (regionY + tileHeight * scale4 > height) {
            sizeH = Math.floor((height - regionY + scale4 - 1) / scale4);
          }
          if (regionX == 0 && regionW == width && regionY == 0 && regionH == height) {
            regionParam = "full";
          } else if (!supportsArbitraryTiling || supports.includes("regionByPx")) {
            regionParam = regionX + "," + regionY + "," + regionW + "," + regionH;
          } else if (supports.includes("regionByPct")) {
            const pctX = formatPercentage(regionX / width * 100), pctY = formatPercentage(regionY / height * 100), pctW = formatPercentage(regionW / width * 100), pctH = formatPercentage(regionH / height * 100);
            regionParam = "pct:" + pctX + "," + pctY + "," + pctW + "," + pctH;
          }
          if (version == Versions.VERSION3 && (!supportsArbitraryTiling || supports.includes("sizeByWh"))) {
            sizeParam = sizeW + "," + sizeH;
          } else if (!supportsArbitraryTiling || supports.includes("sizeByW")) {
            sizeParam = sizeW + ",";
          } else if (supports.includes("sizeByH")) {
            sizeParam = "," + sizeH;
          } else if (supports.includes("sizeByWh")) {
            sizeParam = sizeW + "," + sizeH;
          } else if (supports.includes("sizeByPct")) {
            sizeParam = "pct:" + formatPercentage(100 / scale4);
          }
        } else {
          regionParam = "full";
          if (supportsListedSizes) {
            const regionWidth = sizes[zoom][0], regionHeight = sizes[zoom][1];
            if (version == Versions.VERSION3) {
              if (regionWidth == width && regionHeight == height) {
                sizeParam = "max";
              } else {
                sizeParam = regionWidth + "," + regionHeight;
              }
            } else {
              if (regionWidth == width) {
                sizeParam = "full";
              } else {
                sizeParam = regionWidth + ",";
              }
            }
          } else {
            sizeParam = version == Versions.VERSION3 ? "max" : "full";
          }
        }
        return baseUrl + regionParam + "/" + sizeParam + "/0/" + quality + "." + format;
      };
      const IiifTileClass = CustomTile.bind(
        null,
        toSize(tileSize || 256).map(function(size2) {
          return size2 * tilePixelRatio;
        })
      );
      super({
        attributions: partialOptions.attributions,
        attributionsCollapsible: partialOptions.attributionsCollapsible,
        cacheSize: partialOptions.cacheSize,
        crossOrigin: partialOptions.crossOrigin,
        interpolate: partialOptions.interpolate,
        projection: partialOptions.projection,
        reprojectionErrorThreshold: partialOptions.reprojectionErrorThreshold,
        state: partialOptions.state,
        tileClass: IiifTileClass,
        tileGrid,
        tilePixelRatio: partialOptions.tilePixelRatio,
        tileUrlFunction,
        transition: partialOptions.transition
      });
      this.zDirection = partialOptions.zDirection;
    }
  };
  var IIIF_default = IIIF;

  // node_modules/ol/CollectionEventType.js
  var CollectionEventType_default = {
    /**
     * Triggered when an item is added to the collection.
     * @event module:ol/Collection.CollectionEvent#add
     * @api
     */
    ADD: "add",
    /**
     * Triggered when an item is removed from the collection.
     * @event module:ol/Collection.CollectionEvent#remove
     * @api
     */
    REMOVE: "remove"
  };

  // node_modules/ol/Collection.js
  var Property = {
    LENGTH: "length"
  };
  var CollectionEvent = class extends Event_default {
    /**
     * @param {import("./CollectionEventType.js").default} type Type.
     * @param {T} element Element.
     * @param {number} index The index of the added or removed element.
     */
    constructor(type, element, index) {
      super(type);
      this.element = element;
      this.index = index;
    }
  };
  var Collection = class extends Object_default {
    /**
     * @param {Array<T>} [array] Array.
     * @param {Options} [options] Collection options.
     */
    constructor(array, options) {
      super();
      this.on;
      this.once;
      this.un;
      options = options || {};
      this.unique_ = !!options.unique;
      this.array_ = array ?? [];
      if (this.unique_) {
        for (let i = 1, ii = this.array_.length; i < ii; ++i) {
          this.assertUnique_(this.array_[i], i);
        }
      }
      this.updateLength_();
    }
    /**
     * Remove all elements from the collection.
     * @api
     */
    clear() {
      while (this.getLength() > 0) {
        this.pop();
      }
    }
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param {!Array<T>} arr Array.
     * @return {Collection<T>} This collection.
     * @api
     */
    extend(arr) {
      for (let i = 0, ii = arr.length; i < ii; ++i) {
        this.push(arr[i]);
      }
      return this;
    }
    /**
     * Iterate over each element, calling the provided callback.
     * @param {function(T, number, Array<T>): *} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @api
     */
    forEach(f) {
      const array = this.array_;
      for (let i = 0, ii = array.length; i < ii; ++i) {
        f(array[i], i, array);
      }
    }
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return {!Array<T>} Array.
     * @api
     */
    getArray() {
      return this.array_;
    }
    /**
     * Get the element at the provided index.
     * @param {number} index Index.
     * @return {T} Element.
     * @api
     */
    item(index) {
      return this.array_[index];
    }
    /**
     * Get the length of this collection.
     * @return {number} The length of the array.
     * @observable
     * @api
     */
    getLength() {
      return this.get(Property.LENGTH);
    }
    /**
     * Insert an element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    insertAt(index, elem) {
      if (index < 0 || index > this.getLength()) {
        throw new Error("Index out of bounds: " + index);
      }
      if (this.unique_) {
        this.assertUnique_(elem);
      }
      this.array_.splice(index, 0, elem);
      this.updateLength_();
      this.dispatchEvent(
        new CollectionEvent(CollectionEventType_default.ADD, elem, index)
      );
    }
    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return {T|undefined} Element.
     * @api
     */
    pop() {
      return this.removeAt(this.getLength() - 1);
    }
    /**
     * Insert the provided element at the end of the collection.
     * @param {T} elem Element.
     * @return {number} New length of the collection.
     * @api
     */
    push(elem) {
      const n = this.getLength();
      this.insertAt(n, elem);
      return this.getLength();
    }
    /**
     * Remove the first occurrence of an element from the collection.
     * @param {T} elem Element.
     * @return {T|undefined} The removed element or undefined if none found.
     * @api
     */
    remove(elem) {
      const arr = this.array_;
      for (let i = 0, ii = arr.length; i < ii; ++i) {
        if (arr[i] === elem) {
          return this.removeAt(i);
        }
      }
      return void 0;
    }
    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param {number} index Index.
     * @return {T|undefined} Value.
     * @api
     */
    removeAt(index) {
      if (index < 0 || index >= this.getLength()) {
        return void 0;
      }
      const prev = this.array_[index];
      this.array_.splice(index, 1);
      this.updateLength_();
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
      );
      return prev;
    }
    /**
     * Set the element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    setAt(index, elem) {
      const n = this.getLength();
      if (index >= n) {
        this.insertAt(index, elem);
        return;
      }
      if (index < 0) {
        throw new Error("Index out of bounds: " + index);
      }
      if (this.unique_) {
        this.assertUnique_(elem, index);
      }
      const prev = this.array_[index];
      this.array_[index] = elem;
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
      );
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.ADD, elem, index)
      );
    }
    /**
     * @private
     */
    updateLength_() {
      this.set(Property.LENGTH, this.array_.length);
    }
    /**
     * @private
     * @param {T} elem Element.
     * @param {number} [except] Optional index to ignore.
     */
    assertUnique_(elem, except) {
      const array = this.array_;
      for (let i = 0, ii = array.length; i < ii; ++i) {
        if (array[i] === elem && i !== except) {
          throw new Error("Duplicate item added to a unique collection");
        }
      }
    }
  };
  var Collection_default = Collection;

  // node_modules/ol/MapEvent.js
  var MapEvent = class extends Event_default {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {?import("./Map.js").FrameState} [frameState] Frame state.
     */
    constructor(type, map, frameState) {
      super(type);
      this.map = map;
      this.frameState = frameState !== void 0 ? frameState : null;
    }
  };
  var MapEvent_default = MapEvent;

  // node_modules/ol/MapBrowserEvent.js
  var MapBrowserEvent = class extends MapEvent_default {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {EVENT} originalEvent Original event.
     * @param {boolean} [dragging] Is the map currently being dragged?
     * @param {import("./Map.js").FrameState} [frameState] Frame state.
     * @param {Array<PointerEvent>} [activePointers] Active pointers.
     */
    constructor(type, map, originalEvent, dragging, frameState, activePointers) {
      super(type, map, frameState);
      this.originalEvent = originalEvent;
      this.pixel_ = null;
      this.coordinate_ = null;
      this.dragging = dragging !== void 0 ? dragging : false;
      this.activePointers = activePointers;
    }
    /**
     * The map pixel relative to the viewport corresponding to the original event.
     * @type {import("./pixel.js").Pixel}
     * @api
     */
    get pixel() {
      if (!this.pixel_) {
        this.pixel_ = this.map.getEventPixel(this.originalEvent);
      }
      return this.pixel_;
    }
    set pixel(pixel) {
      this.pixel_ = pixel;
    }
    /**
     * The coordinate corresponding to the original browser event.  This will be in the user
     * projection if one is set.  Otherwise it will be in the view projection.
     * @type {import("./coordinate.js").Coordinate}
     * @api
     */
    get coordinate() {
      if (!this.coordinate_) {
        this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
      }
      return this.coordinate_;
    }
    set coordinate(coordinate) {
      this.coordinate_ = coordinate;
    }
    /**
     * Prevents the default browser action.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
     * @api
     * @override
     */
    preventDefault() {
      super.preventDefault();
      if ("preventDefault" in this.originalEvent) {
        this.originalEvent.preventDefault();
      }
    }
    /**
     * Prevents further propagation of the current event.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
     * @api
     * @override
     */
    stopPropagation() {
      super.stopPropagation();
      if ("stopPropagation" in this.originalEvent) {
        this.originalEvent.stopPropagation();
      }
    }
  };
  var MapBrowserEvent_default = MapBrowserEvent;

  // node_modules/ol/MapBrowserEventType.js
  var MapBrowserEventType_default = {
    /**
     * A true single click with no dragging and no double click. Note that this
     * event is delayed by 250 ms to ensure that it is not a double click.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
     * @api
     */
    SINGLECLICK: "singleclick",
    /**
     * A click with no dragging. A double click will fire two of this.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
     * @api
     */
    CLICK: EventType_default.CLICK,
    /**
     * A true double click, with no dragging.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
     * @api
     */
    DBLCLICK: EventType_default.DBLCLICK,
    /**
     * Triggered when a pointer is dragged.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
     * @api
     */
    POINTERDRAG: "pointerdrag",
    /**
     * Triggered when a pointer is moved. Note that on touch devices this is
     * triggered when the map is panned, so is not the same as mousemove.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
     * @api
     */
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  };

  // node_modules/ol/pointer/EventType.js
  var EventType_default2 = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  };

  // node_modules/ol/MapBrowserEventHandler.js
  var MapBrowserEventHandler = class extends Target_default {
    /**
     * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
     * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
     */
    constructor(map, moveTolerance) {
      super(map);
      this.map_ = map;
      this.clickTimeoutId_;
      this.emulateClicks_ = false;
      this.dragging_ = false;
      this.dragListenerKeys_ = [];
      this.moveTolerance_ = moveTolerance === void 0 ? 1 : moveTolerance;
      this.down_ = null;
      const element = this.map_.getViewport();
      this.activePointers_ = [];
      this.trackedTouches_ = {};
      this.element_ = element;
      this.pointerdownListenerKey_ = listen(
        element,
        EventType_default2.POINTERDOWN,
        this.handlePointerDown_,
        this
      );
      this.originalPointerMoveEvent_;
      this.relayedListenerKey_ = listen(
        element,
        EventType_default2.POINTERMOVE,
        this.relayMoveEvent_,
        this
      );
      this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);
      this.element_.addEventListener(
        EventType_default.TOUCHMOVE,
        this.boundHandleTouchMove_,
        PASSIVE_EVENT_LISTENERS ? { passive: false } : false
      );
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    emulateClick_(pointerEvent) {
      let newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.CLICK,
        this.map_,
        pointerEvent
      );
      this.dispatchEvent(newEvent);
      if (this.clickTimeoutId_ !== void 0) {
        clearTimeout(this.clickTimeoutId_);
        this.clickTimeoutId_ = void 0;
        newEvent = new MapBrowserEvent_default(
          MapBrowserEventType_default.DBLCLICK,
          this.map_,
          pointerEvent
        );
        this.dispatchEvent(newEvent);
      } else {
        this.clickTimeoutId_ = setTimeout(() => {
          this.clickTimeoutId_ = void 0;
          const newEvent2 = new MapBrowserEvent_default(
            MapBrowserEventType_default.SINGLECLICK,
            this.map_,
            pointerEvent
          );
          this.dispatchEvent(newEvent2);
        }, 250);
      }
    }
    /**
     * Keeps track on how many pointers are currently active.
     *
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    updateActivePointers_(pointerEvent) {
      const event = pointerEvent;
      const id = event.pointerId;
      if (event.type == MapBrowserEventType_default.POINTERUP || event.type == MapBrowserEventType_default.POINTERCANCEL) {
        delete this.trackedTouches_[id];
        for (const pointerId in this.trackedTouches_) {
          if (this.trackedTouches_[pointerId].target !== event.target) {
            delete this.trackedTouches_[pointerId];
            break;
          }
        }
      } else if (event.type == MapBrowserEventType_default.POINTERDOWN || event.type == MapBrowserEventType_default.POINTERMOVE) {
        this.trackedTouches_[id] = event;
      }
      this.activePointers_ = Object.values(this.trackedTouches_);
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerUp_(pointerEvent) {
      this.updateActivePointers_(pointerEvent);
      const newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERUP,
        this.map_,
        pointerEvent,
        void 0,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(newEvent);
      if (this.emulateClicks_ && !newEvent.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(pointerEvent)) {
        this.emulateClick_(this.down_);
      }
      if (this.activePointers_.length === 0) {
        this.dragListenerKeys_.forEach(unlistenByKey);
        this.dragListenerKeys_.length = 0;
        this.dragging_ = false;
        this.down_ = null;
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} If the left mouse button was pressed.
     * @private
     */
    isMouseActionButton_(pointerEvent) {
      return pointerEvent.button === 0;
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerDown_(pointerEvent) {
      this.emulateClicks_ = this.activePointers_.length === 0;
      this.updateActivePointers_(pointerEvent);
      const newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERDOWN,
        this.map_,
        pointerEvent,
        void 0,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(newEvent);
      this.down_ = new PointerEvent(pointerEvent.type, pointerEvent);
      Object.defineProperty(this.down_, "target", {
        writable: false,
        value: pointerEvent.target
      });
      if (this.dragListenerKeys_.length === 0) {
        const doc = this.map_.getOwnerDocument();
        this.dragListenerKeys_.push(
          listen(
            doc,
            MapBrowserEventType_default.POINTERMOVE,
            this.handlePointerMove_,
            this
          ),
          listen(doc, MapBrowserEventType_default.POINTERUP, this.handlePointerUp_, this),
          /* Note that the listener for `pointercancel is set up on
           * `pointerEventHandler_` and not `documentPointerEventHandler_` like
           * the `pointerup` and `pointermove` listeners.
           *
           * The reason for this is the following: `TouchSource.vacuumTouches_()`
           * issues `pointercancel` events, when there was no `touchend` for a
           * `touchstart`. Now, let's say a first `touchstart` is registered on
           * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
           * But `documentPointerEventHandler_` doesn't know about the first
           * `touchstart`. If there is no `touchend` for the `touchstart`, we can
           * only receive a `touchcancel` from `pointerEventHandler_`, because it is
           * only registered there.
           */
          listen(
            this.element_,
            MapBrowserEventType_default.POINTERCANCEL,
            this.handlePointerUp_,
            this
          )
        );
        if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
          this.dragListenerKeys_.push(
            listen(
              this.element_.getRootNode(),
              MapBrowserEventType_default.POINTERUP,
              this.handlePointerUp_,
              this
            )
          );
        }
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerMove_(pointerEvent) {
      if (this.isMoving_(pointerEvent)) {
        this.updateActivePointers_(pointerEvent);
        this.dragging_ = true;
        const newEvent = new MapBrowserEvent_default(
          MapBrowserEventType_default.POINTERDRAG,
          this.map_,
          pointerEvent,
          this.dragging_,
          void 0,
          this.activePointers_
        );
        this.dispatchEvent(newEvent);
      }
    }
    /**
     * Wrap and relay a pointermove event.
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    relayMoveEvent_(pointerEvent) {
      this.originalPointerMoveEvent_ = pointerEvent;
      const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
      this.dispatchEvent(
        new MapBrowserEvent_default(
          MapBrowserEventType_default.POINTERMOVE,
          this.map_,
          pointerEvent,
          dragging
        )
      );
    }
    /**
     * Flexible handling of a `touch-action: none` css equivalent: because calling
     * `preventDefault()` on a `pointermove` event does not stop native page scrolling
     * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
     * when an interaction (currently `DragPan` handles the event.
     * @param {TouchEvent} event Event.
     * @private
     */
    handleTouchMove_(event) {
      const originalEvent = this.originalPointerMoveEvent_;
      if ((!originalEvent || originalEvent.defaultPrevented) && (typeof event.cancelable !== "boolean" || event.cancelable === true)) {
        event.preventDefault();
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} Is moving.
     * @private
     */
    isMoving_(pointerEvent) {
      return this.dragging_ || Math.abs(pointerEvent.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.relayedListenerKey_) {
        unlistenByKey(this.relayedListenerKey_);
        this.relayedListenerKey_ = null;
      }
      this.element_.removeEventListener(
        EventType_default.TOUCHMOVE,
        this.boundHandleTouchMove_
      );
      if (this.pointerdownListenerKey_) {
        unlistenByKey(this.pointerdownListenerKey_);
        this.pointerdownListenerKey_ = null;
      }
      this.dragListenerKeys_.forEach(unlistenByKey);
      this.dragListenerKeys_.length = 0;
      this.element_ = null;
      super.disposeInternal();
    }
  };
  var MapBrowserEventHandler_default = MapBrowserEventHandler;

  // node_modules/ol/MapEventType.js
  var MapEventType_default = {
    /**
     * Triggered after a map frame is rendered.
     * @event module:ol/MapEvent~MapEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered when the map starts moving.
     * @event module:ol/MapEvent~MapEvent#movestart
     * @api
     */
    MOVESTART: "movestart",
    /**
     * Triggered after the map is moved.
     * @event module:ol/MapEvent~MapEvent#moveend
     * @api
     */
    MOVEEND: "moveend",
    /**
     * Triggered when loading of additional map data (tiles, images, features) starts.
     * @event module:ol/MapEvent~MapEvent#loadstart
     * @api
     */
    LOADSTART: "loadstart",
    /**
     * Triggered when loading of additional map data has completed.
     * @event module:ol/MapEvent~MapEvent#loadend
     * @api
     */
    LOADEND: "loadend"
  };

  // node_modules/ol/MapProperty.js
  var MapProperty_default = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view"
  };

  // node_modules/ol/structs/PriorityQueue.js
  var DROP = Infinity;
  var PriorityQueue = class {
    /**
     * @param {function(T): number} priorityFunction Priority function.
     * @param {function(T): string} keyFunction Key function.
     */
    constructor(priorityFunction, keyFunction) {
      this.priorityFunction_ = priorityFunction;
      this.keyFunction_ = keyFunction;
      this.elements_ = [];
      this.priorities_ = [];
      this.queuedElements_ = {};
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.elements_.length = 0;
      this.priorities_.length = 0;
      clear(this.queuedElements_);
    }
    /**
     * Remove and return the highest-priority element. O(log N).
     * @return {T} Element.
     */
    dequeue() {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const element = elements[0];
      if (elements.length == 1) {
        elements.length = 0;
        priorities.length = 0;
      } else {
        elements[0] = /** @type {T} */
        elements.pop();
        priorities[0] = /** @type {number} */
        priorities.pop();
        this.siftUp_(0);
      }
      const elementKey = this.keyFunction_(element);
      delete this.queuedElements_[elementKey];
      return element;
    }
    /**
     * Enqueue an element. O(log N).
     * @param {T} element Element.
     * @return {boolean} The element was added to the queue.
     */
    enqueue(element) {
      assert(
        !(this.keyFunction_(element) in this.queuedElements_),
        "Tried to enqueue an `element` that was already added to the queue"
      );
      const priority = this.priorityFunction_(element);
      if (priority != DROP) {
        this.elements_.push(element);
        this.priorities_.push(priority);
        this.queuedElements_[this.keyFunction_(element)] = true;
        this.siftDown_(0, this.elements_.length - 1);
        return true;
      }
      return false;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.elements_.length;
    }
    /**
     * Gets the index of the left child of the node at the given index.
     * @param {number} index The index of the node to get the left child for.
     * @return {number} The index of the left child.
     * @private
     */
    getLeftChildIndex_(index) {
      return index * 2 + 1;
    }
    /**
     * Gets the index of the right child of the node at the given index.
     * @param {number} index The index of the node to get the right child for.
     * @return {number} The index of the right child.
     * @private
     */
    getRightChildIndex_(index) {
      return index * 2 + 2;
    }
    /**
     * Gets the index of the parent of the node at the given index.
     * @param {number} index The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    getParentIndex_(index) {
      return index - 1 >> 1;
    }
    /**
     * Make this a heap. O(N).
     * @private
     */
    heapify_() {
      let i;
      for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
        this.siftUp_(i);
      }
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return this.elements_.length === 0;
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Is key queued.
     */
    isKeyQueued(key) {
      return key in this.queuedElements_;
    }
    /**
     * @param {T} element Element.
     * @return {boolean} Is queued.
     */
    isQueued(element) {
      return this.isKeyQueued(this.keyFunction_(element));
    }
    /**
     * @param {number} index The index of the node to move down.
     * @private
     */
    siftUp_(index) {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const count = elements.length;
      const element = elements[index];
      const priority = priorities[index];
      const startIndex = index;
      while (index < count >> 1) {
        const lIndex = this.getLeftChildIndex_(index);
        const rIndex = this.getRightChildIndex_(index);
        const smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex] ? rIndex : lIndex;
        elements[index] = elements[smallerChildIndex];
        priorities[index] = priorities[smallerChildIndex];
        index = smallerChildIndex;
      }
      elements[index] = element;
      priorities[index] = priority;
      this.siftDown_(startIndex, index);
    }
    /**
     * @param {number} startIndex The index of the root.
     * @param {number} index The index of the node to move up.
     * @private
     */
    siftDown_(startIndex, index) {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const element = elements[index];
      const priority = priorities[index];
      while (index > startIndex) {
        const parentIndex = this.getParentIndex_(index);
        if (priorities[parentIndex] > priority) {
          elements[index] = elements[parentIndex];
          priorities[index] = priorities[parentIndex];
          index = parentIndex;
        } else {
          break;
        }
      }
      elements[index] = element;
      priorities[index] = priority;
    }
    /**
     * FIXME empty description for jsdoc
     */
    reprioritize() {
      const priorityFunction = this.priorityFunction_;
      const elements = this.elements_;
      const priorities = this.priorities_;
      let index = 0;
      const n = elements.length;
      let element, i, priority;
      for (i = 0; i < n; ++i) {
        element = elements[i];
        priority = priorityFunction(element);
        if (priority == DROP) {
          delete this.queuedElements_[this.keyFunction_(element)];
        } else {
          priorities[index] = priority;
          elements[index++] = element;
        }
      }
      elements.length = index;
      priorities.length = index;
      this.heapify_();
    }
  };
  var PriorityQueue_default = PriorityQueue;

  // node_modules/ol/TileQueue.js
  var TileQueue = class extends PriorityQueue_default {
    /**
     * @param {PriorityFunction} tilePriorityFunction Tile priority function.
     * @param {function(): ?} tileChangeCallback Function called on each tile change event.
     */
    constructor(tilePriorityFunction, tileChangeCallback) {
      super(
        (element) => tilePriorityFunction.apply(null, element),
        (element) => element[0].getKey()
      );
      this.boundHandleTileChange_ = this.handleTileChange.bind(this);
      this.tileChangeCallback_ = tileChangeCallback;
      this.tilesLoading_ = 0;
      this.tilesLoadingKeys_ = {};
    }
    /**
     * @param {TileQueueElement} element Element.
     * @return {boolean} The element was added to the queue.
     * @override
     */
    enqueue(element) {
      const added = super.enqueue(element);
      if (added) {
        const tile = element[0];
        tile.addEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
      }
      return added;
    }
    /**
     * @return {number} Number of tiles loading.
     */
    getTilesLoading() {
      return this.tilesLoading_;
    }
    /**
     * @param {import("./events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(event) {
      const tile = (
        /** @type {import("./Tile.js").default} */
        event.target
      );
      const state = tile.getState();
      if (state === TileState_default.LOADED || state === TileState_default.ERROR || state === TileState_default.EMPTY) {
        if (state !== TileState_default.ERROR) {
          tile.removeEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
        }
        const tileKey = tile.getKey();
        if (tileKey in this.tilesLoadingKeys_) {
          delete this.tilesLoadingKeys_[tileKey];
          --this.tilesLoading_;
        }
        this.tileChangeCallback_();
      }
    }
    /**
     * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
     * @param {number} maxNewLoads Maximum number of new tiles to load.
     */
    loadMoreTiles(maxTotalLoading, maxNewLoads) {
      let newLoads = 0;
      while (this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads && this.getCount() > 0) {
        const tile = this.dequeue()[0];
        const tileKey = tile.getKey();
        const state = tile.getState();
        if (state === TileState_default.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
          this.tilesLoadingKeys_[tileKey] = true;
          ++this.tilesLoading_;
          ++newLoads;
          tile.load();
        }
      }
    }
  };
  var TileQueue_default = TileQueue;
  function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
      return DROP;
    }
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
      return DROP;
    }
    const center = frameState.viewState.center;
    const deltaX = tileCenter[0] - center[0];
    const deltaY = tileCenter[1] - center[1];
    return 65536 * Math.log(tileResolution) + Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution;
  }

  // node_modules/ol/ViewHint.js
  var ViewHint_default = {
    ANIMATING: 0,
    INTERACTING: 1
  };

  // node_modules/ol/ViewProperty.js
  var ViewProperty_default = {
    CENTER: "center",
    RESOLUTION: "resolution",
    ROTATION: "rotation"
  };

  // node_modules/ol/centerconstraint.js
  function createExtent(extent, onlyCenter, smooth) {
    return (
      /**
       * @param {import("./coordinate.js").Coordinate|undefined} center Center.
       * @param {number|undefined} resolution Resolution.
       * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @param {Array<number>} [centerShift] Shift between map center and viewport center.
       * @return {import("./coordinate.js").Coordinate|undefined} Center.
       */
      (function(center, resolution, size, isMoving, centerShift) {
        if (!center) {
          return void 0;
        }
        if (!resolution && !onlyCenter) {
          return center;
        }
        const viewWidth = onlyCenter ? 0 : size[0] * resolution;
        const viewHeight = onlyCenter ? 0 : size[1] * resolution;
        const shiftX = centerShift ? centerShift[0] : 0;
        const shiftY = centerShift ? centerShift[1] : 0;
        let minX = extent[0] + viewWidth / 2 + shiftX;
        let maxX = extent[2] - viewWidth / 2 + shiftX;
        let minY = extent[1] + viewHeight / 2 + shiftY;
        let maxY = extent[3] - viewHeight / 2 + shiftY;
        if (minX > maxX) {
          minX = (maxX + minX) / 2;
          maxX = minX;
        }
        if (minY > maxY) {
          minY = (maxY + minY) / 2;
          maxY = minY;
        }
        let x = clamp(center[0], minX, maxX);
        let y = clamp(center[1], minY, maxY);
        if (isMoving && smooth && resolution) {
          const ratio = 30 * resolution;
          x += -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) + ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
          y += -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) + ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [x, y];
      })
    );
  }
  function none(center) {
    return center;
  }

  // node_modules/ol/geom/flat/transform.js
  function transform2D(flatCoordinates, offset, end, stride, transform2, dest, destinationStride) {
    dest = dest ? dest : [];
    destinationStride = destinationStride ? destinationStride : 2;
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const x = flatCoordinates[j];
      const y = flatCoordinates[j + 1];
      dest[i++] = transform2[0] * x + transform2[2] * y + transform2[4];
      dest[i++] = transform2[1] * x + transform2[3] * y + transform2[5];
      for (let k = 2; k < destinationStride; k++) {
        dest[i++] = flatCoordinates[j + k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function rotate2(flatCoordinates, offset, end, stride, angle, anchor, dest) {
    dest = dest ? dest : [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const deltaX = flatCoordinates[j] - anchorX;
      const deltaY = flatCoordinates[j + 1] - anchorY;
      dest[i++] = anchorX + deltaX * cos - deltaY * sin;
      dest[i++] = anchorY + deltaX * sin + deltaY * cos;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function scale3(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
    dest = dest ? dest : [];
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const deltaX = flatCoordinates[j] - anchorX;
      const deltaY = flatCoordinates[j + 1] - anchorY;
      dest[i++] = anchorX + sx * deltaX;
      dest[i++] = anchorY + sy * deltaY;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      dest[i++] = flatCoordinates[j] + deltaX;
      dest[i++] = flatCoordinates[j + 1] + deltaY;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }

  // node_modules/ol/geom/Geometry.js
  var tmpTransform = create();
  var tmpPoint = [NaN, NaN];
  var Geometry = class extends Object_default {
    constructor() {
      super();
      this.extent_ = createEmpty();
      this.extentRevision_ = -1;
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = 0;
      this.simplifyTransformedInternal = memoizeOne(
        (revision, squaredTolerance, transform2) => {
          if (!transform2) {
            return this.getSimplifiedGeometry(squaredTolerance);
          }
          const clone2 = this.clone();
          clone2.applyTransform(transform2);
          return clone2.getSimplifiedGeometry(squaredTolerance);
        }
      );
    }
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */
    simplifyTransformed(squaredTolerance, transform2) {
      return this.simplifyTransformedInternal(
        this.getRevision(),
        squaredTolerance,
        transform2
      );
    }
    /**
     * Make a complete copy of the geometry.
     * @abstract
     * @return {!Geometry} Clone.
     */
    clone() {
      return abstract();
    }
    /**
     * @abstract
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      return abstract();
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    containsXY(x, y) {
      return this.closestPointXY(x, y, tmpPoint, Number.MIN_VALUE) === 0;
    }
    /**
     * Return the closest point of the geometry to the passed point as
     * {@link module:ol/coordinate~Coordinate coordinate}.
     * @param {import("../coordinate.js").Coordinate} point Point.
     * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
     * @return {import("../coordinate.js").Coordinate} Closest point.
     * @api
     */
    getClosestPoint(point, closestPoint) {
      closestPoint = closestPoint ? closestPoint : [NaN, NaN];
      this.closestPointXY(point[0], point[1], closestPoint, Infinity);
      return closestPoint;
    }
    /**
     * Returns true if this geometry includes the specified coordinate. If the
     * coordinate is on the boundary of the geometry, returns false.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains coordinate.
     * @api
     */
    intersectsCoordinate(coordinate) {
      return this.containsXY(coordinate[0], coordinate[1]);
    }
    /**
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    computeExtent(extent) {
      return abstract();
    }
    /**
     * Get the extent of the geometry.
     * @param {import("../extent.js").Extent} [extent] Extent.
     * @return {import("../extent.js").Extent} extent Extent.
     * @api
     */
    getExtent(extent) {
      if (this.extentRevision_ != this.getRevision()) {
        const extent2 = this.computeExtent(this.extent_);
        if (isNaN(extent2[0]) || isNaN(extent2[1])) {
          createOrUpdateEmpty(extent2);
        }
        this.extentRevision_ = this.getRevision();
      }
      return returnOrUpdate(this.extent_, extent);
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} angle Rotation angle in radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     */
    rotate(angle, anchor) {
      abstract();
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     */
    scale(sx, sy, anchor) {
      abstract();
    }
    /**
     * Create a simplified version of this geometry.  For linestrings, this uses
     * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
     * algorithm.  For polygons, a quantization-based
     * simplification is used to preserve topology.
     * @param {number} tolerance The tolerance distance for simplification.
     * @return {Geometry} A new, simplified version of the original geometry.
     * @api
     */
    simplify(tolerance) {
      return this.getSimplifiedGeometry(tolerance * tolerance);
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker
     * algorithm.
     * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Geometry} Simplified geometry.
     */
    getSimplifiedGeometry(squaredTolerance) {
      return abstract();
    }
    /**
     * Get the type of this geometry.
     * @abstract
     * @return {Type} Geometry type.
     */
    getType() {
      return abstract();
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @abstract
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     */
    applyTransform(transformFn) {
      abstract();
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     */
    intersectsExtent(extent) {
      return abstract();
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @abstract
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     */
    translate(deltaX, deltaY) {
      abstract();
    }
    /**
     * Transform each coordinate of the geometry from one coordinate reference
     * system to another. The geometry is modified in place.
     * For example, a line will be transformed to a line and a circle to a circle.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     *
     * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @return {this} This geometry.  Note that original geometry is
     *     modified in place.
     * @api
     */
    transform(source, destination) {
      const sourceProj = get3(source);
      const transformFn = sourceProj.getUnits() == "tile-pixels" ? function(inCoordinates, outCoordinates, stride) {
        const pixelExtent = sourceProj.getExtent();
        const projectedExtent = sourceProj.getWorldExtent();
        const scale4 = getHeight(projectedExtent) / getHeight(pixelExtent);
        compose(
          tmpTransform,
          projectedExtent[0],
          projectedExtent[3],
          scale4,
          -scale4,
          0,
          0,
          0
        );
        const transformed = transform2D(
          inCoordinates,
          0,
          inCoordinates.length,
          stride,
          tmpTransform,
          outCoordinates
        );
        const projTransform = getTransform(sourceProj, destination);
        if (projTransform) {
          return projTransform(transformed, transformed, stride);
        }
        return transformed;
      } : getTransform(sourceProj, destination);
      this.applyTransform(transformFn);
      return this;
    }
  };
  var Geometry_default = Geometry;

  // node_modules/ol/geom/SimpleGeometry.js
  var SimpleGeometry = class extends Geometry_default {
    constructor() {
      super();
      this.layout = "XY";
      this.stride = 2;
      this.flatCoordinates;
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(extent) {
      return createOrUpdateFromFlatCoordinates(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        extent
      );
    }
    /**
     * @abstract
     * @return {Array<*> | null} Coordinates.
     */
    getCoordinates() {
      return abstract();
    }
    /**
     * Return the first coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} First coordinate.
     * @api
     */
    getFirstCoordinate() {
      return this.flatCoordinates.slice(0, this.stride);
    }
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getFlatCoordinates() {
      return this.flatCoordinates;
    }
    /**
     * Return the last coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} Last point.
     * @api
     */
    getLastCoordinate() {
      return this.flatCoordinates.slice(
        this.flatCoordinates.length - this.stride
      );
    }
    /**
     * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
     * @return {import("./Geometry.js").GeometryLayout} Layout.
     * @api
     */
    getLayout() {
      return this.layout;
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @override
     */
    getSimplifiedGeometry(squaredTolerance) {
      if (this.simplifiedGeometryRevision !== this.getRevision()) {
        this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        this.simplifiedGeometryRevision = this.getRevision();
      }
      if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) {
        return this;
      }
      const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
      const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
      if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
        return simplifiedGeometry;
      }
      this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
      return this;
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @protected
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      return this;
    }
    /**
     * @return {number} Stride.
     */
    getStride() {
      return this.stride;
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout} layout Layout.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     */
    setFlatCoordinates(layout, flatCoordinates) {
      this.stride = getStrideForLayout(layout);
      this.layout = layout;
      this.flatCoordinates = flatCoordinates;
    }
    /**
     * @abstract
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    setCoordinates(coordinates2, layout) {
      abstract();
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
     * @param {Array<*>} coordinates Coordinates.
     * @param {number} nesting Nesting.
     * @protected
     */
    setLayout(layout, coordinates2, nesting) {
      let stride;
      if (layout) {
        stride = getStrideForLayout(layout);
      } else {
        for (let i = 0; i < nesting; ++i) {
          if (coordinates2.length === 0) {
            this.layout = "XY";
            this.stride = 2;
            return;
          }
          coordinates2 = /** @type {Array<unknown>} */
          coordinates2[0];
        }
        stride = coordinates2.length;
        layout = getLayoutForStride(stride);
      }
      this.layout = layout;
      this.stride = stride;
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     * @api
     * @override
     */
    applyTransform(transformFn) {
      if (this.flatCoordinates) {
        transformFn(
          this.flatCoordinates,
          this.flatCoordinates,
          this.layout.startsWith("XYZ") ? 3 : 2,
          this.stride
        );
        this.changed();
      }
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @param {number} angle Rotation angle in counter-clockwise radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     * @override
     */
    rotate(angle, anchor) {
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        rotate2(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          angle,
          anchor,
          flatCoordinates
        );
        this.changed();
      }
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     * @override
     */
    scale(sx, sy, anchor) {
      if (sy === void 0) {
        sy = sx;
      }
      if (!anchor) {
        anchor = getCenter(this.getExtent());
      }
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        scale3(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          sx,
          sy,
          anchor,
          flatCoordinates
        );
        this.changed();
      }
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     * @override
     */
    translate(deltaX, deltaY) {
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        translate(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          deltaX,
          deltaY,
          flatCoordinates
        );
        this.changed();
      }
    }
  };
  function getLayoutForStride(stride) {
    let layout;
    if (stride == 2) {
      layout = "XY";
    } else if (stride == 3) {
      layout = "XYZ";
    } else if (stride == 4) {
      layout = "XYZM";
    }
    return (
      /** @type {import("./Geometry.js").GeometryLayout} */
      layout
    );
  }
  function getStrideForLayout(layout) {
    let stride;
    if (layout == "XY") {
      stride = 2;
    } else if (layout == "XYZ" || layout == "XYM") {
      stride = 3;
    } else if (layout == "XYZM") {
      stride = 4;
    }
    return (
      /** @type {number} */
      stride
    );
  }
  var SimpleGeometry_default = SimpleGeometry;

  // node_modules/ol/geom/flat/area.js
  function linearRing(flatCoordinates, offset, end, stride) {
    let twiceArea = 0;
    const x0 = flatCoordinates[end - stride];
    const y0 = flatCoordinates[end - stride + 1];
    let dx1 = 0;
    let dy1 = 0;
    for (; offset < end; offset += stride) {
      const dx2 = flatCoordinates[offset] - x0;
      const dy2 = flatCoordinates[offset + 1] - y0;
      twiceArea += dy1 * dx2 - dx1 * dy2;
      dx1 = dx2;
      dy1 = dy2;
    }
    return twiceArea / 2;
  }
  function linearRings(flatCoordinates, offset, ends, stride) {
    let area = 0;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      area += linearRing(flatCoordinates, offset, end, stride);
      offset = end;
    }
    return area;
  }

  // node_modules/ol/geom/flat/closest.js
  function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    const x1 = flatCoordinates[offset1];
    const y1 = flatCoordinates[offset1 + 1];
    const dx = flatCoordinates[offset2] - x1;
    const dy = flatCoordinates[offset2 + 1] - y1;
    let offset;
    if (dx === 0 && dy === 0) {
      offset = offset1;
    } else {
      const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        offset = offset2;
      } else if (t > 0) {
        for (let i = 0; i < stride; ++i) {
          closestPoint[i] = lerp(
            flatCoordinates[offset1 + i],
            flatCoordinates[offset2 + i],
            t
          );
        }
        closestPoint.length = stride;
        return;
      } else {
        offset = offset1;
      }
    }
    for (let i = 0; i < stride; ++i) {
      closestPoint[i] = flatCoordinates[offset + i];
    }
    closestPoint.length = stride;
  }
  function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    for (offset += stride; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      const squaredDelta = squaredDistance(x1, y1, x2, y2);
      if (squaredDelta > max) {
        max = squaredDelta;
      }
      x1 = x2;
      y1 = y2;
    }
    return max;
  }
  function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
      offset = end;
    }
    return max;
  }
  function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint2) {
    if (offset == end) {
      return minSquaredDistance;
    }
    let i, squaredDistance2;
    if (maxDelta === 0) {
      squaredDistance2 = squaredDistance(
        x,
        y,
        flatCoordinates[offset],
        flatCoordinates[offset + 1]
      );
      if (squaredDistance2 < minSquaredDistance) {
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = flatCoordinates[offset + i];
        }
        closestPoint.length = stride;
        return squaredDistance2;
      }
      return minSquaredDistance;
    }
    tmpPoint2 = tmpPoint2 ? tmpPoint2 : [NaN, NaN];
    let index = offset + stride;
    while (index < end) {
      assignClosest(
        flatCoordinates,
        index - stride,
        index,
        stride,
        x,
        y,
        tmpPoint2
      );
      squaredDistance2 = squaredDistance(x, y, tmpPoint2[0], tmpPoint2[1]);
      if (squaredDistance2 < minSquaredDistance) {
        minSquaredDistance = squaredDistance2;
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = tmpPoint2[i];
        }
        closestPoint.length = stride;
        index += stride;
      } else {
        index += stride * Math.max(
          (Math.sqrt(squaredDistance2) - Math.sqrt(minSquaredDistance)) / maxDelta | 0,
          1
        );
      }
    }
    if (isRing) {
      assignClosest(
        flatCoordinates,
        end - stride,
        offset,
        stride,
        x,
        y,
        tmpPoint2
      );
      squaredDistance2 = squaredDistance(x, y, tmpPoint2[0], tmpPoint2[1]);
      if (squaredDistance2 < minSquaredDistance) {
        minSquaredDistance = squaredDistance2;
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = tmpPoint2[i];
        }
        closestPoint.length = stride;
      }
    }
    return minSquaredDistance;
  }
  function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint2) {
    tmpPoint2 = tmpPoint2 ? tmpPoint2 : [NaN, NaN];
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      minSquaredDistance = assignClosestPoint(
        flatCoordinates,
        offset,
        end,
        stride,
        maxDelta,
        isRing,
        x,
        y,
        closestPoint,
        minSquaredDistance,
        tmpPoint2
      );
      offset = end;
    }
    return minSquaredDistance;
  }

  // node_modules/ol/geom/flat/deflate.js
  function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
    for (let i = 0, ii = coordinate.length; i < ii; ++i) {
      flatCoordinates[offset++] = coordinate[i];
    }
    return offset;
  }
  function deflateCoordinates(flatCoordinates, offset, coordinates2, stride) {
    for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
      const coordinate = coordinates2[i];
      for (let j = 0; j < stride; ++j) {
        flatCoordinates[offset++] = coordinate[j];
      }
    }
    return offset;
  }
  function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
    ends = ends ? ends : [];
    let i = 0;
    for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
      const end = deflateCoordinates(
        flatCoordinates,
        offset,
        coordinatess[j],
        stride
      );
      ends[i++] = end;
      offset = end;
    }
    ends.length = i;
    return ends;
  }

  // node_modules/ol/geom/flat/inflate.js
  function inflateCoordinates(flatCoordinates, offset, end, stride, coordinates2) {
    coordinates2 = coordinates2 !== void 0 ? coordinates2 : [];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      coordinates2[i++] = flatCoordinates.slice(j, j + stride);
    }
    coordinates2.length = i;
    return coordinates2;
  }
  function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatess) {
    coordinatess = coordinatess !== void 0 ? coordinatess : [];
    let i = 0;
    for (let j = 0, jj = ends.length; j < jj; ++j) {
      const end = ends[j];
      coordinatess[i++] = inflateCoordinates(
        flatCoordinates,
        offset,
        end,
        stride,
        coordinatess[i]
      );
      offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
  }

  // node_modules/ol/geom/flat/simplify.js
  function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    const n = (end - offset) / stride;
    if (n < 3) {
      for (; offset < end; offset += stride) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
      }
      return simplifiedOffset;
    }
    const markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    const stack = [offset, end - stride];
    let index = 0;
    while (stack.length > 0) {
      const last = stack.pop();
      const first = stack.pop();
      let maxSquaredDistance = 0;
      const x1 = flatCoordinates[first];
      const y1 = flatCoordinates[first + 1];
      const x2 = flatCoordinates[last];
      const y2 = flatCoordinates[last + 1];
      for (let i = first + stride; i < last; i += stride) {
        const x = flatCoordinates[i];
        const y = flatCoordinates[i + 1];
        const squaredDistance2 = squaredSegmentDistance(x, y, x1, y1, x2, y2);
        if (squaredDistance2 > maxSquaredDistance) {
          index = i;
          maxSquaredDistance = squaredDistance2;
        }
      }
      if (maxSquaredDistance > squaredTolerance) {
        markers[(index - offset) / stride] = 1;
        if (first + stride < index) {
          stack.push(first, index);
        }
        if (index + stride < last) {
          stack.push(index, last);
        }
      }
    }
    for (let i = 0; i < n; ++i) {
      if (markers[i]) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
      }
    }
    return simplifiedOffset;
  }
  function snap(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
  }
  function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (offset == end) {
      return simplifiedOffset;
    }
    let x1 = snap(flatCoordinates[offset], tolerance);
    let y1 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    let x2, y2;
    do {
      x2 = snap(flatCoordinates[offset], tolerance);
      y2 = snap(flatCoordinates[offset + 1], tolerance);
      offset += stride;
      if (offset == end) {
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        return simplifiedOffset;
      }
    } while (x2 == x1 && y2 == y1);
    while (offset < end) {
      const x3 = snap(flatCoordinates[offset], tolerance);
      const y3 = snap(flatCoordinates[offset + 1], tolerance);
      offset += stride;
      if (x3 == x2 && y3 == y2) {
        continue;
      }
      const dx1 = x2 - x1;
      const dy1 = y2 - y1;
      const dx2 = x3 - x1;
      const dy2 = y3 - y1;
      if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
        x2 = x3;
        y2 = y3;
        continue;
      }
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      x1 = x2;
      y1 = y2;
      x2 = x3;
      y2 = y3;
    }
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
  }
  function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      simplifiedOffset = quantize(
        flatCoordinates,
        offset,
        end,
        stride,
        tolerance,
        simplifiedFlatCoordinates,
        simplifiedOffset
      );
      simplifiedEnds.push(simplifiedOffset);
      offset = end;
    }
    return simplifiedOffset;
  }

  // node_modules/ol/geom/LinearRing.js
  var LinearRing = class _LinearRing extends SimpleGeometry_default {
    /**
     * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `layout` are also accepted.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates2, layout) {
      super();
      this.maxDelta_ = -1;
      this.maxDeltaRevision_ = -1;
      if (layout !== void 0 && !Array.isArray(coordinates2[0])) {
        this.setFlatCoordinates(
          layout,
          /** @type {Array<number>} */
          coordinates2
        );
      } else {
        this.setCoordinates(
          /** @type {Array<import("../coordinate.js").Coordinate>} */
          coordinates2,
          layout
        );
      }
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!LinearRing} Clone.
     * @api
     * @override
     */
    clone() {
      return new _LinearRing(this.flatCoordinates.slice(), this.layout);
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
        return minSquaredDistance;
      }
      if (this.maxDeltaRevision_ != this.getRevision()) {
        this.maxDelta_ = Math.sqrt(
          maxSquaredDelta(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            0
          )
        );
        this.maxDeltaRevision_ = this.getRevision();
      }
      return assignClosestPoint(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        this.maxDelta_,
        true,
        x,
        y,
        closestPoint,
        minSquaredDistance
      );
    }
    /**
     * Return the area of the linear ring on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return linearRing(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * Return the coordinates of the linear ring.
     * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return inflateCoordinates(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {LinearRing} Simplified LinearRing.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      const simplifiedFlatCoordinates = [];
      simplifiedFlatCoordinates.length = douglasPeucker(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        squaredTolerance,
        simplifiedFlatCoordinates,
        0
      );
      return new _LinearRing(simplifiedFlatCoordinates, "XY");
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "LinearRing";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return false;
    }
    /**
     * Set the coordinates of the linear ring.
     * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 1);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      this.flatCoordinates.length = deflateCoordinates(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride
      );
      this.changed();
    }
  };
  var LinearRing_default = LinearRing;

  // node_modules/ol/geom/Point.js
  var Point = class _Point extends SimpleGeometry_default {
    /**
     * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates2, layout) {
      super();
      this.setCoordinates(coordinates2, layout);
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Point} Clone.
     * @api
     * @override
     */
    clone() {
      const point = new _Point(this.flatCoordinates.slice(), this.layout);
      point.applyProperties(this);
      return point;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      const flatCoordinates = this.flatCoordinates;
      const squaredDistance2 = squaredDistance(
        x,
        y,
        flatCoordinates[0],
        flatCoordinates[1]
      );
      if (squaredDistance2 < minSquaredDistance) {
        const stride = this.stride;
        for (let i = 0; i < stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
        closestPoint.length = stride;
        return squaredDistance2;
      }
      return minSquaredDistance;
    }
    /**
     * Return the coordinate of the point.
     * @return {import("../coordinate.js").Coordinate} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return this.flatCoordinates.slice();
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(extent) {
      return createOrUpdateFromCoordinate(this.flatCoordinates, extent);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Point";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return containsXY(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 0);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      this.flatCoordinates.length = deflateCoordinate(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride
      );
      this.changed();
    }
  };
  var Point_default = Point;

  // node_modules/ol/geom/flat/interiorpoint.js
  function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
    let i, ii, x, x1, x2, y1, y2;
    const y = flatCenters[flatCentersOffset + 1];
    const intersections = [];
    for (let r = 0, rr = ends.length; r < rr; ++r) {
      const end = ends[r];
      x1 = flatCoordinates[end - stride];
      y1 = flatCoordinates[end - stride + 1];
      for (i = offset; i < end; i += stride) {
        x2 = flatCoordinates[i];
        y2 = flatCoordinates[i + 1];
        if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
          x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
          intersections.push(x);
        }
        x1 = x2;
        y1 = y2;
      }
    }
    let pointX = NaN;
    let maxSegmentLength = -Infinity;
    intersections.sort(ascending);
    x1 = intersections[0];
    for (i = 1, ii = intersections.length; i < ii; ++i) {
      x2 = intersections[i];
      const segmentLength = Math.abs(x2 - x1);
      if (segmentLength > maxSegmentLength) {
        x = (x1 + x2) / 2;
        if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
          pointX = x;
          maxSegmentLength = segmentLength;
        }
      }
      x1 = x2;
    }
    if (isNaN(pointX)) {
      pointX = flatCenters[flatCentersOffset];
    }
    if (dest) {
      dest.push(pointX, y, maxSegmentLength);
      return dest;
    }
    return [pointX, y, maxSegmentLength];
  }

  // node_modules/ol/geom/flat/reverse.js
  function coordinates(flatCoordinates, offset, end, stride) {
    while (offset < end - stride) {
      for (let i = 0; i < stride; ++i) {
        const tmp = flatCoordinates[offset + i];
        flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
        flatCoordinates[end - stride + i] = tmp;
      }
      offset += stride;
      end -= stride;
    }
  }

  // node_modules/ol/geom/flat/orient.js
  function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
    let edge = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      edge += (x2 - x1) * (y2 + y1);
      x1 = x2;
      y1 = y2;
    }
    return edge === 0 ? void 0 : edge > 0;
  }
  function linearRingsAreOriented(flatCoordinates, offset, ends, stride, right) {
    right = right !== void 0 ? right : false;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const isClockwise = linearRingIsClockwise(
        flatCoordinates,
        offset,
        end,
        stride
      );
      if (i === 0) {
        if (right && isClockwise || !right && !isClockwise) {
          return false;
        }
      } else {
        if (right && !isClockwise || !right && isClockwise) {
          return false;
        }
      }
      offset = end;
    }
    return true;
  }
  function orientLinearRings(flatCoordinates, offset, ends, stride, right) {
    right = right !== void 0 ? right : false;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const isClockwise = linearRingIsClockwise(
        flatCoordinates,
        offset,
        end,
        stride
      );
      const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
      if (reverse) {
        coordinates(flatCoordinates, offset, end, stride);
      }
      offset = end;
    }
    return offset;
  }

  // node_modules/ol/geom/Polygon.js
  var Polygon = class _Polygon extends SimpleGeometry_default {
    /**
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
     *     Array of linear rings that define the polygon. The first linear ring of the
     *     array defines the outer-boundary or surface of the polygon. Each subsequent
     *     linear ring defines a hole in the surface of the polygon. A linear ring is
     *     an array of vertices' coordinates where the first coordinate and the last are
     *     equivalent. (For internal use, flat coordinates in combination with
     *     `layout` and `ends` are also accepted.)
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
     */
    constructor(coordinates2, layout, ends) {
      super();
      this.ends_ = [];
      this.flatInteriorPointRevision_ = -1;
      this.flatInteriorPoint_ = null;
      this.maxDelta_ = -1;
      this.maxDeltaRevision_ = -1;
      this.orientedRevision_ = -1;
      this.orientedFlatCoordinates_ = null;
      if (layout !== void 0 && ends) {
        this.setFlatCoordinates(
          layout,
          /** @type {Array<number>} */
          coordinates2
        );
        this.ends_ = ends;
      } else {
        this.setCoordinates(
          /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
          coordinates2,
          layout
        );
      }
    }
    /**
     * Append the passed linear ring to this polygon.
     * @param {LinearRing} linearRing Linear ring.
     * @api
     */
    appendLinearRing(linearRing2) {
      if (!this.flatCoordinates) {
        this.flatCoordinates = linearRing2.getFlatCoordinates().slice();
      } else {
        extend2(this.flatCoordinates, linearRing2.getFlatCoordinates());
      }
      this.ends_.push(this.flatCoordinates.length);
      this.changed();
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Polygon} Clone.
     * @api
     * @override
     */
    clone() {
      const polygon = new _Polygon(
        this.flatCoordinates.slice(),
        this.layout,
        this.ends_.slice()
      );
      polygon.applyProperties(this);
      return polygon;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
        return minSquaredDistance;
      }
      if (this.maxDeltaRevision_ != this.getRevision()) {
        this.maxDelta_ = Math.sqrt(
          arrayMaxSquaredDelta(
            this.flatCoordinates,
            0,
            this.ends_,
            this.stride,
            0
          )
        );
        this.maxDeltaRevision_ = this.getRevision();
      }
      return assignClosestArrayPoint(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        this.maxDelta_,
        true,
        x,
        y,
        closestPoint,
        minSquaredDistance
      );
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     * @override
     */
    containsXY(x, y) {
      return linearRingsContainsXY(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        x,
        y
      );
    }
    /**
     * Return the area of the polygon on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return linearRings(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride
      );
    }
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for polygons.
     *
     * @param {boolean} [right] Orient coordinates according to the right-hand
     *     rule (counter-clockwise for exterior and clockwise for interior rings).
     *     If `false`, coordinates will be oriented according to the left-hand rule
     *     (clockwise for exterior and counter-clockwise for interior rings).
     *     By default, coordinate orientation will depend on how the geometry was
     *     constructed.
     * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
     * @api
     * @override
     */
    getCoordinates(right) {
      let flatCoordinates;
      if (right !== void 0) {
        flatCoordinates = this.getOrientedFlatCoordinates().slice();
        orientLinearRings(flatCoordinates, 0, this.ends_, this.stride, right);
      } else {
        flatCoordinates = this.flatCoordinates;
      }
      return inflateCoordinatesArray(flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
     * @return {Array<number>} Ends.
     */
    getEnds() {
      return this.ends_;
    }
    /**
     * @return {Array<number>} Interior point.
     */
    getFlatInteriorPoint() {
      if (this.flatInteriorPointRevision_ != this.getRevision()) {
        const flatCenter = getCenter(this.getExtent());
        this.flatInteriorPoint_ = getInteriorPointOfArray(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          flatCenter,
          0
        );
        this.flatInteriorPointRevision_ = this.getRevision();
      }
      return (
        /** @type {import("../coordinate.js").Coordinate} */
        this.flatInteriorPoint_
      );
    }
    /**
     * Return an interior point of the polygon.
     * @return {Point} Interior point as XYM coordinate, where M is the
     * length of the horizontal intersection that the point belongs to.
     * @api
     */
    getInteriorPoint() {
      return new Point_default(this.getFlatInteriorPoint(), "XYM");
    }
    /**
     * Return the number of rings of the polygon,  this includes the exterior
     * ring and any interior rings.
     *
     * @return {number} Number of rings.
     * @api
     */
    getLinearRingCount() {
      return this.ends_.length;
    }
    /**
     * Return the Nth linear ring of the polygon geometry. Return `null` if the
     * given index is out of range.
     * The exterior linear ring is available at index `0` and the interior rings
     * at index `1` and beyond.
     *
     * @param {number} index Index.
     * @return {LinearRing|null} Linear ring.
     * @api
     */
    getLinearRing(index) {
      if (index < 0 || this.ends_.length <= index) {
        return null;
      }
      return new LinearRing_default(
        this.flatCoordinates.slice(
          index === 0 ? 0 : this.ends_[index - 1],
          this.ends_[index]
        ),
        this.layout
      );
    }
    /**
     * Return the linear rings of the polygon.
     * @return {Array<LinearRing>} Linear rings.
     * @api
     */
    getLinearRings() {
      const layout = this.layout;
      const flatCoordinates = this.flatCoordinates;
      const ends = this.ends_;
      const linearRings2 = [];
      let offset = 0;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const linearRing2 = new LinearRing_default(
          flatCoordinates.slice(offset, end),
          layout
        );
        linearRings2.push(linearRing2);
        offset = end;
      }
      return linearRings2;
    }
    /**
     * @return {Array<number>} Oriented flat coordinates.
     */
    getOrientedFlatCoordinates() {
      if (this.orientedRevision_ != this.getRevision()) {
        const flatCoordinates = this.flatCoordinates;
        if (linearRingsAreOriented(flatCoordinates, 0, this.ends_, this.stride)) {
          this.orientedFlatCoordinates_ = flatCoordinates;
        } else {
          this.orientedFlatCoordinates_ = flatCoordinates.slice();
          this.orientedFlatCoordinates_.length = orientLinearRings(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride
          );
        }
        this.orientedRevision_ = this.getRevision();
      }
      return (
        /** @type {Array<number>} */
        this.orientedFlatCoordinates_
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Polygon} Simplified Polygon.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      const simplifiedFlatCoordinates = [];
      const simplifiedEnds = [];
      simplifiedFlatCoordinates.length = quantizeArray(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(squaredTolerance),
        simplifiedFlatCoordinates,
        0,
        simplifiedEnds
      );
      return new _Polygon(simplifiedFlatCoordinates, "XY", simplifiedEnds);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Polygon";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return intersectsLinearRingArray(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        extent
      );
    }
    /**
     * Set the coordinates of the polygon.
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 2);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      const ends = deflateCoordinatesArray(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride,
        this.ends_
      );
      this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
      this.changed();
    }
  };
  var Polygon_default = Polygon;
  function fromExtent(extent) {
    if (isEmpty(extent)) {
      throw new Error("Cannot create polygon from empty extent");
    }
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const flatCoordinates = [
      minX,
      minY,
      minX,
      maxY,
      maxX,
      maxY,
      maxX,
      minY,
      minX,
      minY
    ];
    return new Polygon(flatCoordinates, "XY", [flatCoordinates.length]);
  }

  // node_modules/ol/resolutionconstraint.js
  function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    const xResolution = getWidth(maxExtent) / viewportSize[0];
    const yResolution = getHeight(maxExtent) / viewportSize[1];
    if (showFullExtent) {
      return Math.min(resolution, Math.max(xResolution, yResolution));
    }
    return Math.min(resolution, Math.min(xResolution, yResolution));
  }
  function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    let result = Math.min(resolution, maxResolution);
    const ratio = 50;
    result *= Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio + 1;
    if (minResolution) {
      result = Math.max(result, minResolution);
      result /= Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) / ratio + 1;
    }
    return clamp(result, minResolution / 2, maxResolution * 2);
  }
  function createSnapToResolutions(resolutions, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const maxResolution = resolutions[0];
          const minResolution = resolutions[resolutions.length - 1];
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (isMoving) {
            if (!smooth) {
              return clamp(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(
              resolution,
              cappedMaxRes,
              minResolution
            );
          }
          const capped = Math.min(cappedMaxRes, resolution);
          const z = Math.floor(linearFindNearest(resolutions, capped, direction));
          if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
            return resolutions[z + 1];
          }
          return resolutions[z];
        }
        return void 0;
      })
    );
  }
  function createSnapToPower(power, maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    minResolution = minResolution !== void 0 ? minResolution : 0;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (isMoving) {
            if (!smooth) {
              return clamp(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(
              resolution,
              cappedMaxRes,
              minResolution
            );
          }
          const tolerance = 1e-9;
          const minZoomLevel = Math.ceil(
            Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance
          );
          const offset = -direction * (0.5 - tolerance) + 0.5;
          const capped = Math.min(cappedMaxRes, resolution);
          const cappedZoomLevel = Math.floor(
            Math.log(maxResolution / capped) / Math.log(power) + offset
          );
          const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
          const newResolution = maxResolution / Math.pow(power, zoomLevel);
          return clamp(newResolution, minResolution, cappedMaxRes);
        }
        return void 0;
      })
    );
  }
  function createMinMaxResolution(maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (!smooth || !isMoving) {
            return clamp(resolution, minResolution, cappedMaxRes);
          }
          return getSmoothClampedResolution(
            resolution,
            cappedMaxRes,
            minResolution
          );
        }
        return void 0;
      })
    );
  }

  // node_modules/ol/rotationconstraint.js
  function disable(rotation) {
    if (rotation !== void 0) {
      return 0;
    }
    return void 0;
  }
  function none2(rotation) {
    if (rotation !== void 0) {
      return rotation;
    }
    return void 0;
  }
  function createSnapToN(n) {
    const theta = 2 * Math.PI / n;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      (function(rotation, isMoving) {
        if (isMoving) {
          return rotation;
        }
        if (rotation !== void 0) {
          rotation = Math.floor(rotation / theta + 0.5) * theta;
          return rotation;
        }
        return void 0;
      })
    );
  }
  function createSnapToZero(tolerance) {
    const t = tolerance === void 0 ? toRadians(5) : tolerance;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      (function(rotation, isMoving) {
        if (isMoving || rotation === void 0) {
          return rotation;
        }
        if (Math.abs(rotation) <= t) {
          return 0;
        }
        return rotation;
      })
    );
  }

  // node_modules/ol/View.js
  var DEFAULT_MIN_ZOOM = 0;
  var View = class extends Object_default {
    /**
     * @param {ViewOptions} [options] View options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      options = Object.assign({}, options);
      this.hints_ = [0, 0];
      this.animations_ = [];
      this.updateAnimationKey_;
      this.projection_ = createProjection(options.projection, "EPSG:3857");
      this.viewportSize_ = [100, 100];
      this.targetCenter_ = null;
      this.targetResolution_;
      this.targetRotation_;
      this.nextCenter_ = null;
      this.nextResolution_;
      this.nextRotation_;
      this.cancelAnchor_ = void 0;
      if (options.projection) {
        disableCoordinateWarning();
      }
      if (options.center) {
        options.center = fromUserCoordinate(options.center, this.projection_);
      }
      if (options.extent) {
        options.extent = fromUserExtent(options.extent, this.projection_);
      }
      this.applyOptions_(options);
    }
    /**
     * Set up the view with the given options.
     * @param {ViewOptions} options View options.
     */
    applyOptions_(options) {
      const properties = Object.assign({}, options);
      for (const key in ViewProperty_default) {
        delete properties[key];
      }
      this.setProperties(properties, true);
      const resolutionConstraintInfo = createResolutionConstraint(options);
      this.maxResolution_ = resolutionConstraintInfo.maxResolution;
      this.minResolution_ = resolutionConstraintInfo.minResolution;
      this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
      this.resolutions_ = options.resolutions;
      this.padding_ = options.padding;
      this.minZoom_ = resolutionConstraintInfo.minZoom;
      const centerConstraint = createCenterConstraint(options);
      const resolutionConstraint = resolutionConstraintInfo.constraint;
      const rotationConstraint = createRotationConstraint(options);
      this.constraints_ = {
        center: centerConstraint,
        resolution: resolutionConstraint,
        rotation: rotationConstraint
      };
      this.setRotation(options.rotation !== void 0 ? options.rotation : 0);
      this.setCenterInternal(
        options.center !== void 0 ? options.center : null
      );
      if (options.resolution !== void 0) {
        this.setResolution(options.resolution);
      } else if (options.zoom !== void 0) {
        this.setZoom(options.zoom);
      }
    }
    /**
     * Padding (in css pixels).
     * If the map viewport is partially covered with other content (overlays) along
     * its edges, this setting allows to shift the center of the viewport away from that
     * content. The order of the values in the array is top, right, bottom, left.
     * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
     * @type {Array<number>|undefined}
     * @api
     */
    get padding() {
      return this.padding_;
    }
    set padding(padding) {
      let oldPadding = this.padding_;
      this.padding_ = padding;
      const center = this.getCenterInternal();
      if (center) {
        const newPadding = padding || [0, 0, 0, 0];
        oldPadding = oldPadding || [0, 0, 0, 0];
        const resolution = this.getResolution();
        const offsetX = resolution / 2 * (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
        const offsetY = resolution / 2 * (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
        this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
      }
    }
    /**
     * Get an updated version of the view options used to construct the view.  The
     * current resolution (or zoom), center, and rotation are applied to any stored
     * options.  The provided options can be used to apply new min/max zoom or
     * resolution limits.
     * @param {ViewOptions} newOptions New options to be applied.
     * @return {ViewOptions} New options updated with the current view state.
     */
    getUpdatedOptions_(newOptions) {
      const options = this.getProperties();
      if (options.resolution !== void 0) {
        options.resolution = this.getResolution();
      } else {
        options.zoom = this.getZoom();
      }
      options.center = this.getCenterInternal();
      options.rotation = this.getRotation();
      return Object.assign({}, options, newOptions);
    }
    /**
     * Animate the view.  The view's center, zoom (or resolution), and rotation
     * can be animated for smooth transitions between view states.  For example,
     * to animate the view to a new zoom level:
     *
     *     view.animate({zoom: view.getZoom() + 1});
     *
     * By default, the animation lasts one second and uses in-and-out easing.  You
     * can customize this behavior by including `duration` (in milliseconds) and
     * `easing` options (see {@link module:ol/easing}).
     *
     * To chain together multiple animations, call the method with multiple
     * animation objects.  For example, to first zoom and then pan:
     *
     *     view.animate({zoom: 10}, {center: [0, 0]});
     *
     * If you provide a function as the last argument to the animate method, it
     * will get called at the end of an animation series.  The callback will be
     * called with `true` if the animation series completed on its own or `false`
     * if it was cancelled.
     *
     * Animations are cancelled by user interactions (e.g. dragging the map) or by
     * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
     * (or another method that calls one of these).
     *
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
     *     options.  Multiple animations can be run in series by passing multiple
     *     options objects.  To run multiple animations in parallel, call the method
     *     multiple times.  An optional callback can be provided as a final
     *     argument.  The callback will be called with a boolean indicating whether
     *     the animation completed without being cancelled.
     * @api
     */
    animate(var_args) {
      if (this.isDef() && !this.getAnimating()) {
        this.resolveConstraints(0);
      }
      const args = new Array(arguments.length);
      for (let i = 0; i < args.length; ++i) {
        let options = arguments[i];
        if (options.center) {
          options = Object.assign({}, options);
          options.center = fromUserCoordinate(
            options.center,
            this.getProjection()
          );
        }
        if (options.anchor) {
          options = Object.assign({}, options);
          options.anchor = fromUserCoordinate(
            options.anchor,
            this.getProjection()
          );
        }
        args[i] = options;
      }
      this.animateInternal.apply(this, args);
    }
    /**
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
     */
    animateInternal(var_args) {
      let animationCount = arguments.length;
      let callback;
      if (animationCount > 1 && typeof arguments[animationCount - 1] === "function") {
        callback = arguments[animationCount - 1];
        --animationCount;
      }
      let i = 0;
      for (; i < animationCount && !this.isDef(); ++i) {
        const state = arguments[i];
        if (state.center) {
          this.setCenterInternal(state.center);
        }
        if (state.zoom !== void 0) {
          this.setZoom(state.zoom);
        } else if (state.resolution) {
          this.setResolution(state.resolution);
        }
        if (state.rotation !== void 0) {
          this.setRotation(state.rotation);
        }
      }
      if (i === animationCount) {
        if (callback) {
          animationCallback(callback, true);
        }
        return;
      }
      let start = Date.now();
      let center = this.targetCenter_.slice();
      let resolution = this.targetResolution_;
      let rotation = this.targetRotation_;
      const series = [];
      for (; i < animationCount; ++i) {
        const options = (
          /** @type {AnimationOptions} */
          arguments[i]
        );
        const animation = {
          start,
          complete: false,
          anchor: options.anchor,
          duration: options.duration !== void 0 ? options.duration : 1e3,
          easing: options.easing || inAndOut,
          callback
        };
        if (options.center) {
          animation.sourceCenter = center;
          animation.targetCenter = options.center.slice();
          center = animation.targetCenter;
        }
        if (options.zoom !== void 0) {
          animation.sourceResolution = resolution;
          animation.targetResolution = this.getResolutionForZoom(options.zoom);
          resolution = animation.targetResolution;
        } else if (options.resolution) {
          animation.sourceResolution = resolution;
          animation.targetResolution = options.resolution;
          resolution = animation.targetResolution;
        }
        if (options.rotation !== void 0) {
          animation.sourceRotation = rotation;
          const delta = modulo(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
          animation.targetRotation = rotation + delta;
          rotation = animation.targetRotation;
        }
        if (isNoopAnimation(animation)) {
          animation.complete = true;
        } else {
          start += animation.duration;
        }
        series.push(animation);
      }
      this.animations_.push(series);
      this.setHint(ViewHint_default.ANIMATING, 1);
      this.updateAnimations_();
    }
    /**
     * Determine if the view is being animated.
     * @return {boolean} The view is being animated.
     * @api
     */
    getAnimating() {
      return this.hints_[ViewHint_default.ANIMATING] > 0;
    }
    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     * @return {boolean} The view is being interacted with.
     * @api
     */
    getInteracting() {
      return this.hints_[ViewHint_default.INTERACTING] > 0;
    }
    /**
     * Cancel any ongoing animations.
     * @api
     */
    cancelAnimations() {
      this.setHint(ViewHint_default.ANIMATING, -this.hints_[ViewHint_default.ANIMATING]);
      let anchor;
      for (let i = 0, ii = this.animations_.length; i < ii; ++i) {
        const series = this.animations_[i];
        if (series[0].callback) {
          animationCallback(series[0].callback, false);
        }
        if (!anchor) {
          for (let j = 0, jj = series.length; j < jj; ++j) {
            const animation = series[j];
            if (!animation.complete) {
              anchor = animation.anchor;
              break;
            }
          }
        }
      }
      this.animations_.length = 0;
      this.cancelAnchor_ = anchor;
      this.nextCenter_ = null;
      this.nextResolution_ = NaN;
      this.nextRotation_ = NaN;
    }
    /**
     * Update all animations.
     */
    updateAnimations_() {
      if (this.updateAnimationKey_ !== void 0) {
        cancelAnimationFrame(this.updateAnimationKey_);
        this.updateAnimationKey_ = void 0;
      }
      if (!this.getAnimating()) {
        return;
      }
      const now = Date.now();
      let more = false;
      for (let i = this.animations_.length - 1; i >= 0; --i) {
        const series = this.animations_[i];
        let seriesComplete = true;
        for (let j = 0, jj = series.length; j < jj; ++j) {
          const animation = series[j];
          if (animation.complete) {
            continue;
          }
          const elapsed = now - animation.start;
          let fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
          if (fraction >= 1) {
            animation.complete = true;
            fraction = 1;
          } else {
            seriesComplete = false;
          }
          const progress = animation.easing(fraction);
          if (animation.sourceCenter) {
            const x0 = animation.sourceCenter[0];
            const y0 = animation.sourceCenter[1];
            const x1 = animation.targetCenter[0];
            const y1 = animation.targetCenter[1];
            this.nextCenter_ = animation.targetCenter;
            const x = x0 + progress * (x1 - x0);
            const y = y0 + progress * (y1 - y0);
            this.targetCenter_ = [x, y];
          }
          if (animation.sourceResolution && animation.targetResolution) {
            const resolution = progress === 1 ? animation.targetResolution : animation.sourceResolution + progress * (animation.targetResolution - animation.sourceResolution);
            if (animation.anchor) {
              const size = this.getViewportSize_(this.getRotation());
              const constrainedResolution = this.constraints_.resolution(
                resolution,
                0,
                size,
                true
              );
              this.targetCenter_ = this.calculateCenterZoom(
                constrainedResolution,
                animation.anchor
              );
            }
            this.nextResolution_ = animation.targetResolution;
            this.targetResolution_ = resolution;
            this.applyTargetState_(true);
          }
          if (animation.sourceRotation !== void 0 && animation.targetRotation !== void 0) {
            const rotation = progress === 1 ? modulo(animation.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : animation.sourceRotation + progress * (animation.targetRotation - animation.sourceRotation);
            if (animation.anchor) {
              const constrainedRotation = this.constraints_.rotation(
                rotation,
                true
              );
              this.targetCenter_ = this.calculateCenterRotate(
                constrainedRotation,
                animation.anchor
              );
            }
            this.nextRotation_ = animation.targetRotation;
            this.targetRotation_ = rotation;
          }
          this.applyTargetState_(true);
          more = true;
          if (!animation.complete) {
            break;
          }
        }
        if (seriesComplete) {
          this.animations_[i] = null;
          this.setHint(ViewHint_default.ANIMATING, -1);
          this.nextCenter_ = null;
          this.nextResolution_ = NaN;
          this.nextRotation_ = NaN;
          const callback = series[0].callback;
          if (callback) {
            animationCallback(callback, true);
          }
        }
      }
      this.animations_ = this.animations_.filter(Boolean);
      if (more && this.updateAnimationKey_ === void 0) {
        this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this)
        );
      }
    }
    /**
     * @param {number} rotation Target rotation.
     * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
     */
    calculateCenterRotate(rotation, anchor) {
      let center;
      const currentCenter = this.getCenterInternal();
      if (currentCenter !== void 0) {
        center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
        rotate(center, rotation - this.getRotation());
        add(center, anchor);
      }
      return center;
    }
    /**
     * @param {number} resolution Target resolution.
     * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
     */
    calculateCenterZoom(resolution, anchor) {
      let center;
      const currentCenter = this.getCenterInternal();
      const currentResolution = this.getResolution();
      if (currentCenter !== void 0 && currentResolution !== void 0) {
        const x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
        const y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
        center = [x, y];
      }
      return center;
    }
    /**
     * Returns the current viewport size.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
     */
    getViewportSize_(rotation) {
      const size = this.viewportSize_;
      if (rotation) {
        const w = size[0];
        const h = size[1];
        return [
          Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
          Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation))
        ];
      }
      return size;
    }
    /**
     * Stores the viewport size on the view. The viewport size is not read every time from the DOM
     * to avoid performance hit and layout reflow.
     * This should be done on map size change.
     * Note: the constraints are not resolved during an animation to avoid stopping it
     * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
     */
    setViewportSize(size) {
      this.viewportSize_ = Array.isArray(size) ? size.slice() : [100, 100];
      if (!this.getAnimating()) {
        this.resolveConstraints(0);
      }
    }
    /**
     * Get the view center.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     * @observable
     * @api
     */
    getCenter() {
      const center = this.getCenterInternal();
      if (!center) {
        return center;
      }
      return toUserCoordinate(center, this.getProjection());
    }
    /**
     * Get the view center without transforming to user projection.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     */
    getCenterInternal() {
      return (
        /** @type {import("./coordinate.js").Coordinate|undefined} */
        this.get(ViewProperty_default.CENTER)
      );
    }
    /**
     * @return {Constraints} Constraints.
     */
    getConstraints() {
      return this.constraints_;
    }
    /**
     * @return {boolean} Resolution constraint is set
     */
    getConstrainResolution() {
      return this.get("constrainResolution");
    }
    /**
     * @param {Array<number>} [hints] Destination array.
     * @return {Array<number>} Hint.
     */
    getHints(hints) {
      if (hints !== void 0) {
        hints[0] = this.hints_[0];
        hints[1] = this.hints_[1];
        return hints;
      }
      return this.hints_.slice();
    }
    /**
     * Calculate the extent for the current view state and the passed box size.
     * @param {import("./size.js").Size} [size] The pixel dimensions of the box
     * into which the calculated extent should fit. Defaults to the size of the
     * map the view is associated with.
     * If no map or multiple maps are connected to the view, provide the desired
     * box size (e.g. `map.getSize()`).
     * @return {import("./extent.js").Extent} Extent.
     * @api
     */
    calculateExtent(size) {
      const extent = this.calculateExtentInternal(size);
      return toUserExtent(extent, this.getProjection());
    }
    /**
     * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
     * the map's last known viewport size will be used.
     * @return {import("./extent.js").Extent} Extent.
     */
    calculateExtentInternal(size) {
      size = size || this.getViewportSizeMinusPadding_();
      const center = (
        /** @type {!import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      assert(center, "The view center is not defined");
      const resolution = (
        /** @type {!number} */
        this.getResolution()
      );
      assert(resolution !== void 0, "The view resolution is not defined");
      const rotation = (
        /** @type {!number} */
        this.getRotation()
      );
      assert(rotation !== void 0, "The view rotation is not defined");
      return getForViewAndSize(center, resolution, rotation, size);
    }
    /**
     * Get the maximum resolution of the view.
     * @return {number} The maximum resolution of the view.
     * @api
     */
    getMaxResolution() {
      return this.maxResolution_;
    }
    /**
     * Get the minimum resolution of the view.
     * @return {number} The minimum resolution of the view.
     * @api
     */
    getMinResolution() {
      return this.minResolution_;
    }
    /**
     * Get the maximum zoom level for the view.
     * @return {number} The maximum zoom level.
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.minResolution_)
      );
    }
    /**
     * Set a new maximum zoom level for the view.
     * @param {number} zoom The maximum zoom level.
     * @api
     */
    setMaxZoom(zoom) {
      this.applyOptions_(this.getUpdatedOptions_({ maxZoom: zoom }));
    }
    /**
     * Get the minimum zoom level for the view.
     * @return {number} The minimum zoom level.
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.maxResolution_)
      );
    }
    /**
     * Set a new minimum zoom level for the view.
     * @param {number} zoom The minimum zoom level.
     * @api
     */
    setMinZoom(zoom) {
      this.applyOptions_(this.getUpdatedOptions_({ minZoom: zoom }));
    }
    /**
     * Set whether the view should allow intermediary zoom levels.
     * @param {boolean} enabled Whether the resolution is constrained.
     * @api
     */
    setConstrainResolution(enabled) {
      this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: enabled }));
    }
    /**
     * Get the view projection.
     * @return {import("./proj/Projection.js").default} The projection of the view.
     * @api
     */
    getProjection() {
      return this.projection_;
    }
    /**
     * Get the view resolution.
     * @return {number|undefined} The resolution of the view.
     * @observable
     * @api
     */
    getResolution() {
      return (
        /** @type {number|undefined} */
        this.get(ViewProperty_default.RESOLUTION)
      );
    }
    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the View, or undefined if none were given.
     * @return {Array<number>|undefined} The resolutions of the view.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     * @api
     */
    getResolutionForExtent(extent, size) {
      return this.getResolutionForExtentInternal(
        fromUserExtent(extent, this.getProjection()),
        size
      );
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     */
    getResolutionForExtentInternal(extent, size) {
      size = size || this.getViewportSizeMinusPadding_();
      const xResolution = getWidth(extent) / size[0];
      const yResolution = getHeight(extent) / size[1];
      return Math.max(xResolution, yResolution);
    }
    /**
     * Return a function that returns a value between 0 and 1 for a
     * resolution. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Resolution for value function.
     */
    getResolutionForValueFunction(power) {
      power = power || 2;
      const maxResolution = this.getConstrainedResolution(this.maxResolution_);
      const minResolution = this.minResolution_;
      const max = Math.log(maxResolution / minResolution) / Math.log(power);
      return (
        /**
         * @param {number} value Value.
         * @return {number} Resolution.
         */
        (function(value) {
          const resolution = maxResolution / Math.pow(power, value * max);
          return resolution;
        })
      );
    }
    /**
     * Get the view rotation.
     * @return {number} The rotation of the view in radians.
     * @observable
     * @api
     */
    getRotation() {
      return (
        /** @type {number} */
        this.get(ViewProperty_default.ROTATION)
      );
    }
    /**
     * Return a function that returns a resolution for a value between
     * 0 and 1. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Value for resolution function.
     */
    getValueForResolutionFunction(power) {
      const logPower = Math.log(power || 2);
      const maxResolution = this.getConstrainedResolution(this.maxResolution_);
      const minResolution = this.minResolution_;
      const max = Math.log(maxResolution / minResolution) / logPower;
      return (
        /**
         * @param {number} resolution Resolution.
         * @return {number} Value.
         */
        (function(resolution) {
          const value = Math.log(maxResolution / resolution) / logPower / max;
          return value;
        })
      );
    }
    /**
     * Returns the size of the viewport minus padding.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size reduced by the padding.
     */
    getViewportSizeMinusPadding_(rotation) {
      let size = this.getViewportSize_(rotation);
      const padding = this.padding_;
      if (padding) {
        size = [
          size[0] - padding[1] - padding[3],
          size[1] - padding[0] - padding[2]
        ];
      }
      return size;
    }
    /**
     * @return {State} View state.
     */
    getState() {
      const projection = this.getProjection();
      const resolution = this.getResolution();
      const rotation = this.getRotation();
      let center = (
        /** @type {import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      const padding = this.padding_;
      if (padding) {
        const reducedSize = this.getViewportSizeMinusPadding_();
        center = calculateCenterOn(
          center,
          this.getViewportSize_(),
          [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
          resolution,
          rotation
        );
      }
      return {
        center: center.slice(0),
        projection: projection !== void 0 ? projection : null,
        resolution,
        nextCenter: this.nextCenter_,
        nextResolution: this.nextResolution_,
        nextRotation: this.nextRotation_,
        rotation,
        zoom: this.getZoom()
      };
    }
    /**
     * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
     */
    getViewStateAndExtent() {
      return {
        viewState: this.getState(),
        extent: this.calculateExtent()
      };
    }
    /**
     * Get the current zoom level. This method may return non-integer zoom levels
     * if the view does not constrain the resolution, or if an interaction or
     * animation is underway.
     * @return {number|undefined} Zoom.
     * @api
     */
    getZoom() {
      let zoom;
      const resolution = this.getResolution();
      if (resolution !== void 0) {
        zoom = this.getZoomForResolution(resolution);
      }
      return zoom;
    }
    /**
     * Get the zoom level for a resolution.
     * @param {number} resolution The resolution.
     * @return {number|undefined} The zoom level for the provided resolution.
     * @api
     */
    getZoomForResolution(resolution) {
      let offset = this.minZoom_ || 0;
      let max, zoomFactor;
      if (this.resolutions_) {
        const nearest = linearFindNearest(this.resolutions_, resolution, 1);
        offset = nearest;
        max = this.resolutions_[nearest];
        if (nearest == this.resolutions_.length - 1) {
          zoomFactor = 2;
        } else {
          zoomFactor = max / this.resolutions_[nearest + 1];
        }
      } else {
        max = this.maxResolution_;
        zoomFactor = this.zoomFactor_;
      }
      return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    }
    /**
     * Get the resolution for a zoom level.
     * @param {number} zoom Zoom level.
     * @return {number} The view resolution for the provided zoom level.
     * @api
     */
    getResolutionForZoom(zoom) {
      if (this.resolutions_?.length) {
        if (this.resolutions_.length === 1) {
          return this.resolutions_[0];
        }
        const baseLevel = clamp(
          Math.floor(zoom),
          0,
          this.resolutions_.length - 2
        );
        const zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
        return this.resolutions_[baseLevel] / Math.pow(zoomFactor, clamp(zoom - baseLevel, 0, 1));
      }
      return this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_);
    }
    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is `map.getSize()`.
     * Takes care of the map angle.
     * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
     *     extent to fit the view to.
     * @param {FitOptions} [options] Options.
     * @api
     */
    fit(geometryOrExtent, options) {
      let geometry;
      assert(
        Array.isArray(geometryOrExtent) || typeof /** @type {?} */
        geometryOrExtent.getSimplifiedGeometry === "function",
        "Invalid extent or geometry provided as `geometry`"
      );
      if (Array.isArray(geometryOrExtent)) {
        assert(
          !isEmpty(geometryOrExtent),
          "Cannot fit empty extent provided as `geometry`"
        );
        const extent = fromUserExtent(geometryOrExtent, this.getProjection());
        geometry = fromExtent(extent);
      } else if (geometryOrExtent.getType() === "Circle") {
        const extent = fromUserExtent(
          geometryOrExtent.getExtent(),
          this.getProjection()
        );
        geometry = fromExtent(extent);
        geometry.rotate(this.getRotation(), getCenter(extent));
      } else {
        const userProjection2 = getUserProjection();
        if (userProjection2) {
          geometry = /** @type {import("./geom/SimpleGeometry.js").default} */
          geometryOrExtent.clone().transform(userProjection2, this.getProjection());
        } else {
          geometry = geometryOrExtent;
        }
      }
      this.fitInternal(geometry, options);
    }
    /**
     * Calculate rotated extent
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @return {import("./extent.js").Extent} The rotated extent for the geometry.
     */
    rotatedExtentForGeometry(geometry) {
      const rotation = this.getRotation();
      const cosAngle = Math.cos(rotation);
      const sinAngle = Math.sin(-rotation);
      const coords = geometry.getFlatCoordinates();
      const stride = geometry.getStride();
      let minRotX = Infinity;
      let minRotY = Infinity;
      let maxRotX = -Infinity;
      let maxRotY = -Infinity;
      for (let i = 0, ii = coords.length; i < ii; i += stride) {
        const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
        const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
        minRotX = Math.min(minRotX, rotX);
        minRotY = Math.min(minRotY, rotY);
        maxRotX = Math.max(maxRotX, rotX);
        maxRotY = Math.max(maxRotY, rotY);
      }
      return [minRotX, minRotY, maxRotX, maxRotY];
    }
    /**
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @param {FitOptions} [options] Options.
     */
    fitInternal(geometry, options) {
      options = options || {};
      let size = options.size;
      if (!size) {
        size = this.getViewportSizeMinusPadding_();
      }
      const padding = options.padding !== void 0 ? options.padding : [0, 0, 0, 0];
      const nearest = options.nearest !== void 0 ? options.nearest : false;
      let minResolution;
      if (options.minResolution !== void 0) {
        minResolution = options.minResolution;
      } else if (options.maxZoom !== void 0) {
        minResolution = this.getResolutionForZoom(options.maxZoom);
      } else {
        minResolution = 0;
      }
      const rotatedExtent = this.rotatedExtentForGeometry(geometry);
      let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
        size[0] - padding[1] - padding[3],
        size[1] - padding[0] - padding[2]
      ]);
      resolution = isNaN(resolution) ? minResolution : Math.max(resolution, minResolution);
      resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
      const rotation = this.getRotation();
      const sinAngle = Math.sin(rotation);
      const cosAngle = Math.cos(rotation);
      const centerRot = getCenter(rotatedExtent);
      centerRot[0] += (padding[1] - padding[3]) / 2 * resolution;
      centerRot[1] += (padding[0] - padding[2]) / 2 * resolution;
      const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
      const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
      const center = this.getConstrainedCenter([centerX, centerY], resolution);
      const callback = options.callback ? options.callback : VOID;
      if (options.duration !== void 0) {
        this.animateInternal(
          {
            resolution,
            center,
            duration: options.duration,
            easing: options.easing
          },
          callback
        );
      } else {
        this.targetResolution_ = resolution;
        this.targetCenter_ = center;
        this.applyTargetState_(false, true);
        animationCallback(callback, true);
      }
    }
    /**
     * Center on coordinate and view position.
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     * @api
     */
    centerOn(coordinate, size, position) {
      this.centerOnInternal(
        fromUserCoordinate(coordinate, this.getProjection()),
        size,
        position
      );
    }
    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     */
    centerOnInternal(coordinate, size, position) {
      this.setCenterInternal(
        calculateCenterOn(
          coordinate,
          size,
          position,
          this.getResolution(),
          this.getRotation()
        )
      );
    }
    /**
     * Calculates the shift between map and viewport center.
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @return {Array<number>|undefined} Center shift.
     */
    calculateCenterShift(center, resolution, rotation, size) {
      let centerShift;
      const padding = this.padding_;
      if (padding && center) {
        const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
        const shiftedCenter = calculateCenterOn(
          center,
          size,
          [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
          resolution,
          rotation
        );
        centerShift = [
          center[0] - shiftedCenter[0],
          center[1] - shiftedCenter[1]
        ];
      }
      return centerShift;
    }
    /**
     * @return {boolean} Is defined.
     */
    isDef() {
      return !!this.getCenterInternal() && this.getResolution() !== void 0;
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     * @api
     */
    adjustCenter(deltaCoordinates) {
      const center = toUserCoordinate(this.targetCenter_, this.getProjection());
      this.setCenter([
        center[0] + deltaCoordinates[0],
        center[1] + deltaCoordinates[1]
      ]);
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     */
    adjustCenterInternal(deltaCoordinates) {
      const center = this.targetCenter_;
      this.setCenterInternal([
        center[0] + deltaCoordinates[0],
        center[1] + deltaCoordinates[1]
      ]);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustResolution(ratio, anchor) {
      anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
      this.adjustResolutionInternal(ratio, anchor);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    adjustResolutionInternal(ratio, anchor) {
      const isMoving = this.getAnimating() || this.getInteracting();
      const size = this.getViewportSize_(this.getRotation());
      const newResolution = this.constraints_.resolution(
        this.targetResolution_ * ratio,
        0,
        size,
        isMoving
      );
      if (anchor) {
        this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
      }
      this.targetResolution_ *= ratio;
      this.applyTargetState_();
    }
    /**
     * Adds a value to the view zoom level, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom level.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustZoom(delta, anchor) {
      this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
    }
    /**
     * Adds a value to the view rotation, optionally using an anchor. Any rotation
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     * @api
     */
    adjustRotation(delta, anchor) {
      if (anchor) {
        anchor = fromUserCoordinate(anchor, this.getProjection());
      }
      this.adjustRotationInternal(delta, anchor);
    }
    /**
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     */
    adjustRotationInternal(delta, anchor) {
      const isMoving = this.getAnimating() || this.getInteracting();
      const newRotation = this.constraints_.rotation(
        this.targetRotation_ + delta,
        isMoving
      );
      if (anchor) {
        this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
      }
      this.targetRotation_ += delta;
      this.applyTargetState_();
    }
    /**
     * Set the center of the current view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     * @observable
     * @api
     */
    setCenter(center) {
      this.setCenterInternal(
        center ? fromUserCoordinate(center, this.getProjection()) : center
      );
    }
    /**
     * Set the center using the view projection (not the user projection).
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     */
    setCenterInternal(center) {
      this.targetCenter_ = center;
      this.applyTargetState_();
    }
    /**
     * @param {import("./ViewHint.js").default} hint Hint.
     * @param {number} delta Delta.
     * @return {number} New value.
     */
    setHint(hint, delta) {
      this.hints_[hint] += delta;
      this.changed();
      return this.hints_[hint];
    }
    /**
     * Set the resolution for this view. Any resolution constraint will apply.
     * @param {number|undefined} resolution The resolution of the view.
     * @observable
     * @api
     */
    setResolution(resolution) {
      this.targetResolution_ = resolution;
      this.applyTargetState_();
    }
    /**
     * Set the rotation for this view. Any rotation constraint will apply.
     * @param {number} rotation The rotation of the view in radians.
     * @observable
     * @api
     */
    setRotation(rotation) {
      this.targetRotation_ = rotation;
      this.applyTargetState_();
    }
    /**
     * Zoom to a specific zoom level. Any resolution constrain will apply.
     * @param {number} zoom Zoom level.
     * @api
     */
    setZoom(zoom) {
      this.setResolution(this.getResolutionForZoom(zoom));
    }
    /**
     * Recompute rotation/resolution/center based on target values.
     * Note: we have to compute rotation first, then resolution and center considering that
     * parameters can influence one another in case a view extent constraint is present.
     * @param {boolean} [doNotCancelAnims] Do not cancel animations.
     * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
     * @private
     */
    applyTargetState_(doNotCancelAnims, forceMoving) {
      const isMoving = this.getAnimating() || this.getInteracting() || forceMoving;
      const newRotation = this.constraints_.rotation(
        this.targetRotation_,
        isMoving
      );
      const size = this.getViewportSize_(newRotation);
      const newResolution = this.constraints_.resolution(
        this.targetResolution_,
        0,
        size,
        isMoving
      );
      const newCenter = this.constraints_.center(
        this.targetCenter_,
        newResolution,
        size,
        isMoving,
        this.calculateCenterShift(
          this.targetCenter_,
          newResolution,
          newRotation,
          size
        )
      );
      if (this.get(ViewProperty_default.ROTATION) !== newRotation) {
        this.set(ViewProperty_default.ROTATION, newRotation);
      }
      if (this.get(ViewProperty_default.RESOLUTION) !== newResolution) {
        this.set(ViewProperty_default.RESOLUTION, newResolution);
        this.set("zoom", this.getZoom(), true);
      }
      if (!newCenter || !this.get(ViewProperty_default.CENTER) || !equals3(this.get(ViewProperty_default.CENTER), newCenter)) {
        this.set(ViewProperty_default.CENTER, newCenter);
      }
      if (this.getAnimating() && !doNotCancelAnims) {
        this.cancelAnimations();
      }
      this.cancelAnchor_ = void 0;
    }
    /**
     * If any constraints need to be applied, an animation will be triggered.
     * This is typically done on interaction end.
     * Note: calling this with a duration of 0 will apply the constrained values straight away,
     * without animation.
     * @param {number} [duration] The animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    resolveConstraints(duration, resolutionDirection, anchor) {
      duration = duration !== void 0 ? duration : 200;
      const direction = resolutionDirection || 0;
      const newRotation = this.constraints_.rotation(this.targetRotation_);
      const size = this.getViewportSize_(newRotation);
      const newResolution = this.constraints_.resolution(
        this.targetResolution_,
        direction,
        size
      );
      const newCenter = this.constraints_.center(
        this.targetCenter_,
        newResolution,
        size,
        false,
        this.calculateCenterShift(
          this.targetCenter_,
          newResolution,
          newRotation,
          size
        )
      );
      if (duration === 0 && !this.cancelAnchor_) {
        this.targetResolution_ = newResolution;
        this.targetRotation_ = newRotation;
        this.targetCenter_ = newCenter;
        this.applyTargetState_();
        return;
      }
      anchor = anchor || (duration === 0 ? this.cancelAnchor_ : void 0);
      this.cancelAnchor_ = void 0;
      if (this.getResolution() !== newResolution || this.getRotation() !== newRotation || !this.getCenterInternal() || !equals3(this.getCenterInternal(), newCenter)) {
        if (this.getAnimating()) {
          this.cancelAnimations();
        }
        this.animateInternal({
          rotation: newRotation,
          center: newCenter,
          resolution: newResolution,
          duration,
          easing: easeOut,
          anchor
        });
      }
    }
    /**
     * Notify the View that an interaction has started.
     * The view state will be resolved to a stable one if needed
     * (depending on its constraints).
     * @api
     */
    beginInteraction() {
      this.resolveConstraints(0);
      this.setHint(ViewHint_default.INTERACTING, 1);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    endInteraction(duration, resolutionDirection, anchor) {
      anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
      this.endInteractionInternal(duration, resolutionDirection, anchor);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    endInteractionInternal(duration, resolutionDirection, anchor) {
      if (!this.getInteracting()) {
        return;
      }
      this.setHint(ViewHint_default.INTERACTING, -1);
      this.resolveConstraints(duration, resolutionDirection, anchor);
    }
    /**
     * Get a valid position for the view center according to the current constraints.
     * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
     * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
     * This is useful to guess a valid center position at a different zoom level.
     * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
     */
    getConstrainedCenter(targetCenter, targetResolution) {
      const size = this.getViewportSize_(this.getRotation());
      return this.constraints_.center(
        targetCenter,
        targetResolution || this.getResolution(),
        size
      );
    }
    /**
     * Get a valid zoom level according to the current view constraints.
     * @param {number|undefined} targetZoom Target zoom.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid zoom level.
     */
    getConstrainedZoom(targetZoom, direction) {
      const targetRes = this.getResolutionForZoom(targetZoom);
      return this.getZoomForResolution(
        this.getConstrainedResolution(targetRes, direction)
      );
    }
    /**
     * Get a valid resolution according to the current view constraints.
     * @param {number|undefined} targetResolution Target resolution.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid resolution.
     */
    getConstrainedResolution(targetResolution, direction) {
      direction = direction || 0;
      const size = this.getViewportSize_(this.getRotation());
      return this.constraints_.resolution(targetResolution, direction, size);
    }
  };
  function animationCallback(callback, returnValue) {
    setTimeout(function() {
      callback(returnValue);
    }, 0);
  }
  function createCenterConstraint(options) {
    if (options.extent !== void 0) {
      const smooth = options.smoothExtentConstraint !== void 0 ? options.smoothExtentConstraint : true;
      return createExtent(options.extent, options.constrainOnlyCenter, smooth);
    }
    const projection = createProjection(options.projection, "EPSG:3857");
    if (options.multiWorld !== true && projection.isGlobal()) {
      const extent = projection.getExtent().slice();
      extent[0] = -Infinity;
      extent[2] = Infinity;
      return createExtent(extent, false, false);
    }
    return none;
  }
  function createResolutionConstraint(options) {
    let resolutionConstraint;
    let maxResolution;
    let minResolution;
    const defaultMaxZoom = 28;
    const defaultZoomFactor = 2;
    let minZoom = options.minZoom !== void 0 ? options.minZoom : DEFAULT_MIN_ZOOM;
    let maxZoom = options.maxZoom !== void 0 ? options.maxZoom : defaultMaxZoom;
    const zoomFactor = options.zoomFactor !== void 0 ? options.zoomFactor : defaultZoomFactor;
    const multiWorld = options.multiWorld !== void 0 ? options.multiWorld : false;
    const smooth = options.smoothResolutionConstraint !== void 0 ? options.smoothResolutionConstraint : true;
    const showFullExtent = options.showFullExtent !== void 0 ? options.showFullExtent : false;
    const projection = createProjection(options.projection, "EPSG:3857");
    const projExtent = projection.getExtent();
    let constrainOnlyCenter = options.constrainOnlyCenter;
    let extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
      constrainOnlyCenter = false;
      extent = projExtent;
    }
    if (options.resolutions !== void 0) {
      const resolutions = options.resolutions;
      maxResolution = resolutions[minZoom];
      minResolution = resolutions[maxZoom] !== void 0 ? resolutions[maxZoom] : resolutions[resolutions.length - 1];
      if (options.constrainResolution) {
        resolutionConstraint = createSnapToResolutions(
          resolutions,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      } else {
        resolutionConstraint = createMinMaxResolution(
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      }
    } else {
      const size = !projExtent ? (
        // use an extent that can fit the whole world if need be
        360 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit()
      ) : Math.max(getWidth(projExtent), getHeight(projExtent));
      const defaultMaxResolution = size / DEFAULT_TILE_SIZE / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
      const defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
      maxResolution = options.maxResolution;
      if (maxResolution !== void 0) {
        minZoom = 0;
      } else {
        maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
      }
      minResolution = options.minResolution;
      if (minResolution === void 0) {
        if (options.maxZoom !== void 0) {
          if (options.maxResolution !== void 0) {
            minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
          } else {
            minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
          }
        } else {
          minResolution = defaultMinResolution;
        }
      }
      maxZoom = minZoom + Math.floor(
        Math.log(maxResolution / minResolution) / Math.log(zoomFactor)
      );
      minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
      if (options.constrainResolution) {
        resolutionConstraint = createSnapToPower(
          zoomFactor,
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      } else {
        resolutionConstraint = createMinMaxResolution(
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      }
    }
    return {
      constraint: resolutionConstraint,
      maxResolution,
      minResolution,
      minZoom,
      zoomFactor
    };
  }
  function createRotationConstraint(options) {
    const enableRotation = options.enableRotation !== void 0 ? options.enableRotation : true;
    if (enableRotation) {
      const constrainRotation = options.constrainRotation;
      if (constrainRotation === void 0 || constrainRotation === true) {
        return createSnapToZero();
      }
      if (constrainRotation === false) {
        return none2;
      }
      if (typeof constrainRotation === "number") {
        return createSnapToN(constrainRotation);
      }
      return none2;
    }
    return disable;
  }
  function isNoopAnimation(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
      if (!equals3(animation.sourceCenter, animation.targetCenter)) {
        return false;
      }
    }
    if (animation.sourceResolution !== animation.targetResolution) {
      return false;
    }
    if (animation.sourceRotation !== animation.targetRotation) {
      return false;
    }
    return true;
  }
  function calculateCenterOn(coordinate, size, position, resolution, rotation) {
    const cosAngle = Math.cos(-rotation);
    let sinAngle = Math.sin(-rotation);
    let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    sinAngle = -sinAngle;
    const centerX = rotX * cosAngle - rotY * sinAngle;
    const centerY = rotY * cosAngle + rotX * sinAngle;
    return [centerX, centerY];
  }
  var View_default = View;

  // node_modules/ol/css.js
  var CLASS_HIDDEN = "ol-hidden";
  var CLASS_UNSELECTABLE = "ol-unselectable";
  var CLASS_UNSUPPORTED = "ol-unsupported";
  var CLASS_CONTROL = "ol-control";
  var CLASS_COLLAPSED = "ol-collapsed";
  var fontRegEx = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`
    ].join(""),
    "i"
  );

  // node_modules/ol/control/Control.js
  var Control = class extends Object_default {
    /**
     * @param {Options} options Control options.
     */
    constructor(options) {
      super();
      const element = options.element;
      if (element && !options.target && !element.style.pointerEvents) {
        element.style.pointerEvents = "auto";
      }
      this.element = element ? element : null;
      this.target_ = null;
      this.map_ = null;
      this.listenerKeys = [];
      if (options.render) {
        this.render = options.render;
      }
      if (options.target) {
        this.setTarget(options.target);
      }
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.element?.remove();
      super.disposeInternal();
    }
    /**
     * Get the map associated with this control.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(map) {
      if (this.map_) {
        this.element?.remove();
      }
      for (let i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
        unlistenByKey(this.listenerKeys[i]);
      }
      this.listenerKeys.length = 0;
      this.map_ = map;
      if (map) {
        const target = this.target_ ?? map.getOverlayContainerStopEvent();
        if (this.element) {
          target.appendChild(this.element);
        }
        if (this.render !== VOID) {
          this.listenerKeys.push(
            listen(map, MapEventType_default.POSTRENDER, this.render, this)
          );
        }
        map.render();
      }
    }
    /**
     * Renders the control.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @api
     */
    render(mapEvent) {
    }
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after `setMap` is called on the control). If no `target` is set in the
     * options passed to the control constructor and if `setTarget` is not called
     * then the control is added to the map's overlay container.
     * @param {HTMLElement|string} target Target.
     * @api
     */
    setTarget(target) {
      this.target_ = typeof target === "string" ? document.getElementById(target) : target;
    }
  };
  var Control_default = Control;

  // node_modules/ol/control/Attribution.js
  var Attribution = class extends Control_default {
    /**
     * @param {Options} [options] Attribution options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        render: options.render,
        target: options.target
      });
      this.ulElement_ = document.createElement("ul");
      this.collapsed_ = options.collapsed !== void 0 ? options.collapsed : true;
      this.userCollapsed_ = this.collapsed_;
      this.overrideCollapsible_ = options.collapsible !== void 0;
      this.collapsible_ = options.collapsible !== void 0 ? options.collapsible : true;
      if (!this.collapsible_) {
        this.collapsed_ = false;
      }
      this.attributions_ = options.attributions;
      const className = options.className !== void 0 ? options.className : "ol-attribution";
      const tipLabel = options.tipLabel !== void 0 ? options.tipLabel : "Attributions";
      const expandClassName = options.expandClassName !== void 0 ? options.expandClassName : className + "-expand";
      const collapseLabel = options.collapseLabel !== void 0 ? options.collapseLabel : "\u203A";
      const collapseClassName = options.collapseClassName !== void 0 ? options.collapseClassName : className + "-collapse";
      if (typeof collapseLabel === "string") {
        this.collapseLabel_ = document.createElement("span");
        this.collapseLabel_.textContent = collapseLabel;
        this.collapseLabel_.className = collapseClassName;
      } else {
        this.collapseLabel_ = collapseLabel;
      }
      const label = options.label !== void 0 ? options.label : "i";
      if (typeof label === "string") {
        this.label_ = document.createElement("span");
        this.label_.textContent = label;
        this.label_.className = expandClassName;
      } else {
        this.label_ = label;
      }
      const activeLabel = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
      this.toggleButton_ = document.createElement("button");
      this.toggleButton_.setAttribute("type", "button");
      this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
      this.toggleButton_.title = tipLabel;
      this.toggleButton_.appendChild(activeLabel);
      this.toggleButton_.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL + (this.collapsed_ && this.collapsible_ ? " " + CLASS_COLLAPSED : "") + (this.collapsible_ ? "" : " ol-uncollapsible");
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(this.toggleButton_);
      element.appendChild(this.ulElement_);
      this.renderedAttributions_ = [];
      this.renderedVisible_ = true;
    }
    /**
     * Collect a list of visible attributions and set the collapsible state.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {Array<string>} Attributions.
     * @private
     */
    collectSourceAttributions_(frameState) {
      const layers = this.getMap().getAllLayers();
      const visibleAttributions = new Set(
        layers.flatMap((layer) => layer.getAttributions(frameState))
      );
      if (this.attributions_ !== void 0) {
        Array.isArray(this.attributions_) ? this.attributions_.forEach((item) => visibleAttributions.add(item)) : visibleAttributions.add(this.attributions_);
      }
      if (!this.overrideCollapsible_) {
        const collapsible = !layers.some(
          (layer) => layer.getSource()?.getAttributionsCollapsible() === false
        );
        this.setCollapsible(collapsible);
      }
      return Array.from(visibleAttributions);
    }
    /**
     * @private
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    async updateElement_(frameState) {
      if (!frameState) {
        if (this.renderedVisible_) {
          this.element.style.display = "none";
          this.renderedVisible_ = false;
        }
        return;
      }
      const attributions = await Promise.all(
        this.collectSourceAttributions_(frameState).map(
          (attribution) => toPromise(() => attribution)
        )
      );
      const visible = attributions.length > 0;
      if (this.renderedVisible_ != visible) {
        this.element.style.display = visible ? "" : "none";
        this.renderedVisible_ = visible;
      }
      if (equals2(attributions, this.renderedAttributions_)) {
        return;
      }
      removeChildren(this.ulElement_);
      for (let i = 0, ii = attributions.length; i < ii; ++i) {
        const element = document.createElement("li");
        element.innerHTML = attributions[i];
        this.ulElement_.appendChild(element);
      }
      this.renderedAttributions_ = attributions;
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      this.handleToggle_();
      this.userCollapsed_ = this.collapsed_;
    }
    /**
     * @private
     */
    handleToggle_() {
      this.element.classList.toggle(CLASS_COLLAPSED);
      if (this.collapsed_) {
        replaceNode(this.collapseLabel_, this.label_);
      } else {
        replaceNode(this.label_, this.collapseLabel_);
      }
      this.collapsed_ = !this.collapsed_;
      this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    }
    /**
     * Return `true` if the attribution is collapsible, `false` otherwise.
     * @return {boolean} True if the widget is collapsible.
     * @api
     */
    getCollapsible() {
      return this.collapsible_;
    }
    /**
     * Set whether the attribution should be collapsible.
     * @param {boolean} collapsible True if the widget is collapsible.
     * @api
     */
    setCollapsible(collapsible) {
      if (this.collapsible_ === collapsible) {
        return;
      }
      this.collapsible_ = collapsible;
      this.element.classList.toggle("ol-uncollapsible");
      if (this.userCollapsed_) {
        this.handleToggle_();
      }
    }
    /**
     * Collapse or expand the attribution according to the passed parameter. Will
     * not do anything if the attribution isn't collapsible or if the current
     * collapsed state is already the one requested.
     * @param {boolean} collapsed True if the widget is collapsed.
     * @api
     */
    setCollapsed(collapsed) {
      this.userCollapsed_ = collapsed;
      if (!this.collapsible_ || this.collapsed_ === collapsed) {
        return;
      }
      this.handleToggle_();
    }
    /**
     * Return `true` when the attribution is currently collapsed or `false`
     * otherwise.
     * @return {boolean} True if the widget is collapsed.
     * @api
     */
    getCollapsed() {
      return this.collapsed_;
    }
    /**
     * Update the attribution element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(mapEvent) {
      this.updateElement_(mapEvent.frameState);
    }
  };
  var Attribution_default = Attribution;

  // node_modules/ol/control/Rotate.js
  var Rotate = class extends Control_default {
    /**
     * @param {Options} [options] Rotate options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        render: options.render,
        target: options.target
      });
      const className = options.className !== void 0 ? options.className : "ol-rotate";
      const label = options.label !== void 0 ? options.label : "\u21E7";
      const compassClassName = options.compassClassName !== void 0 ? options.compassClassName : "ol-compass";
      this.label_ = null;
      if (typeof label === "string") {
        this.label_ = document.createElement("span");
        this.label_.className = compassClassName;
        this.label_.textContent = label;
      } else {
        this.label_ = label;
        this.label_.classList.add(compassClassName);
      }
      const tipLabel = options.tipLabel ? options.tipLabel : "Reset rotation";
      const button = document.createElement("button");
      button.className = className + "-reset";
      button.setAttribute("type", "button");
      button.title = tipLabel;
      button.appendChild(this.label_);
      button.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(button);
      this.callResetNorth_ = options.resetNorth ? options.resetNorth : void 0;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
      this.autoHide_ = options.autoHide !== void 0 ? options.autoHide : true;
      this.rotation_ = void 0;
      if (this.autoHide_) {
        this.element.classList.add(CLASS_HIDDEN);
      }
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      if (this.callResetNorth_ !== void 0) {
        this.callResetNorth_();
      } else {
        this.resetNorth_();
      }
    }
    /**
     * @private
     */
    resetNorth_() {
      const map = this.getMap();
      const view = map.getView();
      if (!view) {
        return;
      }
      const rotation = view.getRotation();
      if (rotation !== void 0) {
        if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
          view.animate({
            rotation: 0,
            duration: this.duration_,
            easing: easeOut
          });
        } else {
          view.setRotation(0);
        }
      }
    }
    /**
     * Update the rotate control element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(mapEvent) {
      const frameState = mapEvent.frameState;
      if (!frameState) {
        return;
      }
      const rotation = frameState.viewState.rotation;
      if (rotation != this.rotation_) {
        const transform2 = "rotate(" + rotation + "rad)";
        if (this.autoHide_) {
          const contains2 = this.element.classList.contains(CLASS_HIDDEN);
          if (!contains2 && rotation === 0) {
            this.element.classList.add(CLASS_HIDDEN);
          } else if (contains2 && rotation !== 0) {
            this.element.classList.remove(CLASS_HIDDEN);
          }
        }
        this.label_.style.transform = transform2;
      }
      this.rotation_ = rotation;
    }
  };
  var Rotate_default = Rotate;

  // node_modules/ol/control/Zoom.js
  var Zoom = class extends Control_default {
    /**
     * @param {Options} [options] Zoom options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        target: options.target
      });
      const className = options.className !== void 0 ? options.className : "ol-zoom";
      const delta = options.delta !== void 0 ? options.delta : 1;
      const zoomInClassName = options.zoomInClassName !== void 0 ? options.zoomInClassName : className + "-in";
      const zoomOutClassName = options.zoomOutClassName !== void 0 ? options.zoomOutClassName : className + "-out";
      const zoomInLabel = options.zoomInLabel !== void 0 ? options.zoomInLabel : "+";
      const zoomOutLabel = options.zoomOutLabel !== void 0 ? options.zoomOutLabel : "\u2013";
      const zoomInTipLabel = options.zoomInTipLabel !== void 0 ? options.zoomInTipLabel : "Zoom in";
      const zoomOutTipLabel = options.zoomOutTipLabel !== void 0 ? options.zoomOutTipLabel : "Zoom out";
      const inElement = document.createElement("button");
      inElement.className = zoomInClassName;
      inElement.setAttribute("type", "button");
      inElement.title = zoomInTipLabel;
      inElement.appendChild(
        typeof zoomInLabel === "string" ? document.createTextNode(zoomInLabel) : zoomInLabel
      );
      inElement.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this, delta),
        false
      );
      const outElement = document.createElement("button");
      outElement.className = zoomOutClassName;
      outElement.setAttribute("type", "button");
      outElement.title = zoomOutTipLabel;
      outElement.appendChild(
        typeof zoomOutLabel === "string" ? document.createTextNode(zoomOutLabel) : zoomOutLabel
      );
      outElement.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this, -delta),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(inElement);
      element.appendChild(outElement);
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * @param {number} delta Zoom delta.
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(delta, event) {
      event.preventDefault();
      this.zoomByDelta_(delta);
    }
    /**
     * @param {number} delta Zoom delta.
     * @private
     */
    zoomByDelta_(delta) {
      const map = this.getMap();
      const view = map.getView();
      if (!view) {
        return;
      }
      const currentZoom = view.getZoom();
      if (currentZoom !== void 0) {
        const newZoom = view.getConstrainedZoom(currentZoom + delta);
        if (this.duration_ > 0) {
          if (view.getAnimating()) {
            view.cancelAnimations();
          }
          view.animate({
            zoom: newZoom,
            duration: this.duration_,
            easing: easeOut
          });
        } else {
          view.setZoom(newZoom);
        }
      }
    }
  };
  var Zoom_default = Zoom;

  // node_modules/ol/control/defaults.js
  function defaults(options) {
    options = options ? options : {};
    const controls = new Collection_default();
    const zoomControl = options.zoom !== void 0 ? options.zoom : true;
    if (zoomControl) {
      controls.push(new Zoom_default(options.zoomOptions));
    }
    const rotateControl = options.rotate !== void 0 ? options.rotate : true;
    if (rotateControl) {
      controls.push(new Rotate_default(options.rotateOptions));
    }
    const attributionControl = options.attribution !== void 0 ? options.attribution : true;
    if (attributionControl) {
      controls.push(new Attribution_default(options.attributionOptions));
    }
    return controls;
  }

  // node_modules/ol/Kinetic.js
  var Kinetic = class {
    /**
     * @param {number} decay Rate of decay (must be negative).
     * @param {number} minVelocity Minimum velocity (pixels/millisecond).
     * @param {number} delay Delay to consider to calculate the kinetic
     *     initial values (milliseconds).
     */
    constructor(decay, minVelocity, delay) {
      this.decay_ = decay;
      this.minVelocity_ = minVelocity;
      this.delay_ = delay;
      this.points_ = [];
      this.angle_ = 0;
      this.initialVelocity_ = 0;
    }
    /**
     * FIXME empty description for jsdoc
     */
    begin() {
      this.points_.length = 0;
      this.angle_ = 0;
      this.initialVelocity_ = 0;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     */
    update(x, y) {
      this.points_.push(x, y, Date.now());
    }
    /**
     * @return {boolean} Whether we should do kinetic animation.
     */
    end() {
      if (this.points_.length < 6) {
        return false;
      }
      const delay = Date.now() - this.delay_;
      const lastIndex = this.points_.length - 3;
      if (this.points_[lastIndex + 2] < delay) {
        return false;
      }
      let firstIndex = lastIndex - 3;
      while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
        firstIndex -= 3;
      }
      const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
      if (duration < 1e3 / 60) {
        return false;
      }
      const dx = this.points_[lastIndex] - this.points_[firstIndex];
      const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
      this.angle_ = Math.atan2(dy, dx);
      this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
      return this.initialVelocity_ > this.minVelocity_;
    }
    /**
     * @return {number} Total distance travelled (pixels).
     */
    getDistance() {
      return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }
    /**
     * @return {number} Angle of the kinetic panning animation (radians).
     */
    getAngle() {
      return this.angle_;
    }
  };
  var Kinetic_default = Kinetic;

  // node_modules/ol/interaction/Property.js
  var Property_default = {
    ACTIVE: "active"
  };

  // node_modules/ol/interaction/Interaction.js
  var Interaction = class extends Object_default {
    /**
     * @param {InteractionOptions} [options] Options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      if (options && options.handleEvent) {
        this.handleEvent = options.handleEvent;
      }
      this.map_ = null;
      this.setActive(true);
    }
    /**
     * Return whether the interaction is currently active.
     * @return {boolean} `true` if the interaction is active, `false` otherwise.
     * @observable
     * @api
     */
    getActive() {
      return (
        /** @type {boolean} */
        this.get(Property_default.ACTIVE)
      );
    }
    /**
     * Get the map associated with this interaction.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     */
    handleEvent(mapBrowserEvent) {
      return true;
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     */
    setActive(active) {
      this.set(Property_default.ACTIVE, active);
    }
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(map) {
      this.map_ = map;
    }
  };
  function pan(view, delta, duration) {
    const currentCenter = view.getCenterInternal();
    if (currentCenter) {
      const center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
      view.animateInternal({
        duration: duration !== void 0 ? duration : 250,
        easing: linear,
        center: view.getConstrainedCenter(center)
      });
    }
  }
  function zoomByDelta(view, delta, anchor, duration) {
    const currentZoom = view.getZoom();
    if (currentZoom === void 0) {
      return;
    }
    const newZoom = view.getConstrainedZoom(currentZoom + delta);
    const newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) {
      view.cancelAnimations();
    }
    view.animate({
      resolution: newResolution,
      anchor,
      duration: duration !== void 0 ? duration : 250,
      easing: easeOut
    });
  }
  var Interaction_default = Interaction;

  // node_modules/ol/interaction/DoubleClickZoom.js
  var DoubleClickZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options ? options : {};
      this.delta_ = options.delta ? options.delta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
     * doubleclick) and eventually zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == MapBrowserEventType_default.DBLCLICK) {
        const browserEvent = (
          /** @type {MouseEvent} */
          mapBrowserEvent.originalEvent
        );
        const map = mapBrowserEvent.map;
        const anchor = mapBrowserEvent.coordinate;
        const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
        const view = map.getView();
        zoomByDelta(view, delta, anchor, this.duration_);
        browserEvent.preventDefault();
        stopEvent = true;
      }
      return !stopEvent;
    }
  };
  var DoubleClickZoom_default = DoubleClickZoom;

  // node_modules/ol/events/condition.js
  function all(var_args) {
    const conditions = arguments;
    return function(event) {
      let pass = true;
      for (let i = 0, ii = conditions.length; i < ii; ++i) {
        pass = pass && conditions[i](event);
        if (!pass) {
          break;
        }
      }
      return pass;
    };
  }
  var altShiftKeysOnly = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
  };
  var focus = function(event) {
    const targetElement = event.map.getTargetElement();
    const rootNode = targetElement.getRootNode();
    const activeElement = event.map.getOwnerDocument().activeElement;
    return rootNode instanceof ShadowRoot ? rootNode.host.contains(activeElement) : targetElement.contains(activeElement);
  };
  var focusWithTabindex = function(event) {
    const targetElement = event.map.getTargetElement();
    const rootNode = targetElement.getRootNode();
    const tabIndexCandidate = rootNode instanceof ShadowRoot ? rootNode.host : targetElement;
    return tabIndexCandidate.hasAttribute("tabindex") ? focus(event) : true;
  };
  var always = TRUE;
  var mouseActionButton = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in originalEvent && originalEvent.button == 0 && !(WEBKIT && MAC && originalEvent.ctrlKey);
  };
  var noModifierKeys = function(mapBrowserEvent) {
    const originalEvent = (
      /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
      mapBrowserEvent.originalEvent
    );
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
  };
  var platformModifierKey = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return MAC ? originalEvent.metaKey : originalEvent.ctrlKey;
  };
  var shiftKeyOnly = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
  };
  var targetNotEditable = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    const tagName = (
      /** @type {Element} */
      originalEvent.target.tagName
    );
    return tagName !== "INPUT" && tagName !== "SELECT" && tagName !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
    // different type like `SVGElement`.
    // @ts-ignore
    !originalEvent.target.isContentEditable;
  };
  var mouseOnly = function(mapBrowserEvent) {
    const pointerEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in pointerEvent && pointerEvent.pointerType == "mouse";
  };
  var primaryAction = function(mapBrowserEvent) {
    const pointerEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in pointerEvent && pointerEvent.isPrimary && pointerEvent.button === 0;
  };

  // node_modules/ol/interaction/Pointer.js
  var PointerInteraction = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        options
      );
      if (options.handleDownEvent) {
        this.handleDownEvent = options.handleDownEvent;
      }
      if (options.handleDragEvent) {
        this.handleDragEvent = options.handleDragEvent;
      }
      if (options.handleMoveEvent) {
        this.handleMoveEvent = options.handleMoveEvent;
      }
      if (options.handleUpEvent) {
        this.handleUpEvent = options.handleUpEvent;
      }
      if (options.stopDown) {
        this.stopDown = options.stopDown;
      }
      this.handlingDownUpSequence = false;
      this.targetPointers = [];
    }
    /**
     * Returns the current number of pointers involved in the interaction,
     * e.g. `2` when two fingers are used.
     * @return {number} The number of pointers.
     * @api
     */
    getPointerCount() {
      return this.targetPointers.length;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleDownEvent(mapBrowserEvent) {
      return false;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleDragEvent(mapBrowserEvent) {
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
     * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
     * detected.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     * @override
     */
    handleEvent(mapBrowserEvent) {
      if (!mapBrowserEvent.originalEvent) {
        return true;
      }
      let stopEvent = false;
      this.updateTrackedPointers_(mapBrowserEvent);
      if (this.handlingDownUpSequence) {
        if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDRAG) {
          this.handleDragEvent(mapBrowserEvent);
          mapBrowserEvent.originalEvent.preventDefault();
        } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERUP) {
          const handledUp = this.handleUpEvent(mapBrowserEvent);
          this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
        }
      } else {
        if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDOWN) {
          const handled = this.handleDownEvent(mapBrowserEvent);
          this.handlingDownUpSequence = handled;
          stopEvent = this.stopDown(handled);
        } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERMOVE) {
          this.handleMoveEvent(mapBrowserEvent);
        }
      }
      return !stopEvent;
    }
    /**
     * Handle pointer move events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleMoveEvent(mapBrowserEvent) {
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleUpEvent(mapBrowserEvent) {
      return false;
    }
    /**
     * This function is used to determine if "down" events should be propagated
     * to other interactions or should be stopped.
     * @param {boolean} handled Was the event handled by the interaction?
     * @return {boolean} Should the `down` event be stopped?
     */
    stopDown(handled) {
      return handled;
    }
    /**
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @private
     */
    updateTrackedPointers_(mapBrowserEvent) {
      if (mapBrowserEvent.activePointers) {
        this.targetPointers = mapBrowserEvent.activePointers;
      }
    }
  };
  function centroid(pointerEvents) {
    const length = pointerEvents.length;
    let clientX = 0;
    let clientY = 0;
    for (let i = 0; i < length; i++) {
      clientX += pointerEvents[i].clientX;
      clientY += pointerEvents[i].clientY;
    }
    return { clientX: clientX / length, clientY: clientY / length };
  }
  var Pointer_default = PointerInteraction;

  // node_modules/ol/interaction/DragPan.js
  var DragPan = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super({
        stopDown: FALSE
      });
      options = options ? options : {};
      this.kinetic_ = options.kinetic;
      this.lastCentroid = null;
      this.lastPointersCount_;
      this.panning_ = false;
      const condition = options.condition ? options.condition : all(noModifierKeys, primaryAction);
      this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
      this.noKinetic_ = false;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      const map = mapBrowserEvent.map;
      if (!this.panning_) {
        this.panning_ = true;
        map.getView().beginInteraction();
      }
      const targetPointers = this.targetPointers;
      const centroid2 = map.getEventPixel(centroid(targetPointers));
      if (targetPointers.length == this.lastPointersCount_) {
        if (this.kinetic_) {
          this.kinetic_.update(centroid2[0], centroid2[1]);
        }
        if (this.lastCentroid) {
          const delta = [
            this.lastCentroid[0] - centroid2[0],
            centroid2[1] - this.lastCentroid[1]
          ];
          const map2 = mapBrowserEvent.map;
          const view = map2.getView();
          scale2(delta, view.getResolution());
          rotate(delta, view.getRotation());
          view.adjustCenterInternal(delta);
        }
      } else if (this.kinetic_) {
        this.kinetic_.begin();
      }
      this.lastCentroid = centroid2;
      this.lastPointersCount_ = targetPointers.length;
      mapBrowserEvent.originalEvent.preventDefault();
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (this.targetPointers.length === 0) {
        if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
          const distance = this.kinetic_.getDistance();
          const angle = this.kinetic_.getAngle();
          const center = view.getCenterInternal();
          const centerpx = map.getPixelFromCoordinateInternal(center);
          const dest = map.getCoordinateFromPixelInternal([
            centerpx[0] - distance * Math.cos(angle),
            centerpx[1] - distance * Math.sin(angle)
          ]);
          view.animateInternal({
            center: view.getConstrainedCenter(dest),
            duration: 500,
            easing: easeOut
          });
        }
        if (this.panning_) {
          this.panning_ = false;
          view.endInteraction();
        }
        return false;
      }
      if (this.kinetic_) {
        this.kinetic_.begin();
      }
      this.lastCentroid = null;
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        this.lastCentroid = null;
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        if (this.kinetic_) {
          this.kinetic_.begin();
        }
        this.noKinetic_ = this.targetPointers.length > 1;
        return true;
      }
      return false;
    }
  };
  var DragPan_default = DragPan;

  // node_modules/ol/interaction/DragRotate.js
  var DragRotate = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        stopDown: FALSE
      });
      this.condition_ = options.condition ? options.condition : altShiftKeysOnly;
      this.lastAngle_ = void 0;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return;
      }
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (view.getConstraints().rotation === disable) {
        return;
      }
      const size = map.getSize();
      const offset = mapBrowserEvent.pixel;
      const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
      if (this.lastAngle_ !== void 0) {
        const delta = theta - this.lastAngle_;
        view.adjustRotationInternal(-delta);
      }
      this.lastAngle_ = theta;
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return true;
      }
      const map = mapBrowserEvent.map;
      const view = map.getView();
      view.endInteraction(this.duration_);
      return false;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return false;
      }
      if (mouseActionButton(mapBrowserEvent) && this.condition_(mapBrowserEvent)) {
        const map = mapBrowserEvent.map;
        map.getView().beginInteraction();
        this.lastAngle_ = void 0;
        return true;
      }
      return false;
    }
  };
  var DragRotate_default = DragRotate;

  // node_modules/ol/render/Box.js
  var RenderBox = class extends Disposable_default {
    /**
     * @param {string} className CSS class name.
     */
    constructor(className) {
      super();
      this.geometry_ = null;
      this.element_ = document.createElement("div");
      this.element_.style.position = "absolute";
      this.element_.style.pointerEvents = "auto";
      this.element_.className = "ol-box " + className;
      this.map_ = null;
      this.startPixel_ = null;
      this.endPixel_ = null;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.setMap(null);
    }
    /**
     * @private
     */
    render_() {
      const startPixel = this.startPixel_;
      const endPixel = this.endPixel_;
      const px = "px";
      const style = this.element_.style;
      style.left = Math.min(startPixel[0], endPixel[0]) + px;
      style.top = Math.min(startPixel[1], endPixel[1]) + px;
      style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
      style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(map) {
      if (this.map_) {
        this.map_.getOverlayContainer().removeChild(this.element_);
        const style = this.element_.style;
        style.left = "inherit";
        style.top = "inherit";
        style.width = "inherit";
        style.height = "inherit";
      }
      this.map_ = map;
      if (this.map_) {
        this.map_.getOverlayContainer().appendChild(this.element_);
      }
    }
    /**
     * @param {import("../pixel.js").Pixel} startPixel Start pixel.
     * @param {import("../pixel.js").Pixel} endPixel End pixel.
     */
    setPixels(startPixel, endPixel) {
      this.startPixel_ = startPixel;
      this.endPixel_ = endPixel;
      this.createOrUpdateGeometry();
      this.render_();
    }
    /**
     * Creates or updates the cached geometry.
     */
    createOrUpdateGeometry() {
      if (!this.map_) {
        return;
      }
      const startPixel = this.startPixel_;
      const endPixel = this.endPixel_;
      const pixels = [
        startPixel,
        [startPixel[0], endPixel[1]],
        endPixel,
        [endPixel[0], startPixel[1]]
      ];
      const coordinates2 = pixels.map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_
      );
      coordinates2[4] = coordinates2[0].slice();
      if (!this.geometry_) {
        this.geometry_ = new Polygon_default([coordinates2]);
      } else {
        this.geometry_.setCoordinates([coordinates2]);
      }
    }
    /**
     * @return {import("../geom/Polygon.js").default} Geometry.
     */
    getGeometry() {
      return this.geometry_;
    }
  };
  var Box_default = RenderBox;

  // node_modules/ol/interaction/DragBox.js
  var DragBoxEventType = {
    /**
     * Triggered upon drag box start.
     * @event DragBoxEvent#boxstart
     * @api
     */
    BOXSTART: "boxstart",
    /**
     * Triggered on drag when box is active.
     * @event DragBoxEvent#boxdrag
     * @api
     */
    BOXDRAG: "boxdrag",
    /**
     * Triggered upon drag box end.
     * @event DragBoxEvent#boxend
     * @api
     */
    BOXEND: "boxend",
    /**
     * Triggered upon drag box canceled.
     * @event DragBoxEvent#boxcancel
     * @api
     */
    BOXCANCEL: "boxcancel"
  };
  var DragBoxEvent = class extends Event_default {
    /**
     * @param {string} type The event type.
     * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
     */
    constructor(type, coordinate, mapBrowserEvent) {
      super(type);
      this.coordinate = coordinate;
      this.mapBrowserEvent = mapBrowserEvent;
    }
  };
  var DragBox = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      options = options ?? {};
      this.box_ = new Box_default(options.className || "ol-dragbox");
      this.minArea_ = options.minArea ?? 64;
      if (options.onBoxEnd) {
        this.onBoxEnd = options.onBoxEnd;
      }
      this.startPixel_ = null;
      this.condition_ = options.condition ?? mouseActionButton;
      this.boxEndCondition_ = options.boxEndCondition ?? this.defaultBoxEndCondition;
    }
    /**
     * The default condition for determining whether the boxend event
     * should fire.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
     *     leading to the box end.
     * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
     * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
     * @return {boolean} Whether or not the boxend condition should be fired.
     */
    defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
      const width = endPixel[0] - startPixel[0];
      const height = endPixel[1] - startPixel[1];
      return width * width + height * height >= this.minArea_;
    }
    /**
     * Returns geometry of last drawn box.
     * @return {import("../geom/Polygon.js").default} Geometry.
     * @api
     */
    getGeometry() {
      return this.box_.getGeometry();
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      if (!this.startPixel_) {
        return;
      }
      this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
      this.dispatchEvent(
        new DragBoxEvent(
          DragBoxEventType.BOXDRAG,
          mapBrowserEvent.coordinate,
          mapBrowserEvent
        )
      );
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (!this.startPixel_) {
        return false;
      }
      const completeBox = this.boxEndCondition_(
        mapBrowserEvent,
        this.startPixel_,
        mapBrowserEvent.pixel
      );
      if (completeBox) {
        this.onBoxEnd(mapBrowserEvent);
      }
      this.dispatchEvent(
        new DragBoxEvent(
          completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL,
          mapBrowserEvent.coordinate,
          mapBrowserEvent
        )
      );
      this.box_.setMap(null);
      this.startPixel_ = null;
      return false;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.condition_(mapBrowserEvent)) {
        this.startPixel_ = mapBrowserEvent.pixel;
        this.box_.setMap(mapBrowserEvent.map);
        this.box_.setPixels(this.startPixel_, this.startPixel_);
        this.dispatchEvent(
          new DragBoxEvent(
            DragBoxEventType.BOXSTART,
            mapBrowserEvent.coordinate,
            mapBrowserEvent
          )
        );
        return true;
      }
      return false;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     */
    onBoxEnd(event) {
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     * @override
     */
    setActive(active) {
      if (!active) {
        this.box_.setMap(null);
        if (this.startPixel_) {
          this.dispatchEvent(
            new DragBoxEvent(DragBoxEventType.BOXCANCEL, this.startPixel_, null)
          );
          this.startPixel_ = null;
        }
      }
      super.setActive(active);
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     * @override
     */
    setMap(map) {
      const oldMap = this.getMap();
      if (oldMap) {
        this.box_.setMap(null);
        if (this.startPixel_) {
          this.dispatchEvent(
            new DragBoxEvent(DragBoxEventType.BOXCANCEL, this.startPixel_, null)
          );
          this.startPixel_ = null;
        }
      }
      super.setMap(map);
    }
  };
  var DragBox_default = DragBox;

  // node_modules/ol/interaction/DragZoom.js
  var DragZoom = class extends DragBox_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const condition = options.condition ? options.condition : shiftKeyOnly;
      super({
        condition,
        className: options.className || "ol-dragzoom",
        minArea: options.minArea
      });
      this.duration_ = options.duration !== void 0 ? options.duration : 200;
      this.out_ = options.out !== void 0 ? options.out : false;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     * @override
     */
    onBoxEnd(event) {
      const map = this.getMap();
      const view = (
        /** @type {!import("../View.js").default} */
        map.getView()
      );
      let geometry = this.getGeometry();
      if (this.out_) {
        const rotatedExtent = view.rotatedExtentForGeometry(geometry);
        const resolution = view.getResolutionForExtentInternal(rotatedExtent);
        const factor = view.getResolution() / resolution;
        geometry = geometry.clone();
        geometry.scale(factor * factor);
      }
      view.fitInternal(geometry, {
        duration: this.duration_,
        easing: easeOut
      });
    }
  };
  var DragZoom_default = DragZoom;

  // node_modules/ol/events/Key.js
  var Key_default = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown"
  };

  // node_modules/ol/interaction/KeyboardPan.js
  var KeyboardPan = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options || {};
      this.defaultCondition_ = function(mapBrowserEvent) {
        return noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
      };
      this.condition_ = options.condition !== void 0 ? options.condition : this.defaultCondition_;
      this.duration_ = options.duration !== void 0 ? options.duration : 100;
      this.pixelDelta_ = options.pixelDelta !== void 0 ? options.pixelDelta : 128;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides the direction to pan to (if an arrow key was
     * pressed).
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == EventType_default.KEYDOWN) {
        const keyEvent = (
          /** @type {KeyboardEvent} */
          mapBrowserEvent.originalEvent
        );
        const key = keyEvent.key;
        if (this.condition_(mapBrowserEvent) && (key == Key_default.DOWN || key == Key_default.LEFT || key == Key_default.RIGHT || key == Key_default.UP)) {
          const map = mapBrowserEvent.map;
          const view = map.getView();
          const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
          let deltaX = 0, deltaY = 0;
          if (key == Key_default.DOWN) {
            deltaY = -mapUnitsDelta;
          } else if (key == Key_default.LEFT) {
            deltaX = -mapUnitsDelta;
          } else if (key == Key_default.RIGHT) {
            deltaX = mapUnitsDelta;
          } else {
            deltaY = mapUnitsDelta;
          }
          const delta = [deltaX, deltaY];
          rotate(delta, view.getRotation());
          pan(view, delta, this.duration_);
          keyEvent.preventDefault();
          stopEvent = true;
        }
      }
      return !stopEvent;
    }
  };
  var KeyboardPan_default = KeyboardPan;

  // node_modules/ol/interaction/KeyboardZoom.js
  var KeyboardZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options ? options : {};
      this.condition_ = options.condition ? options.condition : function(mapBrowserEvent) {
        return !platformModifierKey(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
      };
      this.delta_ = options.delta ? options.delta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 100;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
     * key pressed was '+' or '-').
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == EventType_default.KEYDOWN || mapBrowserEvent.type == EventType_default.KEYPRESS) {
        const keyEvent = (
          /** @type {KeyboardEvent} */
          mapBrowserEvent.originalEvent
        );
        const key = keyEvent.key;
        if (this.condition_(mapBrowserEvent) && (key === "+" || key === "-")) {
          const map = mapBrowserEvent.map;
          const delta = key === "+" ? this.delta_ : -this.delta_;
          const view = map.getView();
          zoomByDelta(view, delta, void 0, this.duration_);
          keyEvent.preventDefault();
          stopEvent = true;
        }
      }
      return !stopEvent;
    }
  };
  var KeyboardZoom_default = KeyboardZoom;

  // node_modules/ol/interaction/MouseWheelZoom.js
  var DELTA_LINE_MULTIPLIER = 40;
  var DELTA_PAGE_MULTIPLIER = 300;
  var DELTA_TRACKPAD_PINCH_TO_ZOOM_MULTIPLIER = 3;
  var MouseWheelZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        options
      );
      this.totalDelta_ = 0;
      this.lastDelta_ = 0;
      this.maxDelta_ = options.maxDelta !== void 0 ? options.maxDelta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
      this.timeout_ = options.timeout !== void 0 ? options.timeout : 80;
      this.useAnchor_ = options.useAnchor !== void 0 ? options.useAnchor : true;
      this.constrainResolution_ = options.constrainResolution !== void 0 ? options.constrainResolution : false;
      const condition = options.condition ? options.condition : always;
      this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
      this.lastAnchor_ = null;
      this.startTime_ = void 0;
      this.timeoutId_;
      this.mode_ = void 0;
      this.trackpadEventGap_ = 400;
      this.trackpadTimeoutId_;
      this.deltaPerZoom_ = 300;
      this.ctrlKeyPressed_ = false;
      this.ctrlKeyListenerKeys_ = [];
    }
    /**
     * @param {import('../Map.js').default|null} map Map.
     * @override
     */
    setMap(map) {
      this.ctrlKeyListenerKeys_.forEach(unlistenByKey);
      this.ctrlKeyListenerKeys_.length = 0;
      this.ctrlKeyPressed_ = false;
      super.setMap(map);
      if (map) {
        const doc = map.getOwnerDocument();
        this.ctrlKeyListenerKeys_.push(
          listen(doc, "keydown", (e) => {
            if (e.key === "Control") {
              this.ctrlKeyPressed_ = true;
            }
          }),
          listen(doc, "keyup", (e) => {
            if (e.key === "Control") {
              this.ctrlKeyPressed_ = false;
            }
          })
        );
      }
    }
    /**
     * @private
     */
    endInteraction_() {
      this.trackpadTimeoutId_ = void 0;
      const map = this.getMap();
      if (!map) {
        return;
      }
      const view = map.getView();
      const direction = this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0;
      view.endInteraction(
        this.constrainResolution_ || view.getConstrainResolution() ? 100 : void 0,
        direction,
        this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null
      );
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
     * zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      if (!this.condition_(mapBrowserEvent)) {
        return true;
      }
      const type = mapBrowserEvent.type;
      if (type !== EventType_default.WHEEL) {
        return true;
      }
      const map = mapBrowserEvent.map;
      const wheelEvent = (
        /** @type {WheelEvent} */
        mapBrowserEvent.originalEvent
      );
      wheelEvent.preventDefault();
      const isPinchToZoom = wheelEvent.ctrlKey && !this.ctrlKeyPressed_;
      if (!wheelEvent.ctrlKey) {
        this.ctrlKeyPressed_ = false;
      }
      if (this.useAnchor_) {
        this.lastAnchor_ = mapBrowserEvent.pixel;
      }
      let delta = wheelEvent.deltaY;
      switch (wheelEvent.deltaMode) {
        case WheelEvent.DOM_DELTA_LINE:
          delta *= DELTA_LINE_MULTIPLIER;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          delta *= DELTA_PAGE_MULTIPLIER;
          break;
        default:
      }
      if (delta === 0) {
        return false;
      }
      this.lastDelta_ = delta;
      const now = Date.now();
      if (this.startTime_ === void 0) {
        this.startTime_ = now;
      }
      if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
        this.mode_ = Math.abs(delta) < 4 ? "trackpad" : "wheel";
      }
      const view = map.getView();
      if (this.mode_ === "trackpad") {
        if (this.trackpadTimeoutId_) {
          clearTimeout(this.trackpadTimeoutId_);
        } else {
          if (view.getAnimating()) {
            view.cancelAnimations();
          }
          view.beginInteraction();
        }
        this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_
        );
        if (isPinchToZoom) {
          delta = delta * DELTA_TRACKPAD_PINCH_TO_ZOOM_MULTIPLIER;
        }
        view.adjustZoom(
          -delta / this.deltaPerZoom_,
          this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null
        );
        this.startTime_ = now;
        return false;
      }
      this.totalDelta_ += delta;
      const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
      clearTimeout(this.timeoutId_);
      this.timeoutId_ = setTimeout(
        this.handleWheelZoom_.bind(this, map),
        timeLeft
      );
      return false;
    }
    /**
     * @private
     * @param {import("../Map.js").default} map Map.
     */
    handleWheelZoom_(map) {
      const view = map.getView();
      if (view.getAnimating()) {
        view.cancelAnimations();
      }
      let delta = -clamp(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_
      ) / this.deltaPerZoom_;
      if (view.getConstrainResolution() || this.constrainResolution_) {
        delta = delta ? delta > 0 ? 1 : -1 : 0;
      }
      zoomByDelta(
        view,
        delta,
        this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_
      );
      this.mode_ = void 0;
      this.totalDelta_ = 0;
      this.lastAnchor_ = null;
      this.startTime_ = void 0;
      this.timeoutId_ = void 0;
    }
    /**
     * Enable or disable using the mouse's location as an anchor when zooming
     * @param {boolean} useAnchor true to zoom to the mouse's location, false
     * to zoom to the center of the map
     * @api
     */
    setMouseAnchor(useAnchor) {
      this.useAnchor_ = useAnchor;
      if (!useAnchor) {
        this.lastAnchor_ = null;
      }
    }
  };
  var MouseWheelZoom_default = MouseWheelZoom;

  // node_modules/ol/interaction/PinchRotate.js
  var PinchRotate = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const pointerOptions = (
        /** @type {import("./Pointer.js").Options} */
        options
      );
      if (!pointerOptions.stopDown) {
        pointerOptions.stopDown = FALSE;
      }
      super(pointerOptions);
      this.anchor_ = null;
      this.lastAngle_ = void 0;
      this.rotating_ = false;
      this.rotationDelta_ = 0;
      this.threshold_ = options.threshold !== void 0 ? options.threshold : 0.3;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      let rotationDelta = 0;
      const touch0 = this.targetPointers[0];
      const touch1 = this.targetPointers[1];
      const angle = Math.atan2(
        touch1.clientY - touch0.clientY,
        touch1.clientX - touch0.clientX
      );
      if (this.lastAngle_ !== void 0) {
        const delta = angle - this.lastAngle_;
        this.rotationDelta_ += delta;
        if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
          this.rotating_ = true;
        }
        rotationDelta = delta;
      }
      this.lastAngle_ = angle;
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (view.getConstraints().rotation === disable) {
        return;
      }
      this.anchor_ = map.getCoordinateFromPixelInternal(
        map.getEventPixel(centroid(this.targetPointers))
      );
      if (this.rotating_) {
        map.render();
        view.adjustRotationInternal(rotationDelta, this.anchor_);
      }
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (this.targetPointers.length < 2) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        view.endInteraction(this.duration_);
        return false;
      }
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length >= 2) {
        const map = mapBrowserEvent.map;
        this.anchor_ = null;
        this.lastAngle_ = void 0;
        this.rotating_ = false;
        this.rotationDelta_ = 0;
        if (!this.handlingDownUpSequence) {
          map.getView().beginInteraction();
        }
        return true;
      }
      return false;
    }
  };
  var PinchRotate_default = PinchRotate;

  // node_modules/ol/interaction/PinchZoom.js
  var PinchZoom = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const pointerOptions = (
        /** @type {import("./Pointer.js").Options} */
        options
      );
      if (!pointerOptions.stopDown) {
        pointerOptions.stopDown = FALSE;
      }
      super(pointerOptions);
      this.anchor_ = null;
      this.duration_ = options.duration !== void 0 ? options.duration : 400;
      this.lastDistance_ = void 0;
      this.lastScaleDelta_ = 1;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      let scaleDelta = 1;
      const touch0 = this.targetPointers[0];
      const touch1 = this.targetPointers[1];
      const dx = touch0.clientX - touch1.clientX;
      const dy = touch0.clientY - touch1.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (this.lastDistance_ !== void 0) {
        scaleDelta = this.lastDistance_ / distance;
      }
      this.lastDistance_ = distance;
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (scaleDelta != 1) {
        this.lastScaleDelta_ = scaleDelta;
      }
      this.anchor_ = map.getCoordinateFromPixelInternal(
        map.getEventPixel(centroid(this.targetPointers))
      );
      map.render();
      view.adjustResolutionInternal(scaleDelta, this.anchor_);
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (this.targetPointers.length < 2) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
        view.endInteraction(this.duration_, direction);
        return false;
      }
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length >= 2) {
        const map = mapBrowserEvent.map;
        this.anchor_ = null;
        this.lastDistance_ = void 0;
        this.lastScaleDelta_ = 1;
        if (!this.handlingDownUpSequence) {
          map.getView().beginInteraction();
        }
        return true;
      }
      return false;
    }
  };
  var PinchZoom_default = PinchZoom;

  // node_modules/ol/interaction/defaults.js
  function defaults2(options) {
    options = options ? options : {};
    const interactions = new Collection_default();
    const kinetic = new Kinetic_default(-5e-3, 0.05, 100);
    const altShiftDragRotate = options.altShiftDragRotate !== void 0 ? options.altShiftDragRotate : true;
    if (altShiftDragRotate) {
      interactions.push(new DragRotate_default());
    }
    const doubleClickZoom = options.doubleClickZoom !== void 0 ? options.doubleClickZoom : true;
    if (doubleClickZoom) {
      interactions.push(
        new DoubleClickZoom_default({
          delta: options.zoomDelta,
          duration: options.zoomDuration
        })
      );
    }
    const dragPan = options.dragPan !== void 0 ? options.dragPan : true;
    if (dragPan) {
      interactions.push(
        new DragPan_default({
          onFocusOnly: options.onFocusOnly,
          kinetic
        })
      );
    }
    const pinchRotate = options.pinchRotate !== void 0 ? options.pinchRotate : true;
    if (pinchRotate) {
      interactions.push(new PinchRotate_default());
    }
    const pinchZoom = options.pinchZoom !== void 0 ? options.pinchZoom : true;
    if (pinchZoom) {
      interactions.push(
        new PinchZoom_default({
          duration: options.zoomDuration
        })
      );
    }
    const keyboard = options.keyboard !== void 0 ? options.keyboard : true;
    if (keyboard) {
      interactions.push(new KeyboardPan_default());
      interactions.push(
        new KeyboardZoom_default({
          delta: options.zoomDelta,
          duration: options.zoomDuration
        })
      );
    }
    const mouseWheelZoom = options.mouseWheelZoom !== void 0 ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) {
      interactions.push(
        new MouseWheelZoom_default({
          onFocusOnly: options.onFocusOnly,
          duration: options.zoomDuration
        })
      );
    }
    const shiftDragZoom = options.shiftDragZoom !== void 0 ? options.shiftDragZoom : true;
    if (shiftDragZoom) {
      interactions.push(
        new DragZoom_default({
          duration: options.zoomDuration
        })
      );
    }
    return interactions;
  }

  // node_modules/ol/layer/Property.js
  var Property_default2 = {
    OPACITY: "opacity",
    VISIBLE: "visible",
    EXTENT: "extent",
    Z_INDEX: "zIndex",
    MAX_RESOLUTION: "maxResolution",
    MIN_RESOLUTION: "minResolution",
    MAX_ZOOM: "maxZoom",
    MIN_ZOOM: "minZoom",
    SOURCE: "source",
    MAP: "map"
  };

  // node_modules/ol/layer/Base.js
  var BaseLayer = class extends Object_default {
    /**
     * @param {Options<NoInfer<Properties>>} options Layer options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      this.background_ = options.background;
      const properties = Object.assign({}, options);
      if (typeof options.properties === "object") {
        delete properties.properties;
        Object.assign(properties, options.properties);
      }
      properties[Property_default2.OPACITY] = options.opacity !== void 0 ? options.opacity : 1;
      assert(
        typeof properties[Property_default2.OPACITY] === "number",
        "Layer opacity must be a number"
      );
      properties[Property_default2.VISIBLE] = options.visible !== void 0 ? options.visible : true;
      properties[Property_default2.Z_INDEX] = options.zIndex;
      properties[Property_default2.MAX_RESOLUTION] = options.maxResolution !== void 0 ? options.maxResolution : Infinity;
      properties[Property_default2.MIN_RESOLUTION] = options.minResolution !== void 0 ? options.minResolution : 0;
      properties[Property_default2.MIN_ZOOM] = options.minZoom !== void 0 ? options.minZoom : -Infinity;
      properties[Property_default2.MAX_ZOOM] = options.maxZoom !== void 0 ? options.maxZoom : Infinity;
      this.className_ = properties.className !== void 0 ? properties.className : "ol-layer";
      delete properties.className;
      this.setProperties(properties);
      this.state_ = null;
    }
    /**
     * Get the background for this layer.
     * @return {BackgroundColor|false} Layer background.
     */
    getBackground() {
      return this.background_;
    }
    /**
     * @return {string} CSS class name.
     */
    getClassName() {
      return this.className_;
    }
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean} [managed] Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */
    getLayerState(managed) {
      const state = this.state_ || /** @type {?} */
      {
        layer: this,
        managed: managed === void 0 ? true : managed
      };
      const zIndex = this.getZIndex();
      state.opacity = clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
      state.visible = this.getVisible();
      state.extent = this.getExtent();
      state.zIndex = zIndex === void 0 && !state.managed ? Infinity : zIndex;
      state.maxResolution = this.getMaxResolution();
      state.minResolution = Math.max(this.getMinResolution(), 0);
      state.minZoom = this.getMinZoom();
      state.maxZoom = this.getMaxZoom();
      this.state_ = state;
      return state;
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    getLayersArray(array) {
      return abstract();
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    getLayerStatesArray(states) {
      return abstract();
    }
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */
    getExtent() {
      return (
        /** @type {import("../extent.js").Extent|undefined} */
        this.get(Property_default2.EXTENT)
      );
    }
    /**
     * Return the maximum resolution of the layer. Returns Infinity if
     * the layer has no maximum resolution set.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */
    getMaxResolution() {
      return (
        /** @type {number} */
        this.get(Property_default2.MAX_RESOLUTION)
      );
    }
    /**
     * Return the minimum resolution of the layer. Returns 0 if
     * the layer has no minimum resolution set.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */
    getMinResolution() {
      return (
        /** @type {number} */
        this.get(Property_default2.MIN_RESOLUTION)
      );
    }
    /**
     * Return the minimum zoom level of the layer. Returns -Infinity if
     * the layer has no minimum zoom set.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.get(Property_default2.MIN_ZOOM)
      );
    }
    /**
     * Return the maximum zoom level of the layer. Returns Infinity if
     * the layer has no maximum zoom set.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.get(Property_default2.MAX_ZOOM)
      );
    }
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */
    getOpacity() {
      return (
        /** @type {number} */
        this.get(Property_default2.OPACITY)
      );
    }
    /**
     * @abstract
     * @return {import("../source/Source.js").State} Source state.
     */
    getSourceState() {
      return abstract();
    }
    /**
     * Return the value of this layer's `visible` property. To find out whether the layer
     * is visible on a map, use `isVisible()` instead.
     * @return {boolean} The value of the `visible` property of the layer.
     * @observable
     * @api
     */
    getVisible() {
      return (
        /** @type {boolean} */
        this.get(Property_default2.VISIBLE)
      );
    }
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. Returns undefined if the layer is unmanaged.
     * @return {number|undefined} The Z-index of the layer.
     * @observable
     * @api
     */
    getZIndex() {
      return (
        /** @type {number|undefined} */
        this.get(Property_default2.Z_INDEX)
      );
    }
    /**
     * Sets the background color.
     * @param {BackgroundColor} [background] Background color.
     */
    setBackground(background) {
      this.background_ = background;
      this.changed();
    }
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */
    setExtent(extent) {
      this.set(Property_default2.EXTENT, extent);
    }
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */
    setMaxResolution(maxResolution) {
      this.set(Property_default2.MAX_RESOLUTION, maxResolution);
    }
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */
    setMinResolution(minResolution) {
      this.set(Property_default2.MIN_RESOLUTION, minResolution);
    }
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */
    setMaxZoom(maxZoom) {
      this.set(Property_default2.MAX_ZOOM, maxZoom);
    }
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */
    setMinZoom(minZoom) {
      this.set(Property_default2.MIN_ZOOM, minZoom);
    }
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */
    setOpacity(opacity) {
      assert(typeof opacity === "number", "Layer opacity must be a number");
      this.set(Property_default2.OPACITY, opacity);
    }
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */
    setVisible(visible) {
      this.set(Property_default2.VISIBLE, visible);
    }
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */
    setZIndex(zindex) {
      this.set(Property_default2.Z_INDEX, zindex);
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.state_) {
        this.state_.layer = null;
        this.state_ = null;
      }
      super.disposeInternal();
    }
  };
  var Base_default = BaseLayer;

  // node_modules/ol/layer/Group.js
  var GroupEventType = {
    /**
     * Triggered when a layer is added
     * @event GroupEvent#addlayer
     * @api
     */
    ADDLAYER: "addlayer",
    /**
     * Triggered when a layer is removed
     * @event GroupEvent#removelayer
     * @api
     */
    REMOVELAYER: "removelayer"
  };
  var GroupEvent = class extends Event_default {
    /**
     * @param {GroupEventType} type The event type.
     * @param {BaseLayer} layer The layer.
     */
    constructor(type, layer) {
      super(type);
      this.layer = layer;
    }
  };
  var Property2 = {
    LAYERS: "layers"
  };
  var LayerGroup = class _LayerGroup extends Base_default {
    /**
     * @param {Options} [options] Layer options.
     */
    constructor(options) {
      options = options || {};
      const baseOptions = (
        /** @type {Options} */
        Object.assign({}, options)
      );
      delete baseOptions.layers;
      let layers = options.layers;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.layersListenerKeys_ = [];
      this.listenerKeys_ = {};
      this.addChangeListener(Property2.LAYERS, this.handleLayersChanged_);
      if (layers) {
        if (Array.isArray(layers)) {
          layers = new Collection_default(layers.slice(), { unique: true });
        } else {
          assert(
            typeof /** @type {?} */
            layers.getArray === "function",
            "Expected `layers` to be an array or a `Collection`"
          );
        }
      } else {
        layers = new Collection_default(void 0, { unique: true });
      }
      this.setLayers(layers);
    }
    /**
     * @private
     */
    handleLayerChange_() {
      this.changed();
    }
    /**
     * @private
     */
    handleLayersChanged_() {
      this.layersListenerKeys_.forEach(unlistenByKey);
      this.layersListenerKeys_.length = 0;
      const layers = this.getLayers();
      this.layersListenerKeys_.push(
        listen(layers, CollectionEventType_default.ADD, this.handleLayersAdd_, this),
        listen(
          layers,
          CollectionEventType_default.REMOVE,
          this.handleLayersRemove_,
          this
        )
      );
      for (const id in this.listenerKeys_) {
        this.listenerKeys_[id].forEach(unlistenByKey);
      }
      clear(this.listenerKeys_);
      const layersArray = layers.getArray();
      for (let i = 0, ii = layersArray.length; i < ii; i++) {
        const layer = layersArray[i];
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, layer));
      }
      this.changed();
    }
    /**
     * @param {BaseLayer} layer The layer.
     */
    registerLayerListeners_(layer) {
      const listenerKeys = [
        listen(
          layer,
          ObjectEventType_default.PROPERTYCHANGE,
          this.handleLayerChange_,
          this
        ),
        listen(layer, EventType_default.CHANGE, this.handleLayerChange_, this)
      ];
      if (layer instanceof _LayerGroup) {
        listenerKeys.push(
          listen(layer, GroupEventType.ADDLAYER, this.handleLayerGroupAdd_, this),
          listen(
            layer,
            GroupEventType.REMOVELAYER,
            this.handleLayerGroupRemove_,
            this
          )
        );
      }
      this.listenerKeys_[getUid(layer)] = listenerKeys;
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupAdd_(event) {
      this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, event.layer));
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupRemove_(event) {
      this.dispatchEvent(new GroupEvent(GroupEventType.REMOVELAYER, event.layer));
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersAdd_(collectionEvent) {
      const layer = collectionEvent.element;
      this.registerLayerListeners_(layer);
      this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, layer));
      this.changed();
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersRemove_(collectionEvent) {
      const layer = collectionEvent.element;
      const key = getUid(layer);
      this.listenerKeys_[key].forEach(unlistenByKey);
      delete this.listenerKeys_[key];
      this.dispatchEvent(new GroupEvent(GroupEventType.REMOVELAYER, layer));
      this.changed();
    }
    /**
     * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @return {!Collection<import("./Base.js").default>} Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    getLayers() {
      return (
        /** @type {!Collection<import("./Base.js").default>} */
        this.get(Property2.LAYERS)
      );
    }
    /**
     * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @param {!Collection<import("./Base.js").default>} layers Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    setLayers(layers) {
      const collection = this.getLayers();
      if (collection) {
        const currentLayers = collection.getArray();
        for (let i = 0, ii = currentLayers.length; i < ii; ++i) {
          this.dispatchEvent(
            new GroupEvent(GroupEventType.REMOVELAYER, currentLayers[i])
          );
        }
      }
      this.set(Property2.LAYERS, layers);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(array) {
      array = array !== void 0 ? array : [];
      this.getLayers().forEach(function(layer) {
        layer.getLayersArray(array);
      });
      return array;
    }
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If dest is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     * @param {Array<import("./Layer.js").State>} [dest] Optional list
     * of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(dest) {
      const states = dest !== void 0 ? dest : [];
      const pos = states.length;
      this.getLayers().forEach(function(layer) {
        layer.getLayerStatesArray(states);
      });
      const ownLayerState = this.getLayerState();
      let defaultZIndex = ownLayerState.zIndex;
      if (!dest && ownLayerState.zIndex === void 0) {
        defaultZIndex = 0;
      }
      for (let i = pos, ii = states.length; i < ii; i++) {
        const layerState = states[i];
        layerState.opacity *= ownLayerState.opacity;
        layerState.visible = layerState.visible && ownLayerState.visible;
        layerState.maxResolution = Math.min(
          layerState.maxResolution,
          ownLayerState.maxResolution
        );
        layerState.minResolution = Math.max(
          layerState.minResolution,
          ownLayerState.minResolution
        );
        layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
        layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
        if (ownLayerState.extent !== void 0) {
          if (layerState.extent !== void 0) {
            layerState.extent = getIntersection(
              layerState.extent,
              ownLayerState.extent
            );
          } else {
            layerState.extent = ownLayerState.extent;
          }
        }
        if (layerState.zIndex === void 0) {
          layerState.zIndex = defaultZIndex;
        }
      }
      return states;
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      return "ready";
    }
  };
  var Group_default = LayerGroup;

  // node_modules/ol/render/EventType.js
  var EventType_default3 = {
    /**
     * Triggered before a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#prerender
     * @api
     */
    PRERENDER: "prerender",
    /**
     * Triggered after a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered before layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#precompose
     * @api
     */
    PRECOMPOSE: "precompose",
    /**
     * Triggered after layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#postcompose
     * @api
     */
    POSTCOMPOSE: "postcompose",
    /**
     * Triggered when rendering is complete, i.e. all sources and tiles have
     * finished loading for the current viewport, and all tiles are faded in.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#rendercomplete
     * @api
     */
    RENDERCOMPLETE: "rendercomplete"
  };

  // node_modules/ol/layer/Layer.js
  var Layer = class extends Base_default {
    /**
     * @param {Options<SourceType, NoInfer<Properties>>} options Layer options.
     */
    constructor(options) {
      const baseOptions = Object.assign({}, options);
      delete baseOptions.source;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.mapPrecomposeKey_ = null;
      this.mapRenderKey_ = null;
      this.sourceChangeKey_ = null;
      this.renderer_ = null;
      this.sourceReady_ = false;
      this.rendered = false;
      if (options.render) {
        this.render = options.render;
      }
      if (options.map) {
        this.setMap(options.map);
      }
      this.addChangeListener(
        Property_default2.SOURCE,
        this.handleSourcePropertyChange_
      );
      const source = options.source ? (
        /** @type {SourceType} */
        options.source
      ) : null;
      this.setSource(source);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(array) {
      array = array ? array : [];
      array.push(this);
      return array;
    }
    /**
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(states) {
      states = states ? states : [];
      states.push(this.getLayerState());
      return states;
    }
    /**
     * Get the layer source.
     * @return {SourceType|null} The layer source (or `null` if not yet set).
     * @observable
     * @api
     */
    getSource() {
      return (
        /** @type {SourceType} */
        this.get(Property_default2.SOURCE) || null
      );
    }
    /**
     * @return {SourceType|null} The source being rendered.
     */
    getRenderSource() {
      return this.getSource();
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      const source = this.getSource();
      return !source ? "undefined" : source.getState();
    }
    /**
     * @private
     */
    handleSourceChange_() {
      this.changed();
      if (this.sourceReady_ || this.getSource().getState() !== "ready") {
        return;
      }
      this.sourceReady_ = true;
      this.dispatchEvent("sourceready");
    }
    /**
     * @private
     */
    handleSourcePropertyChange_() {
      if (this.sourceChangeKey_) {
        unlistenByKey(this.sourceChangeKey_);
        this.sourceChangeKey_ = null;
      }
      this.sourceReady_ = false;
      const source = this.getSource();
      if (source) {
        this.sourceChangeKey_ = listen(
          source,
          EventType_default.CHANGE,
          this.handleSourceChange_,
          this
        );
        if (source.getState() === "ready") {
          this.sourceReady_ = true;
          setTimeout(() => {
            this.dispatchEvent("sourceready");
          }, 0);
        }
      }
      this.changed();
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(pixel) {
      if (!this.renderer_) {
        return Promise.resolve([]);
      }
      return this.renderer_.getFeatures(pixel);
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(pixel) {
      if (!this.renderer_ || !this.rendered) {
        return null;
      }
      return this.renderer_.getData(pixel);
    }
    /**
     * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
     * extent, not set to `visible: false`, and not inside a layer group that is set
     * to `visible: false`.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {boolean} The layer is visible in the map view.
     * @api
     */
    isVisible(view) {
      let frameState;
      const map = this.getMapInternal();
      if (!view && map) {
        view = map.getView();
      }
      if (view instanceof View_default) {
        frameState = {
          viewState: view.getState(),
          extent: view.calculateExtent()
        };
      } else {
        frameState = view;
      }
      if (!frameState.layerStatesArray && map) {
        frameState.layerStatesArray = map.getLayerGroup().getLayerStatesArray();
      }
      let layerState;
      if (frameState.layerStatesArray) {
        layerState = frameState.layerStatesArray.find(
          (layerState2) => layerState2.layer === this
        );
        if (!layerState) {
          return false;
        }
      } else {
        layerState = this.getLayerState();
      }
      const layerExtent = this.getExtent();
      return inView(layerState, frameState.viewState) && (!layerExtent || intersects(layerExtent, frameState.extent));
    }
    /**
     * Get the attributions of the source of this layer for the given view.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {Array<string>} Attributions for this layer at the given view.
     * @api
     */
    getAttributions(view) {
      if (!this.isVisible(view)) {
        return [];
      }
      const getAttributions = this.getSource()?.getAttributions();
      if (!getAttributions) {
        return [];
      }
      const frameState = view instanceof View_default ? view.getViewStateAndExtent() : view;
      let attributions = getAttributions(frameState);
      if (!Array.isArray(attributions)) {
        attributions = [attributions];
      }
      return attributions;
    }
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target which the renderer may (but need not) use
     * for rendering its content.
     * @return {HTMLElement|null} The rendered element.
     */
    render(frameState, target) {
      const layerRenderer = this.getRenderer();
      if (layerRenderer.prepareFrame(frameState)) {
        this.rendered = true;
        return layerRenderer.renderFrame(frameState, target);
      }
      return null;
    }
    /**
     * Called when a layer is not visible during a map render.
     */
    unrender() {
      this.rendered = false;
    }
    /** @return {string} Declutter */
    getDeclutter() {
      return void 0;
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     */
    renderDeclutter(frameState, layerState) {
    }
    /**
     * When the renderer follows a layout -> render approach, do the final rendering here.
     * @param {import('../Map.js').FrameState} frameState Frame state
     */
    renderDeferred(frameState) {
      const layerRenderer = this.getRenderer();
      if (!layerRenderer) {
        return;
      }
      layerRenderer.renderDeferred(frameState);
    }
    /**
     * For use inside the library only.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMapInternal(map) {
      if (!map) {
        this.unrender();
      }
      this.set(Property_default2.MAP, map);
    }
    /**
     * For use inside the library only.
     * @return {import("../Map.js").default|null} Map.
     */
    getMapInternal() {
      return this.get(Property_default2.MAP);
    }
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use `#setMap(null)`.
     *
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map~Map#addLayer} instead.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(map) {
      if (this.mapPrecomposeKey_) {
        unlistenByKey(this.mapPrecomposeKey_);
        this.mapPrecomposeKey_ = null;
      }
      if (!map) {
        this.changed();
      }
      if (this.mapRenderKey_) {
        unlistenByKey(this.mapRenderKey_);
        this.mapRenderKey_ = null;
      }
      if (map) {
        this.mapPrecomposeKey_ = listen(
          map,
          EventType_default3.PRECOMPOSE,
          this.handlePrecompose_,
          this
        );
        this.mapRenderKey_ = listen(this, EventType_default.CHANGE, map.render, map);
        this.changed();
      }
    }
    /**
     * @param {import("../events/Event.js").default} renderEvent Render event
     * @private
     */
    handlePrecompose_(renderEvent) {
      const layerStatesArray = (
        /** @type {import("../render/Event.js").default} */
        renderEvent.frameState.layerStatesArray
      );
      const layerState = this.getLayerState(false);
      assert(
        !layerStatesArray.some(
          (arrayLayerState) => arrayLayerState.layer === layerState.layer
        ),
        "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
      );
      layerStatesArray.push(layerState);
    }
    /**
     * Set the layer source.
     * @param {SourceType|null} source The layer source.
     * @observable
     * @api
     */
    setSource(source) {
      this.set(Property_default2.SOURCE, source);
    }
    /**
     * Get the renderer for this layer.
     * @return {RendererType|null} The layer renderer.
     */
    getRenderer() {
      if (!this.renderer_) {
        this.renderer_ = this.createRenderer();
      }
      return this.renderer_;
    }
    /**
     * @return {boolean} The layer has a renderer.
     */
    hasRenderer() {
      return !!this.renderer_;
    }
    /**
     * Create a renderer for this layer.
     * @return {RendererType} A layer renderer.
     * @protected
     */
    createRenderer() {
      return null;
    }
    /**
     * This will clear the renderer so that a new one can be created next time it is needed
     */
    clearRenderer() {
      if (this.renderer_) {
        this.renderer_.dispose();
        delete this.renderer_;
      }
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.clearRenderer();
      this.setSource(null);
      super.disposeInternal();
    }
  };
  function inView(layerState, viewState) {
    if (!layerState.visible) {
      return false;
    }
    const resolution = viewState.resolution;
    if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) {
      return false;
    }
    const zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
  }
  var Layer_default = Layer;

  // node_modules/quickselect/index.js
  function quickselect(arr, k, left = 0, right = arr.length - 1, compare = defaultCompare) {
    while (right > left) {
      if (right - left > 600) {
        const n = right - left + 1;
        const m = k - left + 1;
        const z = Math.log(n);
        const s = 0.5 * Math.exp(2 * z / 3);
        const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
        const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
        quickselect(arr, k, newLeft, newRight, compare);
      }
      const t = arr[k];
      let i = left;
      let j = right;
      swap(arr, left, k);
      if (compare(arr[right], t) > 0) swap(arr, left, right);
      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
        while (compare(arr[i], t) < 0) i++;
        while (compare(arr[j], t) > 0) j--;
      }
      if (compare(arr[left], t) === 0) swap(arr, left, j);
      else {
        j++;
        swap(arr, j, right);
      }
      if (j <= k) left = j + 1;
      if (k <= j) right = j - 1;
    }
  }
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  // node_modules/rbush/index.js
  var RBush = class {
    constructor(maxEntries = 9) {
      this._maxEntries = Math.max(4, maxEntries);
      this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
      this.clear();
    }
    all() {
      return this._all(this.data, []);
    }
    search(bbox) {
      let node = this.data;
      const result = [];
      if (!intersects2(bbox, node)) return result;
      const toBBox = this.toBBox;
      const nodesToSearch = [];
      while (node) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const childBBox = node.leaf ? toBBox(child) : child;
          if (intersects2(bbox, childBBox)) {
            if (node.leaf) result.push(child);
            else if (contains(bbox, childBBox)) this._all(child, result);
            else nodesToSearch.push(child);
          }
        }
        node = nodesToSearch.pop();
      }
      return result;
    }
    collides(bbox) {
      let node = this.data;
      if (!intersects2(bbox, node)) return false;
      const nodesToSearch = [];
      while (node) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const childBBox = node.leaf ? this.toBBox(child) : child;
          if (intersects2(bbox, childBBox)) {
            if (node.leaf || contains(bbox, childBBox)) return true;
            nodesToSearch.push(child);
          }
        }
        node = nodesToSearch.pop();
      }
      return false;
    }
    load(data) {
      if (!(data && data.length)) return this;
      if (data.length < this._minEntries) {
        for (let i = 0; i < data.length; i++) {
          this.insert(data[i]);
        }
        return this;
      }
      let node = this._build(data.slice(), 0, data.length - 1, 0);
      if (!this.data.children.length) {
        this.data = node;
      } else if (this.data.height === node.height) {
        this._splitRoot(this.data, node);
      } else {
        if (this.data.height < node.height) {
          const tmpNode = this.data;
          this.data = node;
          node = tmpNode;
        }
        this._insert(node, this.data.height - node.height - 1, true);
      }
      return this;
    }
    insert(item) {
      if (item) this._insert(item, this.data.height - 1);
      return this;
    }
    clear() {
      this.data = createNode([]);
      return this;
    }
    remove(item, equalsFn) {
      if (!item) return this;
      let node = this.data;
      const bbox = this.toBBox(item);
      const path = [];
      const indexes = [];
      let i, parent, goingUp;
      while (node || path.length) {
        if (!node) {
          node = path.pop();
          parent = path[path.length - 1];
          i = indexes.pop();
          goingUp = true;
        }
        if (node.leaf) {
          const index = findItem(item, node.children, equalsFn);
          if (index !== -1) {
            node.children.splice(index, 1);
            path.push(node);
            this._condense(path);
            return this;
          }
        }
        if (!goingUp && !node.leaf && contains(node, bbox)) {
          path.push(node);
          indexes.push(i);
          i = 0;
          parent = node;
          node = node.children[0];
        } else if (parent) {
          i++;
          node = parent.children[i];
          goingUp = false;
        } else node = null;
      }
      return this;
    }
    toBBox(item) {
      return item;
    }
    compareMinX(a, b) {
      return a.minX - b.minX;
    }
    compareMinY(a, b) {
      return a.minY - b.minY;
    }
    toJSON() {
      return this.data;
    }
    fromJSON(data) {
      this.data = data;
      return this;
    }
    _all(node, result) {
      const nodesToSearch = [];
      while (node) {
        if (node.leaf) result.push(...node.children);
        else nodesToSearch.push(...node.children);
        node = nodesToSearch.pop();
      }
      return result;
    }
    _build(items, left, right, height) {
      const N = right - left + 1;
      let M = this._maxEntries;
      let node;
      if (N <= M) {
        node = createNode(items.slice(left, right + 1));
        calcBBox(node, this.toBBox);
        return node;
      }
      if (!height) {
        height = Math.ceil(Math.log(N) / Math.log(M));
        M = Math.ceil(N / Math.pow(M, height - 1));
      }
      node = createNode([]);
      node.leaf = false;
      node.height = height;
      const N2 = Math.ceil(N / M);
      const N1 = N2 * Math.ceil(Math.sqrt(M));
      multiSelect(items, left, right, N1, this.compareMinX);
      for (let i = left; i <= right; i += N1) {
        const right2 = Math.min(i + N1 - 1, right);
        multiSelect(items, i, right2, N2, this.compareMinY);
        for (let j = i; j <= right2; j += N2) {
          const right3 = Math.min(j + N2 - 1, right2);
          node.children.push(this._build(items, j, right3, height - 1));
        }
      }
      calcBBox(node, this.toBBox);
      return node;
    }
    _chooseSubtree(bbox, node, level2, path) {
      while (true) {
        path.push(node);
        if (node.leaf || path.length - 1 === level2) break;
        let minArea = Infinity;
        let minEnlargement = Infinity;
        let targetNode;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const area = bboxArea(child);
          const enlargement = enlargedArea(bbox, child) - area;
          if (enlargement < minEnlargement) {
            minEnlargement = enlargement;
            minArea = area < minArea ? area : minArea;
            targetNode = child;
          } else if (enlargement === minEnlargement) {
            if (area < minArea) {
              minArea = area;
              targetNode = child;
            }
          }
        }
        node = targetNode || node.children[0];
      }
      return node;
    }
    _insert(item, level2, isNode) {
      const bbox = isNode ? item : this.toBBox(item);
      const insertPath = [];
      const node = this._chooseSubtree(bbox, this.data, level2, insertPath);
      node.children.push(item);
      extend3(node, bbox);
      while (level2 >= 0) {
        if (insertPath[level2].children.length > this._maxEntries) {
          this._split(insertPath, level2);
          level2--;
        } else break;
      }
      this._adjustParentBBoxes(bbox, insertPath, level2);
    }
    // split overflowed node into two
    _split(insertPath, level2) {
      const node = insertPath[level2];
      const M = node.children.length;
      const m = this._minEntries;
      this._chooseSplitAxis(node, m, M);
      const splitIndex = this._chooseSplitIndex(node, m, M);
      const newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
      newNode.height = node.height;
      newNode.leaf = node.leaf;
      calcBBox(node, this.toBBox);
      calcBBox(newNode, this.toBBox);
      if (level2) insertPath[level2 - 1].children.push(newNode);
      else this._splitRoot(node, newNode);
    }
    _splitRoot(node, newNode) {
      this.data = createNode([node, newNode]);
      this.data.height = node.height + 1;
      this.data.leaf = false;
      calcBBox(this.data, this.toBBox);
    }
    _chooseSplitIndex(node, m, M) {
      let index;
      let minOverlap = Infinity;
      let minArea = Infinity;
      for (let i = m; i <= M - m; i++) {
        const bbox1 = distBBox(node, 0, i, this.toBBox);
        const bbox2 = distBBox(node, i, M, this.toBBox);
        const overlap = intersectionArea(bbox1, bbox2);
        const area = bboxArea(bbox1) + bboxArea(bbox2);
        if (overlap < minOverlap) {
          minOverlap = overlap;
          index = i;
          minArea = area < minArea ? area : minArea;
        } else if (overlap === minOverlap) {
          if (area < minArea) {
            minArea = area;
            index = i;
          }
        }
      }
      return index || M - m;
    }
    // sorts node children by the best axis for split
    _chooseSplitAxis(node, m, M) {
      const compareMinX = node.leaf ? this.compareMinX : compareNodeMinX;
      const compareMinY = node.leaf ? this.compareMinY : compareNodeMinY;
      const xMargin = this._allDistMargin(node, m, M, compareMinX);
      const yMargin = this._allDistMargin(node, m, M, compareMinY);
      if (xMargin < yMargin) node.children.sort(compareMinX);
    }
    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin(node, m, M, compare) {
      node.children.sort(compare);
      const toBBox = this.toBBox;
      const leftBBox = distBBox(node, 0, m, toBBox);
      const rightBBox = distBBox(node, M - m, M, toBBox);
      let margin = bboxMargin(leftBBox) + bboxMargin(rightBBox);
      for (let i = m; i < M - m; i++) {
        const child = node.children[i];
        extend3(leftBBox, node.leaf ? toBBox(child) : child);
        margin += bboxMargin(leftBBox);
      }
      for (let i = M - m - 1; i >= m; i--) {
        const child = node.children[i];
        extend3(rightBBox, node.leaf ? toBBox(child) : child);
        margin += bboxMargin(rightBBox);
      }
      return margin;
    }
    _adjustParentBBoxes(bbox, path, level2) {
      for (let i = level2; i >= 0; i--) {
        extend3(path[i], bbox);
      }
    }
    _condense(path) {
      for (let i = path.length - 1, siblings; i >= 0; i--) {
        if (path[i].children.length === 0) {
          if (i > 0) {
            siblings = path[i - 1].children;
            siblings.splice(siblings.indexOf(path[i]), 1);
          } else this.clear();
        } else calcBBox(path[i], this.toBBox);
      }
    }
  };
  function findItem(item, items, equalsFn) {
    if (!equalsFn) return items.indexOf(item);
    for (let i = 0; i < items.length; i++) {
      if (equalsFn(item, items[i])) return i;
    }
    return -1;
  }
  function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
  }
  function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) destNode = createNode(null);
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;
    for (let i = k; i < p; i++) {
      const child = node.children[i];
      extend3(destNode, node.leaf ? toBBox(child) : child);
    }
    return destNode;
  }
  function extend3(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
  }
  function compareNodeMinX(a, b) {
    return a.minX - b.minX;
  }
  function compareNodeMinY(a, b) {
    return a.minY - b.minY;
  }
  function bboxArea(a) {
    return (a.maxX - a.minX) * (a.maxY - a.minY);
  }
  function bboxMargin(a) {
    return a.maxX - a.minX + (a.maxY - a.minY);
  }
  function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) * (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
  }
  function intersectionArea(a, b) {
    const minX = Math.max(a.minX, b.minX);
    const minY = Math.max(a.minY, b.minY);
    const maxX = Math.min(a.maxX, b.maxX);
    const maxY = Math.min(a.maxY, b.maxY);
    return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
  }
  function contains(a, b) {
    return a.minX <= b.minX && a.minY <= b.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
  }
  function intersects2(a, b) {
    return b.minX <= a.maxX && b.minY <= a.maxY && b.maxX >= a.minX && b.maxY >= a.minY;
  }
  function createNode(children) {
    return {
      children,
      height: 1,
      leaf: true,
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity
    };
  }
  function multiSelect(arr, left, right, n, compare) {
    const stack = [left, right];
    while (stack.length) {
      right = stack.pop();
      left = stack.pop();
      if (right - left <= n) continue;
      const mid = left + Math.ceil((right - left) / n / 2) * n;
      quickselect(arr, mid, left, right, compare);
      stack.push(left, mid, mid, right);
    }
  }

  // node_modules/ol/color.js
  var NO_COLOR = [NaN, NaN, NaN, 0];
  var colorParseContext;
  function getColorParseContext() {
    if (!colorParseContext) {
      colorParseContext = createCanvasContext2D(1, 1, void 0, {
        willReadFrequently: true,
        desynchronized: true
      });
    }
    return colorParseContext;
  }
  var rgbModernRegEx = /^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var rgbLegacyAbsoluteRegEx = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var rgbLegacyPercentageRegEx = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var hexRegEx = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
  function toColorComponent(s, divider) {
    return s.endsWith("%") ? Number(s.substring(0, s.length - 1)) / divider : Number(s);
  }
  function throwInvalidColor(color) {
    throw new Error('failed to parse "' + color + '" as color');
  }
  function parseRgba(color) {
    if (color.toLowerCase().startsWith("rgb")) {
      const rgb = color.match(rgbLegacyAbsoluteRegEx) || color.match(rgbModernRegEx) || color.match(rgbLegacyPercentageRegEx);
      if (rgb) {
        const alpha = rgb[4];
        const rgbDivider = 100 / 255;
        return [
          clamp(toColorComponent(rgb[1], rgbDivider) + 0.5 | 0, 0, 255),
          clamp(toColorComponent(rgb[2], rgbDivider) + 0.5 | 0, 0, 255),
          clamp(toColorComponent(rgb[3], rgbDivider) + 0.5 | 0, 0, 255),
          alpha !== void 0 ? clamp(toColorComponent(alpha, 100), 0, 1) : 1
        ];
      }
      throwInvalidColor(color);
    }
    if (color.startsWith("#")) {
      if (hexRegEx.test(color)) {
        const hex = color.substring(1);
        const step = hex.length <= 4 ? 1 : 2;
        const colorFromHex = [0, 0, 0, 255];
        for (let i = 0, ii = hex.length; i < ii; i += step) {
          let colorComponent = parseInt(hex.substring(i, i + step), 16);
          if (step === 1) {
            colorComponent += colorComponent << 4;
          }
          colorFromHex[i / step] = colorComponent;
        }
        colorFromHex[3] = colorFromHex[3] / 255;
        return colorFromHex;
      }
      throwInvalidColor(color);
    }
    const context = getColorParseContext();
    context.fillStyle = "#abcdef";
    let invalidCheckFillStyle = context.fillStyle;
    context.fillStyle = color;
    if (context.fillStyle === invalidCheckFillStyle) {
      context.fillStyle = "#fedcba";
      invalidCheckFillStyle = context.fillStyle;
      context.fillStyle = color;
      if (context.fillStyle === invalidCheckFillStyle) {
        throwInvalidColor(color);
      }
    }
    const colorString = context.fillStyle;
    if (colorString.startsWith("#") || colorString.startsWith("rgba")) {
      return parseRgba(colorString);
    }
    context.clearRect(0, 0, 1, 1);
    context.fillRect(0, 0, 1, 1);
    const colorFromImage = Array.from(context.getImageData(0, 0, 1, 1).data);
    colorFromImage[3] = toFixed(colorFromImage[3] / 255, 3);
    return colorFromImage;
  }
  function asString(color) {
    if (typeof color === "string") {
      return color;
    }
    return toString2(color);
  }
  var MAX_CACHE_SIZE = 1024;
  var cache2 = {};
  var cacheSize = 0;
  function withAlpha(color) {
    if (color.length === 4) {
      return color;
    }
    const output = color.slice();
    output[3] = 1;
    return output;
  }
  function b1(v) {
    return v > 31308e-7 ? Math.pow(v, 1 / 2.4) * 269.025 - 14.025 : v * 3294.6;
  }
  function b2(v) {
    return v > 0.2068965 ? Math.pow(v, 3) : (v - 4 / 29) * (108 / 841);
  }
  function a1(v) {
    return v > 10.314724 ? Math.pow((v + 14.025) / 269.025, 2.4) : v / 3294.6;
  }
  function a2(v) {
    return v > 88564e-7 ? Math.pow(v, 1 / 3) : v / (108 / 841) + 4 / 29;
  }
  function rgbaToLcha(color) {
    const r = a1(color[0]);
    const g = a1(color[1]);
    const b = a1(color[2]);
    const y = a2(r * 0.222488403 + g * 0.716873169 + b * 0.06060791);
    const l = 500 * (a2(r * 0.452247074 + g * 0.399439023 + b * 0.148375274) - y);
    const q = 200 * (y - a2(r * 0.016863605 + g * 0.117638439 + b * 0.865350722));
    const h = Math.atan2(q, l) * (180 / Math.PI);
    return [
      116 * y - 16,
      Math.sqrt(l * l + q * q),
      h < 0 ? h + 360 : h,
      color[3]
    ];
  }
  function lchaToRgba(color) {
    const l = (color[0] + 16) / 116;
    const c = color[1];
    const h = color[2] * Math.PI / 180;
    const y = b2(l);
    const x = b2(l + c / 500 * Math.cos(h));
    const z = b2(l - c / 200 * Math.sin(h));
    const r = b1(x * 3.021973625 - y * 1.617392459 - z * 0.404875592);
    const g = b1(x * -0.943766287 + y * 1.916279586 + z * 0.027607165);
    const b = b1(x * 0.069407491 - y * 0.22898585 + z * 1.159737864);
    return [
      clamp(r + 0.5 | 0, 0, 255),
      clamp(g + 0.5 | 0, 0, 255),
      clamp(b + 0.5 | 0, 0, 255),
      color[3]
    ];
  }
  function fromString2(s) {
    if (s === "none") {
      return NO_COLOR;
    }
    if (cache2.hasOwnProperty(s)) {
      return cache2[s];
    }
    if (cacheSize >= MAX_CACHE_SIZE) {
      let i = 0;
      for (const key in cache2) {
        if ((i++ & 3) === 0) {
          delete cache2[key];
          --cacheSize;
        }
      }
    }
    const color = parseRgba(s);
    if (color.length !== 4) {
      throwInvalidColor(s);
    }
    for (const c of color) {
      if (isNaN(c)) {
        throwInvalidColor(s);
      }
    }
    cache2[s] = color;
    ++cacheSize;
    return color;
  }
  function asArray(color) {
    if (Array.isArray(color)) {
      return color;
    }
    return fromString2(color);
  }
  function toString2(color) {
    let r = color[0];
    if (r != (r | 0)) {
      r = r + 0.5 | 0;
    }
    let g = color[1];
    if (g != (g | 0)) {
      g = g + 0.5 | 0;
    }
    let b = color[2];
    if (b != (b | 0)) {
      b = b + 0.5 | 0;
    }
    const a = color[3] === void 0 ? 1 : Math.round(color[3] * 1e3) / 1e3;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  // node_modules/ol/expr/expression.js
  var numTypes = 0;
  var BooleanType = 1 << numTypes++;
  var NumberType = 1 << numTypes++;
  var StringType = 1 << numTypes++;
  var ColorType = 1 << numTypes++;
  var NumberArrayType = 1 << numTypes++;
  var SizeType = 1 << numTypes++;
  var AnyType = Math.pow(2, numTypes) - 1;
  var typeNames = {
    [BooleanType]: "boolean",
    [NumberType]: "number",
    [StringType]: "string",
    [ColorType]: "color",
    [NumberArrayType]: "number[]",
    [SizeType]: "size"
  };
  var namedTypes = Object.keys(typeNames).map(Number).sort(ascending);
  function isSpecific(type) {
    return type in typeNames;
  }
  function typeName(type) {
    const names = [];
    for (const namedType of namedTypes) {
      if (includesType(type, namedType)) {
        names.push(typeNames[namedType]);
      }
    }
    if (names.length === 0) {
      return "untyped";
    }
    if (names.length < 3) {
      return names.join(" or ");
    }
    return names.slice(0, -1).join(", ") + ", or " + names[names.length - 1];
  }
  function includesType(broad, specific) {
    return (broad & specific) === specific;
  }
  function isType(type, expected) {
    return type === expected;
  }
  var LiteralExpression = class {
    /**
     * @param {number} type The value type.
     * @param {LiteralValue} value The literal value.
     */
    constructor(type, value) {
      if (!isSpecific(type)) {
        throw new Error(
          `literal expressions must have a specific type, got ${typeName(type)}`
        );
      }
      this.type = type;
      this.value = value;
    }
  };
  var CallExpression = class {
    /**
     * @param {number} type The return type.
     * @param {string} operator The operator.
     * @param {...Expression} args The arguments.
     */
    constructor(type, operator, ...args) {
      this.type = type;
      this.operator = operator;
      this.args = args;
    }
  };
  function newParsingContext() {
    return {
      variables: /* @__PURE__ */ new Set(),
      properties: /* @__PURE__ */ new Set(),
      featureId: false,
      geometryType: false,
      mCoordinate: false,
      mapState: false
    };
  }
  function parse(encoded, expectedType, context) {
    switch (typeof encoded) {
      case "boolean": {
        if (isType(expectedType, StringType)) {
          return new LiteralExpression(StringType, encoded ? "true" : "false");
        }
        if (!includesType(expectedType, BooleanType)) {
          throw new Error(
            `got a boolean, but expected ${typeName(expectedType)}`
          );
        }
        return new LiteralExpression(BooleanType, encoded);
      }
      case "number": {
        if (isType(expectedType, SizeType)) {
          return new LiteralExpression(SizeType, toSize(encoded));
        }
        if (isType(expectedType, BooleanType)) {
          return new LiteralExpression(BooleanType, !!encoded);
        }
        if (isType(expectedType, StringType)) {
          return new LiteralExpression(StringType, encoded.toString());
        }
        if (!includesType(expectedType, NumberType)) {
          throw new Error(`got a number, but expected ${typeName(expectedType)}`);
        }
        return new LiteralExpression(NumberType, encoded);
      }
      case "string": {
        if (isType(expectedType, ColorType)) {
          return new LiteralExpression(ColorType, fromString2(encoded));
        }
        if (isType(expectedType, BooleanType)) {
          return new LiteralExpression(BooleanType, !!encoded);
        }
        if (!includesType(expectedType, StringType)) {
          throw new Error(`got a string, but expected ${typeName(expectedType)}`);
        }
        return new LiteralExpression(StringType, encoded);
      }
      default: {
      }
    }
    if (!Array.isArray(encoded)) {
      throw new Error("expression must be an array or a primitive value");
    }
    if (encoded.length === 0) {
      throw new Error("empty expression");
    }
    if (typeof encoded[0] === "string") {
      return parseCallExpression(encoded, expectedType, context);
    }
    for (const item of encoded) {
      if (typeof item !== "number") {
        throw new Error("expected an array of numbers");
      }
    }
    if (isType(expectedType, SizeType)) {
      if (encoded.length !== 2) {
        throw new Error(
          `expected an array of two values for a size, got ${encoded.length}`
        );
      }
      return new LiteralExpression(SizeType, encoded);
    }
    if (isType(expectedType, ColorType)) {
      if (encoded.length === 3) {
        return new LiteralExpression(ColorType, [...encoded, 1]);
      }
      if (encoded.length === 4) {
        return new LiteralExpression(ColorType, encoded);
      }
      throw new Error(
        `expected an array of 3 or 4 values for a color, got ${encoded.length}`
      );
    }
    if (!includesType(expectedType, NumberArrayType)) {
      throw new Error(
        `got an array of numbers, but expected ${typeName(expectedType)}`
      );
    }
    return new LiteralExpression(NumberArrayType, encoded);
  }
  var Ops = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has"
  };
  var parsers = {
    [Ops.Get]: createCallExpressionParser(hasArgsCount(1, Infinity), withGetArgs),
    [Ops.Var]: createCallExpressionParser(hasArgsCount(1, 1), withVarArgs),
    [Ops.Has]: createCallExpressionParser(hasArgsCount(1, Infinity), withGetArgs),
    [Ops.Id]: createCallExpressionParser(usesFeatureId, withNoArgs),
    [Ops.Concat]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(StringType)
    ),
    [Ops.GeometryType]: createCallExpressionParser(usesGeometryType, withNoArgs),
    [Ops.LineMetric]: createCallExpressionParser(usesMCoordinate, withNoArgs),
    [Ops.Resolution]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Zoom]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Time]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Any]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(BooleanType)
    ),
    [Ops.All]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(BooleanType)
    ),
    [Ops.Not]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(BooleanType)
    ),
    [Ops.Equal]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(AnyType)
    ),
    [Ops.NotEqual]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(AnyType)
    ),
    [Ops.GreaterThan]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.GreaterThanOrEqualTo]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.LessThan]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.LessThanOrEqualTo]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Multiply]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfReturnType
    ),
    [Ops.Coalesce]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfReturnType
    ),
    [Ops.Divide]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Add]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(NumberType)
    ),
    [Ops.Subtract]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Clamp]: createCallExpressionParser(
      hasArgsCount(3, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Mod]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Pow]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Abs]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Floor]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Ceil]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Round]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Sin]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Cos]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Atan]: createCallExpressionParser(
      hasArgsCount(1, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Sqrt]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Match]: createCallExpressionParser(
      hasArgsCount(4, Infinity),
      hasEvenArgs,
      withMatchArgs
    ),
    [Ops.Between]: createCallExpressionParser(
      hasArgsCount(3, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Interpolate]: createCallExpressionParser(
      hasArgsCount(6, Infinity),
      hasEvenArgs,
      withInterpolateArgs
    ),
    [Ops.Case]: createCallExpressionParser(
      hasArgsCount(3, Infinity),
      hasOddArgs,
      withCaseArgs
    ),
    [Ops.In]: createCallExpressionParser(hasArgsCount(2, 2), withInArgs),
    [Ops.Number]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(AnyType)
    ),
    [Ops.String]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(AnyType)
    ),
    [Ops.Array]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(NumberType)
    ),
    [Ops.Color]: createCallExpressionParser(
      hasArgsCount(1, 4),
      withArgsOfType(NumberType)
    ),
    [Ops.Band]: createCallExpressionParser(
      hasArgsCount(1, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Palette]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withPaletteArgs
    ),
    [Ops.ToString]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(BooleanType | NumberType | StringType | ColorType)
    )
  };
  function withGetArgs(encoded, returnType, context) {
    const argsCount = encoded.length - 1;
    const args = new Array(argsCount);
    for (let i = 0; i < argsCount; ++i) {
      const key = encoded[i + 1];
      switch (typeof key) {
        case "number": {
          args[i] = new LiteralExpression(NumberType, key);
          break;
        }
        case "string": {
          args[i] = new LiteralExpression(StringType, key);
          break;
        }
        default: {
          throw new Error(
            `expected a string key or numeric array index for a get operation, got ${key}`
          );
        }
      }
      if (i === 0) {
        context.properties.add(String(key));
      }
    }
    return args;
  }
  function withVarArgs(encoded, returnType, context) {
    const name = encoded[1];
    if (typeof name !== "string") {
      throw new Error("expected a string argument for var operation");
    }
    context.variables.add(name);
    return [new LiteralExpression(StringType, name)];
  }
  function usesFeatureId(encoded, returnType, context) {
    context.featureId = true;
  }
  function usesGeometryType(encoded, returnType, context) {
    context.geometryType = true;
  }
  function usesMCoordinate(encoded, returnType, context) {
    context.mCoordinate = true;
  }
  function usesMapState(encoded, returnType, context) {
    context.mapState = true;
  }
  function withNoArgs(encoded, returnType, context) {
    const operation = encoded[0];
    if (encoded.length !== 1) {
      throw new Error(`expected no arguments for ${operation} operation`);
    }
    return [];
  }
  function hasArgsCount(minArgs, maxArgs) {
    return function(encoded, returnType, context) {
      const operation = encoded[0];
      const argCount = encoded.length - 1;
      if (minArgs === maxArgs) {
        if (argCount !== minArgs) {
          const plural = minArgs === 1 ? "" : "s";
          throw new Error(
            `expected ${minArgs} argument${plural} for ${operation}, got ${argCount}`
          );
        }
      } else if (argCount < minArgs || argCount > maxArgs) {
        const range = maxArgs === Infinity ? `${minArgs} or more` : `${minArgs} to ${maxArgs}`;
        throw new Error(
          `expected ${range} arguments for ${operation}, got ${argCount}`
        );
      }
    };
  }
  function withArgsOfReturnType(encoded, returnType, context) {
    const argCount = encoded.length - 1;
    const args = new Array(argCount);
    for (let i = 0; i < argCount; ++i) {
      const expression = parse(encoded[i + 1], returnType, context);
      args[i] = expression;
    }
    return args;
  }
  function withArgsOfType(argType) {
    return function(encoded, returnType, context) {
      const argCount = encoded.length - 1;
      const args = new Array(argCount);
      for (let i = 0; i < argCount; ++i) {
        const expression = parse(encoded[i + 1], argType, context);
        args[i] = expression;
      }
      return args;
    };
  }
  function hasOddArgs(encoded, returnType, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    if (argCount % 2 === 0) {
      throw new Error(
        `expected an odd number of arguments for ${operation}, got ${argCount} instead`
      );
    }
  }
  function hasEvenArgs(encoded, returnType, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    if (argCount % 2 === 1) {
      throw new Error(
        `expected an even number of arguments for operation ${operation}, got ${argCount} instead`
      );
    }
  }
  function withMatchArgs(encoded, returnType, context) {
    const argsCount = encoded.length - 1;
    const inputType = StringType | NumberType | BooleanType;
    const input = parse(encoded[1], inputType, context);
    const fallback = parse(encoded[encoded.length - 1], returnType, context);
    const args = new Array(argsCount - 2);
    for (let i = 0; i < argsCount - 2; i += 2) {
      try {
        const match = parse(encoded[i + 2], input.type, context);
        args[i] = match;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 1} of match expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 3], fallback.type, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 2} of match expression: ${err.message}`
        );
      }
    }
    return [input, ...args, fallback];
  }
  function withInterpolateArgs(encoded, returnType, context) {
    const interpolationType = encoded[1];
    let base;
    switch (interpolationType[0]) {
      case "linear":
        base = 1;
        break;
      case "exponential":
        const b = interpolationType[1];
        if (typeof b !== "number" || b <= 0) {
          throw new Error(
            `expected a number base for exponential interpolation, got ${JSON.stringify(b)} instead`
          );
        }
        base = b;
        break;
      default:
        throw new Error(
          `invalid interpolation type: ${JSON.stringify(interpolationType)}`
        );
    }
    const interpolation = new LiteralExpression(NumberType, base);
    let input;
    try {
      input = parse(encoded[2], NumberType, context);
    } catch (err) {
      throw new Error(
        `failed to parse argument 1 in interpolate expression: ${err.message}`
      );
    }
    const args = new Array(encoded.length - 3);
    for (let i = 0; i < args.length; i += 2) {
      try {
        const stop = parse(encoded[i + 3], NumberType, context);
        args[i] = stop;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 2} for interpolate expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 4], returnType, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 3} for interpolate expression: ${err.message}`
        );
      }
    }
    return [interpolation, input, ...args];
  }
  function withCaseArgs(encoded, returnType, context) {
    const fallback = parse(encoded[encoded.length - 1], returnType, context);
    const args = new Array(encoded.length - 1);
    for (let i = 0; i < args.length - 1; i += 2) {
      try {
        const condition = parse(encoded[i + 1], BooleanType, context);
        args[i] = condition;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i} of case expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 2], fallback.type, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 1} of case expression: ${err.message}`
        );
      }
    }
    args[args.length - 1] = fallback;
    return args;
  }
  function withInArgs(encoded, returnType, context) {
    let haystack = encoded[2];
    if (!Array.isArray(haystack)) {
      throw new Error(
        `the second argument for the "in" operator must be an array`
      );
    }
    let needleType;
    if (haystack[0] === "literal") {
      haystack = haystack[1];
      if (!Array.isArray(haystack)) {
        throw new Error(
          `failed to parse "in" expression: the literal operator must be followed by an array`
        );
      }
    } else if (typeof haystack[0] === "string") {
      throw new Error(
        `for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions`
      );
    }
    if (typeof haystack[0] === "string") {
      needleType = StringType;
    } else {
      needleType = NumberType;
    }
    const args = new Array(haystack.length);
    for (let i = 0; i < args.length; i++) {
      try {
        const arg = parse(haystack[i], needleType, context);
        args[i] = arg;
      } catch (err) {
        throw new Error(
          `failed to parse haystack item ${i} for "in" expression: ${err.message}`
        );
      }
    }
    const needle = parse(encoded[1], needleType, context);
    return [needle, ...args];
  }
  function withPaletteArgs(encoded, returnType, context) {
    let index;
    try {
      index = parse(encoded[1], NumberType, context);
    } catch (err) {
      throw new Error(
        `failed to parse first argument in palette expression: ${err.message}`
      );
    }
    const colors = encoded[2];
    if (!Array.isArray(colors)) {
      throw new Error("the second argument of palette must be an array");
    }
    const parsedColors = new Array(colors.length);
    for (let i = 0; i < parsedColors.length; i++) {
      let color;
      try {
        color = parse(colors[i], ColorType, context);
      } catch (err) {
        throw new Error(
          `failed to parse color at index ${i} in palette expression: ${err.message}`
        );
      }
      if (!(color instanceof LiteralExpression)) {
        throw new Error(
          `the palette color at index ${i} must be a literal value`
        );
      }
      parsedColors[i] = color;
    }
    return [index, ...parsedColors];
  }
  function createCallExpressionParser(...validators) {
    return function(encoded, returnType, context) {
      const operator = encoded[0];
      let args;
      for (let i = 0; i < validators.length; i++) {
        const parsed = validators[i](encoded, returnType, context);
        if (i == validators.length - 1) {
          if (!parsed) {
            throw new Error(
              "expected last argument validator to return the parsed args"
            );
          }
          args = parsed;
        }
      }
      return new CallExpression(returnType, operator, ...args);
    };
  }
  function parseCallExpression(encoded, returnType, context) {
    const operator = encoded[0];
    const parser = parsers[operator];
    if (!parser) {
      throw new Error(`unknown operator: ${operator}`);
    }
    return parser(encoded, returnType, context);
  }
  function computeGeometryType(geometry) {
    if (!geometry) {
      return "";
    }
    const type = geometry.getType();
    switch (type) {
      case "Point":
      case "LineString":
      case "Polygon":
        return type;
      case "MultiPoint":
      case "MultiLineString":
      case "MultiPolygon":
        return (
          /** @type {'Point'|'LineString'|'Polygon'} */
          type.substring(5)
        );
      case "Circle":
        return "Polygon";
      case "GeometryCollection":
        return computeGeometryType(
          /** @type {import("../geom/GeometryCollection.js").default} */
          geometry.getGeometries()[0]
        );
      default:
        return "";
    }
  }

  // node_modules/ol/expr/cpu.js
  function newEvaluationContext() {
    return {
      variables: {},
      properties: {},
      resolution: NaN,
      featureId: null,
      geometryType: ""
    };
  }
  function buildExpression(encoded, type, context) {
    const expression = parse(encoded, type, context);
    return compileExpression(expression, context);
  }
  function compileExpression(expression, context) {
    if (expression instanceof LiteralExpression) {
      if (expression.type === ColorType && typeof expression.value === "string") {
        const colorValue = fromString2(expression.value);
        return function() {
          return colorValue;
        };
      }
      return function() {
        return expression.value;
      };
    }
    const operator = expression.operator;
    switch (operator) {
      case Ops.Number:
      case Ops.String:
      case Ops.Coalesce: {
        return compileAssertionExpression(expression, context);
      }
      case Ops.Get:
      case Ops.Var:
      case Ops.Has: {
        return compileAccessorExpression(expression, context);
      }
      case Ops.Id: {
        return (context2) => context2.featureId;
      }
      case Ops.GeometryType: {
        return (context2) => context2.geometryType;
      }
      case Ops.Concat: {
        const args = expression.args.map((e) => compileExpression(e, context));
        return (context2) => "".concat(...args.map((arg) => arg(context2).toString()));
      }
      case Ops.Resolution: {
        return (context2) => context2.resolution;
      }
      case Ops.Any:
      case Ops.All:
      case Ops.Between:
      case Ops.In:
      case Ops.Not: {
        return compileLogicalExpression(expression, context);
      }
      case Ops.Equal:
      case Ops.NotEqual:
      case Ops.LessThan:
      case Ops.LessThanOrEqualTo:
      case Ops.GreaterThan:
      case Ops.GreaterThanOrEqualTo: {
        return compileComparisonExpression(expression, context);
      }
      case Ops.Multiply:
      case Ops.Divide:
      case Ops.Add:
      case Ops.Subtract:
      case Ops.Clamp:
      case Ops.Mod:
      case Ops.Pow:
      case Ops.Abs:
      case Ops.Floor:
      case Ops.Ceil:
      case Ops.Round:
      case Ops.Sin:
      case Ops.Cos:
      case Ops.Atan:
      case Ops.Sqrt: {
        return compileNumericExpression(expression, context);
      }
      case Ops.Case: {
        return compileCaseExpression(expression, context);
      }
      case Ops.Match: {
        return compileMatchExpression(expression, context);
      }
      case Ops.Interpolate: {
        return compileInterpolateExpression(expression, context);
      }
      case Ops.ToString: {
        return compileConvertExpression(expression, context);
      }
      default: {
        throw new Error(`Unsupported operator ${operator}`);
      }
    }
  }
  function compileAssertionExpression(expression, context) {
    const type = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (type) {
      case Ops.Coalesce: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            const value = args[i](context2);
            if (typeof value !== "undefined" && value !== null) {
              return value;
            }
          }
          throw new Error("Expected one of the values to be non-null");
        };
      }
      case Ops.Number:
      case Ops.String: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            const value = args[i](context2);
            if (typeof value === type) {
              return value;
            }
          }
          throw new Error(`Expected one of the values to be a ${type}`);
        };
      }
      default: {
        throw new Error(`Unsupported assertion operator ${type}`);
      }
    }
  }
  function compileAccessorExpression(expression, context) {
    const nameExpression = (
      /** @type {LiteralExpression} */
      expression.args[0]
    );
    const name = (
      /** @type {string} */
      nameExpression.value
    );
    switch (expression.operator) {
      case Ops.Get: {
        return (context2) => {
          const args = expression.args;
          let value = context2.properties[name];
          for (let i = 1, ii = args.length; i < ii; ++i) {
            const keyExpression = (
              /** @type {LiteralExpression} */
              args[i]
            );
            const key = (
              /** @type {string|number} */
              keyExpression.value
            );
            value = value[key];
          }
          return value;
        };
      }
      case Ops.Var: {
        return (context2) => context2.variables[name];
      }
      case Ops.Has: {
        return (context2) => {
          const args = expression.args;
          if (!(name in context2.properties)) {
            return false;
          }
          let value = context2.properties[name];
          for (let i = 1, ii = args.length; i < ii; ++i) {
            const keyExpression = (
              /** @type {LiteralExpression} */
              args[i]
            );
            const key = (
              /** @type {string|number} */
              keyExpression.value
            );
            if (!value || !Object.hasOwn(value, key)) {
              return false;
            }
            value = value[key];
          }
          return true;
        };
      }
      default: {
        throw new Error(`Unsupported accessor operator ${expression.operator}`);
      }
    }
  }
  function compileComparisonExpression(expression, context) {
    const op = expression.operator;
    const left = compileExpression(expression.args[0], context);
    const right = compileExpression(expression.args[1], context);
    switch (op) {
      case Ops.Equal: {
        return (context2) => left(context2) === right(context2);
      }
      case Ops.NotEqual: {
        return (context2) => left(context2) !== right(context2);
      }
      case Ops.LessThan: {
        return (context2) => left(context2) < right(context2);
      }
      case Ops.LessThanOrEqualTo: {
        return (context2) => left(context2) <= right(context2);
      }
      case Ops.GreaterThan: {
        return (context2) => left(context2) > right(context2);
      }
      case Ops.GreaterThanOrEqualTo: {
        return (context2) => left(context2) >= right(context2);
      }
      default: {
        throw new Error(`Unsupported comparison operator ${op}`);
      }
    }
  }
  function compileLogicalExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.Any: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            if (args[i](context2)) {
              return true;
            }
          }
          return false;
        };
      }
      case Ops.All: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            if (!args[i](context2)) {
              return false;
            }
          }
          return true;
        };
      }
      case Ops.Between: {
        return (context2) => {
          const value = args[0](context2);
          const min = args[1](context2);
          const max = args[2](context2);
          return value >= min && value <= max;
        };
      }
      case Ops.In: {
        return (context2) => {
          const value = args[0](context2);
          for (let i = 1; i < length; ++i) {
            if (value === args[i](context2)) {
              return true;
            }
          }
          return false;
        };
      }
      case Ops.Not: {
        return (context2) => !args[0](context2);
      }
      default: {
        throw new Error(`Unsupported logical operator ${op}`);
      }
    }
  }
  function compileNumericExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.Multiply: {
        return (context2) => {
          let value = 1;
          for (let i = 0; i < length; ++i) {
            value *= args[i](context2);
          }
          return value;
        };
      }
      case Ops.Divide: {
        return (context2) => args[0](context2) / args[1](context2);
      }
      case Ops.Add: {
        return (context2) => {
          let value = 0;
          for (let i = 0; i < length; ++i) {
            value += args[i](context2);
          }
          return value;
        };
      }
      case Ops.Subtract: {
        return (context2) => args[0](context2) - args[1](context2);
      }
      case Ops.Clamp: {
        return (context2) => {
          const value = args[0](context2);
          const min = args[1](context2);
          if (value < min) {
            return min;
          }
          const max = args[2](context2);
          if (value > max) {
            return max;
          }
          return value;
        };
      }
      case Ops.Mod: {
        return (context2) => args[0](context2) % args[1](context2);
      }
      case Ops.Pow: {
        return (context2) => Math.pow(args[0](context2), args[1](context2));
      }
      case Ops.Abs: {
        return (context2) => Math.abs(args[0](context2));
      }
      case Ops.Floor: {
        return (context2) => Math.floor(args[0](context2));
      }
      case Ops.Ceil: {
        return (context2) => Math.ceil(args[0](context2));
      }
      case Ops.Round: {
        return (context2) => Math.round(args[0](context2));
      }
      case Ops.Sin: {
        return (context2) => Math.sin(args[0](context2));
      }
      case Ops.Cos: {
        return (context2) => Math.cos(args[0](context2));
      }
      case Ops.Atan: {
        if (length === 2) {
          return (context2) => Math.atan2(args[0](context2), args[1](context2));
        }
        return (context2) => Math.atan(args[0](context2));
      }
      case Ops.Sqrt: {
        return (context2) => Math.sqrt(args[0](context2));
      }
      default: {
        throw new Error(`Unsupported numeric operator ${op}`);
      }
    }
  }
  function compileCaseExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      for (let i = 0; i < length - 1; i += 2) {
        const condition = args[i](context2);
        if (condition) {
          return args[i + 1](context2);
        }
      }
      return args[length - 1](context2);
    };
  }
  function compileMatchExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      const value = args[0](context2);
      for (let i = 1; i < length - 1; i += 2) {
        if (value === args[i](context2)) {
          return args[i + 1](context2);
        }
      }
      return args[length - 1](context2);
    };
  }
  function compileInterpolateExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      const base = args[0](context2);
      const value = args[1](context2);
      let previousInput;
      let previousOutput;
      for (let i = 2; i < length; i += 2) {
        const input = args[i](context2);
        let output = args[i + 1](context2);
        const isColor = Array.isArray(output);
        if (isColor) {
          output = withAlpha(output);
        }
        if (input >= value) {
          if (i === 2) {
            return output;
          }
          if (isColor) {
            return interpolateColor(
              base,
              value,
              previousInput,
              previousOutput,
              input,
              output
            );
          }
          return interpolateNumber(
            base,
            value,
            previousInput,
            previousOutput,
            input,
            output
          );
        }
        previousInput = input;
        previousOutput = output;
      }
      return previousOutput;
    };
  }
  function compileConvertExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.ToString: {
        return (context2) => {
          const value = args[0](context2);
          if (expression.args[0].type === ColorType) {
            return toString2(value);
          }
          return value.toString();
        };
      }
      default: {
        throw new Error(`Unsupported convert operator ${op}`);
      }
    }
  }
  function interpolateNumber(base, value, input1, output1, input2, output2) {
    const delta = input2 - input1;
    if (delta === 0) {
      return output1;
    }
    const along = value - input1;
    const factor = base === 1 ? along / delta : (Math.pow(base, along) - 1) / (Math.pow(base, delta) - 1);
    return output1 + factor * (output2 - output1);
  }
  function interpolateColor(base, value, input1, rgba1, input2, rgba2) {
    const delta = input2 - input1;
    if (delta === 0) {
      return rgba1;
    }
    const lcha1 = rgbaToLcha(rgba1);
    const lcha2 = rgbaToLcha(rgba2);
    let deltaHue = lcha2[2] - lcha1[2];
    if (deltaHue > 180) {
      deltaHue -= 360;
    } else if (deltaHue < -180) {
      deltaHue += 360;
    }
    const lcha = [
      interpolateNumber(base, value, input1, lcha1[0], input2, lcha2[0]),
      interpolateNumber(base, value, input1, lcha1[1], input2, lcha2[1]),
      lcha1[2] + interpolateNumber(base, value, input1, 0, input2, deltaHue),
      interpolateNumber(base, value, input1, rgba1[3], input2, rgba2[3])
    ];
    return lchaToRgba(lcha);
  }

  // node_modules/ol/style/IconImageCache.js
  var IconImageCache = class {
    constructor() {
      this.cache_ = {};
      this.patternCache_ = {};
      this.cacheSize_ = 0;
      this.maxCacheSize_ = 1024;
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.cache_ = {};
      this.patternCache_ = {};
      this.cacheSize_ = 0;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.cacheSize_ > this.maxCacheSize_;
    }
    /**
     * FIXME empty description for jsdoc
     */
    expire() {
      if (this.canExpireCache()) {
        let i = 0;
        for (const key in this.cache_) {
          const iconImage = this.cache_[key];
          if ((i++ & 3) === 0 && !iconImage.hasListener()) {
            delete this.cache_[key];
            delete this.patternCache_[key];
            --this.cacheSize_;
          }
        }
      }
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {import("./IconImage.js").default} Icon image.
     */
    get(src, color) {
      const key = getCacheKey2(src, color);
      const icon = key in this.cache_ ? this.cache_[key] : null;
      return icon;
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {CanvasPattern} Icon image.
     */
    getPattern(src, color) {
      const key = getCacheKey2(src, color);
      return key in this.patternCache_ ? this.patternCache_[key] : null;
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @param {import("./IconImage.js").default|null} iconImage Icon image.
     * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
     */
    set(src, color, iconImage, pattern) {
      const key = getCacheKey2(src, color);
      const update = key in this.cache_;
      this.cache_[key] = iconImage;
      if (pattern) {
        if (iconImage.getImageState() === ImageState_default.IDLE) {
          iconImage.load();
        }
        if (iconImage.getImageState() === ImageState_default.LOADING) {
          iconImage.ready().then(() => {
            this.patternCache_[key] = getSharedCanvasContext2D().createPattern(
              iconImage.getImage(1),
              "repeat"
            );
          });
        } else {
          this.patternCache_[key] = getSharedCanvasContext2D().createPattern(
            iconImage.getImage(1),
            "repeat"
          );
        }
      }
      if (!update) {
        ++this.cacheSize_;
      }
    }
    /**
     * Set the cache size of the icon cache. Default is `1024`. Change this value when
     * your map uses more than 1024 different icon images and you are not caching icon
     * styles on the application level.
     * @param {number} maxCacheSize Cache max size.
     * @api
     */
    setSize(maxCacheSize) {
      this.maxCacheSize_ = maxCacheSize;
      this.expire();
    }
  };
  function getCacheKey2(src, color) {
    const colorString = color ? asArray(color) : "null";
    return src + ":" + colorString;
  }
  var shared = new IconImageCache();

  // node_modules/ol/style/IconImage.js
  var taintedTestContext = null;
  var IconImage = class extends Target_default {
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap|null} image Image.
     * @param {string|undefined} src Src.
     * @param {import('../dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("../ImageState.js").default|undefined} imageState Image state.
     * @param {import("../color.js").Color|string|null} color Color.
     */
    constructor(image, src, imageAttributes, imageState, color) {
      super();
      this.hitDetectionImage_ = null;
      this.image_ = image;
      this.crossOrigin_ = imageAttributes?.crossOrigin;
      this.referrerPolicy_ = imageAttributes?.referrerPolicy;
      this.canvas_ = {};
      this.color_ = color;
      this.imageState_ = imageState === void 0 ? ImageState_default.IDLE : imageState;
      this.size_ = image && image.width && image.height ? [image.width, image.height] : null;
      this.src_ = src;
      this.tainted_;
      this.ready_ = null;
    }
    /**
     * @private
     */
    initializeImage_() {
      this.image_ = new Image();
      if (this.crossOrigin_ !== null) {
        this.image_.crossOrigin = this.crossOrigin_;
      }
      if (this.referrerPolicy_ !== void 0) {
        this.image_.referrerPolicy = this.referrerPolicy_;
      }
    }
    /**
     * @private
     * @return {boolean} The image canvas is tainted.
     */
    isTainted_() {
      if (this.tainted_ === void 0 && this.imageState_ === ImageState_default.LOADED) {
        if (!taintedTestContext) {
          taintedTestContext = createCanvasContext2D(1, 1, void 0, {
            willReadFrequently: true
          });
        }
        taintedTestContext.drawImage(this.image_, 0, 0);
        try {
          taintedTestContext.getImageData(0, 0, 1, 1);
          this.tainted_ = false;
        } catch {
          taintedTestContext = null;
          this.tainted_ = true;
        }
      }
      return this.tainted_ === true;
    }
    /**
     * @private
     */
    dispatchChangeEvent_() {
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * @private
     */
    handleImageError_() {
      this.imageState_ = ImageState_default.ERROR;
      this.dispatchChangeEvent_();
    }
    /**
     * @private
     */
    handleImageLoad_() {
      this.imageState_ = ImageState_default.LOADED;
      this.size_ = [this.image_.width, this.image_.height];
      this.dispatchChangeEvent_();
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image or Canvas element or image bitmap.
     */
    getImage(pixelRatio) {
      if (!this.image_) {
        this.initializeImage_();
      }
      this.replaceColor_(pixelRatio);
      return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
    }
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} image Image.
     */
    setImage(image) {
      this.image_ = image;
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Image or Canvas element.
     */
    getPixelRatio(pixelRatio) {
      this.replaceColor_(pixelRatio);
      return this.canvas_[pixelRatio] ? pixelRatio : 1;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image element.
     */
    getHitDetectionImage() {
      if (!this.image_) {
        this.initializeImage_();
      }
      if (!this.hitDetectionImage_) {
        if (this.isTainted_()) {
          const width = this.size_[0];
          const height = this.size_[1];
          const context = createCanvasContext2D(width, height);
          context.fillRect(0, 0, width, height);
          this.hitDetectionImage_ = context.canvas;
        } else {
          this.hitDetectionImage_ = this.image_;
        }
      }
      return this.hitDetectionImage_;
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     */
    getSize() {
      return this.size_;
    }
    /**
     * @return {string|undefined} Image src.
     */
    getSrc() {
      return this.src_;
    }
    /**
     * Load not yet loaded URI.
     */
    load() {
      if (this.imageState_ !== ImageState_default.IDLE) {
        return;
      }
      if (!this.image_) {
        this.initializeImage_();
      }
      this.imageState_ = ImageState_default.LOADING;
      try {
        if (this.src_ !== void 0) {
          this.image_.src = this.src_;
        }
      } catch {
        this.handleImageError_();
      }
      if (this.image_ instanceof HTMLImageElement) {
        decodeFallback(this.image_, this.src_).then((image) => {
          this.image_ = image;
          this.handleImageLoad_();
        }).catch(this.handleImageError_.bind(this));
      }
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @private
     */
    replaceColor_(pixelRatio) {
      if (!this.color_ || this.canvas_[pixelRatio] || this.imageState_ !== ImageState_default.LOADED) {
        return;
      }
      const image = this.image_;
      const ctx = createCanvasContext2D(
        Math.ceil(image.width * pixelRatio),
        Math.ceil(image.height * pixelRatio)
      );
      const canvas = ctx.canvas;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.drawImage(image, 0, 0);
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = asString(this.color_);
      ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(image, 0, 0);
      this.canvas_[pixelRatio] = canvas;
    }
    /**
     * @return {Promise<void>} Promise that resolves when the image is loaded.
     */
    ready() {
      if (!this.ready_) {
        this.ready_ = new Promise((resolve) => {
          if (this.imageState_ === ImageState_default.LOADED || this.imageState_ === ImageState_default.ERROR) {
            resolve();
          } else {
            const onChange = () => {
              if (this.imageState_ === ImageState_default.LOADED || this.imageState_ === ImageState_default.ERROR) {
                this.removeEventListener(EventType_default.CHANGE, onChange);
                resolve();
              }
            };
            this.addEventListener(EventType_default.CHANGE, onChange);
          }
        });
      }
      return this.ready_;
    }
  };
  function get4(image, src, imageAttributes, imageState, color, pattern) {
    let iconImage = src === void 0 ? void 0 : shared.get(src, color);
    if (!iconImage) {
      iconImage = new IconImage(
        image,
        image && "src" in image ? image.src || void 0 : src,
        imageAttributes,
        imageState,
        color
      );
      shared.set(src, color, iconImage, pattern);
    }
    if (pattern && iconImage && !shared.getPattern(src, color)) {
      shared.set(src, color, iconImage, pattern);
    }
    return iconImage;
  }
  var IconImage_default = IconImage;

  // node_modules/ol/colorlike.js
  function asColorLike(color) {
    if (!color) {
      return null;
    }
    if (Array.isArray(color)) {
      return toString2(color);
    }
    if (typeof color === "object" && "src" in color) {
      return asCanvasPattern(color);
    }
    return color;
  }
  function asCanvasPattern(pattern) {
    if (!pattern.offset || !pattern.size) {
      return shared.getPattern(pattern.src, pattern.color);
    }
    const cacheKey = pattern.src + ":" + pattern.offset;
    const canvasPattern = shared.getPattern(cacheKey, pattern.color);
    if (canvasPattern) {
      return canvasPattern;
    }
    const iconImage = shared.get(pattern.src, null);
    if (iconImage.getImageState() !== ImageState_default.LOADED) {
      return null;
    }
    const patternCanvasContext = createCanvasContext2D(
      pattern.size[0],
      pattern.size[1]
    );
    patternCanvasContext.drawImage(
      iconImage.getImage(1),
      pattern.offset[0],
      pattern.offset[1],
      pattern.size[0],
      pattern.size[1],
      0,
      0,
      pattern.size[0],
      pattern.size[1]
    );
    get4(
      patternCanvasContext.canvas,
      cacheKey,
      void 0,
      ImageState_default.LOADED,
      pattern.color,
      true
    );
    return shared.getPattern(cacheKey, pattern.color);
  }

  // node_modules/ol/render/canvas.js
  var defaultFillStyle = "#000";
  var defaultLineCap = "round";
  var defaultLineJoin = "round";
  var defaultMiterLimit = 10;
  var defaultStrokeStyle = "#000";
  var defaultLineWidth = 1;
  var checkedFonts = new Object_default();

  // node_modules/ol/style/Image.js
  var ImageStyle = class _ImageStyle {
    /**
     * @param {Options} options Options.
     */
    constructor(options) {
      this.opacity_ = options.opacity;
      this.rotateWithView_ = options.rotateWithView;
      this.rotation_ = options.rotation;
      this.scale_ = options.scale;
      this.scaleArray_ = toSize(options.scale);
      this.displacement_ = options.displacement;
      this.declutterMode_ = options.declutterMode;
    }
    /**
     * Clones the style.
     * @return {ImageStyle} The cloned style.
     * @api
     */
    clone() {
      const scale4 = this.getScale();
      return new _ImageStyle({
        opacity: this.getOpacity(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the symbolizer opacity.
     * @return {number} Opacity.
     * @api
     */
    getOpacity() {
      return this.opacity_;
    }
    /**
     * Determine whether the symbolizer rotates with the map.
     * @return {boolean} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Get the symoblizer rotation.
     * @return {number} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the symbolizer scale.
     * @return {number|import("../size.js").Size} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the displacement of the shape
     * @return {Array<number>} Shape's center displacement
     * @api
     */
    getDisplacement() {
      return this.displacement_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @abstract
     * @return {Array<number>} Anchor.
     */
    getAnchor() {
      return abstract();
    }
    /**
     * Get the image element for the symbolizer.
     * @abstract
     * @param {number} pixelRatio Pixel ratio.
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getImage(pixelRatio) {
      return abstract();
    }
    /**
     * @abstract
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getHitDetectionImage() {
      return abstract();
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     */
    getPixelRatio(pixelRatio) {
      return 1;
    }
    /**
     * @abstract
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return abstract();
    }
    /**
     * @abstract
     * @return {import("../size.js").Size} Image size.
     */
    getImageSize() {
      return abstract();
    }
    /**
     * Get the origin of the symbolizer.
     * @abstract
     * @return {Array<number>} Origin.
     */
    getOrigin() {
      return abstract();
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @abstract
     * @return {import("../size.js").Size} Size.
     */
    getSize() {
      return abstract();
    }
    /**
     * Set the displacement.
     *
     * @param {Array<number>} displacement Displacement.
     * @api
     */
    setDisplacement(displacement) {
      this.displacement_ = displacement;
    }
    /**
     * Set the opacity.
     *
     * @param {number} opacity Opacity.
     * @api
     */
    setOpacity(opacity) {
      this.opacity_ = opacity;
    }
    /**
     * Set whether to rotate the style with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(rotateWithView) {
      this.rotateWithView_ = rotateWithView;
    }
    /**
     * Set the rotation.
     *
     * @param {number} rotation Rotation.
     * @api
     */
    setRotation(rotation) {
      this.rotation_ = rotation;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     */
    setScale(scale4) {
      this.scale_ = scale4;
      this.scaleArray_ = toSize(scale4);
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    listenImageChange(listener) {
      abstract();
    }
    /**
     * Load not yet loaded URI.
     * @abstract
     */
    load() {
      abstract();
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    unlistenImageChange(listener) {
      abstract();
    }
    /**
     * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
     */
    ready() {
      return Promise.resolve();
    }
  };
  var Image_default = ImageStyle;

  // node_modules/ol/style/RegularShape.js
  var RegularShape = class _RegularShape extends Image_default {
    /**
     * @param {Options} options Options.
     */
    constructor(options) {
      super({
        opacity: 1,
        rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
        rotation: options.rotation !== void 0 ? options.rotation : 0,
        scale: options.scale !== void 0 ? options.scale : 1,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        declutterMode: options.declutterMode
      });
      this.hitDetectionCanvas_ = null;
      this.fill_ = options.fill !== void 0 ? options.fill : null;
      this.origin_ = [0, 0];
      this.points_ = options.points;
      this.radius = options.radius;
      this.radius2_ = options.radius2;
      this.angle_ = options.angle !== void 0 ? options.angle : 0;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.size_;
      this.renderOptions_;
      this.imageState_ = this.fill_ && this.fill_.loading() ? ImageState_default.LOADING : ImageState_default.LOADED;
      if (this.imageState_ === ImageState_default.LOADING) {
        this.ready().then(() => this.imageState_ = ImageState_default.LOADED);
      }
      this.render();
    }
    /**
     * Clones the style.
     * @return {RegularShape} The cloned style.
     * @api
     * @override
     */
    clone() {
      const scale4 = this.getScale();
      const style = new _RegularShape({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      style.setOpacity(this.getOpacity());
      return style;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      const size = this.size_;
      const displacement = this.getDisplacement();
      const scale4 = this.getScaleArray();
      return [
        size[0] / 2 - displacement[0] / scale4[0],
        size[1] / 2 + displacement[1] / scale4[1]
      ];
    }
    /**
     * Get the angle used in generating the shape.
     * @return {number} Shape's rotation in radians.
     * @api
     */
    getAngle() {
      return this.angle_;
    }
    /**
     * Get the fill style for the shape.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
      this.render();
    }
    /**
     * @return {HTMLCanvasElement|OffscreenCanvas} Image element.
     * @override
     */
    getHitDetectionImage() {
      if (!this.hitDetectionCanvas_) {
        this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_
        );
      }
      return this.hitDetectionCanvas_;
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLCanvasElement|OffscreenCanvas} Image or Canvas element.
     * @api
     * @override
     */
    getImage(pixelRatio) {
      const fillKey = this.fill_?.getKey();
      const cacheKey = `${pixelRatio},${this.angle_},${this.radius},${this.radius2_},${this.points_},${fillKey}` + Object.values(this.renderOptions_).join(",");
      let image = (
        /** @type {HTMLCanvasElement|OffscreenCanvas} */
        shared.get(cacheKey, null)?.getImage(1)
      );
      if (!image) {
        const renderOptions = this.renderOptions_;
        const size = Math.ceil(renderOptions.size * pixelRatio);
        const context = createCanvasContext2D(size, size);
        this.draw_(renderOptions, context, pixelRatio);
        image = context.canvas;
        const iconImage = new IconImage_default(
          image,
          void 0,
          null,
          ImageState_default.LOADED,
          null
        );
        shared.set(cacheKey, null, iconImage);
        createImageBitmap(image).then((imageBitmap) => {
          iconImage.setImage(imageBitmap);
        });
      }
      return image;
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     * @override
     */
    getPixelRatio(pixelRatio) {
      return pixelRatio;
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.size_;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      return this.origin_;
    }
    /**
     * Get the number of points for generating the shape.
     * @return {number} Number of points for stars and regular polygons.
     * @api
     */
    getPoints() {
      return this.points_;
    }
    /**
     * Get the (primary) radius for the shape.
     * @return {number} Radius.
     * @api
     */
    getRadius() {
      return this.radius;
    }
    /**
     * Set the (primary) radius for the shape.
     * @param {number} radius Radius.
     * @api
     */
    setRadius(radius) {
      if (this.radius === radius) {
        return;
      }
      this.radius = radius;
      this.render();
    }
    /**
     * Get the secondary radius for the shape.
     * @return {number|undefined} Radius2.
     * @api
     */
    getRadius2() {
      return this.radius2_;
    }
    /**
     * Set the secondary radius for the shape.
     * @param {number|undefined} radius2 Radius2.
     * @api
     */
    setRadius2(radius2) {
      if (this.radius2_ === radius2) {
        return;
      }
      this.radius2_ = radius2;
      this.render();
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @return {import("../size.js").Size} Size.
     * @api
     * @override
     */
    getSize() {
      return this.size_;
    }
    /**
     * Get the stroke style for the shape.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
      this.render();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(listener) {
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(listener) {
    }
    /**
     * Calculate additional canvas size needed for the miter.
     * @param {string} lineJoin Line join
     * @param {number} strokeWidth Stroke width
     * @param {number} miterLimit Miter limit
     * @return {number} Additional canvas size needed
     * @private
     */
    calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit) {
      if (strokeWidth === 0 || this.points_ === Infinity || lineJoin !== "bevel" && lineJoin !== "miter") {
        return strokeWidth;
      }
      let r1 = this.radius;
      let r2 = this.radius2_ === void 0 ? r1 : this.radius2_;
      if (r1 < r2) {
        const tmp = r1;
        r1 = r2;
        r2 = tmp;
      }
      const points = this.radius2_ === void 0 ? this.points_ : this.points_ * 2;
      const alpha = 2 * Math.PI / points;
      const a = r2 * Math.sin(alpha);
      const b = Math.sqrt(r2 * r2 - a * a);
      const d = r1 - b;
      const e = Math.sqrt(a * a + d * d);
      const miterRatio = e / a;
      if (lineJoin === "miter" && miterRatio <= miterLimit) {
        return miterRatio * strokeWidth;
      }
      const k = strokeWidth / 2 / miterRatio;
      const l = strokeWidth / 2 * (d / e);
      const maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
      const bevelAdd = maxr - r1;
      if (this.radius2_ === void 0 || lineJoin === "bevel") {
        return bevelAdd * 2;
      }
      const aa = r1 * Math.sin(alpha);
      const bb = Math.sqrt(r1 * r1 - aa * aa);
      const dd = r2 - bb;
      const ee = Math.sqrt(aa * aa + dd * dd);
      const innerMiterRatio = ee / aa;
      if (innerMiterRatio <= miterLimit) {
        const innerLength = innerMiterRatio * strokeWidth / 2 - r2 - r1;
        return 2 * Math.max(bevelAdd, innerLength);
      }
      return bevelAdd * 2;
    }
    /**
     * @return {RenderOptions}  The render options
     * @protected
     */
    createRenderOptions() {
      let lineCap = defaultLineCap;
      let lineJoin = defaultLineJoin;
      let miterLimit = 0;
      let lineDash = null;
      let lineDashOffset = 0;
      let strokeStyle;
      let strokeWidth = 0;
      if (this.stroke_) {
        strokeStyle = asColorLike(this.stroke_.getColor() ?? defaultStrokeStyle);
        strokeWidth = this.stroke_.getWidth() ?? defaultLineWidth;
        lineDash = this.stroke_.getLineDash();
        lineDashOffset = this.stroke_.getLineDashOffset() ?? 0;
        lineJoin = this.stroke_.getLineJoin() ?? defaultLineJoin;
        lineCap = this.stroke_.getLineCap() ?? defaultLineCap;
        miterLimit = this.stroke_.getMiterLimit() ?? defaultMiterLimit;
      }
      const add4 = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
      const maxRadius = Math.max(this.radius, this.radius2_ || 0);
      const size = Math.ceil(2 * maxRadius + add4);
      return {
        strokeStyle,
        strokeWidth,
        size,
        lineCap,
        lineDash,
        lineDashOffset,
        lineJoin,
        miterLimit
      };
    }
    /**
     * @protected
     */
    render() {
      this.renderOptions_ = this.createRenderOptions();
      const size = this.renderOptions_.size;
      this.hitDetectionCanvas_ = null;
      this.size_ = [size, size];
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The rendering context.
     * @param {number} pixelRatio The pixel ratio.
     */
    draw_(renderOptions, context, pixelRatio) {
      context.scale(pixelRatio, pixelRatio);
      context.translate(renderOptions.size / 2, renderOptions.size / 2);
      this.createPath_(context);
      if (this.fill_) {
        let color = this.fill_.getColor();
        if (color === null) {
          color = defaultFillStyle;
        }
        context.fillStyle = asColorLike(color);
        context.fill();
      }
      if (renderOptions.strokeStyle) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
          context.setLineDash(renderOptions.lineDash);
          context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.lineCap = renderOptions.lineCap;
        context.lineJoin = renderOptions.lineJoin;
        context.miterLimit = renderOptions.miterLimit;
        context.stroke();
      }
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @return {HTMLCanvasElement|OffscreenCanvas} Canvas containing the icon
     */
    createHitDetectionCanvas_(renderOptions) {
      let context;
      if (this.fill_) {
        let color = this.fill_.getColor();
        let opacity = 0;
        if (typeof color === "string") {
          color = asArray(color);
        }
        if (color === null) {
          opacity = 1;
        } else if (Array.isArray(color)) {
          opacity = color.length === 4 ? color[3] : 1;
        }
        if (opacity === 0) {
          context = createCanvasContext2D(renderOptions.size, renderOptions.size);
          this.drawHitDetectionCanvas_(renderOptions, context);
        }
      }
      return context ? context.canvas : this.getImage(1);
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The context to draw in.
     */
    createPath_(context) {
      let points = this.points_;
      const radius = this.radius;
      if (points === Infinity) {
        context.arc(0, 0, radius, 0, 2 * Math.PI);
      } else {
        const radius2 = this.radius2_ === void 0 ? radius : this.radius2_;
        if (this.radius2_ !== void 0) {
          points *= 2;
        }
        const startAngle = this.angle_ - Math.PI / 2;
        const step = 2 * Math.PI / points;
        for (let i = 0; i < points; i++) {
          const angle0 = startAngle + i * step;
          const radiusC = i % 2 === 0 ? radius : radius2;
          context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
        }
        context.closePath();
      }
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The context.
     */
    drawHitDetectionCanvas_(renderOptions, context) {
      context.translate(renderOptions.size / 2, renderOptions.size / 2);
      this.createPath_(context);
      context.fillStyle = defaultFillStyle;
      context.fill();
      if (renderOptions.strokeStyle) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
          context.setLineDash(renderOptions.lineDash);
          context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.lineJoin = renderOptions.lineJoin;
        context.miterLimit = renderOptions.miterLimit;
        context.stroke();
      }
    }
    /**
     * @override
     */
    ready() {
      return this.fill_ ? this.fill_.ready() : Promise.resolve();
    }
  };
  var RegularShape_default = RegularShape;

  // node_modules/ol/style/Circle.js
  var CircleStyle = class _CircleStyle extends RegularShape_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : { radius: 5 };
      super({
        points: Infinity,
        fill: options.fill,
        radius: options.radius,
        stroke: options.stroke,
        scale: options.scale !== void 0 ? options.scale : 1,
        rotation: options.rotation !== void 0 ? options.rotation : 0,
        rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        declutterMode: options.declutterMode
      });
    }
    /**
     * Clones the style.
     * @return {CircleStyle} The cloned style.
     * @api
     * @override
     */
    clone() {
      const scale4 = this.getScale();
      const style = new _CircleStyle({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      style.setOpacity(this.getOpacity());
      return style;
    }
  };
  var Circle_default = CircleStyle;

  // node_modules/ol/style/Fill.js
  var Fill = class _Fill {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.patternImage_ = null;
      this.color_ = null;
      if (options.color !== void 0) {
        this.setColor(options.color);
      }
    }
    /**
     * Clones the style. The color is not cloned if it is a {@link module:ol/colorlike~ColorLike}.
     * @return {Fill} The cloned style.
     * @api
     */
    clone() {
      const color = this.getColor();
      return new _Fill({
        color: Array.isArray(color) ? color.slice() : color || void 0
      });
    }
    /**
     * Get the fill color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} color Color.
     * @api
     */
    setColor(color) {
      if (color !== null && typeof color === "object" && "src" in color) {
        const patternImage = get4(
          null,
          color.src,
          { crossOrigin: "anonymous" },
          void 0,
          color.offset ? null : color.color ? color.color : null,
          !(color.offset && color.size)
        );
        patternImage.ready().then(() => {
          this.patternImage_ = null;
        });
        if (patternImage.getImageState() === ImageState_default.IDLE) {
          patternImage.load();
        }
        if (patternImage.getImageState() === ImageState_default.LOADING) {
          this.patternImage_ = patternImage;
        }
      }
      this.color_ = color;
    }
    /**
     * @return {string} Key of the fill for cache lookup.
     */
    getKey() {
      const fill = this.getColor();
      if (!fill) {
        return "";
      }
      return fill instanceof CanvasPattern || fill instanceof CanvasGradient ? getUid(fill) : typeof fill === "object" && "src" in fill ? fill.src + ":" + fill.offset : asArray(fill).toString();
    }
    /**
     * @return {boolean} The fill style is loading an image pattern.
     */
    loading() {
      return !!this.patternImage_;
    }
    /**
     * @return {Promise<void>} `false` or a promise that resolves when the style is ready to use.
     */
    ready() {
      return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
    }
  };
  var Fill_default = Fill;

  // node_modules/ol/style/Icon.js
  function calculateScale(width, height, wantedWidth, wantedHeight) {
    if (wantedWidth !== void 0 && wantedHeight !== void 0) {
      return [wantedWidth / width, wantedHeight / height];
    }
    if (wantedWidth !== void 0) {
      return wantedWidth / width;
    }
    if (wantedHeight !== void 0) {
      return wantedHeight / height;
    }
    return 1;
  }
  var Icon = class _Icon extends Image_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      const opacity = options.opacity !== void 0 ? options.opacity : 1;
      const rotation = options.rotation !== void 0 ? options.rotation : 0;
      const scale4 = options.scale !== void 0 ? options.scale : 1;
      const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
      super({
        opacity,
        rotation,
        scale: scale4,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        rotateWithView,
        declutterMode: options.declutterMode
      });
      this.anchor_ = options.anchor !== void 0 ? options.anchor : [0.5, 0.5];
      this.normalizedAnchor_ = null;
      this.anchorOrigin_ = options.anchorOrigin !== void 0 ? options.anchorOrigin : "top-left";
      this.anchorXUnits_ = options.anchorXUnits !== void 0 ? options.anchorXUnits : "fraction";
      this.anchorYUnits_ = options.anchorYUnits !== void 0 ? options.anchorYUnits : "fraction";
      this.crossOrigin_ = options.crossOrigin !== void 0 ? options.crossOrigin : null;
      this.referrerPolicy_ = options.referrerPolicy;
      const image = options.img !== void 0 ? options.img : null;
      let cacheKey = options.src;
      assert(
        !(cacheKey !== void 0 && image),
        "`image` and `src` cannot be provided at the same time"
      );
      if ((cacheKey === void 0 || cacheKey.length === 0) && image) {
        cacheKey = /** @type {HTMLImageElement} */
        image.src || getUid(image);
      }
      assert(
        cacheKey !== void 0 && cacheKey.length > 0,
        "A defined and non-empty `src` or `image` must be provided"
      );
      assert(
        !((options.width !== void 0 || options.height !== void 0) && options.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`"
      );
      let imageState;
      if (options.src !== void 0) {
        imageState = ImageState_default.IDLE;
      } else if (image !== void 0) {
        if ("complete" in image) {
          if (image.complete) {
            imageState = image.src ? ImageState_default.LOADED : ImageState_default.IDLE;
          } else {
            imageState = ImageState_default.LOADING;
          }
        } else {
          imageState = ImageState_default.LOADED;
        }
      }
      this.color_ = options.color !== void 0 ? asArray(options.color) : null;
      this.iconImage_ = get4(
        image,
        /** @type {string} */
        cacheKey,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        imageState,
        this.color_
      );
      this.offset_ = options.offset !== void 0 ? options.offset : [0, 0];
      this.offsetOrigin_ = options.offsetOrigin !== void 0 ? options.offsetOrigin : "top-left";
      this.origin_ = null;
      this.size_ = options.size !== void 0 ? options.size : null;
      this.initialOptions_;
      if (options.width !== void 0 || options.height !== void 0) {
        let width, height;
        if (options.size) {
          [width, height] = options.size;
        } else {
          const image2 = this.getImage(1);
          if (image2.width && image2.height) {
            width = image2.width;
            height = image2.height;
          } else if (image2 instanceof HTMLImageElement) {
            this.initialOptions_ = options;
            const onload = () => {
              this.unlistenImageChange(onload);
              if (!this.initialOptions_) {
                return;
              }
              const imageSize = this.iconImage_.getSize();
              this.setScale(
                calculateScale(
                  imageSize[0],
                  imageSize[1],
                  options.width,
                  options.height
                )
              );
            };
            this.listenImageChange(onload);
            return;
          }
        }
        if (width !== void 0) {
          this.setScale(
            calculateScale(width, height, options.width, options.height)
          );
        }
      }
    }
    /**
     * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
     * @return {Icon} The cloned style.
     * @api
     * @override
     */
    clone() {
      let scale4, width, height;
      if (this.initialOptions_) {
        width = this.initialOptions_.width;
        height = this.initialOptions_.height;
      } else {
        scale4 = this.getScale();
        scale4 = Array.isArray(scale4) ? scale4.slice() : scale4;
      }
      return new _Icon({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        referrerPolicy: this.referrerPolicy_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: scale4,
        width,
        height,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      let anchor = this.normalizedAnchor_;
      if (!anchor) {
        anchor = this.anchor_;
        const size = this.getSize();
        if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
          if (!size) {
            return null;
          }
          anchor = this.anchor_.slice();
          if (this.anchorXUnits_ == "fraction") {
            anchor[0] *= size[0];
          }
          if (this.anchorYUnits_ == "fraction") {
            anchor[1] *= size[1];
          }
        }
        if (this.anchorOrigin_ != "top-left") {
          if (!size) {
            return null;
          }
          if (anchor === this.anchor_) {
            anchor = this.anchor_.slice();
          }
          if (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") {
            anchor[0] = -anchor[0] + size[0];
          }
          if (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") {
            anchor[1] = -anchor[1] + size[1];
          }
        }
        this.normalizedAnchor_ = anchor;
      }
      const displacement = this.getDisplacement();
      const scale4 = this.getScaleArray();
      return [
        anchor[0] - displacement[0] / scale4[0],
        anchor[1] + displacement[1] / scale4[1]
      ];
    }
    /**
     * Set the anchor point. The anchor determines the center point for the
     * symbolizer.
     *
     * @param {Array<number>} anchor Anchor.
     * @api
     */
    setAnchor(anchor) {
      this.anchor_ = anchor;
      this.normalizedAnchor_ = null;
    }
    /**
     * Get the icon color.
     * @return {import("../color.js").Color} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Set the icon color.
     *
     * Warning: Repeatedly setting the color on an icon style
     * causes the icon image to be re-created each time. This can have a
     * severe performance impact.
     *
     * @param {import("../color.js").Color|string|null|undefined} color Color.
     */
    setColor(color) {
      const nextColor = color ? asArray(color) : null;
      if (this.color_ === nextColor || this.color_ && nextColor && this.color_.length === nextColor.length && this.color_.every((value, index) => value === nextColor[index])) {
        return;
      }
      this.color_ = nextColor;
      const src = this.getSrc();
      const image = src !== void 0 ? null : this.getHitDetectionImage();
      const imageState = src !== void 0 ? ImageState_default.IDLE : this.iconImage_.getImageState();
      this.iconImage_ = get4(
        image,
        src,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        imageState,
        this.color_
      );
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image or Canvas element. If the Icon
     * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
     * @api
     * @override
     */
    getImage(pixelRatio) {
      return this.iconImage_.getImage(pixelRatio);
    }
    /**
     * Get the pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} The pixel ratio of the image.
     * @api
     * @override
     */
    getPixelRatio(pixelRatio) {
      return this.iconImage_.getPixelRatio(pixelRatio);
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.iconImage_.getSize();
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.iconImage_.getImageState();
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image element.
     * @override
     */
    getHitDetectionImage() {
      return this.iconImage_.getHitDetectionImage();
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      if (this.origin_) {
        return this.origin_;
      }
      let offset = this.offset_;
      if (this.offsetOrigin_ != "top-left") {
        const size = this.getSize();
        const iconImageSize = this.iconImage_.getSize();
        if (!size || !iconImageSize) {
          return null;
        }
        offset = offset.slice();
        if (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") {
          offset[0] = iconImageSize[0] - size[0] - offset[0];
        }
        if (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") {
          offset[1] = iconImageSize[1] - size[1] - offset[1];
        }
      }
      this.origin_ = offset;
      return this.origin_;
    }
    /**
     * Get the image URL.
     * @return {string|undefined} Image src.
     * @api
     */
    getSrc() {
      return this.iconImage_.getSrc();
    }
    /**
     * Set the image URI
     * @param {string} src Image source URI
     * @api
     */
    setSrc(src) {
      this.iconImage_ = get4(
        null,
        src,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        ImageState_default.IDLE,
        this.color_
      );
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     * @api
     * @override
     */
    getSize() {
      return !this.size_ ? this.iconImage_.getSize() : this.size_;
    }
    /**
     * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon width (in pixels).
     * @api
     */
    getWidth() {
      const scale4 = this.getScaleArray();
      if (this.size_) {
        return this.size_[0] * scale4[0];
      }
      if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
        return this.iconImage_.getSize()[0] * scale4[0];
      }
      return void 0;
    }
    /**
     * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon height (in pixels).
     * @api
     */
    getHeight() {
      const scale4 = this.getScaleArray();
      if (this.size_) {
        return this.size_[1] * scale4[1];
      }
      if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
        return this.iconImage_.getSize()[1] * scale4[1];
      }
      return void 0;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     * @override
     */
    setScale(scale4) {
      delete this.initialOptions_;
      super.setScale(scale4);
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(listener) {
      this.iconImage_.addEventListener(EventType_default.CHANGE, listener);
    }
    /**
     * Load not yet loaded URI.
     * When rendering a feature with an icon style, the vector renderer will
     * automatically call this method. However, you might want to call this
     * method yourself for preloading or other purposes.
     * @api
     * @override
     */
    load() {
      this.iconImage_.load();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(listener) {
      this.iconImage_.removeEventListener(EventType_default.CHANGE, listener);
    }
    /**
     * @override
     */
    ready() {
      return this.iconImage_.ready();
    }
  };
  var Icon_default = Icon;

  // node_modules/ol/style/Stroke.js
  var Stroke = class _Stroke {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.color_ = options.color !== void 0 ? options.color : null;
      this.lineCap_ = options.lineCap;
      this.lineDash_ = options.lineDash !== void 0 ? options.lineDash : null;
      this.lineDashOffset_ = options.lineDashOffset;
      this.lineJoin_ = options.lineJoin;
      this.miterLimit_ = options.miterLimit;
      this.offset_ = options.offset;
      this.width_ = options.width;
    }
    /**
     * Clones the style.
     * @return {Stroke} The cloned style.
     * @api
     */
    clone() {
      const color = this.getColor();
      return new _Stroke({
        color: Array.isArray(color) ? color.slice() : color || void 0,
        lineCap: this.getLineCap(),
        lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
        lineDashOffset: this.getLineDashOffset(),
        lineJoin: this.getLineJoin(),
        miterLimit: this.getMiterLimit(),
        offset: this.getOffset(),
        width: this.getWidth()
      });
    }
    /**
     * Get the stroke color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Get the line cap type for the stroke.
     * @return {CanvasLineCap|undefined} Line cap.
     * @api
     */
    getLineCap() {
      return this.lineCap_;
    }
    /**
     * Get the line dash style for the stroke.
     * @return {Array<number>|null} Line dash.
     * @api
     */
    getLineDash() {
      return this.lineDash_;
    }
    /**
     * Get the line dash offset for the stroke.
     * @return {number|undefined} Line dash offset.
     * @api
     */
    getLineDashOffset() {
      return this.lineDashOffset_;
    }
    /**
     * Get the line join type for the stroke.
     * @return {CanvasLineJoin|undefined} Line join.
     * @api
     */
    getLineJoin() {
      return this.lineJoin_;
    }
    /**
     * Get the miter limit for the stroke.
     * @return {number|undefined} Miter limit.
     * @api
     */
    getMiterLimit() {
      return this.miterLimit_;
    }
    /**
     * Get the line offset in pixels.
     * @return {number|undefined} Offset.
     * @api
     */
    getOffset() {
      return this.offset_;
    }
    /**
     * Get the stroke width.
     * @return {number|undefined} Width.
     * @api
     */
    getWidth() {
      return this.width_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
     * @api
     */
    setColor(color) {
      this.color_ = color;
    }
    /**
     * Set the line cap.
     *
     * @param {CanvasLineCap|undefined} lineCap Line cap.
     * @api
     */
    setLineCap(lineCap) {
      this.lineCap_ = lineCap;
    }
    /**
     * Set the line dash.
     *
     * @param {Array<number>|null} lineDash Line dash.
     * @api
     */
    setLineDash(lineDash) {
      this.lineDash_ = lineDash;
    }
    /**
     * Set the line dash offset.
     *
     * @param {number|undefined} lineDashOffset Line dash offset.
     * @api
     */
    setLineDashOffset(lineDashOffset) {
      this.lineDashOffset_ = lineDashOffset;
    }
    /**
     * Set the line join.
     *
     * @param {CanvasLineJoin|undefined} lineJoin Line join.
     * @api
     */
    setLineJoin(lineJoin) {
      this.lineJoin_ = lineJoin;
    }
    /**
     * Set the miter limit.
     *
     * @param {number|undefined} miterLimit Miter limit.
     * @api
     */
    setMiterLimit(miterLimit) {
      this.miterLimit_ = miterLimit;
    }
    /**
     * Set the line offset in pixels.
     *
     * @param {number|undefined} offset Offset.
     * @api
     */
    setOffset(offset) {
      this.offset_ = offset;
    }
    /**
     * Set the width.
     *
     * @param {number|undefined} width Width.
     * @api
     */
    setWidth(width) {
      this.width_ = width;
    }
  };
  var Stroke_default = Stroke;

  // node_modules/ol/style/Style.js
  var Style = class _Style {
    /**
     * @param {Options} [options] Style options.
     */
    constructor(options) {
      options = options || {};
      this.geometry_ = null;
      this.geometryFunction_ = defaultGeometryFunction;
      if (options.geometry !== void 0) {
        this.setGeometry(options.geometry);
      }
      this.fill_ = options.fill !== void 0 ? options.fill : null;
      this.image_ = options.image !== void 0 ? options.image : null;
      this.renderer_ = options.renderer !== void 0 ? options.renderer : null;
      this.hitDetectionRenderer_ = options.hitDetectionRenderer !== void 0 ? options.hitDetectionRenderer : null;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.text_ = options.text !== void 0 ? options.text : null;
      this.zIndex_ = options.zIndex;
    }
    /**
     * Clones the style.
     * @return {Style} The cloned style.
     * @api
     */
    clone() {
      let geometry = this.getGeometry();
      if (geometry && typeof geometry === "object") {
        geometry = /** @type {import("../geom/Geometry.js").default} */
        geometry.clone();
      }
      return new _Style({
        geometry: geometry ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex()
      });
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setRenderer} or the `renderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Sets a custom renderer function for this style. When set, `fill`, `stroke`
     * and `image` options of the style will be ignored.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setRenderer(renderer) {
      this.renderer_ = renderer;
    }
    /**
     * Sets a custom renderer function for this style used
     * in hit detection.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setHitDetectionRenderer(renderer) {
      this.hitDetectionRenderer_ = renderer;
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getHitDetectionRenderer() {
      return this.hitDetectionRenderer_;
    }
    /**
     * Get the geometry to be rendered.
     * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
     * Feature property or geometry or function that returns the geometry that will
     * be rendered with this style.
     * @api
     */
    getGeometry() {
      return this.geometry_;
    }
    /**
     * Get the function used to generate a geometry for rendering.
     * @return {!GeometryFunction} Function that is called with a feature
     * and returns the geometry to render instead of the feature's geometry.
     * @api
     */
    getGeometryFunction() {
      return this.geometryFunction_;
    }
    /**
     * Get the fill style.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
    }
    /**
     * Get the image style.
     * @return {import("./Image.js").default|null} Image style.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Set the image style.
     * @param {import("./Image.js").default} image Image style.
     * @api
     */
    setImage(image) {
      this.image_ = image;
    }
    /**
     * Get the stroke style.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
    }
    /**
     * Get the text style.
     * @return {import("./Text.js").default|null} Text style.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Set the text style.
     * @param {import("./Text.js").default} text Text style.
     * @api
     */
    setText(text) {
      this.text_ = text;
    }
    /**
     * Get the z-index for the style.
     * @return {number|undefined} ZIndex.
     * @api
     */
    getZIndex() {
      return this.zIndex_;
    }
    /**
     * Set a geometry that is rendered instead of the feature's geometry.
     *
     * @param {string|import("../geom/Geometry.js").default|GeometryFunction|null} geometry
     *     Feature property or geometry or function returning a geometry to render
     *     for this style.
     * @api
     */
    setGeometry(geometry) {
      if (typeof geometry === "function") {
        this.geometryFunction_ = geometry;
      } else if (typeof geometry === "string") {
        this.geometryFunction_ = function(feature) {
          return (
            /** @type {import("../geom/Geometry.js").default} */
            feature.get(geometry)
          );
        };
      } else if (!geometry) {
        this.geometryFunction_ = defaultGeometryFunction;
      } else if (geometry !== void 0) {
        this.geometryFunction_ = function() {
          return (
            /** @type {import("../geom/Geometry.js").default} */
            geometry
          );
        };
      }
      this.geometry_ = geometry;
    }
    /**
     * Set the z-index.
     *
     * @param {number|undefined} zIndex ZIndex.
     * @api
     */
    setZIndex(zIndex) {
      this.zIndex_ = zIndex;
    }
  };
  function toFunction(obj) {
    let styleFunction;
    if (typeof obj === "function") {
      styleFunction = obj;
    } else {
      let styles;
      if (Array.isArray(obj)) {
        styles = obj;
      } else {
        assert(
          typeof /** @type {?} */
          obj.getZIndex === "function",
          "Expected an `Style` or an array of `Style`"
        );
        const style = (
          /** @type {Style} */
          obj
        );
        styles = [style];
      }
      styleFunction = function() {
        return styles;
      };
    }
    return styleFunction;
  }
  var defaultStyles = null;
  function createDefaultStyle(feature, resolution) {
    if (!defaultStyles) {
      const fill = new Fill_default({
        color: "rgba(255,255,255,0.4)"
      });
      const stroke = new Stroke_default({
        color: "#3399CC",
        width: 1.25
      });
      defaultStyles = [
        new Style({
          image: new Circle_default({
            fill,
            stroke,
            radius: 5
          }),
          fill,
          stroke
        })
      ];
    }
    return defaultStyles;
  }
  function defaultGeometryFunction(feature) {
    return feature.getGeometry();
  }
  var Style_default = Style;

  // node_modules/ol/style/Text.js
  var DEFAULT_FILL_COLOR = "#333";
  var Text = class _Text {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.font_ = options.font;
      this.rotation_ = options.rotation;
      this.rotateWithView_ = options.rotateWithView;
      this.keepUpright_ = options.keepUpright;
      this.scale_ = options.scale;
      this.scaleArray_ = toSize(options.scale !== void 0 ? options.scale : 1);
      this.text_ = options.text;
      this.textAlign_ = options.textAlign;
      this.justify_ = options.justify;
      this.repeat_ = options.repeat;
      this.textBaseline_ = options.textBaseline;
      this.fill_ = options.fill !== void 0 ? options.fill : new Fill_default({ color: DEFAULT_FILL_COLOR });
      this.maxAngle_ = options.maxAngle !== void 0 ? options.maxAngle : Math.PI / 4;
      this.placement_ = options.placement !== void 0 ? options.placement : "point";
      this.overflow_ = !!options.overflow;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.offsetX_ = options.offsetX !== void 0 ? options.offsetX : 0;
      this.offsetY_ = options.offsetY !== void 0 ? options.offsetY : 0;
      this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
      this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
      this.padding_ = options.padding === void 0 ? null : options.padding;
      this.declutterMode_ = options.declutterMode;
    }
    /**
     * Clones the style.
     * @return {Text} The cloned style.
     * @api
     */
    clone() {
      const scale4 = this.getScale();
      return new _Text({
        font: this.getFont(),
        placement: this.getPlacement(),
        repeat: this.getRepeat(),
        maxAngle: this.getMaxAngle(),
        overflow: this.getOverflow(),
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        keepUpright: this.getKeepUpright(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        text: this.getText(),
        textAlign: this.getTextAlign(),
        justify: this.getJustify(),
        textBaseline: this.getTextBaseline(),
        fill: this.getFill() instanceof Fill_default ? this.getFill().clone() : this.getFill(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
        backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
        padding: this.getPadding() || void 0,
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the `overflow` configuration.
     * @return {boolean} Let text overflow the length of the path they follow.
     * @api
     */
    getOverflow() {
      return this.overflow_;
    }
    /**
     * Get the font name.
     * @return {string|undefined} Font.
     * @api
     */
    getFont() {
      return this.font_;
    }
    /**
     * Get the maximum angle between adjacent characters.
     * @return {number} Angle in radians.
     * @api
     */
    getMaxAngle() {
      return this.maxAngle_;
    }
    /**
     * Get the label placement.
     * @return {TextPlacement} Text placement.
     * @api
     */
    getPlacement() {
      return this.placement_;
    }
    /**
     * Get the repeat interval of the text.
     * @return {number|undefined} Repeat interval in pixels.
     * @api
     */
    getRepeat() {
      return this.repeat_;
    }
    /**
     * Get the x-offset for the text.
     * @return {number} Horizontal text offset.
     * @api
     */
    getOffsetX() {
      return this.offsetX_;
    }
    /**
     * Get the y-offset for the text.
     * @return {number} Vertical text offset.
     * @api
     */
    getOffsetY() {
      return this.offsetY_;
    }
    /**
     * Get the fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Determine whether the text rotates with the map.
     * @return {boolean|undefined} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Determine whether the text can be rendered upside down.
     * @return {boolean|undefined} Keep text upright.
     * @api
     */
    getKeepUpright() {
      return this.keepUpright_;
    }
    /**
     * Get the text rotation.
     * @return {number|undefined} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the text scale.
     * @return {number|import("../size.js").Size|undefined} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Get the text to be rendered.
     * @return {string|Array<string>|undefined} Text.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Get the text alignment.
     * @return {CanvasTextAlign|undefined} Text align.
     * @api
     */
    getTextAlign() {
      return this.textAlign_;
    }
    /**
     * Get the justification.
     * @return {TextJustify|undefined} Justification.
     * @api
     */
    getJustify() {
      return this.justify_;
    }
    /**
     * Get the text baseline.
     * @return {CanvasTextBaseline|undefined} Text baseline.
     * @api
     */
    getTextBaseline() {
      return this.textBaseline_;
    }
    /**
     * Get the background fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getBackgroundFill() {
      return this.backgroundFill_;
    }
    /**
     * Get the background stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getBackgroundStroke() {
      return this.backgroundStroke_;
    }
    /**
     * Get the padding for the text.
     * @return {Array<number>|null} Padding.
     * @api
     */
    getPadding() {
      return this.padding_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Set the `overflow` property.
     *
     * @param {boolean} overflow Let text overflow the path that it follows.
     * @api
     */
    setOverflow(overflow) {
      this.overflow_ = overflow;
    }
    /**
     * Set the font.
     *
     * @param {string|undefined} font Font.
     * @api
     */
    setFont(font) {
      this.font_ = font;
    }
    /**
     * Set the maximum angle between adjacent characters.
     *
     * @param {number} maxAngle Angle in radians.
     * @api
     */
    setMaxAngle(maxAngle) {
      this.maxAngle_ = maxAngle;
    }
    /**
     * Set the x offset.
     *
     * @param {number} offsetX Horizontal text offset.
     * @api
     */
    setOffsetX(offsetX) {
      this.offsetX_ = offsetX;
    }
    /**
     * Set the y offset.
     *
     * @param {number} offsetY Vertical text offset.
     * @api
     */
    setOffsetY(offsetY) {
      this.offsetY_ = offsetY;
    }
    /**
     * Set the text placement.
     *
     * @param {TextPlacement} placement Placement.
     * @api
     */
    setPlacement(placement) {
      this.placement_ = placement;
    }
    /**
     * Set the repeat interval of the text.
     * @param {number|undefined} [repeat] Repeat interval in pixels.
     * @api
     */
    setRepeat(repeat) {
      this.repeat_ = repeat;
    }
    /**
     * Set whether to rotate the text with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(rotateWithView) {
      this.rotateWithView_ = rotateWithView;
    }
    /**
     * Set whether the text can be rendered upside down.
     *
     * @param {boolean} keepUpright Keep text upright.
     * @api
     */
    setKeepUpright(keepUpright) {
      this.keepUpright_ = keepUpright;
    }
    /**
     * Set the fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
    }
    /**
     * Set the rotation.
     *
     * @param {number|undefined} rotation Rotation.
     * @api
     */
    setRotation(rotation) {
      this.rotation_ = rotation;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size|undefined} scale Scale.
     * @api
     */
    setScale(scale4) {
      this.scale_ = scale4;
      this.scaleArray_ = toSize(scale4 !== void 0 ? scale4 : 1);
    }
    /**
     * Set the stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
    }
    /**
     * Set the text.
     *
     * @param {string|Array<string>|undefined} text Text.
     * @api
     */
    setText(text) {
      this.text_ = text;
    }
    /**
     * Set the text alignment.
     *
     * @param {CanvasTextAlign|undefined} textAlign Text align.
     * @api
     */
    setTextAlign(textAlign) {
      this.textAlign_ = textAlign;
    }
    /**
     * Set the justification.
     *
     * @param {TextJustify|undefined} justify Justification.
     * @api
     */
    setJustify(justify) {
      this.justify_ = justify;
    }
    /**
     * Set the text baseline.
     *
     * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
     * @api
     */
    setTextBaseline(textBaseline) {
      this.textBaseline_ = textBaseline;
    }
    /**
     * Set the background fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setBackgroundFill(fill) {
      this.backgroundFill_ = fill;
    }
    /**
     * Set the background stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setBackgroundStroke(stroke) {
      this.backgroundStroke_ = stroke;
    }
    /**
     * Set the padding (`[top, right, bottom, left]`).
     *
     * @param {Array<number>|null} padding Padding.
     * @api
     */
    setPadding(padding) {
      this.padding_ = padding;
    }
  };
  var Text_default = Text;

  // node_modules/ol/render/canvas/style.js
  function always2(context) {
    return true;
  }
  function rulesToStyleFunction(rules) {
    const parsingContext = newParsingContext();
    const evaluator = buildRuleSet(rules, parsingContext);
    const evaluationContext = newEvaluationContext();
    return function(feature, resolution) {
      evaluationContext.properties = feature.getPropertiesInternal();
      evaluationContext.resolution = resolution;
      if (parsingContext.featureId) {
        const id = feature.getId();
        if (id !== void 0) {
          evaluationContext.featureId = id;
        } else {
          evaluationContext.featureId = null;
        }
      }
      if (parsingContext.geometryType) {
        evaluationContext.geometryType = computeGeometryType(
          feature.getGeometry()
        );
      }
      return evaluator(evaluationContext);
    };
  }
  function flatStylesToStyleFunction(flatStyles) {
    const parsingContext = newParsingContext();
    const length = flatStyles.length;
    const evaluators = new Array(length);
    for (let i = 0; i < length; ++i) {
      evaluators[i] = buildStyle(flatStyles[i], parsingContext);
    }
    const evaluationContext = newEvaluationContext();
    const styles = new Array(length);
    return function(feature, resolution) {
      evaluationContext.properties = feature.getPropertiesInternal();
      evaluationContext.resolution = resolution;
      if (parsingContext.featureId) {
        const id = feature.getId();
        if (id !== void 0) {
          evaluationContext.featureId = id;
        } else {
          evaluationContext.featureId = null;
        }
      }
      let nonNullCount = 0;
      for (let i = 0; i < length; ++i) {
        const style = evaluators[i](evaluationContext);
        if (style) {
          styles[nonNullCount] = style;
          nonNullCount += 1;
        }
      }
      styles.length = nonNullCount;
      return styles;
    };
  }
  function buildRuleSet(rules, context) {
    const length = rules.length;
    const compiledRules = new Array(length);
    for (let i = 0; i < length; ++i) {
      const rule = rules[i];
      const filter = "filter" in rule ? buildExpression(rule.filter, BooleanType, context) : always2;
      let styles;
      if (Array.isArray(rule.style)) {
        const styleLength = rule.style.length;
        styles = new Array(styleLength);
        for (let j = 0; j < styleLength; ++j) {
          styles[j] = buildStyle(rule.style[j], context);
        }
      } else {
        styles = [buildStyle(rule.style, context)];
      }
      compiledRules[i] = { filter, styles };
    }
    return function(context2) {
      const styles = [];
      let someMatched = false;
      for (let i = 0; i < length; ++i) {
        const filterEvaluator = compiledRules[i].filter;
        if (!filterEvaluator(context2)) {
          continue;
        }
        if (rules[i].else && someMatched) {
          continue;
        }
        someMatched = true;
        for (const styleEvaluator of compiledRules[i].styles) {
          const style = styleEvaluator(context2);
          if (!style) {
            continue;
          }
          styles.push(style);
        }
      }
      return styles;
    };
  }
  function buildStyle(flatStyle, context) {
    const evaluateFill = buildFill(flatStyle, "", context);
    const evaluateStroke = buildStroke(flatStyle, "", context);
    const evaluateText = buildText(flatStyle, context);
    const evaluateImage = buildImage(flatStyle, context);
    const evaluateZIndex = numberEvaluator(flatStyle, "z-index", context);
    if (!evaluateFill && !evaluateStroke && !evaluateText && !evaluateImage && !isEmpty2(flatStyle)) {
      throw new Error(
        "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(flatStyle)
      );
    }
    const style = new Style_default();
    return function(context2) {
      let empty = true;
      if (evaluateFill) {
        const fill = evaluateFill(context2);
        if (fill) {
          empty = false;
        }
        style.setFill(fill);
      }
      if (evaluateStroke) {
        const stroke = evaluateStroke(context2);
        if (stroke) {
          empty = false;
        }
        style.setStroke(stroke);
      }
      if (evaluateText) {
        const text = evaluateText(context2);
        if (text) {
          empty = false;
        }
        style.setText(text);
      }
      if (evaluateImage) {
        const image = evaluateImage(context2);
        if (image) {
          empty = false;
        }
        style.setImage(image);
      }
      if (evaluateZIndex) {
        style.setZIndex(evaluateZIndex(context2));
      }
      if (empty) {
        return null;
      }
      return style;
    };
  }
  function buildFill(flatStyle, prefix, context) {
    let evaluateColor;
    if (prefix + "fill-pattern-src" in flatStyle) {
      evaluateColor = patternEvaluator(flatStyle, prefix + "fill-", context);
    } else {
      if (flatStyle[prefix + "fill-color"] === "none") {
        return (context2) => null;
      }
      evaluateColor = colorLikeEvaluator(
        flatStyle,
        prefix + "fill-color",
        context
      );
    }
    if (!evaluateColor) {
      return null;
    }
    const fill = new Fill_default();
    return function(context2) {
      const color = evaluateColor(context2);
      if (color === NO_COLOR) {
        return null;
      }
      fill.setColor(color);
      return fill;
    };
  }
  function buildStroke(flatStyle, prefix, context) {
    const evaluateWidth = numberEvaluator(
      flatStyle,
      prefix + "stroke-width",
      context
    );
    const evaluateColor = colorLikeEvaluator(
      flatStyle,
      prefix + "stroke-color",
      context
    );
    if (!evaluateWidth && !evaluateColor) {
      return null;
    }
    const evaluateLineCap = stringEvaluator(
      flatStyle,
      prefix + "stroke-line-cap",
      context
    );
    const evaluateLineJoin = stringEvaluator(
      flatStyle,
      prefix + "stroke-line-join",
      context
    );
    const evaluateLineDash = numberArrayEvaluator(
      flatStyle,
      prefix + "stroke-line-dash",
      context
    );
    const evaluateLineDashOffset = numberEvaluator(
      flatStyle,
      prefix + "stroke-line-dash-offset",
      context
    );
    const evaluateMiterLimit = numberEvaluator(
      flatStyle,
      prefix + "stroke-miter-limit",
      context
    );
    const evaluateOffset = numberEvaluator(
      flatStyle,
      prefix + "stroke-offset",
      context
    );
    const stroke = new Stroke_default();
    return function(context2) {
      if (evaluateColor) {
        const color = evaluateColor(context2);
        if (color === NO_COLOR) {
          return null;
        }
        stroke.setColor(color);
      }
      if (evaluateWidth) {
        stroke.setWidth(evaluateWidth(context2));
      }
      if (evaluateLineCap) {
        const lineCap = evaluateLineCap(context2);
        if (lineCap !== "butt" && lineCap !== "round" && lineCap !== "square") {
          throw new Error("Expected butt, round, or square line cap");
        }
        stroke.setLineCap(lineCap);
      }
      if (evaluateLineJoin) {
        const lineJoin = evaluateLineJoin(context2);
        if (lineJoin !== "bevel" && lineJoin !== "round" && lineJoin !== "miter") {
          throw new Error("Expected bevel, round, or miter line join");
        }
        stroke.setLineJoin(lineJoin);
      }
      if (evaluateLineDash) {
        stroke.setLineDash(evaluateLineDash(context2));
      }
      if (evaluateLineDashOffset) {
        stroke.setLineDashOffset(evaluateLineDashOffset(context2));
      }
      if (evaluateMiterLimit) {
        stroke.setMiterLimit(evaluateMiterLimit(context2));
      }
      if (evaluateOffset) {
        stroke.setOffset(evaluateOffset(context2));
      }
      return stroke;
    };
  }
  function buildText(flatStyle, context) {
    const prefix = "text-";
    const evaluateValue = stringEvaluator(flatStyle, prefix + "value", context);
    if (!evaluateValue) {
      return null;
    }
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateBackgroundFill = buildFill(
      flatStyle,
      prefix + "background-",
      context
    );
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateBackgroundStroke = buildStroke(
      flatStyle,
      prefix + "background-",
      context
    );
    const evaluateFont = stringEvaluator(flatStyle, prefix + "font", context);
    const evaluateMaxAngle = numberEvaluator(
      flatStyle,
      prefix + "max-angle",
      context
    );
    const evaluateOffsetX = numberEvaluator(
      flatStyle,
      prefix + "offset-x",
      context
    );
    const evaluateOffsetY = numberEvaluator(
      flatStyle,
      prefix + "offset-y",
      context
    );
    const evaluateOverflow = booleanEvaluator(
      flatStyle,
      prefix + "overflow",
      context
    );
    const evaluatePlacement = stringEvaluator(
      flatStyle,
      prefix + "placement",
      context
    );
    const evaluateRepeat = numberEvaluator(flatStyle, prefix + "repeat", context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateAlign = stringEvaluator(flatStyle, prefix + "align", context);
    const evaluateJustify = stringEvaluator(
      flatStyle,
      prefix + "justify",
      context
    );
    const evaluateBaseline = stringEvaluator(
      flatStyle,
      prefix + "baseline",
      context
    );
    const evaluateKeepUpright = booleanEvaluator(
      flatStyle,
      prefix + "keep-upright",
      context
    );
    const evaluatePadding = numberArrayEvaluator(
      flatStyle,
      prefix + "padding",
      context
    );
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const text = new Text_default({ declutterMode });
    return function(context2) {
      text.setText(evaluateValue(context2));
      if (evaluateFill) {
        text.setFill(evaluateFill(context2));
      }
      if (evaluateBackgroundFill) {
        text.setBackgroundFill(evaluateBackgroundFill(context2));
      }
      if (evaluateStroke) {
        text.setStroke(evaluateStroke(context2));
      }
      if (evaluateBackgroundStroke) {
        text.setBackgroundStroke(evaluateBackgroundStroke(context2));
      }
      if (evaluateFont) {
        text.setFont(evaluateFont(context2));
      }
      if (evaluateMaxAngle) {
        text.setMaxAngle(evaluateMaxAngle(context2));
      }
      if (evaluateOffsetX) {
        text.setOffsetX(evaluateOffsetX(context2));
      }
      if (evaluateOffsetY) {
        text.setOffsetY(evaluateOffsetY(context2));
      }
      if (evaluateOverflow) {
        text.setOverflow(evaluateOverflow(context2));
      }
      if (evaluatePlacement) {
        const placement = evaluatePlacement(context2);
        if (placement !== "point" && placement !== "line") {
          throw new Error("Expected point or line for text-placement");
        }
        text.setPlacement(placement);
      }
      if (evaluateRepeat) {
        text.setRepeat(evaluateRepeat(context2));
      }
      if (evaluateScale) {
        text.setScale(evaluateScale(context2));
      }
      if (evaluateRotateWithView) {
        text.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateRotation) {
        text.setRotation(evaluateRotation(context2));
      }
      if (evaluateAlign) {
        const textAlign = evaluateAlign(context2);
        if (textAlign !== "left" && textAlign !== "center" && textAlign !== "right" && textAlign !== "end" && textAlign !== "start") {
          throw new Error(
            "Expected left, right, center, start, or end for text-align"
          );
        }
        text.setTextAlign(textAlign);
      }
      if (evaluateJustify) {
        const justify = evaluateJustify(context2);
        if (justify !== "left" && justify !== "right" && justify !== "center") {
          throw new Error("Expected left, right, or center for text-justify");
        }
        text.setJustify(justify);
      }
      if (evaluateBaseline) {
        const textBaseline = evaluateBaseline(context2);
        if (textBaseline !== "bottom" && textBaseline !== "top" && textBaseline !== "middle" && textBaseline !== "alphabetic" && textBaseline !== "hanging") {
          throw new Error(
            "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
          );
        }
        text.setTextBaseline(textBaseline);
      }
      if (evaluatePadding) {
        text.setPadding(evaluatePadding(context2));
      }
      if (evaluateKeepUpright) {
        text.setKeepUpright(evaluateKeepUpright(context2));
      }
      return text;
    };
  }
  function buildImage(flatStyle, context) {
    if ("icon-src" in flatStyle) {
      return buildIcon(flatStyle, context);
    }
    if ("shape-points" in flatStyle) {
      return buildShape(flatStyle, context);
    }
    if ("circle-radius" in flatStyle) {
      return buildCircle(flatStyle, context);
    }
    return null;
  }
  function buildIcon(flatStyle, context) {
    const prefix = "icon-";
    const srcName = prefix + "src";
    const src = requireString(flatStyle[srcName], srcName);
    const evaluateAnchor = coordinateEvaluator(
      flatStyle,
      prefix + "anchor",
      context
    );
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateOpacity = numberEvaluator(
      flatStyle,
      prefix + "opacity",
      context
    );
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const anchorOrigin = optionalIconOrigin(flatStyle, prefix + "anchor-origin");
    const anchorXUnits = optionalIconAnchorUnits(
      flatStyle,
      prefix + "anchor-x-units"
    );
    const anchorYUnits = optionalIconAnchorUnits(
      flatStyle,
      prefix + "anchor-y-units"
    );
    const colorValue = getExpressionValue(flatStyle, prefix + "color");
    let color;
    let evaluateColor = null;
    if (colorValue !== void 0) {
      const isColorExpression = Array.isArray(colorValue) && colorValue.length > 0 && typeof colorValue[0] === "string";
      if (isColorExpression) {
        evaluateColor = colorLikeEvaluator(flatStyle, prefix + "color", context);
      } else {
        color = requireColorLike(colorValue, prefix + "color");
      }
    }
    const crossOrigin = optionalString(flatStyle, prefix + "cross-origin");
    const offset = optionalNumberArray(flatStyle, prefix + "offset");
    const offsetOrigin = optionalIconOrigin(flatStyle, prefix + "offset-origin");
    const width = optionalNumber(flatStyle, prefix + "width");
    const height = optionalNumber(flatStyle, prefix + "height");
    const size = optionalSize(flatStyle, prefix + "size");
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const iconOptions = {
      src,
      anchorOrigin,
      anchorXUnits,
      anchorYUnits,
      crossOrigin,
      offset,
      offsetOrigin,
      height,
      width,
      size,
      declutterMode
    };
    let icon = null;
    return function(context2) {
      if (!icon) {
        const initialColor = evaluateColor ? evaluateColor(context2) : color;
        icon = new Icon_default(
          initialColor !== void 0 ? Object.assign({}, iconOptions, { color: initialColor }) : Object.assign({}, iconOptions)
        );
      } else if (evaluateColor) {
        icon.setColor(evaluateColor(context2));
      }
      if (evaluateOpacity) {
        icon.setOpacity(evaluateOpacity(context2));
      }
      if (evaluateDisplacement) {
        icon.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        icon.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        icon.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        icon.setScale(evaluateScale(context2));
      }
      if (evaluateAnchor) {
        icon.setAnchor(evaluateAnchor(context2));
      }
      return icon;
    };
  }
  function buildShape(flatStyle, context) {
    const prefix = "shape-";
    const pointsName = prefix + "points";
    const radiusName = prefix + "radius";
    const points = requireNumber(flatStyle[pointsName], pointsName);
    if (!(radiusName in flatStyle)) {
      throw new Error(`Expected a number for ${radiusName}`);
    }
    const evaluateRadius = numberEvaluator(flatStyle, radiusName, context);
    const initialRadius = typeof flatStyle[radiusName] === "number" ? flatStyle[radiusName] : 5;
    const radius2Name = prefix + "radius2";
    const evaluateRadius2 = numberEvaluator(flatStyle, radius2Name, context);
    const initialRadius2 = typeof flatStyle[radius2Name] === "number" ? flatStyle[radius2Name] : void 0;
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const angle = optionalNumber(flatStyle, prefix + "angle");
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const shape = new RegularShape_default({
      points,
      radius: initialRadius,
      radius2: initialRadius2,
      angle,
      declutterMode
    });
    return function(context2) {
      if (evaluateRadius) {
        shape.setRadius(evaluateRadius(context2));
      }
      if (evaluateRadius2) {
        shape.setRadius2(evaluateRadius2(context2));
      }
      if (evaluateFill) {
        shape.setFill(evaluateFill(context2));
      }
      if (evaluateStroke) {
        shape.setStroke(evaluateStroke(context2));
      }
      if (evaluateDisplacement) {
        shape.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        shape.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        shape.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        shape.setScale(evaluateScale(context2));
      }
      return shape;
    };
  }
  function buildCircle(flatStyle, context) {
    const prefix = "circle-";
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateRadius = numberEvaluator(flatStyle, prefix + "radius", context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const circle = new Circle_default({
      radius: 5,
      // this is arbitrary, but required - the evaluated radius is used below
      declutterMode
    });
    return function(context2) {
      if (evaluateRadius) {
        circle.setRadius(evaluateRadius(context2));
      }
      if (evaluateFill) {
        circle.setFill(evaluateFill(context2));
      }
      if (evaluateStroke) {
        circle.setStroke(evaluateStroke(context2));
      }
      if (evaluateDisplacement) {
        circle.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        circle.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        circle.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        circle.setScale(evaluateScale(context2));
      }
      return circle;
    };
  }
  function getExpressionValue(flatStyle, name) {
    if (!(name in flatStyle)) {
      return void 0;
    }
    const value = flatStyle[name];
    return value === void 0 ? void 0 : value;
  }
  function numberEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return void 0;
    }
    const evaluator = buildExpression(encoded, NumberType, context);
    return function(context2) {
      return requireNumber(evaluator(context2), name);
    };
  }
  function stringEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, StringType, context);
    return function(context2) {
      return requireString(evaluator(context2), name);
    };
  }
  function patternEvaluator(flatStyle, prefix, context) {
    const srcEvaluator = stringEvaluator(
      flatStyle,
      prefix + "pattern-src",
      context
    );
    const offsetEvaluator = sizeEvaluator(
      flatStyle,
      prefix + "pattern-offset",
      context
    );
    const patternSizeEvaluator = sizeEvaluator(
      flatStyle,
      prefix + "pattern-size",
      context
    );
    const colorEvaluator = colorLikeEvaluator(
      flatStyle,
      prefix + "color",
      context
    );
    return function(context2) {
      return {
        src: srcEvaluator(context2),
        offset: offsetEvaluator && offsetEvaluator(context2),
        size: patternSizeEvaluator && patternSizeEvaluator(context2),
        color: colorEvaluator && colorEvaluator(context2)
      };
    };
  }
  function booleanEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, BooleanType, context);
    return function(context2) {
      const value = evaluator(context2);
      if (typeof value !== "boolean") {
        throw new Error(`Expected a boolean for ${name}`);
      }
      return value;
    };
  }
  function colorLikeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, ColorType, context);
    return function(context2) {
      return requireColorLike(evaluator(context2), name);
    };
  }
  function numberArrayEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    if (Array.isArray(encoded) && (encoded.length === 0 || typeof encoded[0] !== "string")) {
      const evaluators = encoded.map((value, index) => {
        if (typeof value === "number") {
          return () => value;
        }
        const evaluator2 = buildExpression(value, NumberType, context);
        return function(context2) {
          return requireNumber(evaluator2(context2), `${name}[${index}]`);
        };
      });
      return function(context2) {
        const array = new Array(evaluators.length);
        for (let i = 0; i < evaluators.length; ++i) {
          array[i] = evaluators[i](context2);
        }
        return array;
      };
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      return requireNumberArray(evaluator(context2), name);
    };
  }
  function coordinateEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      const array = requireNumberArray(evaluator(context2), name);
      if (array.length !== 2) {
        throw new Error(`Expected two numbers for ${name}`);
      }
      return array;
    };
  }
  function sizeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      return requireSize(evaluator(context2), name);
    };
  }
  function sizeLikeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(
      encoded,
      NumberArrayType | NumberType,
      context
    );
    return function(context2) {
      return requireSizeLike(evaluator(context2), name);
    };
  }
  function optionalNumber(flatStyle, property) {
    const value = flatStyle[property];
    if (value === void 0) {
      return void 0;
    }
    if (typeof value !== "number") {
      throw new Error(`Expected a number for ${property}`);
    }
    return value;
  }
  function optionalSize(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded === "number") {
      return toSize(encoded);
    }
    if (!Array.isArray(encoded)) {
      throw new Error(`Expected a number or size array for ${property}`);
    }
    if (encoded.length !== 2 || typeof encoded[0] !== "number" || typeof encoded[1] !== "number") {
      throw new Error(`Expected a number or size array for ${property}`);
    }
    return encoded;
  }
  function optionalString(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    return encoded;
  }
  function optionalIconOrigin(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (encoded !== "bottom-left" && encoded !== "bottom-right" && encoded !== "top-left" && encoded !== "top-right") {
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${property}`
      );
    }
    return encoded;
  }
  function optionalIconAnchorUnits(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (encoded !== "pixels" && encoded !== "fraction") {
      throw new Error(`Expected pixels or fraction for ${property}`);
    }
    return encoded;
  }
  function optionalNumberArray(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    return requireNumberArray(encoded, property);
  }
  function optionalDeclutterMode(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    if (encoded !== "declutter" && encoded !== "obstacle" && encoded !== "none") {
      throw new Error(`Expected declutter, obstacle, or none for ${property}`);
    }
    return encoded;
  }
  function requireNumberArray(value, property) {
    if (!Array.isArray(value)) {
      throw new Error(`Expected an array for ${property}`);
    }
    const length = value.length;
    for (let i = 0; i < length; ++i) {
      if (typeof value[i] !== "number") {
        throw new Error(`Expected an array of numbers for ${property}`);
      }
    }
    return value;
  }
  function requireString(value, property) {
    if (typeof value !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    return value;
  }
  function requireNumber(value, property) {
    if (typeof value !== "number") {
      throw new Error(`Expected a number for ${property}`);
    }
    return value;
  }
  function requireColorLike(value, property) {
    if (typeof value === "string") {
      return value;
    }
    const array = requireNumberArray(value, property);
    const length = array.length;
    if (length < 3 || length > 4) {
      throw new Error(`Expected a color with 3 or 4 values for ${property}`);
    }
    return array;
  }
  function requireSize(value, property) {
    const size = requireNumberArray(value, property);
    if (size.length !== 2) {
      throw new Error(`Expected an array of two numbers for ${property}`);
    }
    return size;
  }
  function requireSizeLike(value, property) {
    if (typeof value === "number") {
      return value;
    }
    return requireSize(value, property);
  }

  // node_modules/ol/layer/BaseVector.js
  var Property3 = {
    RENDER_ORDER: "renderOrder"
  };
  var BaseVectorLayer = class extends Layer_default {
    /**
     * @param {Options<FeatureType, VectorSourceType>} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const baseOptions = Object.assign({}, options);
      delete baseOptions.style;
      delete baseOptions.renderBuffer;
      delete baseOptions.updateWhileAnimating;
      delete baseOptions.updateWhileInteracting;
      super(baseOptions);
      this.declutter_ = options.declutter ? String(options.declutter) : void 0;
      this.renderBuffer_ = options.renderBuffer !== void 0 ? options.renderBuffer : 100;
      this.style_ = null;
      this.styleFunction_ = void 0;
      this.setStyle(options.style);
      this.updateWhileAnimating_ = options.updateWhileAnimating !== void 0 ? options.updateWhileAnimating : false;
      this.updateWhileInteracting_ = options.updateWhileInteracting !== void 0 ? options.updateWhileInteracting : false;
    }
    /**
     * @return {string} Declutter group.
     * @override
     */
    getDeclutter() {
      return this.declutter_;
    }
    /**
     * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
     * that resolves with an array of features. The array will either contain the topmost feature
     * when a hit was detected, or it will be empty.
     *
     * The hit detection algorithm used for this method is optimized for performance, but is less
     * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
     * Text is not considered, and icons are only represented by their bounding box instead of the exact
     * image.
     *
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with an array of features.
     * @api
     * @override
     */
    getFeatures(pixel) {
      return super.getFeatures(pixel);
    }
    /**
     * @return {number|undefined} Render buffer.
     */
    getRenderBuffer() {
      return this.renderBuffer_;
    }
    /**
     * @return {import("../render.js").OrderFunction|null|undefined} Render order.
     */
    getRenderOrder() {
      return (
        /** @type {import("../render.js").OrderFunction|null|undefined} */
        this.get(Property3.RENDER_ORDER)
      );
    }
    /**
     * Get the style for features.  This returns whatever was passed to the `style`
     * option at construction or to the `setStyle` method.
     * @return {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null|undefined} Layer style.
     * @api
     */
    getStyle() {
      return this.style_;
    }
    /**
     * Get the style function.
     * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
     * @api
     */
    getStyleFunction() {
      return this.styleFunction_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     animating.
     */
    getUpdateWhileAnimating() {
      return this.updateWhileAnimating_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     interacting.
     */
    getUpdateWhileInteracting() {
      return this.updateWhileInteracting_;
    }
    /**
     * Render declutter items for this layer
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     * @override
     */
    renderDeclutter(frameState, layerState) {
      const declutterGroup = this.getDeclutter();
      if (declutterGroup in frameState.declutter === false) {
        frameState.declutter[declutterGroup] = new RBush(9);
      }
      this.getRenderer().renderDeclutter(frameState, layerState);
    }
    /**
     * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
     *     Render order.
     */
    setRenderOrder(renderOrder) {
      this.set(Property3.RENDER_ORDER, renderOrder);
    }
    /**
     * Set the style for features.  This can be a single style object, an array
     * of styles, or a function that takes a feature and resolution and returns
     * an array of styles. If set to `null`, the layer has no style (a `null` style),
     * so only features that have their own styles will be rendered in the layer. Call
     * `setStyle()` without arguments to reset to the default style. See
     * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
     *
     * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
     * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
     * ```js
     * vectorLayer.setStyle({
     *   "fill-color": "yellow",
     *   "stroke-color": "black",
     *   "stroke-width": 4
     * })
     * ```
     *
     * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
     * @api
     */
    setStyle(style) {
      this.style_ = style === void 0 ? createDefaultStyle : style;
      const styleLike = toStyleLike(style);
      this.styleFunction_ = style === null ? void 0 : toFunction(styleLike);
      this.changed();
    }
    /**
     * @param {boolean|string|number} declutter Declutter images and text.
     * @api
     */
    setDeclutter(declutter) {
      this.declutter_ = declutter ? String(declutter) : void 0;
      this.changed();
    }
  };
  function toStyleLike(style) {
    if (style === void 0) {
      return createDefaultStyle;
    }
    if (!style) {
      return null;
    }
    if (typeof style === "function") {
      return style;
    }
    if (style instanceof Style_default) {
      return style;
    }
    if (!Array.isArray(style)) {
      return flatStylesToStyleFunction([style]);
    }
    if (style.length === 0) {
      return [];
    }
    const length = style.length;
    const first = style[0];
    if (first instanceof Style_default) {
      const styles = new Array(length);
      for (let i = 0; i < length; ++i) {
        const candidate = style[i];
        if (!(candidate instanceof Style_default)) {
          throw new Error("Expected a list of style instances");
        }
        styles[i] = candidate;
      }
      return styles;
    }
    if ("style" in first) {
      const rules = new Array(length);
      for (let i = 0; i < length; ++i) {
        const candidate = style[i];
        if (!("style" in candidate)) {
          throw new Error("Expected a list of rules with a style property");
        }
        rules[i] = candidate;
      }
      return rulesToStyleFunction(rules);
    }
    const flatStyles = (
      /** @type {Array<import("../style/flat.js").FlatStyle>} */
      style
    );
    return flatStylesToStyleFunction(flatStyles);
  }
  var BaseVector_default = BaseVectorLayer;

  // node_modules/ol/render/Event.js
  var RenderEvent = class extends Event_default {
    /**
     * @param {import("./EventType.js").default} type Type.
     * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
     *     CSS pixels to rendered pixels.
     * @param {import("../Map.js").FrameState} [frameState] Frame state.
     * @param {?(CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
     */
    constructor(type, inversePixelTransform, frameState, context) {
      super(type);
      this.inversePixelTransform = inversePixelTransform;
      this.frameState = frameState;
      this.context = context;
    }
  };
  var Event_default2 = RenderEvent;

  // node_modules/ol/renderer/Map.js
  var MapRenderer = class extends Disposable_default {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(map) {
      super();
      this.map_ = map;
    }
    /**
     * @abstract
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    dispatchRenderEvent(type, frameState) {
      abstract();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @protected
     */
    calculateMatrices2D(frameState) {
      const viewState = frameState.viewState;
      const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
      const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
      compose(
        coordinateToPixelTransform,
        frameState.size[0] / 2,
        frameState.size[1] / 2,
        1 / viewState.resolution,
        -1 / viewState.resolution,
        -viewState.rotation,
        -viewState.center[0],
        -viewState.center[1]
      );
      makeInverse(pixelToCoordinateTransform, coordinateToPixelTransform);
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {S} thisArg Value to use as `this` when executing `callback`.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
     * @return {T|undefined} Callback result.
     * @template S,T,U
     */
    forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
      let result;
      const viewState = frameState.viewState;
      function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
        return callback.call(thisArg, feature, managed ? layer : null, geometry);
      }
      const projection = viewState.projection;
      const translatedCoordinate = wrapX2(coordinate.slice(), projection);
      const offsets = [[0, 0]];
      if (projection.canWrapX() && checkWrapped) {
        const projectionExtent = projection.getExtent();
        const worldWidth = getWidth(projectionExtent);
        offsets.push([-worldWidth, 0], [worldWidth, 0]);
      }
      const layerStates = frameState.layerStatesArray;
      const numLayers = layerStates.length;
      const matches = (
        /** @type {Array<HitMatch<T>>} */
        []
      );
      const tmpCoord = [];
      for (let i = 0; i < offsets.length; i++) {
        for (let j = numLayers - 1; j >= 0; --j) {
          const layerState = layerStates[j];
          const layer = layerState.layer;
          if (layer.hasRenderer() && inView(layerState, viewState) && layerFilter.call(thisArg2, layer)) {
            const layerRenderer = layer.getRenderer();
            const source = layer.getSource();
            if (layerRenderer && source) {
              const coordinates2 = source.getWrapX() ? translatedCoordinate : coordinate;
              const callback2 = forEachFeatureAtCoordinate.bind(
                null,
                layerState.managed
              );
              tmpCoord[0] = coordinates2[0] + offsets[i][0];
              tmpCoord[1] = coordinates2[1] + offsets[i][1];
              result = layerRenderer.forEachFeatureAtCoordinate(
                tmpCoord,
                frameState,
                hitTolerance,
                callback2,
                matches
              );
            }
            if (result) {
              return result;
            }
          }
        }
      }
      if (matches.length === 0) {
        return void 0;
      }
      const order = 1 / matches.length;
      matches.forEach((m, i) => m.distanceSq += i * order);
      matches.sort((a, b) => a.distanceSq - b.distanceSq);
      matches.some((m) => {
        return result = m.callback(m.feature, m.layer, m.geometry);
      });
      return result;
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
     * @return {boolean} Is there a feature at the given coordinate?
     * @template U
     */
    hasFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
      const hasFeature = this.forEachFeatureAtCoordinate(
        coordinate,
        frameState,
        hitTolerance,
        checkWrapped,
        TRUE,
        this,
        layerFilter,
        thisArg
      );
      return hasFeature !== void 0;
    }
    /**
     * @return {import("../Map.js").default} Map.
     */
    getMap() {
      return this.map_;
    }
    /**
     * Render.
     * @abstract
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    renderFrame(frameState) {
      abstract();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    scheduleExpireIconCache(frameState) {
      if (shared.canExpireCache()) {
        frameState.postRenderFunctions.push(expireIconCache);
      }
    }
  };
  function expireIconCache(map, frameState) {
    shared.expire();
  }
  var Map_default = MapRenderer;

  // node_modules/ol/renderer/Composite.js
  var CompositeMapRenderer = class extends Map_default {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(map) {
      super(map);
      this.fontChangeListenerKey_ = listen(
        checkedFonts,
        ObjectEventType_default.PROPERTYCHANGE,
        map.redrawText,
        map
      );
      this.element_ = WORKER_OFFSCREEN_CANVAS ? createMockDiv() : document.createElement("div");
      const style = this.element_.style;
      style.position = "absolute";
      style.width = "100%";
      style.height = "100%";
      style.zIndex = "0";
      this.element_.className = CLASS_UNSELECTABLE + " ol-layers";
      const container = map.getViewport();
      if (container) {
        container.insertBefore(this.element_, container.firstChild || null);
      }
      this.children_ = [];
      this.renderedVisible_ = true;
    }
    /**
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    dispatchRenderEvent(type, frameState) {
      const map = this.getMap();
      if (map.hasListener(type)) {
        const event = new Event_default2(type, void 0, frameState);
        map.dispatchEvent(event);
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      unlistenByKey(this.fontChangeListenerKey_);
      this.element_.remove();
      super.disposeInternal();
    }
    /**
     * Render.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderFrame(frameState) {
      if (!frameState) {
        if (this.renderedVisible_) {
          this.element_.style.display = "none";
          this.renderedVisible_ = false;
        }
        return;
      }
      this.calculateMatrices2D(frameState);
      this.dispatchRenderEvent(EventType_default3.PRECOMPOSE, frameState);
      const layerStatesArray = frameState.layerStatesArray.sort(
        (a, b) => a.zIndex - b.zIndex
      );
      const declutter = layerStatesArray.some(
        (layerState) => layerState.layer instanceof BaseVector_default && layerState.layer.getDeclutter()
      );
      if (declutter) {
        frameState.declutter = {};
      }
      const viewState = frameState.viewState;
      this.children_.length = 0;
      const renderedLayerStates = [];
      let previousElement = null;
      for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
        const layerState = layerStatesArray[i];
        frameState.layerIndex = i;
        const layer = layerState.layer;
        const sourceState = layer.getSourceState();
        if (!inView(layerState, viewState) || sourceState != "ready" && sourceState != "undefined") {
          layer.unrender();
          continue;
        }
        const element = layer.render(frameState, previousElement);
        if (!element) {
          continue;
        }
        if (element !== previousElement) {
          this.children_.push(element);
          previousElement = element;
        }
        renderedLayerStates.push(layerState);
      }
      this.declutter(frameState, renderedLayerStates);
      replaceChildren(this.element_, this.children_);
      const map = this.getMap();
      const mapCanvas = map.getTargetElement();
      if (isCanvas(mapCanvas)) {
        const mapContext = mapCanvas.getContext("2d");
        for (const container of this.children_) {
          const canvas = container.firstElementChild || container;
          const backgroundColor = container.style.backgroundColor;
          if (backgroundColor && (!isCanvas(canvas) || canvas.width > 0)) {
            mapContext.fillStyle = backgroundColor;
            mapContext.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
          }
          if (isCanvas(canvas) && canvas.width > 0) {
            mapContext.save();
            const opacity = container.style.opacity || canvas.style.opacity;
            mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
            const transform2 = canvas.style.transform;
            if (transform2) {
              mapContext.transform(
                .../** @type {[number, number, number, number, number, number]} */
                fromString(transform2)
              );
            } else {
              const w = parseFloat(canvas.style.width) / canvas.width;
              const h = parseFloat(canvas.style.height) / canvas.height;
              mapContext.transform(w, 0, 0, h, 0, 0);
            }
            mapContext.drawImage(canvas, 0, 0);
            mapContext.restore();
          }
        }
      }
      this.dispatchRenderEvent(EventType_default3.POSTCOMPOSE, frameState);
      if (!this.renderedVisible_) {
        this.element_.style.display = "";
        this.renderedVisible_ = true;
      }
      this.scheduleExpireIconCache(frameState);
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
     */
    declutter(frameState, layerStates) {
      if (!frameState.declutter) {
        return;
      }
      for (let i = layerStates.length - 1; i >= 0; --i) {
        const layerState = layerStates[i];
        const layer = layerState.layer;
        if (layer.getDeclutter()) {
          layer.renderDeclutter(frameState, layerState);
        }
      }
      layerStates.forEach(
        (layerState) => layerState.layer.renderDeferred(frameState)
      );
    }
  };
  var Composite_default = CompositeMapRenderer;

  // node_modules/ol/Map.js
  function removeLayerMapProperty(layer) {
    if (layer instanceof Layer_default) {
      layer.setMapInternal(null);
      return;
    }
    if (layer instanceof Group_default) {
      layer.getLayers().forEach(removeLayerMapProperty);
    }
  }
  function setLayerMapProperty(layer, map) {
    if (layer instanceof Layer_default) {
      layer.setMapInternal(map);
      return;
    }
    if (layer instanceof Group_default) {
      const layers = layer.getLayers().getArray();
      for (let i = 0, ii = layers.length; i < ii; ++i) {
        setLayerMapProperty(layers[i], map);
      }
    }
  }
  var Map = class extends Object_default {
    /**
     * @param {MapOptions} [options] Map options.
     */
    constructor(options) {
      super();
      options = options || {};
      this.on;
      this.once;
      this.un;
      const optionsInternal = createOptionsInternal(options);
      this.renderComplete_ = false;
      this.loaded_ = true;
      this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);
      this.maxTilesLoading_ = options.maxTilesLoading !== void 0 ? options.maxTilesLoading : 16;
      this.pixelRatio_ = options.pixelRatio !== void 0 ? options.pixelRatio : DEVICE_PIXEL_RATIO;
      this.postRenderTimeoutHandle_;
      this.animationDelayKey_;
      this.animationDelay_ = this.animationDelay_.bind(this);
      this.coordinateToPixelTransform_ = create();
      this.pixelToCoordinateTransform_ = create();
      this.frameIndex_ = 0;
      this.frameState_ = null;
      this.previousExtent_ = null;
      this.viewPropertyListenerKey_ = null;
      this.viewChangeListenerKey_ = null;
      this.layerGroupPropertyListenerKeys_ = null;
      if (!WORKER_OFFSCREEN_CANVAS) {
        this.viewport_ = document.createElement("div");
        this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "");
        this.viewport_.style.position = "relative";
        this.viewport_.style.overflow = "hidden";
        this.viewport_.style.width = "100%";
        this.viewport_.style.height = "100%";
        this.overlayContainer_ = document.createElement("div");
        this.overlayContainer_.style.position = "absolute";
        this.overlayContainer_.style.zIndex = "0";
        this.overlayContainer_.style.width = "100%";
        this.overlayContainer_.style.height = "100%";
        this.overlayContainer_.style.pointerEvents = "none";
        this.overlayContainer_.className = "ol-overlaycontainer";
        this.viewport_.appendChild(this.overlayContainer_);
        this.overlayContainerStopEvent_ = document.createElement("div");
        this.overlayContainerStopEvent_.style.position = "absolute";
        this.overlayContainerStopEvent_.style.zIndex = "0";
        this.overlayContainerStopEvent_.style.width = "100%";
        this.overlayContainerStopEvent_.style.height = "100%";
        this.overlayContainerStopEvent_.style.pointerEvents = "none";
        this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";
        this.viewport_.appendChild(this.overlayContainerStopEvent_);
      }
      this.mapBrowserEventHandler_ = null;
      this.moveTolerance_ = options.moveTolerance;
      this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
      this.targetChangeHandlerKeys_ = null;
      this.targetElement_ = null;
      if (!WORKER_OFFSCREEN_CANVAS) {
        this.resizeObserver_ = new ResizeObserver(() => this.updateSize());
      }
      this.controls = optionsInternal.controls || (WORKER_OFFSCREEN_CANVAS ? new Collection_default() : defaults());
      this.interactions = optionsInternal.interactions || (WORKER_OFFSCREEN_CANVAS ? new Collection_default() : defaults2({
        onFocusOnly: true
      }));
      this.overlays_ = optionsInternal.overlays;
      this.overlayIdIndex_ = {};
      this.renderer_ = null;
      this.postRenderFunctions_ = [];
      this.tileQueue_ = new TileQueue_default(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this)
      );
      this.addChangeListener(
        MapProperty_default.LAYERGROUP,
        this.handleLayerGroupChanged_
      );
      this.addChangeListener(MapProperty_default.VIEW, this.handleViewChanged_);
      this.addChangeListener(MapProperty_default.SIZE, this.handleSizeChanged_);
      this.addChangeListener(MapProperty_default.TARGET, this.handleTargetChanged_);
      this.setProperties(optionsInternal.values);
      const map = this;
      if (options.view && !(options.view instanceof View_default)) {
        options.view.then(function(viewOptions) {
          map.setView(new View_default(viewOptions));
        });
      }
      this.controls.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
         */
        (event) => {
          event.element.setMap(this);
        }
      );
      this.controls.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(null);
        }
      );
      this.interactions.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(this);
        }
      );
      this.interactions.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(null);
        }
      );
      this.overlays_.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (event) => {
          this.addOverlayInternal_(event.element);
        }
      );
      this.overlays_.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (event) => {
          const id = event.element.getId();
          if (id !== void 0) {
            delete this.overlayIdIndex_[id.toString()];
          }
          event.element.setMap(null);
        }
      );
      this.controls.forEach(
        /**
         * @param {import("./control/Control.js").default} control Control.
         */
        (control) => {
          control.setMap(this);
        }
      );
      this.interactions.forEach(
        /**
         * @param {import("./interaction/Interaction.js").default} interaction Interaction.
         */
        (interaction) => {
          interaction.setMap(this);
        }
      );
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
    }
    /**
     * Add the given control to the map.
     * @param {import("./control/Control.js").default} control Control.
     * @api
     */
    addControl(control) {
      this.getControls().push(control);
    }
    /**
     * Add the given interaction to the map. If you want to add an interaction
     * at another point of the collection use `getInteractions()` and the methods
     * available on {@link module:ol/Collection~Collection}. This can be used to
     * stop the event propagation from the handleEvent function. The interactions
     * get to handle the events in the reverse order of this collection.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
     * @api
     */
    addInteraction(interaction) {
      this.getInteractions().push(interaction);
    }
    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use `getLayers()` and the methods available on
     * {@link module:ol/Collection~Collection}.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @api
     */
    addLayer(layer) {
      const layers = this.getLayerGroup().getLayers();
      layers.push(layer);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
     * @private
     */
    handleLayerAdd_(event) {
      setLayerMapProperty(event.layer, this);
    }
    /**
     * Add the given overlay to the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @api
     */
    addOverlay(overlay) {
      this.getOverlays().push(overlay);
    }
    /**
     * This deals with map's overlay collection changes.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @private
     */
    addOverlayInternal_(overlay) {
      const id = overlay.getId();
      if (id !== void 0) {
        this.overlayIdIndex_[id.toString()] = overlay;
      }
      overlay.setMap(this);
    }
    /**
     *
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.controls.clear();
      this.interactions.clear();
      this.overlays_.clear();
      this.resizeObserver_?.disconnect();
      this.setTarget(null);
      super.disposeInternal();
    }
    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through the `layerFilter` option in `options`.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source.js").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
     *     called with two arguments. The first argument is one
     *     {@link module:ol/Feature~Feature feature} or
     *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
     *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
     *     unmanaged layers. To stop detection, callback functions can return a
     *     truthy value.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {T|undefined} Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template T
     * @api
     */
    forEachFeatureAtPixel(pixel, callback, options) {
      if (!this.frameState_ || !this.renderer_) {
        return;
      }
      const coordinate = this.getCoordinateFromPixelInternal(pixel);
      options = options !== void 0 ? options : {};
      const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
      const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
      const checkWrapped = options.checkWrapped !== false;
      return this.renderer_.forEachFeatureAtCoordinate(
        coordinate,
        this.frameState_,
        hitTolerance,
        checkWrapped,
        callback,
        null,
        layerFilter,
        null
      );
    }
    /**
     * Get all features that intersect a pixel on the viewport.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
     * an empty array if none were found.
     * @api
     */
    getFeaturesAtPixel(pixel, options) {
      const features = [];
      this.forEachFeatureAtPixel(
        pixel,
        function(feature) {
          features.push(feature);
        },
        options
      );
      return features;
    }
    /**
     * Get all layers from all layer groups.
     * @return {Array<import("./layer/Layer.js").default>} Layers.
     * @api
     */
    getAllLayers() {
      const layers = [];
      function addLayersFrom(layerGroup) {
        layerGroup.forEach(function(layer) {
          if (layer instanceof Group_default) {
            addLayersFrom(layer.getLayers());
          } else {
            layers.push(layer);
          }
        });
      }
      addLayersFrom(this.getLayers());
      return layers;
    }
    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through the `layerFilter` option.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {boolean} Is there a feature at the given pixel?
     * @api
     */
    hasFeatureAtPixel(pixel, options) {
      if (!this.frameState_ || !this.renderer_) {
        return false;
      }
      const coordinate = this.getCoordinateFromPixelInternal(pixel);
      options = options !== void 0 ? options : {};
      const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
      const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
      const checkWrapped = options.checkWrapped !== false;
      return this.renderer_.hasFeatureAtCoordinate(
        coordinate,
        this.frameState_,
        hitTolerance,
        checkWrapped,
        layerFilter,
        null
      );
    }
    /**
     * Returns the coordinate in user projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     * @api
     */
    getEventCoordinate(event) {
      return this.getCoordinateFromPixel(this.getEventPixel(event));
    }
    /**
     * Returns the coordinate in view projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     */
    getEventCoordinateInternal(event) {
      return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    }
    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     * @param {UIEvent|{clientX: number, clientY: number}} event Event.
     * @return {import("./pixel.js").Pixel} Pixel.
     * @api
     */
    getEventPixel(event) {
      const viewport = this.viewport_;
      const viewportPosition = viewport.getBoundingClientRect();
      const viewportSize = this.getSize();
      const scaleX = viewportPosition.width / viewportSize[0];
      const scaleY = viewportPosition.height / viewportSize[1];
      const eventPosition = (
        //FIXME Are we really calling this with a TouchEvent anywhere?
        "changedTouches" in event ? (
          /** @type {TouchEvent} */
          event.changedTouches[0]
        ) : (
          /** @type {MouseEvent} */
          event
        )
      );
      return [
        (eventPosition.clientX - viewportPosition.left) / scaleX,
        (eventPosition.clientY - viewportPosition.top) / scaleY
      ];
    }
    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     * @return {HTMLElement|string|undefined} The Element or id of the Element that the
     *     map is rendered in.
     * @observable
     * @api
     */
    getTarget() {
      return (
        /** @type {HTMLElement|string|undefined} */
        this.get(MapProperty_default.TARGET)
      );
    }
    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * `getTarget` this method always return an `Element`, or `null` if the
     * map has no target.
     * @return {HTMLElement} The element that the map is rendered in.
     * @api
     */
    getTargetElement() {
      return this.targetElement_;
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * user projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     * @api
     */
    getCoordinateFromPixel(pixel) {
      return toUserCoordinate(
        this.getCoordinateFromPixelInternal(pixel),
        this.getView().getProjection()
      );
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     */
    getCoordinateFromPixelInternal(pixel) {
      const frameState = this.frameState_;
      if (!frameState) {
        return null;
      }
      return apply(frameState.pixelToCoordinateTransform, pixel.slice());
    }
    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     * @return {Collection<import("./control/Control.js").default>} Controls.
     * @api
     */
    getControls() {
      return this.controls;
    }
    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     * @return {Collection<import("./Overlay.js").default>} Overlays.
     * @api
     */
    getOverlays() {
      return this.overlays_;
    }
    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
     * @param {string|number} id Overlay identifier.
     * @return {import("./Overlay.js").default|null} Overlay.
     * @api
     */
    getOverlayById(id) {
      const overlay = this.overlayIdIndex_[id.toString()];
      return overlay !== void 0 ? overlay : null;
    }
    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     *
     * Interactions are used for e.g. pan, zoom and rotate.
     * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
     * @api
     */
    getInteractions() {
      return this.interactions;
    }
    /**
     * Get the layergroup associated with this map.
     * @return {LayerGroup} A layer group containing the layers in this map.
     * @observable
     * @api
     */
    getLayerGroup() {
      return (
        /** @type {LayerGroup} */
        this.get(MapProperty_default.LAYERGROUP)
      );
    }
    /**
     * Clear any existing layers and add layers to the map.
     * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
     * @api
     */
    setLayers(layers) {
      const group = this.getLayerGroup();
      if (layers instanceof Collection_default) {
        group.setLayers(layers);
        return;
      }
      const collection = group.getLayers();
      collection.clear();
      collection.extend(layers);
    }
    /**
     * Get the collection of layers associated with this map.
     * @return {!Collection<import("./layer/Base.js").default>} Layers.
     * @api
     */
    getLayers() {
      const layers = this.getLayerGroup().getLayers();
      return layers;
    }
    /**
     * @return {boolean} Layers have sources that are still loading.
     */
    getLoadingOrNotReady() {
      const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
      for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
        const state = layerStatesArray[i];
        if (!state.visible) {
          continue;
        }
        const renderer = state.layer.getRenderer();
        if (renderer && !renderer.ready) {
          return true;
        }
        const source = state.layer.getSource();
        if (source && source.loading) {
          return true;
        }
      }
      return false;
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the user
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     * @api
     */
    getPixelFromCoordinate(coordinate) {
      const viewCoordinate = fromUserCoordinate(
        coordinate,
        this.getView().getProjection()
      );
      return this.getPixelFromCoordinateInternal(viewCoordinate);
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     */
    getPixelFromCoordinateInternal(coordinate) {
      const frameState = this.frameState_;
      if (!frameState) {
        return null;
      }
      return apply(
        frameState.coordinateToPixelTransform,
        coordinate.slice(0, 2)
      );
    }
    /**
     * Get the pixel ratio of the rendered map.
     * @return {number} Pixel ratio.
     * @api
     */
    getPixelRatio() {
      return this.pixelRatio_;
    }
    /**
     * Set the pixel ratio of the rendered map.
     * @param {number} pixelRatio Pixel ratio.
     * @api
     */
    setPixelRatio(pixelRatio) {
      if (this.pixelRatio_ === pixelRatio) {
        return;
      }
      this.pixelRatio_ = pixelRatio;
      this.render();
    }
    /**
     * Get the map renderer.
     * @return {import("./renderer/Map.js").default|null} Renderer
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Get the size of this map.
     * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    getSize() {
      return (
        /** @type {import("./size.js").Size|undefined} */
        this.get(MapProperty_default.SIZE)
      );
    }
    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     * @return {View} The view that controls this map.
     * @observable
     * @api
     */
    getView() {
      return (
        /** @type {View} */
        this.get(MapProperty_default.VIEW)
      );
    }
    /**
     * Get the element that serves as the map viewport.
     * @return {HTMLElement} Viewport.
     * @api
     */
    getViewport() {
      return this.viewport_;
    }
    /**
     * Get the element that serves as the container for overlays.  Elements added to
     * this container will let mousedown and touchstart events through to the map,
     * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
     * events.
     * @return {!HTMLElement} The map's overlay container.
     */
    getOverlayContainer() {
      return this.overlayContainer_;
    }
    /**
     * Get the element that serves as a container for overlays that don't allow
     * event propagation. Elements added to this container won't let mousedown and
     * touchstart events through to the map, so clicks and gestures on an overlay
     * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
     * @return {!HTMLElement} The map's overlay container that stops events.
     */
    getOverlayContainerStopEvent() {
      return this.overlayContainerStopEvent_;
    }
    /**
     * @return {!Document} The document where the map is displayed.
     */
    getOwnerDocument() {
      const targetElement = this.getTargetElement();
      return targetElement ? targetElement.ownerDocument : document;
    }
    /**
     * @param {import("./Tile.js").default} tile Tile.
     * @param {string} tileSourceKey Tile source key.
     * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
     * @param {number} tileResolution Tile resolution.
     * @return {number} Tile priority.
     */
    getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
      return getTilePriority(
        this.frameState_,
        tile,
        tileSourceKey,
        tileCenter,
        tileResolution
      );
    }
    /**
     * @param {PointerEvent|KeyboardEvent|WheelEvent} browserEvent Browser event.
     * @param {string} [type] Type.
     */
    handleBrowserEvent(browserEvent, type) {
      type = type || browserEvent.type;
      const mapBrowserEvent = new MapBrowserEvent_default(type, this, browserEvent);
      this.handleMapBrowserEvent(mapBrowserEvent);
    }
    /**
     * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
     */
    handleMapBrowserEvent(mapBrowserEvent) {
      if (!this.frameState_) {
        return;
      }
      const originalEvent = mapBrowserEvent.originalEvent;
      const eventType = originalEvent.type;
      if (eventType === EventType_default2.POINTERDOWN || eventType === EventType_default.WHEEL || eventType === EventType_default.KEYDOWN) {
        const doc = this.getOwnerDocument();
        const rootNode = this.viewport_.getRootNode ? this.viewport_.getRootNode() : doc;
        const target = (
          /** @type {Node} */
          originalEvent.target
        );
        const currentDoc = rootNode instanceof ShadowRoot ? rootNode.host === target ? rootNode.host.ownerDocument : rootNode : rootNode === doc ? doc.documentElement : rootNode;
        if (
          // Abort if the target is a child of the container for elements whose events are not meant
          // to be handled by map interactions.
          this.overlayContainerStopEvent_.contains(target) || // Abort if the event target is a child of the container that is no longer in the page.
          // It's possible for the target to no longer be in the page if it has been removed in an
          // event listener, this might happen in a Control that recreates it's content based on
          // user interaction either manually or via a render in something like https://reactjs.org/
          !currentDoc.contains(target)
        ) {
          return;
        }
      }
      mapBrowserEvent.frameState = this.frameState_;
      if (this.dispatchEvent(mapBrowserEvent) !== false) {
        const interactionsArray = this.getInteractions().getArray().slice();
        for (let i = interactionsArray.length - 1; i >= 0; i--) {
          const interaction = interactionsArray[i];
          if (interaction.getMap() !== this || !interaction.getActive() || !this.getTargetElement()) {
            continue;
          }
          const cont = interaction.handleEvent(mapBrowserEvent);
          if (!cont || mapBrowserEvent.propagationStopped) {
            break;
          }
        }
      }
    }
    /**
     * @protected
     */
    handlePostRender() {
      const frameState = this.frameState_;
      const tileQueue = this.tileQueue_;
      if (!tileQueue.isEmpty()) {
        let maxTotalLoading = this.maxTilesLoading_;
        let maxNewLoads = maxTotalLoading;
        const hints = frameState ? frameState.viewHints : void 0;
        const animatingOrInteracting = hints ? hints[ViewHint_default.ANIMATING] || hints[ViewHint_default.INTERACTING] : false;
        if (animatingOrInteracting) {
          const lowOnFrameBudget = Date.now() - frameState.time > 8;
          maxTotalLoading = lowOnFrameBudget ? 0 : 8;
          maxNewLoads = lowOnFrameBudget ? 0 : 2;
        }
        if (tileQueue.getTilesLoading() < maxTotalLoading) {
          if (animatingOrInteracting) {
            tileQueue.reprioritize();
          }
          tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
        }
      }
      if (frameState && this.renderer_ && !frameState.animate) {
        if (this.renderComplete_) {
          if (this.hasListener(EventType_default3.RENDERCOMPLETE)) {
            this.renderer_.dispatchRenderEvent(
              EventType_default3.RENDERCOMPLETE,
              frameState
            );
          }
          if (this.loaded_ === false) {
            this.loaded_ = true;
            this.dispatchEvent(
              new MapEvent_default(MapEventType_default.LOADEND, this, frameState)
            );
          }
        } else if (this.loaded_ === true) {
          this.loaded_ = false;
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.LOADSTART, this, frameState)
          );
        }
      }
      const postRenderFunctions = this.postRenderFunctions_;
      if (frameState) {
        for (let i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
          postRenderFunctions[i](this, frameState);
        }
      }
      postRenderFunctions.length = 0;
    }
    /**
     * @private
     */
    handleSizeChanged_() {
      if (this.getView() && !this.getView().getAnimating()) {
        this.getView().resolveConstraints(0);
      }
      this.render();
    }
    /**
     * @private
     */
    handleTargetChanged_() {
      if (this.mapBrowserEventHandler_) {
        for (let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
          unlistenByKey(this.targetChangeHandlerKeys_[i]);
        }
        this.targetChangeHandlerKeys_ = null;
        this.viewport_.removeEventListener(
          EventType_default.CONTEXTMENU,
          this.boundHandleBrowserEvent_
        );
        this.viewport_.removeEventListener(
          EventType_default.WHEEL,
          this.boundHandleBrowserEvent_
        );
        this.mapBrowserEventHandler_.dispose();
        this.mapBrowserEventHandler_ = null;
        this.viewport_.remove();
      }
      if (this.targetElement_ && !isCanvas(this.targetElement_)) {
        this.resizeObserver_?.unobserve(this.targetElement_);
        const rootNode = this.targetElement_.getRootNode();
        if (rootNode instanceof ShadowRoot) {
          this.resizeObserver_.unobserve(rootNode.host);
        }
        this.setSize(void 0);
      }
      const target = this.getTarget();
      const targetElement = typeof target === "string" ? document.getElementById(target) : target;
      this.targetElement_ = targetElement;
      if (!targetElement) {
        if (this.renderer_) {
          clearTimeout(this.postRenderTimeoutHandle_);
          this.postRenderTimeoutHandle_ = void 0;
          this.postRenderFunctions_.length = 0;
          this.renderer_.dispose();
          this.renderer_ = null;
        }
        if (this.animationDelayKey_) {
          cancelAnimationFrame(this.animationDelayKey_);
          this.animationDelayKey_ = void 0;
        }
      } else {
        if (!isCanvas(targetElement)) {
          targetElement.appendChild(this.viewport_);
        }
        if (!this.renderer_) {
          this.renderer_ = new Composite_default(this);
        }
        if (!isCanvas(targetElement)) {
          this.mapBrowserEventHandler_ = new MapBrowserEventHandler_default(
            this,
            this.moveTolerance_
          );
          for (const key in MapBrowserEventType_default) {
            this.mapBrowserEventHandler_.addEventListener(
              MapBrowserEventType_default[key],
              this.handleMapBrowserEvent.bind(this)
            );
          }
          this.viewport_.addEventListener(
            EventType_default.CONTEXTMENU,
            this.boundHandleBrowserEvent_,
            false
          );
          this.viewport_.addEventListener(
            EventType_default.WHEEL,
            this.boundHandleBrowserEvent_,
            PASSIVE_EVENT_LISTENERS ? { passive: false } : false
          );
          let keyboardEventTarget;
          if (!this.keyboardEventTarget_) {
            const targetRoot = targetElement.getRootNode();
            const targetCandidate = targetRoot instanceof ShadowRoot ? targetRoot.host : targetElement;
            keyboardEventTarget = targetCandidate;
          } else {
            keyboardEventTarget = this.keyboardEventTarget_;
          }
          this.targetChangeHandlerKeys_ = [
            listen(
              keyboardEventTarget,
              EventType_default.KEYDOWN,
              this.handleBrowserEvent,
              this
            ),
            listen(
              keyboardEventTarget,
              EventType_default.KEYPRESS,
              this.handleBrowserEvent,
              this
            )
          ];
          if (targetElement instanceof HTMLElement) {
            const rootNode = targetElement.getRootNode();
            if (rootNode instanceof ShadowRoot) {
              this.resizeObserver_.observe(rootNode.host);
            }
            this.resizeObserver_?.observe(targetElement);
          }
        }
        this.updateSize();
      }
    }
    /**
     * @private
     */
    handleTileChange_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewPropertyChanged_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewChanged_() {
      if (this.viewPropertyListenerKey_) {
        unlistenByKey(this.viewPropertyListenerKey_);
        this.viewPropertyListenerKey_ = null;
      }
      if (this.viewChangeListenerKey_) {
        unlistenByKey(this.viewChangeListenerKey_);
        this.viewChangeListenerKey_ = null;
      }
      const view = this.getView();
      if (view) {
        this.updateViewportSize_(this.getSize());
        this.viewPropertyListenerKey_ = listen(
          view,
          ObjectEventType_default.PROPERTYCHANGE,
          this.handleViewPropertyChanged_,
          this
        );
        this.viewChangeListenerKey_ = listen(
          view,
          EventType_default.CHANGE,
          this.handleViewPropertyChanged_,
          this
        );
        view.resolveConstraints(0);
      }
      this.render();
    }
    /**
     * @private
     */
    handleLayerGroupChanged_() {
      if (this.layerGroupPropertyListenerKeys_) {
        this.layerGroupPropertyListenerKeys_.forEach(unlistenByKey);
        this.layerGroupPropertyListenerKeys_ = null;
      }
      const layerGroup = this.getLayerGroup();
      if (layerGroup) {
        this.handleLayerAdd_(new GroupEvent("addlayer", layerGroup));
        this.layerGroupPropertyListenerKeys_ = [
          listen(layerGroup, ObjectEventType_default.PROPERTYCHANGE, this.render, this),
          listen(layerGroup, EventType_default.CHANGE, this.render, this),
          listen(layerGroup, "addlayer", this.handleLayerAdd_, this),
          listen(layerGroup, "removelayer", this.handleLayerRemove_, this)
        ];
      }
      this.render();
    }
    /**
     * @return {boolean} Is rendered.
     */
    isRendered() {
      return !!this.frameState_;
    }
    /**
     * @private
     */
    animationDelay_() {
      this.animationDelayKey_ = void 0;
      this.renderFrame_(Date.now());
    }
    /**
     * Requests an immediate render in a synchronous manner.
     * @api
     */
    renderSync() {
      if (this.animationDelayKey_) {
        cancelAnimationFrame(this.animationDelayKey_);
      }
      this.animationDelay_();
    }
    /**
     * Redraws all text after new fonts have loaded
     */
    redrawText() {
      if (!this.frameState_) {
        return;
      }
      const layerStates = this.frameState_.layerStatesArray;
      for (let i = 0, ii = layerStates.length; i < ii; ++i) {
        const layer = layerStates[i].layer;
        if (layer.hasRenderer()) {
          layer.getRenderer().handleFontsChanged();
        }
      }
    }
    /**
     * Request a map rendering (at the next animation frame).
     * @api
     */
    render() {
      if (this.renderer_ && this.animationDelayKey_ === void 0) {
        this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
      }
    }
    /**
     * Remove the given control from the map.
     * @param {import("./control/Control.js").default} control Control.
     * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
     *     if the control was not found).
     * @api
     */
    removeControl(control) {
      return this.getControls().remove(control);
    }
    /**
     * Remove the given interaction from the map.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
     * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
     *     undefined if the interaction was not found).
     * @api
     */
    removeInteraction(interaction) {
      return this.getInteractions().remove(interaction);
    }
    /**
     * Removes the given layer from the map.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
     *     layer was not found).
     * @api
     */
    removeLayer(layer) {
      const layers = this.getLayerGroup().getLayers();
      return layers.remove(layer);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
     * @private
     */
    handleLayerRemove_(event) {
      removeLayerMapProperty(event.layer);
    }
    /**
     * Remove the given overlay from the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
     *     if the overlay was not found).
     * @api
     */
    removeOverlay(overlay) {
      return this.getOverlays().remove(overlay);
    }
    /**
     * @param {number} time Time.
     * @private
     */
    renderFrame_(time) {
      const size = this.getSize();
      const view = this.getView();
      const previousFrameState = this.frameState_;
      let frameState = null;
      if (size !== void 0 && hasArea(size) && view && view.isDef()) {
        const viewHints = view.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0
        );
        const viewState = view.getState();
        frameState = {
          animate: false,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: getForViewAndSize(
            viewState.center,
            viewState.resolution,
            viewState.rotation,
            size
          ),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size,
          tileQueue: this.tileQueue_,
          time,
          usedTiles: {},
          viewState,
          viewHints,
          wantedTiles: {},
          mapId: getUid(this),
          renderTargets: {}
        };
        if (viewState.nextCenter && viewState.nextResolution) {
          const rotation = isNaN(viewState.nextRotation) ? viewState.rotation : viewState.nextRotation;
          frameState.nextExtent = getForViewAndSize(
            viewState.nextCenter,
            viewState.nextResolution,
            rotation,
            size
          );
        }
      }
      this.frameState_ = frameState;
      this.renderer_.renderFrame(frameState);
      if (frameState) {
        if (frameState.animate) {
          this.render();
        }
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          frameState.postRenderFunctions
        );
        if (previousFrameState) {
          const moveStart = !this.previousExtent_ || !isEmpty(this.previousExtent_) && !equals(frameState.extent, this.previousExtent_);
          if (moveStart) {
            this.dispatchEvent(
              new MapEvent_default(MapEventType_default.MOVESTART, this, previousFrameState)
            );
            this.previousExtent_ = createOrUpdateEmpty(this.previousExtent_);
          }
        }
        const idle = this.previousExtent_ && !frameState.viewHints[ViewHint_default.ANIMATING] && !frameState.viewHints[ViewHint_default.INTERACTING] && !equals(frameState.extent, this.previousExtent_);
        if (idle) {
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.MOVEEND, this, frameState)
          );
          clone(frameState.extent, this.previousExtent_);
        }
      }
      this.dispatchEvent(new MapEvent_default(MapEventType_default.POSTRENDER, this, frameState));
      this.renderComplete_ = (this.hasListener(MapEventType_default.LOADSTART) || this.hasListener(MapEventType_default.LOADEND) || this.hasListener(EventType_default3.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady();
      if (!this.postRenderTimeoutHandle_) {
        this.postRenderTimeoutHandle_ = setTimeout(() => {
          this.postRenderTimeoutHandle_ = void 0;
          this.handlePostRender();
        }, 0);
      }
    }
    /**
     * Sets the layergroup of this map.
     * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
     * @observable
     * @api
     */
    setLayerGroup(layerGroup) {
      const oldLayerGroup = this.getLayerGroup();
      if (oldLayerGroup) {
        this.handleLayerRemove_(new GroupEvent("removelayer", oldLayerGroup));
      }
      this.set(MapProperty_default.LAYERGROUP, layerGroup);
    }
    /**
     * Set the size of this map.
     * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    setSize(size) {
      this.set(MapProperty_default.SIZE, size);
    }
    /**
     * Set the target element to render this map into.
     * For accessibility (focus and keyboard events for map navigation), the `target` element must have a
     *  properly configured `tabindex` attribute. If the `target` element is inside a Shadow DOM, the
     *  `tabindex` atribute must be set on the custom element's host element.
     * @param {HTMLElement|string} [target] The Element or id of the Element
     *     that the map is rendered in.
     * @observable
     * @api
     */
    setTarget(target) {
      this.set(MapProperty_default.TARGET, target);
    }
    /**
     * Set the view for this map.
     * @param {View|Promise<import("./View.js").ViewOptions>|null} view The view that controls this map.
     * It is also possible to pass a promise that resolves to options for constructing a view.  This
     * alternative allows view properties to be resolved by sources or other components that load
     * view-related metadata.
     * @observable
     * @api
     */
    setView(view) {
      if (!view || view instanceof View_default) {
        this.set(MapProperty_default.VIEW, view);
        return;
      }
      this.set(MapProperty_default.VIEW, new View_default());
      const map = this;
      view.then(function(viewOptions) {
        map.setView(new View_default(viewOptions));
      });
    }
    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     * @api
     */
    updateSize() {
      const targetElement = this.getTargetElement();
      let size = void 0;
      if (targetElement) {
        let width, height;
        if (isCanvas(targetElement)) {
          const transform2 = targetElement.getContext("2d").getTransform();
          width = targetElement.width / transform2.a;
          height = targetElement.height / transform2.d;
        } else {
          const computedStyle = getComputedStyle(targetElement);
          width = targetElement.offsetWidth - parseFloat(computedStyle["borderLeftWidth"]) - parseFloat(computedStyle["paddingLeft"]) - parseFloat(computedStyle["paddingRight"]) - parseFloat(computedStyle["borderRightWidth"]);
          height = targetElement.offsetHeight - parseFloat(computedStyle["borderTopWidth"]) - parseFloat(computedStyle["paddingTop"]) - parseFloat(computedStyle["paddingBottom"]) - parseFloat(computedStyle["borderBottomWidth"]);
        }
        if (!isNaN(width) && !isNaN(height)) {
          size = [Math.max(0, width), Math.max(0, height)];
          if (!hasArea(size) && !!(targetElement.offsetWidth || targetElement.offsetHeight || targetElement.getClientRects().length)) {
            warn(
              "No map visible because the map container's width or height are 0."
            );
          }
        }
      }
      const oldSize = this.getSize();
      if (size && (!oldSize || !equals2(size, oldSize))) {
        this.updateViewportSize_(size);
        this.setSize(size);
      }
    }
    /**
     * Recomputes the viewport size and save it on the view object (if any)
     * @param {import("./size.js").Size|undefined} size The size.
     * @private
     */
    updateViewportSize_(size) {
      const view = this.getView();
      if (view) {
        view.setViewportSize(size);
      }
    }
  };
  function createOptionsInternal(options) {
    let keyboardEventTarget = null;
    if (options.keyboardEventTarget !== void 0) {
      keyboardEventTarget = typeof options.keyboardEventTarget === "string" ? document.getElementById(options.keyboardEventTarget) : options.keyboardEventTarget;
    }
    const values = {};
    const layerGroup = options.layers && typeof /** @type {?} */
    options.layers.getLayers === "function" ? (
      /** @type {LayerGroup} */
      options.layers
    ) : new Group_default({
      layers: (
        /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
        options.layers
      )
    });
    values[MapProperty_default.LAYERGROUP] = layerGroup;
    values[MapProperty_default.TARGET] = options.target;
    values[MapProperty_default.VIEW] = options.view instanceof View_default ? options.view : new View_default();
    let controls;
    if (options.controls !== void 0) {
      if (Array.isArray(options.controls)) {
        controls = new Collection_default(options.controls.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.controls.getArray === "function",
          "Expected `controls` to be an array or an `ol/Collection.js`"
        );
        controls = options.controls;
      }
    }
    let interactions;
    if (options.interactions !== void 0) {
      if (Array.isArray(options.interactions)) {
        interactions = new Collection_default(options.interactions.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.interactions.getArray === "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`"
        );
        interactions = options.interactions;
      }
    }
    let overlays;
    if (options.overlays !== void 0) {
      if (Array.isArray(options.overlays)) {
        overlays = new Collection_default(options.overlays.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.overlays.getArray === "function",
          "Expected `overlays` to be an array or an `ol/Collection.js`"
        );
        overlays = options.overlays;
      }
    } else {
      overlays = new Collection_default();
    }
    return {
      controls,
      interactions,
      keyboardEventTarget,
      overlays,
      values
    };
  }
  var Map_default2 = Map;

  // node_modules/ol/DataTile.js
  function asImageLike(data) {
    return data instanceof Image || data instanceof HTMLCanvasElement || data instanceof HTMLVideoElement || data instanceof ImageBitmap ? data : null;
  }
  var disposedError = new Error("disposed");
  var defaultSize = [256, 256];
  var DataTile = class extends Tile_default {
    /**
     * @param {Options} options Tile options.
     */
    constructor(options) {
      const state = TileState_default.IDLE;
      super(options.tileCoord, state, {
        transition: options.transition,
        interpolate: options.interpolate
      });
      this.loader_ = options.loader;
      this.data_ = null;
      this.error_ = null;
      this.size_ = options.size || null;
      this.controller_ = options.controller || null;
    }
    /**
     * Get the tile size.
     * @return {import('./size.js').Size} Tile size.
     */
    getSize() {
      if (this.size_) {
        return this.size_;
      }
      const imageData = asImageLike(this.data_);
      if (imageData) {
        return [imageData.width, imageData.height];
      }
      return defaultSize;
    }
    /**
     * Get the data for the tile.
     * @return {Data} Tile data.
     * @api
     */
    getData() {
      return this.data_;
    }
    /**
     * Get any loading error.
     * @return {Error} Loading error.
     * @api
     */
    getError() {
      return this.error_;
    }
    /**
     * Load the tile data.
     * @api
     * @override
     */
    load() {
      if (this.state !== TileState_default.IDLE && this.state !== TileState_default.ERROR) {
        return;
      }
      this.state = TileState_default.LOADING;
      this.changed();
      const self2 = this;
      this.loader_().then(function(data) {
        self2.data_ = data;
        self2.state = TileState_default.LOADED;
        self2.changed();
      }).catch(function(error) {
        self2.error_ = error;
        self2.state = TileState_default.ERROR;
        self2.changed();
      });
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.controller_) {
        this.controller_.abort(disposedError);
        this.controller_ = null;
      }
      super.disposeInternal();
    }
  };
  var DataTile_default = DataTile;

  // node_modules/ol/structs/LRUCache.js
  var LRUCache = class {
    /**
     * @param {number} [highWaterMark] High water mark.
     */
    constructor(highWaterMark) {
      this.highWaterMark = highWaterMark !== void 0 ? highWaterMark : 2048;
      this.count_ = 0;
      this.entries_ = {};
      this.oldest_ = null;
      this.newest_ = null;
    }
    deleteOldest() {
      const entry = this.pop();
      if (entry instanceof Disposable_default) {
        entry.dispose();
      }
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }
    /**
     * Expire the cache. When the cache entry is a {@link module:ol/Disposable~Disposable},
     * the entry will be disposed.
     * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
     */
    expireCache(keep) {
      while (this.canExpireCache()) {
        this.deleteOldest();
      }
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      while (this.oldest_) {
        this.deleteOldest();
      }
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Contains key.
     */
    containsKey(key) {
      return this.entries_.hasOwnProperty(key);
    }
    /**
     * @param {function(T, string, LRUCache<T>): ?} f The function
     *     to call for every entry from the oldest to the newer. This function takes
     *     3 arguments (the entry value, the entry key and the LRUCache object).
     *     The return value is ignored.
     */
    forEach(f) {
      let entry = this.oldest_;
      while (entry) {
        f(entry.value_, entry.key_, this);
        entry = entry.newer;
      }
    }
    /**
     * @param {string} key Key.
     * @param {*} [options] Options (reserved for subclasses).
     * @return {T} Value.
     */
    get(key, options) {
      const entry = this.entries_[key];
      assert(
        entry !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      );
      if (entry === this.newest_) {
        return entry.value_;
      }
      if (entry === this.oldest_) {
        this.oldest_ = /** @type {Entry} */
        this.oldest_.newer;
        this.oldest_.older = null;
      } else {
        entry.newer.older = entry.older;
        entry.older.newer = entry.newer;
      }
      entry.newer = null;
      entry.older = this.newest_;
      this.newest_.newer = entry;
      this.newest_ = entry;
      return entry.value_;
    }
    /**
     * Remove an entry from the cache.
     * @param {string} key The entry key.
     * @return {T} The removed entry.
     */
    remove(key) {
      const entry = this.entries_[key];
      assert(
        entry !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      );
      if (entry === this.newest_) {
        this.newest_ = /** @type {Entry} */
        entry.older;
        if (this.newest_) {
          this.newest_.newer = null;
        }
      } else if (entry === this.oldest_) {
        this.oldest_ = /** @type {Entry} */
        entry.newer;
        if (this.oldest_) {
          this.oldest_.older = null;
        }
      } else {
        entry.newer.older = entry.older;
        entry.older.newer = entry.newer;
      }
      delete this.entries_[key];
      --this.count_;
      return entry.value_;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.count_;
    }
    /**
     * @return {Array<string>} Keys.
     */
    getKeys() {
      const keys = new Array(this.count_);
      let i = 0;
      let entry;
      for (entry = this.newest_; entry; entry = entry.older) {
        keys[i++] = entry.key_;
      }
      return keys;
    }
    /**
     * @return {Array<T>} Values.
     */
    getValues() {
      const values = new Array(this.count_);
      let i = 0;
      let entry;
      for (entry = this.newest_; entry; entry = entry.older) {
        values[i++] = entry.value_;
      }
      return values;
    }
    /**
     * @return {T} Last value.
     */
    peekLast() {
      return this.oldest_.value_;
    }
    /**
     * @return {string} Last key.
     */
    peekLastKey() {
      return this.oldest_.key_;
    }
    /**
     * Get the key of the newest item in the cache.  Throws if the cache is empty.
     * @return {string} The newest key.
     */
    peekFirstKey() {
      return this.newest_.key_;
    }
    /**
     * Return an entry without updating least recently used time.
     * @param {string} key Key.
     * @return {T|undefined} Value.
     */
    peek(key) {
      return this.entries_[key]?.value_;
    }
    /**
     * @return {T} value Value.
     */
    pop() {
      const entry = this.oldest_;
      delete this.entries_[entry.key_];
      if (entry.newer) {
        entry.newer.older = null;
      }
      this.oldest_ = /** @type {Entry} */
      entry.newer;
      if (!this.oldest_) {
        this.newest_ = null;
      }
      --this.count_;
      return entry.value_;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    replace(key, value) {
      this.get(key);
      this.entries_[key].value_ = value;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    set(key, value) {
      assert(
        !(key in this.entries_),
        "Tried to set a value for a key that is used already"
      );
      const entry = {
        key_: key,
        newer: null,
        older: this.newest_,
        value_: value
      };
      if (!this.newest_) {
        this.oldest_ = entry;
      } else {
        this.newest_.newer = entry;
      }
      this.newest_ = entry;
      this.entries_[key] = entry;
      ++this.count_;
    }
    /**
     * Set a maximum number of entries for the cache.
     * @param {number} size Cache size.
     * @api
     */
    setSize(size) {
      this.highWaterMark = size;
    }
  };
  var LRUCache_default = LRUCache;

  // node_modules/ol/render/canvas/ZIndexContext.js
  var ZIndexContext = class {
    constructor() {
      this.instructions_ = [];
      this.zIndex = 0;
      this.offset_ = 0;
      this.context_ = /** @type {ZIndexContextProxy} */
      new Proxy(getSharedCanvasContext2D(), {
        get: (target, property) => {
          if (typeof /** @type {*} */
          getSharedCanvasContext2D()[property] !== "function") {
            return void 0;
          }
          this.push_(property);
          return this.pushMethodArgs_;
        },
        set: (target, property, value) => {
          this.push_(property, value);
          return true;
        }
      });
    }
    /**
     * @param {...*} args Arguments to push to the instructions array.
     * @private
     */
    push_(...args) {
      const instructions = this.instructions_;
      const index = this.zIndex + this.offset_;
      if (!instructions[index]) {
        instructions[index] = [];
      }
      instructions[index].push(...args);
    }
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    pushMethodArgs_ = (...args) => {
      this.push_(args);
      return this;
    };
    /**
     * Push a function that renders to the context directly.
     * @param {function(CanvasRenderingContext2D): void} render Function.
     */
    pushFunction(render2) {
      this.push_(render2);
    }
    /**
     * Get a proxy for CanvasRenderingContext2D which does not support getting state
     * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
     * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
     * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
     * @return {ZIndexContextProxy} Context.
     */
    getContext() {
      return this.context_;
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     */
    draw(context) {
      this.instructions_.forEach((instructionsAtIndex) => {
        for (let i = 0, ii = instructionsAtIndex.length; i < ii; ++i) {
          const property = instructionsAtIndex[i];
          if (typeof property === "function") {
            property(context);
            continue;
          }
          const instructionAtIndex = instructionsAtIndex[++i];
          if (typeof /** @type {*} */
          context[property] === "function") {
            context[property](...instructionAtIndex);
          } else {
            if (typeof instructionAtIndex === "function") {
              context[property] = instructionAtIndex(context);
              continue;
            }
            context[property] = instructionAtIndex;
          }
        }
      });
    }
    clear() {
      this.instructions_.length = 0;
      this.zIndex = 0;
      this.offset_ = 0;
    }
    /**
     * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
     * avoid conflicting context.clip() or context.save()/restore() calls.
     */
    offset() {
      this.offset_ = this.instructions_.length;
      this.zIndex = 0;
    }
  };
  var ZIndexContext_default = ZIndexContext;

  // node_modules/ol/renderer/Layer.js
  var maxStaleKeys = 5;
  var LayerRenderer = class extends Observable_default {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(layer) {
      super();
      this.ready = true;
      this.boundHandleImageChange_ = this.handleImageChange_.bind(this);
      this.layer_ = layer;
      this.staleKeys_ = new Array();
      this.maxStaleKeys = maxStaleKeys;
    }
    /**
     * @return {Array<string>} Get the list of stale keys.
     */
    getStaleKeys() {
      return this.staleKeys_;
    }
    /**
     * @param {string} key The new stale key.
     */
    prependStaleKey(key) {
      this.staleKeys_.unshift(key);
      if (this.staleKeys_.length > this.maxStaleKeys) {
        this.staleKeys_.length = this.maxStaleKeys;
      }
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(pixel) {
      return abstract();
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(pixel) {
      return null;
    }
    /**
     * Determine whether render should be called.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    prepareFrame(frameState) {
      return abstract();
    }
    /**
     * Render the layer.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement|null} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    renderFrame(frameState, target) {
      return abstract();
    }
    /**
     * @abstract
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
     * @return {T|undefined} Callback result.
     * @template T
     */
    forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
      return void 0;
    }
    /**
     * @return {LayerType} Layer.
     */
    getLayer() {
      return this.layer_;
    }
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @abstract
     */
    handleFontsChanged() {
    }
    /**
     * Handle changes in image state.
     * @param {import("../events/Event.js").default} event Image change event.
     * @private
     */
    handleImageChange_(event) {
      const image = (
        /** @type {import("../Image.js").default} */
        event.target
      );
      if (image.getState() === ImageState_default.LOADED || image.getState() === ImageState_default.ERROR) {
        this.renderIfReadyAndVisible();
      }
    }
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     * @param {import("../Image.js").default} image Image.
     * @return {boolean} `true` if the image is already loaded, `false` otherwise.
     * @protected
     */
    loadImage(image) {
      let imageState = image.getState();
      if (imageState != ImageState_default.LOADED && imageState != ImageState_default.ERROR) {
        image.addEventListener(EventType_default.CHANGE, this.boundHandleImageChange_);
      }
      if (imageState == ImageState_default.IDLE) {
        image.load();
        imageState = image.getState();
      }
      return imageState == ImageState_default.LOADED;
    }
    /**
     * @protected
     */
    renderIfReadyAndVisible() {
      const layer = this.getLayer();
      if (layer && layer.getVisible() && layer.getSourceState() === "ready") {
        layer.changed();
      }
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    renderDeferred(frameState) {
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.layer_;
      super.disposeInternal();
    }
  };
  var Layer_default2 = LayerRenderer;

  // node_modules/ol/renderer/canvas/Layer.js
  var pixelContext = null;
  function createPixelContext() {
    pixelContext = createCanvasContext2D(1, 1, void 0, {
      willReadFrequently: true
    });
  }
  var CanvasLayerRenderer = class extends Layer_default2 {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(layer) {
      super(layer);
      this.container = null;
      this.renderedResolution;
      this.tempTransform = create();
      this.pixelTransform = create();
      this.inversePixelTransform = create();
      this.context = null;
      this.deferredContext_ = null;
      this.containerReused = false;
      this.frameState = null;
    }
    /**
     * @param {import('../../DataTile.js').ImageLike} image Image.
     * @param {number} col The column index.
     * @param {number} row The row index.
     * @return {Uint8ClampedArray|null} The image data.
     */
    getImageData(image, col, row) {
      if (!pixelContext) {
        createPixelContext();
      }
      pixelContext.clearRect(0, 0, 1, 1);
      let data;
      try {
        pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
        data = pixelContext.getImageData(0, 0, 1, 1).data;
      } catch {
        pixelContext = null;
        return null;
      }
      return data;
    }
    /**
     * @param {import('../../Map.js').FrameState} frameState Frame state.
     * @return {string} Background color.
     */
    getBackground(frameState) {
      const layer = this.getLayer();
      let background = layer.getBackground();
      if (typeof background === "function") {
        background = background(frameState.viewState.resolution);
      }
      return background || void 0;
    }
    /**
     * Get a rendering container from an existing target, if compatible.
     * @param {HTMLElement} target Potential render target.
     * @param {string} transform CSS transform matrix.
     * @param {string} [backgroundColor] Background color.
     */
    useContainer(target, transform2, backgroundColor) {
      const layerClassName = this.getLayer().getClassName();
      let container, context;
      if (target && target.className === layerClassName && (!backgroundColor || target && target.style.backgroundColor && equals2(
        asArray(target.style.backgroundColor),
        asArray(backgroundColor)
      ))) {
        const canvas = target.firstElementChild;
        if (isCanvas(canvas)) {
          context = canvas.getContext("2d");
        }
      }
      if (context && equivalent2(context.canvas.style.transform, transform2)) {
        this.container = target;
        this.context = context;
        this.containerReused = true;
      } else if (this.containerReused) {
        this.container = null;
        this.context = null;
        this.containerReused = false;
      } else if (this.container) {
        this.container.style.backgroundColor = null;
      }
      if (!this.container) {
        container = WORKER_OFFSCREEN_CANVAS ? createMockDiv() : document.createElement("div");
        container.className = layerClassName;
        let style = container.style;
        style.position = "absolute";
        style.width = "100%";
        style.height = "100%";
        context = createCanvasContext2D();
        const canvas = (
          /** @type {HTMLCanvasElement} */
          context.canvas
        );
        container.appendChild(canvas);
        style = canvas.style;
        style.position = "absolute";
        style.left = "0";
        style.transformOrigin = "top left";
        this.container = container;
        this.context = context;
      }
      if (!this.containerReused && backgroundColor && !this.container.style.backgroundColor) {
        this.container.style.backgroundColor = backgroundColor;
      }
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent Clip extent.
     * @protected
     */
    clipUnrotated(context, frameState, extent) {
      const topLeft = getTopLeft(extent);
      const topRight = getTopRight(extent);
      const bottomRight = getBottomRight(extent);
      const bottomLeft = getBottomLeft(extent);
      apply(frameState.coordinateToPixelTransform, topLeft);
      apply(frameState.coordinateToPixelTransform, topRight);
      apply(frameState.coordinateToPixelTransform, bottomRight);
      apply(frameState.coordinateToPixelTransform, bottomLeft);
      const inverted = this.inversePixelTransform;
      apply(inverted, topLeft);
      apply(inverted, topRight);
      apply(inverted, bottomRight);
      apply(inverted, bottomLeft);
      context.save();
      context.beginPath();
      context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
      context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
      context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
      context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
      context.clip();
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @protected
     */
    prepareContainer(frameState, target) {
      const extent = frameState.extent;
      const resolution = frameState.viewState.resolution;
      const rotation = frameState.viewState.rotation;
      const pixelRatio = frameState.pixelRatio;
      const width = Math.round(getWidth(extent) / resolution * pixelRatio);
      const height = Math.round(getHeight(extent) / resolution * pixelRatio);
      compose(
        this.pixelTransform,
        frameState.size[0] / 2,
        frameState.size[1] / 2,
        1 / pixelRatio,
        1 / pixelRatio,
        rotation,
        -width / 2,
        -height / 2
      );
      makeInverse(this.inversePixelTransform, this.pixelTransform);
      const canvasTransform = toString(this.pixelTransform);
      this.useContainer(target, canvasTransform, this.getBackground(frameState));
      if (!this.containerReused) {
        const canvas = this.context.canvas;
        if (canvas.width != width || canvas.height != height) {
          canvas.width = width;
          canvas.height = height;
        } else {
          this.context.clearRect(0, 0, width, height);
        }
        if (canvasTransform !== /** @type {HTMLCanvasElement} */
        canvas.style.transform) {
          canvas.style.transform = canvasTransform;
        }
      }
    }
    /**
     * @param {import("../../render/EventType.js").default} type Event type.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @private
     */
    dispatchRenderEvent_(type, context, frameState) {
      const layer = this.getLayer();
      if (layer.hasListener(type)) {
        const event = new Event_default2(
          type,
          this.inversePixelTransform,
          frameState,
          context
        );
        layer.dispatchEvent(event);
      }
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    preRender(context, frameState) {
      this.frameState = frameState;
      if (frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(EventType_default3.PRERENDER, context, frameState);
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    postRender(context, frameState) {
      if (frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(EventType_default3.POSTRENDER, context, frameState);
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     */
    renderDeferredInternal(frameState) {
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
     */
    getRenderContext(frameState) {
      if (frameState.declutter && !this.deferredContext_) {
        this.deferredContext_ = new ZIndexContext_default();
      }
      return frameState.declutter ? this.deferredContext_.getContext() : this.context;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderDeferred(frameState) {
      if (!frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(
        EventType_default3.PRERENDER,
        this.context,
        frameState
      );
      if (frameState.declutter && this.deferredContext_) {
        this.deferredContext_.draw(this.context);
        this.deferredContext_.clear();
      }
      this.renderDeferredInternal(frameState);
      this.dispatchRenderEvent_(
        EventType_default3.POSTRENDER,
        this.context,
        frameState
      );
    }
    /**
     * Creates a transform for rendering to an element that will be rotated after rendering.
     * @param {import("../../coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} width Width of the rendered element (in pixels).
     * @param {number} height Height of the rendered element (in pixels).
     * @param {number} offsetX Offset on the x-axis in view coordinates.
     * @protected
     * @return {!import("../../transform.js").Transform} Transform.
     */
    getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX) {
      const dx1 = width / 2;
      const dy1 = height / 2;
      const sx = pixelRatio / resolution;
      const sy = -sx;
      const dx2 = -center[0] + offsetX;
      const dy2 = -center[1];
      return compose(
        this.tempTransform,
        dx1,
        dy1,
        sx,
        sy,
        -rotation,
        dx2,
        dy2
      );
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.frameState;
      super.disposeInternal();
    }
  };
  var Layer_default3 = CanvasLayerRenderer;

  // node_modules/ol/renderer/canvas/TileLayer.js
  function addTileToLookup(tilesByZ, tile, z) {
    if (!(z in tilesByZ)) {
      tilesByZ[z] = /* @__PURE__ */ new Set([tile]);
      return true;
    }
    const set = tilesByZ[z];
    const existing = set.has(tile);
    if (!existing) {
      set.add(tile);
    }
    return !existing;
  }
  function removeTileFromLookup(tilesByZ, tile, z) {
    const set = tilesByZ[z];
    if (set) {
      return set.delete(tile);
    }
    return false;
  }
  function getRenderExtent(frameState, extent) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    if (layerState.extent) {
      extent = getIntersection(
        extent,
        fromUserExtent(layerState.extent, frameState.viewState.projection)
      );
    }
    const source = (
      /** @type {import("../../source/Tile.js").default} */
      layerState.layer.getRenderSource()
    );
    if (!source.getWrapX()) {
      const gridExtent = source.getTileGridForProjection(frameState.viewState.projection).getExtent();
      if (gridExtent) {
        extent = getIntersection(extent, gridExtent);
      }
    }
    return extent;
  }
  var CanvasTileLayerRenderer = class extends Layer_default3 {
    /**
     * @param {LayerType} tileLayer Tile layer.
     * @param {Options} [options] Options.
     */
    constructor(tileLayer, options) {
      super(tileLayer);
      options = options || {};
      this.extentChanged = true;
      this.renderComplete = false;
      this.renderedExtent_ = null;
      this.renderedPixelRatio;
      this.renderedProjection = null;
      this.renderedTiles = [];
      this.renderedSourceKey_;
      this.renderedSourceRevision_;
      this.tempExtent = createEmpty();
      this.tempTileRange_ = new TileRange_default(0, 0, 0, 0);
      this.tempTileCoord_ = createOrUpdate3(0, 0, 0);
      const cacheSize2 = options.cacheSize !== void 0 ? options.cacheSize : 512;
      this.tileCache_ = new LRUCache_default(cacheSize2);
      this.sourceTileCache_ = null;
      this.layerExtent = null;
      this.maxStaleKeys = cacheSize2 * 0.5;
    }
    /**
     * @return {LRUCache} Tile cache.
     */
    getTileCache() {
      return this.tileCache_;
    }
    /**
     * @return {LRUCache} Tile cache.
     */
    getSourceTileCache() {
      if (!this.sourceTileCache_) {
        this.sourceTileCache_ = new LRUCache_default(512);
      }
      return this.sourceTileCache_;
    }
    /**
     * Get a tile from the cache or create one if needed.
     *
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getOrCreateTile(z, x, y, frameState) {
      const tileCache = this.tileCache_;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getSource();
      const cacheKey = getCacheKey(tileSource, tileSource.getKey(), z, x, y);
      let tile;
      if (tileCache.containsKey(cacheKey)) {
        tile = tileCache.get(cacheKey);
      } else {
        const projection = frameState.viewState.projection;
        const sourceProjection = tileSource.getProjection();
        tile = tileSource.getTile(
          z,
          x,
          y,
          frameState.pixelRatio,
          projection,
          !sourceProjection || equivalent(sourceProjection, projection) ? void 0 : this.getSourceTileCache()
        );
        if (!tile) {
          return null;
        }
        tileCache.set(cacheKey, tile);
      }
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getTile(z, x, y, frameState) {
      const tile = this.getOrCreateTile(z, x, y, frameState);
      if (!tile) {
        return null;
      }
      return tile;
    }
    /**
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray} Data at the pixel location.
     * @override
     */
    getData(pixel) {
      const frameState = this.frameState;
      if (!frameState) {
        return null;
      }
      const layer = this.getLayer();
      const coordinate = apply(
        frameState.pixelToCoordinateTransform,
        pixel.slice()
      );
      const layerExtent = layer.getExtent();
      if (layerExtent) {
        if (!containsCoordinate(layerExtent, coordinate)) {
          return null;
        }
      }
      const viewState = frameState.viewState;
      const source = layer.getRenderSource();
      const tileGrid = source.getTileGridForProjection(viewState.projection);
      const tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
      for (let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
        const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
        const tile = this.getTile(z, tileCoord[1], tileCoord[2], frameState);
        if (!tile || tile.getState() !== TileState_default.LOADED) {
          continue;
        }
        const tileOrigin = tileGrid.getOrigin(z);
        const tileSize = toSize(tileGrid.getTileSize(z));
        const tileResolution = tileGrid.getResolution(z);
        let image;
        if (tile instanceof ImageTile_default || tile instanceof Tile_default2) {
          image = tile.getImage();
        } else if (tile instanceof DataTile_default) {
          image = asImageLike(tile.getData());
          if (!image) {
            continue;
          }
        } else {
          continue;
        }
        const col = Math.floor(
          tilePixelRatio * ((coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0])
        );
        const row = Math.floor(
          tilePixelRatio * ((tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1])
        );
        const gutter = Math.round(
          tilePixelRatio * source.getGutterForProjection(viewState.projection)
        );
        return this.getImageData(image, col + gutter, row + gutter);
      }
      return null;
    }
    /**
     * Determine whether render should be called.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     * @override
     */
    prepareFrame(frameState) {
      if (!this.renderedProjection) {
        this.renderedProjection = frameState.viewState.projection;
      } else if (frameState.viewState.projection !== this.renderedProjection) {
        this.tileCache_.clear();
        this.renderedProjection = frameState.viewState.projection;
      }
      const source = this.getLayer().getSource();
      if (!source) {
        return false;
      }
      const sourceRevision = source.getRevision();
      if (!this.renderedSourceRevision_) {
        this.renderedSourceRevision_ = sourceRevision;
      } else if (this.renderedSourceRevision_ !== sourceRevision) {
        this.renderedSourceRevision_ = sourceRevision;
        if (this.renderedSourceKey_ === source.getKey()) {
          this.tileCache_.clear();
          this.sourceTileCache_?.clear();
        }
      }
      return true;
    }
    /**
     * Determine whether tiles for next extent should be enqueued for rendering.
     * @return {boolean} Rendering tiles for next extent is supported.
     * @protected
     */
    enqueueTilesForNextExtent() {
      return true;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent The extent to be rendered.
     * @param {number} initialZ The zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @param {number} preload Number of additional levels to load.
     */
    enqueueTiles(frameState, extent, initialZ, tilesByZ, preload) {
      const viewState = frameState.viewState;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getRenderSource();
      const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
      const tileSourceKey = getUid(tileSource);
      if (!(tileSourceKey in frameState.wantedTiles)) {
        frameState.wantedTiles[tileSourceKey] = {};
      }
      const wantedTiles = frameState.wantedTiles[tileSourceKey];
      const map = tileLayer.getMapInternal();
      const minZ = Math.max(
        initialZ - preload,
        tileGrid.getMinZoom(),
        tileGrid.getZForResolution(
          Math.min(
            tileLayer.getMaxResolution(),
            map ? map.getView().getResolutionForZoom(Math.max(tileLayer.getMinZoom(), 0)) : tileGrid.getResolution(0)
          ),
          tileSource.zDirection
        )
      );
      const rotation = viewState.rotation;
      const viewport = rotation ? getRotatedViewport(
        viewState.center,
        viewState.resolution,
        rotation,
        frameState.size
      ) : void 0;
      for (let z = initialZ; z >= minZ; --z) {
        const tileRange = tileGrid.getTileRangeForExtentAndZ(
          extent,
          z,
          this.tempTileRange_
        );
        const tileResolution = tileGrid.getResolution(z);
        for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
          for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
            if (rotation && !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
              continue;
            }
            const tile = this.getTile(z, x, y, frameState);
            if (!tile) {
              continue;
            }
            const added = addTileToLookup(tilesByZ, tile, z);
            if (!added) {
              continue;
            }
            const tileQueueKey = tile.getKey();
            wantedTiles[tileQueueKey] = true;
            if (tile.getState() === TileState_default.IDLE) {
              if (!frameState.tileQueue.isKeyQueued(tileQueueKey)) {
                const tileCoord = createOrUpdate3(z, x, y, this.tempTileCoord_);
                frameState.tileQueue.enqueue([
                  tile,
                  tileSourceKey,
                  tileGrid.getTileCoordCenter(tileCoord),
                  tileResolution
                ]);
              }
            }
          }
        }
      }
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findStaleTile_(tileCoord, tilesByZ) {
      const tileCache = this.tileCache_;
      const z = tileCoord[0];
      const x = tileCoord[1];
      const y = tileCoord[2];
      const staleKeys = this.getStaleKeys();
      for (let i = 0; i < staleKeys.length; ++i) {
        const cacheKey = getCacheKey(
          this.getLayer().getSource(),
          staleKeys[i],
          z,
          x,
          y
        );
        if (tileCache.containsKey(cacheKey)) {
          const tile = tileCache.peek(cacheKey);
          if (tile.getState() === TileState_default.LOADED) {
            tile.endTransition(getUid(this));
            addTileToLookup(tilesByZ, tile, z);
            return true;
          }
        }
      }
      return false;
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {number} altZ The alternate zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findAltTiles_(tileGrid, tileCoord, altZ, tilesByZ) {
      const tileRange = tileGrid.getTileRangeForTileCoordAndZ(
        tileCoord,
        altZ,
        this.tempTileRange_
      );
      if (!tileRange) {
        return false;
      }
      let covered = true;
      const tileCache = this.tileCache_;
      const source = this.getLayer().getRenderSource();
      const sourceKey = source.getKey();
      for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
        for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
          const cacheKey = getCacheKey(source, sourceKey, altZ, x, y);
          let loaded = false;
          if (tileCache.containsKey(cacheKey)) {
            const tile = tileCache.peek(cacheKey);
            if (tile.getState() === TileState_default.LOADED) {
              addTileToLookup(tilesByZ, tile, altZ);
              loaded = true;
            }
          }
          if (!loaded) {
            covered = false;
          }
        }
      }
      return covered;
    }
    /**
     * Render the layer.
     *
     * The frame rendering logic has three parts:
     *
     *  1. Enqueue tiles
     *  2. Find alt tiles for those that are not yet loaded
     *  3. Render loaded tiles
     *
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     * @override
     */
    renderFrame(frameState, target) {
      this.renderComplete = true;
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      const viewState = frameState.viewState;
      const projection = viewState.projection;
      const viewResolution = viewState.resolution;
      const viewCenter = viewState.center;
      const pixelRatio = frameState.pixelRatio;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getSource();
      const tileGrid = tileSource.getTileGridForProjection(projection);
      const z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
      const tileResolution = tileGrid.getResolution(z);
      const sourceKey = tileSource.getKey();
      if (!this.renderedSourceKey_) {
        this.renderedSourceKey_ = sourceKey;
      } else if (this.renderedSourceKey_ !== sourceKey) {
        this.prependStaleKey(this.renderedSourceKey_);
        this.renderedSourceKey_ = sourceKey;
      }
      let frameExtent = frameState.extent;
      const tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
      this.prepareContainer(frameState, target);
      const width = this.context.canvas.width;
      const height = this.context.canvas.height;
      this.layerExtent = layerState.extent ? fromUserExtent(layerState.extent, projection) : null;
      if (this.layerExtent) {
        frameExtent = getIntersection(frameExtent, this.layerExtent);
      }
      const dx = tileResolution * width / 2 / tilePixelRatio;
      const dy = tileResolution * height / 2 / tilePixelRatio;
      const canvasExtent = [
        viewCenter[0] - dx,
        viewCenter[1] - dy,
        viewCenter[0] + dx,
        viewCenter[1] + dy
      ];
      const tilesByZ = {};
      this.renderedTiles.length = 0;
      const preload = tileLayer.getPreload();
      if (frameState.nextExtent && this.enqueueTilesForNextExtent()) {
        const targetZ = tileGrid.getZForResolution(
          viewState.nextResolution,
          tileSource.zDirection
        );
        const nextExtent = getRenderExtent(frameState, frameState.nextExtent);
        this.enqueueTiles(frameState, nextExtent, targetZ, tilesByZ, preload);
      }
      const renderExtent = getRenderExtent(frameState, frameExtent);
      this.enqueueTiles(frameState, renderExtent, z, tilesByZ, 0);
      if (preload > 0) {
        setTimeout(() => {
          this.enqueueTiles(
            frameState,
            renderExtent,
            z - 1,
            tilesByZ,
            preload - 1
          );
        }, 0);
      }
      if (!(z in tilesByZ)) {
        return this.container;
      }
      const uid = getUid(this);
      const time = frameState.time;
      for (const tile of tilesByZ[z]) {
        const tileState = tile.getState();
        if (tileState === TileState_default.EMPTY) {
          continue;
        }
        const tileCoord = tile.tileCoord;
        if (tileState === TileState_default.LOADED) {
          const alpha = tile.getAlpha(uid, time);
          if (alpha === 1) {
            tile.endTransition(uid);
            continue;
          }
        }
        if (tileState !== TileState_default.ERROR) {
          this.renderComplete = false;
        }
        const hasStaleTile = this.findStaleTile_(tileCoord, tilesByZ);
        if (hasStaleTile) {
          removeTileFromLookup(tilesByZ, tile, z);
          frameState.animate = true;
          continue;
        }
        const coveredByChildren = this.findAltTiles_(
          tileGrid,
          tileCoord,
          z + 1,
          tilesByZ
        );
        if (coveredByChildren) {
          continue;
        }
        const minZoom = tileGrid.getMinZoom();
        for (let parentZ = z - 1; parentZ >= minZoom; --parentZ) {
          const coveredByParent = this.findAltTiles_(
            tileGrid,
            tileCoord,
            parentZ,
            tilesByZ
          );
          if (coveredByParent) {
            break;
          }
        }
      }
      const canvasScale = tileResolution / viewResolution * pixelRatio / tilePixelRatio;
      const context = this.getRenderContext(frameState);
      compose(
        this.tempTransform,
        width / 2,
        height / 2,
        canvasScale,
        canvasScale,
        0,
        -width / 2,
        -height / 2
      );
      if (this.layerExtent) {
        this.clipUnrotated(context, frameState, this.layerExtent);
      }
      if (!tileSource.getInterpolate()) {
        context.imageSmoothingEnabled = false;
      }
      this.preRender(context, frameState);
      const zs = Object.keys(tilesByZ).map(Number);
      zs.sort(ascending);
      let currentClip;
      const clips = [];
      const clipZs = [];
      for (let i = zs.length - 1; i >= 0; --i) {
        const currentZ = zs[i];
        const currentTilePixelSize = tileSource.getTilePixelSize(
          currentZ,
          pixelRatio,
          projection
        );
        const currentResolution = tileGrid.getResolution(currentZ);
        const currentScale = currentResolution / tileResolution;
        const dx2 = currentTilePixelSize[0] * currentScale * canvasScale;
        const dy2 = currentTilePixelSize[1] * currentScale * canvasScale;
        const originTileCoord = tileGrid.getTileCoordForCoordAndZ(
          getTopLeft(canvasExtent),
          currentZ
        );
        const originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
        const origin = apply(this.tempTransform, [
          tilePixelRatio * (originTileExtent[0] - canvasExtent[0]) / tileResolution,
          tilePixelRatio * (canvasExtent[3] - originTileExtent[3]) / tileResolution
        ]);
        const tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
        for (const tile of tilesByZ[currentZ]) {
          if (tile.getState() !== TileState_default.LOADED) {
            continue;
          }
          const tileCoord = tile.tileCoord;
          const xIndex = originTileCoord[1] - tileCoord[1];
          const nextX = Math.round(origin[0] - (xIndex - 1) * dx2);
          const yIndex = originTileCoord[2] - tileCoord[2];
          const nextY = Math.round(origin[1] - (yIndex - 1) * dy2);
          const x = Math.round(origin[0] - xIndex * dx2);
          const y = Math.round(origin[1] - yIndex * dy2);
          const w = nextX - x;
          const h = nextY - y;
          const transition = zs.length === 1;
          let contextSaved = false;
          currentClip = [x, y, x + w, y, x + w, y + h, x, y + h];
          for (let i2 = 0, ii = clips.length; i2 < ii; ++i2) {
            if (!transition && currentZ < clipZs[i2]) {
              const clip = clips[i2];
              if (intersects(
                [x, y, x + w, y + h],
                [clip[0], clip[3], clip[4], clip[7]]
              )) {
                if (!contextSaved) {
                  context.save();
                  contextSaved = true;
                }
                context.beginPath();
                context.moveTo(currentClip[0], currentClip[1]);
                context.lineTo(currentClip[2], currentClip[3]);
                context.lineTo(currentClip[4], currentClip[5]);
                context.lineTo(currentClip[6], currentClip[7]);
                context.moveTo(clip[6], clip[7]);
                context.lineTo(clip[4], clip[5]);
                context.lineTo(clip[2], clip[3]);
                context.lineTo(clip[0], clip[1]);
                context.clip();
              }
            }
          }
          clips.push(currentClip);
          clipZs.push(currentZ);
          this.drawTile(tile, frameState, x, y, w, h, tileGutter, transition);
          if (contextSaved) {
            context.restore();
          }
          this.renderedTiles.unshift(tile);
          this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
        }
      }
      this.renderedResolution = tileResolution;
      this.extentChanged = !this.renderedExtent_ || !equals(this.renderedExtent_, canvasExtent);
      this.renderedExtent_ = canvasExtent;
      this.renderedPixelRatio = pixelRatio;
      this.postRender(this.context, frameState);
      if (this.layerExtent) {
        context.restore();
      }
      context.imageSmoothingEnabled = true;
      if (this.renderComplete) {
        const postRenderFunction = (map, frameState2) => {
          const tileSourceKey = getUid(tileSource);
          const wantedTiles = frameState2.wantedTiles[tileSourceKey];
          const tilesCount = wantedTiles ? Object.keys(wantedTiles).length : 0;
          this.updateCacheSize(tilesCount);
          this.tileCache_.expireCache();
          this.sourceTileCache_?.expireCache();
        };
        frameState.postRenderFunctions.push(postRenderFunction);
      }
      return this.container;
    }
    /**
     * Increases the cache size if needed
     * @param {number} tileCount Minimum number of tiles needed.
     */
    updateCacheSize(tileCount) {
      this.tileCache_.highWaterMark = Math.max(
        this.tileCache_.highWaterMark,
        tileCount * 2
      );
    }
    /**
     * @param {import("../../Tile.js").default} tile Tile.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {number} x Left of the tile.
     * @param {number} y Top of the tile.
     * @param {number} w Width of the tile.
     * @param {number} h Height of the tile.
     * @param {number} gutter Tile gutter.
     * @param {boolean} transition Apply an alpha transition.
     * @protected
     */
    drawTile(tile, frameState, x, y, w, h, gutter, transition) {
      let image;
      if (tile instanceof DataTile_default) {
        image = asImageLike(tile.getData());
        if (!image) {
          throw new Error("Rendering array data is not yet supported");
        }
      } else {
        image = this.getTileImage(
          /** @type {import("../../ImageTile.js").default} */
          tile
        );
      }
      if (!image) {
        return;
      }
      const context = this.getRenderContext(frameState);
      const uid = getUid(this);
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      const alpha = layerState.opacity * (transition ? tile.getAlpha(uid, frameState.time) : 1);
      const alphaChanged = alpha !== context.globalAlpha;
      if (alphaChanged) {
        context.save();
        context.globalAlpha = alpha;
      }
      context.drawImage(
        image,
        gutter,
        gutter,
        image.width - 2 * gutter,
        image.height - 2 * gutter,
        x,
        y,
        w,
        h
      );
      if (alphaChanged) {
        context.restore();
      }
      if (alpha !== layerState.opacity) {
        frameState.animate = true;
      } else if (transition) {
        tile.endTransition(uid);
      }
    }
    /**
     * @return {HTMLCanvasElement|OffscreenCanvas} Image
     */
    getImage() {
      const context = this.context;
      return context ? context.canvas : null;
    }
    /**
     * Get the image from a tile.
     * @param {import("../../ImageTile.js").default} tile Tile.
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @protected
     */
    getTileImage(tile) {
      return tile.getImage();
    }
    /**
     * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @param {import('../../Tile.js').default} tile Tile.
     * @protected
     */
    updateUsedTiles(usedTiles, tileSource, tile) {
      const tileSourceKey = getUid(tileSource);
      if (!(tileSourceKey in usedTiles)) {
        usedTiles[tileSourceKey] = {};
      }
      usedTiles[tileSourceKey][tile.getKey()] = true;
    }
  };
  var TileLayer_default = CanvasTileLayerRenderer;

  // node_modules/ol/layer/TileProperty.js
  var TileProperty_default = {
    PRELOAD: "preload",
    USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
  };

  // node_modules/ol/layer/BaseTile.js
  var BaseTileLayer = class extends Layer_default {
    /**
     * @param {Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(options) {
      options = options ? options : {};
      const baseOptions = Object.assign({}, options);
      const cacheSize2 = options.cacheSize;
      delete options.cacheSize;
      delete baseOptions.preload;
      delete baseOptions.useInterimTilesOnError;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.cacheSize_ = cacheSize2;
      this.setPreload(options.preload !== void 0 ? options.preload : 0);
      this.setUseInterimTilesOnError(
        options.useInterimTilesOnError !== void 0 ? options.useInterimTilesOnError : true
      );
    }
    /**
     * @return {number|undefined} The suggested cache size
     * @protected
     */
    getCacheSize() {
      return this.cacheSize_;
    }
    /**
     * Return the level as number to which we will preload tiles up to.
     * @return {number} The level to preload tiles up to.
     * @observable
     * @api
     */
    getPreload() {
      return (
        /** @type {number} */
        this.get(TileProperty_default.PRELOAD)
      );
    }
    /**
     * Set the level as number to which we will preload tiles up to.
     * @param {number} preload The level to preload tiles up to.
     * @observable
     * @api
     */
    setPreload(preload) {
      this.set(TileProperty_default.PRELOAD, preload);
    }
    /**
     * Deprecated.  Whether we use interim tiles on error.
     * @return {boolean} Use interim tiles on error.
     * @observable
     * @api
     */
    getUseInterimTilesOnError() {
      return (
        /** @type {boolean} */
        this.get(TileProperty_default.USE_INTERIM_TILES_ON_ERROR)
      );
    }
    /**
     * Deprecated.  Set whether we use interim tiles on error.
     * @param {boolean} useInterimTilesOnError Use interim tiles on error.
     * @observable
     * @api
     */
    setUseInterimTilesOnError(useInterimTilesOnError) {
      this.set(TileProperty_default.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    }
    /**
     * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
     * a four element RGBA array will be returned.  For data tiles, the array length will match the
     * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
     * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
     *
     * ```js
     * // display layer data on every pointer move
     * map.on('pointermove', (event) => {
     *   console.log(layer.getData(event.pixel));
     * });
     * ```
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     * @api
     * @override
     */
    getData(pixel) {
      return super.getData(pixel);
    }
  };
  var BaseTile_default = BaseTileLayer;

  // node_modules/ol/layer/Tile.js
  var TileLayer = class extends BaseTile_default {
    /**
     * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(options) {
      super(options);
    }
    /**
     * @override
     */
    createRenderer() {
      return new TileLayer_default(this, {
        cacheSize: this.getCacheSize()
      });
    }
  };
  var Tile_default4 = TileLayer;

  // node_modules/ol/control/FullScreen.js
  var events = ["fullscreenchange", "webkitfullscreenchange"];
  var FullScreenEventType = {
    /**
     * Triggered after the map entered fullscreen.
     * @event FullScreenEventType#enterfullscreen
     * @api
     */
    ENTERFULLSCREEN: "enterfullscreen",
    /**
     * Triggered after the map leave fullscreen.
     * @event FullScreenEventType#leavefullscreen
     * @api
     */
    LEAVEFULLSCREEN: "leavefullscreen"
  };
  var FullScreen = class extends Control_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        target: options.target
      });
      this.on;
      this.once;
      this.un;
      this.keys_ = options.keys !== void 0 ? options.keys : false;
      this.source_ = options.source;
      this.isInFullscreen_ = false;
      this.boundHandleMapTargetChange_ = this.handleMapTargetChange_.bind(this);
      this.cssClassName_ = options.className !== void 0 ? options.className : "ol-full-screen";
      this.documentListeners_ = [];
      this.activeClassName_ = options.activeClassName !== void 0 ? options.activeClassName.split(" ") : [this.cssClassName_ + "-true"];
      this.inactiveClassName_ = options.inactiveClassName !== void 0 ? options.inactiveClassName.split(" ") : [this.cssClassName_ + "-false"];
      const label = options.label !== void 0 ? options.label : "\u2922";
      this.labelNode_ = typeof label === "string" ? document.createTextNode(label) : label;
      const labelActive = options.labelActive !== void 0 ? options.labelActive : "\xD7";
      this.labelActiveNode_ = typeof labelActive === "string" ? document.createTextNode(labelActive) : labelActive;
      const tipLabel = options.tipLabel ? options.tipLabel : "Toggle full-screen";
      this.button_ = document.createElement("button");
      this.button_.title = tipLabel;
      this.button_.setAttribute("type", "button");
      this.button_.appendChild(this.labelNode_);
      this.button_.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      this.setClassName_(this.button_, this.isInFullscreen_);
      this.element.className = `${this.cssClassName_} ${CLASS_UNSELECTABLE} ${CLASS_CONTROL}`;
      this.element.appendChild(this.button_);
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      this.handleFullScreen_();
    }
    /**
     * @private
     */
    handleFullScreen_() {
      const map = this.getMap();
      if (!map) {
        return;
      }
      const doc = map.getOwnerDocument();
      if (!isFullScreenSupported(doc)) {
        return;
      }
      if (isFullScreen(doc)) {
        exitFullScreen(doc);
      } else {
        let element;
        if (this.source_) {
          element = typeof this.source_ === "string" ? doc.getElementById(this.source_) : this.source_;
        } else {
          element = map.getTargetElement();
        }
        if (this.keys_) {
          requestFullScreenWithKeys(element);
        } else {
          requestFullScreen(element);
        }
      }
    }
    /**
     * @private
     */
    handleFullScreenChange_() {
      const map = this.getMap();
      if (!map) {
        return;
      }
      const wasInFullscreen = this.isInFullscreen_;
      this.isInFullscreen_ = isFullScreen(map.getOwnerDocument());
      if (wasInFullscreen !== this.isInFullscreen_) {
        this.setClassName_(this.button_, this.isInFullscreen_);
        if (this.isInFullscreen_) {
          replaceNode(this.labelActiveNode_, this.labelNode_);
          this.dispatchEvent(FullScreenEventType.ENTERFULLSCREEN);
        } else {
          replaceNode(this.labelNode_, this.labelActiveNode_);
          this.dispatchEvent(FullScreenEventType.LEAVEFULLSCREEN);
        }
        map.updateSize();
      }
    }
    /**
     * @param {HTMLElement} element Target element
     * @param {boolean} fullscreen True if fullscreen class name should be active
     * @private
     */
    setClassName_(element, fullscreen) {
      if (fullscreen) {
        element.classList.remove(...this.inactiveClassName_);
        element.classList.add(...this.activeClassName_);
      } else {
        element.classList.remove(...this.activeClassName_);
        element.classList.add(...this.inactiveClassName_);
      }
    }
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     * @override
     */
    setMap(map) {
      const oldMap = this.getMap();
      if (oldMap) {
        oldMap.removeChangeListener(
          MapProperty_default.TARGET,
          this.boundHandleMapTargetChange_
        );
      }
      super.setMap(map);
      this.handleMapTargetChange_();
      if (map) {
        map.addChangeListener(
          MapProperty_default.TARGET,
          this.boundHandleMapTargetChange_
        );
      }
    }
    /**
     * @private
     */
    handleMapTargetChange_() {
      const listeners = this.documentListeners_;
      for (let i = 0, ii = listeners.length; i < ii; ++i) {
        unlistenByKey(listeners[i]);
      }
      listeners.length = 0;
      const map = this.getMap();
      if (map) {
        const doc = map.getOwnerDocument();
        if (isFullScreenSupported(doc)) {
          this.element.classList.remove(CLASS_UNSUPPORTED);
        } else {
          this.element.classList.add(CLASS_UNSUPPORTED);
        }
        for (let i = 0, ii = events.length; i < ii; ++i) {
          listeners.push(
            listen(doc, events[i], this.handleFullScreenChange_, this)
          );
        }
        this.handleFullScreenChange_();
      }
    }
  };
  function isFullScreenSupported(doc) {
    const body = doc.body;
    return !!(body["webkitRequestFullscreen"] || body.requestFullscreen && doc.fullscreenEnabled);
  }
  function isFullScreen(doc) {
    return !!(doc["webkitIsFullScreen"] || doc.fullscreenElement);
  }
  function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element["webkitRequestFullscreen"]) {
      element["webkitRequestFullscreen"]();
    }
  }
  function requestFullScreenWithKeys(element) {
    if (element["webkitRequestFullscreen"]) {
      element["webkitRequestFullscreen"]();
    } else {
      requestFullScreen(element);
    }
  }
  function exitFullScreen(doc) {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc["webkitExitFullscreen"]) {
      doc["webkitExitFullscreen"]();
    }
  }
  var FullScreen_default = FullScreen;

  // node_modules/hdr-canvas/dist/hdr-canvas.js
  var HDRImage = class {
    static DEFAULT_COLORSPACE = "rec2100-hlg";
    static SDR_MULTIPLIER = 2 ** 16 - 1;
    data;
    height;
    width;
    constructor(width, height) {
      this.height = height;
      this.width = width;
    }
    static fromImageData(imageData) {
      throw new Error("Method not implemented!");
    }
    static fromImageDataArray(width, height, imageDataArray) {
      throw new Error("Method not implemented!");
    }
    static async loadSDRImageData(url) {
      return fetch(url).then((response) => response.blob()).then((blob) => {
        return createImageBitmap(blob);
      }).then((bitmap) => {
        const { width, height } = bitmap;
        const offscreen = new OffscreenCanvas(width, height);
        const ctx = offscreen.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        return ctx.getImageData(0, 0, width, height);
      });
    }
    getPixel(w, h) {
      const pos = (h * this.width + w) * 4;
      return this.data.slice(pos, pos + 4);
    }
    setPixel(w, h, px) {
      const pos = (h * this.width + w) * 4;
      this.data[pos + 0] = px[0];
      this.data[pos + 1] = px[1];
      this.data[pos + 2] = px[2];
      this.data[pos + 3] = px[3];
    }
    clone() {
      const copy = Object.create(Object.getPrototypeOf(this));
      Object.assign(copy, this);
      return copy;
    }
  };
  function uncurryThis(target) {
    return (thisArg, ...args) => {
      return ReflectApply(target, thisArg, args);
    };
  }
  function uncurryThisGetter(target, key) {
    return uncurryThis(
      ReflectGetOwnPropertyDescriptor(
        target,
        key
      ).get
    );
  }
  var {
    apply: ReflectApply,
    getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor,
    getPrototypeOf: ReflectGetPrototypeOf
  } = Reflect;
  var {
    EPSILON,
    isFinite: NumberIsFinite,
    isNaN: NumberIsNaN
  } = Number;
  var {
    iterator: SymbolIterator,
    toStringTag: SymbolToStringTag
  } = Symbol;
  var {
    abs: MathAbs
  } = Math;
  var NativeArrayBuffer = ArrayBuffer;
  var ArrayBufferPrototype = NativeArrayBuffer.prototype;
  uncurryThisGetter(ArrayBufferPrototype, "byteLength");
  var NativeSharedArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : null;
  NativeSharedArrayBuffer && uncurryThisGetter(NativeSharedArrayBuffer.prototype, "byteLength");
  var TypedArray = ReflectGetPrototypeOf(Uint8Array);
  TypedArray.from;
  var TypedArrayPrototype = TypedArray.prototype;
  TypedArrayPrototype[SymbolIterator];
  uncurryThis(TypedArrayPrototype.keys);
  uncurryThis(
    TypedArrayPrototype.values
  );
  uncurryThis(
    TypedArrayPrototype.entries
  );
  uncurryThis(TypedArrayPrototype.set);
  uncurryThis(
    TypedArrayPrototype.reverse
  );
  uncurryThis(TypedArrayPrototype.fill);
  uncurryThis(
    TypedArrayPrototype.copyWithin
  );
  uncurryThis(TypedArrayPrototype.sort);
  uncurryThis(TypedArrayPrototype.slice);
  uncurryThis(
    TypedArrayPrototype.subarray
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "buffer"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "byteOffset"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "length"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    SymbolToStringTag
  );
  var NativeUint8Array = Uint8Array;
  var NativeUint16Array = Uint16Array;
  var NativeUint32Array = Uint32Array;
  var ArrayIteratorPrototype = ReflectGetPrototypeOf([][SymbolIterator]());
  uncurryThis(ArrayIteratorPrototype.next);
  uncurryThis((function* () {
  })().next);
  ReflectGetPrototypeOf(ArrayIteratorPrototype);
  var INVERSE_OF_EPSILON = 1 / EPSILON;
  var FLOAT16_MIN_VALUE = 6103515625e-14;
  var FLOAT16_EPSILON = 9765625e-10;
  var FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE = FLOAT16_EPSILON * FLOAT16_MIN_VALUE;
  var FLOAT16_EPSILON_DEVIDED_BY_EPSILON = FLOAT16_EPSILON * INVERSE_OF_EPSILON;
  var baseTable = new NativeUint16Array(512);
  var shiftTable = new NativeUint8Array(512);
  for (let i = 0; i < 256; ++i) {
    const e = i - 127;
    if (e < -24) {
      baseTable[i] = 0;
      baseTable[i | 256] = 32768;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else if (e < -14) {
      baseTable[i] = 1024 >> -e - 14;
      baseTable[i | 256] = 1024 >> -e - 14 | 32768;
      shiftTable[i] = -e - 1;
      shiftTable[i | 256] = -e - 1;
    } else if (e <= 15) {
      baseTable[i] = e + 15 << 10;
      baseTable[i | 256] = e + 15 << 10 | 32768;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    } else if (e < 128) {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    }
  }
  var mantissaTable = new NativeUint32Array(2048);
  for (let i = 1; i < 1024; ++i) {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      m <<= 1;
      e -= 8388608;
    }
    m &= -8388609;
    e += 947912704;
    mantissaTable[i] = m | e;
  }
  for (let i = 1024; i < 2048; ++i) {
    mantissaTable[i] = 939524096 + (i - 1024 << 13);
  }
  var exponentTable = new NativeUint32Array(64);
  for (let i = 1; i < 31; ++i) {
    exponentTable[i] = i << 23;
  }
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  for (let i = 33; i < 63; ++i) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  exponentTable[63] = 3347054592;
  var offsetTable = new NativeUint16Array(64);
  for (let i = 1; i < 64; ++i) {
    if (i !== 32) {
      offsetTable[i] = 1024;
    }
  }
  function getHdrOptions() {
    const hdrOptions = {
      colorSpace: HDRImage.DEFAULT_COLORSPACE,
      colorType: "float16",
      toneMapping: { mode: "extended" }
    };
    if (Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))) {
      hdrOptions["colorSpace"] = "display-p3";
    }
    return hdrOptions;
  }
  function defaultGetContextHDR() {
    HTMLCanvasElement.prototype._getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, options) {
      if (options !== void 0) {
        options = Object.assign({}, options, getHdrOptions());
      } else {
        options = getHdrOptions();
      }
      return this._getContext(type, options);
    };
  }
  function checkHDR() {
    try {
      const dynamicRangeHighMQ = window.matchMedia("(dynamic-range: high)").matches;
      const colorGamutMQ = window.matchMedia("(color-gamut: rec2020)").matches || window.matchMedia("(color-gamut: p3)").matches;
      if (colorGamutMQ && dynamicRangeHighMQ) {
        return true;
      }
      return false;
    } catch (e) {
      console.error("Exception during check for HDR", e);
      return false;
    }
  }
  function checkHDRCanvas() {
    if (!checkHDR() || !checkFloat16Array()) {
      return false;
    }
    try {
      const canvas = document.createElement("canvas");
      if (!canvas.getContext) {
        return false;
      }
      const options = getHdrOptions();
      const ctx = canvas.getContext("2d", options);
      if (ctx === null) {
        return false;
      }
      return true;
    } catch (e) {
      console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled", e);
      return false;
    }
    return false;
  }
  function checkFloat16Array() {
    try {
      new ImageData(new Float16Array(4), 1, 1, { pixelFormat: "rgba-float16" });
    } catch (e) {
      console.error("Browser doesn't support Float16Array", e);
      return false;
    }
    return true;
  }

  // <stdin>
  var AnimatedView = class extends View_default {
    /**
     * @param {Object} [opt_options] View options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      super(opt_options);
      this.pauseableAnimations_ = [];
      this.animationsPointer_ = -1;
      this.lastAnimation_ = {};
      this.initalCenter = this.getCenter();
    }
    // Emulate a ring data structure
    getPauseableAnimation_() {
      if (this.pauseableAnimations_.length - 1 > this.animationsPointer_) {
        this.animationsPointer_++;
        return this.pauseableAnimations_[this.animationsPointer_];
      } else {
        this.animationsPointer_ = 0;
        return this.pauseableAnimations_[this.animationsPointer_];
      }
    }
    // This is the callback, when one animation has finished
    nextAnimation_(completed) {
      if (completed === void 0 || completed) {
        var context = this;
        var nextAnimation = this.getPauseableAnimation_();
        this.animate(nextAnimation, function(state) {
          context.nextAnimation_(state);
        });
      }
    }
    pauseAnimation() {
      if (!this.getAnimating()) {
        return;
      }
      var animation = this.animations_[0][0];
      var now = Date.now();
      var elapsed = now - animation.start;
      let stopState = {
        center: animation.center,
        zoom: animation.zoom,
        rotation: animation.rotation,
        duration: animation.duration - elapsed
      };
      this.lastAnimation_ = stopState;
      this.cancelAnimations();
    }
    startAnimation_() {
      if (this.getAnimating()) {
        return;
      }
      if (Object.keys(this.lastAnimation_).length !== 0) {
        this.lastAnimation_ = {};
      }
      var context = this;
      this.animate(this.getPauseableAnimation_, function(state) {
        context.nextAnimation_(state);
      });
    }
    resumeAnimation() {
      if (this.getAnimating()) {
        return;
      }
      if (Object.keys(this.lastAnimation_).length === 0) {
        this.startAnimation_();
      } else {
        var context = this;
        this.animate(this.lastAnimation_, function(state) {
          context.nextAnimation_(state);
        });
      }
    }
    setPauseableAnimation(var_args) {
      var args = new Array(arguments.length);
      for (let i = 0; i < args.length; ++i) {
        var options = arguments[i];
        args[i] = options;
      }
      this.animationsPointer_ = -1;
      this.pauseableAnimations_ = args;
    }
    getPauseableAnimation() {
      return this.pauseableAnimations_;
    }
    setCenter(center) {
      this.initalCenter = center;
      this.setCenterInternal(fromUserCoordinate(center, this.getProjection()));
    }
    isNoopAnimation(animation) {
      return false;
    }
    //Even though the OL API is quite good there are some beginners mistakes, like missing symetry
    setResolutions(resolutions) {
      this.resolutions_ = resolutions;
    }
    setExtent(extent) {
      var options = {};
      options.extent = fromUserExtent(extent, this.projection_);
      this.applyOptions_(options);
    }
  };
  var RotateLeftControl = class extends Control_default {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      const tipLabel = options.tipLabel ? options.tipLabel : "Rotate 90\xB0 left";
      const button = document.createElement("button");
      button.innerHTML = '<i class="icon-left"></i>';
      button.title = tipLabel;
      const element = document.createElement("div");
      element.className = "rotate-left ol-unselectable ol-control";
      element.appendChild(button);
      super({
        element,
        target: options.target
      });
      button.addEventListener("click", this.handleRotateLeft.bind(this), false);
    }
    handleRotateLeft() {
      var startRotation = this.getMap().getView().getRotation();
      this.getMap().getView().setRotation(startRotation + -90 * Math.PI / 180);
    }
  };
  var RotateRightControl = class extends Control_default {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      const tipLabel = options.tipLabel ? options.tipLabel : "Rotate 90\xB0 right";
      const button = document.createElement("button");
      button.innerHTML = '<i class="icon-right"></i>';
      button.title = tipLabel;
      const element = document.createElement("div");
      element.className = "rotate-right ol-unselectable ol-control";
      element.appendChild(button);
      super({
        element,
        target: options.target
      });
      button.addEventListener("click", this.handleRotateRight.bind(this), false);
    }
    handleRotateRight() {
      var startRotation = this.getMap().getView().getRotation();
      this.getMap().getView().setRotation(startRotation + 90 * Math.PI / 180);
    }
  };
  window.addMap = function(element, url, rotation, baseURL, hdr) {
    var initialRotation = 0;
    if (rotation !== void 0 && rotation != 0) {
      initialRotation = rotation * Math.PI / 180;
    }
    if (hdr === void 0) {
      hdr = false;
    }
    var lang = "en";
    if (document.documentElement.lang !== void 0) {
      const locale = new Intl.Locale(document.documentElement.lang);
      lang = locale.language;
    }
    var toolTips = {
      "de": { "zoomIn": "Vergr\xF6\xDFern", "zoomOut": "Verkleinern", "fullscreen": "Vollbildansicht", "rotate": "Rotation zur\xFCcksetzen", "rotateLeft": "90\xB0 nach links drehen", "rotateRight": "90\xB0 nach rechst drehen" },
      "en": { "zoomIn": "Zoom in", "zoomOut": "Zoom out", "fullscreen": "Toggle full-screen", "rotate": "Reset rotation", "rotateLeft": "Rotate 90\xB0 left", "rotateRight": "Rotate 90\xB0 right" }
    };
    console.log("Setting up " + lang);
    if (hdr && checkHDR() && checkHDRCanvas()) {
      defaultGetContextHDR();
      console.log("Enabled HDR Canvas");
    }
    var layer = new Tile_default4(), map = new Map_default2({
      controls: [
        new Zoom_default({ zoomInTipLabel: toolTips[lang]["zoomIn"], zoomOutTipLabel: toolTips[lang]["zoomOut"] }),
        new FullScreen_default({ tipLabel: toolTips[lang]["fullscreen"] }),
        new Rotate_default({ tipLabel: toolTips[lang]["rotate"] }),
        new RotateLeftControl({ tipLabel: toolTips[lang]["rotateLeft"] }),
        new RotateRightControl({ tipLabel: toolTips[lang]["rotateRight"] })
      ],
      layers: [layer],
      target: element
    });
    fetch(url).then(function(response) {
      response.json().then(function(imageInfo) {
        var options = new IIIFInfo_default(imageInfo).getTileSourceOptions();
        if (options === void 0 || options.version === void 0) {
          console.log("Data seems to be no valid IIIF image information.");
          return;
        }
        options.zDirection = -1;
        if (baseURL !== void 0 && baseURL != "") {
          options.url = baseURL;
        }
        var iiifTileSource = new IIIF_default(options);
        layer.setSource(iiifTileSource);
        map.setView(
          new View_default({
            resolutions: iiifTileSource.getTileGrid().getResolutions(),
            extent: iiifTileSource.getTileGrid().getExtent(),
            constrainOnlyCenter: true,
            rotation: initialRotation
          })
        );
        map.getView().fit(iiifTileSource.getTileGrid().getExtent());
      }).catch(function(body) {
        console.log("Could not read image info json. " + body);
      });
    }).catch(function() {
      console.log("Could not read data from URL.");
    });
    return map;
  };
  window.animatedMap = function(element, url, rotation, baseURL, initialZoom, animation, moElement, initialCenter) {
    var initialRotation = 0;
    if (rotation !== void 0 && rotation != 0) {
      initialRotation = rotation * Math.PI / 180;
    }
    var layer = new Tile_default4(), map = new Map_default2({
      controls: [],
      layers: [layer],
      target: element
    }), view = new AnimatedView({
      constrainOnlyCenter: true,
      rotation: initialRotation
    });
    fetch(url).then(function(response) {
      response.json().then(function(imageInfo) {
        var options = new IIIFInfo_default(imageInfo).getTileSourceOptions();
        if (options === void 0 || options.version === void 0) {
          console.log("Data seems to be no valid IIIF image information.");
          return;
        }
        options.zDirection = -1;
        if (baseURL !== void 0 && baseURL != "") {
          options.url = baseURL;
        }
        var iiifTileSource = new IIIF_default(options);
        layer.setSource(iiifTileSource);
        view.setExtent(iiifTileSource.getTileGrid().getExtent());
        view.setResolutions(iiifTileSource.getTileGrid().getResolutions());
        map.setView(view);
        map.getView().fit(iiifTileSource.getTileGrid().getExtent());
        if (initialZoom !== void 0 && initialZoom !== "") {
          map.getView().setZoom(initialZoom);
        }
        if (initialCenter !== void 0 && initialCenter !== "") {
          map.getView().setCenter(initialCenter);
        }
      }).catch(function(body) {
        console.log(`Could not read image info json from "${url}".` + body);
      });
    }).catch(function() {
      console.log("Could not read data from URL.");
    });
    if (animation !== void 0 && animation !== "" && moElement !== void 0) {
      if (!Array.isArray(animation)) {
        view.setPauseableAnimation(animation);
      } else {
        view.setPauseableAnimation(...animation);
      }
      map.once("rendercomplete", function() {
        moElement.addEventListener("mouseenter", function() {
          view.resumeAnimation();
        });
        moElement.addEventListener("mouseleave", function(event) {
          view.pauseAnimation();
        });
      });
    }
    return map;
  };
})();
