let user = new Array();
let userList = document.getElementById('userList');
document.getElementById('createSubmit');
document.getElementById('updateSubmit').style.display='none';


(function readData(){
    user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : [];
    user.map((person, index)=>{
    userList.innerHTML += `<div class="d-flex justify-content-between text-center align-items-center personDetails" key="${index}">
            <span>${index+1}</span>
            <span>${person.name}</span>
            <span>${person.email}</span>
            <span>
                <button onclick="edit(${person.id})">Edit</button>
                <button onclick="deletePerson(${person.id})">Delete</button>
            </span>
        </div>`
    })
})();

function create(){  
    var newUser = {
        id : document.getElementById('custId').value + Math.ceil(Math.random()*50),
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value
    }
    if(newUser.name=='' || newUser.email=='' || newUser.password==''){
        alert('Please add fields')
    }else if(user.some((elm)=>elm.email === newUser.email && elm.id == newUser.id)){
        alert("The email already registered");
    }else{
        user.push(newUser);
        localStorage.setItem('user', JSON.stringify(user));
        alert('Data added successfully...');
    }
    document.getElementById('name').value = '',
    document.getElementById('email').value = '',
    document.getElementById('password').value = ''


}

function edit(index){
    document.getElementById('createSubmit').style.display='none';
    document.getElementById('updateSubmit').style.display='block';
    
    var obj = JSON.parse(localStorage.getItem(user));
    obj = user.find((person)=>person.id == index)
    document.getElementById('name').value = obj.name;
    document.getElementById('email').value = obj.email;
    document.getElementById('password').value = obj.password;
    document.getElementById('custId').value = obj.id;
}

function update(){
    var obj = user.find((elm)=>elm.id===document.getElementById('custId').value)
    if(obj){
        obj.id = document.getElementById('custId').value;
        obj.name = document.getElementById('name').value;
        obj.email = document.getElementById('email').value;
        obj.password = document.getElementById('password').value;
        localStorage.setItem('user', JSON.stringify(user));
        console.log(obj)
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('custId').value = '';
    readData();
}

function deletePerson(index){
    const obj = user.find((elm)=>elm.id === index);
    user.splice(obj, 1);
    localStorage.setItem('user', JSON.stringify(user));
    readData();
}


const items = Array.from(userList.getElementsByTagName('div'));

let itemsPerPage = 3;
let firstIndex = Math.ceil(items.length / itemsPerPage);
let lastIndex = firstIndex * itemsPerPage;

let pagination = document.getElementById('pagination');

let prevButton = document.createElement('button');
let prevTextNode = document.createTextNode('Prev');
prevButton.appendChild(prevTextNode)

let nextButton = document.createElement('button');
let nextTextNode = document.createTextNode('Next');
nextButton.appendChild(nextTextNode)


pagination.before(prevButton, pagination.firstChild);
pagination.after(nextButton, pagination.lastChild);

for(let i = 0; i < items.length; i++){
    pagination.innerHTML += `<button class="numList">${i+1}</button>`
}


var btns = pagination.querySelectorAll('.numList');
console.log(btns)
btns.addEventListener("click", function(event){
    for(var i = 0; i<btns.length;i++){
        btns[i].classList.add('active')
    }


});

