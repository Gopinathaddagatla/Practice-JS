let inputBox = document.getElementById('input-box');
let listContainer =  document.getElementById('listContainer');

function addTaskFn(){

    if(inputBox.value===''){
        alert("Please Add Something...")
    }else{
        let li = document.createElement('li');
        listContainer.appendChild(li);
        li.innerHTML += `<div class="grandParent">
                            <div class="listItem">${inputBox.value}</div> 
                            <div>
                                <button id="edit">Edit</button> 
                                <button id="delete">Delete</button>
                            </div>
                        </div>`;        
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener('click', (e)=>{
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.id === "edit"){
        let listItem = document.querySelector('.listItem');
        inputBox.value = listItem.innerHTML;
        saveData();
    }
    else if(e.target.id === "delete"){
        let grandParent = document.querySelector('.grandParent');
        grandParent.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

var cardContainer = document.querySelector('.cardContainer');
// var card = document.querySelector('.card')

card.addEventListener('mouseover', getBg(), false)

function getBg(){
    var card = document.querySelectorAll('.card');
    // card.style.backgorundColor='blue';
    card.setAttribute("style", "background-color: blue;")
}


