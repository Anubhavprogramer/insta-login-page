let btn = document.getElementById('loginbutton')
let user = document.getElementById('user_input')
let pass = document.getElementById('password_input')

btn.addEventListener('click',()=>{
    user.value  = "";
    pass.value  = "";
})