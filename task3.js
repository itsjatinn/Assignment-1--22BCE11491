function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    if (operation === "divide" && num2 === 0) {
      alert("Cannot divide by zero.");
      return;
    }
  
    if (operation === "multiply") {
      result = num1 * num2;
    } else if (operation === "divide") {
      result = num1 / num2;
    }
  
    document.getElementById("result").textContent = "The Result Is: " + result;
  }