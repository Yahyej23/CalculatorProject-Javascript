//Calculator

const text = document.getElementById("text");

//one parameter named input because we are passing in a character when we call this function
function appendToDisplay(input) {
  // all we do is take our element(text), access its value, append it with +=, our input
  text.value += input;
}

//this function clears the display on the calculator when user presses C
function clearCalc() {
  //we access the value of our element again, and set it equal to an empty string
  text.value = "";
}

//this function
function calculate() {
  // we surrounding the code with a try block, it will try the code and catch any errors. its dangerous code without it.
  try {
    // we take our property and set it equal to the eval function. (this function takes an expression and evaluates it, its like its own built in calculator.)
    text.value = eval(text.value);
  } catch (error) {
    //we will change the value to equal a string called error
    text.value = "Error";
  }
}
