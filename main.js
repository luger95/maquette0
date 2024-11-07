const arrow = document.getElementsByClassName("arrow")[0];
const img_actu = document.getElementsByClassName("img_actu")[0];
const quotes = document.getElementsByClassName("quotes");

arrow.addEventListener("mouseover", function () {
    alert("test");
    console.log("ok");
    //arrow.style.right = 10 + 'px';
});

for (let quote of quotes) {
    quote.addEventListener("mouseover", function () {
        alert("test");
    });
}