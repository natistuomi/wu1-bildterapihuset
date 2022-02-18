let aktivitet_knapp = "";
let amount_knapp = "";
let type_knapp = "";
let date_knapp = "";
let time_knapp = "";

function aktivitet(x){
    aktivitet_knapp = x;
    document.getElementById("boka_aktivitet").style.display = "none";
    document.getElementById("boka_platser").style.display = "block";
}