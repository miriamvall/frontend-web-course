//inputs correctes i guardar localment les dades d'usuari
var bool;
function save_locally() {
    var y = document.getElementsByTagName('input');
    /*comprovar que input es correcte en format*/
    for (var i = 0; i < y.length; i++){
        if(y[i].value == ""){
            alert("The " + y[i].name + " field must not be empty");
            
            if (y[i].id == "password"){
               /*si el camp de la contrassenya esta buit, marcar en vermell el requadre d'input d'aquesta*/
                document.getElementById('password').style.borderColor = "red";
            }
            else if (y[i].id == "username"){
            /*el mateix amb el camp del nom*/
            document.getElementById('username').style.borderColor = "red";
                document.getElementById("password") = "";
            }
        } 
    }
   /*guardar usuari que ha entrat en storage local*/
    var u = document.getElementById("username");
    var p = document.getElementById("password");
    /*comprovar si usuari estava registrat i si la contrassenya es correcte*/
    var su = window.localStorage.getItem("username");
    var sp = window.localStorage.getItem("password");
    if ((u.value == su) && (p.value == sp)) {
        bool = true;
    }
    else bool = false;
    /*si tot bé, obrim home en nova finestra*/
    if (bool == true) window.open("home.html","_blank");
    /*en cas contrari, ensenyem una alerta*/
    else alert("Wrong username or password");
    
}

function goto_register(){
    window.open("register.html", "_self");
}