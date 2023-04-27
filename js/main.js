
let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden"); // griglia invisibile di default


function creaGriglia(numeroCelle) {
    for (let i = 1; i <= numeroCelle; i++) {
        // nuova casella
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square");
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



bottone.addEventListener("click", function () {
    griglia.innerHTML=""; // rimuove elementi
    const select = document.getElementById("select");
    const numeroCelle = select.value; // numero celle = valore select
    creaGriglia (numeroCelle);
    griglia.classList.toggle("hidden");
});





