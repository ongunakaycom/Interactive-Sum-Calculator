function addition(a, b) {
    return a + b;
  }
  
  function addNumbers() {
    // Get values from input fields
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    // Call the addition function and store the result
    const sum = addition(num1, num2);
  
    // Display the result in the paragraph element
    document.getElementById("result").innerHTML = "The sum is: " + sum;
  }
  