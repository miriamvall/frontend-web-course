function nif(id, letter) {

    var numero = id;
    var letr = letter;
    numero = numero % 23;
    letter='TRWAGMYFPDXBNJZSQVHLCKET';
    letter=letter.substring(numero,numero+1);
    if (letter!=letr.toUpperCase()) {
        alert('ID letter does not match number');
        return false;
    }
    return true;
}

function getData() {
    var inputs = document.getElementsByTagName('input');
    var dni = 0;
    var y = 0;

    var x =  document.getElementById("workplace");
    document.getElementById('n_category').innerHTML = "Category: " + x.value;
    x.value = "";

    document.getElementById('titol').innerHTML = "Details:";

    for (var i = 0; i < (inputs.length); i++) {
        if (inputs[i].name == "name") {
            document.getElementById('n_name').innerHTML  = "Name: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "surname") {
            document.getElementById('n_surname').innerHTML  = "Surnames: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "id") {
            dni = inputs[i].value;
            inputs[i].value="";
        }
        else if(inputs[i].name == "letter"){
            if (nif(dni, inputs[i].value)) {
                document.getElementById('n_id').innerHTML  = "ID: " + dni + inputs[i].value;
                y = 0;
            }
            else {
                document.getElementById('n_id').innerHTML  = "WRONG ID: " + dni + inputs[i].value;
                document.getElementById('n_id').style.color  = "red";
                y = 1;
            }
            inputs[i].value="";
        }
        else if (inputs[i].name == "date") {
            document.getElementById('n_date').innerHTML  = "Date of birth: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "direction") {
            document.getElementById('n_direction').innerHTML  = "Direction: " + inputs[i].value;
            inputs[i].value="";
        }

        else if (inputs[i].name == "range") {
            document.getElementById('n_sat').innerHTML  = "Satisfaction level: " + inputs[i].value;
        }

    }
}

