
let bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {
    
    const griglia = document.getElementById("grid");
    griglia.classList.toggle("hidden");
    for (let i = 0; i < 100; i++) {

    
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("square");

    nuovoDiv.addEventListener("click", function() {
        console.log("this: ", this);
        this.classList.toggle("clicked");
    });

    griglia.appendChild(nuovoDiv);

}

});


