function custom(){
    console.log("this message is coming from index.js")
}

function show(e){
    e.innerText = "Logout";
}

let button = document.querySelector('#button2')

function removeButton(e){
    button.remove()
}