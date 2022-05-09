
function displayInput() {
    var x = document.forms["form_wrap"];
    var result = "";
    
    for (var i = 0; i < x.length - 1; i++) {
        result += "<p>" + x.elements[i].value + "</p>";
        document.getElementById("Output").innerHTML = result;
    }
}