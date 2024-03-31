document.addEventListener("DOMContentLoaded", function(){
    let container = document.querySelector("#container");

    function grid(size){
        container.innerHTML = ""; // Clear previous grid
        for(let i = 0; i < size * size; i++){
            let divs = document.createElement("div");
            divs.classList.add("divs");
            divs.textContent = "\u00A0";
            container.appendChild(divs);

            divs.addEventListener("mouseenter", function(){
                divs.style.backgroundColor = "white";
            });

            divs.addEventListener("mouseleave", function(){
                divs.style.backgroundColor = "white";
            });
        }
        container.style.width = `${size * 15}px`;
        container.style.height = `${size * 15}px`;
    }

    grid(40);

    let gridButton = document.createElement("button");
    gridButton.textContent = "Change size";
    gridButton.classList.add("gridButton");
    document.body.insertBefore(gridButton, container);

    gridButton.addEventListener("click",function(){
        let newSize = prompt("Enter Grid size:");
        if (newSize !== null && !isNaN(newSize) && newSize > 0) {
            grid(parseInt(newSize));
        } else {
            alert("Please enter a valid number.");
        }
    });
});
