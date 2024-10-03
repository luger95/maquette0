//const changeText = document.querySelector("#change-text");

//changeText.addEventListener("click", function() {
  changeText.textContent = "ppppppp";
//});



/*const avis2 = 
`
<p>ppppppppppppp2</p>
            
<div id="container-photo">
    <div id="pp">
        <img src="..." alt="photo client" >
    </div>
    <div id="client">
        <p>Martin</p>
        <p>dev web</p>
    </div>`;
/*
const avis3 = `
<p>ppppppppppppp3</p>
            
            <div id="container-photo">
                <div id="pp">
                    <img src="..." alt="photo client" >
                </div>
                <div id="client">
                    <p>Alex</p>
                    <p>C sharp pro</p>
                </div>


`;

const AfficheAvis=() =>{
    const positionAvis = document.querySelector("#temoignage");
    const avis1 = `
    <div id="contenu avis">
    <p>ppppppppppppp1</p>
            
            <div id="container-photo">
                <div id="pp">
                    <img src="..." alt="photo client" >
                </div>
                <div id="client">
                    <p>Steven</p>
                    <p>Chef de projet</p>
                </div>
    </div>

    `;
    positionAvis.insertAdjacentHTML("afterend", avis1);

}

AfficheAvis();
*/
/*document.getElementById("change-text").addEventListener("click",AfficheAvis2);

function AfficheAvis2() {
    document.getElementById("contenu-avis").innerHTML = avis2;    
}
*/

let togg1 = document.getElementById("change-text");
let togg2 = document.getElementById("change-text2");
let avis1 = document.getElementById("avis1");
let avis2 = document.getElementById("avis2");
togg1.addEventListener("click", () => {
  if(getComputedStyle(avis1).display != "none"){
    avis1.style.display = "none";
  } else {
    avis1.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(avis2).display != "none"){
    avis2.style.display = "none";
  } else {
    avis2.style.display = "block";
  }
};
togg2.onclick = togg;