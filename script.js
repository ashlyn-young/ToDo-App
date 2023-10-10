
const listContainer = document.getElementById("listContainer");
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
    saveData();


}

document.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    const listContainer = document.getElementById("listContainer");
    // const storedData = localStorage.getItem("data");
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}
showData()


