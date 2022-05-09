function displayInput() {
      //input variables////////
    var x = document.forms["js_form"];
     //input values stocker variable///////
    var result = "";
     //Loop for increment, stock and show input values //////
    for (var i = 0; i < x.length - 1; i++) {
         //text values toggle ////////
        result += "<p>" + x.elements[i].value + "</p>";
          //Output value 
        document.getElementById("Output").innerHTML = result;
    }
}