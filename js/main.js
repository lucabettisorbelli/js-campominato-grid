
let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden");


function creaGriglia() {
    for (let i = 1; i <= 100; i++) {
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

creaGriglia ();

bottone.addEventListener("click", function () {
    griglia.classList.toggle("hidden")
});


