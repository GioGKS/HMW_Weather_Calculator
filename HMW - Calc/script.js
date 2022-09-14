function FaToC(value) {
    value = parseFloat(value);
    if (!isNaN(value)) {
      value = (value - 32) / 1.8;
      document.getElementById("celcius").innerHTML = value.toFixed(2);
    } else alert("Please Enter Fahreneit");
  }
  
 
  function CToFah(value) {
    value = parseFloat(value);
    if (!isNaN(value)) {
      value = (value * 9) / 5 + 32;
      document.getElementById("Fahrenhiet").innerHTML = value.toFixed(2);
    } else alert("Please Enter Celcius");
  }