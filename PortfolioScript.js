function About() {
    location.href = ("About.html") //replace current tab with the html
} //just a creating a function

hovering = false

function delay(ms) { //add await in front when use
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Home(){
    location.href = ("Prolang NL.html")
}

function ContactUs() {
    location.href = ("Contact Us.html")
}
function TechTerm() {
    location.href = ("Technical term.html")
}

//Language Page

function JavaScript() {
    location.href = ("JavaScript.html")
}

function TypeScript() {
    location.href = ("TypeScript.html")
}

function Java() {
    location.href = ("Java.html")
}

function Python() {
    location.href = ("Python.html")
}

function Kotlin() {
    location.href = ("Kotlin.html")
}

function PHP() {
    location.href = ("PHP.html")
}

function C() {
    location.href = ("C.html")
}

function CSharp() {
    location.href = ("C Sharp.html")
}

function Cplusplus(){
    location.href = ("C++.html")
}

function R() {
    location.href = ("R.html")
}

function Go() {
    location.href = ("Go.html")
}

function Lua() {
    location.href = ("Lua.html")
}



async function LoadingScreen(){
    document.getElementById("insideloading").style.width = "98%";
    for (let i = 1; i <= 100; i++){
        document.getElementById("PercentageNumber").innerText = `${i}%`
        if (i <= 10) {
            await delay(120)
        }
        else if (i > 10 , i <= 20){
            await delay (100)
        }
        else if (i > 20 , i <= 30){
            await delay (80)
        }
        else if (i > 30 , i <= 40){
            await delay (40)
        }
        else if (i > 40 , i <= 50){
            await delay (10)
        }
        else if (i > 50 , i <= 100){
            await delay (10)
        } 
    }
    await delay(1000)
    document.getElementById("LoadingBackground").style.opacity = 0;
    document.getElementById("outsideloading").style.opacity = 0;
    await delay(1000)
    document.getElementById("LoadingBackground").remove();
    document.getElementById("outsideloading").remove();
    
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


function LanguageHover(lang) {
    if (lang == "none") {
        hovering = false;
       setTimeout(ClearIntro, 700);
    }
    else if (lang == "javascript") {
        hovering = true;
        document.getElementById("DefaultIntroduction").style.opacity = 0;
        document.getElementById("Introduction").style.opacity = 1;
        document.getElementById("Introduction").innerHTML = "&emsp;&emsp;&emsp;JavaScript ส่วนมากใช้ในหน้าเว็บเพื่อประมวลผลข้อมูลที่ฝั่งของผู้ใช้งาน...";
    }
}