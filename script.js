function bukaUndangan() {

const cover = document.getElementById("cover-page");
const content = document.getElementById("content");
const musik = document.getElementById("musik");

/* animasi fade */

cover.style.opacity = "0";
cover.style.transition = "opacity 0.8s";

/* setelah animasi selesai */

setTimeout(function(){

cover.style.display = "none";
content.style.display = "block";

/* mulai musik */

musik.play().catch(function(){
console.log("Autoplay dicegah browser");
});

},800);

}


/* tombol acara & resepsi */

function lihatAcara(){

const acara = document.getElementById("section-acara");

/* tampilkan tanggal */

acara.style.display = "block";

/* scroll halus */

acara.scrollIntoView({
behavior:"smooth"
});

}

/* efek ripple tombol */

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", function(e){

const circle = document.createElement("span");
circle.classList.add("ripple");

const rect = button.getBoundingClientRect();

circle.style.left = (e.clientX - rect.left) + "px";
circle.style.top = (e.clientY - rect.top) + "px";

button.appendChild(circle);

setTimeout(() => {
circle.remove();
},600);

});

});

function buatBunga(){

const bunga = document.createElement("div");

bunga.className = "bunga";

bunga.innerHTML = "🌸";

bunga.style.left = Math.random() * window.innerWidth + "px";

bunga.style.animationDuration = (Math.random() * 5 + 5) + "s";

document.body.appendChild(bunga);

setTimeout(function(){
bunga.remove();
},10000);

}

setInterval(buatBunga,800);