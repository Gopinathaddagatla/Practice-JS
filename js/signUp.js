let studentList = JSON.parse(localStorage.getItem('student')) || [];

document.onload = studentList

function signUp(){
    let userInput = {
        id : document.getElementById('stuId').value + Math.random(Math.ceil(1*2)),
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
    }
    if(studentList.some((elm)=>elm.email === userInput.email)){
        alert("This email already used..");
    }
    if(userInput.name && userInput.email && userInput.password && userInput.id){
         studentList.push(userInput)
         localStorage.setItem('student', JSON.stringify(studentList))
         window.location.href = 'login.html'
         alert('Registered successfully...')
    }else{
        alert("Input fields shouldn't be empty");
    }
    document.getElementById('name').value = '',
    document.getElementById('email').value = '',
    document.getElementById('password').value = ''
}
console.log(studentList)

let loading = false;
let userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn')) || [];
function logIn(){
    var userList = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    var registeredData = JSON.parse(localStorage.getItem('student'));
    var obj = registeredData.find((element)=>element.email === userList.email && element.password === userList.password)
    
    if(obj){
        console.log('Logged Successfully');
        userLoggedIn.push(obj);
        localStorage.setItem('userName', JSON.stringify(obj.name));
        localStorage.setItem('userGmail', JSON.stringify(obj.email));
        if(localStorage.getItem('userName') && localStorage.getItem('userGmail')){
            window.location.href="profile.html"
        }
        window.location.href="profile.html";
    }else{
        window.location.href = "signUp.html";
        alert("Please enter registered account details...");
    }
    document.getElementById('email').value = '',
    document.getElementById('password').value = ''

}



function logOut(){
    localStorage.removeItem('userName');
    localStorage.removeItem('userGmail')
    window.location.href = 'login.html';
}



