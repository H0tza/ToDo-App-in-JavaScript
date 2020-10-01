const form = document.querySelector("form");
const ul = document.querySelector("ul");
const placeholder = document.querySelector("#placeholder")

function setPlaceholder () {
    if (ul.children.length === 1) {
        placeholder.style.display = "block";
    } else {
        placeholder.style.display = "none";
    }
}

setPlaceholder();

form.addEventListener('submit', e => {
    e.preventDefault();

    // Alert Message
    if(e.target.text.value === ""){
        alert("You can't add a empty task.");
    } else {
        // Create new tasks.
        let task = document.createElement("li");
        let taskSpan = document.createElement("span");
        let taskClose = document.createElement("img");
        
        // Set child's.
        ul.appendChild(task);
        task.appendChild(taskSpan);
        task.appendChild(taskClose);
        
        // Set the tasks
        taskSpan.innerText = e.target.text.value;
        taskClose.setAttribute('src', './close.svg');
        taskClose.setAttribute('width', '20');

        task.addEventListener("click" , e => {
            // Delete tasks
            if(e.target.nodeName === "IMG"){
            e.target.parentNode.remove();
            };
            
            // Add a line-through
            if(e.target.nodeName === "SPAN") {
                e.target.style.textDecoration = "line-through";
            };

            setPlaceholder();
        })

        
        // Clear the form
        e.target.text.value = "";

        setPlaceholder();
    }
});