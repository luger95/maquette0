
/*function partagerOpen(){
  document.getElementById("Partager").style.background = "black";
  document.getElementById("Partager").style.height = "300px";
  var x = document.createElement("IMG");
  x.setAttribute("src", "partagerFacebook.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "Icone Facebook");
  document.querySelector('pre').appendChild(x);
}
function partagerClose(){
  document.getElementById("Partager").style.background = "blue";
  document.getElementById("Partager").style.height = "110px";
}
function testO(){
  document.getElementById("test").style.color = "red";
}
function testC(){
  document.getElementById("test").style.color = "blue";
}
/*partagerAlerte(int i){
  if (i == 1){

  }
}

function partagerOpen() {
  var element = document.getElementById("Partager");
  element.style.background = "black";
  element.style.height = "310px";
  if (!document.getElementById("twitterIcon")) {
    var img = document.createElement("IMG");
    img.setAttribute("src", "partagerTwitter.png");
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");
    img.setAttribute("alt", "Icone Twitter");
    img.setAttribute("id", "twitterIcon");
    element.appendChild(img);
  }
  if (!document.getElementById("facebookIcon")) {
    var img = document.createElement("IMG");
    img.setAttribute("src", "facebook.jpeg");
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");
    img.setAttribute("alt", "Icone Facebook");
    img.setAttribute("id", "facebookIcon");
    element.appendChild(img);
  }
}

function partagerClose() {
  var element = document.getElementById("Partager");
  element.style.background = "blue";
  element.style.height = "110px";

  var imgF = document.getElementById("facebookIcon");
  var imgT = document.getElementById("twitterIcon");
  if (imgF) {
    imgF.remove();
  }
  if (imgT) {
    imgT.remove();
  }


}

document.getElementById("Partager").onmouseover = function() {partagerOpen()};
document.getElementById("Partager").onmouseout = function() {partagerClose()};

function lbr(){ // Cette fonction est juste pour tester la position de l'élément "fixed"
    var pre = document.getElementById("preLBR");
    for (let i = 0; i < 100; i++) {
      let br = document.createElement("br");
      pre.appendChild(br);
    }
}
*/
function partagerOpen() {
    par.style.background = "black";
    par.style.height = "270px";
    par.style.boxShadow = "0 0 10px rgba(0, 0, 0, 2)";

    for(let i = 0; i < coll.length; i++){
      coll[i].style.display = "inline";
      coll[i].style.opacity = "1";
    }
}
function partagerClose() {
    par.style.background = "black";
    par.style.height = "50px";
    par.style.boxShadow = "0 0 0px rgba(0, 0, 0, 0)";

    for(let i = 0; i < coll.length; i++){
      coll[i].style.display = "none";
      coll[i].style.opacity = "0";
    }
}


function partagerPopUpOpen(n){
    pop.innerHTML = n;
    sh.style.display = "inline";
}
function partagerPopUpClose(){
    pop.innerHTML = '';
    sh.style.display = "none";
}

//lbr();
var par = document.getElementById("Partager");

var tw = document.getElementById("twitterIcon");
var fb = document.getElementById("facebookIcon");
var lin = document.getElementById("linkedinIcon");
var em = document.getElementById("emailIcon");
const coll = [];
coll[0]= lin;
coll[1]= fb;
coll[2]= tw;
coll[3]= em;

var sh = document.getElementById("SharePopUp");
var pop = document.getElementById("popUp");
par.onmouseover = partagerOpen;
par.onmouseout = partagerClose;

tw.onclick = function() {partagerPopUpOpen("twitter"); };
fb.onclick = function() {partagerPopUpOpen("facebook"); };
lin.onclick = function() {partagerPopUpOpen("linkedIn"); };
em.onclick = function() {partagerPopUpOpen("email"); };

//par.onclick = function() {partagerPopUpClose(); };
