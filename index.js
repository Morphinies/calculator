// добавление слушателя для каждой кнопки
for (let btn of document.getElementsByClassName("btn")) {
  btn.addEventListener("click", () => handleClick(btn.innerHTML));
}

// обработка нажатия кнопки
function handleClick(btn) {
  const res = document.getElementById("res-line");
  const expression = document.getElementById("expression");
  const resText = res.innerHTML;
  const regExp = /[\+\-\*\/]/g;

  const resetExpr = () => {
    res.innerHTML = "";
    expression.innerHTML = "";
  };

  const addSign = (sign) => {
    if (sign !== "-" && resText === "") {
      return;
    } else if (
      !regExp.test(resText) ||
      (resText[0] === "-" &&
        resText.match(regExp).length < 2 &&
        +resText.at(-1))
    ) {
      res.innerHTML += sign;
    }
  };

  const calcExpr = (expr) => {
    let res = Function("return " + expr)();
    return res;
  };

  switch (btn) {
    case "C":
      resetExpr();
      break;
    case "=":
      const resNumb = calcExpr(resText);
      res.innerHTML = resNumb;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      addSign(btn);
      break;
    default:
      res.innerHTML += btn;
  }
}
