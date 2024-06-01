// Initial data extraction
var GetDetailMain = document.querySelectorAll("#mainDisplaybox")[0].innerHTML;
var regEndOfficial = /[oO]fficial|OFFICIAL|[(]/;
var titleYt = GetDetailMain.split("Name[")[1].split("]")[0].replaceAll("[Official]","(Official)").split(regEndOfficial)[0];
var regexFt = /ft|Ft|ft.|[Ff]eat?[.]?| x| x/;
var zing1 = "<a style='text-decoration: none;' href='https://mzalyrics.blogspot.com/search?q=" + titleYt.split("-")[0].split(regexFt)[0] + "'>" + titleYt.split("-")[0].split(regexFt)[0] + "</a>";
var zing2 = "ft." + titleYt.split("-")[0].split(regexFt)[1];
var ZongName = GetDetailMain.split("Name[")[1].split("]")[0].split("-")[1].split(regEndOfficial)[0];
var reDat = GetDetailMain.split("Date[")[1].split("]")[0].split("at")[0];

// Update elements with extracted data
document.querySelectorAll(".Singer1")[0].innerHTML = zing1;
document.querySelectorAll(".Singer2")[0].innerHTML = zing2;

titleYt.match(regexFt) ? document.querySelectorAll(".Singer2")[0].style.display = "unset" : document.querySelectorAll(".Singer2")[0].style.display = "none";

var sigr1 = document.getElementsByClassName("Singer1");
for (var i = 0; i < sigr1.length; i++) {
    sigr1[i].innerHTML = zing1;
}

var sngNm = document.getElementsByClassName("songNameNew");
for (var i = 0; i < sngNm.length; i++) {
    sngNm[i].innerHTML = ZongName;
}

var sngDat = document.getElementsByClassName("releseDate");
for (var i = 0; i < sngDat.length; i++) {
    sngDat[i].innerHTML = reDat;
}

document.querySelectorAll(".ThumnailDetiale")[0].innerHTML = "<img alt='' src='https://i.ytimg.com/vi/" + GetDetailMain.split("Url[")[1].split("]")[0].split("v=")[1] + "/mqdefault.jpg' title='' style='margin-top: 4px; border-radius: 19px;' width='98%' /><br/><br/>";

if (GetDetailMain.split("Lyrics{")[1].split("}")[0].match(/[A-Z]/g)) {
    document.querySelectorAll(".LyricsNw")[0].innerHTML = GetDetailMain.split("Lyrics{")[1].split("}")[0].replaceAll(/[A-Z]/g, "<br/>$&").replaceAll("[<br/>", "<br/><br/>[").replaceAll("]", "$&<br/>").replaceAll("(<br/>", "(").replace("<br/><br/>[", "[").replaceAll("Lyrics: ", "").replaceAll("-<br/>", "-");
} else {
    document.querySelectorAll(".lyricsUP")[0].style.display = "unset";
    document.querySelectorAll(".LyricsNw")[0].style.display = "none";
}

// Download button function
function downBTN() {
    location.href = "https://ytmp3x.com/" + GetDetailMain.split("Url[")[1].split("]")[0];
    window.open("https://flannelbeforehand.com/ixj4r4d4t?key=3cc49a4141a914efa38c0e25daeef120");
}

// YouTube iframe API integration
var getyouID = GetDetailMain.split("Url[")[1].split("]")[0].split("v=")[1];
document.querySelectorAll(".youtubeAu")[0].setAttribute("data-video", getyouID);

function onYouTubeIframeAPIReady() {
    var e = document.getElementById("youtube-audio"),
        t = document.createElement("img");
    t.setAttribute("id", "youtube-icon"), t.style.cssText = "cursor:pointer;cursor:hand", e.appendChild(t);
    var a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var o = function (e) {
        var a = e ? "IDzX9gL.png" : "quyUPXN.png";
        t.setAttribute("src", "https://i.imgur.com/" + a)
    };
    e.onclick = function () {
        r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0))
    };
    var r = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: e.dataset.video,
        playerVars: {
            autoplay: e.dataset.autoplay,
            loop: e.dataset.loop
        },
        events: {
            onReady: function (e) {
                r.setPlaybackQuality("small"), o(r.getPlayerState() !== YT.PlayerState.CUED)
            },
            onStateChange: function (e) {
                e.data === YT.PlayerState.ENDED && o(!1)
            }
        }
    })
}

// Download Timer Script
var modalxx = document.getElementById("mymodalxx");
var btnxx = document.getElementById("mybtnxxxxxx");
var spanx = document.getElementsByClassName("closexx")[0];
spanx.style.display = "none";

btnxx.onclick = function () {
    modalxx.style.display = "block";
    var timeleft = 30;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.querySelectorAll("#mainDown")[0].style.display = "unset";
            spanx.style.display = "unset";
            document.querySelectorAll("#countdownx")[0].style.display = "none";
        } else {
            document.getElementById("countdownx").innerHTML = "Please wait " + timeleft + " sec";
        }
        timeleft -= 1;
    }, 1000);
}

spanx.onclick = function () {
    modalxx.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalxx) {
        modalxx.style.display = "unset";
    }
};

function loctDown() {
    var getLyDown = "https://ytmp3x.com/" + GetDetailMain.split("Url[")[1].split("]")[0];
    window.open(getLyDown);
    window.location.reload();
}

document.querySelectorAll(".leftDivdr")[0].innerHTML = "🎧"
