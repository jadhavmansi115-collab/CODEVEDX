const display = document.getElementById("display");

/* ADD VALUES */

function appendValue(value){

  display.value += value;

}

/* CLEAR DISPLAY */

function clearDisplay(){

  display.value = "";

}

/* DELETE LAST VALUE */

function deleteLast(){

  display.value = display.value.slice(0, -1);

}

/* CALCULATE */

function calculate(){

  try{

    display.value = eval(display.value);

  }

  catch{

    display.value = "Error";

  }

}