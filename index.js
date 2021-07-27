function loading() {
    let i = 0;
    let s1 = document.getElementById("s1");
    document.getElementById("bar1").onclick=bar1Click;
    document.getElementById("bar2").onclick=bar2Click;
    document.getElementById("bar3").onclick=bar3Click;
    document.getElementById("bar4").onclick=bar4Click;
    document.getElementById("bar5").onclick=bar5Click;
    function bar1Click() {
        i=0;
        s1.style.marginLeft="0";
    }
    function bar2Click() {
        i=1;
        s1.style.marginLeft="-20%";
    }
    function bar3Click() {
        i=2;
        s1.style.marginLeft="-40%";
    }
    function bar4Click() {
        i=3;
        s1.style.marginLeft="-60%";
    }
    function bar5Click() {
        i=4;
        s1.style.marginLeft="-80%";
    }
    setInterval(autoSlides, 4000);
    function autoSlides() {
        switch(i){
            case 0: {
                s1.style.marginLeft="-20%";
                i=1;
                break;
            }
            case 1: {
                s1.style.marginLeft="-40%";
                i=2;
                break;
            }
            case 2: {
                s1.style.marginLeft="-60%";
                i=3;
                break;
            }
            case 3 : {
                s1.style.marginLeft="-80%";
                i=4;
                break;
            }
            case 4: {
                s1.style.marginLeft="0";
                i=0;
                break;
            }
        }
    }
    
}
function playVideo() {
    let playVideo = document.getElementById("playVideo");
    playVideo.style.display="block";
    document.body.style.overflow="hidden";
}
function closeYoutube() {
    document.getElementById("playVideo").style.display="none";
    document.body.style.overflow="auto";
}
window.onload=loading;