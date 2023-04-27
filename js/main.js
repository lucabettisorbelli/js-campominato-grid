
let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden"); // griglia invisibile di default

bottone.addEventListener("click", function () {
    griglia.innerHTML=""; // rimuove elementi
    const select = document.getElementById("select");
    const numeroCelle = select.value; // numero celle = valore select
    creaGriglia (numeroCelle);
    griglia.classList.toggle("hidden");
});


function creaGriglia(numeroCelle) {
    for (let i = 1; i <= numeroCelle; i++) {
        // nuova casella
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square");

        // dimensioni per numerCelle
        let radiceCelle = Math.sqrt(numeroCelle);
        nuovoDiv.style.width = `calc(100% / ${radiceCelle})`;
        nuovoDiv.style.height = `calc(100% / ${radiceCelle})`;
        
        // elemento numerico in casella
        const nuovoSpan = document.createElement("span");
        nuovoSpan.innerText = i;
        nuovoDiv.appendChild(nuovoSpan);

        nuovoDiv.addEventListener("click", function () {
            // se l'elemento contiene "clicked"
            if (!this.classList.contains("clicked")) {
                console.log(this.innerText);
            }
            // toggle = (add-remove)
            this.classList.toggle("clicked"); 
        });

        griglia.appendChild(nuovoDiv);
        
    }
}









