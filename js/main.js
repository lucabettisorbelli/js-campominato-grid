
let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden");


function creaGriglia() {
    for (let i = 0; i < 100; i++) {
        
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square");


        nuovoDiv.addEventListener("click", function () {
            console.log("this: ", this);

            this.classList.toggle("clicked");
        });

        griglia.appendChild(nuovoDiv);
        
    }
}

creaGriglia ();

bottone.addEventListener("click", function () {
    griglia.classList.toggle("hidden")
});


