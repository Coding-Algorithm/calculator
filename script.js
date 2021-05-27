let history = document.querySelector("#history")
let result = document.querySelector("#result")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let odResult = "";

function addComma(num){
  let n = num
  let value = n.toLocaleString("en");
  return value;
}

function removeComma(num){
  let number = num.replace(/,/g,"");
  return number
}

// Displays The Clicked Number Button
function displayResult() {
  if(result.textContent != NaN){
    if(this.id == ".") {
      result.textContent += "."
    }else{
  let Num = this.id;
  odResult += Num;
  newResult = Number(odResult)
  let formatedResult = addComma(newResult)
  result.textContent = formatedResult;
    }
  }
}

//Operations That Will be done upon clicking each operator
function operations(){
  if(this.id == "clr"){
    result.textContent = "";
    history.textContent = "";
    odResult = "";
  } else if(this.id == "del" ){
    if(result.textContent){
    let rawResult = removeComma(result.textContent)
    let deductedResult = rawResult.substr(0,rawResult.length - 1)
    let formatedResult = addComma(Number(deductedResult));
    result.textContent = formatedResult;
    }else{
      result.textContent = history.textContent 
      result.textContent = result.textContent.substr(0,(result.textContent).length - 1)
      history.textContent = "";
    }
  }else if(this.id == "equal"){
    finalResult = eval(removeComma(history.textContent) + removeComma(result.textContent))
    console.log(finalResult)
    console.log(typeof finalResult)
    result.textContent = addComma(finalResult);
    history.textContent = "";
    odResult = "";
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
      odResult = "";
  }
}

numbers.forEach(number => number.addEventListener("click", displayResult));

operators.forEach(operator => operator.addEventListener("click", operations))