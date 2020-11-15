function register() {
    
    var y = document.getElementsByTagName('input');
    
    for (var i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            alert("The " + y[i].id + " field is mandatory");
            
            if (y[i].id == 'password') {
                document.getElementById('password').style.borderColor = "red";
            }
            else if (y[i].id == 'pass2') {
                document.getElementById('pass2').style.borderColor = "red";
            }
            else if (y[i].id == 'email') {
                document.getElementById('email').style.borderColor = "red";
            }
            else if (y[i].id == 'username') {
                document.getElementById('username').style.borderColor = "red";
                document.getElementById('password').value="";
            }
        }
    }
    
    var u = document.getElementById("username");
    var p = document.getElementById("password").value;
    var p2 = document.getElementById("pass2").value;
    
    if (p2 !== p){
        alert("passwords do not match");
    }
    else {
        window.localStorage.setItem("username", u.value);
        window.localStorage.setItem("password", p.value);
        alert('You have successfully registered! you can log in now.')
    }
}

function cancel(){

    window.open('login.html', "_self");

}