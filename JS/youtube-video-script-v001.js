var getyouID = document.querySelectorAll("#mainDisplaybox")[0].innerHTML.split("Url[")[1].split("]")[0].split("v=")[1];

document.querySelectorAll(".youtubeAu")[0].setAttribute("data-video", getyouID); 

function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"R29vZ2xl/AVvXsEgHgKvTImxQarBuNFRQKzi-E8txa-sNB9ctJpH8Z9P5yvPXdgBktouM_APiQzeUohxQWOrY5vhiAYlOE8e5qQm9YfB1dBmuoryRxrPRo6ZWnh0j2K5vdSNce-6bH5ZVJ9VWnDcl3dd5LnafyKuFB08H15nSY1ZxTY-zFC_lphB0Ls3y2Zh1wKK7Zg/s1600/Yellow%20Push%20Button.png":"R29vZ2xl/AVvXsEjVzal8NQBabEo_XwjSxVi7aSDFIJmQDBzjeFznshrjulJLcRCSoV6Hyg7Fqxi4Nbhi-P0X8b2s62-mmtRQ99292wsheo0CxE364MzbYaEd6m0KVXuUm2n6E6NVwvVh2j7ROxXZFpUEv_tm_inl5m3M3hiAOCiEpbNPKkGcwuVXp9Ol-FIWF6XUXQ/s1600/Yellow%20Play%20Button.png";t.setAttribute("src","https://blogger.googleusercontent.com/img/b/"+a)};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}