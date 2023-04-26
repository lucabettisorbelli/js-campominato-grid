
let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden");


function creaGriglia(numeroCaselle) {
    for (let i = 1; i <= numeroCaselle; i++) {
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
            this.classList.toggle("clicked"); // toggle = (add-remove)
        });

        griglia.appendChild(nuovoDiv);
        
    }
}

creaGriglia (numeroCaselle);


bottone.addEventListener("click", function () {
    griglia.classList.toggle("hidden")
});


let selezioneNumero = document.getElementById("select");


selezioneNumero.addEventListener("click", function () {
    const numeroCaselle = parseInt(this.value);
    creaGriglia(numeroCaselle);
})

