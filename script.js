
// const listContainer = document.getElementById("list-container");
function addTask(){
    if(document.getElementById("input-box").value === ''){
        alert("You need to write a name for your to-do!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = document.getElementById("input-box").value;
        document.getElementById("listContainer").appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    document.getElementById("input-box").value = '';
    console.log(document.getElementById("listContainer"))

}

document.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);





