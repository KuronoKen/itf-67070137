hovering = false

function delay(ms) { //add await in front when use
    return new Promise(resolve => setTimeout(resolve, ms));
}

function GlowingLogo(){
    document.getElementById("NeonLogo").style.opacity = 1;
    document.getElementById("glowingbar").style.boxShadow = "0 0 15px white"; 

}
function LightoutLogo(){
    document.getElementById("NeonLogo").style.opacity = 0;
    document.getElementById("glowingbar").style.boxShadow = "0 0 0px white"; 
}

function ClearIntro(){
    if (hovering == false) {
        document.getElementById("Introduction").style.opacity = 0;
        document.getElementById("DefaultIntroduction").style.opacity = 1;
    }
}


function IconHover(Icon) {
    if (Icon == "none") {
        hovering = false;
       setTimeout(ClearIntro, 700);
    }
    else if (Icon == "roblox") {
        hovering = true;
        document.getElementById("DefaultIntroduction").style.opacity = 0;
        document.getElementById("Introduction").style.opacity = 1;
        document.getElementById("Introduction").innerHTML = "&emsp;&emsp;&emsp;JavaScript ส่วนมากใช้ในหน้าเว็บเพื่อประมวลผลข้อมูลที่ฝั่งของผู้ใช้งาน...";
    }
}

function Copy(text) {
    navigator.clipboard.writeText(text);
}