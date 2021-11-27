//Validation 
var username=document.forms['form']['username'];
var password=document.forms['form']['password'];

var name_error=document.getElementById('name_error');
var pass_error=document.getElementById('pass_error');

username.addEventListner('textInput', name_verify);
password.addEventListner('textInput', pass_verify);

function validated(){
    if(username.value.length<5){
        username.style.border="1px solid red";
        name_error.style.display="block";
        username.focus();
        return false;
    }
    if(password.value.length<5){
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
}


function name_verify(){
    if(username.value.length>=5){
        username.style.border="1 px solid silver";
        name_error.style.display="none";
        return true;
    }
}

function pass_verify(){
    if(password.value.length>=5){
        password.style.border="1 px solid silver";
        pass_error.style.display="none";
        return true;
    }
}