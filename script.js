let history = document.querySelector("#history")
let result = document.querySelector("#result")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");


// Displays The Clicked Number Button
function displayResult() {
  if(result.textContent != NaN){
  let Num = parseInt(this.id)
  result.textContent += Num
  }
}

//Operations That Will be done upon clicking each operator
function operations(){
  if(this.id == "clr"){
    result.textContent = "";
    history.textContent = "";
  } else if(this.id == "del" ){
    if(result.textContent){
    result.textContent = result.textContent.substr(0,(result.textContent).length - 1)
    }else{
      result.textContent = history.textContent 
      result.textContent = result.textContent.substr(0,(result.textContent).length - 1)
      history.textContent = "";
    }
  }else if(this.id == "equal"){
    finalResult = eval(history.textContent + result.textContent)
    result.textContent = finalResult;
    history.textContent = "";
    }else{
      if(result.textContent){
      let newResult = result.textContent += this.id;
      
      //history.textContent = "";
      if(newResult){
      let newHistory = history.textContent += result.textContent;
        history.textContent = newHistory
       }
      }else{
         alert("You need to give some numbers first")
       }
      result.textContent = "";
  }
}

numbers.forEach(number => number.addEventListener("click", displayResult));

operators.forEach(operator => operator.addEventListener("click", operations))