// Button variabless
let numberBtns = Array.from(document.getElementsByClassName("number"));
let btnAll = Array.from(document.getElementsByClassName("btn"));
let clearBtn = document.getElementById("clear");
let plusOrMinusBtn = document.getElementById("plusOrMinus");
let delBtn = document.getElementById("del")
// calc
let currentCalc = document.getElementById("currentCalc");
let previousCalc = document.getElementById("previousCalc");
// equal btn
let equal = document.getElementById("equal");

// Display screen Variables
let currentNum = '';
let previousNum= '';

  // operations
  let currentOperation = '';
  let operatorBtn = Array.from(document.getElementsByClassName("operation"));

// answer
let answer = null;

  // displays number on screen
  numberBtns.forEach(function(number) {
    number.addEventListener('click', () => {
      // checking for 1 decimal
      if(currentNum.toString().includes('.') && number.innerHTML.trim() == '.'){
        // passes code
      } else if(answer !== null && !currentOperation){
        currentNum = '';
        currentNum += number.innerHTML.trim();
        previousNum = '';
        currentCalc.innerHTML = currentNum;
        previousCalc.innerHTML = previousNum;
        answer = null;
      }else{
        currentNum += number.innerHTML.trim();
        currentCalc.innerHTML = currentNum;
      };
    });
  });


  // operator btns
  operatorBtn.forEach(function(operator){
    operator.addEventListener('click', ()=>{
      // evalute before 
      if(currentNum !== '') {
        if(previousNum !== '') {
          switch (currentOperation){
            case '+':
              answer = parseInt(previousNum) + parseInt(currentNum);
              break
            case '-': 
              answer = parseInt(previousNum) - parseInt(currentNum);
              break
            case '/': 
              if (currentNum === '0'){
                answer = 'Error: Divided by 0'
              } else {
                answer = parseInt(previousNum) / parseInt(currentNum);
              };
              break
            case 'X': 
              answer = parseInt(previousNum) * parseInt(currentNum);
              break
          };
        };
      };
      currentOperation = operator.innerHTML.trim();
      previousCalc.innerHTML = `${previousNum} ${currentOperation}`;
      if (currentNum === ''){
      } else{
        if (answer !== null){
          previousNum = answer;
          currentNum = '';
          previousCalc.innerHTML = `${previousNum}  ${currentOperation}`;
          currentCalc.innerHTML = currentNum;
        } else {
          previousNum = currentNum;
          currentNum = '';
          previousCalc.innerHTML = `${previousNum}  ${currentOperation}`;
          currentCalc.innerHTML = currentNum;
        }
        currentOperation = operator.innerHTML.trim();
        console.log({currentOperation});
        console.log({currentNum});
        console.log({previousNum, currentNum, answer})
      }
    }
  )}
);

// clear screen btn
clearBtn.addEventListener("click", ()=>{
  currentNum = '';
  previousNum = '';
  currentCalc.innerHTML = currentNum;
  previousCalc.innerHTML = previousNum;
  answer = null;
});

  // equal btn
equal.addEventListener("click", function(){
  if (previousNum === '' || currentNum === ''){
  } else {
    switch (currentOperation){
      case '+':
        answer = parseInt(previousNum) + parseInt(currentNum);
        break
      case '-': 
        answer = parseInt(previousNum) - parseInt(currentNum);
        break
      case '/': 
        if (currentNum === '0'){
          answer = 'Error: Divided by 0'
        } else {
          answer = parseInt(previousNum) / parseInt(currentNum);
        };
        break
      case 'X': 
        answer = parseInt(previousNum) * parseInt(currentNum);
        break
    };
    previousCalc.innerHTML = `${previousNum} ${currentOperation} ${currentNum} =`;
    currentCalc.innerHTML = answer;
    currentOperation = '';
    previousNum = answer;
  };
});

// plus or minus btn
plusOrMinusBtn.addEventListener("click", function(){
  currentNum = currentNum * -1;
  currentCalc.innerHTML = currentNum;
});

// delete btn
delBtn.addEventListener('click', function(){
  currentNum = answer;
  currentNum = currentCalc.innerHTML.toString().slice(0, -1);
  currentCalc.innerHTML  = currentNum;
  answer = currentCalc.innerHTML;
})
