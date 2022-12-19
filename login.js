let signupbtn = document.getElementById("signupBtn");
let signinbtn = document.getElementById("signinBtn");

let signup=document.getElementById("signup");
let signin=document.getElementById("signin");

signin.style.display = "none"

signupbtn.addEventListener("click",function(){
    signin.style.display="none";
    signup.style.display="block";
<<<<<<< HEAD
    document.title="Signup!-JioMart"
=======
    document.title="Signup!"
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5


});

signinbtn.addEventListener("click",function(){
    signin.style.display="block";
    signup.style.display="none";
<<<<<<< HEAD
    document.title="Signin!-JioMart"
=======
    document.title="Signin!"
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    
});

signup.addEventListener("submit",function(e){
    e.preventDefault();
<<<<<<< HEAD
    let  username = signup.name.value;
=======
    let name = signup.name.value;
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    let email = signup.email.value;
    let password = signup.pass.value;
    console.log(password);

    if(password != signup.passchk.value){
        alert("Passwords are not same!");
    }else{
<<<<<<< HEAD
        localStorage.setItem("name",username);
=======
        localStorage.setItem("name",name);
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        alert("Signup Sucessful!");
        signup.reset();
        signin.style.display="block";
        signup.style.display="none";

    }
   
});

signin.addEventListener("submit",function(e){
    e.preventDefault();
    let useremail = signin.email1.value;
    let userpassword = signin.password1.value;

    let storedmail = localStorage.getItem("email");
    let storedpass = localStorage.getItem("password");

    if(useremail != storedmail){
        alert("User Not Found");
    }else{
        if(userpassword!=storedpass){
            alert("Incorrect Password");
        }else{
            alert("Signin Sucessful!");
            window.location.assign("./index.html");
        }
    }
   
});
