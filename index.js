 let countEl = document.getElementById("count-el");
 let saveEl = document.getElementById("save-el");
 let sessionNameInput = document.getElementById("session-name")
let sessionDisplay = document.getElementById("session-name-display")
let count = 0;
function increment() {
    count += 1;
    countEl.innerText = count;
   

}
function save() {
   let now = new Date();
   let time = now.toLocaleTimeString();
    let dash = sessionNameInput.value +" "+ count + " - " + time +" ";
    saveEl.innerHTML += dash + "<br>";
     console.log(count);
     countEl.innerText =0;
     count =0;
    
}
function updateSessionName() {
    if (sessionNameInput.value === "") {
        sessionDisplay.textContent = "No session selected"
    } else {
        sessionDisplay.textContent = sessionNameInput.value
    }
}
