(function() {
    // Replace text in story
    var story_1 = document.querySelectorAll(".movie_story_new")[0].innerHTML;
    document.querySelectorAll(".movie_story_new")[0].innerHTML = story_1.replaceAll("He", "<br/><br/>He").replaceAll("The", "<br/><br/>The");

    // Handle YouTube video
    var text5 = document.getElementById('youtubeurl').innerHTML;
    const VID_REGEX = text5.split("v=");
    var VidID = VID_REGEX[1];
    document.getElementById("newInn").innerHTML = ('<img src="https://img.youtube.com/vi/' + VidID + '/hqdefault.jpg"/>');
    document.getElementById("youtubeframe12").innerHTML = ('<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="300px" max-width="400px" src="https://www.youtube.com/embed/' + VidID + '?rel=0&amp;modestbranding=1" title="YouTube video player" width="100%"></iframe>');

    // Process song details
    var text = document.getElementById("titlenow").innerHTML;
    var text2 = document.getElementById("date123").innerHTML;
    var URLMZA = "https://mzalyrics.blogspot.com/search?q=";
    const myarry1 = text.split("-");
    var SongName = myarry1[1];
    var Artist = myarry1[0];
    const text1 = SongName;
    var myarry2 = text1.split("(");
    var SongNameOnly = myarry2[0];
    var text34 = SongNameOnly;
    const myarrry34 = text34.split("[");
    var SongNameOnly1 = myarrry34[0];
    const myarry3 = text2.split("at");
    var datenow = myarry3[0];
    var text33 = Artist;
    const myarry4 = text33.split(/[Xx]|[fF]e?a?t |,|&|amp;/);
    var Singerfirst = myarry4[0] || '';
    var SingerSecond = myarry4[1] || '';
    var Singertherd = myarry4[2] || '';
    var singer1 = new String(Singerfirst);
    var SingeroneLink = (singer1.link(URLMZA + Singerfirst));
    var singer2 = new String(SingerSecond);
    var SingertowLink1 = (singer2.link(URLMZA + SingerSecond));
    var singer3 = new String(Singertherd);
    var SingerthreeLink2 = (singer3.link(URLMZA + Singertherd));
    var songname = new String(SongNameOnly1);
    var SongNameLink = (songname.link(URLMZA + SongNameOnly1));
    document.getElementById("SongName1").innerHTML = SongNameOnly1;
    document.getElementById("todaydate1").innerHTML = datenow;
    document.getElementById("todaydate1_a").innerHTML = datenow;
    document.getElementById("todaydate1_b").innerHTML = datenow;
    document.getElementById("Singer_1").innerHTML = SingeroneLink;
    document.getElementById("Singer_2").innerHTML = "|" + SingertowLink1;
    document.getElementById("Singer_3").innerHTML = "|" + SingerthreeLink2;
    document.getElementById("album").innerHTML = SongNameLink;
    document.getElementById("SongName_a1").innerHTML = SongNameOnly1;
    document.getElementById("SongName_b").innerHTML = SongNameLink;
    document.getElementById("Singer_a1").innerHTML = Singerfirst;
    document.getElementById("Singer_a2").innerHTML = SingerSecond;
    document.getElementById("Singer_a3").innerHTML = Singertherd;
    document.getElementById("Singer_b1").innerHTML = Singerfirst;
    document.getElementById("Singer_b2").innerHTML = SingerSecond;
    document.getElementById("Singer_c1").innerHTML = Singerfirst;
    document.getElementById("Singer_c2").innerHTML = SingerSecond;
    document.getElementById("SongName_b1").innerHTML = SongNameLink;
    document.getElementById("SongName_b2").innerHTML = SongNameOnly1;
    document.getElementById("SongName_c2").innerHTML = SongNameOnly1;
    document.getElementById("SongName_c3").innerHTML = SongNameOnly1;
    document.getElementById("SongName_e").innerHTML = SongNameOnly1;
    document.getElementById("SongName_d").innerHTML = SongNameOnly1;
    document.getElementById("Singer_d").innerHTML = Singerfirst;

    // Post to Google
    window.postToGoogle = function() {
        var field1 = $("#fname").val();
        var field2 = $("#email").val();
        var field3 = $("#artistName").val();
        var field4 = $("#songName").val();
        var field5 = $("#albumName").val();
        var field6 = $("#lyrics").val();
        var field7 = $("#linkurl").val();
        if(field1 == ""){
            alert('Please Fill Your Name');
            document.getElementById("#name").focus();
            return false;
        }
        if(field2 == ""){
            alert('Please Fill Your Email');
            document.getElementById("#email").focus();
            return false;
        }
        if(field6 == ""){
            alert('Please Fill the Lyrics');
            document.getElementById("#email").focus();
            return false;
        }
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfk2d9eyxvOrNeydSEcNSOTJUFibipo0HeDanPWWewFvW3qGA/formResponse?",
            data: {"entry.760689128": field1, "entry.1293414433": field2, "entry.912645764": field3, "entry.1360784238": field4, "entry.904149150": field5, "entry.1332217528": field6, "entry.1187476013": field7},
            type: "POST",
            dataType: "xml",
            success: function(d) {},
            error: function(x, y, z) {
                alert('Your Lyrics as been Submitted');
                $('#survey-form').hide();
            }
        });
        return false;
    };

    // Modal functionality
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close123123")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Lyrics display
    var lyricsTrue = document.getElementById("DiscLy").innerHTML;
    var lyricsHere = lyricsTrue.match(/[lL]yric+s? ?[:-]?/);
    if (lyricsHere){
        document.getElementById("lyricsCooming").setAttribute("style", "display:block;");
    } else {
        document.getElementById("laterDisplay").setAttribute("style", "display:block;");
    }

    // Lyrics section script
    var lyricsShow = lyricsTrue.split(/[lL]yric+s? ?[:-]?/)[1].split("#")[0];
    var LyricsOderBy = lyricsShow.replaceAll("A","<br>A").replaceAll("B","<br>B").replaceAll("C","<br>C").replaceAll("D","<br>D").replaceAll("E","<br>E").replaceAll("F","<br>F").replaceAll("G","<br>G").replaceAll("H","<br>H").replaceAll("I","<br>I").replaceAll("J","<br>J").replaceAll("K","<br>K").replaceAll("L","<br>L").replaceAll("M","<br>M").replaceAll("N","<br>N").replaceAll("O","<br>O").replaceAll("P","<br>P").replaceAll("Q","<br>Q").replaceAll("R","<br>R").replaceAll("S","<br>S").replaceAll("T","<br>T").replaceAll("U","<br>U").replaceAll("V","<br>V").replaceAll("W","<br>W").replaceAll("X","<br>X").replaceAll("Y","<br>Y").replaceAll("Z","<br>Z").replaceAll("]","]<br>").replaceAll("[<br>","[").replaceAll("[","<br><br>[").replaceAll("(<br>","(").replaceAll("-<br>","-").replaceAll("2x","<br/><br/>2x");
    document.getElementById("lyricsCooming").innerHTML = LyricsOderBy;

    // Lyrics Coming Soon script
    var getL = document.querySelectorAll("#DiscLy2")[0].innerHTML;
    document.querySelectorAll("#lyricsCooming")[0].innerHTML = getL.replaceAll(/[A-Z]/g,"<br/> $&").replaceAll(/Intro|]/g,"$& <br/>").replaceAll("[","<br/><br/> $&").replaceAll("[<br/>","[");

    // Download Popup
    var downloadButton = document.getElementById("at-downloadx");
    var counter = 20;
    var newElement = document.createElement("span");
    newElement.innerHTML = "Please Wait 20 sec";
    var id;
    downloadButton.parentNode.replaceChild(newElement, downloadButton);
    function startDownload() {
        this.style.display = 'none';
        id = setInterval(function () {
            counter--;
            if (counter < 0) {
                newElement.parentNode.replaceChild(downloadButton, newElement);
                clearInterval(id);
            } else {
                newElement.innerHTML = "Please Wait" + " " + counter.toString() + " " + " sec.... ";
            }
        }, 1000);
    }
    var clickbtn = document.getElementById("btn-at");
    clickbtn.onclick = startDownload;

    // Clean URL
    var cleanUrlParam = function(param) {
        var uri = window.location.toString();
        if (uri.indexOf(param, param) > 0) {
            var clean_uri = uri.substring(0, uri.indexOf(param));
            window.history.replaceState({}, document.title, clean_uri);
        }
    };
    cleanUrlParam("%3D");
    cleanUrlParam("%3D%3D");
    cleanUrlParam("&m=1");
    cleanUrlParam("?m=1");
})();
