let countEl = document.getElementById("count-el");

let savedCount = 0;
//button functions 

function increment() {
    let curCount = parseInt(countEl.innerText);
    countEl.innerText = ++curCount;
}

function decrement() {
    let curCount = parseInt(countEl.innerText);
    if(curCount > 0) curCount--;
    countEl.innerText = curCount;
}

function save() {
    let curCount = parseInt(countEl.innerText);
    savedCount += curCount;

    let entryEl = document.getElementById("entries");
    entryEl.style.visibility = "visible";
    let curString = entryEl.innerText;
    
    let lastElement = curString[curString.length - 1];    
    if(lastElement == ':'){
        curString += " " + curCount;
    }
    else if(lastElement<='9' && lastElement >= '0' ){
        curString += " + " + curCount;
    }
    entryEl.innerText = curString;
    countEl.innerText = 0;
    
    let totalEl = document.getElementById("total-el");
    totalStr = "Total: " + savedCount;
    totalEl.innerText = totalStr;
}


