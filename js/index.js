let entryForm = document.getElementById("entryForm")
let entriesSection = document.getElementById("entries")
let entryTextbox = document.getElementsByClassName("entry-textbox")
let entriesNav = document.querySelector(".entries-nav")
let counter = 1

function addEntryToDom(event) {
    event.preventDefault()
    let entryDiv = document.createElement("div")
    entryDiv.classList.add("single-entry")
    entryDiv.textContent = entryTextbox[0].value
    entriesSection.appendChild(entryDiv)
    entryTextbox[0].value = ""
    let displayEntryButton = document.createElement("button")
    displayEntryButton.addEventListener("click", function(){
        let allEntries = document.querySelectorAll(".single-entry")
        for(let i = 0;i<allEntries.length;i++){
            allEntries[i].style.display = "none"
        }
        entryDiv.style.display =  "block"
    })
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = counter
    counter++
    entriesNav.appendChild(displayEntryButton)
}

entryForm.addEventListener("submit", addEntryToDom)

 /*
      - Inside the displayEntryButton addEventListener function,
          create a new variable named 'allEntries'.
      - use the document.queryselectorAll method to select all
          elements with the class of 'single-entry' and make that the
          value of the new allEntries variable.
    */